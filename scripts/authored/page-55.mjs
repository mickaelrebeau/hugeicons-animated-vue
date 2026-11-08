/**
 * Page 55 — radio → repair.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * redo, refresh.
 *
 * Rain drops fall through the bottom and re-enter from above. Receipts keep
 * the paper and give each currency glyph its own beat. Refresh variants spin
 * the whole arrow pair in different directions and amounts. Remove marks
 * wipe, shrink or twist depending on their shape.
 *
 * Identical-geometry pairs get different jobs: ramadhan / -01, rar / -01,
 * raw / -01, real-estate / -01, recycle / -01, relieved / -01, remove / -01.
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
  burst,
  dim,
  draw,
  fall,
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  rays,
  retrace,
  ride,
  rise,
  scaleFrom,
  scaleHold,
  settleSpecs,
  shake,
  spinStar,
  stamp,
  sweep,
  swell,
  swing,
  twinkle,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const tilt = (origin, deg, o = {}) => ({
  as: 'tilt',
  origin,
  transform: ['rotate(0deg)', `rotate(${deg}deg)`, `rotate(${-deg * 0.6}deg)`, `rotate(${deg * 0.25}deg)`, 'rotate(0deg)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: [INOUT, INOUT, INOUT, OUT],
  dur: 0.7,
  ...o,
})
const spin = (deg, o = {}) => lap(C, deg, { as: 'spin', dur: 0.86, ...o })
const drop = (c, o = {}) => fall(c, 0, 3, { as: 'drop', ...o })
/** File badges: [page, letters]. */
const fileStamp = () => [null, stamp([12, 19], { as: 'letters' })]
const fileSlide = () => [
  beat([12, 7.5]),
  { as: 'letters', origin: [12, 19], transform: ['translateX(0px)', 'translateX(-2px)', 'translateX(0.3px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
]
/** Receipts: [paper, glyph]. */
const receipt = (glyph) => [null, glyph]

// ---------------------------------------------------------------------------

const specs = {
  // --- radio, radiation ---------------------------------------------------------------------------------
  radio: {
    verb: 'the antenna wobbles, the dial pops and the band marks blink',
    parts: [pop([14.5, 13.5], 1.14, { as: 'dial', delay: 0.1 }), null, wiggle([10, 5], [12, 3.5], 14, { as: 'antenna' }), blink({ as: 'band', opacity: [1, 0.15, 1, 1, 1], delay: 0.14 })],
  },
  'radioactive-alert': {
    verb: 'the three blades push outward from the core and snap back',
    parts: [ride([12, 7.5], out(0, -0.9), { as: 'blade' }), ride([16.5, 16], out(0.8, 0.5), { as: 'blade' }), ride([7.5, 16], out(-0.8, 0.5), { as: 'blade' })],
  },
  radius: {
    verb: 'the radius arrow shoots out to the rim and the circle answers',
    parts: [pop(C, 1.3, { as: 'centre' }), beat(C, { delay: 0.24 }), nudge([16.5, 12], 1.4, 0)],
  },
  'rail-symbol': {
    verb: 'the zigzag rewrites between the two rails, which spread apart',
    parts: [ride([12, 9], out(0, -0.8), { as: 'rail' }), line(0.06, { as: 'zigzag', dur: 0.6 }), ride([12, 15], out(0, 0.8), { as: 'rail' })],
  },
  'rain-double-drop': {
    verb: 'the two drops fall one after the other',
    parts: [drop([8.5, 11.9]), drop([17.8, 11.9], { delay: 0.16 })],
  },
  'rain-drop': {
    verb: 'the drop falls and splashes, a new one forming above',
    parts: [drop([12, 11.8])],
    extras: [burst(rays(12, 21.5, 1.2, 2.6, 5, -180), { delay: 0.14, times: [0, 0.24, 0.4, 0.8] })],
  },
  rain: {
    verb: 'the three drops fall in a staggered shower',
    parts: [drop([6.5, 6.9]), drop([12, 16.9], { delay: 0.2 }), drop([17.5, 6.9], { delay: 0.1 })],
  },
  rainbow: {
    verb: 'the bands light up from the inside out and the cloud bobs',
    parts: [wave([9.8, 9.5], { as: 'band', delay: 0.16 }), wave([9.8, 11], { as: 'band', delay: 0.08 }), wave([10, 12.5], { as: 'band' }), hop([16.5, 16], 1, { as: 'cloud', delay: 0.1 })],
  },
  'ram-memory': {
    verb: 'the memory chips flicker and the stick nods',
    parts: [beat([12, 10.5], { delay: 0.3 }), null, null, blink({ as: 'chips', opacity: [1, 0.15, 1, 0.15, 1], dur: 0.6 })],
  },

  // --- ramadhan ---------------------------------------------------------------------------------
  ramadhan: {
    verb: 'the star twinkles beside the crescent',
    parts: [twinkle([17.5, 6.5], { as: 'star' }), null],
  },
  'ramadhan-01': {
    verb: 'the crescent rocks and the star pops beside it',
    parts: [pop([17.5, 6.5], 1.3, { as: 'star', delay: 0.16 }), wiggle(C, C, -8, { as: 'moon' })],
  },
  'ramadhan-02': {
    verb: 'the crescent on the dome rocks and its star blinks',
    parts: [null, null, wiggle([12, 10.5], [12, 10.5], -14, { as: 'moon' }), pop([14, 8.5], 2, { as: 'star', delay: 0.14 })],
  },
  'ramadhan-month': {
    verb: 'the calendar rings hop and the crescent on the page rocks',
    parts: [hop([12, 4], 1, { as: 'rings' }), null, null, wiggle([11.5, 16], [11.5, 16], -14, { as: 'moon', delay: 0.1 }), pop([13.5, 14], 2, { as: 'star', delay: 0.24 })],
  },
  ranking: {
    verb: 'the podium blocks rise in turn and the star spins on top',
    parts: [
      rise('Y', [6.3, 22], [6.3, 18.5], { delay: 0.08 }),
      rise('Y', [17.8, 22], [17.8, 19.5], { delay: 0.16 }),
      null,
      rise('Y', [12, 22], [12, 17.5]),
      { ...lap([12, 6], 72, { as: 'star', delay: 0.2, dur: 0.66 }) },
    ],
  },
  'rar-01': {
    verb: 'the page nods while the RAR letters slide in from the left',
    parts: fileSlide(),
  },
  'rar-02': {
    verb: 'the RAR label slides out of the page to the right and back',
    parts: [null, nudge([14, 16.5], 1.8, 0, { as: 'label' })],
  },
  rar: {
    verb: 'the RAR letters stamp down under the page',
    parts: fileStamp(),
  },
  ratio: {
    verb: 'the portrait and landscape frames trade shapes and back',
    parts: [
      { as: 'portrait', origin: C, transform: ['scale(1, 1)', 'scale(1.3, 0.75)', 'scale(1.3, 0.75)', 'scale(1, 1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
      { as: 'landscape', origin: C, transform: ['scale(1, 1)', 'scale(0.75, 1.3)', 'scale(0.75, 1.3)', 'scale(1, 1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
    ],
  },
  'raw-01': {
    verb: 'the R, A, W letters pop one after another',
    parts: [null, pop([6, 19], 1.25, { as: 'letter' }), pop([11.8, 19], 1.25, { as: 'letter', delay: 0.1 }), pop([18, 19], 1.25, { as: 'letter', delay: 0.2 })],
  },
  'raw-02': {
    verb: 'the R, A, W letters hop one after another beside the page',
    parts: [null, hop([8, 16.5], 1.2, { as: 'letter' }), hop([13, 16.5], 1.2, { as: 'letter', delay: 0.1 }), hop([19, 16.5], 1.2, { as: 'letter', delay: 0.2 })],
  },
  raw: {
    verb: 'the page nods and the RAW letters stamp down',
    parts: [beat([12, 7.5], { delay: 0.3 }), stamp([6, 19], { as: 'letters' }), stamp([11.8, 19], { as: 'letters' }), stamp([18, 19], { as: 'letters' })],
  },
  re: {
    verb: 'the r and e hop and the colon blinks',
    parts: [null, hop([8, 14.8], 1.1, { as: 'letter' }), hop([13.3, 15], 1.1, { as: 'letter', delay: 0.1 }), blink({ as: 'colon', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'colon', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  react: {
    verb: 'the three orbits turn a third around the nucleus',
    wrap: lap(C, 120, { as: 'atom', dur: 0.9 }),
    parts: [null, null, null, null],
  },

  // --- real estate ---------------------------------------------------------------------------------
  'real-estate': {
    verb: 'the tower windows light up one after another',
    parts: [null, null, null, ...[0, 0.1, 0.2, 0.3].map((d) => blink({ as: 'window', opacity: [1, 0.1, 1, 1, 1], delay: d }))],
  },
  'real-estate-01': {
    verb: 'the house hops in front of the tower, its door with it',
    parts: [hop([8, 15], 1.2, { as: 'house' }), hop([8, 19], 1.2, { as: 'house' }), null, null, null, null, null],
  },
  'real-estate-02': {
    verb: 'the tree sways and the windows blink',
    parts: [
      null,
      null,
      blink({ as: 'window', opacity: [1, 0.1, 1, 1, 1] }),
      null,
      blink({ as: 'window', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }),
      wiggle([3.5, 16], [3.5, 14], -12, { as: 'tree' }),
      null,
    ],
  },

  // --- receipts ---------------------------------------------------------------------------------
  'receipt-cent': {
    verb: 'the cent curve rewrites and the bar slashes through it',
    parts: [null, line(0, { as: 'cent', dur: 0.6 }), draw({ as: 'bar', delay: 0.16 })],
  },
  'receipt-dollar': {
    verb: 'the receipt prints out from the top and the dollar sign hops',
    parts: [hop([12, 11], 1.2, { as: 'dollar', delay: 0.16 }), scaleFrom('Y', [12, 2], C, [1, 0.8, 1.04, 1], { as: 'paper', times: [0, 0.24, 0.6, 1], ease: [INOUT, OUT, OUT] })],
  },
  'receipt-euro': {
    verb: 'the euro sign hops on the receipt',
    parts: receipt(hop([11.3, 12], 1.4, { as: 'euro' })),
  },
  'receipt-indian-rupee': {
    verb: 'the rupee sign rewrites itself on the receipt',
    parts: receipt(line(0, { as: 'rupee', dur: 0.7 })),
  },
  'receipt-japanese-yen': {
    verb: 'the yen sign pops on the receipt',
    parts: receipt(pop([12, 12.5], 1.25, { as: 'yen' })),
  },
  'receipt-pound-sterling': {
    verb: 'the pound sign flips on the receipt',
    parts: receipt(flip([12, 11.8], 1, { as: 'pound' })),
  },
  'receipt-russian-ruble': {
    verb: 'the ruble sign stamps down on the receipt',
    parts: receipt(stamp(C, { as: 'ruble' })),
  },
  'receipt-swiss-franc': {
    verb: 'the franc sign nudges forward on the receipt',
    parts: receipt(nudge(C, 1.2, 0, { as: 'franc' })),
  },
  'receipt-text': {
    verb: 'the receipt lines print in one after another',
    parts: [null, line(0.08), line(0), line(0.16)],
  },
  'receipt-turkish-lira': {
    verb: 'the lira sign rocks on the receipt',
    parts: receipt(wiggle([12, 16], C, -12, { as: 'lira' })),
  },

  // --- record, rectangles, recycle ---------------------------------------------------------------------------------
  record: {
    verb: 'the record button presses in and holds',
    parts: [scaleHold(C, 0.8, { as: 'button' })],
  },
  'recovery-mail': {
    verb: 'the recovery arrow loops back around and the flap rewrites',
    parts: [line(0.14, { as: 'flap' }), null, lap([18.5, 17.2], -360, { as: 'arrow', dur: 0.86 })],
  },
  'rectangle-circle': {
    verb: 'the circle and the square slide apart and back together',
    parts: [ride([14, 12], out(1, 0), { as: 'circle' }), ride([8, 12], out(-1, 0), { as: 'square' })],
  },
  'rectangular-01': {
    verb: 'the lid lifts off the box and settles back',
    parts: [{ as: 'lid', origin: [12.5, 4], transform: ['translateY(0px)', 'translateY(-1.4px)', 'translateY(-1.4px)', 'translateY(0px)'], times: HOLD_T, ease: HOLD_E, dur: 0.7 }, beat([12.5, 12.2], { delay: 0.5 })],
  },
  rectangular: {
    verb: 'the outline traces itself around',
    parts: [loop({ as: 'outline' })],
  },
  recycle: {
    verb: 'the three arrows chase each other a full turn',
    wrap: spin(360),
    parts: [null, null, null],
  },
  'recycle-01': {
    verb: 'the three arrows rewrite one after another around the loop',
    parts: [line(0.2, { as: 'arrow', dur: 0.56 }), line(0.1, { as: 'arrow', dur: 0.56 }), line(0, { as: 'arrow', dur: 0.56 })],
  },
  'recycle-02': {
    verb: 'the recycling loop retraces itself',
    parts: [retrace({ as: 'loop', dur: 0.8 })],
  },
  'recycle-03': {
    verb: 'the recycling loop spins a full turn',
    parts: [lap(C, 360, { as: 'loop' })],
  },
  reddit: {
    verb: 'the antenna wobbles and the eyes blink',
    parts: [
      null,
      wiggle([12, 9], [17, 4.5], 14, { as: 'antenna' }),
      wiggle([12, 9], [13.8, 6.8], 14, { as: 'antenna' }),
      null,
      blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 }),
      blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 }),
    ],
  },

  // --- redo, refresh ---------------------------------------------------------------------------------
  'redo-02': {
    verb: 'the arc sweeps forward and the head pushes on',
    parts: [sweep({ as: 'arc' }), nudge([18, 5.9], 0.8, 0.8, { as: 'head', delay: 0.3 })],
  },
  'redo-03': {
    verb: 'the return path rewrites and the head nudges forward',
    parts: [line(0, { as: 'path', dur: 0.6 }), nudge([19, 8], 1.2, 0, { as: 'head', delay: 0.2 })],
  },
  'redo-dot': {
    verb: 'the arc rewrites around the dot, which pops',
    parts: [pop(C, 1.5, { as: 'dot', delay: 0.3 }), line(0, { as: 'arc', dur: 0.6 }), nudge([18.7, 5.7], 0.8, -0.8, { as: 'head', delay: 0.2 })],
  },
  'reduce-paragraph': {
    verb: 'the arrows pinch in and the lines shrink toward the margin',
    parts: [scaleFrom('X', [12, 12], [17, 12], [1, 0.72, 1.04, 1], { as: 'lines', times: [0, 0.32, 0.66, 1], ease: [INOUT, OUT, OUT] }), ride([5, 6.8], out(0, 1), { as: 'arrow' }), ride([5, 17.3], out(0, -1), { as: 'arrow' })],
  },
  reflex: {
    verb: 'the angle sweep rewrites past the straight line',
    parts: [line(0.18, { as: 'ray', dur: 0.6 }), line(0, { as: 'arc', dur: 0.6 })],
  },
  'refresh-01': {
    verb: 'the arc sweeps around and the head pushes up',
    parts: [sweep({ as: 'arc' }), nudge([18, 6], 0.8, -0.8, { as: 'head', delay: 0.3 })],
  },
  'refresh-03': {
    verb: 'the arrow pair turns a half turn clockwise',
    wrap: spin(180, { dur: 0.74 }),
    parts: [null, null, null],
  },
  'refresh-04': {
    verb: 'the arrow pair turns a full turn counter-clockwise',
    wrap: spin(-360),
    parts: [null, null, null],
  },
  'refresh-cw-off': {
    verb: 'the slash cuts through and the arrows dim',
    parts: [draw({ as: 'slash' }), dim({ delay: 0.14 }), dim({ delay: 0.14 }), dim({ delay: 0.14 })],
  },
  'refresh-dot': {
    verb: 'the arrows turn a half turn around the dot, which pops',
    parts: [pop(C, 1.5, { as: 'dot', delay: 0.3 }), spin(180, { as: 'arrows', dur: 0.74 }), swing(C, [6, 5], [0, 36, 126, 185, 180], { as: 'arrows', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.74 }), swing(C, [18, 19], [0, 36, 126, 185, 180], { as: 'arrows', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.74 })],
  },
  refrigerator: {
    verb: 'the handles are tugged in turn and the fridge hums',
    parts: [beat(C, { delay: 0.3 }), ride([8, 6], out(-0.8, 0), { as: 'handle', delay: 0.12 }), ride([8, 15], out(-0.8, 0), { as: 'handle' }), null],
  },
  regex: {
    verb: 'the asterisk turns a sixth and the dot pops',
    parts: [lap([16.7, 8], 60, { as: 'star', dur: 0.66 }), pop([6.5, 17.5], 1.2, { as: 'dot', delay: 0.16 })],
  },
  register: {
    verb: 'the R hops inside its ring',
    parts: [null, hop([12.5, 12], 1.4, { as: 'r' })],
  },
  registered: {
    verb: 'the ring traces around and the R pops',
    parts: [loop({ as: 'ring' }), pop(C, 1.18, { as: 'r', delay: 0.2 })],
  },

  // --- relieved ---------------------------------------------------------------------------------
  relieved: {
    verb: 'the smile widens with a sigh of relief',
    parts: [null, null, { as: 'smile', origin: [12, 16], transform: ['scale(1, 1)', 'scale(1.16, 1.3)', 'scale(1.16, 1.3)', 'scale(1, 1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 }],
  },
  'relieved-01': {
    verb: 'the head sinks in a relieved nod, eyes squeezing',
    wrap: { as: 'head', origin: C, transform: ['translateY(0px)', 'translateY(0.9px)', 'translateY(0.9px)', 'translateY(0px)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
    parts: [null, { as: 'eyes', origin: [12, 9.5], transform: ['scaleY(1)', 'scaleY(0.5)', 'scaleY(0.5)', 'scaleY(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 }, null],
  },
  'relieved-02': {
    verb: 'the half smile curls up at its corner',
    parts: [null, null, wiggle([12, 17.5], [9.8, 15.8], 12, { as: 'smile' })],
  },
  reload: {
    verb: 'the reload arrow spins a full turn',
    parts: [lap(C, 360, { as: 'arrow' })],
  },
  reminder: {
    verb: 'the note bubble rattles and its mark rewrites',
    parts: [null, shake([15, 9], { as: 'bubble' }), line(0.12, { as: 'mark', dur: 0.56 }), blink({ as: 'dot', opacity: [1, 0.1, 1, 1, 1] })],
  },
  'remote-control': {
    verb: 'the big button presses and the small keys blink in turn',
    parts: [null, ...[0.1, 0.2, 0.15, 0.25].map((d) => blink({ as: 'key', opacity: [1, 0.15, 1, 1, 1], delay: d })), scaleHold([12, 8], 0.78, { as: 'button', dur: 0.5 })],
  },

  // --- remove ---------------------------------------------------------------------------------
  remove: {
    verb: 'the minus wipes off and redraws',
    parts: [draw({ as: 'minus' })],
  },
  'remove-01': {
    verb: 'the minus pinches in from both ends and stretches back',
    parts: [flex('X', C, C, [1, 0.3, 1.08, 1, 1], { as: 'minus' })],
  },
  'remove-02': {
    verb: 'the bar squeezes thin and springs back',
    parts: [{ as: 'bar', origin: C, transform: ['scale(1, 1)', 'scale(0.6, 0.5)', 'scale(1.06, 1.1)', 'scale(1, 1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }],
  },
  'remove-circle-half-dot': {
    verb: 'the dotted rim turns a half turn and the minus rewrites',
    parts: [lap(C, 180, { as: 'rim', dur: 0.8 }), line(0.1, { as: 'minus' })],
  },
  'remove-circle': {
    verb: 'the minus wipes off and redraws in the ring',
    parts: [beat(C, { delay: 0.3 }), draw({ as: 'minus' })],
  },
  'remove-female': {
    verb: 'the X twists at the corner and the figure steps back',
    parts: [ride([9.4, 11.1], out(-0.6, 0), { as: 'person', delay: 0.1 }), lap([19.5, 19.5], 90, { as: 'x', dur: 0.6 })],
  },
  'remove-male': {
    verb: 'the X rattles at the corner and the figure dims',
    parts: [dim({ delay: 0.12, opacity: [1, 0.35, 0.35, 1] }), shake([19.5, 19.5], { as: 'x' })],
  },
  'remove-pi': {
    verb: 'the minus badge pops beside the pi and the legs flex',
    parts: [line(0, { as: 'bar' }), flex('Y', [16.3, 5.5], [16.3, 8.3], [1, 0.6, 1.06, 1, 1], { as: 'leg' }), null, pop([17, 17.5], 1.18, { as: 'badge', delay: 0.14 })],
  },
  'remove-square': {
    verb: 'the minus pinches in inside the tile',
    parts: [beat(C, { delay: 0.3 }), flex('X', C, C, [1, 0.3, 1.08, 1, 1], { as: 'minus' })],
  },

  // --- energy, repair ---------------------------------------------------------------------------------
  'renewable-energy-01': {
    verb: 'the bolt flashes above the leaf and the leaf nods',
    parts: [beat([12, 14.6], { delay: 0.26 }), { ...pop([13, 6], 1.22, { as: 'bolt' }), opacity: [1, 0.3, 1, 1] }, blink({ as: 'dot', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'renewable-energy': {
    verb: 'the cycle arrows turn around the bolt, which flashes',
    parts: [lap(C, 360, { as: 'cycle', dur: 0.9 }), { ...pop(C, 1.2, { as: 'bolt', delay: 0.1 }), opacity: [1, 0.3, 1, 1] }],
  },
  repair: {
    verb: 'the wrench rocks and the screwdriver pushes in',
    parts: [ride([8.5, 8.5], out(1, 1), { as: 'driver' }), ride([5.5, 5.5], out(1, 1), { as: 'driver' }), wiggle(C, C, -10, { as: 'wrench', delay: 0.08 }), ride([16.2, 16.2], out(1, 1), { as: 'driver' })],
  },
}

export default settleSpecs(specs)
