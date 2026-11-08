/**
 * Page 16 — chart-high-low → check-unread-02.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * The chat family dominates. Bubbles with a corner badge (`-01`) keep the
 * bubble still: the badge performs its verb and the typing dots answer.
 * Bubbles with an inner symbol (no suffix) let the symbol act inside and the
 * bubble acknowledge it. The two never share a gesture.
 *
 * Identical-geometry pairs get different jobs: chart-line-data / -01,
 * chatting / -01.
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
  burst,
  dim,
  draw,
  flex,
  flip,
  glint,
  hop,
  lap,
  nudge,
  pop,
  rays,
  retrace,
  ride,
  rise,
  scaleFrom,
  settleSpecs,
  shake,
  spinStar,
  stamp,
  sweep,
  swing,
  twinkle,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

/** The two typing dots of a `-01` bubble, answering after the badge. */
const typing = (o = {}) => ({
  as: 'typing',
  opacity: [1, 0.2, 1, 0.2, 1],
  times: [0, 0.25, 0.5, 0.75, 1],
  ease: 'linear',
  dur: 0.7,
  delay: 0.24,
  ...o,
})

/** A speech bubble acknowledging its content. */
const ack = (o = {}) => beat([12, 12], { as: 'bubble', delay: 0.28, ...o })

/** Jitter through a few offsets and come home. */
const jitter = (origin, [a, b, c], o = {}) =>
  ride(origin, [[0, 0], a, b, c, [0, 0]], { as: 'jitter', dur: 0.72, ...o })

/** Rotate a part around a remote pivot, landing on a symmetric angle. */
const orbit = (pivot, center, end, o = {}) => ({
  ...around(pivot, center, [0, end * 0.17, end * 1.1, end * 0.97, end], { dur: 0.86 }),
  as: 'orbit',
  ...o,
})

const BAR = { times: [0, 0.4, 0.7, 0.9, 1], dur: 0.7 }
const UP = [[0, 0], [0, -1.4], [0, 0.25], [0, 0], [0, 0]]
const DOWN = [[0, 0], [0, 1.4], [0, -0.25], [0, 0], [0, 0]]

// ---------------------------------------------------------------------------

const specs = {
  'chart-high-low': {
    verb: 'the two high-low bars trade places in height, ticks riding along',
    parts: [
      null,
      ride([11, 7], UP, { as: 'bull', ...BAR }),
      ride([19, 7], DOWN, { as: 'bear', ...BAR }),
      ride([9, 15], UP, { as: 'bull', ...BAR }),
      ride([17, 15], DOWN, { as: 'bear', ...BAR }),
      ride([10, 11], UP, { as: 'bull', ...BAR }),
      ride([18, 11], DOWN, { as: 'bear', ...BAR }),
    ],
  },
  'chart-histogram': {
    verb: 'the histogram columns grow and the distribution curve rewrites over them',
    parts: [
      null,
      rise('Y', [13, 21], [13, 15.5], { delay: 0.1 }),
      rise('Y', [18, 21], [18, 17], { delay: 0.2 }),
      rise('Y', [8, 20], [8, 16.5]),
      retrace({ as: 'curve', delay: 0.22 }),
    ],
  },
  'chart-increase': {
    verb: 'the rising curve climbs up along its slope and settles',
    parts: [null, nudge([14.5, 11.5], 0.8, -1.8, { as: 'trend', dur: 0.56 })],
  },
  'chart-line-data-01': {
    verb: 'the data line draws itself across the axes',
    parts: [null, draw({ as: 'line', dur: 0.8, times: [0, 0.1, 0.16, 1] })],
  },
  'chart-line-data-02': {
    verb: 'each data point hops in turn and the segments reconnect between them',
    parts: [
      hop([8.5, 10.5]),
      hop([14.5, 15.5], 1.4, { delay: 0.12 }),
      hop([18.5, 7.5], 1.4, { delay: 0.24 }),
      retrace({ as: 'links', delay: 0.18, dur: 0.6 }),
      null,
    ],
  },
  'chart-line-data-03': {
    verb: 'the curve retracts to its end and rewrites itself',
    parts: [sweep({ as: 'line' }), null],
  },
  'chart-line-data': {
    verb: 'the data line fluctuates, peaks stretching and dipping like live data',
    parts: [null, flex('Y', [13, 12], [13, 12], [1, 1.22, 0.82, 1.08, 1], { as: 'line', dur: 0.8 })],
  },
  'chart-line': {
    verb: 'the line lifts and steepens, then eases back',
    parts: [
      { as: 'line', origin: [14, 11.5], transform: ['translateY(0px) scaleY(1)', 'translateY(-1.2px) scaleY(1.3)', 'translateY(0.2px) scaleY(0.95)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      null,
    ],
  },
  'chart-maximum': {
    verb: 'the peak reaches higher and a glint marks the maximum',
    parts: [null, { ...scaleFrom('Y', [13, 17], [13, 11], [1, 1.22, 0.97, 1], { times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.66 }), as: 'curve' }],
    extras: [glint(13, 2.6, 1, { delay: 0.12 })],
  },
  'chart-medium': {
    verb: 'the wave flattens toward its middle value and swings back out',
    parts: [{ as: 'curve', origin: [14, 11], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.66 }, null],
  },
  'chart-minimum': {
    verb: 'the valley sinks deeper and a glint marks the minimum',
    parts: [null, { ...scaleFrom('Y', [13, 5], [13, 11], [1, 1.2, 0.97, 1], { times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.66 }), as: 'curve' }],
    extras: [glint(13, 19.6, 1, { delay: 0.12 })],
  },
  'chart-network': {
    verb: 'the nodes ping one after another as the links reconnect them',
    parts: [
      pop([9, 9], 1.3, { as: 'node' }),
      pop([14, 15], 1.3, { as: 'node', delay: 0.14 }),
      pop([19, 7], 1.3, { as: 'node', delay: 0.28 }),
      retrace({ as: 'links', delay: 0.06, dur: 0.6 }),
      null,
    ],
  },

  'chart-no-axes-column-decreasing': {
    verb: 'the columns sag one after another, then recover',
    parts: [
      { ...scaleFrom('Y', [12, 21], [12, 15], [1, 0.6, 0.6, 1], { dur: 0.7, delay: 0.1 }), as: 'column' },
      { ...scaleFrom('Y', [5.5, 21], [5.5, 12], [1, 0.6, 0.6, 1], { dur: 0.7 }), as: 'column' },
      { ...scaleFrom('Y', [18.5, 21], [18.5, 18], [1, 0.6, 0.6, 1], { dur: 0.7, delay: 0.2 }), as: 'column' },
    ],
  },
  'chart-no-axes-column-increasing': {
    verb: 'the bars draw upward from the floor, shortest first, like a staircase',
    parts: [
      draw({ as: 'bar', dur: 0.56, delay: 0.3 }),
      draw({ as: 'bar', dur: 0.52, delay: 0.2 }),
      draw({ as: 'bar', dur: 0.48, delay: 0.1 }),
      draw({ as: 'bar', dur: 0.44 }),
    ],
  },
  'chart-no-axes-column': {
    verb: 'the three columns grow from the floor, left to right',
    parts: [
      rise('Y', [12, 21], [12, 12], { delay: 0.1 }),
      rise('Y', [5.5, 21], [5.5, 17.5]),
      rise('Y', [18.5, 21], [18.5, 15], { delay: 0.2 }),
    ],
  },
  'chart-no-axes-combined': {
    verb: 'the columns draw up in turn while the trend line rewrites over them',
    parts: [
      draw({ as: 'bar', dur: 0.48, delay: 0.3 }),
      draw({ as: 'bar', dur: 0.44, delay: 0.2 }),
      retrace({ as: 'trend', delay: 0.16 }),
      draw({ as: 'bar', dur: 0.44, delay: 0.1 }),
      draw({ as: 'bar', dur: 0.4 }),
    ],
  },
  'chart-no-axes-gantt': {
    verb: 'the task bars shuffle along the timeline, each by its own amount',
    parts: [
      ride([13, 5], [[0, 0], [-1.6, 0], [0.3, 0], [0, 0], [0, 0]], { as: 'task', ...BAR }),
      ride([9, 12], [[0, 0], [2, 0], [-0.3, 0], [0, 0], [0, 0]], { as: 'task', ...BAR, delay: 0.08 }),
      ride([16, 19], [[0, 0], [-1.2, 0], [0.2, 0], [0, 0], [0, 0]], { as: 'task', ...BAR, delay: 0.16 }),
    ],
  },
  'chart-radar': {
    verb: 'a radar beam sweeps round while the data shape swells and the spokes pulse',
    parts: [
      null,
      { as: 'shape', origin: [12, 13], transform: ['scale(1)', 'scale(0.7)', 'scale(1.14)', 'scale(1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.7 },
      null,
      null,
      null,
      null,
      null,
    ],
    extras: [
      {
        ...around([12, 12], [12, 7.5], [0, 90, 200, 300, 360], { times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear', dur: 0.9 }),
        as: 'beam',
        tag: 'path',
        attrs: { d: 'M12 12V3', strokeWidth: '1.2' },
        opacity: [0, 1, 1, 1, 0],
      },
    ],
  },
  'chart-relationship': {
    verb: 'the hub swells and the links pass the pulse to each node in turn',
    parts: [
      draw({ as: 'link', dur: 0.4, delay: 0.24 }),
      draw({ as: 'link', dur: 0.4, delay: 0.16 }),
      draw({ as: 'link', dur: 0.4, delay: 0.08 }),
      beat([6.4, 6.4], { as: 'hub' }),
      pop([5, 20], 1.3, { as: 'node', delay: 0.3 }),
      pop([16, 16], 1.3, { as: 'node', delay: 0.38 }),
      pop([20, 5], 1.3, { as: 'node', delay: 0.46 }),
    ],
  },
  'chart-ring': {
    verb: 'the ring segments turn a full lap around the hole',
    parts: [orbit([12, 12], [13.5, 13.5], 360, { as: 'dividers' }), pop([12, 12], 0.8, { as: 'hole', delay: 0.2 }), null],
  },
  'chart-rose': {
    verb: 'the rose petals bloom outward from the center one after another',
    parts: [
      { as: 'petal', origin: [6.9, 10.5], transform: ['translate(0px, 0px) scale(1)', 'translate(-0.8px, -0.8px) scale(1.1)', 'translate(0px, 0px) scale(1)'], times: [0, 0.4, 1], ease: [OUT, INOUT], dur: 0.56 },
      { as: 'petal', origin: [5.7, 16.5], transform: ['translate(0px, 0px) scale(1)', 'translate(-0.8px, 0.8px) scale(1.1)', 'translate(0px, 0px) scale(1)'], times: [0, 0.4, 1], ease: [OUT, INOUT], dur: 0.56, delay: 0.1 },
      { as: 'petal', origin: [14.8, 17.6], transform: ['translate(0px, 0px) scale(1)', 'translate(0.8px, 0.8px) scale(1.1)', 'translate(0px, 0px) scale(1)'], times: [0, 0.4, 1], ease: [OUT, INOUT], dur: 0.56, delay: 0.2 },
      { as: 'petal', origin: [15.9, 7.4], transform: ['translate(0px, 0px) scale(1)', 'translate(0.8px, -0.8px) scale(1.1)', 'translate(0px, 0px) scale(1)'], times: [0, 0.4, 1], ease: [OUT, INOUT], dur: 0.56, delay: 0.3 },
    ],
  },
  'chart-scatter': {
    verb: 'the scattered points jitter about and resettle in their places',
    parts: [
      jitter([12.5, 10.5], [[0.8, -0.6], [-0.5, 0.7], [0.2, -0.2]]),
      jitter([14.5, 4.5], [[-0.7, 0.6], [0.6, -0.4], [-0.2, 0.2]], { delay: 0.04 }),
      jitter([18.5, 11.5], [[0.5, 0.8], [-0.6, -0.5], [0.2, 0.1]], { delay: 0.08 }),
      jitter([9.5, 16.5], [[-0.6, -0.8], [0.7, 0.4], [-0.2, -0.1]], { delay: 0.02 }),
      jitter([7.5, 8.5], [[0.7, 0.7], [-0.4, -0.6], [0.1, 0.2]], { delay: 0.06 }),
      null,
    ],
  },
  'chart-spline': {
    verb: 'the spline retracts and rewrites its S-curve',
    parts: [retrace({ as: 'spline' }), null],
  },
  'chart-up': {
    verb: 'the bars grow in turn, the trend line rewrites upward and its head pushes up',
    parts: [
      rise('Y', [19, 21], [19, 15], { delay: 0.16 }),
      nudge([18, 4.5], 0.8, -0.8, { as: 'head', delay: 0.3, dur: 0.46 }),
      retrace({ as: 'trend' }),
      rise('Y', [12, 21], [12, 16.8], { delay: 0.08 }),
      rise('Y', [5, 21], [5, 18]),
    ],
  },
  chart: {
    verb: 'the three blocks build up from the floor, left, middle, right',
    parts: [
      rise('Y', [12, 21], [12, 12], { delay: 0.1 }),
      rise('Y', [18, 21], [18, 14.5], { delay: 0.2 }),
      rise('Y', [6, 21], [6, 17]),
    ],
  },

  // -------------------------------------------------------------------------
  // Chat bubbles

  'chat-01': {
    verb: 'the message lines type themselves into the bubble',
    parts: [draw({ as: 'text', dur: 0.62 }), ack({ delay: 0.4 })],
  },
  'chat-add-01': {
    verb: 'the plus badge spins onto the corner and the typing dots answer',
    parts: [null, stamp([19, 5], { as: 'plus', transform: ['rotate(0deg) scale(1)', 'rotate(-60deg) scale(0.5)', 'rotate(96deg) scale(1.15)', 'rotate(90deg) scale(1)'] }), typing()],
  },
  'chat-add': {
    verb: 'the plus grows out of the bubble and the bubble swells to hold it',
    parts: [ack({ delay: 0.16 }), pop([12, 10.5], 1.35, { as: 'plus', dur: 0.56 })],
  },
  'chat-blocked-01': {
    verb: 'the slash cuts the bubble and the typing dots go quiet',
    parts: [draw({ as: 'slash' }), null, null, dim({ delay: 0.1 })],
  },
  'chat-blocked': {
    verb: 'the slash cuts the bubble and its two halves recoil apart',
    parts: [
      draw({ as: 'slash' }),
      ride([14.3, 9.8], [[0, 0], [0.7, -0.7], [0, 0], [0, 0], [0, 0]], { as: 'half', times: [0, 0.3, 0.8, 0.9, 1], delay: 0.1, dur: 0.7 }),
      ride([10.2, 12.6], [[0, 0], [-0.7, 0.7], [0, 0], [0, 0], [0, 0]], { as: 'half', times: [0, 0.3, 0.8, 0.9, 1], delay: 0.1, dur: 0.7 }),
    ],
  },
  'chat-bot': {
    verb: 'the bot blinks and smiles while its antenna pings a signal',
    parts: [
      null,
      null,
      null,
      pop([12, 3.5], 1.4, { as: 'antenna' }),
      null,
      { as: 'eyes', origin: [12, 12.5], transform: ['scaleY(1)', 'scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.3, 0.42, 0.56], ease: INOUT, dur: 0.8 },
      { as: 'smile', origin: [12, 16.8], transform: ['scale(1, 1)', 'scale(1.2, 1.8)', 'scale(1, 1)'], times: [0, 0.5, 1], ease: [OUT, INOUT], dur: 0.8 },
    ],
    extras: [burst(rays(12, 3.5, 2.2, 3.2, 6, -90), { as: 'signal', dur: 0.6 })],
  },
  'chat-cancel-01': {
    verb: 'the X badge twists closed and the typing dots go quiet',
    parts: [null, { as: 'x', origin: [19.5, 4.5], transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.6)', 'rotate(96deg) scale(1.1)', 'rotate(90deg) scale(1)'], times: [0, 0.32, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }, dim({ delay: 0.16 })],
  },
  'chat-cancel': {
    verb: 'the bubble shakes its head and the X redraws inside',
    parts: [shake([12, 12], { as: 'bubble' }), draw({ as: 'x', delay: 0.1 })],
  },
  'chat-delay-01': {
    verb: 'the clock badge turns a full lap while the typing dots wait slowly',
    parts: [null, lap([18.5, 5.5], 360, { as: 'clock' }), typing({ dur: 1, delay: 0.1 })],
  },
  'chat-delay': {
    verb: 'the clock hands sweep round inside the bubble',
    parts: [null, { ...around([12, 10.5], [13.5, 8.75], [0, 80, 220, 340, 360], { times: [0, 0.2, 0.5, 0.8, 1], ease: [INOUT, 'linear', 'linear', OUT], dur: 0.86 }), as: 'hands' }],
  },
  'chat-done-01': {
    verb: 'the check badge ticks itself in and the typing dots answer',
    parts: [null, draw({ as: 'check', dur: 0.5 }), typing()],
  },
  'chat-done': {
    verb: 'the check pops and writes itself, and the bubble nods',
    parts: [ack({ delay: 0.34 }), { ...draw({ dur: 0.56 }), as: 'check', origin: [12.5, 10.5], transform: ['scale(1)', 'scale(1)', 'scale(1.2)', 'scale(1)'], times: [0, 0.16, 0.6, 1] }],
  },
  'chat-download-01': {
    verb: 'the arrow badge drops down and the typing dots answer',
    parts: [null, nudge([19, 5.5], 0, 2), typing()],
  },
  'chat-download': {
    verb: 'the arrow drops into the bubble and the bubble catches it',
    parts: [ack({ delay: 0.26 }), nudge([12, 10.5], 0, 2.2, { dur: 0.46 })],
  },
  'chat-edit-01': {
    verb: 'the pencil badge scribbles back and forth and the typing dots answer',
    parts: [null, jitter([18.8, 5.2], [[-0.8, 0.6], [0.6, -0.4], [-0.5, 0.4]], { as: 'pencil', dur: 0.66 }), typing()],
  },
  'chat-edit': {
    verb: 'the pencil writes a line across the bubble and lifts off',
    parts: [
      null,
      {
        as: 'pencil',
        origin: [12, 10.5],
        transform: ['translate(0px, 0px) rotate(0deg)', 'translate(-2px, 1.4px) rotate(-8deg)', 'translate(1.6px, 1.4px) rotate(-8deg)', 'translate(0.4px, -0.4px) rotate(4deg)', 'translate(0px, 0px) rotate(0deg)'],
        times: [0, 0.2, 0.56, 0.78, 1],
        ease: [INOUT, 'linear', OUT, OUT],
        dur: 0.82,
      },
    ],
  },
  'chat-favourite-01': {
    verb: 'the heart badge beats twice and the typing dots answer',
    parts: [
      null,
      { as: 'heart', origin: [18, 5.5], transform: ['scale(1)', 'scale(1.24)', 'scale(1)', 'scale(1.24)', 'scale(1)'], times: [0, 0.16, 0.34, 0.5, 0.74], ease: OUT, dur: 0.8 },
      typing({ delay: 0.3 }),
    ],
  },
  'chat-favourite': {
    verb: 'the heart floats up inside the bubble and the bubble warms around it',
    parts: [ack({ delay: 0.2 }), ride([12, 11], [[0, 0], [0, -1.4], [0, -1.4], [0, 0.2], [0, 0]], { as: 'heart', times: [0, 0.3, 0.56, 0.84, 1], dur: 0.8 })],
  },
  'chat-feedback-01': {
    verb: 'the reply lines type themselves into the mirrored bubble',
    parts: [draw({ as: 'text', dur: 0.62 }), { as: 'bubble', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.7 }],
  },
  'chat-feedback': {
    verb: 'the bubble wobbles as the three dots bounce in it',
    parts: [
      { as: 'bubble', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(3deg)', 'rotate(-1deg)', 'rotate(0deg)'], times: T5, ease: E5, dur: 0.7 },
      hop([12, 10.5], 1.1, { as: 'dots' }),
    ],
  },
  'chat-gpt': {
    verb: 'the six interlocked links turn a sixth of a turn around their knot',
    parts: [
      orbit([12, 12], [10.6, 8.9], 60, { as: 'link' }),
      orbit([12, 12], [13.3, 15], 60, { as: 'link' }),
      orbit([12, 12], [14.8, 8.8], 60, { as: 'link' }),
      orbit([12, 12], [9.2, 15.3], 60, { as: 'link' }),
      orbit([12, 12], [15.5, 12.7], 60, { as: 'link' }),
      orbit([12, 12], [8.5, 11.3], 60, { as: 'link' }),
    ],
  },
  'chat-income-01': {
    verb: 'the incoming arrow badge slides in leftward and the typing dots answer',
    parts: [null, nudge([18.5, 5], -2, 0), typing()],
  },
  'chat-income': {
    verb: 'the arrow arrives from the right into the bubble and the bubble catches it',
    parts: [ack({ delay: 0.3 }), { as: 'arrow', origin: [12, 10.5], transform: ['translateX(0px)', 'translateX(3px)', 'translateX(-0.4px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.3, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.66 }],
  },
  'chat-lock-01': {
    verb: 'the lock badge drops onto the corner with a clunk and the typing dots answer',
    parts: [
      null,
      { as: 'lock', origin: [19, 5.8], transform: ['translateY(0px) scale(1, 1)', 'translateY(-1.4px) scale(1, 1)', 'translateY(0.3px) scale(1.12, 0.86)', 'translateY(0px) scale(1, 1)'], times: [0, 0.34, 0.6, 1], ease: [INOUT, 'easeIn', OUT], dur: 0.56 },
      typing(),
    ],
  },
  'chat-lock': {
    verb: 'the shackle lifts and clicks shut on the lock inside the bubble',
    parts: [ack({ delay: 0.36 }), ride([12, 8.3], [[0, 0], [0, -1.3], [0, 0.2], [0, 0], [0, 0]], { as: 'shackle', times: [0, 0.34, 0.56, 0.8, 1], dur: 0.6 }), null],
  },
  'chat-notification-01': {
    verb: 'the notification dot pops with a ping while the message lines stay',
    parts: [null, pop([19.5, 4.5], 1.3, { as: 'badge' }), null],
    extras: [burst(rays(19.5, 4.5, 3.2, 4.2, 6, -90), { as: 'ping', dur: 0.6 })],
  },
  'chat-notification': {
    verb: 'the notification dot bounces on the corner and the dots blink',
    parts: [null, hop([19.5, 5], 1.6, { as: 'badge' }), blink({ delay: 0.3, dur: 0.6, times: [0, 0.25, 0.5, 0.75, 1] })],
  },
  'chat-outcome-01': {
    verb: 'the outgoing arrow badge shoots off rightward and the typing dots answer',
    parts: [null, nudge([18.5, 5], 2, 0), typing()],
  },
  'chat-outcome': {
    verb: 'the arrow leaves the bubble to the right and slides back in from the left',
    parts: [
      ack({ delay: 0.06 }),
      { as: 'arrow', origin: [12, 10.5], transform: ['translateX(0px)', 'translateX(3px)', 'translateX(-3px)', 'translateX(0.3px)', 'translateX(0px)'], opacity: [1, 0, 0, 1, 1], times: [0, 0.3, 0.32, 0.7, 1], ease: ['easeIn', 'linear', OUT, OUT], dur: 0.72 },
    ],
  },
  'chat-preview-01': {
    verb: 'the eye badge blinks and the typing dots answer',
    parts: [
      null,
      { as: 'eye', origin: [17, 5], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.4, 1], ease: INOUT, dur: 0.4 },
      typing(),
      { as: 'pupil', origin: [17, 5], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.4, 1], ease: INOUT, dur: 0.4 },
    ],
  },
  'chat-preview': {
    verb: 'the pupil glances left and right inside the eye',
    parts: [null, null, ride([12, 10.5], [[0, 0], [-1.8, 0], [1.8, 0], [1.8, 0], [0, 0]], { as: 'pupil', times: [0, 0.24, 0.5, 0.72, 1], ease: INOUT, dur: 0.86 })],
  },
  'chat-question-01': {
    verb: 'the question mark tilts in puzzlement and its dot hops, then the dots answer',
    parts: [
      null,
      { as: 'question', origin: [19.5, 5], transform: ['rotate(0deg)', 'rotate(-14deg)', 'rotate(10deg)', 'rotate(0deg)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
      hop([19.5, 11], 1, { as: 'dot', delay: 0.16 }),
      typing({ delay: 0.32 }),
    ],
  },
  'chat-question': {
    verb: 'the question mark writes itself and its dot drops in under it',
    parts: [null, retrace({ as: 'question' }), { as: 'dot', origin: [12, 14.8], transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(0.3px)', 'translateY(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.4, 0.7, 1], ease: [INOUT, 'easeIn', OUT], dur: 0.7 }],
  },
  'chat-search-01': {
    verb: 'the loupe badge circles over the corner and the typing dots answer',
    parts: [null, jitter([18.5, 5.5], [[-0.9, 0], [0, 0.9], [0.9, 0]], { as: 'loupe', times: [0, 0.25, 0.5, 0.75, 1], ease: INOUT, dur: 0.8 }), typing()],
  },
  'chat-search': {
    verb: 'the loupe zooms in on the bubble and steps back',
    parts: [ack({ delay: 0.1 }), { as: 'loupe', origin: [12.5, 10.5], transform: ['scale(1)', 'scale(1.3)', 'scale(1.3)', 'scale(1)'], times: HOLD_T, ease: HOLD_E, dur: 0.7 }],
  },
  'chat-secure-01': {
    verb: 'the shield badge is stamped onto the corner and the typing dots answer',
    parts: [null, stamp([18.5, 6], { as: 'shield' }), typing()],
  },
  'chat-secure': {
    verb: 'the shield rises from its point inside the bubble and a glint crosses it',
    parts: [null, { ...scaleFrom('Y', [12, 14.5], [12, 10.5], [1, 0.2, 1.08, 1], { times: [0, 0.16, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }), as: 'shield' }],
    extras: [glint(16.4, 6.6, 1, { delay: 0.3 })],
  },
  'chat-spark-01': {
    verb: 'the spark badge turns on its axis and the typing dots answer',
    parts: [spinStar([18.5, 5.5]), null, typing()],
  },
  'chat-spark': {
    verb: 'the spark twinkles inside the bubble and a second glint flashes off the rim',
    parts: [ack({ delay: 0.3 }), twinkle([12, 10.5])],
    extras: [glint(20.4, 3.4, 1, { delay: 0.2 })],
  },
  'chat-translate-01': {
    verb: 'the glyph badge flips like a card turning to the other language',
    parts: [null, flip([18.5, 6], 1, { as: 'glyph' }), typing()],
  },
  'chat-translate': {
    verb: 'the glyph writes itself stroke by stroke inside the bubble',
    parts: [ack({ delay: 0.5 }), draw({ as: 'glyph', dur: 0.72 })],
  },
  'chat-unlock-01': {
    verb: 'the open lock badge wiggles loose and the typing dots answer',
    parts: [null, shake([19, 5.8], { as: 'lock' }), typing()],
  },
  'chat-unlock': {
    verb: 'the shackle swings open on its hinge and the lock body drops a touch',
    parts: [
      null,
      { ...around([10, 10], [11.7, 8.3], [0, -28, -28, 0], { times: HOLD_T, ease: HOLD_E, dur: 0.76 }), as: 'shackle' },
      ride([12, 12.3], [[0, 0], [0, 0.6], [0, 0.6], [0, 0], [0, 0]], { as: 'body', times: [0, 0.26, 0.72, 0.9, 1], dur: 0.76 }),
    ],
  },
  'chat-upload-01': {
    verb: 'the arrow badge lifts up and the typing dots answer',
    parts: [null, nudge([19, 5.5], 0, -2), typing()],
  },
  'chat-upload': {
    verb: 'the arrow rises out of the bubble and the bubble lets it go',
    parts: [ack({ delay: 0.06 }), nudge([12, 10.5], 0, -2.2, { dur: 0.46, delay: 0.1 })],
  },
  'chat-user-01': {
    verb: 'the user badge pops up to speak and the typing dots answer',
    parts: [null, hop([19, 5.2], 1.2, { as: 'user' }), typing()],
  },
  'chat-user': {
    verb: 'the user inside the bubble nods twice',
    parts: [
      null,
      { as: 'user', origin: [12, 10.2], transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'], times: [0, 0.2, 0.4, 0.6, 0.8], ease: INOUT, dur: 0.8 },
    ],
  },
  chat: {
    verb: 'the typing dots fade in and out while the bubble breathes',
    parts: [beat([12, 12], { as: 'bubble', dur: 0.8, times: [0, 0.4, 0.8, 1] }), typing({ delay: 0, dur: 0.8 })],
  },
  'chatting-01': {
    verb: 'the big bubble speaks, then the small reply pops in after it',
    parts: [beat([11, 11.1], { as: 'speaker' }), { as: 'reply', origin: [16.5, 16.5], transform: ['scale(1)', 'scale(1)', 'scale(0.5)', 'scale(1.12)', 'scale(1)'], times: [0, 0.3, 0.44, 0.74, 1], ease: [INOUT, INOUT, OUT, OUT], dur: 0.78 }],
  },
  chatting: {
    verb: 'the two bubbles take turns, each bobbing as it speaks',
    parts: [hop([11, 11.1], 1.1, { as: 'speaker' }), hop([16.5, 16.5], 1.1, { as: 'reply', delay: 0.28 })],
  },

  'check-check': {
    verb: 'the two checks tick in, one right after the other',
    parts: [draw({ as: 'check', dur: 0.5 }), draw({ as: 'check', dur: 0.5, delay: 0.16 })],
  },
  'check-line': {
    verb: 'the check ticks in and the underline sweeps beneath it',
    parts: [draw({ as: 'check', dur: 0.5 }), draw({ as: 'line', dur: 0.46, delay: 0.24 })],
  },
  'check-list': {
    verb: 'the checks tick down the list and each item line rewrites',
    parts: [
      retrace({ as: 'item', dur: 0.5, delay: 0.1 }),
      retrace({ as: 'item', dur: 0.5, delay: 0.2 }),
      retrace({ as: 'item', dur: 0.5, delay: 0.3 }),
      draw({ as: 'check', dur: 0.46 }),
      draw({ as: 'check', dur: 0.46, delay: 0.24 }),
    ],
  },
  'check-unread-01': {
    verb: 'the slash strikes the check and the check fades as unread',
    parts: [dim({ delay: 0.1 }), draw({ as: 'slash' })],
  },
  'check-unread-02': {
    verb: 'the slash strikes the double check and both ticks fade, one then the other',
    parts: [dim({ delay: 0.1 }), dim({ delay: 0.2 }), draw({ as: 'slash' })],
  },
}

export default settleSpecs(specs)
