/**
 * Page 19 — circle-question-mark → cloud-slow-wind.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped: circle-x,
 * clipboard-paste, clipboard, clock-01, cloud-download, cloud-rain, and the
 * hidden cloud-lightning.
 *
 * Clocks: the hands sweep a full turn around the real pivot (12,12); rewind
 * icons (arrow on the left) turn backward. Clipboards keep the board still
 * and let the content act. Clouds keep the cloud still (or acknowledge) and
 * let the weather fall: drops leave through the bottom and come back from
 * above, snow drifts, bolts flash, wind lines slide.
 *
 * Identical-geometry pairs get different jobs: city-01 / city, clapping-01 /
 * clapping, cloud-saving-done-01 / cloud-saving-done.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  T5,
  E5,
  around,
  beat,
  blink,
  burst,
  dim,
  draw,
  flex,
  glint,
  hop,
  lap,
  nudge,
  pop,
  rays,
  retrace,
  ride,
  rise,
  settleSpecs,
  swell,
  fall,
  shake,
  stamp,
  sweep,
  swing,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const TURN = [0, 72, 252, 370.8, 360]

/** Clock hands sweeping a full turn around the dial center. */
const hands = (pivot, center, dir = 1, o = {}) =>
  around(pivot, center, TURN.map((d) => d * dir), { as: 'hands', dur: 0.9, ...o })

/** A confirmation ring that spreads off a circle and fades. */
const ripple = (r, o = {}) => ({
  as: 'ripple',
  tag: 'circle',
  attrs: { cx: '12', cy: '12', r: String(r), strokeWidth: '1' },
  transform: ['scale(1)', 'scale(1)', 'scale(1.01)', 'scale(1.3)'],
  opacity: [0, 0, 0.7, 0],
  times: [0, 0.3, 0.34, 1],
  ease: ['linear', 'linear', OUT],
  dur: 0.8,
  delay: 0.1,
  ...o,
})

/** A key slot turning a quarter and back. */
const turnKey = (origin, o = {}) => ({
  as: 'slot',
  origin,
  transform: ['rotate(0deg)', 'rotate(90deg)', 'rotate(90deg)', 'rotate(0deg)'],
  times: [0, 0.3, 0.64, 1],
  ease: [INOUT, 'linear', INOUT],
  dur: 0.7,
  ...o,
})

/** Two hands meeting: clap keys toward each other. */
const clap = (k, n = 1, o = {}) => {
  const keys = [[0, 0]]
  for (let i = 0; i < n; i += 1) keys.push(k, [0, 0])
  const times = keys.map((_, i) => Math.round((i / (keys.length - 1)) * 100) / 100)
  return ride([12, 12], keys, { as: 'hand', times, ease: INOUT, dur: 0.34 * n + 0.1, ...o })
}

const cloud = (o = {}) => beat([12, 10.5], { as: 'cloud', delay: 0.3, ...o })
const SWAY = [0, -6, 4, -1.5, 0]

// ---------------------------------------------------------------------------

const specs = {
  // --- circles ------------------------------------------------------------------------------
  'circle-question-mark': {
    verb: 'the question hook tilts back and forth, puzzled, and the dot hops',
    parts: [null, around([12, 13.5], [12, 10.3], [0, -12, 9, -4, 0], { as: 'hook' }), hop([12, 16.8], 1.2, { as: 'dot', delay: 0.2 })],
  },
  'circle-slash-two': {
    verb: 'the slash cuts across and the circle answers',
    parts: [beat(C, { as: 'ring', delay: 0.3 }), draw({ as: 'slash' })],
  },
  'circle-small': {
    verb: 'the small circle pulses and a ring spreads out of it',
    parts: [pop(C, 1.16, { as: 'circle' })],
    extras: [ripple(7)],
  },
  'circle-unlock-01': {
    verb: 'the open shackle swings wider on its left leg, and the keyhole answers',
    parts: [null, around([7.5, 9.5], [11.6, 5.8], [0, -20, -20, 3, 0], { as: 'shackle', times: [0, 0.3, 0.6, 0.82, 1] }), pop([12, 15], 2, { as: 'keyhole', delay: 0.3 })],
  },
  'circle-unlock-02': {
    verb: 'the key slot turns and the shackle pops up',
    parts: [null, ride([11.6, 5.8], [[0, 0], [0, 0], [0, -1.4], [0, 0.2], [0, 0]], { as: 'shackle' }), turnKey([12, 15])],
  },
  'circle-unlock': {
    verb: 'the shackle lifts straight up off the body and drops back',
    parts: [beat([12, 15], { as: 'body', delay: 0.3 }), ride([11.6, 5.8], [[0, 0], [0, -1.8], [0, 0.3], [0, 0], [0, 0]], { as: 'shackle' }), null],
  },
  circle: {
    verb: 'the circle retraces itself around',
    parts: [retrace({ as: 'ring', dur: 0.76 })],
  },
  'circuit-board': {
    verb: 'a signal runs along the traces from node to node',
    parts: [
      pop([9, 9], 1.4, { as: 'node' }),
      retrace({ as: 'trace', delay: 0.08 }),
      pop([15, 15], 1.4, { as: 'node', delay: 0.3 }),
      retrace({ as: 'trace', delay: 0.18 }),
      null,
    ],
  },
  citrus: {
    verb: 'the wedge is squeezed: it twists and a drop of juice falls',
    parts: [
      around(C, [12.6, 11.4], [0, -12, 7, -2, 0], { as: 'wedge' }),
      around(C, [11.8, 12.3], [0, -12, 7, -2, 0], { as: 'wedge' }),
      around(C, [10.5, 13.5], [0, -12, 7, -2, 0], { as: 'wedge' }),
      around(C, [11.7, 12.3], [0, -12, 7, -2, 0], { as: 'wedge' }),
    ],
    extras: [
      {
        as: 'juice',
        tag: 'circle',
        attrs: { cx: '5', cy: '19', r: '0.7', strokeWidth: '1.2' },
        transform: ['translateY(0px)', 'translateY(0px)', 'translateY(1.2px)', 'translateY(3px)'],
        opacity: [0, 0, 1, 0],
        times: [0, 0.3, 0.5, 1],
        ease: ['linear', 'easeIn', 'easeIn'],
        dur: 0.8,
      },
    ],
  },

  // --- city -----------------------------------------------------------------------------------
  'city-01': {
    verb: 'the buildings rise out of the ground one after another',
    parts: [
      rise('Y', [12, 22], [12, 15], { as: 'tower', delay: 0.08 }),
      rise('Y', [12, 22], [12, 15], { as: 'tower', delay: 0.08 }),
      rise('Y', [17, 22], [17, 11.9], { as: 'tower', delay: 0.16 }),
      rise('Y', [5, 22], [5, 17], { as: 'tower' }),
      null,
    ],
  },
  city: {
    verb: 'night falls: the windows flicker on and the tallest roof catches the light',
    parts: [null, blink({ as: 'windows', dur: 0.6 }), null, null, null],
    extras: [glint(16, 1.6, 0.9, { delay: 0.3 })],
  },
  'city-02': {
    verb: 'the antenna beacon blinks and the windows light up below it',
    parts: [null, beat([12, 13], { as: 'tower', delay: 0.34 }), null, null, blink({ as: 'beacon', dur: 0.6 }), null, blink({ as: 'windows', dur: 0.6, delay: 0.16 })],
  },
  'city-03': {
    verb: 'the little tree sways in the wind beside the buildings',
    parts: [
      null,
      null,
      swing([3.5, 22], [3.5, 14], SWAY, { as: 'tree' }),
      swing([3.5, 22], [3.5, 19], SWAY, { as: 'tree' }),
      null,
      blink({ as: 'windows', dur: 0.6, delay: 0.1 }),
      null,
    ],
  },

  // --- clap / claude / clean -------------------------------------------------------------------
  clapperboard: {
    verb: 'the clapper arm snaps shut on the board and springs back open',
    parts: [
      around([3, 10.5], [13.9, 5.1], [0, 13, -2, 0.6, 0], { as: 'arm', dur: 0.5 }),
      around([3, 10.5], [8.4, 7.1], [0, 13, -2, 0.6, 0], { as: 'arm', dur: 0.5 }),
      around([3, 10.5], [11.2, 6.4], [0, 13, -2, 0.6, 0], { as: 'arm', dur: 0.5 }),
      beat([12.5, 16.4], { as: 'board', delay: 0.14 }),
      null,
    ],
  },
  'clapping-01': {
    verb: 'the two hands clap twice',
    parts: [clap([-0.9, -0.9], 2), clap([0.9, 0.9], 2)],
  },
  clapping: {
    verb: 'the hands clap once and a burst pops where they meet',
    parts: [clap([-0.9, -0.9]), clap([0.9, 0.9])],
    extras: [burst(rays(18.5, 5, 1.2, 2.6, 6, -150), { delay: 0.04 })],
  },
  'clapping-02': {
    verb: 'the hands applaud three quick claps',
    parts: [clap([-0.6, -0.6], 3), clap([0.6, 0.6], 3)],
  },
  claude: {
    verb: 'the sunburst twists inward and springs back open',
    parts: [{ as: 'burst', origin: C, transform: ['rotate(0deg) scale(1)', 'rotate(30deg) scale(0.84)', 'rotate(-6deg) scale(1.08)', 'rotate(0deg) scale(1)'], times: [0, 0.38, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.72 }],
  },
  clean: {
    verb: 'the broom sweeps across and the sparkles pop clean',
    parts: [
      swing([21, 3], [17, 7.3], [0, 10, -8, 3, 0], { as: 'broom' }),
      swing([21, 3], [8.5, 15.7], [0, 10, -8, 3, 0], { as: 'broom' }),
      swing([21, 3], [7, 16], [0, 10, -8, 3, 0], { as: 'broom' }),
      pop([7.3, 7.3], 1.5, { as: 'sparkle', delay: 0.3 }),
      pop([11, 4], 2.4, { as: 'sparkle', delay: 0.42 }),
    ],
  },
  'cleaning-bucket': {
    verb: 'the handle swings, the water sloshes and the sponge hops',
    parts: [
      null,
      hop([7, 13], 1.4, { as: 'sponge', delay: 0.1 }),
      around([19, 9], [14, 5.5], [0, -10, 6, -2, 0], { as: 'handle' }),
      hop([7, 14], 1.4, { as: 'sponge', delay: 0.1 }),
      ride([15.5, 13], [[0, 0], [-0.8, 0], [0.7, 0], [-0.3, 0], [0, 0]], { as: 'water' }),
    ],
  },
  clinic: {
    verb: 'the medical cross turns a quarter and the building answers',
    parts: [beat(C, { as: 'building', delay: 0.3 }), lap([12, 13], 90, { as: 'cross', dur: 0.62 })],
  },
  clip: {
    verb: 'the sprout sways in its pot and the soil line redraws',
    parts: [retrace({ as: 'soil', delay: 0.2 }), around([8.8, 20], [12, 10.8], [0, -6, 4, -1.5, 0], { as: 'sprout', dur: 0.8 }), null],
  },
  cliparts: {
    verb: 'the folded corner flaps in and out of its notch',
    parts: [beat(C, { as: 'sheet', delay: 0.3 }), swell(C, [16.8, 7.3], [1, 0.6, 1.08, 0.98, 1], { as: 'corner' })],
  },

  // --- clipboards -------------------------------------------------------------------------------
  'clipboard-check': {
    verb: 'the check writes on the board and the clip snaps',
    parts: [draw({ as: 'check' }), hop([12, 3.5], 1, { as: 'clip', delay: 0.3 }), null],
  },
  'clipboard-clock': {
    verb: 'the clock hands sweep a full turn beside the clipboard',
    parts: [beat([15, 16], { as: 'dial', delay: 0.5 }), hands([15, 16], [15.8, 15.3]), null, null],
  },
  'clipboard-copy': {
    verb: 'the arrow pulls into the clipboard and the clip answers',
    parts: [nudge([16, 13], -2, 0, { as: 'arrow' }), nudge([12, 13], -2, 0, { as: 'arrow' }), beat([11.5, 3.5], { as: 'clip', delay: 0.24 }), null],
  },
  'clipboard-list': {
    verb: 'the list items tick off: bullet, line, bullet, line',
    parts: [draw({ as: 'line', delay: 0.06 }), draw({ as: 'line', delay: 0.26 }), pop([8, 11], 2, { as: 'bullet' }), pop([8, 16], 2, { as: 'bullet', delay: 0.2 }), null, null],
  },
  'clipboard-minus': {
    verb: 'the minus squeezes short and springs back',
    parts: [null, null, flex('X', [12, 13], [12, 13], [1, 0.25, 1.12, 0.98, 1], { as: 'minus' })],
  },
  'clipboard-pen-line': {
    verb: 'the pen scribbles along and the signature line draws under it',
    parts: [ride([17, 18], [[0, 0], [-1, 0.3], [0.6, -0.2], [-0.3, 0], [0, 0]], { as: 'pen' }), draw({ as: 'line', delay: 0.1 }), null, null, null],
  },
  'clipboard-pen': {
    verb: 'the pen scribbles on the corner of the board',
    parts: [ride([16, 17.5], [[0, 0], [-0.8, 0.8], [0.6, -0.4], [-0.4, 0.4], [0, 0]], { as: 'pen' }), null, null, null],
  },
  'clipboard-plus': {
    verb: 'the plus turns a quarter on the board',
    parts: [lap([12, 13], 90, { as: 'plus', dur: 0.62 }), null, null],
  },
  'clipboard-type': {
    verb: 'the T stamps onto the board',
    parts: [null, null, stamp([12, 13], { as: 'glyph' })],
  },
  'clipboard-x': {
    verb: 'the X spins a quarter turn on the board',
    parts: [lap([12, 13], 90, { as: 'x', dur: 0.62 }), null, null],
  },

  // --- clocks ------------------------------------------------------------------------------------
  'clock-02': {
    verb: 'time rewinds: the hands turn backward and the dial redraws',
    parts: [retrace({ as: 'dial', delay: 0.1 }), hands(C, [13, 11], -1)],
  },
  'clock-03': {
    verb: 'time fast-forwards: the hands turn forward and the dial redraws',
    parts: [retrace({ as: 'dial', delay: 0.1 }), hands(C, [13, 11])],
  },
  'clock-04': {
    verb: 'the hands rewind while the faded past fades out and back',
    parts: [null, hands(C, [13, 11], -1), dim({ as: 'past' })],
  },
  'clock-05': {
    verb: 'the hands run forward while the faded future fades out and back',
    parts: [null, hands(C, [13, 11]), dim({ as: 'future' })],
  },
  'clock-add': {
    verb: 'the hands sweep a turn and the plus turns a quarter',
    parts: [hands(C, [13.5, 10.5]), lap([19, 5], 90, { as: 'plus', dur: 0.62, delay: 0.2 }), null],
  },
  'clock-alert': {
    verb: 'the clock rattles, the bang stretches and the dot answers',
    parts: [shake(C, { as: 'dial' }), null, flex('Y', [20.1, 18], [20.1, 16], [1, 1.3, 0.9, 1.04, 1], { as: 'bang' }), hop([20.1, 21.8], 1.2, { as: 'dot', delay: 0.18 })],
  },
  'clock-arrow-down': {
    verb: 'the hands turn back as the arrow pushes down',
    parts: [null, nudge([19, 18.5], 0, 1.6, { as: 'arrow' }), hands(C, [13, 11], -1)],
  },
  'clock-arrow-up': {
    verb: 'the hands turn forward as the arrow pushes up',
    parts: [null, nudge([19, 18.5], 0, -1.6, { as: 'arrow' }), hands(C, [13, 11])],
  },
  'clock-check': {
    verb: 'the hands sweep a turn and the check writes when time is up',
    parts: [draw({ as: 'check', delay: 0.4 }), hands(C, [13, 11]), null],
  },
  'clock-fading': {
    verb: 'the fading ring spins while the hands sweep around',
    parts: [lap([11.9, 11.5], 360, { as: 'ring', dur: 1 }), hands(C, [14, 10])],
  },
  'clock-plus': {
    verb: 'the plus pops in the gap and the hands sweep around',
    parts: [null, pop([19, 19], 1.35, { as: 'plus', delay: 0.3 }), hands(C, [13, 11])],
  },
  clock: {
    verb: 'the hands sweep a full turn and the dial answers',
    parts: [beat(C, { as: 'dial', delay: 0.5 }), hands(C, [13, 11])],
  },

  // --- captions / clothes ------------------------------------------------------------------------
  'closed-caption-alt': {
    verb: 'the caption lines type themselves out in the bubble',
    parts: [beat(C, { as: 'bubble', delay: 0.4 }), draw({ as: 'caption', delay: 0.18 }), draw({ as: 'caption' })],
  },
  'closed-caption': {
    verb: 'the CC letters retract and rewrite',
    parts: [beat(C, { as: 'screen', delay: 0.4 }), sweep({ as: 'cc' })],
  },
  clothes: {
    verb: 'the shirt swings on its hanger collar',
    parts: [swing([12, 2], C, [0, -6, 5, -2, 0], { as: 'shirt' }), swing([12, 2], [12, 9], [0, -6, 5, -2, 0], { as: 'shirt' })],
  },

  // --- clouds ---------------------------------------------------------------------------------------
  'cloud-alert': {
    verb: 'the cloud rattles, the bang stretches and the dot answers',
    parts: [flex('Y', [12, 17], [12, 15], [1, 1.3, 0.9, 1.04, 1], { as: 'bang' }), hop([12, 20.8], 1.2, { as: 'dot', delay: 0.18 }), shake([12, 10.5], { as: 'cloud' })],
  },
  'cloud-angled-rain-zap': {
    verb: 'the bolt flashes while slanted drops fall out of the cloud',
    parts: [null, blink({ as: 'bolt', dur: 0.6 }), fall([15.5, 19.5], -0.8, 1.6, { as: 'drop', delay: 0.1 }), fall([12.5, 19.5], -0.8, 1.6, { as: 'drop' })],
  },
  'cloud-angled-rain': {
    verb: 'the slanted rain falls out of the cloud and starts again',
    parts: [fall([12, 18], -1, 2, { as: 'rain' }), cloud()],
  },
  'cloud-angled-zap': {
    verb: 'the bolt strikes down out of the cloud with a flash',
    parts: [cloud({ delay: 0.1 }), { ...blink({ as: 'bolt', dur: 0.6 }), origin: [12, 17.5], transform: ['translateY(0px)', 'translateY(1px)', 'translateY(0px)', 'translateY(0.6px)', 'translateY(0px)'] }],
  },
  'cloud-backup': {
    verb: 'the backup arrow circles a full turn under the cloud',
    parts: [cloud({ delay: 0.5 }), lap([12, 17.2], 360, { as: 'arrow', dur: 0.9 })],
  },
  'cloud-big-rain': {
    verb: 'the big drop falls out and a new one forms',
    parts: [cloud({ delay: 0.1 }), fall([12, 18], 0, 2.6, { as: 'drop' })],
  },
  'cloud-check': {
    verb: 'the check writes under the cloud, which answers',
    parts: [cloud(), draw({ as: 'check' })],
  },
  'cloud-cog': {
    verb: 'the cog turns a full revolution under the cloud',
    parts: [null, lap([12, 17], 360, { as: 'cog', dur: 1 })],
  },
  'cloud-drizzle': {
    verb: 'the drizzle falls in staggered ticks',
    parts: [
      null,
      fall([8, 18.5], 0, 1.2, { as: 'drop', delay: 0.2 }),
      fall([8, 13.5], 0, 1.2, { as: 'drop' }),
      fall([16, 18.5], 0, 1.2, { as: 'drop', delay: 0.26 }),
      fall([16, 13.5], 0, 1.2, { as: 'drop', delay: 0.06 }),
      fall([12, 20.5], 0, 1.2, { as: 'drop', delay: 0.3 }),
      fall([12, 15.5], 0, 1.2, { as: 'drop', delay: 0.12 }),
    ],
  },
  'cloud-fast-wind': {
    verb: 'the cloud darts forward and the wind lines whip behind it',
    parts: [retrace({ as: 'wind', delay: 0.06 }), draw({ as: 'gust', delay: 0.16 }), ride([12, 10.4], [[0, 0], [1.4, 0], [-0.3, 0], [0, 0], [0, 0]], { as: 'cloud', dur: 0.56 })],
  },
  'cloud-fog': {
    verb: 'the fog bands drift past each other under the cloud',
    parts: [null, ride([11.5, 16.5], [[0, 0], [-1.4, 0], [0.4, 0], [0, 0], [0, 0]], { as: 'fog', dur: 0.9 }), ride([13, 20.5], [[0, 0], [1.4, 0], [-0.4, 0], [0, 0], [0, 0]], { as: 'fog', dur: 0.9 })],
  },
  'cloud-hail': {
    verb: 'the hail streaks and stones pelt down in turn',
    parts: [
      null,
      fall([16, 14.5], 0, 1.4, { as: 'streak', delay: 0.1 }),
      fall([8, 14.5], 0, 1.4, { as: 'streak' }),
      fall([16, 19.5], 0, 1.4, { as: 'stone', delay: 0.22 }),
      fall([8, 19.5], 0, 1.4, { as: 'stone', delay: 0.12 }),
      fall([12, 16.5], 0, 1.4, { as: 'streak', delay: 0.06 }),
      fall([12, 21.5], 0, 1, { as: 'stone', delay: 0.18 }),
    ],
  },
  'cloud-hailstone': {
    verb: 'the hailstones drop out of the cloud together',
    parts: [cloud({ delay: 0.1 }), fall([12, 17.3], 0, 2.2, { as: 'stones' })],
  },
  'cloud-little-rain': {
    verb: 'the light rain falls and the cloud answers',
    parts: [fall([12, 17.3], 0, 1.6, { as: 'rain' }), cloud({ delay: 0.1 })],
  },
  'cloud-little-snow': {
    verb: 'the snowflakes drift down, wavering side to side',
    parts: [null, ride([12, 17.5], [[0, 0], [0.6, 0.6], [-0.6, 1.2], [0.3, 0.4], [0, 0]], { as: 'snow', dur: 1 })],
  },
  'cloud-loading': {
    verb: 'the loading dashes light up one after another',
    parts: [null, blink({ as: 'dash', dur: 0.5 }), blink({ as: 'dash', dur: 0.5, delay: 0.12 }), blink({ as: 'dash', dur: 0.5, delay: 0.24 })],
  },
  'cloud-mid-rain': {
    verb: 'the drops fall one after another and refill',
    parts: [null, fall([12, 13.8], 0, 2, { as: 'drop' }), fall([8.5, 19.3], 0, 1.6, { as: 'drop', delay: 0.14 }), fall([15.5, 19.3], 0, 1.6, { as: 'drop', delay: 0.24 })],
  },
  'cloud-mid-snow': {
    verb: 'the snowflake turns a sixth of a turn under the cloud',
    parts: [null, lap([12, 18], 60, { as: 'flake', dur: 0.72 })],
  },
  'cloud-moon-rain': {
    verb: 'the moon rocks behind the cloud while two drops fall',
    parts: [
      fall([11, 20], 0, 1.4, { as: 'drop', delay: 0.14 }),
      around([17.2, 7.9], [17.2, 7.9], [0, -12, 7, -2, 0], { as: 'moon' }),
      null,
      fall([7, 19], 0, 1.4, { as: 'drop' }),
    ],
  },
  'cloud-off': {
    verb: 'the slash draws across and the cloud fades behind it',
    parts: [dim({ as: 'cloud', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'cloud-rain-wind': {
    verb: 'the wind-blown rain slants down out of the cloud',
    parts: [null, fall([11.2, 19], -0.8, 2, { as: 'drop', delay: 0.16 }), fall([8, 17], -0.8, 2, { as: 'drop' }), fall([16, 17], -0.8, 2, { as: 'drop', delay: 0.08 })],
  },
  'cloud-saving-done-01': {
    verb: 'the check writes under the cloud once the save is done',
    parts: [null, draw({ as: 'check' })],
  },
  'cloud-saving-done-02': {
    verb: 'the check pops out of the cloud and the cloud answers',
    parts: [pop([12, 17], 1.25, { as: 'check' }), beat([12, 9.2], { as: 'cloud', delay: 0.24 })],
  },
  'cloud-saving-done': {
    verb: 'the check stamps in and the cloud answers',
    parts: [cloud({ delay: 0.24 }), stamp([13, 18], { as: 'check' })],
  },
  'cloud-server': {
    verb: 'the connector below the cloud redraws as data syncs',
    parts: [cloud({ delay: 0.4 }), retrace({ as: 'link' })],
  },
  'cloud-slow-wind': {
    verb: 'the cloud drifts slowly while the breeze ripples under it',
    parts: [ride([12, 18.5], [[0, 0], [-1, 0], [0.4, 0], [0, 0], [0, 0]], { as: 'breeze', dur: 1 }), ride([12, 10], [[0, 0], [0.8, 0], [-0.2, 0], [0, 0], [0, 0]], { as: 'cloud', dur: 1 })],
  },
}

export default settleSpecs(specs)
