/**
 * Page 14 — camel → cards-02.
 *
 * Gallery page (80 public icons). Skipped handcrafted originals: `cancel-01`
 * (the X writes itself stroke by stroke) and the hidden `camera-01`.
 *
 * First page to use `extras`: props the gesture brings in and takes away —
 * a flash burst, sound waves, wipers, sparks, speed lines, glow rays. Every
 * extra rests invisible (opacity 0) and ends invisible, so the Hugeicons pose
 * is untouched at rest.
 *
 * Identical-geometry pairs get different jobs: camera-add / -01,
 * automatically / -01, microphone / -01, night-mode / -01, off / -01,
 * rotated / -01, smile / -01, candelier / -01, car / car-01,
 * car-parking / -01, card-exchange / -01, cardiogram / -01, cancel / cancel-01.
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
  draw,
  glint,
  glow,
  puff,
  rays,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  spinStar,
  stamp,
  swing,
  trail,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

/** Body of a camera dips as the shutter button is pressed. */
const press = (origin, o = {}) => ({
  as: 'body',
  origin,
  transform: ['translateY(0px) scale(1)', 'translateY(0.4px) scale(0.965)', 'translateY(-0.1px) scale(1.012)', 'translateY(0px) scale(1)'],
  times: [0, 0.24, 0.56, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  ...o,
})

/** Lens iris snaps shut and reopens. */
const iris = (origin, o = {}) => ({
  as: 'lens',
  origin,
  transform: ['scale(1)', 'scale(0.58)', 'scale(1.08)', 'scale(1)'],
  times: [0, 0.26, 0.6, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.54,
  ...o,
})

/** Lens racks focus: out, past, settle. */
const focus = (origin, o = {}) => ({
  as: 'lens',
  origin,
  transform: ['scale(1)', 'scale(1.16)', 'scale(0.9)', 'scale(1.04)', 'scale(1)'],
  times: T5,
  ease: E5,
  dur: 0.78,
  ...o,
})

/** Car body springing on its suspension (wheels stay planted). */
const SPRING = [[0, 0], [0, 0.9], [0, -1], [0, 0.25], [0, 0]]
/** Engine idle shudder. */
const IDLE = [[0, 0], [0, -0.45], [0, 0.3], [0, -0.35], [0, 0]]

/** Two sound arcs around a point (mic waves). */
const waves = (cx, cy, gap, o = {}) =>
  burst(
    `M${cx - gap} ${cy - 2}C${cx - gap - 0.7} ${cy - 1} ${cx - gap - 0.7} ${cy + 1} ${cx - gap} ${cy + 2}M${cx + gap} ${cy - 2}C${cx + gap + 0.7} ${cy - 1} ${cx + gap + 0.7} ${cy + 1} ${cx + gap} ${cy + 2}`,
    {
      as: 'waves',
      transform: ['scale(0.7)', 'scale(0.7)', 'scale(1)', 'scale(1.2)'],
      opacity: [0, 0, 1, 0],
      times: [0, 0.12, 0.4, 0.9],
      ...o,
    },
  )

/** A wiper blade sweeping across a windshield. */
const wiper = (px, py, len, o = {}) => ({
  ...around([px, py], [px, py - len / 2], [-62, 58, -58, 58, -62], { times: [0, 0.25, 0.5, 0.75, 1], ease: INOUT, dur: 0.9 }),
  as: 'wiper',
  tag: 'path',
  attrs: { d: `M${px} ${py}V${py - len}`, strokeWidth: '1.2' },
  opacity: [0, 1, 1, 1, 0],
  ...o,
})

const flame = (pivot, center, scales, o = {}) => ({
  ...scaleFrom('Y', pivot, center, scales, { times: T5, ease: E5, dur: 0.72 }),
  as: 'flame',
  ...o,
})

const RING = [0, 7, -5, 2.5, 0]
const INSERT = [[0, 0], [0, 1.4], [0, 1.4], [0, -0.2], [0, 0]]
const SLOT = { times: [0, 0.26, 0.64, 0.86, 1], ease: [INOUT, 'linear', INOUT, OUT], dur: 0.8 }

// ---------------------------------------------------------------------------

const specs = {
  camel: {
    verb: 'the camel lopes forward with a rolling hump and kicks up sand behind',
    parts: [
      {
        as: 'camel',
        origin: [12, 11.5],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-0.8px, -0.9px) rotate(-2.5deg)',
          'translate(-1.3px, 0px) rotate(0.5deg)',
          'translate(-0.6px, -0.7px) rotate(-1.5deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: T5,
        ease: E5,
        dur: 0.82,
      },
    ],
    extras: [
      puff(19.5, 20.2, 0.6, 1.4, -0.8, { delay: 0.08 }),
      puff(16.8, 20.4, 0.45, 1.1, -0.6, { delay: 0.3 }),
    ],
  },

  'camera-02': {
    verb: 'the lens racks focus while the record light blinks',
    parts: [null, blink(), focus([14.5, 13])],
  },
  'camera-03': {
    verb: 'the flash fires a burst and the body kicks back from it',
    parts: [press([12, 12], { delay: 0.12 }), null, glow([19, 10], 2.2, { delay: 0.12 })],
    extras: [burst(rays(19, 10, 1.3, 2.5, 8, 22.5))],
  },
  camera: {
    verb: 'the shutter button presses, the iris snaps shut and the ready light pops',
    parts: [press([12, 12]), iris([12, 13], { delay: 0.06 }), glow([19, 9.5], 2, { delay: 0.3 })],
  },

  'camera-add-01': {
    verb: 'the plus spins a half turn onto the corner and the body nods',
    parts: [
      beat([12, 12.5], { as: 'body', delay: 0.2 }),
      null,
      {
        as: 'plus',
        origin: [18.5, 5.5],
        transform: ['rotate(0deg) scale(1)', 'rotate(90deg) scale(0.6)', 'rotate(190deg) scale(1.18)', 'rotate(180deg) scale(1)'],
        times: [0, 0.3, 0.66, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.62,
      },
    ],
  },
  'camera-add': {
    verb: 'the plus hops out of the corner and the lens blinks to take it',
    parts: [
      null,
      iris([12, 13.5], { delay: 0.3, dur: 0.46 }),
      {
        as: 'plus',
        origin: [18.5, 5.5],
        transform: ['translate(0px, 0px) scale(1)', 'translate(0.8px, -1.4px) scale(1.22)', 'translate(0px, 0.3px) scale(0.94)', 'translate(0px, 0px) scale(1)'],
        times: [0, 0.32, 0.62, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.56,
      },
    ],
  },
  'camera-add-02': {
    verb: 'the plus twists a quarter turn as the lens zooms out to make room',
    parts: [
      null,
      stamp([18.5, 5], { as: 'plus', transform: ['rotate(0deg) scale(1)', 'rotate(-45deg) scale(0.6)', 'rotate(96deg) scale(1.14)', 'rotate(90deg) scale(1)'] }),
      null,
      focus([14.5, 14], { delay: 0.1, dur: 0.7 }),
    ],
  },
  'camera-add-03': {
    verb: 'the plus in the lens turns like a bezel and the body pops',
    parts: [
      beat([12, 12], { as: 'body', delay: 0.18 }),
      stamp([12, 13], { as: 'plus', transform: ['rotate(0deg) scale(1)', 'rotate(-30deg) scale(0.62)', 'rotate(98deg) scale(1.12)', 'rotate(90deg) scale(1)'], dur: 0.58 }),
    ],
  },
  'camera-ai': {
    verb: 'the lens scans side to side while the spark turns and a second glint answers',
    parts: [
      null,
      ride([12, 13], [[0, 0], [-1.2, 0], [1.2, 0], [-0.3, 0], [0, 0]], { as: 'lens', dur: 0.8 }),
      spinStar([18, 6]),
    ],
    extras: [glint(21.6, 2.2, 1, { delay: 0.22, dur: 0.7 })],
  },

  'camera-automatically': {
    verb: 'the auto A writes itself into the lens, then the ready light blinks',
    parts: [null, blink({ delay: 0.42, dur: 0.5, times: [0, 0.25, 0.5, 0.75, 1] }), draw({ as: 'letter' })],
  },
  'camera-automatically-01': {
    verb: 'the auto A hops in the lens and lands squashed, the light answers first',
    parts: [
      null,
      blink({ dur: 0.4, times: [0, 0.25, 0.5, 0.75, 1] }),
      {
        as: 'letter',
        origin: [12, 13],
        transform: [
          'translateY(0px) scale(1, 1)',
          'translateY(-1.6px) scale(0.9, 1.12)',
          'translateY(0.4px) scale(1.14, 0.86)',
          'translateY(0px) scale(1, 1)',
        ],
        times: [0, 0.36, 0.64, 1],
        ease: [INOUT, 'easeIn', OUT],
        dur: 0.6,
        delay: 0.1,
      },
    ],
  },
  'camera-automatically-02': {
    verb: 'the auto A retraces its strokes while the side light blinks',
    parts: [null, blink({ dur: 0.7 }), retrace({ as: 'letter' })],
  },

  'camera-lens': {
    verb: 'the aperture blades turn as the inner ring closes and opens',
    parts: [
      null,
      iris([12, 12], { as: 'ring', transform: ['scale(1)', 'scale(0.68)', 'scale(1.06)', 'scale(1)'], dur: 0.72, times: [0, 0.34, 0.68, 1] }),
      {
        as: 'blades',
        origin: [12, 12],
        transform: ['rotate(0deg) scale(1)', 'rotate(54deg) scale(0.86)', 'rotate(98deg) scale(1.03)', 'rotate(90deg) scale(1)'],
        times: [0, 0.34, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
    ],
  },

  'camera-microphone': {
    verb: 'the mic bobs as it speaks and sound rings out on both sides',
    parts: [
      null,
      null,
      ride([12, 13], [[0, 0], [0, -0.8], [0, 0.3], [0, -0.4], [0, 0]], { as: 'mic', dur: 0.7 }),
    ],
    extras: [waves(12, 11.5, 4.6), waves(12, 11.5, 4.6, { delay: 0.28 })],
  },
  'camera-microphone-01': {
    verb: 'the mic tilts side to side like a singer while the record light blinks',
    parts: [
      null,
      blink(),
      {
        as: 'mic',
        origin: [12, 13],
        transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(9deg)', 'rotate(-4deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.8,
      },
    ],
  },
  'camera-microphone-02': {
    verb: 'the side light blinks on and sound rings out around the mic',
    parts: [null, blink({ dur: 0.5, times: [0, 0.25, 0.5, 0.75, 1] }), null],
    extras: [waves(14.5, 11.5, 4.4, { delay: 0.1 }), waves(14.5, 11.5, 4.4, { delay: 0.36 })],
  },

  'camera-night-mode': {
    verb: 'the moon rocks in the lens and a star twinkles beside it',
    parts: [
      null,
      {
        as: 'moon',
        origin: [12, 13],
        transform: ['rotate(0deg)', 'rotate(-20deg)', 'rotate(8deg)', 'rotate(-3deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.78,
      },
      null,
    ],
    extras: [glint(16.4, 9.2, 1, { delay: 0.16 })],
  },
  'camera-night-mode-01': {
    verb: 'the moon sinks and rises again while the flash light dims out',
    parts: [
      null,
      {
        as: 'moon',
        origin: [12, 13],
        transform: ['translateY(0px) scale(1)', 'translateY(1.6px) scale(0.86)', 'translateY(-0.4px) scale(1.04)', 'translateY(0px) scale(1)'],
        opacity: [1, 0.35, 1, 1],
        times: [0, 0.36, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
      { as: 'led', opacity: [1, 0.1, 0.1, 1], times: [0, 0.2, 0.7, 1], ease: OUT, dur: 0.72 },
    ],
  },
  'camera-night-mode-02': {
    verb: 'the moon rocks in the lens, the side light dims and a star appears',
    parts: [
      null,
      { as: 'led', opacity: [1, 0.15, 1], times: [0, 0.4, 1], ease: INOUT, dur: 0.8 },
      {
        as: 'moon',
        origin: [14.5, 13],
        transform: ['rotate(0deg)', 'rotate(16deg)', 'rotate(-7deg)', 'rotate(2deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.78,
      },
    ],
    extras: [glint(19.2, 9.4, 1, { delay: 0.2 })],
  },

  'camera-off': {
    verb: 'the slash cuts across and the camera flinches away from it',
    parts: [
      null,
      draw({ as: 'slash' }),
      {
        as: 'body',
        origin: [12, 12],
        transform: ['translate(0px, 0px) rotate(0deg)', 'translate(0.5px, 0.5px) rotate(3deg)', 'translate(-0.15px, -0.1px) rotate(-1deg)', 'translate(0px, 0px) rotate(0deg)'],
        times: [0, 0.3, 0.62, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.56,
        delay: 0.08,
      },
      null,
    ],
  },
  'camera-off-01': {
    verb: 'the slash cuts across, the lens shrinks back and the light goes out',
    parts: [
      { as: 'lens', origin: [11.6, 13.4], transform: ['scale(1)', 'scale(0.78)', 'scale(1)'], opacity: [1, 0.4, 1], times: [0, 0.4, 1], ease: [OUT, INOUT], dur: 0.72, delay: 0.1 },
      draw({ as: 'slash' }),
      null,
      { as: 'led', opacity: [1, 0, 0, 1], times: [0, 0.2, 0.7, 1], ease: OUT, dur: 0.72 },
    ],
  },
  'camera-off-02': {
    verb: 'the slash cuts across, the lens collapses and the side light fades',
    parts: [
      { as: 'led', opacity: [1, 0, 0, 1], times: [0, 0.2, 0.7, 1], ease: OUT, dur: 0.72 },
      draw({ as: 'slash' }),
      { as: 'lens', origin: [14.5, 13], transform: ['rotate(0deg) scale(1)', 'rotate(-30deg) scale(0.72)', 'rotate(0deg) scale(1)'], opacity: [1, 0.45, 1], times: [0, 0.4, 1], ease: [OUT, INOUT], dur: 0.72, delay: 0.1 },
      null,
      null,
    ],
  },

  'camera-rotated': {
    verb: 'the arrow in the lens runs one full lap clockwise',
    parts: [null, { ...around([12, 13], [12.75, 13], [0, 70, 250, 372, 360], { dur: 0.86 }), as: 'arrow' }],
  },
  'camera-rotated-01': {
    verb: 'the camera flips to selfie mode, folding edge-on and back, the arrow winding back',
    wrap: {
      as: 'flip',
      origin: [12, 12],
      transform: ['scaleX(1)', 'scaleX(0.08)', 'scaleX(1.04)', 'scaleX(1)'],
      times: [0, 0.4, 0.74, 1],
      ease: [INOUT, OUT, OUT],
      dur: 0.7,
    },
    parts: [null, { ...around([12, 13], [12.75, 13], [0, -46, -46, 8, 0], { times: [0, 0.4, 0.6, 0.84, 1], dur: 0.7 }), as: 'arrow' }],
  },
  'camera-rotated-02': {
    verb: 'the mirrored arrow runs one full lap counter-clockwise',
    parts: [null, { ...around([14.5, 13], [13.75, 13], [0, -70, -250, -372, -360], { dur: 0.86 }), as: 'arrow' }],
  },

  'camera-smile': {
    verb: 'say cheese: the smile widens and both eyes blink',
    parts: [
      null,
      { as: 'smile', origin: [12, 15.5], transform: ['scale(1, 1)', 'scale(1.18, 1.35)', 'scale(0.96, 0.92)', 'scale(1, 1)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
      { as: 'eye', origin: [9, 10.5], transform: ['scaleY(1)', 'scaleY(1)', 'scaleY(0.15)', 'scaleY(1)'], times: [0, 0.3, 0.42, 0.6], ease: [INOUT, INOUT, OUT], dur: 0.62 },
      { as: 'eye', origin: [15, 10.5], transform: ['scaleY(1)', 'scaleY(1)', 'scaleY(0.15)', 'scaleY(1)'], times: [0, 0.3, 0.42, 0.6], ease: [INOUT, INOUT, OUT], dur: 0.62 },
    ],
  },
  'camera-smile-01': {
    verb: 'the right eye winks while the smile tips up on that side',
    parts: [
      null,
      { as: 'smile', origin: [12, 15.5], transform: ['rotate(0deg) scale(1)', 'rotate(-8deg) scale(1.08)', 'rotate(-8deg) scale(1.08)', 'rotate(0deg) scale(1)'], times: [0, 0.3, 0.7, 1], ease: [INOUT, OUT, INOUT], dur: 0.7 },
      null,
      { as: 'wink', origin: [15, 10.5], transform: ['scale(1, 1)', 'scale(1.6, 0.12)', 'scale(1.6, 0.12)', 'scale(1, 1)'], times: [0, 0.24, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.7 },
    ],
  },
  'camera-smile-02': {
    verb: 'the eyes blink twice and the smile stretches into a grin',
    parts: [
      null,
      null,
      { as: 'smile', origin: [14.5, 15.5], transform: ['scale(1, 1)', 'scale(1.12, 1.3)', 'scale(1.12, 1.3)', 'scale(1, 1)'], times: [0, 0.3, 0.72, 1], ease: [INOUT, OUT, INOUT], dur: 0.8 },
      { as: 'eye', origin: [11.5, 10.5], transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1)', 'scaleY(0.15)', 'scaleY(1)'], times: [0, 0.14, 0.3, 0.44, 0.6], ease: INOUT, dur: 0.8 },
      { as: 'eye', origin: [17.5, 10.5], transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1)', 'scaleY(0.15)', 'scaleY(1)'], times: [0, 0.14, 0.3, 0.44, 0.6], ease: INOUT, dur: 0.8 },
    ],
  },

  'camera-tripod': {
    verb: 'the camera pans on its tripod head while the legs stay planted',
    parts: [
      swing([12, 18], [12, 10], [0, -8, 6, -2, 0], { as: 'body', dur: 0.82 }),
      null,
      null,
      swing([12, 18], [12, 9.5], [0, -8, 6, -2, 0], { as: 'lens', dur: 0.82 }),
    ],
  },
  'camera-video': {
    verb: 'the film reels spin, the body hums and the lens hood pulses',
    parts: [
      null,
      ride([9.5, 12.5], IDLE, { as: 'body', dur: 0.8 }),
      { as: 'hood', origin: [19.5, 12.5], transform: ['scale(1, 1)', 'scale(0.86, 1.1)', 'scale(1.04, 0.97)', 'scale(1, 1)'], times: [0, 0.3, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.6, delay: 0.1 },
      null,
      null,
    ],
    extras: [
      {
        as: 'spokes',
        tag: 'path',
        attrs: { d: 'M12.5 3.6V6.4M11.1 5H13.9', strokeWidth: '1.1' },
        origin: [12.5, 5],
        transform: ['rotate(0deg)', 'rotate(90deg)', 'rotate(270deg)', 'rotate(360deg)'],
        opacity: [0, 1, 1, 0],
        times: [0, 0.16, 0.8, 1],
        ease: 'linear',
        dur: 0.8,
      },
      {
        as: 'spokes',
        tag: 'path',
        attrs: { d: 'M7 2.9V6.1M5.4 4.5H8.6', strokeWidth: '1.1' },
        origin: [7, 4.5],
        transform: ['rotate(0deg)', 'rotate(90deg)', 'rotate(270deg)', 'rotate(360deg)'],
        opacity: [0, 1, 1, 0],
        times: [0, 0.16, 0.8, 1],
        ease: 'linear',
        dur: 0.8,
      },
    ],
  },

  camper: {
    verb: 'the camper rolls along, bouncing on its springs and puffing exhaust',
    parts: [
      null,
      null,
      ride([12, 8.5], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.5], [0, 0]], { as: 'cabin', dur: 0.7 }),
      ride([12, 16], [[0, 0], [0, -0.6], [0, 0.15], [0, -0.35], [0, 0]], { as: 'chassis', dur: 0.7, delay: 0.03 }),
      ride([7, 7], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.5], [0, 0]], { as: 'cabin', dur: 0.7 }),
      ride([18, 10], [[0, 0], [0, -0.8], [0, 0.2], [0, -0.5], [0, 0]], { as: 'cabin', dur: 0.7 }),
    ],
    extras: [puff(1.6, 17.6, 0.8, -0.9, -1.1), puff(1.6, 17.6, 0.6, -0.6, -1.6, { delay: 0.26 })],
  },
  campfire: {
    verb: 'the flames flicker out of phase and sparks drift up off the top',
    parts: [
      flame([12, 16], [12, 9], [1, 1.1, 0.93, 1.05, 1], { as: 'flame' }),
      null,
      flame([12, 16], [12, 13.5], [1, 0.82, 1.16, 0.94, 1], { as: 'core' }),
    ],
    extras: [
      { as: 'spark', tag: 'circle', attrs: { cx: '9.2', cy: '4.6', r: '0.45', strokeWidth: '1' }, transform: ['translate(0px, 0px)', 'translate(0px, 0px)', 'translate(-0.6px, -2.2px)', 'translate(-0.4px, -3.4px)'], opacity: [0, 0, 1, 0], times: [0, 0.12, 0.5, 1], ease: ['linear', OUT, 'easeIn'], dur: 0.8 },
      { as: 'spark', tag: 'circle', attrs: { cx: '15.2', cy: '5.4', r: '0.45', strokeWidth: '1' }, transform: ['translate(0px, 0px)', 'translate(0px, 0px)', 'translate(0.7px, -2.4px)', 'translate(0.5px, -3.6px)'], opacity: [0, 0, 1, 0], times: [0, 0.3, 0.64, 1], ease: ['linear', OUT, 'easeIn'], dur: 0.8 },
    ],
  },

  'cancel-02': {
    verb: 'the solid X presses in like a button and springs back',
    parts: [{ as: 'x', origin: [12, 12], transform: ['scale(1)', 'scale(0.76)', 'scale(1.1)', 'scale(1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.5 }],
  },
  'cancel-circle-half-dot': {
    verb: 'the broken ring turns a notch while the X writes itself inside',
    parts: [
      { as: 'ring', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-34deg)', 'rotate(6deg)', 'rotate(0deg)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.72 },
      draw({ as: 'x', delay: 0.06 }),
    ],
  },
  'cancel-circle': {
    verb: 'the X twists a quarter turn and the ring answers the knock',
    parts: [
      beat([12, 12], { as: 'ring', delay: 0.2 }),
      { as: 'x', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.6)', 'rotate(96deg) scale(1.1)', 'rotate(90deg) scale(1)'], times: [0, 0.32, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
    ],
  },
  'cancel-square': {
    verb: 'the square shakes its head no, the X lagging behind',
    parts: [
      ride([12, 12], [[0, 0], [-1.3, 0], [1.1, 0], [-0.5, 0], [0, 0]], { as: 'tile', dur: 0.56 }),
      ride([12, 12], [[0, 0], [-1.7, 0], [1.4, 0], [-0.6, 0], [0, 0]], { as: 'x', dur: 0.56, delay: 0.03 }),
    ],
  },
  cancel: {
    verb: 'the X shrinks, twists a quarter turn and snaps back to size',
    parts: [{ as: 'x', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(40deg) scale(0.55)', 'rotate(98deg) scale(1.12)', 'rotate(90deg) scale(1)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }],
  },

  candelier: {
    verb: 'the chandelier swings from its ceiling mount like a pendulum',
    parts: [
      swing([12, 3], [4.5, 16], RING, { as: 'lamp' }),
      swing([12, 3], [12, 19], RING, { as: 'lamp' }),
      swing([12, 3], [19.5, 16], RING, { as: 'lamp' }),
      null,
      swing([12, 3], [12, 10], RING, { as: 'stem' }),
      swing([12, 3], [12, 11], RING, { as: 'arms' }),
    ],
  },
  'candelier-01': {
    verb: 'the three lamps light up one after another, each glowing beneath',
    parts: [
      glow([4.5, 16], 1.14, { as: 'lamp', dur: 0.4 }),
      glow([12, 19], 1.14, { as: 'lamp', dur: 0.4, delay: 0.14 }),
      glow([19.5, 16], 1.14, { as: 'lamp', dur: 0.4, delay: 0.28 }),
      null,
      null,
      null,
    ],
    extras: [
      burst('M4.5 19.4V20.6M2.6 19L1.9 19.7M6.4 19L7.1 19.7', { as: 'shine', dur: 0.56 }),
      burst('M12 22.2V23.2M10.1 22L9.4 22.6M13.9 22L14.6 22.6', { as: 'shine', dur: 0.56, delay: 0.14 }),
      burst('M19.5 19.4V20.6M17.6 19L16.9 19.7M21.4 19L22.1 19.7', { as: 'shine', dur: 0.56, delay: 0.28 }),
    ],
  },
  'candelier-02': {
    verb: 'the three pendant lamps sway on their chains, each out of step',
    parts: [
      null,
      swing([12, 3], [12, 9.5], [0, 6, -4, 2, 0], { as: 'chain', delay: 0.08 }),
      swing([19.5, 3], [19.5, 7], [0, -8, 5, -2, 0], { as: 'chain', delay: 0.16 }),
      swing([4.5, 3], [4.5, 7], [0, 8, -5, 2, 0], { as: 'chain' }),
      swing([4.5, 3], [4.5, 13.7], [0, 8, -5, 2, 0], { as: 'pendant' }),
      swing([12, 3], [12, 18.7], [0, 6, -4, 2, 0], { as: 'pendant', delay: 0.08 }),
      swing([19.5, 3], [19.5, 13.7], [0, -8, 5, -2, 0], { as: 'pendant', delay: 0.16 }),
    ],
  },

  'candy-cane': {
    verb: 'the candy cane wobbles on its hook and a glint catches the stripes',
    parts: [{ as: 'cane', origin: [12.3, 11.7], transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(8deg)', 'rotate(-3deg)', 'rotate(0deg)'], times: T5, ease: E5, dur: 0.78 }],
    extras: [glint(19.6, 13.4, 1.1, { delay: 0.18 })],
  },
  'candy-off': {
    verb: 'the slash cuts the sweet and its twisted ends pull apart and dim',
    parts: [
      null,
      null,
      { as: 'end', origin: [18.8, 5.3], transform: ['translate(0px, 0px)', 'translate(1px, -1px)', 'translate(0px, 0px)'], opacity: [1, 0.4, 1], times: [0, 0.42, 1], ease: [OUT, INOUT], dur: 0.76, delay: 0.1 },
      draw({ as: 'slash' }),
      { as: 'end', origin: [5.3, 18.8], transform: ['translate(0px, 0px)', 'translate(-1px, 1px)', 'translate(0px, 0px)'], opacity: [1, 0.4, 1], times: [0, 0.42, 1], ease: [OUT, INOUT], dur: 0.76, delay: 0.1 },
    ],
  },
  candy: {
    verb: 'the wrapper ends twist as the sweet turns against them, ready to unwrap',
    parts: [
      { as: 'sweet', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-14deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      { as: 'sweet', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-14deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      { as: 'twist', origin: [18.8, 5.3], transform: ['rotate(0deg) scale(1)', 'rotate(28deg) scale(0.86)', 'rotate(-6deg) scale(1.04)', 'rotate(0deg) scale(1)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      { as: 'twist', origin: [5.3, 18.8], transform: ['rotate(0deg) scale(1)', 'rotate(28deg) scale(0.86)', 'rotate(-6deg) scale(1.04)', 'rotate(0deg) scale(1)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
    ],
  },

  'cannabis-off': {
    verb: 'the slash cuts through and the leaf wilts over on its stem',
    parts: [
      { ...around([12, 16.5], [12, 10.5], [0, 12, 12, 12, 0], { times: [0, 0.3, 0.5, 0.72, 1], ease: [INOUT, OUT, 'linear', INOUT], dur: 0.8, delay: 0.1 }), as: 'leaf' },
      null,
      draw({ as: 'slash' }),
    ],
  },
  cannabis: {
    verb: 'the leaf sways in a breeze on top of its stem',
    parts: [swing([12, 16.5], [12, 10.5], [0, -7, 5, -2, 0], { as: 'leaf', dur: 0.82 }), null],
  },

  canvas: {
    verb: 'the brush stroke paints itself across the canvas and the easel settles',
    parts: [beat([12, 9.5], { as: 'board', delay: 0.5 }), null, draw({ as: 'stroke', dur: 0.8, times: [0, 0.1, 0.16, 1] }), null, null, null],
  },

  'cap-projecting': {
    verb: 'the projecting cap pushes out past the anchor and the anchor rides with it',
    parts: [
      { ...scaleFrom('X', [21, 12], [12, 12], [1, 1.12, 0.97, 1], { times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }), as: 'cap' },
      ride([10.5, 12], [[0, 0], [-1.2, 0], [0.2, 0], [0, 0], [0, 0]], { as: 'anchor', times: [0, 0.36, 0.68, 0.9, 1], dur: 0.6 }),
      null,
    ],
  },
  'cap-round': {
    verb: 'the anchor rolls out along the stroke to its end and back around the round cap',
    parts: [
      null,
      {
        as: 'anchor',
        origin: [10.5, 12],
        transform: ['translateX(0px)', 'translateX(8px)', 'translateX(8px)', 'translateX(-0.4px)', 'translateX(0px)'],
        times: [0, 0.38, 0.5, 0.86, 1],
        ease: [INOUT, 'linear', INOUT, OUT],
        dur: 0.9,
      },
      { as: 'line', pathLength: [1, 0.001, 0.001, 1], pathOffset: [0, 1, 0, 0], times: [0, 0.38, 0.5, 0.86], ease: [INOUT, 'linear', INOUT], dur: 0.9 },
    ],
  },
  'cap-straight': {
    verb: 'the open corners pinch in on the anchor and spring back',
    parts: [
      { as: 'cap', origin: [13.3, 12], transform: ['scaleY(1)', 'scaleY(0.78)', 'scaleY(1.05)', 'scaleY(1)'], times: [0, 0.32, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.56 },
      { as: 'anchor', origin: [5.5, 12], transform: ['scale(1)', 'scale(1.32)', 'scale(0.94)', 'scale(1)'], times: [0, 0.32, 0.64, 1], ease: [INOUT, OUT, OUT], dur: 0.56 },
      retrace({ as: 'line', delay: 0.08, dur: 0.6 }),
    ],
  },
  cap: {
    verb: 'the cap is doffed — lifted and tipped by the brim — then set back down',
    wrap: {
      as: 'cap',
      origin: [12, 18],
      transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1px, -2.6px) rotate(-12deg)', 'translate(0px, 0.35px) rotate(1.5deg)', 'translate(0px, 0px) rotate(0deg)'],
      times: [0, 0.4, 0.72, 1],
      ease: [INOUT, OUT, OUT],
      dur: 0.74,
    },
    parts: [
      null,
      null,
      null,
      { as: 'button', origin: [12, 2.5], transform: ['translateY(0px)', 'translateY(-0.9px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.46, 0.76, 1], ease: [INOUT, OUT, OUT], dur: 0.74, delay: 0.04 },
      null,
    ],
  },

  'capcut-rectangle': {
    verb: 'the cut mark retraces its blades inside the frame, and the frame clicks',
    parts: [retrace({ as: 'mark', dur: 0.74 }), beat([12, 12], { as: 'frame', delay: 0.42 })],
  },
  capcut: {
    verb: 'the blades close like scissors and spring back open',
    parts: [{ as: 'blades', origin: [12, 12], transform: ['scale(1, 1)', 'scale(1.06, 0.62)', 'scale(0.98, 1.08)', 'scale(1, 1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.52 }],
  },

  'captions-off': {
    verb: 'the slash cuts across and the caption lines drop out one by one',
    parts: [
      null,
      null,
      { as: 'word', opacity: [1, 0.2, 0.2, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, delay: 0.1 },
      { as: 'word', opacity: [1, 0.2, 0.2, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, delay: 0.16 },
      { as: 'word', opacity: [1, 0.2, 0.2, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, delay: 0.26 },
      { as: 'word', opacity: [1, 0.2, 0.2, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, delay: 0.22 },
      draw({ as: 'slash' }),
    ],
  },
  captions: {
    verb: 'the caption words type in line by line, in reading order',
    parts: [
      null,
      draw({ as: 'word', dur: 0.5 }),
      draw({ as: 'word', dur: 0.4, delay: 0.14 }),
      draw({ as: 'word', dur: 0.5, delay: 0.32 }),
      draw({ as: 'word', dur: 0.4, delay: 0.24 }),
    ],
  },

  car: {
    verb: 'the engine turns over and the body shudders on its springs, wheels planted',
    parts: [
      ride([3.5, 12.5], IDLE, { as: 'body' }),
      ride([20.5, 12.8], IDLE, { as: 'body' }),
      ride([12, 16.3], IDLE, { as: 'body' }),
      null,
      null,
      ride([20.5, 8.3], IDLE, { as: 'body' }),
      ride([3.5, 8.3], IDLE, { as: 'body' }),
      ride([12, 6], IDLE, { as: 'body' }),
      ride([12, 13.5], IDLE, { as: 'body' }),
    ],
  },
  'car-01': {
    verb: 'the headlights flash twice and throw light out to both sides',
    parts: [
      { ...glow([3.5, 12.5], 1.4, { as: 'beam' }), transform: ['scale(1)', 'scale(1.4)', 'scale(1)', 'scale(1.4)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 0.86], ease: INOUT, dur: 0.8 },
      { ...glow([20.5, 12.8], 1.4, { as: 'beam' }), transform: ['scale(1)', 'scale(1.4)', 'scale(1)', 'scale(1.4)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 0.86], ease: INOUT, dur: 0.8 },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ],
    extras: [
      burst('M1.3 11.3L0.5 10.8M1.3 12.8H0.3M1.3 14.3L0.5 14.8', { as: 'shine', opacity: [0, 1, 0, 1, 0], transform: ['translateX(0px)', 'translateX(-0.3px)', 'translateX(0px)', 'translateX(-0.3px)', 'translateX(0px)'], times: [0, 0.2, 0.4, 0.6, 0.86], ease: INOUT, dur: 0.8 }),
      burst('M22.7 11.3L23.5 10.8M22.7 12.8H23.7M22.7 14.3L23.5 14.8', { as: 'shine', opacity: [0, 1, 0, 1, 0], transform: ['translateX(0px)', 'translateX(0.3px)', 'translateX(0px)', 'translateX(0.3px)', 'translateX(0px)'], times: [0, 0.2, 0.4, 0.6, 0.86], ease: INOUT, dur: 0.8 }),
    ],
  },
  'car-02': {
    verb: 'the car dips on its suspension, springs up and settles, wheels on the ground',
    parts: [
      ride([12, 13.5], SPRING, { as: 'body' }),
      ride([12, 5.9], SPRING, { as: 'body' }),
      ride([3.3, 12.3], SPRING, { as: 'body' }),
      ride([20.8, 12.3], SPRING, { as: 'body' }),
      ride([12, 16.3], SPRING, { as: 'body' }),
      null,
      null,
      ride([20.8, 8.8], SPRING, { as: 'body' }),
      ride([3.3, 8.8], SPRING, { as: 'body' }),
    ],
  },
  'car-03': {
    verb: 'the car scoots forward with speed lines streaming off its tail, then rolls back',
    parts: [
      ride([7, 17], [[0, 0], [1.4, 0], [1.4, 0], [-0.2, 0], [0, 0]], { as: 'car', times: [0, 0.3, 0.56, 0.86, 1], ease: [INOUT, 'linear', INOUT, OUT], dur: 0.8 }),
      ride([17, 17], [[0, 0], [1.4, 0], [1.4, 0], [-0.2, 0], [0, 0]], { as: 'car', times: [0, 0.3, 0.56, 0.86, 1], ease: [INOUT, 'linear', INOUT, OUT], dur: 0.8 }),
      ride([12, 11], [[0, 0], [1.4, 0], [1.4, 0], [-0.2, 0], [0, 0]], { as: 'car', times: [0, 0.3, 0.56, 0.86, 1], ease: [INOUT, 'linear', INOUT, OUT], dur: 0.8 }),
    ],
    extras: [trail('M1.4 8H3.2M0.6 12H2.6M1.4 15H2.8', -1.2, { dur: 0.8 })],
  },
  'car-04': {
    verb: 'the car brakes hard: the nose dips over the front wheel and rocks back',
    parts: [
      swing([18, 19.5], [12, 11], [0, -4, 1.2, -0.4, 0], { as: 'body', dur: 0.66 }),
      null,
      null,
      swing([18, 19.5], [12.3, 7.3], [0, -4, 1.2, -0.4, 0], { as: 'body', dur: 0.66 }),
      swing([18, 19.5], [8.5, 11], [0, -4, 1.2, -0.4, 0], { as: 'body', dur: 0.66 }),
    ],
    extras: [trail('M0.8 19.5H2.6M1.6 17.5H3', -0.8, { as: 'skid', dur: 0.6 })],
  },
  'car-05': {
    verb: 'the high beams flick on twice, the grille line steady',
    parts: [
      null,
      { as: 'light', origin: [6, 14], transform: ['scale(1)', 'scale(3)', 'scale(1)', 'scale(3)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 0.86], ease: INOUT, dur: 0.8 },
      { as: 'light', origin: [18, 14], transform: ['scale(1)', 'scale(3)', 'scale(1)', 'scale(3)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 0.86], ease: INOUT, dur: 0.8 },
      null,
    ],
  },
  'car-alert': {
    verb: 'the alert badge rattles, the bang stretches, and the hazard lights blink',
    parts: [
      null,
      shake([17, 6], { as: 'badge' }),
      scaleFrom('Y', [17, 4], [17, 5], [1, 1.35, 1.35, 1], { as: 'stem', dur: 0.56 }),
      blink({ dur: 0.7 }),
      blink({ dur: 0.7 }),
      { as: 'dot', origin: [17, 7.9], transform: ['translateY(0px)', 'translateY(0px)', 'translateY(0.9px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.3, 0.5, 0.74, 1], ease: OUT, dur: 0.6 },
    ],
  },
  'car-front': {
    verb: 'the wipers sweep across the windshield, back and forth, and the lights blink once',
    parts: [null, null, null, null, blink({ dur: 0.5, delay: 0.5, times: [0, 0.5, 1], opacity: [1, 0.15, 1] }), blink({ dur: 0.5, delay: 0.5, times: [0, 0.5, 1], opacity: [1, 0.15, 1] })],
    extras: [wiper(8.5, 11, 4.6), wiper(14.5, 11, 4.6, { delay: 0.04 })],
  },
  'car-parking-01': {
    verb: 'the headlights blink twice and the garage canopy dips to greet them',
    parts: [
      beat([12, 4.5], { as: 'canopy', delay: 0.2 }),
      null,
      null,
      null,
      null,
      blink({ dur: 0.7 }),
      blink({ dur: 0.7 }),
    ],
  },
  'car-parking-02': {
    verb: 'the car rolls up into the bay and settles, and the roof answers',
    parts: [
      beat([12, 12], { as: 'roof', delay: 0.36 }),
      ride([12, 20], [[0, 0], [0, 1.6], [0, -0.3], [0, 0.1], [0, 0]], { as: 'car', dur: 0.66 }),
      ride([12, 12], [[0, 0], [0, 1.6], [0, -0.3], [0, 0.1], [0, 0]], { as: 'car', dur: 0.66 }),
      ride([12, 16.5], [[0, 0], [0, 1.6], [0, -0.3], [0, 0.1], [0, 0]], { as: 'car', dur: 0.66 }),
      ride([8.5, 16.5], [[0, 0], [0, 1.6], [0, -0.3], [0, 0.1], [0, 0]], { as: 'car', dur: 0.66 }),
      ride([15.5, 16.5], [[0, 0], [0, 1.6], [0, -0.3], [0, 0.1], [0, 0]], { as: 'car', dur: 0.66 }),
    ],
  },
  'car-parking': {
    verb: 'the car backs deeper into the bay, shrinking away, then pulls up to the line',
    parts: [
      null,
      null,
      { as: 'car', origin: [12, 20], transform: ['translateY(0px) scale(1)', 'translateY(-1.4px) scale(0.86)', 'translateY(0.2px) scale(1.02)', 'translateY(0px) scale(1)'], times: [0, 0.4, 0.74, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      { as: 'car', origin: [12, 12], transform: ['translateY(0px) scale(1)', 'translateY(0.4px) scale(0.86)', 'translateY(-0.05px) scale(1.02)', 'translateY(0px) scale(1)'], times: [0, 0.4, 0.74, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      { as: 'car', origin: [12, 16.5], transform: ['translateY(0px) scale(1)', 'translateY(-0.8px) scale(0.86)', 'translateY(0.1px) scale(1.02)', 'translateY(0px) scale(1)'], times: [0, 0.4, 0.74, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      { as: 'car', origin: [8.5, 16.5], transform: ['translate(0px, 0px)', 'translate(0.5px, -0.8px)', 'translate(-0.07px, 0.1px)', 'translate(0px, 0px)'], times: [0, 0.4, 0.74, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      { as: 'car', origin: [15.5, 16.5], transform: ['translate(0px, 0px)', 'translate(-0.5px, -0.8px)', 'translate(0.07px, 0.1px)', 'translate(0px, 0px)'], times: [0, 0.4, 0.74, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
    ],
  },
  'car-signal': {
    verb: 'the signal waves pulse out from the roof, small then large, and the lights blink',
    parts: [
      null,
      null,
      { as: 'wave', opacity: [1, 0.15, 1, 1], transform: ['scale(1)', 'scale(0.7)', 'scale(1.1)', 'scale(1)'], origin: [18, 6], times: [0, 0.2, 0.5, 1], ease: OUT, dur: 0.7 },
      { as: 'wave', opacity: [1, 0.15, 1, 1], transform: ['scale(1)', 'scale(0.7)', 'scale(1.1)', 'scale(1)'], origin: [19.5, 4.5], times: [0, 0.2, 0.5, 1], ease: OUT, dur: 0.7, delay: 0.14 },
      blink({ dur: 0.7, delay: 0.1 }),
      blink({ dur: 0.7, delay: 0.1 }),
    ],
  },
  'car-taxi-front': {
    verb: 'the taxi sign lights up with a glow and the headlights answer',
    parts: [
      null,
      null,
      null,
      null,
      stamp([12, 5], { as: 'sign', transform: ['translateY(0px) scale(1)', 'translateY(0.6px) scale(0.84)', 'translateY(-0.5px) scale(1.14)', 'translateY(0px) scale(1)'] }),
      blink({ dur: 0.5, delay: 0.3, times: [0, 0.25, 0.5, 0.75, 1] }),
      blink({ dur: 0.5, delay: 0.3, times: [0, 0.25, 0.5, 0.75, 1] }),
    ],
    extras: [burst('M12 0.6V1.8M8.4 1.8L9.1 2.6M15.6 1.8L14.9 2.6', { as: 'shine', delay: 0.04, times: [0, 0.2, 0.42, 1] })],
  },
  'car-time': {
    verb: 'the clock hands sweep a full turn while the badge ticks',
    parts: [
      null,
      beat([17, 6], { as: 'badge', delay: 0.6, dur: 0.36 }),
      { ...around([17, 6], [17.75, 5.25], [0, 80, 220, 340, 360], { times: [0, 0.2, 0.5, 0.8, 1], ease: [INOUT, 'linear', 'linear', OUT], dur: 0.82 }), as: 'hands' },
      null,
      null,
    ],
  },
  caravan: {
    verb: 'the caravan rocks on its single axle as it is towed, wind streaming past',
    parts: [
      swing([9, 20], [12, 11], [0, -3, 2, -1, 0], { as: 'shell', dur: 0.78 }),
      null,
      swing([9, 20], [8.5, 9.5], [0, -3, 2, -1, 0], { as: 'shell', dur: 0.78 }),
    ],
    extras: [trail('M0.4 8.5H1.6M0.2 12H1.4', -0.9, { dur: 0.78 })],
  },

  'card-exchange-01': {
    verb: 'the two arrows orbit half a turn around the cards, trading corners',
    parts: [
      null,
      null,
      null,
      null,
      { ...around([12, 12], [5, 6], [0, 20, 130, 186, 180], { dur: 0.8 }), as: 'arrow' },
      { ...around([12, 12], [19, 18], [0, 20, 130, 186, 180], { dur: 0.8 }), as: 'arrow' },
    ],
  },
  'card-exchange-02': {
    verb: 'the two cards trade places, one crossing in front, while the arrows swing round',
    parts: [
      { ...around([12, 12], [19, 17], [0, 20, 130, 186, 180], { dur: 0.9 }), as: 'arrow' },
      { ...around([12, 12], [5, 7], [0, 20, 130, 186, 180], { dur: 0.9 }), as: 'arrow' },
      {
        as: 'card',
        origin: [16.5, 6.5],
        transform: ['translate(0px, 0px) scale(1)', 'translate(-4.5px, 5.5px) scale(0.84)', 'translate(-9px, 11px) scale(1)'],
        opacity: [1, 0.5, 1],
        times: [0, 0.5, 1],
        ease: [INOUT, INOUT],
        dur: 0.9,
      },
      {
        as: 'card',
        origin: [7.5, 17.5],
        transform: ['translate(0px, 0px) scale(1)', 'translate(4.5px, -5.5px) scale(1.12)', 'translate(9px, -11px) scale(1)'],
        times: [0, 0.5, 1],
        ease: [INOUT, INOUT],
        dur: 0.9,
      },
    ],
  },
  'card-exchange': {
    verb: 'the cards lean in toward each other while both arrows rewrite their arcs',
    parts: [
      ride([8, 16], [[0, 0], [1.2, -1.2], [-0.2, 0.2], [0, 0], [0, 0]], { as: 'card', times: [0, 0.4, 0.72, 0.9, 1], dur: 0.7 }),
      ride([16, 8], [[0, 0], [-1.2, 1.2], [0.2, -0.2], [0, 0], [0, 0]], { as: 'card', times: [0, 0.4, 0.72, 0.9, 1], dur: 0.7 }),
      ride([8, 15], [[0, 0], [1.2, -1.2], [-0.2, 0.2], [0, 0], [0, 0]], { as: 'card', times: [0, 0.4, 0.72, 0.9, 1], dur: 0.7 }),
      ride([16, 7], [[0, 0], [-1.2, 1.2], [0.2, -0.2], [0, 0], [0, 0]], { as: 'card', times: [0, 0.4, 0.72, 0.9, 1], dur: 0.7 }),
      retrace({ as: 'arrow' }),
      retrace({ as: 'arrow', delay: 0.08 }),
    ],
  },
  'card-sim': {
    verb: 'the SIM pushes down into its slot and the chip contacts read in turn',
    parts: [
      ride([12, 12], INSERT, { as: 'sim', ...SLOT }),
      ride([12, 14], INSERT, { as: 'sim', ...SLOT }),
      { ...ride([12, 14], INSERT, SLOT), as: 'contact', opacity: [1, 0.15, 1, 1, 1] },
      { ...ride([14, 14], INSERT, SLOT), as: 'contact', opacity: [1, 1, 0.15, 1, 1] },
    ],
  },
  cardigan: {
    verb: 'the cardigan shrugs on and its buttons pop down the placket',
    parts: [
      { as: 'knit', origin: [12, 12], transform: ['translateY(0px) scale(1, 1)', 'translateY(-0.6px) scale(1.03, 0.97)', 'translateY(0.15px) scale(0.99, 1.01)', 'translateY(0px) scale(1, 1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
      null,
      null,
      null,
    ],
    extras: [12.2, 15, 17.8].map((cy, i) => ({
      as: 'button',
      tag: 'circle',
      attrs: { cx: '13.6', cy: String(cy), r: '0.4', strokeWidth: '1' },
      transform: ['scale(0)', 'scale(0)', 'scale(1.5)', 'scale(1)', 'scale(1)'],
      opacity: [0, 0, 1, 1, 0],
      times: [0, 0.2, 0.34, 0.5, 1],
      ease: ['linear', OUT, OUT, 'easeIn'],
      dur: 0.9,
      delay: 0.08 * i,
    })),
  },

  'cardiogram-01': {
    verb: 'the pulse spikes twice on the monitor and the screen catches each beat',
    parts: [
      { as: 'screen', origin: [12, 12], transform: ['scale(1)', 'scale(1.025)', 'scale(1)', 'scale(1.025)', 'scale(1)'], times: [0, 0.16, 0.36, 0.56, 0.8], ease: OUT, dur: 0.8 },
      null,
      null,
      null,
      { as: 'pulse', origin: [12, 9], transform: ['scaleY(1)', 'scaleY(1.45)', 'scaleY(0.92)', 'scaleY(1.45)', 'scaleY(1)'], times: [0, 0.16, 0.36, 0.56, 0.8], ease: OUT, dur: 0.8 },
    ],
  },
  'cardiogram-02': {
    verb: 'the heart beats and the pulse line traces across it',
    parts: [
      { as: 'heart', origin: [12, 11.7], transform: ['scale(1, 1)', 'scale(1.1, 0.92)', 'scale(0.95, 1.06)', 'scale(1.03, 0.98)', 'scale(1, 1)'], times: [0, 0.18, 0.4, 0.64, 1], ease: OUT, dur: 0.66 },
      draw({ as: 'pulse', delay: 0.06, dur: 0.72 }),
    ],
  },
  cardiogram: {
    verb: 'the pulse retraces across the monitor while the readout dots blink',
    parts: [null, null, blink({ dur: 0.7, delay: 0.2 }), blink({ dur: 0.7, delay: 0.3 }), draw({ as: 'pulse', dur: 0.78, times: [0, 0.12, 0.18, 1] })],
  },

  'cards-01': {
    verb: 'the back card fans out behind the front one and the diamond flips over',
    parts: [
      swing([10, 22], [10, 13.5], [0, -3, 1, 0, 0], { as: 'front', dur: 0.7 }),
      { as: 'suit', origin: [10, 13.5], transform: ['scaleX(1)', 'scaleX(0.05)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.4, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.7, delay: 0.06 },
      swing([12, 21], [14.2, 10.3], [0, 10, -2, 0.5, 0], { as: 'back', dur: 0.7 }),
    ],
  },
  'cards-02': {
    verb: 'a card is drawn up from behind and slipped back while the heart beats',
    parts: [
      null,
      ride([14.2, 10.3], [[0, 0], [0.8, -2.4], [0.8, -2.4], [-0.1, 0.2], [0, 0]], { as: 'drawn', times: [0, 0.32, 0.56, 0.86, 1], ease: [INOUT, 'linear', INOUT, OUT], dur: 0.8 }),
      { as: 'heart', origin: [10, 13.4], transform: ['scale(1, 1)', 'scale(1.24, 0.82)', 'scale(0.9, 1.16)', 'scale(1.05, 0.96)', 'scale(1, 1)'], times: [0, 0.18, 0.4, 0.64, 1], ease: OUT, dur: 0.64, delay: 0.2 },
    ],
  },
}

export default settleSpecs(specs)
