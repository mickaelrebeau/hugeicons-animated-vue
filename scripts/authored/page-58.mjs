/**
 * Page 58 — save-energy-02 → self-transfer.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * save, search-01. The hidden handcrafted scissor-01 sits in this span and is
 * skipped too. search shares search-01's geometry, so it scans in a circle
 * instead of the original's wobble.
 *
 * Search magnifiers keep the lens and let the inner mark act (plus spins,
 * minus wipes, X twists, brackets part, dollar flips). Security shields keep
 * the shield and let the badge inside answer. Scooters roll, school bells ring
 * from their crown.
 *
 * Identical-geometry pairs get different jobs: school-bell / -01,
 * scooter / -01, search / search-01, search-list / -01, select / -01.
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
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  spinStar,
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
/** A small circular scan path for a magnifier. */
const SCAN = [[0, 0], [-0.9, -0.7], [0.7, -0.9], [0.4, 0.5], [0, 0]]
const scan = (c, o = {}) => ride(c, SCAN, { as: 'lens', ease: INOUT, dur: 0.9, ...o })
/** Plain magnifier [handle, lens, mark]: the mark acts while the lens holds. */
const mag = (mark) => [null, null, mark]
const flash = (c, s = 1.22, o = {}) => ({ ...pop(c, s, { as: 'bolt', ...o }), opacity: [1, 0.3, 1, 1] })
/** Save-money hand under a coin: [coin, glyph, hand]. */
const saveMoney = (glyph) => [hop([14, 7.5], 1.2, { as: 'coin' }), glyph, ride([11.1, 18], out(0, -0.5), { as: 'hand' })]

// ---------------------------------------------------------------------------

const specs = {
  // --- saving ---------------------------------------------------------------------------------
  'save-energy-02': {
    verb: 'the bulb swings on its cord and the bolt flashes',
    parts: [null, wiggle([12, 3.5], [12, 8.5], 8, { as: 'bulb' }), flash([18, 18.5]), wiggle([12, 3.5], [10.5, 17.8], 8, { as: 'bulb' })],
  },
  'save-energy': {
    verb: 'the bolt flashes in the bulb and the hand cups it',
    parts: [beat([15, 7], { delay: 0.2 }), flash([15, 7], 1.3), ride([12.1, 18], out(0, -0.6), { as: 'hand', delay: 0.1 })],
  },
  'save-money-dollar': {
    verb: 'the coin hops off the hand and the dollar flips',
    parts: saveMoney(flip([14, 9], 1, { as: 'glyph', delay: 0.1 })),
  },
  'save-money-euro': {
    verb: 'the coin hops off the hand and the euro pops',
    parts: saveMoney(pop([13.3, 9], 1.2, { as: 'glyph', delay: 0.1 })),
  },
  'save-money-pound': {
    verb: 'the coin hops off the hand and the pound rewrites',
    parts: saveMoney(line(0.1, { as: 'glyph', dur: 0.6 })),
  },
  'save-money-yen': {
    verb: 'the coin hops off the hand and the yen stamps',
    parts: saveMoney(stamp([14, 9], { as: 'glyph', delay: 0.1 })),
  },
  'save-off': {
    verb: 'the slash cuts across and the disk dims',
    parts: [dim({ delay: 0.14 }), dim({ delay: 0.14 }), dim({ delay: 0.14 }), draw({ as: 'slash' })],
  },
  savings: {
    verb: 'the coin drops into the open hand, which lifts to catch it',
    parts: [null, ride([9.5, 15.8], out(0, -0.6), { as: 'hand', delay: 0.3 }), ride([14.1, 17.4], out(0, -0.6), { as: 'hand', delay: 0.3 }), ride([14, 7], [[0, 0], [0, -1.6], [0, 0.6], [0, 0], [0, 0]], { as: 'coin', times: [0, 0.24, 0.5, 0.76, 1] })],
  },

  // --- scans ---------------------------------------------------------------------------------
  'scan-eye': {
    verb: 'the eye blinks inside the scan brackets and the pupil looks around',
    parts: [{ as: 'eye', origin: C, transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.24, 0.48], ease: INOUT, dur: 0.8 }, ride(C, SCAN, { as: 'pupil', ease: INOUT, dur: 0.8 }), null],
  },
  'scan-heart': {
    verb: 'the heart beats inside the scan brackets',
    parts: [null, { as: 'heart', origin: [12, 12.5], transform: ['scale(1)', 'scale(1.18)', 'scale(1)', 'scale(1.12)', 'scale(1)'], times: [0, 0.18, 0.4, 0.58, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  'scan-image': {
    verb: 'the scan brackets close in on the photo and the sun pops',
    parts: [swell(C, C, [1, 0.92, 1.03, 1, 1], { as: 'brackets' }), null, null, pop([10.3, 9.8], 2, { as: 'sun', delay: 0.2 })],
  },
  scan: {
    verb: 'the scan line sweeps down and back up between the brackets',
    parts: [null, ride(C, [[0, 0], [0, -6], [0, 6], [0, 0], [0, 0]], { as: 'scanline', times: [0, 0.25, 0.75, 1, 1], ease: INOUT, dur: 1 })],
  },
  scheme: {
    verb: 'the four corner nodes pulse out from the hub in turn',
    parts: [
      pop([19.5, 4.5], 1.2, { as: 'node', delay: 0.08 }),
      pop(C, 1.14, { as: 'hub' }),
      pop([19.5, 19.5], 1.2, { as: 'node', delay: 0.16 }),
      pop([4.5, 19.5], 1.2, { as: 'node', delay: 0.24 }),
      pop([4.5, 4.5], 1.2, { as: 'node' }),
      line(0.1, { as: 'links', dur: 0.6 }),
    ],
  },

  // --- school ---------------------------------------------------------------------------------
  'school-01': {
    verb: 'the bell window pops and the side wings nod in',
    parts: [null, null, pop([12, 9.5], 1.2, { as: 'clock' }), ride([20, 16.5], out(-0.5, 0), { as: 'wing', delay: 0.1 }), ride([4, 16.5], out(0.5, 0), { as: 'wing', delay: 0.1 }), null],
  },
  'school-bell': {
    verb: 'the bell rings from its crown and the clapper swings',
    parts: [wiggle([10.5, 2], [10.3, 10], 12, { as: 'bell' }), wiggle([10.5, 2], [16, 17.5], 12, { as: 'bell' }), wiggle([10.5, 2], [19, 12.5], 12, { as: 'bell' }), wiggle([10.5, 2], [10.5, 10], -10, { as: 'clapper', delay: 0.06 })],
  },
  'school-bell-01': {
    verb: 'the handle bell is shaken up and down',
    parts: [ride([10.3, 10], [[0, 0], [0.8, -0.8], [-0.4, 0.4], [0.6, -0.6], [0, 0]], { as: 'bell', ease: 'easeInOut' }), ride([16, 17.5], [[0, 0], [0.8, -0.8], [-0.4, 0.4], [0.6, -0.6], [0, 0]], { as: 'bell', ease: 'easeInOut' }), ride([19, 12.5], [[0, 0], [0.8, -0.8], [-0.4, 0.4], [0.6, -0.6], [0, 0]], { as: 'bell', ease: 'easeInOut' }), pop([10.5, 10], 1.3, { as: 'clapper', delay: 0.1 })],
  },
  'school-bell-02': {
    verb: 'the hand bell swings and the sound arcs flash',
    parts: [wiggle([17, 6.8], [9.2, 14.8], 10, { as: 'bell' }), wave([17, 19], { as: 'sound', delay: 0.12 }), wave([5, 7], { as: 'sound', delay: 0.12 }), wiggle([17, 6.8], [17.2, 6.8], 10, { as: 'bell' }), wiggle([17, 6.8], [5.9, 18.1], 10, { as: 'bell' })],
  },
  'school-bus': {
    verb: 'the bus bounces on its wheels and the headlights flash',
    parts: [
      null,
      null,
      ...[[12, 10.5], [7.5, 16], [16.5, 16], [2, 9], [22, 9], [12, 5], [12, 13], [12, 9]].map((c, i) =>
        i === 1 || i === 2
          ? { ...ride(c, [[0, 0], [0, -0.8], [0, 0.3], [0, -0.2], [0, 0]], { as: 'body', times: [0, 0.24, 0.5, 0.74, 1], dur: 0.66 }), opacity: [1, 0.2, 1, 0.2, 1] }
          : ride(c, [[0, 0], [0, -0.8], [0, 0.3], [0, -0.2], [0, 0]], { as: 'body', times: [0, 0.24, 0.5, 0.74, 1], dur: 0.66 }),
      ),
    ],
  },
  'school-report-card': {
    verb: 'the A grade stamps onto the card and the line rewrites',
    parts: [null, stamp([12, 10], { as: 'grade' }), line(0.2)],
  },
  'school-tie': {
    verb: 'the tie swings from its knot',
    parts: [wiggle([13.5, 6], [13.5, 14], 8, { as: 'tie' }), null, wiggle([13.5, 6], [9.2, 11], 8, { as: 'tie' })],
  },
  school: {
    verb: 'the clock above the door pops and the windows light in turn',
    parts: [null, null, ...[0, 0.1, 0.2, 0.3].map((d) => blink({ as: 'window', opacity: [1, 0.1, 1, 1, 1], delay: d })), pop([12, 10], 1.2, { as: 'clock' })],
  },

  // --- scissors, scooters ---------------------------------------------------------------------------------
  'scissor-rectangle': {
    verb: 'the scissors snip inside the tile',
    parts: [null, { as: 'scissor', origin: [11, 12], transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1)', 'scaleY(0.6)', 'scaleY(1)'], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut', dur: 0.7 }],
  },
  scissor: {
    verb: 'the blades snip shut and open twice',
    parts: [
      null,
      null,
      swing([12, 11], [9, 13.5], [0, 8, 0, 8, 0], { as: 'blade', times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut' }),
      swing([12, 11], [13, 14], [0, -8, 0, -8, 0], { as: 'blade', times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut' }),
      swing([12, 11], [5.8, 7.5], [0, -8, 0, -8, 0], { as: 'blade', times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut' }),
    ],
  },
  'scooter-01': {
    verb: 'the scooter darts forward trailing speed lines',
    wrap: ride(C, out(1.4, 0), { as: 'scooter', dur: 0.66 }),
    parts: [null, null, null, null, null],
    extras: [trail('M1.5 8H0M1.5 11H0.5', -1.4)],
  },
  'scooter-02': {
    verb: 'the scooter bounces over a bump',
    wrap: tilt([20, 17], -5),
    parts: [null, null, null, null, null],
  },
  'scooter-03': {
    verb: 'the rider leans into the handlebars and back',
    parts: [ride([12, 4], out(0, 0.8), { as: 'rider' }), wiggle([12, 4], [8, 4], 8, { as: 'bar' }), wiggle([12, 4], [16, 4], -8, { as: 'bar' }), null, null],
  },
  'scooter-04': {
    verb: 'the kick scooter rolls forward and back',
    wrap: ride(C, [[0, 0], [1.4, 0], [-0.6, 0], [0, 0], [0, 0]], { as: 'scooter', ease: INOUT, dur: 0.8 }),
    parts: [null, null, null],
  },
  'scooter-electric': {
    verb: 'the bolt on the deck flashes and the scooter lunges forward',
    wrap: ride(C, out(1, 0), { as: 'scooter', delay: 0.16 }),
    parts: [null, null, null, flash([11, 9.5], 1.4)],
  },
  scooter: {
    verb: 'the scooter pops a wheelie on its back wheel',
    wrap: { as: 'scooter', origin: [7, 20], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(-8deg)', 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
    parts: [null, null, null, null, null],
  },
  'scratch-card': {
    verb: 'the scratch strip wipes off and the coin pops',
    parts: [null, scaleFrom('X', [11.5, 8.8], [16.5, 8.8], [1, 0.1, 0.1, 1], { as: 'strip', dur: 0.8 }), pop([7.5, 11.5], 1.2, { as: 'coin', delay: 0.14 })],
  },

  // --- screens ---------------------------------------------------------------------------------
  'screen-add-to-home-02': {
    verb: 'the arrow flicks onto the phone and the phone nods',
    parts: [beat([13.5, 12], { delay: 0.26 }), null, nudge([7.5, 12.5], 1, -1, { as: 'arrow' })],
  },
  'screen-add-to-home': {
    verb: 'the arrow flicks onto the phone and the home dot pops',
    parts: [pop([13.5, 19], 2, { as: 'dot', delay: 0.24 }), null, nudge([7.5, 12.5], 1, -1, { as: 'arrow' })],
  },
  'screen-lock-rotation': {
    verb: 'the rotation arrows strain and the padlock holds them',
    parts: [wiggle(C, [13, 11.5], -8, { as: 'arrow' }), wiggle(C, [7.5, 17], -8, { as: 'arrow' }), shake([17.5, 7], { as: 'lock', delay: 0.1 })],
  },
  'screen-rotation': {
    verb: 'the phone turns a quarter between the two arrows and back',
    parts: [line(0.1, { as: 'arrow' }), line(0.1, { as: 'arrow' }), { as: 'phone', origin: C, transform: ['rotate(0deg)', 'rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.9 }],
  },
  scribd: {
    verb: 'the two strokes of the mark slide apart and click back',
    parts: [ride([14.2, 12], out(0.8, -0.6), { as: 'stroke' }), ride([7.5, 16.1], out(-0.8, 0.6), { as: 'stroke' })],
  },

  // --- scrolls ---------------------------------------------------------------------------------
  'scroll-01': {
    verb: 'the scroll unrolls downward and the lines rewrite',
    parts: [null, scaleFrom('Y', [14, 9], [14, 15], [1, 0.7, 1.03, 1], { as: 'paper', times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT] }), null, line(0.2), line(0.28)],
  },
  'scroll-horizontal': {
    verb: 'the side arrows push outward from the wheel',
    parts: [pop(C, 1.2, { as: 'wheel' }), nudge([5.2, 12], -1.2, 0), nudge([18.8, 12], 1.2, 0)],
  },
  'scroll-vertical': {
    verb: 'the top and bottom arrows push outward from the wheel',
    parts: [pop(C, 1.2, { as: 'wheel' }), nudge([12, 5.2], 0, -1.2), nudge([12, 18.8], 0, 1.2)],
  },
  scroll: {
    verb: 'the scroll lines rewrite as the scroll nods',
    parts: [line(0), line(0.08), line(0.16), beat(C, { delay: 0.3 })],
  },
  'sd-card': {
    verb: 'the card pushes in and its contacts blink',
    parts: [ride(C, out(0, -1), { as: 'card' }), blink({ as: 'pin', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'pin', opacity: [1, 0.1, 1, 1, 1], delay: 0.13 }), blink({ as: 'pin', opacity: [1, 0.1, 1, 1, 1], delay: 0.06 })],
  },
  seal: {
    verb: 'the seal turns a notch and stamps',
    parts: [{ as: 'seal', origin: C, transform: ['rotate(0deg) scale(1)', 'rotate(-20deg) scale(0.9)', 'rotate(6deg) scale(1.06)', 'rotate(0deg) scale(1)'], times: [0, 0.34, 0.68, 1], ease: OUT, dur: 0.66 }],
  },

  // --- search ---------------------------------------------------------------------------------
  search: {
    verb: 'the magnifier scans around in a small circle',
    wrap: ride(C, SCAN, { as: 'magnifier', ease: INOUT, dur: 0.9 }),
    parts: [null, null],
  },
  'search-02': {
    verb: 'the magnifier tilts from its handle knob',
    parts: [wiggle([19, 19], [15.8, 15.8], -10, { as: 'glass' }), null, wiggle([19, 19], [9.5, 9.5], -10, { as: 'glass' })],
  },
  'search-add': {
    verb: 'the plus spins inside the lens',
    parts: mag(spinStar([11, 11], { as: 'plus' })),
  },
  'search-area': {
    verb: 'the magnifier scans while the dashed frame traces around it',
    parts: [scan([15, 15]), loop({ as: 'frame', dur: 1.1 })],
  },
  'search-circle': {
    verb: 'the magnifier tilts inside the ring',
    parts: [beat(C, { delay: 0.3 }), wiggle([16, 16], [12.5, 12.5], 14, { as: 'glass' })],
  },
  'search-code': {
    verb: 'the code brackets push apart inside the lens',
    parts: [null, null, nudge([7.7, 11], -0.9, 0, { as: 'bracket' }), nudge([14.3, 11], 0.9, 0, { as: 'bracket' })],
  },
  'search-dollar': {
    verb: 'the dollar flips inside the lens',
    parts: mag(flip([11, 11], 1, { as: 'dollar' })),
  },
  'search-focus': {
    verb: 'the focus corner snaps tight inside the lens',
    parts: mag(swell([11, 11], [11, 11], [1, 0.7, 1.08, 1, 1], { as: 'focus' })),
  },
  'search-list-01': {
    verb: 'the magnifier scans over the lines, which rewrite',
    parts: [line(0.1), line(0.2), line(0), scan([15.8, 14.3])],
  },
  'search-list-02': {
    verb: 'the magnifier dips down to the lines and rises',
    parts: [line(0.18), line(0.26), line(0.34), ride([15.8, 10.3], out(-0.8, 1.2), { as: 'lens' })],
  },
  'search-list': {
    verb: 'the magnifier tilts over the list and the lines blink',
    parts: [blink({ as: 'line', opacity: [1, 0.2, 1, 1, 1], delay: 0.1 }), blink({ as: 'line', opacity: [1, 0.2, 1, 1, 1], delay: 0.2 }), blink({ as: 'line', opacity: [1, 0.2, 1, 1, 1] }), wiggle([20, 18.5], [15.8, 14.3], -12, { as: 'lens' })],
  },
  'search-minus': {
    verb: 'the minus wipes off inside the lens',
    parts: mag(draw({ as: 'minus' })),
  },
  'search-remove': {
    verb: 'the X twists a quarter inside the lens',
    parts: mag(lap([11, 11], 90, { as: 'x', dur: 0.6 })),
  },
  'search-replace': {
    verb: 'the lens rim winds back around itself',
    parts: [null, lap([11, 11], -360, { as: 'rim', dur: 0.9 })],
  },
  'search-square': {
    verb: 'the magnifier pops in the tile',
    parts: [null, pop([12.5, 12.5], 1.16, { as: 'glass' })],
  },
  'search-visual': {
    verb: 'the magnifier scans the frame',
    parts: [scan([12.5, 12]), beat(C, { delay: 0.4 })],
  },
  searching: {
    verb: 'the magnifier scans under the arc, which pulses',
    parts: [scan([18.3, 19.3]), scan([12, 13]), wave([12, 6], { as: 'arc', delay: 0.1 })],
  },

  // --- seats, brackets, security ---------------------------------------------------------------------------------
  'seat-selector': {
    verb: 'the seat cushion sinks and the backrest leans back',
    parts: [null, null, ride([12, 16], out(0, 0.8), { as: 'seat' }), null, null, wiggle([12, 14], [12, 6], -5, { as: 'back', delay: 0.1 })],
  },
  'second-bracket-circle': {
    verb: 'the curly braces flex inside the ring',
    parts: [flex('X', C, C, [1, 1.2, 0.94, 1, 1], { as: 'braces' }), beat(C, { delay: 0.3 })],
  },
  'second-bracket-square': {
    verb: 'the curly braces pinch in inside the tile',
    parts: [flex('X', C, C, [1, 0.75, 1.05, 1, 1], { as: 'braces' }), null],
  },
  'second-bracket': {
    verb: 'the curly braces rewrite themselves',
    parts: [line(0, { as: 'braces', dur: 0.7 })],
  },
  section: {
    verb: 'the two loops of the section sign hop in turn',
    parts: [hop([12, 9], 1.2, { as: 'loop' }), hop([12, 15], 1.2, { as: 'loop', delay: 0.12 })],
  },
  'secured-network': {
    verb: 'the lock shackle clicks and the network line rewrites',
    parts: [beat([12, 13], { delay: 0.14 }), ride([12, 5], out(0, 0.8), { as: 'shackle' }), line(0.2, { as: 'network' }), pop([12, 13], 2, { as: 'keyhole', delay: 0.2 })],
  },
  'security-block': {
    verb: 'the slash cuts across the shield, which dims',
    parts: [dim({ delay: 0.14 }), draw({ as: 'slash' })],
  },
  'security-check': {
    verb: 'the check draws itself on the shield',
    parts: [beat(C, { delay: 0.34 }), draw({ as: 'check' })],
  },
  'security-key-usb': {
    verb: 'the key pushes into the port and the lock badge nods',
    parts: [ride([10, 14.8], out(0, -1), { as: 'key' }), ride([10, 4.8], out(0, -1), { as: 'key' }), beat([15.5, 17.5], { delay: 0.2 }), ride([10, 4.5], out(0, -1), { as: 'key' })],
  },
  'security-lock': {
    verb: 'the padlock on the shield snaps its shackle shut',
    parts: [null, ride([12, 8.3], out(0, 0.8), { as: 'shackle' }), beat([12, 12.3], { delay: 0.12 })],
  },
  'security-password': {
    verb: 'the password dots appear one by one on the shield',
    parts: [null, pop([12, 11], 2, { as: 'dot', delay: 0.12 }), pop([16, 11], 2, { as: 'dot', delay: 0.24 }), pop([8, 11], 2, { as: 'dot' })],
  },
  'security-validation': {
    verb: 'the ring traces round and the check draws inside it',
    parts: [draw({ as: 'check', delay: 0.3 }), loop({ as: 'ring', dur: 0.8 }), null],
  },
  'security-warning': {
    verb: 'the shield rattles and the bang stretches',
    parts: [shake(C), flex('Y', [12, 7], [12, 9], [1, 1.2, 0.95, 1, 1], { as: 'bang' }), pop([12, 14.8], 2, { as: 'dot', delay: 0.2 })],
  },
  'security-wifi': {
    verb: 'the wifi arcs pulse on the shield',
    parts: [null, wave([12, 11.5], { as: 'signal' })],
  },
  security: {
    verb: 'the keyhole on the shield turns',
    parts: [null, wiggle([12, 11], [12, 9.5], 30, { as: 'keyhole' }), wiggle([12, 11], [12, 12.3], 30, { as: 'keyhole' })],
  },
  seesaw: {
    verb: 'the plank tips one way and the other on its pivot',
    parts: [null, null, wiggle([12, 12], [12.1, 9.6], 10, { as: 'plank', dur: 0.9 })],
  },
  segment: {
    verb: 'the segment bar grows and the cursor pill pops',
    parts: [line(0, { as: 'letter', dur: 0.6 }), line(0.1, { as: 'track' }), pop([18.5, 8.5], 1.16, { as: 'pill', delay: 0.16 })],
  },

  // --- select ---------------------------------------------------------------------------------
  select: {
    verb: 'the plus spins at the corner and the dashed box traces',
    parts: [spinStar([5, 5], { as: 'plus' }), loop({ as: 'box', delay: 0.1 })],
  },
  'select-01': {
    verb: 'the dashed box grows out from the plus corner',
    parts: [pop([5, 5], 1.3, { as: 'plus' }), swell([5, 5], [13.5, 13.5], [1, 0.8, 1.04, 1, 1], { as: 'box' })],
  },
  'select-02': {
    verb: 'the plus spins and the three corner handles pop in turn',
    parts: [spinStar([5, 5], { as: 'plus' }), null, pop([20, 5], 1.3, { as: 'handle', delay: 0.1 }), pop([20, 20], 1.3, { as: 'handle', delay: 0.2 }), pop([5, 20], 1.3, { as: 'handle', delay: 0.3 })],
  },
  'self-transfer': {
    verb: 'the walker strides forward, head bobbing',
    parts: [wiggle([7, 15], [6.2, 18.2], 10, { as: 'leg' }), ride([15.3, 14.7], out(0.6, 0), { as: 'body' }), wiggle([12, 17], [13.8, 19.2], -10, { as: 'leg' }), hop([14.5, 4], 0.8, { as: 'head' })],
  },
}

export default settleSpecs(specs)
