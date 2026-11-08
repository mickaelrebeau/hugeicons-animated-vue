/**
 * Page 52 — pie → pointing-left-07.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * play, plus-sign. The hidden handcrafted pin sits in this span and is
 * skipped too.
 *
 * Pins push into the ground. Plants sway their leaves from the stem. Plugs
 * push up into the socket. Plus-minus glyphs trade places or spin a quarter.
 * The pointing-left hands carry a small left arrow; each variant gets its own
 * hand gesture (poke, nudge, wag, thrust, hold, fling, tap) and the arrow answers.
 *
 * Identical-geometry pairs get different jobs: pin-location / -01,
 * pizza / -01, plant / -01, play-list-favourite / -01, playlist / -01,
 * plug / -01, plus-minus-circle / -01, plus-minus-square / -01, png / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  DIR,
  HOLD_E,
  HOLD_T,
  INOUT,
  OUT,
  beat,
  blink,
  dim,
  draw,
  fall,
  flex,
  flip,
  glow,
  hand,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  rise,
  scaleFrom,
  settleSpecs,
  shake,
  spinStar,
  stamp,
  swell,
  swing,
  tap,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** A whole-icon tilt around a view-box pivot. */
const tilt = (origin, deg, o = {}) => ({
  as: 'tilt',
  origin,
  transform: ['rotate(0deg)', `rotate(${deg}deg)`, `rotate(${-deg * 0.6}deg)`, `rotate(${deg * 0.25}deg)`, 'rotate(0deg)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: [INOUT, INOUT, INOUT, OUT],
  dur: 0.7,
  ...o,
})
/** Leaf sways around the point where it meets its stem. */
const leaf = (base, c, deg, o = {}) => swing(base, c, [0, deg, -deg * 0.5, deg * 0.2, 0], { as: 'leaf', ...o })
/** The small left arrow in the corner of the pointing-left hands. */
const arrowL = (o = {}) => nudge([5, 4.5], -1.2, 0, { as: 'arrow', delay: 0.2, ...o })
/** Page / letters file badge: [page, letters]. */
const fileStamp = () => [null, stamp([12, 19], { as: 'letters' })]
const fileSlide = () => [
  beat([12, 7.5]),
  { as: 'letters', origin: [12, 19], transform: ['translateX(0px)', 'translateX(-2px)', 'translateX(0.3px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
]

// ---------------------------------------------------------------------------

const specs = {
  // --- food and health ---------------------------------------------------------------------------------
  pie: {
    verb: 'steam puffs up through the slits and the crust breathes',
    parts: [
      beat([12, 9.4], { delay: 0.2 }),
      blink({ as: 'slit', opacity: [1, 0.2, 1, 1, 1] }),
      blink({ as: 'slit', opacity: [1, 0.2, 1, 1, 1], delay: 0.12 }),
      blink({ as: 'slit', opacity: [1, 0.2, 1, 1, 1], delay: 0.06 }),
      null,
    ],
    extras: [puff(12, 5, 0.8, 0, -2.6), puff(9, 5.5, 0.6, -0.4, -2.2, { delay: 0.12 }), puff(15, 5.5, 0.6, 0.4, -2.2, { delay: 0.2 })],
  },
  'piggy-bank': {
    verb: 'a coin drops into the slot and the pig jiggles, tail flicking',
    parts: [beat([13, 12], { delay: 0.42 }), null, swing([4, 12], [3, 10], [0, 0, 18, -8, 0], { as: 'tail', times: [0, 0.4, 0.6, 0.8, 1], delay: 0.1 })],
    extras: [
      {
        as: 'coin',
        tag: 'circle',
        attrs: { cx: '12.5', cy: '1.5', r: '1.3', strokeWidth: '1.2' },
        transform: ['translateY(0px)', 'translateY(0px)', 'translateY(3.4px)', 'translateY(4px)'],
        opacity: [0, 1, 1, 0],
        times: [0, 0.14, 0.46, 0.56],
        ease: ['linear', 'easeIn', 'linear'],
        dur: 0.8,
      },
    ],
  },
  'pill-bottle': {
    verb: 'the cap twists up off the bottle and screws back down',
    parts: [
      { as: 'cap', origin: [12, 4.5], transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.6px) rotate(-8deg)', 'translateY(-1.6px) rotate(6deg)', 'translateY(0px) rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.72 },
      null,
      null,
    ],
  },
  'pill-off': {
    verb: 'the slash cuts across and the capsule dims',
    parts: [dim({ delay: 0.14 }), draw({ as: 'slash' })],
  },
  pill: {
    verb: 'the capsule tumbles a half turn end over end',
    parts: [lap(C, 180, { as: 'pill', dur: 0.74 }), lap(C, 180, { as: 'pill', dur: 0.74 })],
  },
  'pills-tablet': {
    verb: 'the two tablets pop up out of the blister one after the other',
    parts: [null, pop([12, 8], 1.22, { as: 'tablet' }), pop([12, 16], 1.22, { as: 'tablet', delay: 0.14 }), pop([12, 8], 1.22, { as: 'tablet' }), pop([12, 16], 1.22, { as: 'tablet', delay: 0.14 })],
  },

  // --- pins ---------------------------------------------------------------------------------
  'pin-02': {
    verb: 'the push pin presses in, its needle sinking, then springs back',
    parts: [scaleFrom('Y', [12, 21], [12, 18.5], [1, 0.72, 1.04, 1], { as: 'needle', times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }), ride([12, 9.5], [[0, 0], [0, 1.4], [0, -0.2], [0, 0], [0, 0]], { as: 'head', times: [0, 0.3, 0.62, 0.9, 1], dur: 0.56 })],
  },
  'pin-code': {
    verb: 'the three code dots enter one by one, then the field nods',
    parts: [beat(C, { delay: 0.42 }), pop([9, 12], 2, { as: 'digit' }), pop([13, 12], 2, { as: 'digit', delay: 0.12 }), pop([17, 12], 2, { as: 'digit', delay: 0.24 })],
  },
  'pin-location': {
    verb: 'the pin pushes into the ground and the ground ring spreads',
    parts: [
      ride([12, 7], out(0, 1.2), { as: 'pin' }),
      ride([12, 14.5], out(0, 1.2), { as: 'pin' }),
      swell([12, 18.5], [12, 18.5], [1, 1.14, 0.98, 1, 1], { as: 'ground' }),
    ],
  },
  'pin-location-01': {
    verb: 'the pin hops off the ground and lands, the ground ring redrawing',
    parts: [hop([12, 7], 2, { as: 'pin' }), hop([12, 14.5], 2, { as: 'pin' }), retrace({ as: 'ground', delay: 0.2, dur: 0.56 })],
  },
  'pin-location-02': {
    verb: 'the pin head pops and the stem redraws into the ground',
    parts: [pop([12, 7], 1.2, { as: 'head' }), draw({ as: 'stem', delay: 0.1 }), wave([12, 20], { as: 'ground', delay: 0.3 })],
  },
  'pin-location-03': {
    verb: 'the head rises up the stretching stem, then the ground ripples',
    parts: [
      ride([12, 6], out(0, -1.4), { as: 'head' }),
      wave([12, 19], { as: 'ground', delay: 0.24 }),
      flex('Y', [12, 18], [12, 14], [1, 1.18, 0.97, 1, 1], { as: 'stem' }),
    ],
  },
  'pin-off': {
    verb: 'the slash cuts and the pin head breaks apart along it',
    parts: [ride([10.4, 13.6], out(-0.7, 0.7), { as: 'half' }), ride([16.6, 7.4], out(0.7, -0.7), { as: 'half' }), null, draw({ as: 'slash' })],
  },
  'pine-tree': {
    verb: 'the tree sways on its trunk in the wind',
    parts: [swing([12, 18], [12, 10], [0, -5, 3, -1, 0], { as: 'tree' }), null],
  },
  pinterest: {
    verb: 'the P pin stabs down into place and the ring nods',
    parts: [ride([10, 16], out(-0.4, 1), { as: 'stem' }), hop(C, 0.8, { as: 'bowl' }), beat(C, { delay: 0.3 })],
  },
  pipeline: {
    verb: 'flow runs through the pipe lines and the casing breathes',
    parts: [beat(C, { delay: 0.3 }), { as: 'flow', pathLength: [1, 0.4, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 0.9 }],
  },
  'pisa-tower': {
    verb: 'the tower leans further over, then rights itself back to its tilt',
    parts: [null, swing([12, 21], [13, 11.4], [0, 4, -1.5, 0.5, 0], { as: 'tower', dur: 0.9 }), swing([12, 21], [12.3, 14.8], [0, 4, -1.5, 0.5, 0], { as: 'tower', dur: 0.9 })],
  },
  pivot: {
    verb: 'the turn arrow swings around the corner while the grid lines rewrite',
    parts: [null, retrace({ as: 'line', delay: 0.1 }), retrace({ as: 'line', delay: 0.18 }), swing([17, 19.5], [17.8, 18.3], [0, -30, 8, -2, 0], { as: 'arrow' })],
  },
  pizza: {
    verb: 'the slice lifts up off the plate and settles',
    wrap: ride(C, out(0.8, -1.4), { as: 'slice', dur: 0.7 }),
    parts: [null, null, null, null, null],
  },
  'pizza-01': {
    verb: 'the toppings pop one after another across the slice',
    parts: [null, null, pop([6.6, 10.7], 1.3, { as: 'topping' }), pop([10.4, 17.3], 1.3, { as: 'topping', delay: 0.12 }), pop([13, 11], 2, { as: 'topping', delay: 0.24 })],
  },
  'pizza-02': {
    verb: 'the slice tips from its point as if being picked up',
    wrap: tilt([12, 22], 5),
    parts: [null, null, null, null, null],
  },
  'pizza-03': {
    verb: 'the whole pizza spins one turn on the tray',
    wrap: lap(C, 360, { as: 'pizza', dur: 0.9 }),
    parts: [null, null, null, null, null, null, null, null, null, null, null],
  },
  'pizza-04': {
    verb: 'the two top slices pull apart, then close back in',
    parts: [null, ride([8, 12], out(-0.9, -1), { as: 'slice' }), ride([16, 12], out(0.9, -1), { as: 'slice' })],
  },
  'pizza-cutter': {
    verb: 'the cutter rolls down along its line and back',
    wrap: ride(C, [[0, 0], [-1.4, 1.4], [0.8, -0.8], [-0.2, 0.2], [0, 0]], { as: 'cutter', dur: 0.7 }),
    parts: [null, null, null, null, null, null],
  },

  // --- travel and plants ---------------------------------------------------------------------------------
  plane: {
    verb: 'the plane darts up and to the right, trailing speed lines',
    wrap: ride(C, out(1.4, -1.4), { as: 'plane', dur: 0.66 }),
    parts: [null, null, null],
    extras: [trail('M4.5 19.5L2.5 21.5M3 15.5L1.5 17', -1.4)],
  },
  plant: {
    verb: 'the two leaves flutter on their stems',
    parts: [null, leaf([9.3, 11.2], [6.3, 7.5], -10), leaf([15, 12.8], [18, 9.8], 10, { delay: 0.08 }), null],
  },
  'plant-01': {
    verb: 'the whole plant stretches up from the soil and settles',
    wrap: { as: 'plant', origin: [12, 21], transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(0.99)', 'scale(1)'], times: [0, 0.2, 0.5, 0.76, 1], ease: [INOUT, OUT, OUT, OUT], dur: 0.72 },
    parts: [null, null, null, null],
  },
  'plant-02': {
    verb: 'the leaves sway above the pot and the pot rim nods',
    parts: [null, beat([12, 15], { delay: 0.3 }), null, leaf([10.5, 8.5], [7.5, 5.5], -9), leaf([14.5, 10.5], [17, 8], 9, { delay: 0.08 }), null],
  },
  'plant-03': {
    verb: 'the sprout grows up out of the ground',
    parts: [
      swell([12, 17], [13.3, 14.3], [1, 0.3, 1.08, 1, 1], { as: 'sprout' }),
      swell([12, 17], [7.5, 6.5], [1, 0.3, 1.08, 1, 1], { as: 'sprout' }),
      swell([12, 17], [17, 9], [1, 0.3, 1.08, 1, 1], { as: 'sprout' }),
      swell([12, 17], [11, 13.2], [1, 0.3, 1.08, 1, 1], { as: 'sprout' }),
      null,
    ],
  },
  'plant-04': {
    verb: 'the two leaves open out from the stem',
    parts: [null, leaf([12, 13], [16.5, 9.5], -12), leaf([12, 11], [7.5, 7.5], 12)],
  },
  plate: {
    verb: 'the cutlery hops beside the plate and the plate centre pops',
    parts: [hop([17, 15.5], 1.2, { as: 'cutlery' }), pop([9, 10], 1.16, { as: 'plate', delay: 0.12 }), null],
  },
  plaxo: {
    verb: 'the mark writes itself again',
    parts: [retrace({ as: 'mark', dur: 0.72 })],
  },

  // --- play ---------------------------------------------------------------------------------
  'play-circle-02': {
    verb: 'the play triangle pops bigger inside the ring',
    parts: [beat(C, { delay: 0.26 }), pop([12.8, 12], 1.2, { as: 'play' })],
  },
  'play-circle': {
    verb: 'the play triangle nudges forward to start',
    parts: [null, nudge([12.5, 12], 1.4, 0, { as: 'play' })],
  },
  'play-list-add': {
    verb: 'the plus spins in at the corner and the list nods',
    parts: [null, null, null, beat([11.5, 11.5], { delay: 0.3 }), spinStar([18, 18], { as: 'plus' })],
  },
  'play-list-favourite': {
    verb: 'the heart beats at the corner of the list',
    parts: [null, null, null, null, { as: 'heart', origin: [18, 18.4], transform: ['scale(1)', 'scale(1.24)', 'scale(1)', 'scale(1.16)', 'scale(1)'], times: [0, 0.18, 0.4, 0.58, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  'play-list-favourite-01': {
    verb: 'the clapper slats slide, then the heart hops',
    parts: [null, null, ride([15, 4.5], out(1.2, 0), { as: 'slat' }), ride([8, 4.5], out(1.2, 0), { as: 'slat' }), hop([18, 18.4], 1.4, { as: 'heart', delay: 0.24 })],
  },
  'play-list-favourite-02': {
    verb: 'the play triangle nudges forward, then the heart pops',
    parts: [null, pop([18.3, 18.6], 1.26, { as: 'heart', delay: 0.26 }), nudge([12.5, 11.5], 1.2, 0, { as: 'play' })],
  },
  'play-list-minus': {
    verb: 'the minus wipes off the corner and redraws',
    parts: [null, null, null, null, draw({ as: 'minus' })],
  },
  'play-list-remove': {
    verb: 'the X twists a quarter turn at the corner',
    parts: [null, null, null, null, lap([18.5, 18.5], 90, { as: 'x', dur: 0.6 })],
  },
  'play-list': {
    verb: 'the clapper slats roll along and the play triangle nudges',
    parts: [null, ride([15.5, 5], out(1.3, 0), { as: 'slat' }), ride([8.5, 5], out(1.3, 0), { as: 'slat' }), null, nudge([12, 14.5], 1.2, 0, { as: 'play', delay: 0.14 })],
  },
  'play-square': {
    verb: 'the play triangle grows out from its back edge',
    parts: [scaleFrom('X', [9, 12], [12, 12], [1, 0.3, 1.1, 1], { as: 'play', times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }), null],
  },
  'play-store': {
    verb: 'the play mark slides forward in its tile',
    parts: [ride([12.5, 11.9], out(1.3, 0), { as: 'play' }), ride(C, out(1.3, 0), { as: 'play' }), null],
  },
  playlist: {
    verb: 'the cards behind fan up one after the other',
    parts: [null, null, ride([12, 6.5], out(0, -0.9), { as: 'card' }), ride([12, 3.5], out(0, -1.6), { as: 'card', delay: 0.06 })],
  },
  'playlist-01': {
    verb: 'the music note hops on the front card',
    parts: [beat([12, 15], { delay: 0.28 }), hop([12, 14.8], 1.6, { as: 'note' }), null, null],
  },
  'playlist-02': {
    verb: 'the back card slides out and the note bounces',
    parts: [null, ride([14.5, 14.5], out(1, 1), { as: 'card' }), hop([10, 10], 1.3, { as: 'note', delay: 0.1 })],
  },
  'playlist-03': {
    verb: 'the list lines rewrite in turn and the note hops',
    parts: [retrace({ as: 'line', dur: 0.5 }), retrace({ as: 'line', dur: 0.5, delay: 0.08 }), retrace({ as: 'line', dur: 0.5, delay: 0.16 }), hop([17, 16], 1.4, { as: 'note', delay: 0.2 })],
  },
  plaza: {
    verb: 'the two buildings rise from the street and the windows light',
    parts: [
      null,
      rise('Y', [8.5, 22], [8.5, 11.9]),
      rise('Y', [16.5, 22], [16.5, 14.5], { delay: 0.1 }),
      blink({ as: 'windows', opacity: [1, 0.15, 1, 0.15, 1], delay: 0.3, dur: 0.6 }),
    ],
  },

  // --- plugs ---------------------------------------------------------------------------------
  plug: {
    verb: 'the plug pushes up into the socket, its cord stretching',
    parts: [
      ride([12, 4], out(0, -1.2), { as: 'plug' }),
      ride([12, 11.5], out(0, -1.2), { as: 'plug' }),
      flex('Y', [12, 22], [12, 19.5], [1, 1.24, 0.96, 1, 1], { as: 'cord' }),
      ride([12, 9], out(0, -1.2), { as: 'plug' }),
    ],
  },
  'plug-01': {
    verb: 'the prongs spark and the indicator lights',
    parts: [blink({ as: 'prongs', opacity: [1, 0.2, 1, 0.2, 1], dur: 0.6 }), null, null, glow([12, 9], 1.8, { delay: 0.1 })],
  },
  'plug-02': {
    verb: 'the plug lifts up on its looping cord, which redraws',
    parts: [ride([12, 9.5], out(0, -1.2), { as: 'plug' }), ride([12, 14.5], out(0, -1.2), { as: 'plug' }), retrace({ as: 'cord', delay: 0.1 })],
  },
  'plug-socket': {
    verb: 'the plug and socket push into each other and click apart',
    parts: [
      ride([16, 8], out(-1.2, 1.2), { as: 'plug' }),
      ride([20.5, 3.5], out(-1.2, 1.2), { as: 'plug' }),
      ride([3.5, 20.5], out(1.2, -1.2), { as: 'socket' }),
      ride([8, 16], out(1.2, -1.2), { as: 'socket' }),
      ride([11, 13], out(1.2, -1.2), { as: 'socket' }),
    ],
  },

  // --- plus-minus ---------------------------------------------------------------------------------
  'plus-minus-01': {
    verb: 'the plus spins a quarter turn and the minus redraws under it',
    parts: [lap([12, 10], 90, { as: 'plus', dur: 0.6 }), draw({ as: 'minus', delay: 0.14 })],
  },
  'plus-minus-02': {
    verb: 'the slash redraws, the plus spins and the minus rewrites',
    parts: [draw({ as: 'slash' }), lap([7, 7], 90, { as: 'plus', delay: 0.1, dur: 0.6 }), retrace({ as: 'minus', delay: 0.2, dur: 0.5 })],
  },
  'plus-minus-03': {
    verb: 'the toggle flicks: plus and minus light in turn',
    parts: [beat(C, { delay: 0.36 }), pop([8.5, 12], 1.3, { as: 'plus' }), pop([16.5, 12], 1.4, { as: 'minus', delay: 0.18 })],
  },
  'plus-minus-circle': {
    verb: 'the plus-minus glyph hops inside the ring',
    parts: [hop(C, 1.4, { as: 'glyph' }), null],
  },
  'plus-minus-circle-01': {
    verb: 'the plus-minus glyph flips on its axis',
    parts: [flip(C, 1, { as: 'glyph' }), beat(C, { delay: 0.3 })],
  },
  'plus-minus-circle-02': {
    verb: 'the glyph turns a half turn so plus and minus trade corners',
    parts: [null, lap(C, 180, { as: 'glyph', dur: 0.72 })],
  },
  'plus-minus-square': {
    verb: 'the plus-minus glyph pops bigger in the tile',
    parts: [pop(C, 1.2, { as: 'glyph' }), null],
  },
  'plus-minus-square-01': {
    verb: 'the plus-minus glyph stamps down in the tile',
    parts: [stamp(C, { as: 'glyph' }), beat(C, { delay: 0.3 })],
  },
  'plus-minus-square-02': {
    verb: 'the glyph turns a half turn so plus and minus trade corners, the tile nodding',
    parts: [beat(C, { delay: 0.4 }), lap(C, 180, { as: 'glyph', dur: 0.72 })],
  },
  'plus-minus': {
    verb: 'the plus spins in its box and the minus redraws in the other',
    parts: [beat([16, 16], { delay: 0.3 }), beat([8, 8]), lap([8, 8], 90, { as: 'plus', dur: 0.6 }), lap([8, 8], 90, { as: 'plus', dur: 0.6 }), draw({ as: 'minus', delay: 0.2 })],
  },
  'plus-sign-circle': {
    verb: 'the plus spins onto its axis inside the ring',
    parts: [spinStar(C, { as: 'plus' }), null],
  },
  'plus-sign-square': {
    verb: 'the plus pops bigger in the tile',
    parts: [null, pop(C, 1.25, { as: 'plus' })],
  },

  // --- files ---------------------------------------------------------------------------------
  png: {
    verb: 'the PNG letters stamp down under the page',
    parts: fileStamp(),
  },
  'png-01': {
    verb: 'the page nods while the PNG letters slide in from the left',
    parts: fileSlide(),
  },
  'png-02': {
    verb: 'the PNG label slides out of the page to the right and back',
    parts: [null, nudge([14, 16.5], 1.8, 0, { as: 'label' })],
  },

  // --- pockets and podiums ---------------------------------------------------------------------------------
  'pocket-knife': {
    verb: 'the two blades swing open from the handle and fold back',
    parts: [null, null, null, swing([18, 15], [18, 9], [0, 14, -4, 1, 0], { as: 'blade', delay: 0.1 }), swing([4.5, 15], [6, 9], [0, -14, 4, -1, 0], { as: 'blade' })],
  },
  pocket: {
    verb: 'the pocket stitch rewrites and the pocket nods',
    parts: [beat(C, { delay: 0.3 }), retrace({ as: 'stitch' })],
  },
  podcast: {
    verb: 'the signal arcs light around the bobbing mic',
    parts: [wave([12, 10], { as: 'signal' }), hop(C, 0.9, { as: 'mic', delay: 0.08 }), null, null],
  },
  podium: {
    verb: 'the lamp on the lectern hops and the top board nods',
    parts: [beat([12, 10], { delay: 0.2 }), hop([12, 4], 1.1, { as: 'lamp' }), null],
  },

  // --- pointing left ---------------------------------------------------------------------------------
  'pointing-left-01': {
    verb: 'the hand pokes left twice and the corner arrow follows',
    parts: [arrowL({ delay: 0.3 }), hand.poke([11.7, 14.4], DIR.left)],
  },
  'pointing-left-02': {
    verb: 'the hand nudges left and the corner arrow follows',
    parts: [hand.nudge([12, 14.9], DIR.left), arrowL()],
  },
  'pointing-left-03': {
    verb: 'the hand wags from the wrist while the arrow points',
    parts: [hand.wag([12.5, 13.4], DIR.left), arrowL({ delay: 0.24 })],
  },
  'pointing-left-04': {
    verb: 'the hand winds back and thrusts left, kicking the arrow',
    parts: [hand.thrust([12.5, 14.5], DIR.left), arrowL({ delay: 0.3 })],
  },
  'pointing-left-05': {
    verb: 'the hand points left and holds while the arrow pops',
    parts: [hand.hold([12, 13.7], DIR.left), pop([5, 4.5], 1.3, { as: 'arrow', delay: 0.16 })],
  },
  'pointing-left-06': {
    verb: 'the hand flicks and the arrow flies off left, re-entering from the right',
    parts: [fall([5, 4.5], -3, 0, { as: 'arrow', delay: 0.1 }), ride([12, 13.9], out(-0.8, 0), { as: 'hand' })],
  },
  'pointing-left-07': {
    verb: 'the hand taps down and the arrow blinks',
    parts: [tap([12.5, 13.7]), blink({ as: 'arrow', opacity: [1, 0.15, 1, 1, 1], delay: 0.16 })],
  },
}

export default settleSpecs(specs)
