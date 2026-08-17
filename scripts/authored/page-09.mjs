/**
 * Page 9 — bitcoin-money → book-04.
 *
 * Skip `bluetooth` (handcrafted). `bitcoin-money` was authored early.
 * Identical-geometry pairs get different jobs. Attached parts share a
 * rotation matrix or an identical translate — no lag, no whole-icon squash.
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
  shake,
  stamp,
  twinkle,
} from './_kit.mjs'

const T5 = [0, 0.18, 0.46, 0.74, 1]
const E5 = [INOUT, OUT, OUT, OUT]
const NOD = [0, 5, -4, 1.5, 0]
const TOAST = [0, -8, 6, -2, 0]

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

/** Identical translate on every attached primitive. */
const recoil = (origin, dx, dy, o = {}) => ({
  origin,
  transform: [
    'translate(0px, 0px)',
    `translate(${dx}px, ${dy}px)`,
    `translate(${(-dx * 0.12).toFixed(2)}px, ${(-dy * 0.12).toFixed(2)}px)`,
    'translate(0px, 0px)',
  ],
  times: [0, 0.28, 0.68, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.62,
  ...o,
})

/**
 * Scale along `axis` while keeping `pivot` planted. Same fill-box compensation
 * as `around`.
 */
const scaleFrom = (axis, pivot, center, scales, o = {}) => {
  const i = axis === 'X' ? 0 : 1
  const d = pivot[i] - center[i]
  return {
    origin: center,
    transform: scales.map((s) => {
      const t = d * (1 - s)
      const trans =
        axis === 'X' ? `translate(${t.toFixed(2)}px, 0px)` : `translate(0px, ${t.toFixed(2)}px)`
      return `${trans} scale${axis}(${s})`
    }),
    times: [0, 0.34, 0.68, 1],
    ease: [INOUT, OUT, OUT],
    dur: 0.66,
    ...o,
  }
}

/** Extra slats stacked on `y` at rest, then spread by the original slat gap. */
const slatPack = (x1, y, x2, count, step) => {
  const line = (yy) => `M${x1} ${yy}H${x2}`
  const rest = Array.from({ length: count }, () => line(y)).join('')
  const closed = Array.from({ length: count }, (_, i) => line(+(y + i * step).toFixed(2))).join('')
  return [rest, closed, closed, rest]
}

const WAKE_REST =
  'M2 21.1932C2.68524 22.2443 3.57104 22.2443 4.27299 21.1932C6.52985 17.7408 8.67954 23.6764 10.273 21.2321C12.703 17.5694 14.4508 23.9218 16.273 21.1932C18.6492 17.5582 20.1295 23.5776 22 21.5842'

/** A second copy of the wake, 20px to the right, so a −20px scroll loops. */
const WAKE_TILE =
  WAKE_REST +
  'M22 21.1932C22.68524 22.2443 23.57104 22.2443 24.27299 21.1932C26.52985 17.7408 28.67954 23.6764 30.273 21.2321C32.703 17.5694 34.4508 23.9218 36.273 21.1932C38.6492 17.5582 40.1295 23.5776 42 21.5842'

const BURN = [0, 0.14, 0.34, 0.52, 0.76, 1]
const BURN_EASE = [INOUT, OUT, OUT, OUT, OUT]

export default {
  'bitcoin-money': {
    verb: 'the whole note slides as one bill, B and all four cuts riding with the paper',
    parts: [
      recoil([12, 12], 2.2, 0, { as: 'note' }),
      recoil([4.5, 6.5], 2.2, 0, { as: 'cutTL' }),
      recoil([19.5, 6.5], 2.2, 0, { as: 'cutTR' }),
      recoil([19.5, 17.5], 2.2, 0, { as: 'cutBR' }),
      recoil([4.5, 17.5], 2.2, 0, { as: 'cutBL' }),
      recoil([12, 12], 2.2, 0, { as: 'btc' }),
    ],
  },
  'bitcoin-pie-chart': {
    verb: 'the three slice ticks redraw around the still rings, B holding the center',
    parts: [null, null, { as: 'slice', origin: [17, 10.5], ...retrace({ dur: 0.7 }) }, null],
  },
  'bitcoin-piggy-bank': {
    verb: 'the pig nods from its feet, slot-B and eye locked to the body',
    parts: [
      around([12, 21.5], [12, 13.8], NOD, { as: 'body', dur: 0.72 }),
      around([12, 21.5], [16, 7.5], NOD, { as: 'slot', dur: 0.72 }),
      around([12, 21.5], [8, 11.5], NOD, { as: 'eye', dur: 0.72 }),
    ],
  },
  'bitcoin-presentation': {
    verb: 'the board tips toward the room from the stand, B and rules riding the screen',
    parts: [
      null,
      around([12, 19], [12, 3.5], TOAST, { as: 'bezel', dur: 0.74 }),
      around([12, 19], [12, 12], TOAST, { as: 'screen', dur: 0.74 }),
      around([12, 19], [16, 12], TOAST, { as: 'rules', dur: 0.74 }),
      around([12, 19], [8.5, 12], TOAST, { as: 'btc', dur: 0.74 }),
    ],
  },
  'bitcoin-receipt': {
    verb: 'the whole receipt presents from its foot, B riding the sheet',
    parts: [
      around([12, 22], [12, 10.5], TOAST, { as: 'btc', dur: 0.72 }),
      around([12, 22], [12, 12], TOAST, { as: 'sheet', dur: 0.72 }),
    ],
  },
  'bitcoin-receive': {
    verb: 'the incoming arrow commits into the still B',
    parts: [null, nudge([18.3, 12], -2.4, 0, { as: 'in', dur: 0.52 })],
  },
  'bitcoin-rectangle': {
    verb: 'the constructed B stamps as one glyph inside the still frame',
    parts: [
      null,
      stamp([9.5, 12], { as: 'stem', dur: 0.5 }),
      stamp([12.3, 7], { as: 'serifT', dur: 0.5 }),
      stamp([12.3, 17], { as: 'serifB', dur: 0.5 }),
      stamp([12, 14], { as: 'bowlLo', dur: 0.5 }),
      stamp([12, 10], { as: 'bowlHi', dur: 0.5 }),
    ],
  },
  'bitcoin-safe': {
    verb: 'the hinge pulls open, feet planted, body and B holding',
    parts: [null, nudge([6.5, 11], -1.8, 0, { as: 'hinge', dur: 0.54 }), null, null, null],
  },
  'bitcoin-search': {
    verb: 'the loupe swings from its handle tip, lens and B locked together',
    parts: [
      around([22, 22], [19.8, 19.8], NOD, { as: 'handle', dur: 0.7 }),
      around([22, 22], [11, 11], NOD, { as: 'lens', dur: 0.7 }),
      around([22, 22], [11, 11], NOD, { as: 'btc', dur: 0.7 }),
    ],
  },
  'bitcoin-send': {
    verb: 'the outgoing arrow commits off the still B',
    parts: [null, nudge([18.3, 12], 2.4, 0, { as: 'out', dur: 0.52 })],
  },
  'bitcoin-setting': {
    verb: 'gear and B click together around their shared axis',
    parts: [
      around([12, 12], [12, 12], [0, 22, -8, 4, 0], { as: 'btc', dur: 0.68 }),
      around([12, 12], [12, 12], [0, 22, -8, 4, 0], { as: 'gear', dur: 0.68 }),
    ],
  },
  'bitcoin-shield': {
    verb: 'shield and B absorb the hit as one plate',
    parts: [
      shake([12, 11.5], { as: 'btc', dur: 0.56 }),
      shake([12, 12], { as: 'shield', dur: 0.56 }),
    ],
  },
  'bitcoin-shopping': {
    verb: 'the bag lifts from its base, handle and B riding with the body',
    parts: [
      around([12, 22], [12, 15], TOAST, { as: 'bag', dur: 0.72 }),
      around([12, 22], [12, 15], TOAST, { as: 'btc', dur: 0.72 }),
      around([12, 22], [12, 5], TOAST, { as: 'handle', dur: 0.72 }),
    ],
  },
  'bitcoin-smartphone-01': {
    verb: 'the B slides onto the still open chassis, home-dot holding',
    parts: [null, null, arrive([17, 7], -2.2, 0, { as: 'btc', dur: 0.56 })],
  },
  'bitcoin-smartphone-02': {
    verb: 'the B computes inside the still closed phone, home-dot holding',
    parts: [null, compute([12, 10], { as: 'btc', dur: 0.56 }), null],
  },
  'bitcoin-smartphone': {
    verb: 'the whole open phone hops as one device, B and home-dot riding the chassis',
    parts: [
      recoil([11, 19], 0, -1.8, { as: 'home' }),
      recoil([11, 12], 0, -1.8, { as: 'chassis' }),
      recoil([17, 7], 0, -1.8, { as: 'btc' }),
    ],
  },
  'bitcoin-square': {
    verb: 'the frame acknowledges the still B',
    parts: [beat([12, 12], { as: 'frame', dur: 0.5 }), null],
  },
  'bitcoin-store': {
    verb: 'the awning drops onto the still stall, B already seated',
    parts: [arrive([12, 6.7], 0, 1.6, { as: 'awning', dur: 0.54 }), null, null],
  },
  'bitcoin-tag': {
    verb: 'tag and B swing from the still hole',
    parts: [
      null,
      around([17.5, 6.5], [12, 12], NOD, { as: 'tag', dur: 0.7 }),
      around([17.5, 6.5], [10.8, 12.5], NOD, { as: 'btc', dur: 0.7 }),
    ],
  },
  'bitcoin-target': {
    verb: 'the four crosshair ticks lock inward, ring and B holding',
    parts: [
      null,
      grow([12, 2], 'Y', { as: 'tickN', dur: 0.54 }),
      grow([22, 12], 'X', { as: 'tickE', dur: 0.54, delay: 0.04 }),
      grow([12, 22], 'Y', { as: 'tickS', dur: 0.54, delay: 0.08 }),
      grow([2, 12], 'X', { as: 'tickW', dur: 0.54, delay: 0.12 }),
      null,
    ],
  },
  'bitcoin-transaction': {
    verb: 'the cycle arrows redraw around the still B',
    parts: [{ as: 'cycle', origin: [12, 12], ...retrace({ dur: 0.72 }) }, null],
  },
  'bitcoin-up-01': {
    verb: 'the upload chevron commits off the still coin',
    parts: [null, nudge([12, 4.2], 0, -2.2, { as: 'arrow', dur: 0.52 }), null],
  },
  'bitcoin-up-02': {
    verb: 'the chart-up arrow redraws above the still coin',
    parts: [null, { as: 'chart', origin: [12, 5.3], ...retrace({ dur: 0.64 }) }, null],
  },
  'bitcoin-up': {
    verb: 'coin and B hop together, the chevron holding the ceiling',
    parts: [
      recoil([12, 15.5], 0, -2, { as: 'coin' }),
      null,
      recoil([12, 15.5], 0, -2, { as: 'btc' }),
    ],
  },
  'bitcoin-wallet': {
    verb: 'the whole wallet slides out as one piece, clasp and B riding the body',
    parts: [
      recoil([17.5, 13], 2.2, 0, { as: 'clasp' }),
      recoil([12, 11], 2.2, 0, { as: 'body' }),
      recoil([5, 16.5], 2.2, 0, { as: 'btc' }),
    ],
  },
  'bitcoin-withdraw': {
    verb: 'the B drops out of the still hopper, slot holding',
    parts: [null, nudge([12, 14], 0, 2.2, { as: 'btc', dur: 0.54 }), null],
  },
  bitcoin: {
    verb: 'the whole B glyph nods from the stem foot, bowls and serifs locked',
    parts: [
      around([7, 22], [12, 12], NOD, { as: 'bowls', dur: 0.7 }),
      around([7, 22], [7, 12], NOD, { as: 'stem', dur: 0.7 }),
      around([7, 22], [11.5, 3], NOD, { as: 'serifT', dur: 0.7 }),
      around([7, 22], [11.5, 21], NOD, { as: 'serifB', dur: 0.7 }),
    ],
  },
  'black-hole-01': {
    verb: 'the two jets fall into the still disk, core swallowing, axis holding',
    parts: [
      null,
      null,
      compute([12, 12.3], { as: 'core', dur: 0.58 }),
      { as: 'jetL', origin: [7.5, 12], ...retrace({ dur: 0.7 }) },
      { as: 'jetR', origin: [16, 13], ...retrace({ dur: 0.7 }) },
      null,
    ],
  },
  'black-hole': {
    verb: 'the two field stars catch, the core swallowing inside the still disk',
    parts: [
      twinkle([20.5, 3.5], { as: 'starTR', dur: 0.58 }),
      twinkle([3.5, 20.5], { as: 'starBL', dur: 0.58, delay: 0.08 }),
      null,
      compute([12, 12], { as: 'core', dur: 0.56 }),
      null,
    ],
  },
  blend: {
    verb: 'square and circle pull into the still overlap',
    parts: [
      recoil([17, 17], -1.8, -1.8, { as: 'circle' }),
      recoil([7.5, 7.5], 1.8, 1.8, { as: 'square' }),
      null,
    ],
  },
  blender: {
    verb: 'jar, lid and ticks rock from the still base',
    parts: [
      around([13.5, 17], [11.9, 10.5], NOD, { as: 'jar', dur: 0.7 }),
      around([13.5, 17], [13.5, 2], NOD, { as: 'lid', dur: 0.7 }),
      null,
      around([13.5, 17], [16.8, 11], NOD, { as: 'ticks', dur: 0.7 }),
    ],
  },
  blinds: {
    verb: 'the cord ball pulls the rail down one slat-gap, a new slat taking the vacated slot',
    clip: true,
    parts: [
      {
        as: 'knob',
        origin: [12, 16],
        transform: ['translateY(0px)', 'translateY(4px)', 'translateY(4px)', 'translateY(0px)'],
        times: [0, 0.24, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.8,
      },
      {
        as: 'slats',
        origin: [12, 6],
        d: slatPack(3.50003, 6, 20.5, 2, 4),
        times: [0, 0.24, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.8,
      },
      {
        as: 'rail',
        origin: [12, 10],
        transform: ['translateY(0px)', 'translateY(4px)', 'translateY(4px)', 'translateY(0px)'],
        times: [0, 0.24, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.8,
      },
      {
        as: 'cord',
        origin: [12, 12],
        transform: ['translateY(0px)', 'translateY(4px)', 'translateY(4px)', 'translateY(0px)'],
        times: [0, 0.24, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.8,
      },
      null,
    ],
  },
  'block-game': {
    verb: 'the floating tile slides into the L and locks, the well holding',
    parts: [
      null,
      null,
      null,
      {
        as: 'tile',
        origin: [6, 6],
        transform: [
          'translate(0px, 0px)',
          'translate(4px, 4px)',
          'translate(3.5px, 3.5px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.4, 0.62, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
    ],
  },
  'blockchain-01': {
    verb: 'the new top facet sits onto the still lower prism',
    parts: [null, arrive([12, 7.5], 0, 1.8, { as: 'top', dur: 0.56 })],
  },
  'blockchain-02': {
    verb: 'the antenna grows off the still prism, both links redrawing in',
    parts: [
      null,
      { as: 'linkR', origin: [20.5, 19.8], ...retrace({ dur: 0.62 }) },
      grow([12, 6], 'Y', { as: 'antenna', dur: 0.54 }),
      { as: 'linkL', origin: [3.5, 19.8], ...retrace({ dur: 0.62, delay: 0.06 }) },
    ],
  },
  'blockchain-03': {
    verb: 'the inner crystal computes inside the still outer prism',
    parts: [compute([12, 12], { as: 'inner', dur: 0.56 }), null],
  },
  'blockchain-04': {
    verb: 'the four links grow into the still nodes, square assembling',
    parts: [
      null,
      null,
      null,
      null,
      grow([9, 6], 'X', { as: 'top', dur: 0.52 }),
      grow([12, 18], 'X', { as: 'bot', dur: 0.52, delay: 0.06 }),
      grow([18, 9], 'Y', { as: 'right', dur: 0.52, delay: 0.12 }),
      grow([6, 12], 'Y', { as: 'left', dur: 0.52, delay: 0.18 }),
    ],
  },
  'blockchain-05': {
    verb: 'the crystal sits onto the still dock',
    parts: [arrive([12, 9.5], 0, 1.8, { as: 'crystal', dur: 0.56 }), null],
  },
  'blockchain-06': {
    verb: 'the mined bottom node sits into the still gantry',
    parts: [null, null, null, null, null, arrive([12, 18], 0, 1.6, { as: 'block', dur: 0.56 })],
  },
  'blockchain-07': {
    verb: 'the ledger card at the foot stamps, peers and legs holding',
    parts: [null, null, null, null, null, stamp([12, 17.5], { as: 'card', dur: 0.5 })],
  },
  blockchain: {
    verb: 'both prisms tip from the base as one stack',
    parts: [
      around([12, 21], [12, 14.3], NOD, { as: 'lower', dur: 0.7 }),
      around([12, 21], [12, 7.5], NOD, { as: 'upper', dur: 0.7 }),
    ],
  },
  blocked: {
    verb: 'the forbidden mark wipes across the still badge',
    parts: [null, { as: 'forbid', origin: [12, 11], ...draw({ dur: 0.66 }) }],
  },
  blocks: {
    verb: 'the top block slides down-left into the planted stair and locks',
    parts: [
      {
        as: 'top',
        origin: [18, 6],
        transform: [
          'translate(0px, 0px)',
          'translate(-4px, 4px)',
          'translate(-4px, 4px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.28, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
      null,
      null,
      null,
    ],
  },
  blogger: {
    verb: 'the b blob stamps inside the still square, text holding',
    parts: [null, null, null, stamp([12.2, 11.9], { as: 'b', dur: 0.5 })],
  },
  'blood-bag': {
    verb: 'a drop collects inside the still bag, drip and tube holding',
    parts: [null, null, stamp([12, 12.6], { as: 'drop', dur: 0.52 }), null],
  },
  'blood-bottle': {
    verb: 'the blood line sloshes in the still bottle, pipette and stand holding',
    parts: [
      null,
      null,
      null,
      {
        as: 'meniscus',
        origin: [14, 9.6],
        d: [
          'M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723',
          'M8 8.9C14.8571 4.9 13.5714 12.2 20 11.5',
          'M8 11.5C14.8571 7.6 13.5714 14.3 20 8.9',
          'M8 10.3722C14.8571 6.24278 13.5714 13.0046 20 10.3723',
        ],
        times: [0, 0.32, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.74,
      },
      null,
    ],
  },
  'blood-pressure': {
    verb: 'the pulse waveform redraws across the still cuff',
    parts: [{ as: 'pulse', origin: [14.5, 14], ...retrace({ dur: 0.7 }) }, null],
  },
  'blood-type': {
    verb: 'drop and letter hang from the tip as one sample',
    parts: [
      around([12, 22], [12, 11.8], NOD, { as: 'drop', dur: 0.7 }),
      around([12, 22], [12, 12], NOD, { as: 'letter', dur: 0.7 }),
    ],
  },
  blood: {
    verb: 'the small drop joins the large one, highlight riding the body',
    parts: [
      arrive([6.3, 8.6], 2.2, 1.6, { as: 'small', dur: 0.58 }),
      around([15, 22], [15, 13.4], NOD, { as: 'large', dur: 0.7 }),
      around([15, 22], [17, 17], NOD, { as: 'shine', dur: 0.7 }),
    ],
  },
  bluesky: {
    verb: 'the bird tips from its perch',
    parts: [around([12, 21], [12, 12], [0, -10, 7, -2, 0], { as: 'bird', dur: 0.72 })],
  },
  'bluetooth-circle': {
    verb: 'the rune nods inside the still ring',
    parts: [null, around([12, 17], [12, 12], NOD, { as: 'rune', dur: 0.66 })],
  },
  'bluetooth-connected': {
    verb: 'the two ticks grow out from the still rune',
    parts: [
      null,
      grow([17, 12], 'X', { as: 'tickR', dur: 0.48 }),
      grow([7, 12], 'X', { as: 'tickL', dur: 0.48 }),
    ],
  },
  'bluetooth-not-connected': {
    verb: 'the slash wipes, the two fragments recoiling apart',
    parts: [
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.66 }) },
      recoil([15.1, 6.7], 1.4, -1.4, { as: 'upper' }),
      recoil([11.2, 16.4], -1.4, 1.4, { as: 'lower' }),
    ],
  },
  'bluetooth-off': {
    verb: 'the slash wipes, both fragments recoiling as one mark',
    parts: [
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.66 }) },
      recoil([14.5, 6.6], 1.6, 0, { as: 'upper' }),
      recoil([12, 16.5], 1.6, 0, { as: 'lower' }),
    ],
  },
  'bluetooth-search': {
    verb: 'the loupe swings from its handle, the rune holding',
    parts: [null, around([21.5, 21], [17.5, 17], NOD, { as: 'lens', dur: 0.7 })],
  },
  'bluetooth-searching': {
    verb: 'the search waves redraw beside the still rune',
    parts: [null, { as: 'waves', origin: [17, 12], ...retrace({ dur: 0.7 }) }],
  },
  'bluetooth-square': {
    verb: 'the rune stamps inside the still square',
    parts: [null, stamp([12, 12], { as: 'rune', dur: 0.5 })],
  },
  blur: {
    verb: 'the three hatch lines redraw across the still drop',
    parts: [null, null, { as: 'hatch', origin: [16, 13], ...retrace({ dur: 0.68 }) }],
  },
  'blush-brush-01': {
    verb: 'the whole brush strokes from the handle, bristles and ferrule locked',
    parts: [
      around([18.9, 5.1], [6.7, 17.3], [0, 12, -8, 3, 0], { as: 'bristles', dur: 0.74 }),
      around([18.9, 5.1], [12.4, 11.6], [0, 12, -8, 3, 0], { as: 'ferrule', dur: 0.74 }),
      around([18.9, 5.1], [18.9, 5.1], [0, 12, -8, 3, 0], { as: 'handle', dur: 0.74 }),
    ],
  },
  'blush-brush-02': {
    verb: 'the wand strokes from the handle, the sparkle riding the bristles',
    parts: [
      around([10.2, 22], [12.1, 11.9], [0, 14, -8, 3, 0], { as: 'wand', dur: 0.74 }),
      around([10.2, 22], [6, 7], [0, 14, -8, 3, 0], { as: 'spark', dur: 0.74 }),
    ],
  },
  'blush-brush': {
    verb: 'the bristles dab from the still ferrule, handle holding',
    parts: [
      around([12.4, 11.6], [6.7, 17.3], [0, 10, -7, 2, 0], { as: 'bristles', dur: 0.66 }),
      null,
      null,
    ],
  },
  'board-math': {
    verb: 'minus and both pluses write on the still board, legs planted',
    parts: [
      null,
      null,
      null,
      null,
      grow([12, 9], 'X', { as: 'minus', dur: 0.5 }),
      stamp([7.5, 9], { as: 'plusL', dur: 0.48, delay: 0.06 }),
      stamp([16.5, 9], { as: 'plusR', dur: 0.48, delay: 0.12 }),
      null,
    ],
  },
  boat: {
    verb: 'the wake scrolls under a still hull, cabin and mast holding',
    loops: true,
    clip: true,
    parts: [
      {
        as: 'wake',
        origin: [12, 20.7],
        d: [WAKE_TILE, WAKE_TILE],
        transform: ['translateX(0px)', 'translateX(-20px)'],
        times: [0, 1],
        ease: 'linear',
        dur: 1.1,
        repeat: Infinity,
        repeatType: 'loop',
      },
      null,
      null,
      null,
    ],
  },
  'body-armor': {
    verb: 'the whole harness nods from the belt, collar and pauldrons locked to the cuirass',
    parts: [
      around([12, 22], [12, 5.2], NOD, { as: 'collar', dur: 0.72 }),
      around([12, 22], [5.9, 7.6], NOD, { as: 'pauldronL', dur: 0.72 }),
      around([12, 22], [18.1, 7.6], NOD, { as: 'pauldronR', dur: 0.72 }),
      around([12, 22], [12, 14.5], NOD, { as: 'cuirass', dur: 0.72 }),
      around([12, 22], [12, 20.5], NOD, { as: 'belt', dur: 0.72 }),
    ],
  },
  'body-part-leg': {
    verb: 'thigh, calf and crease kick from the hip as one limb',
    parts: [
      around([5, 2], [12.6, 12], [0, 12, -6, 2, 0], { as: 'thigh', dur: 0.72 }),
      around([5, 2], [8, 17], [0, 12, -6, 2, 0], { as: 'calf', dur: 0.72 }),
      around([5, 2], [8.5, 8.5], [0, 12, -6, 2, 0], { as: 'crease', dur: 0.72 }),
    ],
  },
  'body-part-muscle': {
    verb: 'the biceps flexes from its seated end',
    parts: [scaleFrom('Y', [12.1, 23], [12.1, 12.5], [1, 0.88, 1.08, 1], { as: 'biceps', dur: 0.66 })],
  },
  'body-part-six-pack': {
    verb: 'the two abs rows flex, pecs and obliques holding',
    parts: [
      null,
      null,
      null,
      null,
      grow([12, 12], 'Y', { as: 'absMid', dur: 0.54 }),
      grow([12, 17], 'Y', { as: 'absLo', dur: 0.54, delay: 0.08 }),
    ],
  },
  'body-soap': {
    verb: 'the pump dips, the blob catching after, bottle holding',
    parts: [
      null,
      null,
      null,
      nudge([11.5, 3.5], 0, 1.6, { as: 'pump', dur: 0.5 }),
      stamp([18, 9.1], { as: 'blob', dur: 0.48, delay: 0.12 }),
    ],
  },
  'body-weight': {
    verb: 'dial and frame settle onto the still floor',
    parts: [
      around([12, 21], [12, 10.3], [0, 4, -3, 1, 0], { as: 'dial', dur: 0.7 }),
      null,
      around([12, 21], [12, 12], [0, 4, -3, 1, 0], { as: 'frame', dur: 0.7 }),
    ],
  },
  bold: {
    verb: 'the whole letter thickens into bold, both bowls sharing the stroke',
    parts: [
      {
        as: 'bowlT',
        origin: [11.5, 8],
        strokeWidth: [1.5, 2.9, 2.9, 1.5],
        times: [0, 0.26, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
      {
        as: 'bowlB',
        origin: [12, 16],
        strokeWidth: [1.5, 2.9, 2.9, 1.5],
        times: [0, 0.26, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
    ],
  },
  bolt: {
    verb: 'the inner hole stamps inside the still hex',
    parts: [null, stamp([12, 12], { as: 'hole', dur: 0.48 })],
  },
  bomb: {
    verb: 'the spark walks the fuse down to the still charge, eating the wick as it goes',
    parts: [
      null,
      null,
      {
        as: 'spark',
        origin: [20.5, 6],
        transform: [
          'translate(0px, 0px)',
          'translate(-3.5px, 0px)',
          'translate(-8.64px, -3.73px)',
          'translate(-11.45px, -1px)',
          'translate(-11.45px, -1px)',
          'translate(0px, 0px)',
        ],
        times: BURN,
        ease: BURN_EASE,
        dur: 0.86,
      },
      {
        as: 'fuse',
        origin: [12.9, 3.6],
        pathLength: [1, 0.82, 0.45, 0.12, 0.12, 1],
        pathOffset: [0, 0.18, 0.55, 0.88, 0.88, 0],
        times: BURN,
        ease: BURN_EASE,
        dur: 0.86,
      },
    ],
  },
  'bone-01': {
    verb: 'the bone tosses from one knobby end',
    parts: [around([4, 20], [12, 12], [0, 14, -8, 3, 0], { as: 'bone', dur: 0.72 })],
  },
  'bone-02': {
    verb: 'the two halves rattle opposite around the joint, ticks holding',
    parts: [
      around([12, 12], [7.6, 16.4], [0, 8, -5, 2, 0], { as: 'knobBL', dur: 0.66 }),
      around([12, 12], [16.4, 7.6], [0, -8, 5, -2, 0], { as: 'knobTR', dur: 0.66 }),
      null,
      null,
    ],
  },
  bone: {
    verb: 'the bone turns on its own center, as if examined',
    parts: [around([12, 12], [12, 12], [0, 16, -10, 4, 0], { as: 'bone', dur: 0.7 })],
  },
  'book-01': {
    verb: 'the top ribbon drops into the still cover, page curl holding',
    parts: [
      null,
      null,
      scaleFrom('Y', [9, 4], [9, 6], [1, 1.85, 1.85, 1], {
        as: 'ribbon',
        dur: 0.7,
        times: [0, 0.26, 0.72, 1],
      }),
    ],
  },
  'book-02': {
    verb: 'the two text lines rewrite on the still page, bookmark holding',
    parts: [{ as: 'lines', origin: [12, 9], ...retrace({ dur: 0.64 }) }, null, null],
  },
  'book-03': {
    verb: 'cover and page curl open from the still hinge crease',
    parts: [
      null,
      around([8, 12], [12, 12], [0, -12, -12, 0], {
        as: 'cover',
        dur: 0.76,
        times: [0, 0.28, 0.72, 1],
        ease: [INOUT, OUT, OUT],
      }),
      around([8, 12], [19, 20], [0, -12, -12, 0], {
        as: 'curl',
        dur: 0.76,
        times: [0, 0.28, 0.72, 1],
        ease: [INOUT, OUT, OUT],
      }),
    ],
  },
  'book-04': {
    verb: 'cover and lines open from the left edge as one page',
    parts: [
      around([4, 12], [12, 12], [0, -10, 6, -2, 0], { as: 'cover', dur: 0.72 }),
      around([4, 12], [12, 14.5], [0, -10, 6, -2, 0], { as: 'lines', dur: 0.72 }),
    ],
  },
}
