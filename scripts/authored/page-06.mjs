/**
 * Page 6 — arrows-up-from-line → backpack-02.
 *
 * Each spec is a verb read off the name and the dump geometry. Variants of a
 * family get different jobs when the primitives differ. attachment (handcrafted
 * paperclip) is absent.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  arrive,
  beat,
  compute,
  draw,
  grow,
  nudge,
  spinStar,
  stamp,
  sweep,
  twinkle,
} from './_kit.mjs'

const T5 = [0, 0.18, 0.46, 0.74, 1]
const E5 = [INOUT, OUT, OUT, OUT]
const HIT = [0.18, 0.9, 0.32, 1]

/**
 * Rigid rotation around `pivot`. motion-v overwrites transform-origin to the
 * part's own fill-box, so each keyframe also translates the part's center.
 */
const around = (pivot, center, degrees, o = {}) => {
  const [px, py] = pivot
  const [x, y] = center
  const dx = x - px
  const dy = y - py
  return {
    origin: center,
    transform: degrees.map((deg) => {
      const θ = (deg * Math.PI) / 180
      const c = Math.cos(θ)
      const s = Math.sin(θ)
      const tx = dx * (c - 1) - dy * s
      const ty = dx * s + dy * (c - 1)
      return `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) rotate(${deg}deg)`
    }),
    times: T5,
    ease: E5,
    dur: 0.7,
    ...o,
  }
}

/** Retract a stroke toward its end, then rewrite it — no visibility pop. */
const retrace = (o = {}) => ({
  pathLength: [1, 0.14, 1],
  pathOffset: [0, 0.5, 0],
  times: [0, 0.34, 1],
  ease: [INOUT, OUT],
  dur: 0.68,
  ...o,
})

/** A dollar (or card) sliding as one glyph — every primitive gets the same track. */
const ticket = (origin, dy, o = {}) => ({
  origin,
  transform: [
    'translateY(0px)',
    `translateY(${(dy * 0.2).toFixed(2)}px)`,
    `translateY(${dy}px)`,
    `translateY(${(-dy * 0.12).toFixed(2)}px)`,
    'translateY(0px)',
  ],
  times: T5,
  ease: [INOUT, OUT, OUT, OUT],
  dur: 0.7,
  ...o,
})

/** Rotate around `pivot` while the whole group also translates — rock + trails. */
const ride = (pivot, center, degrees, path, o = {}) => {
  const spun = around(pivot, center, degrees)
  return {
    ...spun,
    transform: spun.transform.map((t, i) => {
      const [x, y] = path[i]
      return `translate(${x}px, ${y}px) ${t}`
    }),
    ...o,
  }
}

const METEOR_PATH = [
  [0, 0],
  [-1.5, 1.4],
  [3, -2.8],
  [0.7, -0.6],
  [0, 0],
]
const METEOR_SPIN = [0, -14, 10, 2, 0]
const PICK_PATH = [
  [0, 0],
  [0, -1.6],
  [0, -2.4],
  [0, 0.25],
  [0, 0],
]
const PICK_SPIN = [0, -5, 4, -1.5, 0]
const pickUp = (center, o = {}) => ride([12, 3.5], center, PICK_SPIN, PICK_PATH, { dur: 0.74, ...o })

const wind = (origin, o = {}) => ({
  as: 'clip',
  origin,
  transform: [
    'rotate(0deg) scale(1)',
    'rotate(7deg) scale(0.97)',
    'rotate(-11deg) scale(0.88)',
    'rotate(3deg) scale(1.06)',
    'rotate(0deg) scale(1)',
  ],
  pathLength: [1, 0.9, 0.58, 0.94, 1],
  times: T5,
  ease: E5,
  dur: 0.78,
  ...o,
})

/** An equalizer bar that plays a two-peak phrase from its midpoint. */
const phrase = (origin, a, b, o = {}) => ({
  as: 'bar',
  origin,
  transform: ['scaleY(1)', `scaleY(${a})`, `scaleY(${b})`, `scaleY(${(a + 1) / 2})`, 'scaleY(1)'],
  times: T5,
  ease: E5,
  dur: 0.72,
  ...o,
})

/** Two gavel strikes around a shared hinge. */
const twoTaps = (pivot, center, o = {}) =>
  around(pivot, center, [0, -16, 13, -15, 14, -3, 0], {
    times: [0, 0.16, 0.3, 0.48, 0.62, 0.8, 1],
    ease: [INOUT, HIT, INOUT, HIT, OUT, OUT],
    dur: 0.86,
    ...o,
  })

/** One axe chop around the grip. */
const chop = (pivot, center, o = {}) =>
  around(pivot, center, [0, -22, 18, 5, 0], {
    times: [0, 0.3, 0.5, 0.72, 1],
    ease: [INOUT, HIT, OUT, OUT],
    dur: 0.66,
    ...o,
  })

/** The whole crib pivots on the rocker, like a rocking chair. */
const rocker = (center, o = {}) =>
  around([12, 20], center, [0, -6.5, 5.5, -2.4, 0], { dur: 0.84, ...o })

/** Shaft that crouches into the baseline then stretches off it. */
const leapShaft = (origin, o = {}) => ({
  as: 'shaft',
  origin,
  transform: [
    'translateY(0px) scaleY(1)',
    'translateY(0.6px) scaleY(0.82)',
    'translateY(-2.6px) scaleY(1.12)',
    'translateY(0.3px) scaleY(0.96)',
    'translateY(0px) scaleY(1)',
  ],
  times: T5,
  ease: E5,
  dur: 0.62,
  ...o,
})

/** Arrow head that leaves the shaft a beat later. */
const leapHead = (origin, o = {}) => ({
  as: 'head',
  origin,
  transform: [
    'translateY(0px)',
    'translateY(0.4px)',
    'translateY(-2.8px)',
    'translateY(0.35px)',
    'translateY(0px)',
  ],
  times: T5,
  ease: E5,
  dur: 0.62,
  ...o,
})

/** A small body dives toward a larger one, then springs back. */
const graze = (from, toward, o = {}) => {
  const dx = (toward[0] - from[0]) * 0.3
  const dy = (toward[1] - from[1]) * 0.3
  return {
    origin: from,
    transform: [
      'translate(0px, 0px) rotate(0deg)',
      `translate(${(dx * 0.18).toFixed(2)}px, ${(dy * 0.18).toFixed(2)}px) rotate(-10deg)`,
      `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px) rotate(14deg)`,
      `translate(${(-dx * 0.16).toFixed(2)}px, ${(-dy * 0.16).toFixed(2)}px) rotate(-5deg)`,
      'translate(0px, 0px) rotate(0deg)',
    ],
    times: T5,
    ease: [INOUT, HIT, OUT, OUT],
    dur: 0.74,
    ...o,
  }
}

/** Same translation on every crater so they stay glued to the rock. */
const flinch = (origin, dx, dy, o = {}) => ({
  origin,
  transform: [
    'translate(0px, 0px)',
    'translate(0px, 0px)',
    `translate(${dx}px, ${dy}px)`,
    `translate(${(-dx * 0.2).toFixed(2)}px, ${(-dy * 0.2).toFixed(2)}px)`,
    'translate(0px, 0px)',
  ],
  times: T5,
  ease: [INOUT, HIT, OUT, OUT],
  dur: 0.74,
  ...o,
})

/** A rigid body tumbling around a shared pivot. */
const tumble = (pivot, center, o = {}) =>
  around(pivot, center, [0, 15, -11, 4, 0], { dur: 0.84, ...o })

/** Weight settling onto a rail or mattress. */
const sag = (origin, dy, o = {}) => ({
  origin,
  transform: [
    'translateY(0px)',
    `translateY(${(dy * 0.3).toFixed(2)}px)`,
    `translateY(${dy}px)`,
    `translateY(${(dy * 0.18).toFixed(2)}px)`,
    'translateY(0px)',
  ],
  times: T5,
  ease: [INOUT, OUT, OUT, OUT],
  dur: 0.66,
  ...o,
})

export default {
  'arrows-up-from-line': {
    verb: 'both shafts crouch into the baseline, the heads leap off it left then right, and the line springs back',
    parts: [
      leapShaft([7, 17], { as: 'shaftLeft' }),
      leapHead([7, 4.5], { as: 'headLeft', delay: 0.04 }),
      leapHead([17, 4.5], { as: 'headRight', delay: 0.16 }),
      leapShaft([17, 17], { as: 'shaftRight', delay: 0.12 }),
      {
        as: 'line',
        origin: [12, 21],
        transform: ['scaleX(1)', 'scaleX(1.06)', 'scaleX(0.62)', 'scaleX(1.06)', 'scaleX(1)'],
        times: T5,
        ease: E5,
        dur: 0.56,
        delay: 0.18,
      },
    ],
  },
  'artboard-tool': {
    verb: 'the two crop handles extend off the corner like a drafting square unfolding',
    parts: [
      null,
      nudge([3.5, 7], -2.2, 0, { as: 'handleX', dur: 0.54 }),
      nudge([7, 3.5], 0, -2.2, { as: 'handleY', delay: 0.08, dur: 0.54 }),
    ],
  },
  artboard: {
    verb: 'the four crop marks fly out in compass order and overshoot before seating',
    parts: [
      nudge([12, 3.8], 0, -2, { as: 'markTop', dur: 0.52 }),
      nudge([20.3, 12], 2, 0, { as: 'markRight', delay: 0.07, dur: 0.52 }),
      nudge([12, 20.3], 0, 2, { as: 'markBottom', delay: 0.14, dur: 0.52 }),
      nudge([3.8, 12], -2, 0, { as: 'markLeft', delay: 0.21, dur: 0.52 }),
      beat([12, 12], { delay: 0.28, dur: 0.44 }),
    ],
  },
  'artificial-intelligence-01': {
    verb: 'the chip pins fire outward, then the processor box compresses a thought',
    parts: [
      null,
      compute([7, 7], { delay: 0.16, dur: 0.5 }),
      {
        as: 'pins',
        origin: [7, 7],
        transform: ['scale(1)', 'scale(0.72)', 'scale(1.16)', 'scale(0.94)', 'scale(1)'],
        times: T5,
        ease: E5,
        dur: 0.58,
      },
    ],
  },
  'artificial-intelligence-02': {
    verb: 'the AI letters type themselves taller on the still robot face',
    parts: [
      null,
      grow([10.5, 12], 'Y', { as: 'letters', dur: 0.6 }),
    ],
  },
  'artificial-intelligence-03': {
    verb: 'two data packets fly into the robot ear, the lower one first',
    parts: [
      null,
      arrive([6, 4], -1.8, 0, { as: 'pipTop', delay: 0.1 }),
      arrive([6, 8.8], -2.2, 0, { as: 'pipMid' }),
    ],
  },
  'artificial-intelligence-04': {
    verb: 'the I stem blinks, the A letter computes, then the ring of pins fire',
    parts: [
      null,
      compute([10, 12], { delay: 0.06 }),
      grow([15.5, 15], 'Y', { as: 'eyeI', delay: 0.14, dur: 0.5 }),
      {
        as: 'pins',
        origin: [12, 12],
        transform: ['scale(1)', 'scale(0.86)', 'scale(1.1)', 'scale(0.96)', 'scale(1)'],
        times: T5,
        ease: E5,
        dur: 0.56,
        delay: 0.22,
      },
    ],
  },
  'artificial-intelligence-05': {
    verb: 'the gear plate ticks one tooth, then the letters ride the face',
    parts: [
      {
        as: 'plate',
        origin: [12, 12],
        transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(22deg)', 'rotate(-3deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.76,
      },
      compute([9.9, 12], { delay: 0.14 }),
      grow([15.4, 15], 'Y', { as: 'eyeI', delay: 0.22, dur: 0.5 }),
    ],
  },
  'artificial-intelligence-06': {
    verb: 'the letters punch into the hex plate, which yields then snaps back',
    parts: [
      compute([11.5, 11.5]),
      beat([12, 12], { delay: 0.12, dur: 0.52 }),
    ],
  },
  'artificial-intelligence-07': {
    verb: 'the visor blinks shut, then three packets arrive top-mid-bottom',
    parts: [
      null,
      grow([13, 12], 'X', { as: 'visor', dur: 0.52 }),
      arrive([18.5, 5.5], 1.8, 0, { as: 'pipTop', delay: 0.08 }),
      arrive([18.5, 18.5], 1.8, 0, { as: 'pipBottom', delay: 0.22 }),
      arrive([18.5, 12], 2.1, 0, { as: 'pipMid', delay: 0.14 }),
    ],
  },
  'artificial-intelligence-08': {
    verb: 'the large spark turns a quarter onto its axis, then the small spark catches',
    parts: [
      spinStar([10.5, 13.5]),
      twinkle([18.5, 5.5], { delay: 0.2, dur: 0.52 }),
    ],
  },
  'artificial-intelligence': {
    verb: 'the processor box thinks first, then the pins answer — reverse order of 01',
    parts: [
      null,
      compute([7, 7]),
      {
        as: 'pins',
        origin: [7, 7],
        transform: ['scale(1)', 'scale(0.78)', 'scale(1.14)', 'scale(0.95)', 'scale(1)'],
        times: T5,
        ease: E5,
        dur: 0.56,
        delay: 0.18,
      },
    ],
  },
  'aspect-ratio': {
    verb: 'the inner crop grows from the bottom-left corner while the split divider holds',
    parts: [
      null,
      {
        as: 'crop',
        origin: [2, 21],
        transform: ['scale(1)', 'scale(0.78)', 'scale(1.08)', 'scale(0.97)', 'scale(1)'],
        times: T5,
        ease: E5,
        dur: 0.68,
      },
      grow([10, 15], 'Y', { as: 'divider', delay: 0.1, dur: 0.52 }),
    ],
  },
  assignments: {
    verb: 'the check draws on the page, the two lines rewrite under it, and the binder hole winks',
    parts: [
      null,
      null,
      grow([14.5, 7], 'X', { as: 'lineTop', delay: 0.1 }),
      grow([14.5, 11], 'X', { as: 'lineMid', delay: 0.18 }),
      { as: 'tick', ...draw({ dur: 0.58 }) },
      grow([3.5, 7], 'X', { as: 'hole', delay: 0.22, dur: 0.46 }),
    ],
  },
  'asterisk-02': {
    verb: 'the three strokes burst from the centre, overshoot, and settle into the star',
    parts: [{
      as: 'star',
      origin: [12, 12],
      transform: [
        'rotate(0deg) scale(1)',
        'rotate(-12deg) scale(0.72)',
        'rotate(18deg) scale(1.16)',
        'rotate(-4deg) scale(0.96)',
        'rotate(0deg) scale(1)',
      ],
      times: T5,
      ease: E5,
      dur: 0.66,
    }],
  },
  asterisk: {
    verb: 'the inner star bursts, then the surrounding bubble takes the hit',
    parts: [
      {
        as: 'star',
        origin: [12, 12],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(16deg) scale(0.7)',
          'rotate(-10deg) scale(1.18)',
          'rotate(3deg) scale(0.96)',
          'rotate(0deg) scale(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.62,
      },
      beat([11.9, 11.8], { delay: 0.14, dur: 0.5 }),
    ],
  },
  'asteroid-01': {
    verb: 'the small meteor dives into the rock, the body and craters flinch together, then it springs off',
    parts: [
      flinch([11.4, 13.4], 1.4, -1.1, { as: 'rock' }),
      flinch([10.3, 16.3], 1.4, -1.1, { as: 'craterA' }),
      flinch([7.5, 10.9], 1.4, -1.1, { as: 'craterB' }),
      graze([19, 4], [11.4, 13.4], { as: 'meteor' }),
      flinch([16, 14], 1.4, -1.1, { as: 'pit' }),
    ],
  },
  'asteroid-02': {
    verb: 'the rock and its speed lines streak up-right as one meteor, then settle back',
    parts: [
      ride([9.5, 14.5], [9.5, 14.5], METEOR_SPIN, METEOR_PATH, {
        as: 'rock',
        dur: 0.76,
        ease: [INOUT, HIT, OUT, OUT],
      }),
      ride([9.5, 14.5], [14.5, 9], METEOR_SPIN, METEOR_PATH, {
        as: 'trails',
        dur: 0.76,
        ease: [INOUT, HIT, OUT, OUT],
      }),
    ],
  },
  asteroid: {
    verb: 'the big rock tumbles in space, every crater riding with it, while the distant meteor parallax-drifts the other way',
    parts: [
      tumble([11.4, 13.4], [11.4, 13.4], { as: 'rock' }),
      tumble([11.4, 13.4], [10.3, 16.3], { as: 'craterA' }),
      tumble([11.4, 13.4], [7.5, 10.9], { as: 'craterB' }),
      {
        as: 'meteor',
        origin: [19, 4],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(1.1px, -0.8px) rotate(-8deg)',
          'translate(-0.7px, 0.6px) rotate(6deg)',
          'translate(0.3px, -0.2px) rotate(-2deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: T5,
        ease: E5,
        dur: 0.84,
      },
      tumble([11.4, 13.4], [16, 14], { as: 'pit' }),
    ],
  },
  'astronaut-01': {
    verb: 'the helmet turns to look, visor and visor-glints riding the same axis, the pad staying put',
    parts: [
      around([12, 11], [12, 11], [0, -11, 9, -3, 0], { as: 'visor', dur: 0.78 }),
      around([12, 11], [12, 11], [0, -11, 9, -3, 0], { as: 'helmet', dur: 0.78 }),
      around([12, 11], [16.3, 11.3], [0, -11, 9, -3, 0], { as: 'glints', dur: 0.78 }),
      null,
    ],
  },
  'astronaut-02': {
    verb: 'the visor blinks, the left antenna pings from the helmet, the right answers, and the mast ticks the signal',
    parts: [
      null,
      grow([12, 10], 'Y', { as: 'visor', dur: 0.44 }),
      grow([5, 10], 'X', { as: 'antennaL', delay: 0.1, dur: 0.5 }),
      grow([19, 10], 'X', { as: 'antennaR', delay: 0.22, dur: 0.5 }),
      {
        as: 'mast',
        origin: [20.5, 7],
        transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(16deg)', 'rotate(-4deg)', 'rotate(0deg)'],
        times: T5,
        ease: [INOUT, HIT, OUT, OUT],
        dur: 0.58,
        delay: 0.16,
      },
      null,
    ],
  },
  astronaut: {
    verb: 'the visor blinks in zero-g, the helmet drifts a half-turn, and the star-glints rewrite themselves',
    parts: [
      {
        as: 'visor',
        origin: [12, 11],
        transform: [
          'translate(0px, 0px) rotate(0deg) scaleY(1)',
          'translate(-0.6px, -1.1px) rotate(-6deg) scaleY(0.28)',
          'translate(0.8px, -1.8px) rotate(5deg) scaleY(1.08)',
          'translate(-0.2px, -0.4px) rotate(-1.5deg) scaleY(1)',
          'translate(0px, 0px) rotate(0deg) scaleY(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.88,
      },
      {
        as: 'helmet',
        origin: [12, 11],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-0.6px, -1.1px) rotate(-6deg)',
          'translate(0.8px, -1.8px) rotate(5deg)',
          'translate(-0.2px, -0.4px) rotate(-1.5deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: T5,
        ease: E5,
        dur: 0.88,
      },
      {
        as: 'glints',
        origin: [16.3, 11.3],
        transform: [
          'translate(0px, 0px)',
          'translate(-0.6px, -1.1px)',
          'translate(0.8px, -1.8px)',
          'translate(-0.2px, -0.4px)',
          'translate(0px, 0px)',
        ],
        pathLength: [1, 0.001, 0.001, 1, 1],
        visibility: ['visible', 'hidden', 'hidden', 'visible', 'visible'],
        times: T5,
        ease: ['linear', 'linear', OUT, OUT],
        dur: 0.88,
      },
      null,
    ],
  },
  'at-sign': {
    verb: 'the outer tail winds off around the still inner a, then rewrites itself',
    parts: [
      null,
      { as: 'tail', origin: [12, 12], ...sweep({ dur: 0.86 }) },
    ],
  },
  at: {
    verb: 'the fused @ unspools its tail, then the loop writes back on',
    parts: [{ as: 'at', origin: [12, 12], ...sweep({ dur: 0.88 }) }],
  },
  'atm-01': {
    verb: 'the receipt body and the printed dollar drop out of the slot as one ticket, housing and slot holding',
    parts: [
      null,
      null,
      ticket([12, 14], 2.6, { as: 'frame' }),
      ticket([12, 14], 2.6, { as: 'cashS' }),
      ticket([12, 14], 2.6, { as: 'stems' }),
    ],
  },
  'atm-02': {
    verb: 'the card and its rounded frame slide out of the slot as one ticket, then seat back',
    parts: [
      null,
      null,
      ticket([12, 14], 2.6, { as: 'frame' }),
      ticket([12, 14], 2.6, { as: 'card' }),
    ],
  },
  atm: {
    verb: 'the dollar prints on the still machine: the S rewrites, then both stems grow from the middle of the sign',
    parts: [
      null,
      null,
      null,
      { as: 'cashS', origin: [12, 14], ...retrace({ dur: 0.7 }) },
      grow([12, 14], 'Y', { as: 'stems', delay: 0.16, dur: 0.52 }),
    ],
  },
  'atom-01': {
    verb: 'electrons and their orbit arcs swing together around the still nucleus, then settle back',
    parts: [
      null,
      around([12, 12], [12, 11.1], [0, 50, 110, 40, 0], {
        as: 'orbits',
        times: [0, 0.26, 0.52, 0.78, 1],
        ease: [INOUT, OUT, OUT, OUT],
        dur: 0.84,
      }),
      around([12, 12], [12, 14.9], [0, 50, 110, 40, 0], {
        as: 'electrons',
        times: [0, 0.26, 0.52, 0.78, 1],
        ease: [INOUT, OUT, OUT, OUT],
        dur: 0.84,
      }),
    ],
  },
  'atom-02': {
    verb: 'the two rings foreshorten like orbits tilting in 3d, opposite ways, then the nucleus pops at the crossing',
    parts: [
      {
        as: 'orbitA',
        origin: [12, 12],
        transform: [
          'rotate(0deg) scaleY(1)',
          'rotate(22deg) scaleY(0.62)',
          'rotate(-10deg) scaleY(1.08)',
          'rotate(4deg) scaleY(0.96)',
          'rotate(0deg) scaleY(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.8,
      },
      {
        as: 'orbitB',
        origin: [12, 12],
        transform: [
          'rotate(0deg) scaleY(1)',
          'rotate(-22deg) scaleY(0.62)',
          'rotate(10deg) scaleY(1.08)',
          'rotate(-4deg) scaleY(0.96)',
          'rotate(0deg) scaleY(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.8,
        delay: 0.08,
      },
      stamp([12, 12], { as: 'nucleus', delay: 0.28, dur: 0.42 }),
    ],
  },
  atom: {
    verb: 'the orbit arcs rewrite themselves around a still nucleus, then the three electrons catch the light',
    parts: [
      null,
      { as: 'orbits', origin: [12, 11.1], ...sweep({ dur: 0.84 }) },
      twinkle([12, 14.9], { as: 'electrons', delay: 0.28, dur: 0.5 }),
    ],
  },
  'atomic-power': {
    verb: 'the lightning bolt writes through the core, then both orbits take the shockwave outward',
    parts: [
      {
        as: 'orbitA',
        origin: [12, 12],
        transform: [
          'scale(1) rotate(0deg)',
          'scale(1) rotate(0deg)',
          'scale(1.1) rotate(-8deg)',
          'scale(0.96) rotate(3deg)',
          'scale(1) rotate(0deg)',
        ],
        times: T5,
        ease: [INOUT, HIT, OUT, OUT],
        dur: 0.76,
        delay: 0.12,
      },
      { as: 'bolt', origin: [12, 12], ...draw({ dur: 0.56 }) },
      {
        as: 'orbitB',
        origin: [12, 12],
        transform: [
          'scale(1) rotate(0deg)',
          'scale(1) rotate(0deg)',
          'scale(1.1) rotate(8deg)',
          'scale(0.96) rotate(-3deg)',
          'scale(1) rotate(0deg)',
        ],
        times: T5,
        ease: [INOUT, HIT, OUT, OUT],
        dur: 0.76,
        delay: 0.18,
      },
    ],
  },
  'attachment-01': {
    verb: 'the diagonal clip winds open along its hook, then springs into the nested loop',
    parts: [wind([12, 12])],
  },
  'attachment-02': {
    verb: 'the upright clip breathes at the inner loop, then seats back into the shaft',
    parts: [{
      as: 'clip',
      origin: [12, 13.5],
      transform: [
        'rotate(0deg) scaleY(1)',
        'rotate(-5deg) scaleY(0.92)',
        'rotate(9deg) scaleY(0.84)',
        'rotate(-2deg) scaleY(1.06)',
        'rotate(0deg) scaleY(1)',
      ],
      times: T5,
      ease: E5,
      dur: 0.76,
    }],
  },
  'attachment-circle': {
    verb: 'the clip inside the circle winds, the ring holding still around it',
    parts: [
      wind([12, 12], { dur: 0.74 }),
      null,
    ],
  },
  'attachment-square': {
    verb: 'the clip winds first, then the square frame pinches to catch it',
    parts: [
      beat([12, 12], { delay: 0.16, dur: 0.5 }),
      wind([12, 12], { dur: 0.74 }),
    ],
  },
  auction: {
    verb: 'the gavel winds up and strikes twice on the same hinge',
    parts: [
      twoTaps([12, 14], [6.9, 17.1], { as: 'handle' }),
      twoTaps([12, 14], [14, 10], { as: 'head' }),
    ],
  },
  'audio-book-01': {
    verb: 'the play triangle punches the page, then the bookmark curl flicks',
    parts: [
      null,
      {
        as: 'curl',
        origin: [19, 22],
        transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(16deg)', 'rotate(-3deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.56,
        delay: 0.12,
      },
      stamp([12.5, 10], { as: 'play', dur: 0.5 }),
    ],
  },
  'audio-book-02': {
    verb: 'the music note hops on the page, tilting as it lands',
    parts: [
      null,
      {
        as: 'curl',
        origin: [19, 22],
        transform: ['rotate(0deg)', 'rotate(6deg)', 'rotate(-12deg)', 'rotate(3deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.52,
        delay: 0.18,
      },
      {
        as: 'note',
        origin: [12, 10],
        transform: [
          'translateY(0px) rotate(0deg)',
          'translateY(0.5px) rotate(6deg)',
          'translateY(-2.2px) rotate(-12deg)',
          'translateY(0.4px) rotate(3deg)',
          'translateY(0px) rotate(0deg)',
        ],
        times: T5,
        ease: E5,
        dur: 0.66,
      },
    ],
  },
  'audio-book-03': {
    verb: 'the speaker cone pulses a beat out of the page, bookmark answering',
    parts: [
      null,
      {
        as: 'curl',
        origin: [19, 22],
        transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(12deg)', 'rotate(-2deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.52,
        delay: 0.14,
      },
      grow([9, 10], 'X', { as: 'speaker', dur: 0.58 }),
    ],
  },
  'audio-book-04': {
    verb: 'the headphone cups clamp onto the page, then the headband settles',
    parts: [
      null,
      {
        as: 'curl',
        origin: [19, 22],
        transform: ['rotate(0deg)', 'rotate(5deg)', 'rotate(-10deg)', 'rotate(2deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.5,
        delay: 0.16,
      },
      {
        as: 'cans',
        origin: [12, 10],
        transform: ['scaleX(1)', 'scaleX(0.78)', 'scaleX(1.1)', 'scaleX(0.96)', 'scaleX(1)'],
        times: T5,
        ease: E5,
        dur: 0.62,
      },
    ],
  },
  'audio-book': {
    verb: 'the bookmark curl flicks first, then the play triangle punches — reverse of 01',
    parts: [
      null,
      {
        as: 'curl',
        origin: [19, 22],
        transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(18deg)', 'rotate(-4deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.56,
      },
      stamp([12.5, 10], { as: 'play', delay: 0.14, dur: 0.48 }),
    ],
  },
  'audio-lines': {
    verb: 'five bars play a two-peak phrase from the centre, shortest to tallest',
    parts: [
      phrase([4, 12], 0.42, 1.38, { as: 'barA' }),
      phrase([8, 12], 0.22, 1.12, { as: 'barB', delay: 0.05 }),
      phrase([12, 12], 0.32, 1.26, { as: 'barC', delay: 0.1 }),
      phrase([16, 12], 0.48, 1.34, { as: 'barD', delay: 0.15 }),
      phrase([20, 12], 0.36, 1.2, { as: 'barE', delay: 0.2 }),
    ],
  },
  'audio-wave-01': {
    verb: 'a travelling pulse runs left to right across seven bars, each with its own peak',
    parts: [
      phrase([9, 12], 0.2, 1.14, { as: 'c', delay: 0.08 }),
      phrase([6, 12], 0.32, 1.22, { as: 'b', delay: 0.04 }),
      phrase([12, 12], 0.28, 1.3, { as: 'd', delay: 0.12 }),
      phrase([15, 12], 0.4, 1.2, { as: 'e', delay: 0.16 }),
      phrase([18, 12], 0.34, 1.24, { as: 'f', delay: 0.2 }),
      phrase([21, 12], 0.52, 1.42, { as: 'g', delay: 0.24 }),
      phrase([3, 12], 0.48, 1.4, { as: 'a' }),
    ],
  },
  'audio-wave-02': {
    verb: 'the fused waveform redraws itself as a playhead passing left to right',
    parts: [{ as: 'wave', origin: [12, 12], ...sweep({ dur: 0.9 }) }],
  },
  'audio-wave': {
    verb: 'seven bars bloom from the centre bar out, then collapse — reverse of the 01 pulse',
    parts: [
      phrase([9, 12], 0.22, 1.16, { as: 'c', delay: 0.06 }),
      phrase([6, 12], 0.34, 1.2, { as: 'b', delay: 0.12 }),
      phrase([12, 12], 0.26, 1.32, { as: 'd' }),
      phrase([15, 12], 0.38, 1.18, { as: 'e', delay: 0.06 }),
      phrase([18, 12], 0.32, 1.22, { as: 'f', delay: 0.12 }),
      phrase([21, 12], 0.5, 1.36, { as: 'g', delay: 0.18 }),
      phrase([3, 12], 0.5, 1.36, { as: 'a', delay: 0.18 }),
    ],
  },
  'audio-waveform': {
    verb: 'the waveform inhales to a flat line, then blooms past its rest height',
    parts: [{
      as: 'wave',
      origin: [12, 12],
      transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.18)', 'scaleY(0.9)', 'scaleY(1)'],
      times: T5,
      ease: [INOUT, OUT, OUT, OUT],
      dur: 0.7,
    }],
  },
  'audit-01': {
    verb: 'the fingerprint stamps the page, then the two lines rewrite under it',
    parts: [
      null,
      grow([11, 9], 'X', { as: 'lines', delay: 0.14 }),
      stamp([16.5, 17.5], { as: 'print', dur: 0.54 }),
    ],
  },
  'audit-02': {
    verb: 'the magnifier searches the corner of the page in a small arc, then the lines rewrite',
    parts: [
      null,
      {
        as: 'lens',
        origin: [17, 18],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-0.8px, -0.5px) rotate(-8deg)',
          'translate(2px, 1.6px) rotate(10deg)',
          'translate(-0.3px, -0.2px) rotate(-2deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: T5,
        ease: E5,
        dur: 0.7,
      },
      grow([11, 9], 'X', { as: 'lines', delay: 0.16 }),
    ],
  },
  audit: {
    verb: 'the two lines rewrite first, then the fingerprint stamps — reverse of 01',
    parts: [
      null,
      grow([11, 9], 'X', { as: 'lines' }),
      stamp([16.5, 17.5], { as: 'print', delay: 0.16, dur: 0.54 }),
    ],
  },
  'augmented-reality-ar': {
    verb: 'the AR letters compute on the screen while the bezel stays still',
    parts: [
      null,
      compute([12, 11.5]),
    ],
  },
  authorized: {
    verb: 'the key slides into the lock, the barrel turns, then the pin pops',
    parts: [
      {
        as: 'lock',
        origin: [12, 17],
        transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(8deg)', 'rotate(-2deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.6,
        delay: 0.12,
      },
      {
        as: 'key',
        origin: [11, 7],
        transform: [
          'translateY(0px) rotate(0deg)',
          'translateY(-0.6px) rotate(-5deg)',
          'translateY(2.8px) rotate(3deg)',
          'translateY(-0.3px) rotate(-1deg)',
          'translateY(0px) rotate(0deg)',
        ],
        times: T5,
        ease: E5,
        dur: 0.66,
      },
      stamp([6, 17], { as: 'pin', delay: 0.2, dur: 0.42 }),
    ],
  },
  'auto-conversations': {
    verb: 'the reply arrow redraws itself, turning the conversation around',
    parts: [{ as: 'thread', origin: [12, 12], ...sweep({ dur: 0.86 }) }],
  },
  'automotive-battery-01': {
    verb: 'the plus pole stamps, the minus bar holds, then both posts seat on the case',
    parts: [
      null,
      stamp([17, 10.5], { as: 'plus', dur: 0.48 }),
      grow([7, 10.5], 'X', { as: 'minus', delay: 0.08, dur: 0.46 }),
      arrive([7.3, 4.3], 0, -1.5, { as: 'postL', delay: 0.14 }),
      arrive([16.8, 4.3], 0, -1.5, { as: 'postR', delay: 0.2 }),
    ],
  },
  'automotive-battery-02': {
    verb: 'the lightning bolt stamps the case, then the two posts seat',
    parts: [
      null,
      stamp([12, 13], { as: 'bolt', dur: 0.5 }),
      arrive([7.3, 4.3], 0, -1.5, { as: 'postL', delay: 0.12 }),
      arrive([16.8, 4.3], 0, -1.5, { as: 'postR', delay: 0.18 }),
    ],
  },
  'automotive-battery': {
    verb: 'the posts seat first, then the plus stamps — reverse of 01',
    parts: [
      null,
      stamp([17, 10.5], { as: 'plus', delay: 0.16, dur: 0.48 }),
      grow([7, 10.5], 'X', { as: 'minus', delay: 0.2, dur: 0.46 }),
      arrive([7.3, 4.3], 0, -1.5, { as: 'postL' }),
      arrive([16.8, 4.3], 0, -1.5, { as: 'postR', delay: 0.06 }),
    ],
  },
  avalanche: {
    verb: 'the powder on the right pours off the still mountain, nappe and cloud surging down-right then settling',
    parts: [
      null,
      null,
      null,
      {
        as: 'powder',
        origin: [12, 12],
        transform: [
          'translate(0px, 0px) rotate(0deg) scale(1)',
          'translate(0.5px, 1.2px) rotate(3deg) scale(0.92)',
          'translate(2.6px, 4.4px) rotate(-5deg) scale(1.2)',
          'translate(0.6px, 0.8px) rotate(1.5deg) scale(1.05)',
          'translate(0px, 0px) rotate(0deg) scale(1)',
        ],
        times: T5,
        ease: [INOUT, HIT, OUT, OUT],
        dur: 0.8,
      },
    ],
  },
  avocado: {
    verb: 'the pit stamps, the fruit squashes around it, and the stem nods after',
    parts: [
      {
        as: 'stem',
        origin: [13, 5],
        transform: ['rotate(0deg)', 'rotate(8deg)', 'rotate(-16deg)', 'rotate(4deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.56,
        delay: 0.14,
      },
      stamp([14.1, 16], { as: 'pit', dur: 0.5 }),
      {
        as: 'fruit',
        origin: [12, 13.5],
        transform: [
          'scaleY(1) scaleX(1)',
          'scaleY(0.94) scaleX(1.05)',
          'scaleY(0.84) scaleX(1.1)',
          'scaleY(1.06) scaleX(0.96)',
          'scaleY(1) scaleX(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.64,
        delay: 0.06,
      },
    ],
  },
  'award-01': {
    verb: 'the whole trophy sways from the top of the medal, stem ribbon laurels and disc locked as one piece',
    parts: [
      around([12, 2.6], [12, 15], [0, 7, -9, 3, 0], { as: 'stem', dur: 0.8 }),
      around([12, 2.6], [12, 20], [0, 7, -9, 3, 0], { as: 'ribbon', dur: 0.8 }),
      around([12, 2.6], [3.4, 8], [0, 7, -9, 3, 0], { as: 'laurelL', dur: 0.8 }),
      around([12, 2.6], [20.6, 8], [0, 7, -9, 3, 0], { as: 'laurelR', dur: 0.8 }),
      around([12, 2.6], [12, 7], [0, 7, -9, 3, 0], { as: 'medal', dur: 0.8 }),
    ],
  },
  'award-02': {
    verb: 'the cup lifts off the still floor line and sways from the star tip, then seats back down',
    parts: [
      ride([12, 2.2], [12, 20], [0, 6, -8, 2.5, 0], [[0, 0], [0, -1.6], [0, -2.8], [0, -0.2], [0, 0]], {
        as: 'tag',
        dur: 0.82,
      }),
      ride([12, 2.2], [12, 15.5], [0, 6, -8, 2.5, 0], [[0, 0], [0, -1.6], [0, -2.8], [0, -0.2], [0, 0]], {
        as: 'stem',
        dur: 0.82,
      }),
      null,
      ride([12, 2.2], [12, 8.1], [0, 6, -8, 2.5, 0], [[0, 0], [0, -1.6], [0, -2.8], [0, -0.2], [0, 0]], {
        as: 'star',
        dur: 0.82,
      }),
    ],
  },
  'award-03': {
    verb: 'medal, stand and base line lift and wobble as one trophy, then plant back on the floor',
    parts: [
      ride([12, 22], [12.5, 9.8], [0, 6, -8, 2.5, 0], [[0, 0], [0, -1.2], [0, -2.2], [0, 0.2], [0, 0]], {
        as: 'medal',
        dur: 0.84,
      }),
      ride([12, 22], [12, 20], [0, 6, -8, 2.5, 0], [[0, 0], [0, -1.2], [0, -2.2], [0, 0.2], [0, 0]], {
        as: 'stand',
        dur: 0.84,
      }),
      ride([12, 22], [12, 22], [0, 6, -8, 2.5, 0], [[0, 0], [0, -1.2], [0, -2.2], [0, 0.2], [0, 0]], {
        as: 'base',
        dur: 0.84,
      }),
    ],
  },
  'award-04': {
    verb: 'the check draws on the shield, then the ribbon hangs with the weight',
    parts: [
      null,
      { as: 'tick', ...draw({ dur: 0.56 }) },
      {
        as: 'ribbon',
        origin: [12, 18.6],
        transform: [
          'translateY(0px) scaleY(1)',
          'translateY(-0.4px) scaleY(1.06)',
          'translateY(1.8px) scaleY(0.88)',
          'translateY(-0.2px) scaleY(1.04)',
          'translateY(0px) scaleY(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.6,
        delay: 0.16,
      },
    ],
  },
  'award-05': {
    verb: 'the check draws on the round badge, then the ribbon hangs — circle cousin of 04',
    parts: [
      beat([12, 9.5], { dur: 0.5 }),
      { as: 'tick', ...draw({ dur: 0.56, delay: 0.08 }) },
      {
        as: 'ribbon',
        origin: [12, 18.6],
        transform: [
          'translateY(0px) scaleY(1)',
          'translateY(-0.4px) scaleY(1.06)',
          'translateY(1.8px) scaleY(0.88)',
          'translateY(-0.2px) scaleY(1.04)',
          'translateY(0px) scaleY(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.6,
        delay: 0.18,
      },
    ],
  },
  award: {
    verb: 'the whole trophy lifts as one piece, medal stem ribbon and laurels sharing the same rise',
    parts: [
      ticket([12, 15], -2.2, { as: 'stem', dur: 0.68 }),
      ticket([12, 20], -2.2, { as: 'ribbon', dur: 0.68 }),
      ticket([3.4, 8], -2.2, { as: 'laurelL', dur: 0.68 }),
      ticket([20.6, 8], -2.2, { as: 'laurelR', dur: 0.68 }),
      ticket([12, 7], -2.2, { as: 'medal', dur: 0.68 }),
    ],
  },
  'aws-lambda': {
    verb: 'the lambda stem redraws, then the tail of the λ completes the letter',
    parts: [
      { as: 'stem', origin: [13.5, 12], ...sweep({ dur: 0.74 }) },
      { as: 'tail', origin: [6.8, 16], ...sweep({ dur: 0.66, delay: 0.14 }) },
    ],
  },
  axe: {
    verb: 'the axe winds up and delivers one chop around the grip',
    parts: [
      chop([3.8, 18.2], [15.5, 10.5], { as: 'blade' }),
      chop([3.8, 18.2], [7.3, 14.8], { as: 'handle' }),
    ],
  },
  'axis-three-d': {
    verb: 'the L-frame holds; the depth ticks retract into the origin and rewrite out along the diagonal',
    parts: [
      null,
      { as: 'ticks', origin: [4.5, 19.5], ...retrace({ dur: 0.78 }) },
    ],
  },
  'baby-01': {
    verb: 'the hair curl bounces, then the eyes blink and the smile opens',
    parts: [
      grow([12, 16.5], 'X', { as: 'smile', delay: 0.12, dur: 0.5 }),
      grow([12, 11.5], 'Y', { as: 'eyes', delay: 0.16, dur: 0.48 }),
      {
        as: 'head',
        origin: [12, 12],
        transform: ['rotate(0deg)', 'rotate(-2deg)', 'rotate(3deg)', 'rotate(-0.8deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.62,
        delay: 0.08,
      },
      {
        as: 'curl',
        origin: [13.8, 5.5],
        transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(-18deg)', 'rotate(4deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.58,
      },
    ],
  },
  'baby-02': {
    verb: 'the body rocks under the head, the hair curl and eyes following',
    parts: [
      {
        as: 'head',
        origin: [12, 8],
        transform: ['rotate(0deg)', 'rotate(-3deg)', 'rotate(4deg)', 'rotate(-1deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.6,
        delay: 0.08,
      },
      {
        as: 'body',
        origin: [12, 17],
        transform: ['rotate(0deg)', 'rotate(4deg)', 'rotate(-7deg)', 'rotate(2deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.7,
      },
      {
        as: 'curl',
        origin: [11.7, 3.8],
        transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(14deg)', 'rotate(-3deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.54,
        delay: 0.12,
      },
      grow([12, 8.5], 'Y', { as: 'eyes', delay: 0.18, dur: 0.46 }),
    ],
  },
  'baby-bed-01': {
    verb: 'weight settles onto the mattress: the slats and middle rail sag, the floor holding still',
    parts: [
      sag([12, 11], 1.8, { as: 'slats' }),
      null,
      null,
      sag([12, 15], 1.6, { as: 'mattress', delay: 0.04 }),
      null,
    ],
  },
  'baby-bed-02': {
    verb: 'the whole crib rocks on its curved rail, like a rocking chair',
    parts: [
      rocker([12, 11], { as: 'slats' }),
      rocker([12, 18.5], { as: 'rail' }),
      rocker([12, 11], { as: 'posts' }),
      rocker([12, 7], { as: 'railTop' }),
      rocker([12, 15], { as: 'railMid' }),
    ],
  },
  'baby-bed': {
    verb: 'the drop-side slats collapse onto the mattress then rise back, posts and rails holding',
    parts: [
      grow([12, 15], 'Y', { as: 'slats', dur: 0.64 }),
      null,
      null,
      null,
      null,
    ],
  },
  'baby-bottle': {
    verb: 'the whole bottle tips from its base to feed, nipple and measure marks riding with the glass',
    parts: [
      around([12, 22], [12, 16.2], [0, -6, 11, -2.5, 0], { as: 'bottle', dur: 0.78 }),
      around([12, 22], [11.9, 6.3], [0, -6, 11, -2.5, 0], { as: 'nipple', dur: 0.78 }),
      around([12, 22], [16.3, 16], [0, -6, 11, -2.5, 0], { as: 'marks', dur: 0.78 }),
    ],
  },
  'baby-boy-dress': {
    verb: 'collar, tunic and sash hang from the shoulders as one garment and sway, then settle',
    parts: [
      around([12, 6], [12, 7.1], [0, -5, 7, -2, 0], { as: 'collar', dur: 0.78 }),
      around([12, 6], [12, 14.7], [0, -5, 7, -2, 0], { as: 'tunic', dur: 0.78 }),
      around([12, 6], [12, 11.3], [0, -5, 7, -2, 0], { as: 'sash', dur: 0.78 }),
    ],
  },
  'baby-girl-dress': {
    verb: 'the skirt twirls from the waist, the bow bounces on the bodice, the collar stays the hang',
    parts: [
      {
        as: 'skirt',
        origin: [12, 9],
        transform: [
          'rotate(0deg) scaleX(1)',
          'rotate(-7deg) scaleX(0.9)',
          'rotate(10deg) scaleX(1.14)',
          'rotate(-3deg) scaleX(0.97)',
          'rotate(0deg) scaleX(1)',
        ],
        times: T5,
        ease: E5,
        dur: 0.76,
      },
      {
        as: 'bow',
        origin: [12, 13.9],
        transform: [
          'translateY(0px) scale(1)',
          'translateY(-1.6px) scale(1.12)',
          'translateY(0.5px) scale(0.92)',
          'translateY(0px) scale(1)',
        ],
        times: [0, 0.36, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.58,
        delay: 0.1,
      },
      {
        as: 'collar',
        origin: [12, 5],
        transform: ['rotate(0deg)', 'rotate(2.5deg)', 'rotate(-3deg)', 'rotate(1deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.62,
        delay: 0.14,
      },
    ],
  },
  baby: {
    verb: 'the smile opens first, then the eyes blink — reverse of 01',
    parts: [
      grow([12, 16.5], 'X', { as: 'smile', dur: 0.5 }),
      grow([12, 11.5], 'Y', { as: 'eyes', delay: 0.1, dur: 0.48 }),
      {
        as: 'head',
        origin: [12, 12],
        transform: ['rotate(0deg)', 'rotate(2deg)', 'rotate(-3deg)', 'rotate(0.8deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.62,
        delay: 0.14,
      },
      {
        as: 'curl',
        origin: [13.8, 5.5],
        transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(16deg)', 'rotate(-4deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.56,
        delay: 0.16,
      },
    ],
  },
  'back-muscle-body': {
    verb: 'the lats flex out from the spine, the definition lines follow, traps last',
    parts: [
      grow([12, 9.3], 'Y', { as: 'traps', delay: 0.16, dur: 0.5 }),
      {
        as: 'latR',
        origin: [14, 12],
        transform: ['scaleX(1)', 'scaleX(0.94)', 'scaleX(1.14)', 'scaleX(0.97)', 'scaleX(1)'],
        times: T5,
        ease: E5,
        dur: 0.62,
        delay: 0.04,
      },
      {
        as: 'latL',
        origin: [10, 12],
        transform: ['scaleX(1)', 'scaleX(0.94)', 'scaleX(1.14)', 'scaleX(0.97)', 'scaleX(1)'],
        times: T5,
        ease: E5,
        dur: 0.62,
      },
      grow([12, 17.5], 'Y', { as: 'spine', delay: 0.08, dur: 0.5 }),
      grow([17.7, 16.8], 'Y', { as: 'lineR', delay: 0.12, dur: 0.48 }),
      grow([6.3, 16.8], 'Y', { as: 'lineL', delay: 0.08, dur: 0.48 }),
    ],
  },
  background: {
    verb: 'the hatch lines redraw across the frame, nearest first',
    parts: [
      null,
      { as: 'hatchC', ...draw({ dur: 0.56, delay: 0.08 }) },
      { as: 'hatchTL', ...draw({ dur: 0.56, delay: 0.16 }) },
      { as: 'hatchBR', ...draw({ dur: 0.56, delay: 0.04 }) },
      { as: 'hatchSE', ...draw({ dur: 0.5 }) },
      { as: 'hatchNW', ...draw({ dur: 0.5, delay: 0.2 }) },
    ],
  },
  'backpack-01': {
    verb: 'the flap closes over the bag, the zip draws, then both straps seat',
    parts: [
      null,
      grow([12, 14], 'Y', { as: 'flap', dur: 0.54 }),
      grow([12, 10], 'X', { as: 'zip', delay: 0.1, dur: 0.42 }),
      nudge([12, 4], 0, -1.4, { as: 'handle', delay: 0.08, dur: 0.5 }),
      arrive([3.5, 16], -1.5, 0, { as: 'strapL', delay: 0.16 }),
      arrive([20.5, 16], 1.5, 0, { as: 'strapR', delay: 0.22 }),
    ],
  },
  'backpack-02': {
    verb: 'the whole pack is picked up from the handle as one rigid body, straps pocket and button riding with it',
    parts: [
      pickUp([20.6, 17], { as: 'strapR' }),
      pickUp([3.4, 17], { as: 'strapL' }),
      pickUp([12, 16.2], { as: 'body' }),
      pickUp([12, 3.5], { as: 'handle' }),
      pickUp([12, 9], { as: 'pocket' }),
      pickUp([12, 10], { as: 'button' }),
    ],
  },
}
