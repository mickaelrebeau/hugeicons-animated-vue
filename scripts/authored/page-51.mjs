/**
 * Page 51 — pay-by-check → pie-chart.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * Payments hand over their bill or coin. Pens and pencils write from their
 * tip. Phones keep the handset and let the screen mark act. Pie charts pull a
 * slice or sweep a radius; donut variants tick in their own order.
 *
 * Identical-geometry pairs get different jobs: payment / payment-01,
 * payment-success / -01, pdf / pdf-01, peer-to-peer / -01, pen / pen-01,
 * pen-tool / pen-tool-01, pencil-edit / -01, phone-off / -01, pickup / -01.
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
  dim,
  draw,
  flip,
  glow,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  scaleFrom,
  scaleHold,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  swing,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** An outline traces itself once around. */
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
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
/** Writing wiggle: every part swings around one pen tip. */
const scribble = (tip, centers, deg = 6, o = {}) =>
  centers.map((c) => (c ? swing(tip, c, [0, -deg, deg * 0.7, -deg * 0.3, 0], { as: 'pen', dur: 0.66, ...o }) : null))

// ---------------------------------------------------------------------------

const specs = {
  // --- payments ---------------------------------------------------------------------------------
  'pay-by-check': {
    verb: 'the check dips into the envelope slot, then the signature line rewrites',
    parts: [null, retrace({ as: 'line', delay: 0.24, dur: 0.56 }), ride([16, 8], out(-1.2, 2.2), { as: 'check' })],
  },
  payment: {
    verb: 'the hand lifts the bill up to offer it, the bill nodding as it is taken',
    parts: [
      beat([12, 9], { delay: 0.18 }),
      null,
      ride([12.5, 15], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'hand', dur: 0.6 }),
    ],
  },
  'payment-01': {
    verb: 'the coin on the bill flips over while the hand under it nudges forward',
    parts: [null, flip([12, 9], 1, { delay: 0.06 }), ride([12.5, 15], out(-0.9, 0), { as: 'hand' })],
  },
  'payment-02': {
    verb: 'the hand pushes the bill out to the right, the coin trailing a beat behind',
    parts: [
      null,
      null,
      ride([7.3, 9.8], out(0.5, 0), { as: 'thumb' }),
      ride([13.5, 14], out(1.6, 0), { as: 'bill' }),
      ride([13.5, 14], out(1.6, 0), { as: 'coin', delay: 0.05 }),
    ],
  },
  'payment-success': {
    verb: 'the check draws itself on the bill corner and the bill gives a nod',
    parts: [null, null, null, beat([12, 11], { delay: 0.3 }), null, draw({ as: 'check', dur: 0.6 })],
  },
  'payment-success-01': {
    verb: 'the coin flips, then the check pops at the corner',
    parts: [null, null, null, null, flip([12, 11]), pop([18, 17], 1.3, { as: 'check', delay: 0.32 })],
  },
  'payment-success-02': {
    verb: 'the check draws itself as the bill corners light in turn',
    parts: [stamp([12, 11], { as: 'coin', delay: 0.12 }), null, wave([12, 11], { as: 'corners', delay: 0.2 }), draw({ as: 'check' })],
  },
  payoneer: {
    verb: 'the ring traces itself once around',
    parts: [loop()],
  },
  paypal: {
    verb: 'the front P slides up and right off the back P, then they click together',
    parts: [ride([11.7, 11], out(-0.6, 0.6), { as: 'back', delay: 0.04 }), ride([14.6, 14.8], out(1, -1), { as: 'front' })],
  },

  // --- devices and documents -----------------------------------------------------------------------
  'pc-case': {
    verb: 'the power light blinks and the vents breathe in turn',
    parts: [
      null,
      wave([12, 6], { as: 'vent' }),
      wave([12, 10], { as: 'vent', delay: 0.1 }),
      glow([12, 18], 2.6, { delay: 0.18 }),
    ],
  },
  pdf: {
    verb: 'the PDF letters stamp down under the page',
    parts: [null, stamp([12, 19], { as: 'letters' })],
  },
  'pdf-01': {
    verb: 'the page nods while the PDF letters slide in from the left',
    parts: [beat([12, 7.5]), { as: 'letters', origin: [12, 19], transform: ['translateX(0px)', 'translateX(-2px)', 'translateX(0.3px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }],
  },
  'pdf-02': {
    verb: 'the PDF label slides out of the page to the right and back',
    parts: [null, nudge([14, 16.5], 1.8, 0, { as: 'label' })],
  },
  'peer-to-peer': {
    verb: 'the two exchange arcs sweep, handing the transfer across',
    parts: [null, sweep({ as: 'arc' }), sweep({ as: 'arc', delay: 0.14 }), null],
  },
  'peer-to-peer-01': {
    verb: 'the two peers lean toward each other across the gap, then settle back',
    parts: [ride([6, 6.3], out(1.4, 1.4), { as: 'peer' }), null, null, ride([18, 17.8], out(-1.4, -1.4), { as: 'peer', delay: 0.06 })],
  },
  'peer-to-peer-02': {
    verb: 'the top arrow carries across, the right person bobs, then the bottom arrow returns',
    parts: [
      hop([5.5, 4.5], 1.1, { as: 'head', delay: 0.5 }),
      hop([18.5, 19.5], 1.1, { as: 'body', delay: 0.22 }),
      hop([5.5, 10], 1.1, { as: 'body', delay: 0.5 }),
      retrace({ as: 'arrow', dur: 0.56 }),
      retrace({ as: 'arrow', delay: 0.28, dur: 0.56 }),
      hop([18.4, 14], 1.1, { as: 'head', delay: 0.22 }),
    ],
  },
  'peer-to-peer-03': {
    verb: 'a packet hops across the dashes between the peers and the shared box bounces',
    parts: [
      null,
      null,
      blink({ as: 'dash', opacity: [1, 0.1, 1, 1, 1], dur: 0.7 }),
      blink({ as: 'dash', opacity: [1, 1, 0.1, 1, 1], dur: 0.7 }),
      null,
      hop([12, 17.5], 1.2, { as: 'box', delay: 0.3 }),
      null,
      null,
    ],
  },

  // --- pens ---------------------------------------------------------------------------------
  pen: {
    verb: 'the pen wiggles from its tip as if writing',
    parts: scribble([3.5, 20.5], [[12, 12], [15.5, 8.5]], 6),
  },
  'pen-01': {
    verb: 'the pen dips to the page and its cap band redraws',
    parts: [ride([12, 12], out(-1, 1), { as: 'pen' }), retrace({ as: 'band', delay: 0.16, dur: 0.56 })],
  },
  'pen-02': {
    verb: 'the pen scribbles from its tip, clip and grip riding along',
    parts: scribble([3, 21], [[12, 12], [17.9, 9.2], [9.7, 14.2]], 5),
  },
  'pen-connect-bluetooth': {
    verb: 'the bluetooth mark pulses and the pen answers with a dip',
    parts: [wave([5.5, 7], { as: 'signal' }), ride([14.1, 13.9], out(-0.7, 0.7), { as: 'pen', delay: 0.22 })],
  },
  'pen-connect-usb': {
    verb: 'the USB plug pushes in toward the pen, then the pen nods',
    parts: [beat([14.1, 13.9], { delay: 0.26 }), nudge([7, 5], 1.2, 1.2, { as: 'plug' })],
  },
  'pen-connect-wifi': {
    verb: 'the wifi arcs light up and the pen taps',
    parts: [ride([14.1, 13.9], out(-0.6, 0.6), { as: 'pen', delay: 0.26 }), wave([7.5, 6.3], { as: 'signal' })],
  },
  'pen-tool': {
    verb: 'the nib drops to draw a point, then lifts back inside the ring',
    parts: [null, ride([12, 16.8], out(0, 1.4), { as: 'nib' }), ride([12, 10.5], out(0, 1.4), { as: 'nib' })],
  },
  'pen-tool-01': {
    verb: 'the ring traces itself around the still nib',
    parts: [loop(), null, beat([12, 10.5], { delay: 0.4 })],
  },
  'pen-tool-02': {
    verb: 'the nib swings on its curve and the curve rewrites',
    parts: [
      retrace({ as: 'curve', dur: 0.6 }),
      swing([12, 7], [12, 14.5], [0, 8, -5, 2, 0], { as: 'nib' }),
      swing([12, 7], [12, 18], [0, 8, -5, 2, 0], { as: 'nib' }),
    ],
  },
  'pen-tool-03': {
    verb: 'the nib presses down toward its point and the handle rewrites',
    parts: [ride([10.4, 13.6], out(-1, 1), { as: 'nib' }), ride([7.5, 16.5], out(-1, 1), { as: 'nib' }), retrace({ as: 'handle', delay: 0.16 })],
  },
  'pen-tool-add': {
    verb: 'the plus spins into place, then the nib presses down',
    parts: [
      ride([11.9, 15.1], out(-0.8, 0.8), { as: 'nib', delay: 0.24 }),
      ride([9.5, 17.5], out(-0.8, 0.8), { as: 'nib', delay: 0.24 }),
      null,
      { as: 'plus', origin: [5, 5], transform: ['rotate(0deg) scale(1)', 'rotate(90deg) scale(0.6)', 'rotate(180deg) scale(1.1)', 'rotate(180deg) scale(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62 },
    ],
  },
  'pen-tool-minus': {
    verb: 'the minus wipes off and redraws while the nib recoils',
    parts: [
      ride([11.9, 13.6], out(0.8, -0.8), { as: 'nib' }),
      ride([9.5, 16], out(0.8, -0.8), { as: 'nib' }),
      null,
      draw({ as: 'minus', delay: 0.1 }),
    ],
  },
  'pencil-edit': {
    verb: 'the baseline writes itself while the pencil wiggles from its tip',
    parts: [swing([4, 20], [12.1, 11.9], [0, -5, 4, -2, 0], { as: 'pencil', dur: 0.66 }), draw({ as: 'line' })],
  },
  'pencil-edit-01': {
    verb: 'the pencil hops off the line, then the line rewrites',
    parts: [hop([12.1, 11.9], 1.4, { as: 'pencil' }), retrace({ as: 'line', delay: 0.2, dur: 0.56 })],
  },
  'pencil-edit-02': {
    verb: 'the pencil scribbles on the page and the page nods',
    parts: [swing([8, 16], [14.6, 9.4], [0, -6, 4, -2, 0], { as: 'pencil', dur: 0.66 }), beat([11, 13], { delay: 0.28 })],
  },
  'pencil-ruler': {
    verb: 'the pencil slides down along the ruler and the ticks blink',
    parts: [
      null,
      ride([18.3, 5.8], out(-1, 1), { as: 'pencil' }),
      ride([10.8, 13.2], out(-1, 1), { as: 'pencil' }),
      blink({ as: 'ticks', opacity: [1, 0.15, 1, 1, 1], delay: 0.2 }),
    ],
  },
  pencil: {
    verb: 'the pencil scribbles from its point',
    wrap: tilt([12, 2], 6),
    parts: [null, null, null, null],
  },
  pendulum: {
    verb: 'the right ball swings in, knocks the left ball out, and it swings back',
    parts: [
      null,
      swing([6.5, 3], [6.5, 9.5], [0, 0, 12, 0, 0], { as: 'left', times: [0, 0.25, 0.5, 0.75, 1], ease: INOUT, dur: 1.1 }),
      null,
      swing([6.5, 3], [6.5, 18.5], [0, 0, 12, 0, 0], { as: 'left', times: [0, 0.25, 0.5, 0.75, 1], ease: INOUT, dur: 1.1 }),
      null,
      swing([17, 3], [19.5, 18.5], [0, 11, 11, 11, 0], { as: 'right', times: [0, 0.25, 0.5, 0.75, 1], ease: INOUT, dur: 1.1 }),
      swing([17, 3], [18.3, 9.5], [0, 11, 11, 11, 0], { as: 'right', times: [0, 0.25, 0.5, 0.75, 1], ease: INOUT, dur: 1.1 }),
    ],
  },
  pensive: {
    verb: 'the head tilts down in thought and the mouth tightens',
    wrap: { as: 'head', origin: [12, 21], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(-6deg)', 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.9 },
    parts: [null, { as: 'mouth', origin: [12, 16], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(0.7)', 'scaleX(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.9 }, null],
  },
  'pentagon-01': {
    verb: 'the pentagon turns one fifth onto its next side',
    parts: [lap(C, 72, { as: 'shape', dur: 0.7 })],
  },
  pentagon: {
    verb: 'the pentagon outline traces itself around',
    parts: [loop({ as: 'shape' })],
  },
  'percent-circle': {
    verb: 'the percent sign turns a half turn inside the ring',
    parts: [lap(C, 180, { as: 'sign', dur: 0.7 }), beat(C, { delay: 0.3 })],
  },
  'percent-square': {
    verb: 'the percent sign flips over on its axis',
    parts: [beat(C, { delay: 0.3 }), flip(C, 1, { as: 'sign' })],
  },
  percent: {
    verb: 'the slash redraws and the two circles slide in toward it',
    parts: [draw({ as: 'slash' }), ride([6.5, 6.5], out(1, 1), { as: 'dot', delay: 0.16 }), ride([17.5, 17.5], out(-1, -1), { as: 'dot', delay: 0.16 })],
  },
  perfume: {
    verb: 'the bulb is squeezed and a puff of scent sprays out of the nozzle',
    parts: [beat([9.5, 15.5], { delay: 0.2 }), null, null, scaleHold([19, 5], 0.7, { as: 'bulb', dur: 0.5 }), null],
    extras: [puff(4, 4, 0.9, -2.4, -0.6, { delay: 0.1 }), puff(4.5, 5.5, 0.6, -2, 1, { delay: 0.18 })],
  },
  periscope: {
    verb: 'the lens looks left and right inside the scope',
    parts: [null, ride([12, 10], [[0, 0], [1.3, 0], [-1.3, 0], [0, 0], [0, 0]], { as: 'lens', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 })],
  },
  'permanent-job': {
    verb: 'the worker bobs in front of the building while its windows light in turn',
    parts: [
      blink({ as: 'windows', opacity: [1, 0.15, 1, 1, 1] }),
      blink({ as: 'windows', opacity: [1, 1, 0.15, 1, 1] }),
      null,
      hop([6, 14], 1.2, { as: 'worker', delay: 0.1 }),
      hop([6, 20], 0.6, { as: 'worker', delay: 0.1 }),
    ],
  },
  'perplexity-ai': {
    verb: 'the two top wings flap open from the stem and the stem redraws',
    parts: [
      null,
      retrace({ as: 'stem', delay: 0.12 }),
      swing([12, 8], [8.5, 5], [0, -10, 4, -1, 0], { as: 'wing' }),
      swing([12, 8], [15.5, 5], [0, 10, -4, 1, 0], { as: 'wing' }),
      null,
    ],
  },
  perspective: {
    verb: 'the plane skews to a new viewpoint and back across the axes',
    parts: [
      { as: 'plane', origin: C, transform: ['skewX(0deg)', 'skewX(-12deg)', 'skewX(6deg)', 'skewX(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, INOUT, OUT], dur: 0.7 },
      null,
    ],
  },
  'petrol-pump': {
    verb: 'the hose nozzle swings on its hook and the fuel gauge line rewrites',
    parts: [null, retrace({ as: 'gauge', delay: 0.14 }), null, swing([15.5, 14.5], [18.5, 12], [0, -9, 5, -2, 0], { as: 'hose' })],
  },
  pexels: {
    verb: 'the P hops inside its tile',
    parts: [null, hop([12.5, 12], 1.6, { as: 'letter' })],
  },
  'philippine-peso': {
    verb: 'the two bars draw across the P in turn',
    parts: [beat([12.5, 9], { delay: 0.3 }), draw({ as: 'bar' }), draw({ as: 'bar', delay: 0.12 }), null],
  },

  // --- phones ---------------------------------------------------------------------------------
  'phone-arrow-down': {
    verb: 'the arrow drops down the screen and bounces back',
    parts: [null, null, nudge([12, 12], 0, 1.8)],
  },
  'phone-arrow-up': {
    verb: 'the arrow lifts up toward the notch and the notch catches it',
    parts: [null, pop([12, 2.5], 1.3, { as: 'notch', delay: 0.22 }), nudge([12, 12], 0, -1.8)],
  },
  'phone-check': {
    verb: 'the check draws itself beside the phone',
    parts: [beat([10.5, 12], { delay: 0.34 }), null, draw({ as: 'check' })],
  },
  'phone-developer-mode': {
    verb: 'the code brackets push apart to the sides and close',
    parts: [null, null, nudge([17.2, 12], 1.3, 0, { as: 'bracket' }), nudge([6.8, 12], -1.3, 0, { as: 'bracket' })],
  },
  'phone-erase': {
    verb: 'the X wipes off beside the phone and redraws',
    parts: [shake([10.5, 12], { delay: 0.3 }), null, draw({ as: 'x' })],
  },
  'phone-lock': {
    verb: 'the padlock rattles beside the phone',
    parts: [null, shake([17, 12], { as: 'lock' }), null],
  },
  'phone-off': {
    verb: 'the slash cuts across and the phone dims under it',
    parts: [null, draw({ as: 'slash' }), dim({ delay: 0.14 }), dim({ delay: 0.14 })],
  },
  'phone-off-01': {
    verb: 'the phone halves split apart along the slash, then rejoin',
    parts: [ride([12, 2.5], out(0.9, -0.9), { as: 'upper' }), null, ride([12.5, 8.3], out(0.9, -0.9), { as: 'upper' }), ride([12, 14], out(-0.9, 0.9), { as: 'lower' })],
  },
  'phone-off-02': {
    verb: 'the slash redraws and the home dot blinks out',
    parts: [draw({ as: 'slash' }), blink({ delay: 0.1 }), null, null],
  },
  php: {
    verb: 'the P, H, P letters hop one after another',
    parts: [null, hop([6.5, 12], 1.3, { as: 'letter' }), hop([17.5, 12], 1.3, { as: 'letter', delay: 0.16 }), hop([12, 12], 1.3, { as: 'letter', delay: 0.08 })],
  },
  physics: {
    verb: 'the orbits turn a sixth around the nucleus, which pops',
    parts: [lap(C, 60, { as: 'orbits', dur: 0.8 }), pop(C, 1.4, { as: 'nucleus', delay: 0.1 })],
  },
  'pi-circle': {
    verb: 'the π hops inside the ring',
    parts: [hop(C, 1.4, { as: 'pi' }), beat(C, { delay: 0.3 })],
  },
  'pi-square': {
    verb: 'the π pops bigger inside the tile',
    parts: [pop(C, 1.2, { as: 'pi' }), null],
  },
  pi: {
    verb: 'the legs grow down from the bar as the bar rewrites',
    parts: [
      retrace({ as: 'bar', dur: 0.6 }),
      scaleFrom('Y', [17.8, 6], [17.8, 13.5], [1, 0.3, 1.06, 1], { as: 'leg', times: [0, 0.2, 0.64, 1], ease: [INOUT, OUT, OUT], delay: 0.08 }),
      scaleFrom('Y', [8, 6], [8, 13], [1, 0.3, 1.06, 1], { as: 'leg', times: [0, 0.2, 0.64, 1], ease: [INOUT, OUT, OUT] }),
    ],
  },
  picasa: {
    verb: 'the pinwheel spins one full turn inside the ring',
    wrap: lap(C, 360, { as: 'wheel', dur: 0.9 }),
    parts: [null, null, null, null, null, null],
  },
  pickup: {
    verb: 'the truck body bounces on its wheels',
    parts: [
      ride([12, 11], [[0, 0], [0, -1], [0, 0.4], [0, -0.3], [0, 0]], { as: 'body', times: [0, 0.24, 0.5, 0.74, 1], dur: 0.66 }),
      null,
      null,
    ],
  },
  'pickup-01': {
    verb: 'the truck darts forward trailing speed lines, then rolls back',
    wrap: ride(C, out(1.6, 0), { as: 'truck', dur: 0.66 }),
    parts: [null, null, null],
    extras: [trail('M1.4 8.5H-0.6M1 12H-0.4', -1.6)],
  },
  'pickup-02': {
    verb: 'the headlight flashes and the cargo bed bounces',
    parts: [null, null, blink({ as: 'light' }), null, null, null, hop([7, 14.5], 1, { as: 'bed', delay: 0.12 })],
  },
  'picture-in-picture-exit': {
    verb: 'the arrow pulls up out of the corner window and the window nods',
    parts: [null, beat([18, 17], { delay: 0.26 }), nudge([8.5, 10.5], -1.2, -1.2)],
  },
  'picture-in-picture-on': {
    verb: 'the arrow pushes down into the corner window, which pops',
    parts: [null, pop([18, 17], 1.12, { as: 'window', delay: 0.26 }), nudge([8.5, 10.5], 1.2, 1.2)],
  },

  // --- pie charts ---------------------------------------------------------------------------------
  'pie-chart-01': {
    verb: 'the slice pops further out of the pie, then slides back',
    parts: [null, ride([17.5, 6.5], out(1.1, -1.1), { as: 'slice' })],
  },
  'pie-chart-02': {
    verb: 'the loose slice presses home into the notch, then floats back out',
    parts: [beat([11.1, 12.9], { delay: 0.2 }), ride([18.1, 5.9], out(-1, 1), { as: 'slice' })],
  },
  'pie-chart-03': {
    verb: 'the radius sweeps up the quarter and swings back',
    parts: [null, null, swing(C, [17, 12], [0, -32, 7, -2, 0], { as: 'radius' })],
  },
  'pie-chart-04': {
    verb: 'the rim traces around and the divider redraws',
    parts: [loop({ as: 'rim' }), draw({ as: 'divider', delay: 0.2 })],
  },
  'pie-chart-05': {
    verb: 'the donut hole swells and the top and bottom ticks redraw',
    parts: [null, pop(C, 1.18, { as: 'hole' }), draw({ as: 'tick', delay: 0.14 }), draw({ as: 'tick', delay: 0.06 })],
  },
  'pie-chart-06': {
    verb: 'the donut turns one full revolution',
    wrap: lap(C, 360, { as: 'donut', dur: 0.9 }),
    parts: [null, null, null, null],
  },
  'pie-chart-07': {
    verb: 'the four ticks redraw clockwise from the top',
    parts: [null, beat(C, { delay: 0.36 }), draw({ as: 'tick', delay: 0.27 }), draw({ as: 'tick', delay: 0.09 }), draw({ as: 'tick', delay: 0.18 }), draw({ as: 'tick' })],
  },
  'pie-chart-08': {
    verb: 'the three ticks push outward from the hub and spring back',
    parts: [null, beat(C, { delay: 0.1 }), ride([5.5, 15.7], out(-0.9, 0.5), { as: 'tick' }), ride([18.5, 15.7], out(0.9, 0.5), { as: 'tick' }), ride([12, 4.5], out(0, -1), { as: 'tick' })],
  },
  'pie-chart-09': {
    verb: 'the slice swells from the centre and the remaining arc rewrites',
    parts: [swell([11, 12], [16.1, 11.2], [1, 0.88, 1.08, 1, 1], { as: 'slice' }), retrace({ as: 'arc', delay: 0.1 })],
  },
  'pie-chart-square': {
    verb: 'the pie turns a full revolution inside its tile',
    parts: [null, lap(C, 360, { as: 'pie' })],
  },
  'pie-chart': {
    verb: 'the slice pops bigger and the arc rewrites around it',
    parts: [retrace({ as: 'arc', delay: 0.08 }), pop([16.6, 7.4], 1.16, { as: 'slice' })],
  },
}

export default settleSpecs(specs)
