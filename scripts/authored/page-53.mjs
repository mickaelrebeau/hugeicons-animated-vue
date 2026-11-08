/**
 * Page 53 — pointing-left-08 → profile-02.
 *
 * Gallery page (80 public icons). The handcrafted printer original sits in
 * this span and is skipped.
 *
 * The pointing hands finish the left family and mirror it on the right:
 * 01 pokes, 02 nudges, 03 wags, 04 thrusts, 05 holds, 06 flings the arrow,
 * 07 taps, 08 lifts while the arrow redraws, and the bare name slides with
 * speed lines (the bare name shares its geometry with -01).
 *
 * Presentations each pick a different board job (flip, raise, roll, swing,
 * tilt, trace). File badges reuse the pdf / png pattern for ppt.
 *
 * Identical-geometry pairs get different jobs: pointing-left / -01 (page 52),
 * pointing-right / -01, pot / -01, power-socket / -01, ppt / -01,
 * prayer-rug / -01, presentation / -01, presentation-bar-chart / -01,
 * presentation-line-chart / -01.
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
  burst,
  dim,
  draw,
  fall,
  flex,
  flip,
  glow,
  hand,
  hold,
  hop,
  lap,
  nudge,
  pop,
  puff,
  rays,
  retrace,
  ride,
  rise,
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  swing,
  tap,
  trail,
  twinkle,
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
/** The corner arrow of the pointing hands, by side. */
const arrowAt = { left: [5, 4.5], right: [19, 4.5] }
const arrow = (side, o = {}) => nudge(arrowAt[side], side === 'left' ? -1.2 : 1.2, 0, { as: 'arrow', delay: 0.2, ...o })
const slideHand = (c, [x]) => ride(c, out(x * 1.6, 0), { as: 'hand', dur: 0.6 })
const speed = (side) => trail(side === 'left' ? 'M22 12H20.5M22 15H21' : 'M2 12H3.5M2 15H3', side === 'left' ? 1.4 : -1.4)
/** File badges: [page, letters]. */
const fileSlide = () => [
  beat([12, 7.5]),
  { as: 'letters', origin: [12, 19], transform: ['translateX(0px)', 'translateX(-2px)', 'translateX(0.3px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
]
/** Slider knob travel. */
const knob = (c, dx, dy, o = {}) => ride(c, [[0, 0], [dx, dy], [-dx * 0.6, -dy * 0.6], [0, 0], [0, 0]], { as: 'knob', times: [0, 0.3, 0.64, 0.9, 1], ease: INOUT, dur: 0.86, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- pointing hands ---------------------------------------------------------------------------------
  'pointing-left-08': {
    verb: 'the hand lifts and the corner arrow redraws itself',
    parts: [retrace({ as: 'arrow', delay: 0.1, dur: 0.56 }), hop([12.5, 13.9], 1.2, { as: 'hand' })],
  },
  'pointing-left': {
    verb: 'the hand slides left trailing speed lines and the arrow leads',
    parts: [arrow('left', { delay: 0.08 }), slideHand([11.7, 14.4], DIR.left)],
    extras: [speed('left')],
  },
  'pointing-right-01': {
    verb: 'the hand pokes right twice and the corner arrow follows',
    parts: [arrow('right', { delay: 0.3 }), hand.poke([12.3, 14.4], DIR.right)],
  },
  'pointing-right-02': {
    verb: 'the hand nudges right and the corner arrow follows',
    parts: [hand.nudge([12, 14.9], DIR.right), arrow('right')],
  },
  'pointing-right-03': {
    verb: 'the hand wags from the wrist while the arrow points',
    parts: [hand.wag([11.5, 13.4], DIR.right), arrow('right', { delay: 0.24 })],
  },
  'pointing-right-04': {
    verb: 'the hand winds back and thrusts right, kicking the arrow',
    parts: [hand.thrust([11.5, 14.5], DIR.right), arrow('right', { delay: 0.3 })],
  },
  'pointing-right-05': {
    verb: 'the hand points right and holds while the arrow pops',
    parts: [hand.hold([12, 13.7], DIR.right), pop(arrowAt.right, 1.3, { as: 'arrow', delay: 0.16 })],
  },
  'pointing-right-06': {
    verb: 'the hand flicks and the arrow flies off right, re-entering from the left',
    parts: [fall(arrowAt.right, 3, 0, { as: 'arrow', delay: 0.1 }), ride([12, 13.9], out(0.8, 0), { as: 'hand' })],
  },
  'pointing-right-07': {
    verb: 'the hand taps down and the arrow blinks',
    parts: [tap([11.5, 13.7]), blink({ as: 'arrow', opacity: [1, 0.15, 1, 1, 1], delay: 0.16 })],
  },
  'pointing-right-08': {
    verb: 'the hand lifts and the corner arrow redraws itself',
    parts: [retrace({ as: 'arrow', delay: 0.1, dur: 0.56 }), hop([11.5, 13.9], 1.2, { as: 'hand' })],
  },
  'pointing-right': {
    verb: 'the hand slides right trailing speed lines and the arrow leads',
    parts: [arrow('right', { delay: 0.08 }), slideHand([12.3, 14.4], DIR.right)],
    extras: [speed('right')],
  },

  // --- games ---------------------------------------------------------------------------------
  pokeball: {
    verb: 'the ball wobbles on the ground and its button blinks',
    wrap: tilt([12, 22], 9, { dur: 0.8 }),
    parts: [null, null, blink({ as: 'button', opacity: [1, 0.2, 1, 1, 1], delay: 0.2 }), null],
  },
  pokemon: {
    verb: 'the eyes blink and the cheeks spark',
    parts: [
      null,
      null,
      blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], dur: 0.6 }),
      blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], dur: 0.6 }),
      pop([6.7, 16.5], 1.2, { as: 'cheek', delay: 0.18 }),
      pop([17.4, 16.5], 1.2, { as: 'cheek', delay: 0.18 }),
    ],
  },

  // --- police ---------------------------------------------------------------------------------
  'police-badge': {
    verb: 'the star turns one point inside the badge and the badge nods',
    parts: [beat(C, { delay: 0.3 }), lap([12, 11], 72, { as: 'star', dur: 0.66 })],
  },
  'police-cap': {
    verb: 'the cap tips forward in a salute and the badge glints',
    wrap: tilt([12, 21], -6),
    parts: [null, null, twinkle([12, 9], { as: 'badge', delay: 0.16 })],
  },
  'police-car': {
    verb: 'the roof siren flashes and rays burst around it',
    parts: [null, null, null, null, null, null, null, null, null, blink({ as: 'siren', opacity: [1, 0.15, 1, 0.15, 1], dur: 0.6 })],
    extras: [burst(rays(12, 3.5, 2.8, 4.2, 6, -180), { delay: 0.06 })],
  },
  'police-station': {
    verb: 'the roof star glints and the windows light',
    parts: [null, null, null, null, blink({ as: 'windows', opacity: [1, 0.15, 1, 1, 1], delay: 0.2 }), twinkle([12, 6.5], { as: 'star' })],
  },
  policy: {
    verb: 'the ribbon seal swings on the document and the lines rewrite',
    parts: [swing([18, 13], [18, 17], [0, 10, -6, 2, 0], { as: 'seal' }), null, retrace({ as: 'lines', delay: 0.1 })],
  },
  'poly-tank': {
    verb: 'the liquid sloshes inside the tank',
    parts: [beat([12, 11.5], { delay: 0.34 }), null, swing([12, 11.5], [12, 11.5], [0, 7, -5, 2, 0], { as: 'level', dur: 0.8 })],
  },
  polygon: {
    verb: 'the outline traces itself around',
    parts: [{ as: 'shape', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1 }],
  },
  'pool-table': {
    verb: 'the cue ball rolls into the pack and the balls scatter',
    parts: [
      null,
      null,
      null,
      null,
      null,
      ride([6, 12], [[0, 0], [5, 0], [4.6, 0], [0, 0], [0, 0]], { as: 'cue', times: [0, 0.3, 0.45, 0.85, 1], ease: [OUT, OUT, INOUT, 'linear'], dur: 1 }),
      ride([13, 12], [[0, 0], [0, 0], [1.6, 0], [0, 0], [0, 0]], { as: 'ball', times: [0, 0.3, 0.5, 0.85, 1], ease: [OUT, OUT, INOUT, 'linear'], dur: 1 }),
      ride([16, 10], [[0, 0], [0, 0], [0.8, -0.6], [0, 0], [0, 0]], { as: 'ball', times: [0, 0.32, 0.52, 0.85, 1], ease: [OUT, OUT, INOUT, 'linear'], dur: 1 }),
      ride([16, 14], [[0, 0], [0, 0], [0.8, 0.6], [0, 0], [0, 0]], { as: 'ball', times: [0, 0.32, 0.52, 0.85, 1], ease: [OUT, OUT, INOUT, 'linear'], dur: 1 }),
    ],
  },
  pool: {
    verb: 'the water ripples side to side and the ladder bobs',
    parts: [
      ride([12, 20], [[0, 0], [1, 0], [-1, 0], [0.4, 0], [0, 0]], { as: 'water', ease: INOUT, dur: 0.9 }),
      hop([17.5, 10], 0.8, { as: 'ladder', delay: 0.16 }),
      hop([9.5, 10], 0.8, { as: 'ladder', delay: 0.16 }),
      hop([12, 11], 0.8, { as: 'ladder', delay: 0.16 }),
    ],
  },
  poop: {
    verb: 'the pile squishes down and springs back up',
    wrap: { as: 'pile', origin: [12, 22], transform: ['scale(1, 1)', 'scale(1.1, 0.86)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'], times: [0, 0.24, 0.5, 0.76, 1], ease: [INOUT, OUT, OUT, OUT], dur: 0.66 },
    parts: [null, null, null],
  },
  popcorn: {
    verb: 'the popcorn heap jumps out of the bucket and the bucket nods',
    parts: [beat([12, 17.1], { delay: 0.3 }), null, hop([12, 6.8], 1.8, { as: 'kernels' })],
  },
  popsicle: {
    verb: 'the popsicle waggles on its stick',
    wrap: tilt([21, 21], 7),
    parts: [null, null],
  },
  pot: {
    verb: 'the lid rattles as the pot boils, steam escaping',
    parts: [null, null, ride([12, 4.5], [[0, 0], [0, -1], [0, 0], [0, -0.7], [0, 0]], { as: 'lid', times: [0, 0.18, 0.36, 0.54, 0.72], ease: 'easeInOut', dur: 0.7 })],
    extras: [puff(8, 2.5, 0.6, -0.6, -1.8, { delay: 0.1 }), puff(16, 2.5, 0.6, 0.6, -1.8, { delay: 0.22 })],
  },
  'pot-01': {
    verb: 'the lid lifts and tilts open, a puff of steam rising out',
    parts: [
      null,
      null,
      { as: 'lid', origin: [12, 4.5], transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1px, -1.6px) rotate(10deg)', 'translate(1px, -1.6px) rotate(10deg)', 'translate(0px, 0px) rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
    ],
    extras: [puff(10, 6.5, 0.8, -0.4, -3, { delay: 0.16 })],
  },
  'pot-02': {
    verb: 'the ajar lid drops shut, then pops back ajar',
    parts: [null, null, swing([4, 8], [12, 5.4], [0, 12, -2, 0.6, 0], { as: 'lid', times: [0, 0.3, 0.6, 0.82, 1] })],
  },
  potion: {
    verb: 'a bubble rises out of the flask as the liquid sloshes',
    parts: [
      null,
      wave([10.5, 16.3], { as: 'bubble', delay: 0.1 }),
      null,
      swing([12, 15], [12, 15], [0, 6, -4, 1.5, 0], { as: 'liquid', dur: 0.8 }),
      fall([14, 12], 0, -3.4, { as: 'bubble', ease: ['easeOut', 'linear', OUT] }),
    ],
  },

  // --- pound ---------------------------------------------------------------------------------
  'pound-circle': {
    verb: 'the pound sign flips over inside the coin',
    parts: [beat(C, { delay: 0.32 }), flip([12.3, 11.8], 1, { as: 'pound' })],
  },
  'pound-receive': {
    verb: 'the arrow pulls in toward the pound sign, which nods',
    parts: [nudge([18, 13], -1.4, 0), beat([8.2, 12.1], { delay: 0.24 })],
  },
  'pound-send': {
    verb: 'the arrow shoots out to the right as the pound sign recoils',
    parts: [nudge([18.3, 13], 1.6, 0), ride([8, 11.3], out(-0.6, 0), { as: 'pound' })],
  },
  'pound-square': {
    verb: 'the pound sign hops inside the tile',
    parts: [null, hop([12, 11.8], 1.4, { as: 'pound' })],
  },
  pound: {
    verb: 'the hook rewrites and the cross bar draws across',
    parts: [null, draw({ as: 'bar', delay: 0.2 }), retrace({ as: 'hook' })],
  },

  // --- power ---------------------------------------------------------------------------------
  'power-off': {
    verb: 'the slash cuts across and the switch stem dims',
    parts: [null, draw({ as: 'slash' }), dim({ delay: 0.14 })],
  },
  'power-service': {
    verb: 'the bolt flashes inside the outline',
    parts: [{ ...pop([12, 12], 1.24, { as: 'bolt' }), opacity: [1, 0.3, 1, 1] }, beat(C, { delay: 0.24 })],
  },
  'power-socket': {
    verb: 'the two socket holes blink and the plate nods',
    parts: [beat(C, { delay: 0.3 }), null, blink({ as: 'holes', opacity: [1, 0.1, 1, 1, 1] })],
  },
  'power-socket-01': {
    verb: 'the socket holes turn a half turn around the centre',
    parts: [null, null, lap(C, 180, { as: 'holes', dur: 0.72 })],
  },
  'power-socket-02': {
    verb: 'the socket face pops forward and its holes blink',
    parts: [null, pop(C, 1.08, { as: 'face' }), blink({ as: 'holes', opacity: [1, 1, 0.1, 1, 1] })],
  },
  power: {
    verb: 'the switch stem presses down and the ring rewrites around it',
    parts: [retrace({ as: 'ring', delay: 0.14 }), ride([12, 7.5], out(0, 1.6), { as: 'stem' })],
  },
  ppt: {
    verb: 'the PPT letters stamp down under the page',
    parts: [null, stamp([12, 19], { as: 'letters' })],
  },
  'ppt-01': {
    verb: 'the page nods while the PPT letters slide in from the left',
    parts: fileSlide(),
  },
  'ppt-02': {
    verb: 'the PPT label slides out of the page to the right and back',
    parts: [null, nudge([14, 16.5], 1.8, 0, { as: 'label' })],
  },

  // --- prawn, prayer ---------------------------------------------------------------------------------
  prawn: {
    verb: 'the feelers flick and the eye blinks',
    parts: [beat([10.5, 13.5], { delay: 0.22 }), swing([9, 2], [15.6, 4.5], [0, -8, 6, -3, 0], { as: 'feelers' }), blink({ as: 'eye', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 })],
  },
  'prayer-rug': {
    verb: 'the tassels ripple down the edge one after another',
    parts: [
      null,
      null,
      null,
      ride([21, 16], out(0.8, 0), { as: 'tassel', delay: 0.16 }),
      ride([21, 20], out(0.8, 0), { as: 'tassel', delay: 0.24 }),
      ride([21, 12], out(0.8, 0), { as: 'tassel', delay: 0.08 }),
      ride([21, 8], out(0.8, 0), { as: 'tassel' }),
    ],
  },
  'prayer-rug-01': {
    verb: 'the rolled end hops and the arch pattern pops',
    parts: [null, hop([5, 12.5], 1, { as: 'roll' }), pop([14, 14], 1.16, { as: 'pattern', delay: 0.16 }), null, null, null, null],
  },
  'prayer-rug-02': {
    verb: 'the fringe flutters on both ends and the centre pattern pops',
    parts: [
      null,
      pop(C, 1.12, { as: 'pattern', delay: 0.2 }),
      ...[0.08, 0.12, 0.04, 0].map((d) => ride([12, 3], out(0, -0.7), { as: 'fringe', delay: d })),
      ...[0.08, 0.12, 0.04, 0].map((d) => ride([12, 21], out(0, 0.7), { as: 'fringe', delay: d })),
    ],
  },
  'preference-horizontal': {
    verb: 'the three slider knobs slide along their tracks',
    parts: [null, null, null, null, null, null, knob([14.5, 4], -3, 0), knob([12.5, 19], 2.4, 0, { delay: 0.1 }), knob([9.5, 11.5], 3, 0, { delay: 0.05 })],
  },
  'preference-vertical': {
    verb: 'the three slider knobs slide up and down their tracks',
    parts: [null, null, null, null, null, null, knob([4, 9.5], 0, 3), knob([19, 11.5], 0, -3, { delay: 0.1 }), knob([11.5, 14.5], 0, 2.4, { delay: 0.05 })],
  },
  prescription: {
    verb: 'the Rx crosses itself: the leg rewrites, then the cross stroke draws',
    parts: [retrace({ as: 'leg' }), null, draw({ as: 'cross', delay: 0.2 })],
  },
  prescriptions: {
    verb: 'the pill tumbles a half turn beside the script',
    parts: [null, retrace({ as: 'line', dur: 0.5 }), retrace({ as: 'line', dur: 0.5, delay: 0.08 }), retrace({ as: 'line', dur: 0.5, delay: 0.16 }), lap([17, 18], 180, { as: 'pill', dur: 0.72 }), lap([17, 18], 180, { as: 'pill', dur: 0.72 })],
  },

  // --- presentations ---------------------------------------------------------------------------------
  presentation: {
    verb: 'the board flips over to the next slide',
    parts: [flip([12, 9.5], 1, { as: 'board' }), null, null],
  },
  'presentation-01': {
    verb: 'the board rises up on its extending pole',
    parts: [ride([12, 9.5], out(0, -1.2), { as: 'board' }), null, flex('Y', [12, 22], [12, 19.5], [1, 1.24, 0.97, 1, 1], { as: 'pole' })],
  },
  'presentation-02': {
    verb: 'the screen rolls up under its bar and drops back down',
    parts: [scaleFrom('Y', [12, 2], [12, 9.5], [1, 0.62, 1.03, 1], { as: 'screen', times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT] }), null, null, null],
  },
  'presentation-03': {
    verb: 'the pull cord is tugged and the screen jumps on its roller',
    parts: [
      scaleFrom('Y', [12, 4.5], [12, 10.3], [1, 1.06, 0.97, 1], { as: 'screen', times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], delay: 0.06 }),
      ride([12, 20.5], out(0, 1.2), { as: 'cord' }),
      ride([12, 17.5], out(0, 1.2), { as: 'cord' }),
      null,
    ],
  },
  'presentation-04': {
    verb: 'the board swings from its hook',
    parts: [swing([12, 2.5], [12, 10.5], [0, 5, -3, 1, 0], { as: 'board' }), null, null, null],
  },
  'presentation-05': {
    verb: 'the board tilts on top of its pole and the foot steadies',
    parts: [swing([12, 17.5], [12, 9.5], [0, -5, 3, -1, 0], { as: 'board' }), wave([12, 21.3], { as: 'foot', delay: 0.2 }), null],
  },
  'presentation-06': {
    verb: 'the board outline traces itself around',
    parts: [{ as: 'board', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1 }, null, null, null],
  },
  'presentation-07': {
    verb: 'the board and hook lift up off the pole and settle',
    parts: [hold([12, 10.5], 0, -1.2, { as: 'board' }), null, hold([12, 2.8], 0, -1.2, { as: 'board' }), null],
  },
  'presentation-bar-chart': {
    verb: 'the bars grow up on the board',
    parts: [null, null, null, beat([12, 10], { delay: 0.34 }), rise('Y', [12, 13], [12, 10])],
  },
  'presentation-bar-chart-01': {
    verb: 'the bars draw themselves up from the baseline',
    parts: [null, null, null, null, draw({ as: 'bars' })],
  },
  'presentation-bar-chart-02': {
    verb: 'the bars flex taller and the board nods',
    parts: [null, null, beat([12, 10], { delay: 0.2 }), flex('Y', [12, 13], [12, 10], [1, 1.25, 0.94, 1, 1], { as: 'bars' })],
  },
  'presentation-line-chart': {
    verb: 'the chart line draws itself across the board',
    parts: [null, draw({ as: 'line' }), null, null],
  },
  'presentation-line-chart-01': {
    verb: 'the chart line bounces up on the board and the board nods',
    parts: [beat([12, 9.5], { delay: 0.3 }), hop([12, 9], 1.4, { as: 'line' }), null, null],
  },
  'presentation-line-chart-02': {
    verb: 'the chart line sweeps off and rewrites',
    parts: [null, sweep({ as: 'line' }), null, null],
  },
  'presentation-online': {
    verb: 'the presenter bobs on the screen and the indicator blinks',
    parts: [null, null, blink({ as: 'led', opacity: [1, 0.15, 1, 1, 1], delay: 0.2 }), hop([12, 9.6], 0.9, { as: 'presenter' }), hop([12, 5], 0.9, { as: 'presenter' })],
  },
  'presentation-podium': {
    verb: 'the two lamp arms bend outward and the top board nods',
    parts: [beat([12, 10], { delay: 0.2 }), swing([6, 6], [7.5, 4], [0, -12, 4, -1, 0], { as: 'arm' }), swing([18, 6], [16.5, 4], [0, 12, -4, 1, 0], { as: 'arm' }), null],
  },
  previous: {
    verb: 'the triangle jumps back against the bar, which gives',
    parts: [nudge([14, 12], -1.6, 0, { as: 'play' }), ride([4, 12], [[0, 0], [0, 0], [-0.6, 0], [0, 0], [0, 0]], { as: 'bar', times: [0, 0.4, 0.56, 0.86, 1] })],
  },

  // --- printers ---------------------------------------------------------------------------------
  'printer-check': {
    verb: 'the page feeds out and the check draws itself',
    parts: [null, null, ride([10.5, 19], out(0, 1), { as: 'paper' }), draw({ as: 'check', delay: 0.16 })],
  },
  'printer-off': {
    verb: 'the slash cuts across and the printer dims',
    parts: [dim({ delay: 0.14 }), null, dim({ delay: 0.14 }), null, draw({ as: 'slash' })],
  },
  'printer-three-d': {
    verb: 'the print head slides along its gantry and the printed curve rewrites',
    parts: [
      null,
      null,
      ...[[12, 6], [12, 11.5], [12, 15.3]].map((c) => ride(c, [[0, 0], [-2, 0], [2, 0], [0, 0], [0, 0]], { as: 'head', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 })),
      retrace({ as: 'print', delay: 0.1, dur: 0.8 }),
      ride([14, 5], [[0, 0], [-2, 0], [2, 0], [0, 0], [0, 0]], { as: 'head', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 }),
      ride([14, 7.5], [[0, 0], [-2, 0], [2, 0], [0, 0], [0, 0]], { as: 'head', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 }),
    ],
  },
  'printer-x': {
    verb: 'the paper jams with a rattle and the X twists',
    parts: [null, null, shake([10, 19], { as: 'paper' }), lap([19.5, 19.5], 90, { as: 'x', delay: 0.1, dur: 0.6 })],
  },
  'prism-01': {
    verb: 'the light ray enters the prism, then the spectrum fans out',
    parts: [beat([12, 12], { delay: 0.2 }), retrace({ as: 'spectrum', delay: 0.22 }), draw({ as: 'ray', dur: 0.5 })],
  },
  prism: {
    verb: 'the top face lifts off the prism and drops back',
    parts: [null, ride([12, 5.5], out(0, -1.4), { as: 'top' })],
  },

  // --- prison ---------------------------------------------------------------------------------
  'prison-guard': {
    verb: 'the guard lifts the cap in a salute',
    parts: [hop([12, 7.5], 1.3, { as: 'cap' }), hop([12, 5], 1.3, { as: 'cap' }), null, null],
  },
  prison: {
    verb: 'the cell door lock rattles against the bars',
    parts: [
      null,
      null,
      null,
      null,
      null,
      null,
      ride([17, 12], [[0, 0], [0.5, 0], [-0.5, 0], [0.3, 0], [0, 0]], { as: 'lock', ease: INOUT, dur: 0.5 }),
      null,
      ride([16.5, 12], [[0, 0], [0.5, 0], [-0.5, 0], [0.3, 0], [0, 0]], { as: 'lock', ease: INOUT, dur: 0.5 }),
    ],
  },
  prisoner: {
    verb: 'the head of the prisoner hangs low, then lifts back up',
    parts: [hold([12, 6.5], 0, 0.9, { as: 'head' }), hold([12, 10.6], 0, 0.9, { as: 'head' }), hold([12, 4.9], 0, 0.9, { as: 'head' }), null],
  },
  'product-loading': {
    verb: 'the box hops on the conveyor and its label flashes',
    parts: [hop([12, 11.5], 1.2, { as: 'box' }), hop([12, 4], 1.2, { as: 'box' }), { ...hop([12, 9], 1.2, { as: 'box' }), opacity: [1, 0.3, 1, 1, 1] }, null],
  },
  'profile-02': {
    verb: 'the photo pops and the profile lines rewrite in turn',
    parts: [
      null,
      pop([8, 10], 1.2, { as: 'photo' }),
      retrace({ as: 'line', dur: 0.5, delay: 0.24 }),
      retrace({ as: 'line', dur: 0.5 }),
      retrace({ as: 'line', dur: 0.5, delay: 0.08 }),
      retrace({ as: 'line', dur: 0.5, delay: 0.16 }),
    ],
  },
}

export default settleSpecs(specs)
