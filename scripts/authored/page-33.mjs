/**
 * Page 33 — glove → gymnastic-rings.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted grid-view sits in this span and is skipped.
 *
 * Skip buttons wind their arrow back or forward and the seconds react.
 * GPS targets lock on: the ticks pull in, the center pops. Grids slide
 * their rails. Gold ingots stack and shine. Grips shuffle their dots.
 *
 * Identical-geometry pairs get different jobs: gps-off / gps-off-01,
 * gps-signal / gps-signal-01, geometric skip pairs (backward vs forward).
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
/** The skip arrow winds around the dial by `deg` and settles back. */
const wind = (deg, o = {}) => around(C, C, [0, deg, -deg * 0.12, deg * 0.04, 0], { as: 'dial', ...o })
/** GPS ticks pull in toward the center, then return. */
const tick = (dx, dy, o = {}) => ride([12 - dx * 9, 12 - dy * 9], out(dx, dy), { as: 'tick', ...o })
const ticks = (o = {}) => [tick(-1, 0, o), tick(1, 0, o), tick(0, 1, o), tick(0, -1, o)]
const grin = (o = {}) => flex('X', [12, 15], [12, 15], [1, 1.2, 0.95, 1.03, 1], { as: 'mouth', ...o })

// ---------------------------------------------------------------------------

const specs = {
  glove: {
    verb: 'the glove makes a fist: it squeezes and opens again',
    parts: [swell([12, 21], [12.1, 12], [1, 0.9, 1.04, 1, 1], { as: 'glove' }), flex('X', [12, 17], [15.5, 17], [1, 0.6, 1.08, 1, 1], { as: 'seam', delay: 0.06 })],
  },
  gnome: {
    verb: 'the gnome tips his hat and the beard wags',
    parts: [around([12, 13], [12, 7.5], [0, -14, 8, -3, 0], { as: 'hat' }), null, around([12, 13], [12, 17.5], [0, 6, -4, 1, 0], { as: 'beard', delay: 0.1 })],
  },

  // --- skip back / forward ------------------------------------------------------------------
  'go-backward-10-sec': {
    verb: 'the dial winds back and the 10 steps left',
    parts: [wind(-50), ride([8.8, 12.9], out(-1, 0), { as: 'digit', delay: 0.06 }), ride([14.2, 13], out(-1, 0), { as: 'digit', delay: 0.1 })],
  },
  'go-backward-15-sec': {
    verb: 'the arrow rewinds a full lap and the 15 pops',
    parts: [lap(C, -360, { as: 'dial' }), pop([8.8, 12.9], 1.2, { as: 'digit', delay: 0.3 }), pop([14.3, 13.1], 1.2, { as: 'digit', delay: 0.36 })],
  },
  'go-backward-30-sec': {
    verb: 'the dial winds back and the 30 flips',
    parts: [wind(-70, { dur: 0.8 }), flip([15, 13], 1, { as: 'digit', delay: 0.1 }), flip([9, 13], 1, { as: 'digit', delay: 0.1 })],
  },
  'go-backward-60-sec': {
    verb: 'the arrow rewinds a long lap while the 60 rewrites',
    parts: [lap(C, -360, { as: 'dial', dur: 1.1 }), sweep({ as: 'digit', delay: 0.2 }), sweep({ as: 'digit', delay: 0.1 })],
  },
  'go-backward-five-sec': {
    verb: 'the dial ticks back a little and the 5 hops',
    parts: [wind(-30, { dur: 0.6 }), hop([12, 13], 1.2, { as: 'digit', delay: 0.1 })],
  },
  'go-forward-10-sec': {
    verb: 'the dial winds forward and the 10 steps right',
    parts: [wind(50), ride([8.8, 12.9], out(1, 0), { as: 'digit', delay: 0.1 }), ride([14.2, 13], out(1, 0), { as: 'digit', delay: 0.06 })],
  },
  'go-forward-15-sec': {
    verb: 'the arrow skips a full lap forward and the 15 pops',
    parts: [lap(C, 360, { as: 'dial' }), pop([8.8, 12.9], 1.2, { as: 'digit', delay: 0.36 }), pop([14.3, 13.1], 1.2, { as: 'digit', delay: 0.3 })],
  },
  'go-forward-30-sec': {
    verb: 'the dial winds forward and the 30 flips',
    parts: [wind(70, { dur: 0.8 }), flip([15, 13], 1, { as: 'digit', delay: 0.1 }), flip([9, 13], 1, { as: 'digit', delay: 0.16 })],
  },
  'go-forward-60-sec': {
    verb: 'the arrow skips a long lap while the 60 rewrites',
    parts: [lap(C, 360, { as: 'dial', dur: 1.1 }), sweep({ as: 'digit', delay: 0.1 }), sweep({ as: 'digit', delay: 0.2 })],
  },
  'go-forward-five-sec': {
    verb: 'the dial ticks forward a little and the 5 squashes',
    parts: [wind(30, { dur: 0.6 }), flex('Y', [12, 16], [12, 13], [1, 0.8, 1.1, 1, 1], { as: 'digit', delay: 0.1 })],
  },

  // --- gold, golf, google -------------------------------------------------------------------
  goal: {
    verb: 'the dart flies into the target and it shakes',
    parts: [beat([12, 12.1], { as: 'ring', delay: 0.26 }), shake(C, { as: 'board', delay: 0.26, dur: 0.4 }), ride([18, 6], out(-1.4, 1.4), { as: 'dart' }), ride([13.3, 10.8], out(-1.4, 1.4), { as: 'dart' })],
  },
  'gold-buy': {
    verb: 'the coin drops in and the arrow points down into it',
    parts: [beat(C, { as: 'stack', delay: 0.2 }), beat(C, { as: 'stack', delay: 0.24 }), ride([19, 19.5], out(0, 1.2), { as: 'arrow' }), fall(C, 0, 4, { as: 'coin' })],
  },
  'gold-ingots': {
    verb: 'the top ingot drops onto the stack and the bottom row answers',
    parts: [ride([8, 16], out(0, 0.5), { as: 'ingot', delay: 0.22 }), ride([18.4, 16], out(0, 0.5), { as: 'ingot', delay: 0.26 }), ride([12, 6.5], out(0, -1.8), { as: 'ingot' })],
  },
  'gold-sell': {
    verb: 'the arrow rises and the coin flips out',
    parts: [ride([19, 4.5], out(0, -1.2), { as: 'arrow' }), flip(C, 1, { as: 'coin', delay: 0.1 }), null],
  },
  gold: {
    verb: 'the pile of ingots glints and the shine lines flash',
    parts: [null, hop([12, 11], 0.8, { as: 'ingot' }), null, { as: 'shine', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }],
  },
  'golf-ball': {
    verb: 'the ball wobbles on the tee and spins',
    parts: [around([12, 16], [12, 9], [0, -8, 6, -2, 0], { as: 'ball' }), null, around([12, 16], [10, 7], [0, -8, 6, -2, 0], { as: 'ball' })],
  },
  'golf-bat': {
    verb: 'the club swings back and strikes the ball',
    parts: [
      around([18.3, 4], [7.3, 19], [0, 30, -8, 2, 0], { as: 'club', times: [0, 0.4, 0.58, 0.8, 1] }),
      around([18.3, 4], [14.3, 15.5], [0, 30, -8, 2, 0], { as: 'club', times: [0, 0.4, 0.58, 0.8, 1] }),
      null,
    ],
  },
  'golf-cart': {
    verb: 'the cart rolls on its wheels and the clubs rattle',
    parts: [
      ride([12, 15.5], [[0, 0], [0, -0.4], [0, 0], [0, -0.3], [0, 0]], { as: 'body', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 }),
      lap([6, 19], 360, { as: 'wheel', dur: 0.7 }),
      lap([18, 19], 360, { as: 'wheel', dur: 0.7 }),
      null,
      null,
      null,
      shake([14.5, 12], { as: 'clubs' }),
      null,
    ],
  },
  'golf-hole': {
    verb: 'the flag waves over the hole',
    parts: [null, around([11, 19], [15.7, 10.2], [0, -6, 4, -2, 0], { as: 'flag', dur: 0.8 })],
  },
  'google-doc': {
    verb: 'the text lines rewrite in the doc',
    parts: [null, null, retrace({ as: 'lines' })],
  },
  'google-drive': {
    verb: 'the three folds of the drive triangle redraw in turn',
    parts: [pop([12, 12], 1.05, { as: 'drive', delay: 0.3 }), draw({ as: 'fold' }), draw({ as: 'fold', delay: 0.1 }), draw({ as: 'fold', delay: 0.2 })],
  },
  'google-gemini': {
    verb: 'the four-point star turns a quarter and glints',
    parts: [lap(C, 90, { as: 'star', dur: 0.7 })],
  },
  'google-home': {
    verb: 'the speaker lights up its rim as it listens',
    parts: [beat([12, 21], { as: 'speaker', delay: 0.14 }), { as: 'light', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }],
  },
  'google-lens': {
    verb: 'the lens focuses and the corner dot flashes',
    parts: [null, ride([12, 3.8], out(0, -0.6), { as: 'top' }), swell(C, [12, 13], [1, 0.7, 1.12, 1, 1], { as: 'lens' }), pop([19, 19], 1.5, { as: 'dot', delay: 0.2 })],
  },
  'google-maps': {
    verb: 'the pin hops and the route lines redraw',
    parts: [pop([12, 9], 1.25, { as: 'dot', delay: 0.2 }), draw({ as: 'road', delay: 0.1 }), draw({ as: 'road' }), draw({ as: 'road', delay: 0.16 }), hop([12, 12], 1.2, { as: 'pin' })],
  },
  'google-photos': {
    verb: 'the four petals spin around the center',
    parts: [lap(C, 90, { as: 'petal' }), lap(C, 90, { as: 'petal' }), lap(C, 90, { as: 'petal' }), lap(C, 90, { as: 'petal' })],
  },
  'google-sheet': {
    verb: 'the cell grid fills from the center line',
    parts: [null, null, flex('Y', [12, 11], [12, 14], [1, 0.2, 1.05, 1, 1], { as: 'cells' })],
  },
  google: {
    verb: 'the G turns once inside its circle',
    parts: [null, lap(C, -360, { as: 'g' })],
  },

  // --- gps -----------------------------------------------------------------------------------
  'gps-01': {
    verb: 'the target locks: the ticks pull in and the center pops',
    parts: [null, ...ticks(), pop(C, 1.3, { as: 'center', delay: 0.2 })],
  },
  'gps-02': {
    verb: 'the crosshair ring tightens and the ticks pulse',
    parts: [swell(C, C, [1, 0.88, 1.04, 1, 1], { as: 'ring' }), ...ticks({ delay: 0.1 })],
  },
  'gps-disconnected': {
    verb: 'the X rattles and the signal arc flickers out',
    parts: [shake([19, 5], { as: 'x' }), dim({ as: 'arc', delay: 0.1 }), null],
  },
  'gps-off-01': {
    verb: 'the slash cuts across and the ring fades',
    parts: [dim({ as: 'ring', delay: 0.1 }), null, null, null, null, draw({ as: 'slash' }), dim({ as: 'ring', delay: 0.1 })],
  },
  'gps-off': {
    verb: 'the ticks fall away as the slash cuts across',
    parts: [null, ride([21.5, 12], out(0.8, 0), { as: 'tick', delay: 0.1 }), ride([2.5, 12], out(-0.8, 0), { as: 'tick', delay: 0.1 }), ride([12, 2.5], out(0, -0.8), { as: 'tick', delay: 0.1 }), ride([12, 21.5], out(0, 0.8), { as: 'tick', delay: 0.1 }), draw({ as: 'slash' }), null],
  },
  'gps-off-02': {
    verb: 'the center X rattles inside the target',
    parts: [null, shake(C, { as: 'x' }), null, null, null, null],
  },
  'gps-signal-01': {
    verb: 'the dish wobbles and the signal arc beams out',
    parts: [null, around([9.6, 14.4], [9.6, 14.4], [0, -8, 5, -2, 0], { as: 'dish' }), wave([18.5, 5.5])],
  },
  'gps-signal-02': {
    verb: 'the dish sends two signal dots outward',
    parts: [null, null, pop([20.8, 3.3], 3, { as: 'dot', delay: 0.2 }), pop([17.3, 6.8], 3, { as: 'dot' })],
  },
  'gps-signal': {
    verb: 'the receiving arm pulses and the arc beams',
    parts: [pop([12.2, 11.8], 1.2, { as: 'arm' }), null, wave([18.5, 5.5], { delay: 0.1 })],
  },
  gps: {
    verb: 'the target spins a quarter and the center locks',
    parts: [lap(C, 90, { as: 'ring', dur: 0.7 }), lap(C, 90, { as: 'ring', dur: 0.7 }), lap(C, 90, { as: 'ring', dur: 0.7 }), lap(C, 90, { as: 'ring', dur: 0.7 }), lap(C, 90, { as: 'ring', dur: 0.7 }), pop(C, 1.3, { as: 'center', delay: 0.4 })],
  },
  gpu: {
    verb: 'the fan spins and the slot lights blink',
    parts: [null, null, lap([16, 11.5], 360, { as: 'fan', dur: 0.8 }), blink({ as: 'lights' })],
  },

  // --- graduation ---------------------------------------------------------------------------
  'graduate-female': {
    verb: 'the cap is tossed up and the tassel swings',
    parts: [hop([12, 11.3], 0.8, { as: 'band', delay: 0.04 }), null, null, null, ride([12, 6], [[0, 0], [0, -2], [0, 0.2], [0, 0], [0, 0]], { as: 'cap' })],
  },
  'graduate-male': {
    verb: 'the graduate nods under the cap',
    parts: [around([12, 13], [12, 11.3], [0, 8, -4, 1, 0], { as: 'head' }), around([12, 13], [12, 17.6], [0, 4, -2, 0, 0], { as: 'body', delay: 0.04 }), around([12, 13], [12, 6], [0, 8, -4, 1, 0], { as: 'head' })],
  },
  'graduation-cap': {
    verb: 'the tassel swings beside the cap',
    parts: [around([22, 9], [22, 12], [0, -18, 12, -4, 0], { as: 'tassel' }), null, hop([12, 9], 0.8, { as: 'cap', delay: 0.06 })],
  },
  'graduation-scroll': {
    verb: 'the scroll unrolls and the ribbon flutters',
    parts: [flex('X', [12, 11], [12, 11], [1, 1.08, 0.97, 1, 1], { as: 'scroll' }), retrace({ as: 'ribbon', delay: 0.1 }), around([13.8, 14], [13.8, 17.5], [0, -10, 6, -2, 0], { as: 'tail', delay: 0.1 })],
  },

  // --- grapes, graphics ---------------------------------------------------------------------
  grape: {
    verb: 'the grapes swing on their stem',
    parts: [
      around([12, 6], [12, 17.9], [0, -8, 6, -2, 0], { as: 'bunch' }),
      around([12, 6], [8.5, 11.9], [0, -8, 6, -2, 0], { as: 'bunch' }),
      around([12, 6], [15.5, 11.9], [0, -8, 6, -2, 0], { as: 'bunch' }),
      around([12, 10], [15.5, 5.9], [0, 10, -6, 2, 0], { as: 'leaf' }),
      null,
    ],
  },
  grapes: {
    verb: 'the grapes pop one by one from the top row down',
    parts: [pop([12, 20], 1.15, { as: 'grape', delay: 0.3 }), pop([9, 15.5], 1.15, { as: 'grape', delay: 0.2 }), pop([15, 15.5], 1.15, { as: 'grape', delay: 0.24 }), pop([18, 10], 1.15, { as: 'grape', delay: 0.14 }), pop([12, 10], 1.15, { as: 'grape', delay: 0.1 }), pop([6, 10], 1.15, { as: 'grape', delay: 0.06 }), around([12, 7], [14, 4.5], [0, -14, 8, -3, 0], { as: 'stem' })],
  },
  'graphic-card': {
    verb: 'the fan spins and the card pushes into its slot',
    parts: [null, null, null, null, blink({ as: 'led' }), lap([15, 11], 360, { as: 'fan', dur: 0.8 })],
  },
  gravity: {
    verb: 'the ball drops on its line and bounces',
    parts: [ride([12, 16], [[0, 0], [0, 1.6], [0, -0.6], [0, 0.2], [0, 0]], { as: 'ball', times: [0, 0.3, 0.56, 0.8, 1], ease: ['easeIn', 'easeOut', 'easeIn', 'easeOut'] }), null, flex('Y', [12, 2], [12, 4.8], [1, 1.3, 0.9, 1.05, 1], { as: 'string', times: [0, 0.3, 0.56, 0.8, 1] })],
  },
  'greater-than-circle': {
    verb: 'the > points right inside the circle',
    parts: [nudge([12.1, 12], 1.2, 0, { as: 'chevron' }), null],
  },
  'greater-than-square': {
    verb: 'the > sharpens: it narrows and snaps back inside the square',
    parts: [null, flex('Y', [12.1, 12], [12.1, 12], [1, 0.7, 1.1, 1, 1], { as: 'chevron' })],
  },
  'greater-than': {
    verb: 'the > opens its jaws and bites to the right',
    parts: [{ ...flex('Y', [16, 12], [12.3, 12], [1, 1.25, 0.8, 1.04, 1], { as: 'chevron' }), times: [0, 0.3, 0.5, 0.76, 1] }],
  },
  'greek-helmet': {
    verb: 'the crest waves on the helmet',
    parts: [{ as: 'crest', origin: [12, 19], transform: ['skewX(0deg)', 'skewX(-8deg)', 'skewX(6deg)', 'skewX(-2deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, hop([14.5, 15.2], 0.6, { as: 'helmet', delay: 0.06 })],
  },
  'green-house': {
    verb: 'the greenhouse sprouts: it grows from the ground',
    parts: [{ ...flex('Y', [12, 22], [12, 12.1], [1, 0.86, 1.06, 1, 1], { as: 'house' }) }],
  },

  // --- grids --------------------------------------------------------------------------------
  'grid-02': {
    verb: 'the rails slide apart in both directions and close',
    parts: [nudge([6, 12], -1, 0, { as: 'rail' }), nudge([18, 12], 1, 0, { as: 'rail' }), nudge([12, 7], 0, -1, { as: 'rail', delay: 0.08 }), nudge([12, 17], 0, 1, { as: 'rail', delay: 0.08 })],
  },
  'grid-2-x2-check': {
    verb: 'the check ticks the missing cell',
    parts: [null, null, null, draw({ as: 'check' })],
  },
  'grid-2-x2-plus': {
    verb: 'the plus turns in the missing cell',
    parts: [null, null, null, lap([18.5, 18.5], 90, { as: 'plus', dur: 0.6 })],
  },
  'grid-2-x2-x': {
    verb: 'the X rattles in the missing cell',
    parts: [shake([18.8, 18.8], { as: 'x' }), null, null, null],
  },
  'grid-2-x2': {
    verb: 'the dividers draw across the square, one then the other',
    parts: [null, draw({ as: 'divider' }), draw({ as: 'divider', delay: 0.14 })],
  },
  'grid-3-x2': {
    verb: 'the cells inside the frame squeeze and spring',
    parts: [flex('X', C, C, [1, 0.8, 1.06, 1, 1], { as: 'lines' }), null],
  },
  'grid-3-x3': {
    verb: 'the inner lines rewrite the tic-tac-toe grid',
    parts: [retrace({ as: 'lines' }), null],
  },
  'grid-off': {
    verb: 'the slash cuts across and the grid fades',
    parts: [dim({ as: 'line', delay: 0.1 }), dim({ as: 'line', delay: 0.1 }), draw({ as: 'slash' }), dim({ as: 'line', delay: 0.1 })],
  },
  'grid-table': {
    verb: 'the table lines draw in: columns, then rows',
    parts: [null, draw({ as: 'column' }), draw({ as: 'column', delay: 0.08 }), draw({ as: 'row', delay: 0.16 }), draw({ as: 'row', delay: 0.24 })],
  },
  grid: {
    verb: 'the hash rails pinch together and spring out',
    parts: [nudge([7, 12], 1, 0, { as: 'rail' }), nudge([17, 12], -1, 0, { as: 'rail' }), nudge([12, 7], 0, 1, { as: 'rail', delay: 0.08 }), nudge([12, 17], 0, -1, { as: 'rail', delay: 0.08 })],
  },

  // --- faces, grips -------------------------------------------------------------------------
  grimacing: {
    verb: 'the gritted teeth clench and the eyes squeeze',
    parts: [null, flex('Y', [12, 15], [12, 15], [1, 0.7, 1.1, 0.9, 1], { as: 'teeth' }), flex('Y', [12, 8.8], [12, 8.8], [1, 0.3, 0.3, 1, 1], { as: 'eyes' })],
  },
  grinning: {
    verb: 'the grin widens and the sparkle twinkles',
    parts: [null, grin(), lap([19.5, 5.1], 90, { as: 'sparkle', dur: 0.6 }), hop([12, 10.5], 0.6, { as: 'eyes', delay: 0.1 })],
  },
  'grip-horizontal': {
    verb: 'the dots ripple left to right, top row and bottom row',
    parts: [hop([5, 8], 0.8, { as: 'dot' }), hop([5, 16], 0.8, { as: 'dot', delay: 0.06 }), hop([12, 8], 0.8, { as: 'dot', delay: 0.12 }), hop([12, 16], 0.8, { as: 'dot', delay: 0.18 }), hop([19, 8], 0.8, { as: 'dot', delay: 0.24 }), hop([19, 16], 0.8, { as: 'dot', delay: 0.3 })],
  },
  'grip-vertical': {
    verb: 'the dots ripple top to bottom, sliding sideways',
    parts: [
      ride([8.5, 20], out(-0.8, 0), { as: 'dot', delay: 0.24 }),
      ride([15.5, 20], out(0.8, 0), { as: 'dot', delay: 0.24 }),
      ride([8.5, 4], out(-0.8, 0), { as: 'dot' }),
      ride([8.5, 12], out(-0.8, 0), { as: 'dot', delay: 0.12 }),
      ride([15.5, 4], out(0.8, 0), { as: 'dot' }),
      ride([15.5, 12], out(0.8, 0), { as: 'dot', delay: 0.12 }),
    ],
  },
  grip: {
    verb: 'the nine dots pop from the center outward',
    parts: [
      pop([5, 5], 1.6, { as: 'dot', delay: 0.2 }),
      pop([5, 12], 1.6, { as: 'dot', delay: 0.1 }),
      pop([5, 19], 1.6, { as: 'dot', delay: 0.2 }),
      pop([12, 5], 1.6, { as: 'dot', delay: 0.1 }),
      pop(C, 1.6, { as: 'dot' }),
      pop([12, 19], 1.6, { as: 'dot', delay: 0.1 }),
      pop([19, 5], 1.6, { as: 'dot', delay: 0.2 }),
      pop([19, 12], 1.6, { as: 'dot', delay: 0.1 }),
      pop([19, 19], 1.6, { as: 'dot', delay: 0.2 }),
    ],
  },
  'grok-02': {
    verb: 'the strokes of the logo slide along their slant',
    parts: [ride([9.5, 15.5], out(-0.8, -1), { as: 'stroke' }), ride([5.6, 19.8], out(-0.8, 0.6), { as: 'stroke', delay: 0.06 }), ride([16, 7.8], out(0.8, -0.8), { as: 'stroke', delay: 0.06 }), ride([19.5, 14], out(0, 1), { as: 'stroke', delay: 0.1 })],
  },
  grok: {
    verb: 'the slash spins half a turn inside the square',
    parts: [null, lap([12, 12.5], 180, { as: 'slash', dur: 0.8 })],
  },
  'group-01': {
    verb: 'the list items pop their bullets and rewrite their lines',
    parts: [retrace({ as: 'line' }), retrace({ as: 'line', delay: 0.1 }), retrace({ as: 'line', delay: 0.2 }), pop([4.3, 5], 2.4, { as: 'dot' }), pop([8.3, 12], 2.4, { as: 'dot', delay: 0.1 }), pop([8.3, 19], 2.4, { as: 'dot', delay: 0.2 })],
  },
  'group-items': {
    verb: 'the corner handles pull out and the two bars gather',
    parts: [ride([4, 4], out(-0.8, -0.8), { as: 'handle' }), ride([20, 4], out(0.8, -0.8), { as: 'handle' }), ride([20, 20], out(0.8, 0.8), { as: 'handle' }), ride([4, 20], out(-0.8, 0.8), { as: 'handle' }), null, ride([12, 9], out(0, 1), { as: 'bar', delay: 0.1 }), ride([12, 15], out(0, -1), { as: 'bar', delay: 0.1 })],
  },
  'group-layers': {
    verb: 'the corner handles pinch in and the layers stack',
    parts: [ride([4, 4], out(0.6, 0.6), { as: 'handle' }), ride([20, 4], out(-0.6, 0.6), { as: 'handle' }), ride([20, 20], out(-0.6, -0.6), { as: 'handle' }), ride([4, 20], out(0.6, -0.6), { as: 'handle' }), null, ride([12, 10.5], out(0, -1), { as: 'layer', delay: 0.1 }), null],
  },
  group: {
    verb: 'the two shapes inside the frame swap their overlap',
    parts: [ride([14, 15], out(-1, -1), { as: 'shape' }), ride([11, 10], out(1, 1), { as: 'shape' }), null],
  },
  groww: {
    verb: 'the trend line climbs inside the circle',
    parts: [null, retrace({ as: 'trend' })],
  },
  'guest-house': {
    verb: 'the door opens and the window light blinks',
    parts: [null, flex('X', [9, 17.5], [12, 17.5], [1, 0.3, 0.3, 1, 1], { as: 'door' }), hop([12, 6], 0.6, { as: 'roof', delay: 0.1 }), blink({ as: 'light' })],
  },
  guitar: {
    verb: 'the strings are strummed and the body vibrates',
    parts: [shake([9.9, 14.1], { as: 'body', dur: 0.5 }), around([20, 4], [20, 4], [0, 30, -20, 6, 0], { as: 'peg' })],
  },
  gun: {
    verb: 'the gun recoils and the trigger is pulled',
    parts: [
      ride([12.1, 11.8], [[0, 0], [-1, -0.6], [0.2, 0.1], [0, 0], [0, 0]], { as: 'gun', times: [0, 0.14, 0.5, 0.8, 1] }),
      ride([12, 12.5], [[0, 0], [-1.4, -0.6], [0.2, 0.1], [0, 0], [0, 0]], { as: 'trigger', times: [0, 0.14, 0.5, 0.8, 1] }),
      ride([12.1, 11.8], [[0, 0], [-1, -0.6], [0.2, 0.1], [0, 0], [0, 0]], { as: 'gun', times: [0, 0.14, 0.5, 0.8, 1] }),
      ride([12.1, 11.8], [[0, 0], [-1, -0.6], [0.2, 0.1], [0, 0], [0, 0]], { as: 'gun', times: [0, 0.14, 0.5, 0.8, 1] }),
    ],
    extras: [{ as: 'flash', tag: 'path', attrs: { d: 'M23 6L23.6 5M23 9L23.6 10M23.4 7.5H24', strokeWidth: '1.2' }, transform: ['scale(0.4)', 'scale(1.2)', 'scale(1.3)'], opacity: [0, 1, 0], times: [0, 0.12, 0.4], ease: 'easeOut', dur: 0.8 }],
  },
  'gymnastic-rings': {
    verb: 'the two rings swing on their straps',
    parts: [around([16.5, 2], [16.5, 16.5], [0, -10, 7, -3, 0], { as: 'ring' }), around([16.5, 2], [16.5, 6.5], [0, -10, 7, -3, 0], { as: 'ring' }), around([7.5, 2], [7, 12.7], [0, 10, -7, 3, 0], { as: 'ring', delay: 0.08 }), around([7.5, 2], [7.5, 4.5], [0, 10, -7, 3, 0], { as: 'ring', delay: 0.08 })],
  },
}

export default settleSpecs(specs)
