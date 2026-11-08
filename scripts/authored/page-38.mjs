/**
 * Page 38 — joker → lamp-03.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted key-01 sits in this span and is skipped.
 *
 * Joysticks tilt their stick. Justice scales tip their pans. Keyframes
 * (diamonds) slide toward their guide and the add/remove badges act.
 * Knives slice. Lamps switch on.
 *
 * Identical-geometry pairs get different jobs: joystick / joystick-01, jpg /
 * jpg-01, jsx / jsx-01, justice-scale / justice-scale-01, kaaba / kaaba-01,
 * kickstarter / kickstarter-01, knife / knife-01, knowledge / knowledge-01.
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
/** A joystick handle tilting around its base. */
const stick = (pivot, center, o = {}) => around(pivot, center, [0, -16, 14, -4, 0], { as: 'stick', dur: 0.8, ...o })
/** The beam and pans of a balance scale tipping around the pivot. */
const tilt = (deg, pivot = [12, 6]) => (c, o = {}) => around(pivot, c, [0, deg, -deg * 0.6, deg * 0.25, 0], { as: 'beam', dur: 0.9, ...o })
const pan = (dy, o = {}) => (c) => ride(c, [[0, 0], [0, dy], [0, -dy * 0.6], [0, dy * 0.25], [0, 0]], { as: 'pan', dur: 0.9, ...o })
/** A keyframe diamond. */
const gem = (c, o = {}) => lap(c, 90, { as: 'key', dur: 0.62, ...o })
/** A lamp that switches on with a soft burst of light. */
const glowUp = (cx, cy, r0, r1, o = {}) => ({ ...burst(rays(cx, cy, r0, r1, 6, 30)), delay: 0.1, ...o })

// ---------------------------------------------------------------------------

const specs = {
  joker: {
    verb: 'the jester hat bells jingle on their tips',
    parts: [hop([4, 5], 1.2, { as: 'bell' }), hop([20, 7], 1.2, { as: 'bell', delay: 0.1 }), around([8, 17], [5.7, 11], [0, -8, 6, -2, 0], { as: 'point' }), null, null, around([12, 17], [14.7, 11.6], [0, 8, -6, 2, 0], { as: 'point', delay: 0.06 })],
  },

  // --- joysticks ------------------------------------------------------------------------------
  'joystick-01': {
    verb: 'the stick tilts and the button is pressed',
    parts: [null, null, null, stick([10, 12], [11.3, 6.8])],
  },
  joystick: {
    verb: 'the base rumbles while the stick waggles',
    parts: [shake([12, 19.5], { as: 'base', dur: 0.5 }), null, null, around([10, 12], [11.3, 6.8], [0, -8, 8, -8, 0], { as: 'stick', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.6 })],
  },
  'joystick-02': {
    verb: 'the ball top tilts the stick on its base',
    parts: [stick([12, 14], [12, 5.5]), stick([12, 14], [12, 11.5]), null, null],
  },
  'joystick-03': {
    verb: 'the stick tilts and the side button clicks',
    parts: [stick([8, 16], [8, 5]), stick([8, 16], [8, 12]), ride([15.5, 13], out(0, 0.8), { as: 'button', delay: 0.2 }), null],
  },
  'joystick-04': {
    verb: 'the stick is pushed down into its dome',
    parts: [ride([12, 15], out(0, 0.6), { as: 'dome', delay: 0.06 }), null, ride([12, 5.5], out(0, 1.4), { as: 'ball' }), flex('Y', [12, 14.5], [12, 11.8], [1, 0.7, 1.06, 1, 1], { as: 'stick' })],
  },
  'joystick-05': {
    verb: 'the stick wobbles and the slot light blinks',
    parts: [stick([12, 16], [12, 5.5]), null, blink({ as: 'slot' }), stick([12, 16], [12, 12.5])],
  },

  // --- file labels -------------------------------------------------------------------------
  'jpg-01': {
    verb: 'the JPG label hops under the page',
    parts: [null, hop([12, 19], 1.2, { as: 'label' })],
  },
  jpg: {
    verb: 'the page lifts off its label',
    parts: [ride([12, 7.5], out(0, -1), { as: 'page' }), flex('X', [12, 19], [12, 19], [1, 0.9, 1.04, 1, 1], { as: 'label', delay: 0.14 })],
  },
  'jpg-02': {
    verb: 'the JPG label slides in from the right',
    parts: [null, ride([14, 16.5], out(1.4, 0), { as: 'label' })],
  },
  'jsx-01': {
    verb: 'the JSX letters hop in turn',
    parts: [null, hop([6.5, 15], 1, { as: 'letter' }), hop([17.3, 15], 1, { as: 'letter', delay: 0.2 }), hop([12, 15], 1, { as: 'letter', delay: 0.1 })],
  },
  jsx: {
    verb: 'the X spins while the J and S hold',
    parts: [null, null, lap([17.3, 15], 90, { as: 'x', dur: 0.6 }), null],
  },
  'jsx-02': {
    verb: 'the JSX label hops under the page',
    parts: [null, hop([12, 19], 1.2, { as: 'label' })],
  },
  'jsx-03': {
    verb: 'the JSX label slides in from the right',
    parts: [ride([14.5, 16.5], out(1.4, 0), { as: 'label' }), null],
  },

  // --- justice -------------------------------------------------------------------------------
  judge: {
    verb: 'the judge nods under the wig',
    parts: [null, around([12, 16], [12, 9], [0, 8, -4, 1, 0], { as: 'head' }), null],
  },
  jumpers: {
    verb: 'the sweater sleeves swing as it is shaken out',
    parts: [around([12, 3], [12, 14.5], [0, -4, 3, -1, 0], { as: 'body' }), around([7, 4], [5.3, 11.3], [0, 10, -6, 2, 0], { as: 'sleeve' }), around([17, 4], [18.8, 11.3], [0, -10, 6, -2, 0], { as: 'sleeve' }), null],
  },
  jupiter: {
    verb: 'the great red spot drifts across the planet',
    parts: [ride([8, 15], out(2, -0.4), { as: 'spot', dur: 0.9 }), null],
  },
  'justice-scale-01': {
    verb: 'the beam tips left and the pans follow',
    parts: [null, pan(1.2)([18.5, 10.5]), pan(-1.2)([5.5, 10.5]), tilt(-8)([12, 6.3]), pan(1.2)([18.5, 15]), pan(-1.2)([5.5, 15]), null],
  },
  'justice-scale': {
    verb: 'the scale settles: the knob drops and the pans bob',
    parts: [null, hop([18.5, 10.5], 0.8, { as: 'pan', delay: 0.12 }), hop([5.5, 10.5], 0.8, { as: 'pan', delay: 0.06 }), null, hop([18.5, 15], 0.8, { as: 'pan', delay: 0.12 }), hop([5.5, 15], 0.8, { as: 'pan', delay: 0.06 }), ride([12, 3.5], out(0, -1), { as: 'knob' })],
  },
  'justice-scale-02': {
    verb: 'the beam tips right and the pans follow',
    parts: [pan(-1.2)([18, 13.5]), pan(1.2)([6, 13.5]), tilt(8, [12, 7])([12, 7.7]), pan(-1.2)([18, 19.5]), pan(1.2)([6, 19.5]), null],
  },

  // --- kaaba, kanban, kayak ------------------------------------------------------------------
  'kaaba-01': {
    verb: 'the gold band shimmers across the cube',
    parts: [null, null, retrace({ as: 'band' }), { as: 'shimmer', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, null],
  },
  kaaba: {
    verb: 'the cube settles on the ground line',
    parts: [hop([12, 12], 0.8, { as: 'cube' }), flex('X', [12, 22], [12, 22], [1, 1.1, 0.96, 1, 1], { as: 'ground', delay: 0.2 }), hop([12, 8], 0.8, { as: 'cube' }), hop(C, 0.8, { as: 'cube' }), hop([12, 14.5], 0.8, { as: 'cube' })],
  },
  'kaaba-02': {
    verb: 'the door opens and the band dots flash',
    parts: [null, flex('X', [7, 18.5], [9.5, 18.5], [1, 0.2, 0.2, 1, 1], { as: 'door' }), null, null, null, null, { as: 'band', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }],
  },
  kanban: {
    verb: 'the three columns grow from the top, one after another',
    parts: [null, flex('Y', [12, 7], C, [1, 0.3, 1.08, 1, 1], { as: 'columns' })],
  },
  kayak: {
    verb: 'the paddle strokes on one side then the other',
    parts: [null, null, null, null, around(C, C, [0, 18, -18, 6, 0], { as: 'paddle', times: [0, 0.3, 0.7, 0.86, 1], ease: 'easeInOut', dur: 1 })],
  },
  keffiyeh: {
    verb: 'the scarf drapes and the band tightens',
    parts: [flex('X', [12, 5], [12, 5], [1, 0.8, 1.05, 1, 1], { as: 'band' }), null, around([12, 8], [12, 15], [0, -4, 3, -1, 0], { as: 'drape', delay: 0.1 })],
  },

  // --- kettles --------------------------------------------------------------------------------
  'kettle-01': {
    verb: 'the kettle boils: the lid rattles and the steam lifts',
    parts: [null, shake([13, 12.5], { as: 'kettle', dur: 0.5 }), ride([15.1, 9.5], [[0, 0], [0, -0.6], [0, 0], [0, -0.6], [0, 0]], { as: 'lid', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 }), retrace({ as: 'mark', delay: 0.1 }), ride([13, 2.5], out(0, -0.8), { as: 'knob' })],
  },
  kettle: {
    verb: 'the kettle tips to pour',
    parts: [around([18, 21], [10, 15], [0, -12, -12, 0, 0], { as: 'kettle' }), around([18, 21], [10, 7.5], [0, -12, -12, 0, 0], { as: 'kettle' }), around([18, 21], [20, 14], [0, -12, -12, 0, 0], { as: 'kettle' }), around([18, 21], [10, 7.3], [0, -12, -12, 0, 0], { as: 'kettle' }), around([18, 21], [7, 17], [0, -12, -12, 0, 0], { as: 'kettle' })],
  },
  kettlebell: {
    verb: 'the kettlebell is swung up and lands',
    parts: [hop([12, 5.3], 1.6, { as: 'bell' }), hop([12, 15], 1.6, { as: 'bell' }), hop([12, 16], 1.6, { as: 'bell' }), hop([12, 16], 1.6, { as: 'bell' })],
  },
  ketupat: {
    verb: 'the woven parcel swings from its knot',
    parts: [around([12, 5], [12, 13.5], [0, 8, -6, 2, 0], { as: 'parcel' }), around([12, 5], [12, 13.5], [0, 8, -6, 2, 0], { as: 'parcel' }), around([12, 5], [12, 3.5], [0, -8, 6, -2, 0], { as: 'knot' })],
  },

  // --- keys ---------------------------------------------------------------------------------
  'key-02': {
    verb: 'the key turns in the lock',
    parts: [around([8, 16], [15.5, 8.5], [0, 30, 24, 26, 0], { as: 'key' }), around([8, 16], [8, 16], [0, 30, 24, 26, 0], { as: 'key' }), around([8, 16], [16.5, 7.5], [0, 30, 24, 26, 0], { as: 'key' })],
  },
  'key-generator-fob': {
    verb: 'the fob screen shows a new code',
    parts: [null, flip([8, 6], 1, { as: 'code' }), null, retrace({ as: 'link', delay: 0.1 }), null, flex('X', [18, 16], [18, 16], [1, 0.3, 1.1, 1, 1], { as: 'slot', delay: 0.2 })],
  },
  key: {
    verb: 'the key jiggles in place',
    parts: [shake(C, { as: 'key' }), shake(C, { as: 'key' })],
  },
  keyboard: {
    verb: 'the keys are typed in turn and the space bar springs',
    parts: [null, around([13, 7], [13, 4.5], [0, -14, 10, -4, 0], { as: 'cable' }), ride([7.5, 12], out(0, 0.6), { as: 'key', dur: 0.36 }), ride([12, 12], out(0, 0.6), { as: 'key', dur: 0.36, delay: 0.1 }), ride([16.5, 12], out(0, 0.6), { as: 'key', dur: 0.36, delay: 0.2 }), ride([12, 17], out(0, 0.6), { as: 'space', dur: 0.4, delay: 0.32 })],
  },

  // --- keyframes ----------------------------------------------------------------------------
  'keyframe-add': {
    verb: 'the plus spins beside the diamond',
    parts: [hop([9, 14], 0.8, { as: 'key', delay: 0.16 }), lap([18.5, 5.5], 90, { as: 'plus', dur: 0.6 })],
  },
  'keyframe-align-center': {
    verb: 'the four guides pull in on the diamond',
    parts: [gem(C, { delay: 0.16 }), nudge([3.5, 12], 1, 0, { as: 'guide' }), nudge([20.5, 12], -1, 0, { as: 'guide' }), nudge([12, 20.5], 0, -1, { as: 'guide' }), nudge([12, 3.5], 0, 1, { as: 'guide' })],
  },
  'keyframe-align-horizontal': {
    verb: 'the diamond slides between the horizontal guides',
    parts: [ride(C, [[0, 0], [-2.4, 0], [2.4, 0], [0, 0], [0, 0]], { as: 'key', dur: 0.8 }), null, null],
  },
  'keyframe-align-vertical': {
    verb: 'the diamond slides between the vertical guides',
    parts: [ride(C, [[0, 0], [0, -2.4], [0, 2.4], [0, 0], [0, 0]], { as: 'key', dur: 0.8 }), null, null],
  },
  'keyframe-bottom': {
    verb: 'the diamond drops onto the bottom guide',
    parts: [ride([12, 8.5], out(0, 2), { as: 'key' }), beat([12, 18], { as: 'guide', delay: 0.2 })],
  },
  'keyframe-left': {
    verb: 'the diamond slides to the left guide',
    parts: [ride([15.5, 12], out(-2, 0), { as: 'key' }), beat([6, 12], { as: 'guide', delay: 0.2 })],
  },
  'keyframe-remove': {
    verb: 'the minus shrinks beside the diamond',
    parts: [null, flex('X', [18.5, 5], [18.5, 5], [1, 0.3, 1.1, 1, 1], { as: 'minus' })],
  },
  'keyframe-right': {
    verb: 'the diamond slides to the right guide',
    parts: [ride([8.5, 12], out(2, 0), { as: 'key' }), beat([18, 12], { as: 'guide', delay: 0.2 })],
  },
  'keyframe-top': {
    verb: 'the diamond rises to the top guide',
    parts: [ride([12, 15.5], out(0, -2), { as: 'key' }), beat([12, 6], { as: 'guide', delay: 0.2 })],
  },
  keyframe: {
    verb: 'the diamond turns a quarter',
    parts: [gem(C)],
  },
  'keyframes-double-add': {
    verb: 'the plus spins and the two diamonds step right',
    parts: [ride([18, 12], out(0.8, 0), { as: 'key', delay: 0.16 }), ride([11.5, 12], out(0.8, 0), { as: 'key', delay: 0.1 }), lap([5.5, 12], 90, { as: 'plus', dur: 0.6 })],
  },
  'keyframes-double-remove': {
    verb: 'the minus shrinks and the two diamonds step left',
    parts: [ride([18, 12], out(-0.8, 0), { as: 'key', delay: 0.16 }), ride([11.5, 12], out(-0.8, 0), { as: 'key', delay: 0.1 }), flex('X', [5.5, 12], [5.5, 12], [1, 0.3, 1.1, 1, 1], { as: 'minus' })],
  },
  'keyframes-double': {
    verb: 'the front diamond hops over the back one',
    parts: [ride([18, 12], out(-0.8, 0), { as: 'key', delay: 0.1 }), hop([9, 12], 1.2, { as: 'key' })],
  },
  'keyframes-multiple-add': {
    verb: 'the plus spins and the stack fans out',
    parts: [ride([10.3, 12], out(0.6, 0), { as: 'key', delay: 0.08 }), lap([5, 12], 90, { as: 'plus', dur: 0.6 }), ride([15.5, 12], out(1, 0), { as: 'key', delay: 0.14 }), ride([19.5, 12], out(1.4, 0), { as: 'key', delay: 0.2 })],
  },
  'keyframes-multiple-remove': {
    verb: 'the minus shrinks and the stack folds in',
    parts: [ride([10.3, 12], out(-0.4, 0), { as: 'key', delay: 0.2 }), flex('X', [5, 12], [5, 12], [1, 0.3, 1.1, 1, 1], { as: 'minus' }), ride([15.5, 12], out(-0.8, 0), { as: 'key', delay: 0.14 }), ride([19.5, 12], out(-1.2, 0), { as: 'key', delay: 0.08 })],
  },
  'keyframes-multiple': {
    verb: 'the stacked diamonds hop one after another',
    parts: [hop([8, 12], 1.2, { as: 'key' }), hop([15.5, 12], 1.2, { as: 'key', delay: 0.08 }), hop([19.5, 12], 1.2, { as: 'key', delay: 0.16 })],
  },

  // --- brands, kids ---------------------------------------------------------------------------
  'kickstarter-01': {
    verb: 'the K kicks forward',
    parts: [{ as: 'k', origin: [12.2, 21], transform: ['skewX(0deg)', 'skewX(-10deg)', 'skewX(4deg)', 'skewX(0deg)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.56 }],
  },
  kickstarter: {
    verb: 'the K hops',
    parts: [hop([12.2, 12], 1.2, { as: 'k' })],
  },
  'kickstarter-02': {
    verb: 'the K pops inside the square',
    parts: [pop([12.1, 12], 1.15, { as: 'k' }), null],
  },
  kid: {
    verb: 'the curl bounces and the kid grins',
    parts: [null, hop([13.8, 4.5], 1, { as: 'curl' }), flex('Y', [12, 10.8], [12, 10.8], [1, 0.2, 1, 1, 1], { as: 'eyes', dur: 0.5, delay: 0.1 }), flex('X', [12, 17], [12, 17], [1, 1.2, 0.95, 1.03, 1], { as: 'mouth', delay: 0.1 })],
  },
  kidneys: {
    verb: 'the two kidneys pulse and the tubes flow',
    parts: [pop([6.1, 8.5], 1.06, { as: 'kidney' }), retrace({ as: 'tube', delay: 0.1 }), null, pop([17.9, 8.5], 1.06, { as: 'kidney', delay: 0.06 }), null],
  },
  'kimi-ai': {
    verb: 'the K kicks and the dot pops',
    parts: [pop([20, 4.5], 1.6, { as: 'dot', delay: 0.14 }), { as: 'k', origin: [9.8, 20.5], transform: ['skewX(0deg)', 'skewX(-8deg)', 'skewX(3deg)', 'skewX(0deg)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.56 }],
  },
  kissing: {
    verb: 'the face blows a kiss and the heart floats away',
    parts: [null, null, null, flex('X', [10, 16], [11.8, 16], [1, 0.7, 1.08, 1, 1], { as: 'lips' }), ride([19, 16.9], [[0, 0], [1, -1.4], [1.4, -2], [0, 0], [0, 0]], { as: 'heart', delay: 0.1 })],
  },
  'kitchen-utensils': {
    verb: 'the fork, spoon and knife hop in turn',
    parts: [hop(C, 1, { as: 'utensil', delay: 0.1 }), hop([5, 12], 1, { as: 'utensil' }), hop([20, 12], 1, { as: 'utensil', delay: 0.2 })],
  },
  kite: {
    verb: 'the kite sways and its tail ribbons flutter',
    parts: [
      around([12, 14], [12, 8], [0, -8, 6, -2, 0], { as: 'kite' }),
      around([12, 14], [9.8, 16], [0, 12, -8, 3, 0], { as: 'tail', delay: 0.06 }),
      around([12, 14], [11.2, 18], [0, 12, -8, 3, 0], { as: 'tail', delay: 0.1 }),
      around([12, 14], [13.5, 16.5], [0, 12, -8, 3, 0], { as: 'tail', delay: 0.14 }),
      around([12, 14], [12, 8], [0, -8, 6, -2, 0], { as: 'kite' }),
      around([12, 14], [12, 6.6], [0, -8, 6, -2, 0], { as: 'kite' }),
    ],
  },
  klarna: {
    verb: 'the K kicks out and the dot hops',
    parts: [hop([20, 18.5], 1.2, { as: 'dot', delay: 0.14 }), null, around([6, 12.5], [11.3, 12], [0, -10, 4, -1, 0], { as: 'k' })],
  },

  // --- knives -----------------------------------------------------------------------------------
  'knife-01': {
    verb: 'the knife slices down and back',
    parts: [ride([11.9, 12.1], [[0, 0], [-1, 1], [1, -0.4], [0, 0], [0, 0]], { as: 'knife' }), ride([18, 8], [[0, 0], [-1, 1], [1, -0.4], [0, 0], [0, 0]], { as: 'knife' })],
  },
  knife: {
    verb: 'the blade glints',
    parts: [null, pop([18, 8], 2.4, { as: 'rivet', delay: 0.1 })],
    extras: [{ ...glint(15, 9, 1.4), delay: 0.1 }],
  },
  'knife-02': {
    verb: 'the knife chops twice',
    parts: [ride([12.3, 12], [[0, 0], [0, 1], [0, 0], [0, 1], [0, 0]], { as: 'knife', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 })],
  },
  'knife-bread': {
    verb: 'the bread knife saws back and forth',
    parts: [ride([11.9, 12], [[0, 0], [-1.2, 1.2], [1.2, -1.2], [-0.6, 0.6], [0, 0]], { as: 'knife', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  'knight-shield': {
    verb: 'the shield braces and the bend sinister redraws',
    parts: [draw({ as: 'bend', delay: 0.1 }), stamp(C, { as: 'shield' })],
  },
  knives: {
    verb: 'the knives cross like sharpening blades',
    parts: [ride([16.6, 6.1], out(-0.8, 0.8), { as: 'knife' }), ride([19.4, 9], out(-0.8, 0.8), { as: 'knife' }), ride([10, 14.5], out(0.8, -0.8), { as: 'knife', delay: 0.06 })],
  },
  'knowledge-01': {
    verb: 'the lightbulb idea glows over the book',
    parts: [null, pop([11.8, 9], 1.1, { as: 'bulb' })],
    extras: [glowUp(11.8, 7, 6.5, 8)],
  },
  knowledge: {
    verb: 'the book page flips under the idea',
    parts: [flip([12, 19], 1, { as: 'book' }), hop([11.8, 9], 0.8, { as: 'bulb', delay: 0.14 })],
  },
  'knowledge-02': {
    verb: 'the glasses push up over the open book',
    parts: [ride([7, 7], out(0, -0.8), { as: 'lens' }), ride([2.8, 6], out(0, -0.8), { as: 'arm' }), ride([21.3, 6], out(0, -0.8), { as: 'arm' }), ride([17, 7], out(0, -0.8), { as: 'lens' }), ride([12, 5.3], out(0, -0.8), { as: 'bridge' }), null, flip([19, 17], 1, { as: 'page', delay: 0.1 })],
  },
  'ko-fi': {
    verb: 'the heart beats in the cup and the handle answers',
    parts: [null, hop([17.8, 10.5], 0.6, { as: 'handle', delay: 0.2 }), { as: 'heart', origin: [9, 11.9], transform: ['scale(1)', 'scale(1.2)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut', dur: 0.72 }],
  },
  'kurta-01': {
    verb: 'the kurta sways and the placket redraws',
    parts: [around([12, 2], C, [0, -4, 3, -1, 0], { as: 'kurta' }), around([12, 2], C, [0, -4, 3, -1, 0], { as: 'kurta' }), draw({ as: 'placket', delay: 0.1 })],
  },
  kurta: {
    verb: 'the buttons pop down the placket',
    parts: [null, null, null, draw({ as: 'placket' }), pop([12.5, 10.3], 1.4, { as: 'buttons', delay: 0.16 })],
  },
  'label-important': {
    verb: 'the label pushes forward like an arrow',
    parts: [nudge([11.9, 12], 1.6, 0, { as: 'label' })],
  },
  label: {
    verb: 'the tag swings on its point',
    parts: [around([22, 12], C, [0, -8, 6, -2, 0], { as: 'label' })],
  },
  labor: {
    verb: 'the worker tips the hard hat',
    parts: [null, null, null, hop([12, 8], 0.6, { as: 'head', delay: 0.1 }), ride([12, 7.5], out(0, -1.2), { as: 'brim' }), ride([12, 2.8], out(0, -1.2), { as: 'brim' })],
  },
  labs: {
    verb: 'the liquid in the tube swirls and the flask bubbles',
    parts: [null, null, null, shake([6, 15.5], { as: 'flask', delay: 0.1 }), { as: 'liquid', origin: [17.5, 10.9], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(6deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  lake: {
    verb: 'the ripples drift and the sun rises over the reeds',
    parts: [ride([12, 21.5], out(1, 0), { as: 'ripple', dur: 0.8, delay: 0.1 }), ride([12, 17.5], out(-1, 0), { as: 'ripple', dur: 0.8 }), null, around([6, 14], [6, 8.5], [0, -8, 6, -2, 0], { as: 'reed' }), ride([17.5, 4.5], out(0, -1), { as: 'sun' })],
  },

  // --- lamps ----------------------------------------------------------------------------------
  'lamp-01': {
    verb: 'the pendant lamp swings and the light rays flash',
    parts: [
      around([12, 2], [12, 10], [0, 8, -6, 2, 0], { as: 'lamp' }),
      around([12, 2], [12, 14.5], [0, 8, -6, 2, 0], { as: 'lamp' }),
      around([12, 2], [12, 13], [0, 8, -6, 2, 0], { as: 'lamp' }),
      around([12, 2], [12, 4.5], [0, 8, -6, 2, 0], { as: 'lamp' }),
      { as: 'rays', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 },
    ],
  },
  'lamp-02': {
    verb: 'the lamp clicks on: the bulb drops and the rays blink',
    parts: [null, ride([12, 14.5], out(0, 0.6), { as: 'bulb' }), pop([12, 20.5], 1.15, { as: 'rays', delay: 0.14 }), flex('Y', [12, 2], [12, 4.5], [1, 1.2, 0.96, 1, 1], { as: 'cord' })],
  },
  'lamp-03': {
    verb: 'the pull chain is tugged and the shade lights',
    parts: [pop([12, 6], 1.05, { as: 'shade', delay: 0.2 }), null, null, null, flex('Y', [15.5, 10], [15.5, 11.5], [1, 1.4, 0.9, 1.04, 1], { as: 'chain' })],
    extras: [glowUp(12, 6, 7, 8.5, { delay: 0.24 })],
  },
}

export default settleSpecs(specs)
