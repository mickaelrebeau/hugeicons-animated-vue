/**
 * Page 15 — cards → chart-gantt.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * The chart family is big here: every chart gets the gesture its data
 * implies (columns grow, decreasing ones sag, candles trade, bubbles inflate
 * or float, trend lines are written, the breakout arrow escapes).
 *
 * Identical-geometry pairs get different jobs: cash / cash-01,
 * certificate / certificate-01, chair / chair-01, chart-bubble / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  T5,
  E5,
  HOLD_E,
  HOLD_T,
  around,
  beat,
  blink,
  dim,
  flex,
  flip,
  lap,
  pop,
  rise,
  wave,
  burst,
  draw,
  glint,
  nudge,
  puff,
  rays,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  swing,
  sweep,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

/** Diagonal step toward/away from a point, shared by four corners. */
const toward = (origin, [cx, cy], d, o = {}) => {
  const [x, y] = origin
  const len = Math.hypot(cx - x, cy - y) || 1
  return nudge(origin, Math.round(((cx - x) / len) * d * 100) / 100, Math.round(((cy - y) / len) * d * 100) / 100, o)
}

const CASH = (pivot, center) => swing(pivot, center, [0, -7, 1.5, 0, 0], { as: 'note', dur: 0.62 })
const SHIP = [0, -3, 2.5, -1, 0]
const LAST = { times: [0, 0.3, 0.56, 0.86, 1], ease: [INOUT, 'linear', INOUT, OUT], dur: 0.8 }

// ---------------------------------------------------------------------------

const specs = {
  cards: {
    verb: 'the back card is shuffled out to the side and tucked back as the diamond turns',
    parts: [
      ride([10, 13.5], [[0, 0], [-0.9, 0.3], [-0.9, 0.3], [0.1, 0], [0, 0]], { as: 'front', ...LAST }),
      stamp([10, 13.5], { as: 'suit', delay: 0.1, transform: ['rotate(0deg) scale(1)', 'rotate(-45deg) scale(0.7)', 'rotate(95deg) scale(1.1)', 'rotate(90deg) scale(1)'] }),
      ride([14.2, 10.3], [[0, 0], [2.4, 0.6], [2.4, 0.6], [-0.2, 0], [0, 0]], { as: 'back', ...LAST }),
    ],
  },
  'cargo-ship': {
    verb: 'the ship rolls on the swell, the sea slides under it and the stack puffs smoke',
    parts: [
      ride([12, 21], [[0, 0], [-1, 0], [0.8, 0], [-0.4, 0], [0, 0]], { as: 'sea', dur: 0.86 }),
      swing([12, 21], [12, 15.5], SHIP, { as: 'hull', dur: 0.86 }),
      swing([12, 21], [12, 9.8], SHIP, { as: 'hull', dur: 0.86 }),
      swing([12, 21], [12, 4.5], SHIP, { as: 'hull', dur: 0.86 }),
    ],
    extras: [puff(13.6, 1.4, 0.6, 1.3, -0.9, { delay: 0.1 }), puff(12.6, 1.6, 0.45, 1, -1.2, { delay: 0.36 })],
  },

  'carousel-horizontal-02': {
    verb: 'the carousel swipes left: the slide slips aside and the next edge slides in',
    parts: [
      {
        as: 'slide',
        origin: [12, 12],
        transform: ['translateX(0px) scaleX(1)', 'translateX(-2.2px) scaleX(0.9)', 'translateX(0.4px) scaleX(1.02)', 'translateX(0px) scaleX(1)'],
        times: [0, 0.38, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.66,
      },
      { as: 'peek', origin: [2.8, 12], transform: ['translateX(0px)', 'translateX(-1.4px)', 'translateX(0px)'], opacity: [1, 0, 1], times: [0, 0.38, 1], ease: [INOUT, OUT], dur: 0.66 },
      { as: 'peek', origin: [21.3, 12], transform: ['translateX(0px)', 'translateX(-1.6px)', 'translateX(0px)'], times: [0, 0.38, 1], ease: [INOUT, OUT], dur: 0.66 },
    ],
  },
  'carousel-horizontal': {
    verb: 'the carousel turns: the slide narrows as if rotating and the side slides open out',
    parts: [
      { as: 'slide', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.66)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.7 },
      ride([3, 12], [[0, 0], [1.6, 0], [-0.3, 0], [0, 0], [0, 0]], { as: 'side', times: [0, 0.4, 0.72, 0.9, 1], dur: 0.7 }),
      ride([21, 12], [[0, 0], [-1.6, 0], [0.3, 0], [0, 0], [0, 0]], { as: 'side', times: [0, 0.4, 0.72, 0.9, 1], dur: 0.7 }),
    ],
  },
  'carousel-vertical': {
    verb: 'the carousel scrolls up: the slide rises and the edges follow',
    parts: [
      ride([12, 12], [[0, 0], [0, -2], [0, 0.4], [0, 0], [0, 0]], { as: 'slide', times: [0, 0.38, 0.7, 0.9, 1], dur: 0.66 }),
      { as: 'peek', origin: [12, 3], transform: ['translateY(0px)', 'translateY(-1.2px)', 'translateY(0px)'], opacity: [1, 0, 1], times: [0, 0.38, 1], ease: [INOUT, OUT], dur: 0.66 },
      { as: 'peek', origin: [12, 21], transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(0px)'], times: [0, 0.38, 1], ease: [INOUT, OUT], dur: 0.66 },
    ],
  },

  carrot: {
    verb: 'the carrot is tugged up out of the soil, its leafy top shaking',
    parts: [
      ride([9.5, 14.5], [[0, 0], [0.9, -0.9], [-0.2, 0.2], [0, 0], [0, 0]], { as: 'root', times: [0, 0.34, 0.66, 0.88, 1], dur: 0.66 }),
      ride([13.8, 14.8], [[0, 0], [0.9, -0.9], [-0.2, 0.2], [0, 0], [0, 0]], { as: 'root', times: [0, 0.34, 0.66, 0.88, 1], dur: 0.66 }),
      ride([7.8, 11.8], [[0, 0], [0.9, -0.9], [-0.2, 0.2], [0, 0], [0, 0]], { as: 'root', times: [0, 0.34, 0.66, 0.88, 1], dur: 0.66 }),
      ride([8.5, 18.5], [[0, 0], [0.9, -0.9], [-0.2, 0.2], [0, 0], [0, 0]], { as: 'root', times: [0, 0.34, 0.66, 0.88, 1], dur: 0.66 }),
      { ...around([16.5, 7.5], [18.5, 5.5], [0, -16, 12, -5, 0], { dur: 0.76 }), as: 'leaves' },
    ],
  },

  'case-lower': {
    verb: 'the two lowercase letters hop one after the other',
    parts: [
      ride([6.5, 13.5], [[0, 0], [0, -1.6], [0, 0.3], [0, 0], [0, 0]], { as: 'letter', times: [0, 0.34, 0.64, 0.86, 1], dur: 0.56 }),
      ride([17.5, 13.5], [[0, 0], [0, -1.6], [0, 0.3], [0, 0], [0, 0]], { as: 'letter', times: [0, 0.34, 0.64, 0.86, 1], dur: 0.56, delay: 0.14 }),
      ride([10, 13.5], [[0, 0], [0, -1.6], [0, 0.3], [0, 0], [0, 0]], { as: 'letter', times: [0, 0.34, 0.64, 0.86, 1], dur: 0.56 }),
      ride([14, 12], [[0, 0], [0, -1.6], [0, 0.3], [0, 0], [0, 0]], { as: 'letter', times: [0, 0.34, 0.64, 0.86, 1], dur: 0.56, delay: 0.14 }),
    ],
  },
  'case-sensitive': {
    verb: 'the capital shrinks while the small letter swells, then both return',
    parts: [
      { ...scaleFrom('Y', [18, 17], [18, 13.5], [1, 1.35, 1.35, 1]), as: 'small' },
      { ...scaleFrom('Y', [7, 17.8], [7, 12], [1, 0.72, 0.72, 1]), as: 'capital' },
    ],
  },
  'case-upper': {
    verb: 'the letters stand up tall from the baseline, A first and then B',
    parts: [
      { ...scaleFrom('Y', [18, 17], [18, 9.5], [1, 1.25, 0.96, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.58, delay: 0.12 }), as: 'bowl' },
      { ...scaleFrom('Y', [18.5, 17], [18.5, 14.5], [1, 1.25, 0.96, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.58, delay: 0.12 }), as: 'bowl' },
      { ...scaleFrom('Y', [6.5, 17.8], [6.5, 12], [1, 1.18, 0.96, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.58 }), as: 'letter' },
    ],
  },

  'cash-01': {
    verb: 'the coin in the note flips twice and a glint runs off the corner',
    parts: [null, null, null, null, null, null, flip([12, 10.5], 2)],
    extras: [glint(20.4, 2.2, 1, { delay: 0.3 })],
  },
  'cash-02': {
    verb: 'the curved note ripples in the hand and the coin flips',
    parts: [
      flip([12, 10.5], 1, { delay: 0.12 }),
      swing([2, 11], [12, 11], [0, 3, -2, 1, 0], { as: 'note', dur: 0.78 }),
      swing([2, 11], [12, 10.5], [0, 3, -2, 1, 0], { as: 'note', dur: 0.78 }),
      ride([12, 20.3], [[0, 0], [0, 0.6], [0, -0.3], [0, 0.1], [0, 0]], { as: 'stack', dur: 0.78 }),
    ],
  },
  cash: {
    verb: 'the top note is flicked up by its corner and falls back onto the stack',
    parts: [
      CASH([2, 17.5], [4, 15.5]),
      CASH([2, 17.5], [19.9, 15.5]),
      CASH([2, 17.5], [4, 5.5]),
      CASH([2, 17.5], [20, 5.5]),
      CASH([2, 17.5], [12, 10.5]),
      null,
      CASH([2, 17.5], [12, 10.5]),
    ],
  },

  cashback: {
    verb: 'the return arrow laps back counter-clockwise while the dollar flips over',
    parts: [lap([12, 12], -360, { as: 'return' }), flip([12.1, 12], 1, { delay: 0.2 })],
  },
  'cashback-bitcoin': {
    verb: 'the return arrow laps back and the bitcoin mark stamps into the middle',
    parts: [lap([12, 12], -360, { as: 'return', dur: 0.78 }), stamp([12.5, 12], { as: 'coin', delay: 0.26 })],
  },
  'cashback-euro': {
    verb: 'the return arrow rewrites itself and the euro slides back in from the right',
    parts: [
      sweep({ as: 'return' }),
      { as: 'coin', origin: [11.8, 12], transform: ['translateX(0px)', 'translateX(2.4px)', 'translateX(-0.3px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.3, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.7 },
    ],
  },
  'cashback-pound': {
    verb: 'the arrow winds back a notch and springs, and the pound drops in from above',
    parts: [
      { as: 'return', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-48deg)', 'rotate(8deg)', 'rotate(0deg)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.7 },
      { as: 'coin', origin: [12.5, 11.5], transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(0.4px)', 'translateY(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.3, 0.68, 1], ease: [INOUT, 'easeIn', OUT], dur: 0.7 },
    ],
  },
  'cashback-yen': {
    verb: 'the return arrow laps back slowly while the yen bounces on its stem',
    parts: [
      lap([12, 12], -360, { as: 'return', dur: 1 }),
      { as: 'coin', origin: [12, 12], transform: ['translateY(0px) scale(1, 1)', 'translateY(-1.2px) scale(0.92, 1.1)', 'translateY(0.3px) scale(1.1, 0.9)', 'translateY(0px) scale(1, 1)'], times: [0, 0.36, 0.64, 1], ease: [INOUT, 'easeIn', OUT], dur: 0.6, delay: 0.2 },
    ],
  },

  'cashier-02': {
    verb: 'the keys are punched row by row, the drawer slides open with a ding',
    parts: [
      ride([12, 19.5], [[0, 0], [0, 0], [0, 1.4], [0, 1.4], [0, 0]], { as: 'drawer', times: [0, 0.4, 0.56, 0.84, 1], ease: [INOUT, OUT, 'linear', INOUT], dur: 0.9 }),
      ride([12, 19.5], [[0, 0], [0, 0], [0, 1.4], [0, 1.4], [0, 0]], { as: 'drawer', times: [0, 0.4, 0.56, 0.84, 1], ease: [INOUT, OUT, 'linear', INOUT], dur: 0.9 }),
      { as: 'flag', origin: [16.5, 5.5], transform: ['rotate(0deg)', 'rotate(0deg)', 'rotate(-14deg)', 'rotate(8deg)', 'rotate(0deg)'], times: [0, 0.4, 0.56, 0.74, 1], ease: OUT, dur: 0.9 },
      null,
      { as: 'keys', opacity: [1, 0.15, 1, 1], times: [0, 0.12, 0.26, 1], ease: 'linear', dur: 0.9 },
      { as: 'keys', opacity: [1, 1, 0.15, 1, 1], times: [0, 0.18, 0.28, 0.42, 1], ease: 'linear', dur: 0.9 },
    ],
    extras: [glint(21.2, 2.4, 1, { delay: 0.34 })],
  },
  cashier: {
    verb: 'the drawer pops open and shut while the price sign flips and the display blinks',
    parts: [
      ride([12, 18], [[0, 0], [0, 1.4], [0, 1.4], [0, -0.2], [0, 0]], { as: 'drawer', ...LAST }),
      null,
      flip([14, 3.5], 1, { as: 'sign' }),
      ride([12, 18], [[0, 0], [0, 1.4], [0, 1.4], [0, -0.2], [0, 0]], { as: 'drawer', ...LAST }),
      blink({ dur: 0.7, delay: 0.1 }),
    ],
  },

  'cassette-tape': {
    verb: 'the reels spin and the tape runs between them',
    parts: [null, null, null, null, retrace({ as: 'tape', dur: 0.8 })],
    extras: [
      { as: 'spokes', tag: 'path', attrs: { d: rays(8, 10, 0, 1.3, 3, -90), strokeWidth: '1.1' }, origin: [8, 10], transform: ['rotate(0deg)', 'rotate(60deg)', 'rotate(300deg)', 'rotate(360deg)'], opacity: [0, 1, 1, 0], times: [0, 0.14, 0.84, 1], ease: 'linear', dur: 0.8 },
      { as: 'spokes', tag: 'path', attrs: { d: rays(16, 10, 0, 1.3, 3, -90), strokeWidth: '1.1' }, origin: [16, 10], transform: ['rotate(0deg)', 'rotate(60deg)', 'rotate(300deg)', 'rotate(360deg)'], opacity: [0, 1, 1, 0], times: [0, 0.14, 0.84, 1], ease: 'linear', dur: 0.8 },
    ],
  },
  cast: {
    verb: 'the cast signal ripples out from the corner dot and the screen catches it',
    parts: [
      wave([5.5, 18.5], { delay: 0.1 }),
      wave([7.5, 16.5], { delay: 0.22 }),
      pop([3.25, 20.75], 1.8),
      beat([12, 12], { as: 'screen', delay: 0.34 }),
    ],
  },
  castbox: {
    verb: 'the waveform bounces inside the hexagon like a playing podcast',
    parts: [
      beat([12, 12], { as: 'frame', delay: 0.06 }),
      { as: 'waveform', origin: [12, 12.5], transform: ['scaleY(1)', 'scaleY(1.4)', 'scaleY(0.68)', 'scaleY(1.22)', 'scaleY(1)'], times: T5, ease: E5, dur: 0.76 },
    ],
  },

  'castle-01': {
    verb: 'the gate swings open on its hinge and the windows light up',
    parts: [
      null,
      { ...scaleFrom('X', [9, 19.5], [12, 19.5], [1, 0.18, 0.18, 1]), as: 'gate', dur: 0.8 },
      null,
      null,
      blink({ dur: 0.6, delay: 0.18, times: [0, 0.25, 0.5, 0.75, 1] }),
      blink({ dur: 0.6, delay: 0.1, times: [0, 0.25, 0.5, 0.75, 1] }),
    ],
  },
  'castle-02': {
    verb: 'the pennant waves from its pole and the window flickers',
    parts: [
      null,
      flex('X', [12, 5], [14, 5], [1, 0.7, 1.08, 0.88, 1], { as: 'pennant', dur: 0.82 }),
      null,
      blink({ dur: 0.6, delay: 0.2, times: [0, 0.25, 0.5, 0.75, 1] }),
    ],
  },
  castle: {
    verb: 'the three merlons pop up in a fanfare and the gate settles',
    parts: [
      ride([12, 5.8], [[0, 0], [0, -0.6], [0, 0.1], [0, 0], [0, 0]], { as: 'parapet', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.6, delay: 0.3 }),
      beat([12, 19], { as: 'gate', delay: 0.42 }),
      null,
      null,
      null,
      ride([8, 3], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'merlon', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.5 }),
      ride([12, 3], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'merlon', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.5, delay: 0.1 }),
      ride([16, 3], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'merlon', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.5, delay: 0.2 }),
    ],
  },

  cat: {
    verb: 'the cat blinks slowly, cocks its head and twitches its whiskers',
    parts: [
      { as: 'eye', origin: [8, 11.3], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.2, 0.42, 0.6], ease: INOUT, dur: 0.8 },
      { as: 'eye', origin: [16, 11.3], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.2, 0.42, 0.6], ease: INOUT, dur: 0.8 },
      pop([12, 15.5], 1.3, { as: 'nose', delay: 0.4, dur: 0.36 }),
      { as: 'head', origin: [12, 11.9], transform: ['rotate(0deg)', 'rotate(-7deg)', 'rotate(-7deg)', 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
    ],
    extras: [
      {
        as: 'whiskers',
        tag: 'path',
        attrs: { d: 'M4.6 14.6L8 15.3M4.8 17L8 16.4M19.4 14.6L16 15.3M19.2 17L16 16.4', strokeWidth: '1.1' },
        origin: [12, 15.8],
        transform: ['scaleX(0.8)', 'scaleX(0.8)', 'scaleX(1.06)', 'scaleX(0.96)', 'scaleX(1.06)', 'scaleX(0.8)'],
        opacity: [0, 0, 1, 1, 1, 0],
        times: [0, 0.3, 0.46, 0.6, 0.74, 1],
        ease: OUT,
        dur: 0.9,
      },
    ],
  },

  catalogue: {
    verb: 'the two pages fan apart from their shared corner and close again',
    parts: [
      swing([2.5, 21.5], [8.5, 14.5], [0, -5, 1.2, 0, 0], { as: 'front', dur: 0.66 }),
      swing([21.5, 2.5], [15.5, 9.5], [0, -5, 1.2, 0, 0], { as: 'back', dur: 0.66 }),
      swing([2.5, 21.5], [8.5, 14.5], [0, -5, 1.2, 0, 0], { as: 'front', dur: 0.66 }),
      retrace({ as: 'fold', delay: 0.1, dur: 0.6 }),
    ],
  },

  'cayan-tower': {
    verb: 'the tower twists on its axis, its two silhouettes turning against each other',
    parts: [
      { as: 'twist', origin: [11.3, 12], transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      { as: 'windows', opacity: [1, 0.2, 1, 1], transform: ['translateX(0px)', 'translateX(0.8px)', 'translateX(0px)', 'translateX(0px)'], origin: [9.5, 15], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      { as: 'twist', origin: [12.3, 12], transform: ['scaleX(1)', 'scaleX(1.14)', 'scaleX(0.96)', 'scaleX(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      null,
    ],
  },

  'cctv-camera': {
    verb: 'the camera scans left, right and left again on its bracket',
    parts: [
      null,
      null,
      { ...around([8, 14], [11.8, 10.3], [0, -9, 8, -6, 0], { times: [0, 0.24, 0.5, 0.76, 1], ease: INOUT, dur: 1 }), as: 'camera' },
    ],
  },
  'cctv-off': {
    verb: 'the slash cuts across and the dead camera droops on its bracket',
    parts: [
      null,
      null,
      { ...around([8, 13.5], [14.1, 7.5], [0, 12, 12, 0], { times: HOLD_T, ease: HOLD_E, dur: 0.8, delay: 0.12 }), as: 'camera' },
      { ...around([8, 13.5], [8.4, 10], [0, 12, 12, 0], { times: HOLD_T, ease: HOLD_E, dur: 0.8, delay: 0.12 }), as: 'camera' },
      { ...around([8, 13.5], [20.8, 13.8], [0, 12, 12, 0], { times: HOLD_T, ease: HOLD_E, dur: 0.8, delay: 0.12 }), as: 'camera' },
      draw({ as: 'slash' }),
    ],
  },
  cctv: {
    verb: 'the camera tilts down to look, holds, and lifts back',
    parts: [
      null,
      null,
      { ...around([8, 13.5], [11.3, 8.7], [0, 10, 10, 0], { times: HOLD_T, ease: HOLD_E, dur: 0.86 }), as: 'camera' },
      { ...around([8, 13.5], [18.8, 14.6], [0, 10, 10, 0], { times: HOLD_T, ease: HOLD_E, dur: 0.86 }), as: 'camera' },
    ],
  },

  cd: {
    verb: 'the disc spins a full turn, its glare sweeping round the hole',
    parts: [null, lap([12, 12], 360, { as: 'glare', dur: 0.9 }), pop([12, 12], 0.8, { as: 'hole', dur: 0.6 })],
  },
  cells: {
    verb: 'the three cells wobble and turn a sixth of a turn, one after another',
    parts: [
      { as: 'cell', origin: [7, 6.5], transform: ['rotate(0deg) scale(1)', 'rotate(30deg) scale(0.82)', 'rotate(64deg) scale(1.05)', 'rotate(60deg) scale(1)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
      { as: 'cell', origin: [17, 12.5], transform: ['rotate(0deg) scale(1)', 'rotate(30deg) scale(0.82)', 'rotate(64deg) scale(1.05)', 'rotate(60deg) scale(1)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.6, delay: 0.12 },
      { as: 'cell', origin: [7, 17.5], transform: ['rotate(0deg) scale(1)', 'rotate(30deg) scale(0.82)', 'rotate(64deg) scale(1.05)', 'rotate(60deg) scale(1)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.6, delay: 0.24 },
    ],
  },

  'cellular-network-offline': {
    verb: 'the slash cuts the mast and the signal rings drop out from the outside in',
    parts: [null, dim({ delay: 0.3 }), draw({ as: 'slash' }), dim({ delay: 0.18 }), dim({ delay: 0.06 })],
  },
  'cellular-network': {
    verb: 'the node pings and the signal rings ripple outward',
    parts: [null, pop([12, 9], 1.3, { as: 'node', dur: 0.4 }), wave([12, 9], { delay: 0.12 }), wave([12, 9], { delay: 0.26 })],
  },
  celsius: {
    verb: 'the degree mark hops up and the C rewrites its curve',
    parts: [
      ride([5, 6], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'degree', times: [0, 0.32, 0.6, 0.84, 1], dur: 0.56 }),
      retrace({ as: 'letter', delay: 0.08 }),
    ],
  },
  'center-focus': {
    verb: 'the brackets close in and the subject snaps into focus',
    parts: [
      { as: 'brackets', origin: [12, 12], transform: ['scale(1)', 'scale(0.86)', 'scale(1.03)', 'scale(1)'], times: [0, 0.34, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
      { as: 'subject', origin: [12, 12], transform: ['scale(1)', 'scale(1.2)', 'scale(0.94)', 'scale(1)'], opacity: [1, 0.5, 1, 1], times: [0, 0.34, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.6, delay: 0.06 },
    ],
  },
  'central-shaheed-minar': {
    verb: 'the pillars rise from the ground in turn and the crown bows its head',
    parts: [
      rise('Y', [4.8, 22], [4.8, 16], { as: 'pillar', delay: 0.08 }),
      rise('Y', [19.3, 22], [19.3, 16], { as: 'pillar', delay: 0.16 }),
      rise('Y', [12, 22], [12, 15], { as: 'pillar' }),
      null,
      { ...around([12, 8], [12, 5], [0, 0, 14, 14, 0], { times: [0, 0.3, 0.5, 0.76, 1], ease: [INOUT, INOUT, 'linear', INOUT], dur: 0.9 }), as: 'crown' },
    ],
  },
  centralized: {
    verb: 'the four corner arrows converge on the core and the core takes the hit',
    parts: [
      beat([12, 12], { as: 'core', delay: 0.22 }),
      toward([19.4, 4.6], [12, 12], 1.6, { as: 'arrow' }),
      toward([4.6, 19.4], [12, 12], 1.6, { as: 'arrow' }),
      toward([19.4, 19.4], [12, 12], 1.6, { as: 'arrow' }),
      toward([4.6, 4.6], [12, 12], 1.6, { as: 'arrow' }),
    ],
  },

  'certificate-01': {
    verb: 'the text lines write themselves and a glint catches the seal',
    parts: [null, draw({ as: 'text', dur: 0.62 }), null],
    extras: [glint(20.6, 11, 1.1, { delay: 0.3 })],
  },
  'certificate-02': {
    verb: 'the laurel wings flap open and the medal flips on its ribbon',
    parts: [
      { ...around([9, 8], [5.3, 8], [0, -12, 6, -2, 0], { dur: 0.7 }), as: 'wing' },
      { ...around([15, 8], [18.7, 8], [0, 12, -6, 2, 0], { dur: 0.7 }), as: 'wing' },
      flip([12, 8], 1, { delay: 0.1 }),
      null,
    ],
  },
  certificate: {
    verb: 'the seal is stamped onto the corner and the page takes the press',
    parts: [beat([11.5, 12], { as: 'page', delay: 0.24 }), null, stamp([17.5, 17], { as: 'seal' })],
  },

  'chair-01': {
    verb: 'the chair rocks side to side on its legs',
    parts: [
      swing([12, 22], [12, 18.5], [0, -5, 4, -2, 0], { as: 'chair', dur: 0.78 }),
      swing([12, 22], [12, 13], [0, -5, 4, -2, 0], { as: 'chair', dur: 0.78 }),
      swing([12, 22], [12, 7], [0, -5, 4, -2, 0], { as: 'chair', dur: 0.78 }),
    ],
  },
  'chair-02': {
    verb: 'the backrest reclines and springs upright',
    parts: [null, null, flex('Y', [12, 12], [12, 6.9], [1, 0.8, 1.05, 0.98, 1], { as: 'back', dur: 0.66 }), null],
  },
  'chair-03': {
    verb: 'the stool seat rises on its gas lift and sinks back',
    parts: [
      null,
      null,
      flex('Y', [12, 22], [12, 14], [1, 1.1, 1.1, 0.98, 1], { as: 'legs', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.8 }),
      ride([12, 4], [[0, 0], [0, -1.6], [0, -1.6], [0, 0.15], [0, 0]], { as: 'seat', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.8 }),
    ],
  },
  'chair-04': {
    verb: 'the spindle back stretches up and the top rail settles back down',
    parts: [
      null,
      null,
      ride([12, 2.5], [[0, 0], [0, -1.2], [0, 0.2], [0, 0], [0, 0]], { as: 'rail', times: [0, 0.36, 0.66, 0.88, 1], dur: 0.62 }),
      flex('Y', [12, 14], [12, 8.5], [1, 1.11, 0.98, 1, 1], { as: 'spindles', times: [0, 0.36, 0.66, 0.88, 1], dur: 0.62 }),
      null,
    ],
  },
  'chair-05': {
    verb: 'the shell back sways on its seat, the slats moving with it',
    parts: [
      null,
      null,
      swing([12, 14], [12, 8], [0, -7, 5, -2, 0], { as: 'shell', dur: 0.78 }),
      swing([12, 14], [12, 7.5], [0, -7, 5, -2, 0], { as: 'shell', dur: 0.78 }),
    ],
  },
  'chair-barber': {
    verb: 'the barber pumps the chair: the seat rises on its pole and eases down',
    parts: [
      ride([11.5, 13], [[0, 0], [0, -1.6], [0, -1.6], [0, 0.15], [0, 0]], { as: 'seat', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.82 }),
      ride([18.1, 7.9], [[0, 0], [0, -1.6], [0, -1.6], [0, 0.15], [0, 0]], { as: 'seat', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.82 }),
      ride([12, 8.8], [[0, 0], [0, -1.6], [0, -1.6], [0, 0.15], [0, 0]], { as: 'seat', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.82 }),
      ride([4.5, 16], [[0, 0], [0, -1.6], [0, -1.6], [0, 0.15], [0, 0]], { as: 'seat', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.82 }),
      flex('Y', [12, 21], [12, 18], [1, 1.27, 1.27, 0.97, 1], { as: 'pole', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.82 }),
      null,
    ],
  },
  chair: {
    verb: 'someone sits: the seat and back sink and the legs splay under the weight',
    parts: [
      { as: 'legs', origin: [12, 18.5], transform: ['scaleX(1)', 'scaleX(1.08)', 'scaleX(0.98)', 'scaleX(1)'], times: [0, 0.34, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.58 },
      ride([12, 13], [[0, 0], [0, 0.8], [0, -0.2], [0, 0], [0, 0]], { as: 'seat', times: [0, 0.34, 0.66, 0.88, 1], dur: 0.58 }),
      ride([12, 7], [[0, 0], [0, 0.8], [0, -0.2], [0, 0], [0, 0]], { as: 'seat', times: [0, 0.34, 0.66, 0.88, 1], dur: 0.58 }),
    ],
  },

  champion: {
    verb: 'the trophy is hoisted and shaken in triumph while sparkles fly',
    wrap: {
      as: 'hoist',
      origin: [12, 22],
      transform: [
        'translate(0px, 0px) rotate(0deg)',
        'translate(0px, -1.8px) rotate(-6deg)',
        'translate(0px, -1.8px) rotate(6deg)',
        'translate(0px, -1.2px) rotate(-3deg)',
        'translate(0px, 0px) rotate(0deg)',
      ],
      times: T5,
      ease: E5,
      dur: 0.86,
    },
    parts: [null, null, null, null],
    extras: [glint(3.6, 2.6, 1.1, { delay: 0.16 }), glint(20.6, 1.8, 1, { delay: 0.32 })],
  },
  'change-screen-mode': {
    verb: 'the two screens slide past each other, trading depth, then return',
    parts: [
      ride([14, 9], [[0, 0], [1.4, -1.2], [-0.2, 0.2], [0, 0], [0, 0]], { as: 'back', times: [0, 0.4, 0.7, 0.9, 1], dur: 0.66 }),
      ride([10, 15], [[0, 0], [-1.4, 1.2], [0.2, -0.2], [0, 0], [0, 0]], { as: 'front', times: [0, 0.4, 0.7, 0.9, 1], dur: 0.66 }),
    ],
  },
  'character-phonetic': {
    verb: 'the schwa spins a full turn while the a squashes on the baseline',
    parts: [
      lap([17.1, 12], 360, { as: 'schwa', dur: 0.8 }),
      { ...scaleFrom('Y', [6.9, 19.6], [6.9, 11.9], [1, 0.8, 1.08, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.58, delay: 0.1 }), as: 'a' },
    ],
  },
  charity: {
    verb: 'the giving hand drops a coin into the box and the box catches it',
    parts: [
      null,
      beat([12, 19], { as: 'box', delay: 0.42 }),
      pop([12, 16], 1.12, { as: 'slot', delay: 0.42, dur: 0.4 }),
      ride([11.9, 6], [[0, 0], [0, 1], [0, 1], [0, 0], [0, 0]], { as: 'hand', times: [0, 0.24, 0.4, 0.7, 1], ease: [INOUT, 'linear', INOUT, OUT], dur: 0.8 }),
    ],
    extras: [
      {
        as: 'coin',
        tag: 'circle',
        attrs: { cx: '12', cy: '11', r: '1.2', strokeWidth: '1.2' },
        transform: ['translateY(0px)', 'translateY(0px)', 'translateY(3.6px)', 'translateY(4.4px)'],
        opacity: [0, 1, 1, 0],
        times: [0, 0.24, 0.5, 0.6],
        ease: [OUT, 'easeIn', 'linear'],
        dur: 0.8,
      },
    ],
  },

  'chart-01': {
    verb: 'the three bars grow from the floor one after another',
    parts: [
      rise('Y', [5, 20], [5, 14]),
      rise('Y', [12, 20], [12, 12], { delay: 0.1 }),
      rise('Y', [19, 20], [19, 15.5], { delay: 0.2 }),
    ],
  },
  'chart-02': {
    verb: 'the bars grow, each point hops onto its bar and the link line rewrites',
    parts: [
      rise('Y', [5, 21], [5, 16]),
      rise('Y', [12, 21], [12, 17], { delay: 0.08 }),
      rise('Y', [19, 21], [19, 15], { delay: 0.16 }),
      ride([5, 6.5], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'point', times: [0, 0.32, 0.62, 0.86, 1], dur: 0.5, delay: 0.2 }),
      ride([19, 4.5], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'point', times: [0, 0.32, 0.62, 0.86, 1], dur: 0.5, delay: 0.36 }),
      ride([12, 8.5], [[0, 0], [0, -1.4], [0, 0.2], [0, 0], [0, 0]], { as: 'point', times: [0, 0.32, 0.62, 0.86, 1], dur: 0.5, delay: 0.28 }),
      retrace({ as: 'link', delay: 0.24, dur: 0.56 }),
    ],
  },
  'chart-03': {
    verb: 'the trend line draws itself across the axes',
    parts: [null, draw({ as: 'trend', dur: 0.78, times: [0, 0.1, 0.16, 1] })],
  },
  'chart-analysis': {
    verb: 'the columns grow from the floor and the analysis line rewrites over them',
    parts: [retrace({ as: 'trend', delay: 0.16 }), rise('Y', [12, 21], [12, 15], { as: 'bars' })],
  },
  'chart-area': {
    verb: 'the area fills up from the baseline and overshoots a little',
    parts: [null, rise('Y', [13, 17], [13, 12.4], { as: 'area', dur: 0.7 })],
  },
  'chart-average': {
    verb: 'the curve rewrites and the average markers pop in from left to right',
    parts: [
      null,
      retrace({ as: 'curve' }),
      pop([11, 11], 2.6, { as: 'mark', delay: 0.14 }),
      pop([7, 11], 2.6, { as: 'mark', delay: 0.04 }),
      pop([21, 11], 2.6, { as: 'mark', delay: 0.34 }),
      pop([17, 11], 2.6, { as: 'mark', delay: 0.24 }),
    ],
  },
  'chart-bar-big': {
    verb: 'the two bars slide out from the axis, short then long',
    parts: [rise('X', [7, 15.5], [11, 15.5]), rise('X', [7, 8.5], [13, 8.5], { delay: 0.12 }), null],
  },
  'chart-bar-decreasing': {
    verb: 'the bars write out from the axis, longest first',
    parts: [draw({ as: 'bar', dur: 0.46, delay: 0.24 }), draw({ as: 'bar', dur: 0.5, delay: 0.12 }), draw({ as: 'bar', dur: 0.56 }), null],
  },
  'chart-bar-increasing': {
    verb: 'the stack of bars pushes out from the axis together',
    parts: [rise('X', [7, 11], [13, 11], { as: 'bars', dur: 0.66 }), null],
  },
  'chart-bar-line': {
    verb: 'the bars grow in turn and the line with its points rewrites above them',
    parts: [
      rise('Y', [4, 19], [4, 17]),
      rise('Y', [12, 19], [12, 14], { delay: 0.1 }),
      null,
      rise('Y', [20, 19], [20, 16], { delay: 0.2 }),
      retrace({ as: 'trend', delay: 0.16 }),
    ],
  },
  'chart-bar-stacked': {
    verb: 'the stacked bars slide out from the axis and their dividers click in',
    parts: [
      rise('X', [7, 15.5], [11, 15.5]),
      rise('X', [7, 8.5], [13, 8.5], { delay: 0.1 }),
      pop([15, 8.5], 1.4, { as: 'divider', delay: 0.42, dur: 0.36 }),
      pop([11, 15.5], 1.4, { as: 'divider', delay: 0.34, dur: 0.36 }),
      null,
    ],
  },
  'chart-breakout-circle': {
    verb: 'the arrow breaks out of the circle and the burst flares at the exit',
    parts: [
      { as: 'burst', origin: [19, 5], transform: ['scale(1)', 'scale(0.4)', 'scale(1.3)', 'scale(1)'], opacity: [1, 0, 1, 1], times: [0, 0.3, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      null,
      nudge([9.3, 11.1], 1.6, -1.2, { as: 'arrow', dur: 0.6 }),
    ],
  },
  'chart-breakout-square': {
    verb: 'the rising trend rewrites past the frame and the flare twinkles',
    parts: [
      { as: 'burst', origin: [19, 5], transform: ['rotate(0deg) scale(1)', 'rotate(-20deg) scale(0.6)', 'rotate(10deg) scale(1.2)', 'rotate(0deg) scale(1)'], times: [0, 0.4, 0.7, 1], ease: OUT, dur: 0.7, delay: 0.2 },
      null,
      retrace({ as: 'arrow' }),
    ],
  },
  'chart-bubble-01': {
    verb: 'the bubbles float up off the chart one by one and drift back down',
    parts: [
      null,
      ride([8, 8], [[0, 0], [0, -1.4], [0, -1.4], [0, 0.15], [0, 0]], { as: 'bubble', ...LAST, dur: 0.7 }),
      ride([11.5, 15.5], [[0, 0], [0, -1.4], [0, -1.4], [0, 0.15], [0, 0]], { as: 'bubble', ...LAST, dur: 0.7, delay: 0.1 }),
      ride([17.5, 7.5], [[0, 0], [0, -1.4], [0, -1.4], [0, 0.15], [0, 0]], { as: 'bubble', ...LAST, dur: 0.7, delay: 0.2 }),
    ],
  },
  'chart-bubble-02': {
    verb: 'the three bubbles breathe at their own sizes and a tiny one rises between them',
    parts: [
      pop([5, 7], 1.2, { as: 'bubble', delay: 0.08, dur: 0.56 }),
      pop([8, 18], 1.12, { as: 'bubble', delay: 0.16, dur: 0.56 }),
      pop([17, 7], 1.08, { as: 'bubble', dur: 0.56 }),
    ],
    extras: [
      { as: 'fizz', tag: 'circle', attrs: { cx: '13', cy: '17', r: '0.9', strokeWidth: '1.2' }, transform: ['translateY(0px) scale(0.4)', 'translateY(0px) scale(0.4)', 'translateY(-2px) scale(1)', 'translateY(-4px) scale(1.1)'], opacity: [0, 0, 1, 0], times: [0, 0.16, 0.5, 1], ease: ['linear', OUT, 'easeIn'], dur: 0.8 },
    ],
  },
  'chart-bubble': {
    verb: 'the bubbles inflate from small to big, in order of size',
    parts: [
      null,
      { as: 'bubble', origin: [8, 8], transform: ['scale(1)', 'scale(0.4)', 'scale(1.18)', 'scale(1)'], times: [0, 0.2, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.56 },
      { as: 'bubble', origin: [11.5, 15.5], transform: ['scale(1)', 'scale(0.4)', 'scale(1.18)', 'scale(1)'], times: [0, 0.2, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.56, delay: 0.1 },
      { as: 'bubble', origin: [17.5, 7.5], transform: ['scale(1)', 'scale(0.4)', 'scale(1.18)', 'scale(1)'], times: [0, 0.2, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.56, delay: 0.2 },
    ],
  },
  'chart-candle': {
    verb: 'the two candles trade: one climbs on its wick while the other dips',
    parts: [
      ride([7, 12], [[0, 0], [0, -1.6], [0, 0.3], [0, 0], [0, 0]], { as: 'bull', times: [0, 0.4, 0.7, 0.9, 1], dur: 0.7 }),
      ride([17, 14.5], [[0, 0], [0, 1.6], [0, -0.3], [0, 0], [0, 0]], { as: 'bear', times: [0, 0.4, 0.7, 0.9, 1], dur: 0.7 }),
      flex('Y', [17, 21], [17, 12], [1, 1.08, 0.98, 1, 1], { as: 'wick', times: [0, 0.4, 0.7, 0.9, 1], dur: 0.7 }),
      flex('Y', [7, 3], [7, 12], [1, 1.08, 0.98, 1, 1], { as: 'wick', times: [0, 0.4, 0.7, 0.9, 1], dur: 0.7 }),
    ],
  },
  'chart-candlestick': {
    verb: 'the candle bodies stretch and squash out of phase like a live ticker',
    parts: [
      { as: 'body', origin: [9, 12], transform: ['scaleY(1)', 'scaleY(1.3)', 'scaleY(0.8)', 'scaleY(1.1)', 'scaleY(1)'], times: T5, ease: E5, dur: 0.8 },
      { as: 'body', origin: [17, 10], transform: ['scaleY(1)', 'scaleY(0.78)', 'scaleY(1.24)', 'scaleY(0.92)', 'scaleY(1)'], times: T5, ease: E5, dur: 0.8 },
      null,
      null,
      null,
    ],
  },
  'chart-column-big': {
    verb: 'the two columns grow from the floor, short then tall',
    parts: [rise('Y', [9.5, 17], [9.5, 13]), rise('Y', [16.5, 17], [16.5, 11], { delay: 0.12 }), null],
  },
  'chart-column-decreasing': {
    verb: 'the columns sag one after another, then recover',
    parts: [
      { ...scaleFrom('Y', [13, 17], [13, 13], [1, 0.6, 0.6, 1], { dur: 0.7, delay: 0.1 }), as: 'column' },
      { ...scaleFrom('Y', [8, 17], [8, 11], [1, 0.6, 0.6, 1], { dur: 0.7 }), as: 'column' },
      { ...scaleFrom('Y', [18, 17], [18, 15], [1, 0.6, 0.6, 1], { dur: 0.7, delay: 0.2 }), as: 'column' },
      null,
    ],
  },
  'chart-column-increasing': {
    verb: 'each column stretches past its height in a rising stair, then settles',
    parts: [
      { ...scaleFrom('Y', [8, 17], [8, 15.5], [1, 1.5, 0.95, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }), as: 'column' },
      { ...scaleFrom('Y', [13, 17], [13, 13], [1, 1.25, 0.97, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.56, delay: 0.1 }), as: 'column' },
      { ...scaleFrom('Y', [18, 17], [18, 11], [1, 1.14, 0.98, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.56, delay: 0.2 }), as: 'column' },
      null,
    ],
  },
  'chart-column-stacked': {
    verb: 'the stacked columns grow up and their dividers click into place',
    parts: [
      rise('Y', [9.5, 17], [9.5, 13]),
      rise('Y', [16.5, 17], [16.5, 11], { delay: 0.1 }),
      pop([16.5, 9], 1.4, { as: 'divider', delay: 0.42, dur: 0.36 }),
      pop([9.5, 13], 1.4, { as: 'divider', delay: 0.34, dur: 0.36 }),
      null,
    ],
  },
  'chart-column': {
    verb: 'the three columns grow from the floor, left to right',
    parts: [
      rise('Y', [8, 17], [8, 13]),
      rise('Y', [13, 17], [13, 11], { delay: 0.1 }),
      rise('Y', [18, 17], [18, 15], { delay: 0.2 }),
      null,
    ],
  },
  'chart-decrease': {
    verb: 'the falling curve dives down along its slope and climbs back',
    parts: [null, nudge([13.5, 11.5], 0.8, 1.8, { as: 'trend', dur: 0.56 })],
  },
  'chart-down': {
    verb: 'the trend line rewrites downward, its head dips and the bars shrink',
    parts: [
      { ...scaleFrom('Y', [5, 21], [5, 15], [1, 0.8, 0.8, 1], { dur: 0.7 }), as: 'bar' },
      nudge([18.3, 10.2], 0.8, 0.8, { as: 'head', delay: 0.3, dur: 0.46 }),
      retrace({ as: 'trend' }),
      { ...scaleFrom('Y', [12, 21], [12, 16.8], [1, 0.7, 0.7, 1], { dur: 0.7, delay: 0.08 }), as: 'bar' },
      { ...scaleFrom('Y', [19, 21], [19, 18], [1, 0.55, 0.55, 1], { dur: 0.7, delay: 0.16 }), as: 'bar' },
    ],
  },
  'chart-evaluation': {
    verb: 'the evaluation curve draws itself across the chart',
    parts: [null, draw({ as: 'curve', dur: 0.82, times: [0, 0.1, 0.16, 1] })],
  },
  'chart-gantt': {
    verb: 'the task bars slide along the timeline as the schedule shifts, then snap back',
    parts: [
      ride([13, 11], [[0, 0], [1.6, 0], [1.6, 0], [-0.2, 0], [0, 0]], { as: 'tasks', ...LAST }),
      null,
    ],
  },
}

export default settleSpecs(specs)
