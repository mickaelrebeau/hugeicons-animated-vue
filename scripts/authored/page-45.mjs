/**
 * Page 45 — message-outgoing → modern-tv-four-k.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * minimize-screen, minus-sign-circle, minus-sign. The hidden handcrafted
 * mic-01 sits in this span and is skipped too.
 *
 * Messages keep page 44's triple rule (bare: badge; -01: lines rewrite then
 * the alt badge; -02: dots type then the badge). Mics pick up sound;
 * minimize icons pull the arrow into the corner (the mirror of maximize);
 * minus-plus icons swap their signs; mobile screens act on their glyph.
 *
 * Identical-geometry pairs get different jobs: message-preview / -01,
 * message-search / -01, message-secure / -01, message-unlock / -01,
 * message-upload / -01, message-user / -01, mic-off / -01, mining / -01,
 * minimize / -01, minus-plus / -01, minus-plus-circle / -01,
 * minus-plus-square / -01, mobile-navigator / -01, mobile-programming / -01.
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
const lines = (o = {}) => retrace({ as: 'lines', dur: 0.6, ...o })
const typing = { as: 'dots', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.16, 0.32, 0.48, 0.64], ease: 'linear', dur: 0.8 }
/** Minimize: the arrow pulls into the corner and the frame shrinks a touch. */
const shrink = (c) => swell([22, 22], c, [1, 0.94, 1.02, 1, 1], { as: 'frame', delay: 0.1 })
const tuck = (o = {}) => nudge([6, 6], 1, 1, { as: 'arrow', ...o })
/** Swap: two signs trade places. */
const swap = (a, b) => [ride(a, [[0, 0], [b[0] - a[0], b[1] - a[1]], [b[0] - a[0], b[1] - a[1]], [0, 0], [0, 0]], { as: 'sign', ease: 'easeInOut', dur: 0.9 }), ride(b, [[0, 0], [a[0] - b[0], a[1] - b[1]], [a[0] - b[0], a[1] - b[1]], [0, 0], [0, 0]], { as: 'sign', ease: 'easeInOut', dur: 0.9 })]
const mic = (o = {}) => ride([12, 9], [[0, 0], [0, -0.6], [0, 0], [0, -0.4], [0, 0]], { as: 'mic', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7, ...o })

// ---------------------------------------------------------------------------

const specs = {
  'message-outgoing': {
    verb: 'the arrow leaves the bubble to the right',
    parts: [null, null, ride([18, 4.5], out(1.4, 0), { as: 'arrow' })],
  },
  'message-preview-01': {
    verb: 'the lines rewrite and the eye blinks',
    parts: [null, lines(), flex('Y', [17.5, 5], [17.5, 5], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5, delay: 0.2 }), null],
  },
  'message-preview': {
    verb: 'the eye looks around on the corner',
    parts: [null, null, null, ride([17.5, 5], [[0, 0], [-0.8, 0], [0.8, 0], [0, 0], [0, 0]], { as: 'pupil' })],
  },
  'message-preview-02': {
    verb: 'the dots type and the eye blinks',
    parts: [null, typing, null, flex('Y', [17.5, 5], [17.5, 5], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5, delay: 0.3 })],
  },
  'message-programming': {
    verb: 'the code brackets part and the slash flips inside the bubble',
    parts: [null, nudge([17, 10], 0.8, 0, { as: 'bracket' }), nudge([7, 10], -0.8, 0, { as: 'bracket' }), lap([12, 10], 180, { as: 'slash', dur: 0.7 })],
  },
  'message-question': {
    verb: 'the question mark tilts inside the bubble',
    parts: [null, around([12, 16], [12, 11.5], [0, -14, 10, -4, 0], { as: 'question' })],
  },
  'message-search-01': {
    verb: 'the lines rewrite and the magnifier scans',
    parts: [null, lines(), ride([18.5, 5.5], [[0, 0], [-0.8, -0.6], [0, -1], [0.4, -0.4], [0, 0]], { as: 'lens', delay: 0.2 })],
  },
  'message-search': {
    verb: 'the magnifier zooms on the corner',
    parts: [null, null, swell([22, 9], [18.5, 5.5], [1, 1.2, 0.95, 1.03, 1], { as: 'lens' })],
  },
  'message-search-02': {
    verb: 'the dots type and the magnifier zooms',
    parts: [null, typing, swell([22, 9], [18.5, 5.5], [1, 1.2, 0.95, 1.03, 1], { as: 'lens', delay: 0.3 })],
  },
  'message-secure-01': {
    verb: 'the lines rewrite and the shield hops',
    parts: [null, lines(), hop([18.5, 6], 1, { as: 'shield', delay: 0.2 })],
  },
  'message-secure': {
    verb: 'the shield stamps on the corner',
    parts: [null, null, stamp([18.5, 6], { as: 'shield' })],
  },
  'message-secure-02': {
    verb: 'the dots type and the shield stamps',
    parts: [null, typing, stamp([18.5, 6], { as: 'shield', delay: 0.3 })],
  },
  'message-square-code': {
    verb: 'the code brackets part inside the square bubble',
    parts: [null, nudge([8.5, 10.5], -1, 0, { as: 'bracket' }), nudge([15.5, 10.5], 1, 0, { as: 'bracket' })],
  },
  'message-square-dashed': {
    verb: 'the dashed bubble outline marches around',
    parts: [{ as: 'outline', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1.1 }],
  },
  'message-square-diff': {
    verb: 'the plus spins and the minus shrinks under it',
    parts: [null, lap([12, 9], 90, { as: 'plus', dur: 0.6 }), flex('X', [12, 14.5], [12, 14.5], [1, 0.3, 1.1, 1, 1], { as: 'minus', delay: 0.14 })],
  },
  'message-square-share': {
    verb: 'the share arrow shoots off the corner',
    parts: [ride([19.2, 5.3], out(1, -1), { as: 'arrow' }), null],
  },
  'message-translate': {
    verb: 'the glyph flips inside the bubble like a translation',
    parts: [null, flip([12, 12.5], 1, { as: 'glyph' })],
  },
  'message-unlock-01': {
    verb: 'the lines rewrite and the padlock swings open',
    parts: [null, around([21, 9], [18.5, 6.5], [0, 14, -4, 1, 0], { as: 'lock', delay: 0.2 }), lines()],
  },
  'message-unlock': {
    verb: 'the shackle lifts open on the corner',
    parts: [null, ride([18.5, 6.5], out(0, -1), { as: 'lock' }), null],
  },
  'message-unlock-02': {
    verb: 'the dots type and the shackle lifts',
    parts: [null, typing, ride([18.5, 6], out(0, -1), { as: 'lock', delay: 0.3 })],
  },
  'message-upload-01': {
    verb: 'the lines rewrite and the arrow hops',
    parts: [null, lines(), hop([19.5, 6], 1, { as: 'arrow', delay: 0.2 })],
  },
  'message-upload': {
    verb: 'the arrow lifts off the corner',
    parts: [null, null, ride([19.5, 6], out(0, -1.4), { as: 'arrow' })],
  },
  'message-upload-02': {
    verb: 'the dots type and the arrow lifts',
    parts: [null, typing, ride([19, 5.5], out(0, -1.4), { as: 'arrow', delay: 0.3 })],
  },
  'message-user-01': {
    verb: 'the lines rewrite and the person waves',
    parts: [null, around([18, 11.5], [18, 9.6], [0, -8, 6, -2, 0], { as: 'person', delay: 0.2 }), around([18, 11.5], [18, 4], [0, -8, 6, -2, 0], { as: 'person', delay: 0.2 }), lines()],
  },
  'message-user': {
    verb: 'the person on the corner pops up',
    parts: [null, ride([18, 9.6], out(0, -0.6), { as: 'body', delay: 0.06 }), hop([18, 4], 1.2, { as: 'head' }), null],
  },
  'message-user-02': {
    verb: 'the dots type and the person pops up',
    parts: [null, typing, hop([18, 4], 1.2, { as: 'head', delay: 0.3 }), ride([18, 7.5], out(0, -0.6), { as: 'body', delay: 0.36 })],
  },
  message: {
    verb: 'the bubble pops and its lines rewrite',
    parts: [lines({ delay: 0.1 }), pop(C, 1.05, { as: 'bubble' })],
  },
  messenger: {
    verb: 'the lightning zigzag redraws inside the bubble',
    parts: [retrace({ as: 'bolt' }), pop(C, 1.04, { as: 'bubble', delay: 0.2 })],
  },
  meta: {
    verb: 'the infinity loop traces through both halves',
    parts: [flex('X', [12, 12], [17.2, 12], [1, 1.1, 0.96, 1, 1], { as: 'loop', delay: 0.1 }), flex('X', [12, 12], [6.3, 12], [1, 1.1, 0.96, 1, 1], { as: 'loop' })],
  },
  metro: {
    verb: 'the train rocks along the rails',
    parts: [null, ride([12, 11], [[0, 0], [0, -0.5], [0, 0], [0, -0.5], [0, 0]], { as: 'train', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.6 }), ride([12, 11], [[0, 0], [0, -0.5], [0, 0], [0, -0.5], [0, 0]], { as: 'train', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.6 }), blink({ as: 'light' }), blink({ as: 'light', delay: 0.1 })],
  },

  // --- mics -----------------------------------------------------------------------------------
  'mic-02': {
    verb: 'the mic bobs in its stand',
    parts: [mic(), flex('X', [12, 16.5], [12, 16.5], [1, 1.06, 0.98, 1, 1], { as: 'stand', delay: 0.1 })],
  },
  'mic-off-01': {
    verb: 'the slash cuts across and the mic fades',
    parts: [draw({ as: 'slash' }), dim({ as: 'stand', delay: 0.1 }), dim({ as: 'mic', delay: 0.1 })],
  },
  'mic-off': {
    verb: 'the slash cuts across and the mic shivers',
    parts: [draw({ as: 'slash' }), null, shake([12, 9], { as: 'mic', delay: 0.16 })],
  },
  'mic-off-02': {
    verb: 'the slash cuts across and the stand drops',
    parts: [draw({ as: 'slash' }), ride([12, 16.5], out(0, 0.8), { as: 'stand', delay: 0.1 }), dim({ as: 'mic', delay: 0.1 })],
  },
  mic: {
    verb: 'the grille lines light up as it picks up sound',
    parts: [mic({ delay: 0.06 }), { as: 'grille', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, null],
  },
  microchip: {
    verb: 'the chip thinks: the pins blink and the core lines rewrite',
    parts: [null, blink({ as: 'pins' }), blink({ as: 'pins', delay: 0.1 }), retrace({ as: 'core' })],
  },
  microscope: {
    verb: 'the focus knob turns and the tube lowers',
    parts: [null, lap([11, 9.5], 180, { as: 'knob', dur: 0.8 }), null, null, ride([13.3, 8.8], out(0, 0.8), { as: 'tube' })],
  },
  'microsoft-admin': {
    verb: 'the shield stamps and its cross turns',
    parts: [stamp(C, { as: 'shield' }), lap(C, 90, { as: 'cross', dur: 0.6, delay: 0.1 })],
  },
  microsoft: {
    verb: 'the four tiles pop in a clockwise round',
    parts: [pop([17.8, 17.8], 1.12, { as: 'tile', delay: 0.24 }), pop([6.3, 6.3], 1.12, { as: 'tile' }), pop([6.3, 17.8], 1.12, { as: 'tile', delay: 0.36 }), pop([17.8, 6.3], 1.12, { as: 'tile', delay: 0.12 })],
  },
  microwave: {
    verb: 'the window glows and the dials click',
    parts: [shake([12, 11], { as: 'oven', dur: 0.5 }), { as: 'window', opacity: [1, 0.3, 1, 0.3, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, null, pop([19, 7.5], 3, { as: 'dial' }), pop([19, 11.5], 3, { as: 'dial', delay: 0.12 })],
  },
  'milk-bottle': {
    verb: 'the milk sloshes in the bottle',
    parts: [null, { as: 'milk', origin: [12, 14], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(6deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  'milk-carton': {
    verb: 'the carton spout opens and the milk sloshes',
    parts: [null, ride([13.5, 4.9], out(0, -1), { as: 'spout' }), null, { as: 'milk', origin: [15, 15], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(5deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  'milk-coconut': {
    verb: 'the coconut rolls beside the carton',
    parts: [null, lap([17.5, 17.5], 360, { as: 'coconut', dur: 0.9 })],
  },
  'milk-oat': {
    verb: 'the oat grain hops beside the carton',
    parts: [hop([17.5, 17.5], 1.2, { as: 'oat' }), null],
  },

  // --- minimize -------------------------------------------------------------------------------
  'minimize-01': {
    verb: 'the corner arrow tucks in and the frame shrinks',
    parts: [shrink([13.8, 12.7]), tuck()],
  },
  minimize: {
    verb: 'the arrow and the frame pull together and part',
    parts: [ride([13.8, 12.7], out(-0.6, -0.6), { as: 'frame' }), ride([6, 5.7], out(0.6, 0.6), { as: 'arrow' })],
  },
  'minimize-02': {
    verb: 'the arrow tucks in as the picture shrinks',
    parts: [shrink([13.4, 12.5]), tuck()],
  },
  'minimize-03': {
    verb: 'the arrow tucks in and the chart line redraws',
    parts: [retrace({ as: 'chart', delay: 0.1 }), tuck()],
  },
  'minimize-04': {
    verb: 'the arrow tucks in and the inner mark pops',
    parts: [pop([14, 12.9], 1.06, { as: 'mark', delay: 0.14 }), tuck()],
  },

  // --- mining ---------------------------------------------------------------------------------
  'mining-01': {
    verb: 'the cart rolls and the pick swings',
    parts: [lap([8, 19], 180, { as: 'wheel', dur: 0.8 }), around([11, 9], [9, 5.5], [0, -20, 8, -2, 0], { as: 'pick' }), around([11, 9], [16.9, 5.5], [0, -20, 8, -2, 0], { as: 'pick' }), lap([16, 19], 180, { as: 'wheel', dur: 0.8 }), ride([12, 13.5], out(1, 0), { as: 'cart', dur: 0.8 })],
  },
  mining: {
    verb: 'the pick strikes the cart full of ore',
    parts: [null, around([12, 10], [9, 5.5], [0, -14, 8, -1, 0], { as: 'pick', times: [0, 0.4, 0.56, 0.78, 1] }), around([12, 10], [16.9, 5.5], [0, -14, 8, -1, 0], { as: 'pick', times: [0, 0.4, 0.56, 0.78, 1] }), null, beat([12, 13.5], { as: 'cart', delay: 0.3 })],
  },
  'mining-02': {
    verb: 'the pickaxe swings and strikes',
    parts: [around([5, 19], [12.1, 11.9], [0, -16, 6, -1, 0], { as: 'pick', times: [0, 0.4, 0.56, 0.78, 1] })],
  },
  'mining-03': {
    verb: 'the pickaxe strikes and the coin pops',
    parts: [pop([18.5, 18], 1.2, { as: 'coin', delay: 0.3 }), around([5, 18], [11.4, 10.9], [0, -16, 6, -1, 0], { as: 'pick', times: [0, 0.4, 0.56, 0.78, 1] })],
  },

  // --- minus-plus -----------------------------------------------------------------------------
  'minus-plus-01': {
    verb: 'the plus spins and the minus shrinks above it',
    parts: [lap([12, 14], 90, { as: 'plus', dur: 0.6 }), flex('X', [12, 3], [12, 3], [1, 0.3, 1.1, 1, 1], { as: 'minus', delay: 0.1 })],
  },
  'minus-plus': {
    verb: 'the plus and the minus hop in turn',
    parts: [hop([12, 14], 1.2, { as: 'plus', delay: 0.12 }), hop([12, 3], 1.2, { as: 'minus' })],
  },
  'minus-plus-02': {
    verb: 'the minus and the plus trade places across the slash',
    parts: [lap([12, 12], 180, { as: 'slash', dur: 0.9 }), ...swap([17, 17], [7, 7])],
  },
  'minus-plus-circle-01': {
    verb: 'the signs flip inside the circle',
    parts: [flip(C, 1, { as: 'signs' }), null],
  },
  'minus-plus-circle': {
    verb: 'the signs turn half a turn inside the circle',
    parts: [lap(C, 180, { as: 'signs' }), null],
  },
  'minus-plus-circle-02': {
    verb: 'the slashed signs spin inside the circle',
    parts: [lap(C, 90, { as: 'signs', dur: 0.7 }), null],
  },
  'minus-plus-square-01': {
    verb: 'the signs flip inside the square',
    parts: [flip(C, 1, { as: 'signs' }), null],
  },
  'minus-plus-square': {
    verb: 'the signs pop inside the square',
    parts: [pop(C, 1.15, { as: 'signs' }), null],
  },
  'minus-plus-square-02': {
    verb: 'the slashed signs spin inside the square',
    parts: [null, lap(C, 90, { as: 'signs', dur: 0.7 })],
  },
  'minus-sign-square': {
    verb: 'the minus shrinks and springs inside the square',
    parts: [null, flex('X', C, C, [1, 0.3, 1.1, 1, 1], { as: 'minus' })],
  },
  mirror: {
    verb: 'the mirror glints and swings on its stand',
    parts: [around([12, 17], [12, 9.5], [0, -8, 6, -2, 0], { as: 'mirror' }), around([12, 17], [10.5, 5.5], [0, -8, 6, -2, 0], { as: 'shine' }), around([12, 17], [12, 7.5], [0, -8, 6, -2, 0], { as: 'shine' }), null, null, null],
  },
  'mirroring-screen': {
    verb: 'the cast arcs broadcast to the screen',
    parts: [wave([4, 20]), retrace({ as: 'screen', delay: 0.2 })],
  },
  mistral: {
    verb: 'the blocky M steps forward',
    parts: [{ as: 'logo', origin: [12, 19.5], transform: ['skewX(0deg)', 'skewX(-8deg)', 'skewX(3deg)', 'skewX(0deg)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.56 }],
  },
  mixer: {
    verb: 'the whisk spins in the bowl and the arm dips',
    parts: [around([4, 8.5], [11, 12], [0, 6, -2, 0, 0], { as: 'arm' }), null, null, shake([17.5, 18], { as: 'bowl', delay: 0.2, dur: 0.5 }), around([4, 8.5], [17.5, 13], [0, 6, -2, 0, 0], { as: 'arm' }), pop([17, 6], 2, { as: 'button' })],
  },

  // --- mobile ---------------------------------------------------------------------------------
  'mobile-navigator-01': {
    verb: 'the pin drops on the phone map',
    parts: [null, ride([12, 10.5], [[0, 0], [0, -1.6], [0, 0.4], [0, 0], [0, 0]], { as: 'pin', times: [0, 0.32, 0.56, 0.8, 1] }), ride([12, 10], [[0, 0], [0, -1.6], [0, 0.4], [0, 0], [0, 0]], { as: 'pin', times: [0, 0.32, 0.56, 0.8, 1] }), null],
  },
  'mobile-navigator': {
    verb: 'the pin pulses and the home dot answers',
    parts: [null, pop([12, 10.5], 1.12, { as: 'pin' }), pop([12, 10], 2, { as: 'dot', delay: 0.1 }), pop([12, 19], 2.4, { as: 'home', delay: 0.24 })],
  },
  'mobile-navigator-02': {
    verb: 'the pin tilts on the phone screen',
    parts: [null, null, around([12, 14.5], [12, 10.5], [0, -12, 8, -2, 0], { as: 'pin' }), around([12, 14.5], [12, 9.8], [0, -12, 8, -2, 0], { as: 'pin' })],
  },
  'mobile-programming-01': {
    verb: 'the code brackets part on the screen',
    parts: [null, null, nudge([17, 12], 0.8, 0, { as: 'bracket' }), nudge([7, 12], -0.8, 0, { as: 'bracket' }), null],
  },
  'mobile-programming': {
    verb: 'the slash flips between the brackets',
    parts: [null, null, null, null, lap(C, 180, { as: 'slash', dur: 0.7 })],
  },
  'mobile-programming-02': {
    verb: 'the brackets beside the phone push outward',
    parts: [null, null, nudge([18.8, 12], 1, 0, { as: 'bracket' }), nudge([5.3, 12], -1, 0, { as: 'bracket' })],
  },
  'mobile-protection': {
    verb: 'the shield stamps on the phone corner',
    parts: [null, stamp([16.5, 6], { as: 'shield' }), null],
  },
  'mobile-security': {
    verb: 'the padlock rattles on the phone corner',
    parts: [null, null, shake([16.5, 8.2], { as: 'lock' }), ride([16.5, 3.3], out(0, -0.8), { as: 'shackle' })],
  },
  mochi: {
    verb: 'the mochi wobbles and its face squints',
    parts: [{ as: 'mochi', origin: [15, 15], transform: ['scale(1, 1)', 'scale(1.06, 0.94)', 'scale(0.97, 1.03)', 'scale(1.02, 0.99)', 'scale(1, 1)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7 }, { as: 'mochi', origin: [9, 8.5], transform: ['scale(1, 1)', 'scale(1.06, 0.94)', 'scale(0.97, 1.03)', 'scale(1.02, 0.99)', 'scale(1, 1)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7, delay: 0.06 }, hop([7, 5.5], 0.6, { as: 'eye', delay: 0.1 }), hop([11, 5.5], 0.6, { as: 'eye', delay: 0.1 }), null],
  },
  'modern-tv-four-k': {
    verb: 'the 4K label flips on the screen',
    parts: [null, flip([8, 10], 1, { as: 'four' }), flip([16, 10], 1, { as: 'k', delay: 0.1 }), flex('X', [12, 20.5], [12, 20.5], [1, 0.8, 1.04, 1, 1], { as: 'stand', delay: 0.2 })],
  },
}

export default settleSpecs(specs)
