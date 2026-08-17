/**
 * Page 8 — beater → bitcoin-money-02.
 *
 * Each spec is a verb read off the name and the dump geometry. Variants of a
 * family get different jobs when the primitives differ. No protected original
 * in this slice.
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
  stamp,
  twinkle,
} from './_kit.mjs'

const T5 = [0, 0.18, 0.46, 0.74, 1]
const E5 = [INOUT, OUT, OUT, OUT]

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

/** Identical translate on every attached primitive — a subject recoiling from a slash. */
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
 * as `around`: motion-v overwrites transform-origin, so each keyframe translates
 * the part's center by (pivot - center) * (1 - scale).
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

/** Weight settling onto a mattress — same curve as baby-bed-01. */
const sag = (origin, dy, o = {}) => ({
  origin,
  transform: [
    'translateY(0px)',
    `translateY(${(dy * 0.28).toFixed(2)}px)`,
    `translateY(${dy}px)`,
    `translateY(${(dy * 0.16).toFixed(2)}px)`,
    'translateY(0px)',
  ],
  times: T5,
  ease: [INOUT, OUT, OUT, OUT],
  dur: 0.7,
  ...o,
})

/**
 * The single-bed frame is one U: mattress top + legs. Morphing `d` drops the
 * mattress while the feet stay at y=21, so a bounce never lifts the legs.
 */
const FRAME_REST =
  'M22 21V16C22 14.1144 22 13.1716 21.4142 12.5858C20.8284 12 19.8856 12 18 12H6C4.11438 12 3.17157 12 2.58579 12.5858C2 13.1716 2 14.1144 2 16V21'

const mattressD = (dy) => {
  if (!dy) return FRAME_REST
  const y = (n) => Number((n + dy).toFixed(4))
  return `M22 21V${y(16)}C22 ${y(14.1144)} 22 ${y(13.1716)} 21.4142 ${y(12.5858)}C20.8284 ${y(12)} 19.8856 ${y(12)} 18 ${y(12)}H6C4.11438 ${y(12)} 3.17157 ${y(12)} 2.58579 ${y(12.5858)}C2 ${y(13.1716)} 2 ${y(14.1144)} 2 ${y(16)}V21`
}

const yieldBed = (dys, o = {}) => ({
  as: 'mattress',
  origin: [12, 16.5],
  d: dys.map(mattressD),
  times: T5,
  ease: E5,
  dur: 0.76,
  ...o,
})

const ridePillow = (dys, o = {}) => ({
  as: 'pillow',
  origin: [12, 10.5],
  transform: dys.map((dy) => `translateY(${dy}px)`),
  times: T5,
  ease: E5,
  dur: 0.76,
  ...o,
})

/** Arched headboard — only the two posts grow down to meet the mattress. */
const ARCH_REST =
  'M20 12V7.36057C20 6.66893 20 6.32311 19.8292 5.99653C19.6584 5.66995 19.4151 5.50091 18.9284 5.16283C16.9661 3.79978 14.5772 3 12 3C9.42282 3 7.03391 3.79978 5.07163 5.16283C4.58492 5.50091 4.34157 5.66995 4.17079 5.99653C4 6.32311 4 6.66893 4 7.36057V12'

const extendArch = (dy) => {
  if (!dy) return ARCH_REST
  const y = Number((12 + dy).toFixed(4))
  return ARCH_REST.replace(/^M20 12/, `M20 ${y}`).replace(/V12$/, `V${y}`)
}

/** Camel-back headboard — same post-grow, decorative top stays. */
const CAMEL_REST =
  'M3 12V9C3 7.58579 3 6.87868 3.43934 6.43934C3.87868 6 4.58579 6 6 6C6.27475 6 6.65685 6.07272 6.90282 5.94012C7.0139 5.88025 7.11349 5.72888 7.31269 5.42616C8.26921 3.97247 10.2246 3 12 3C13.7754 3 15.7308 3.97247 16.6873 5.42616C16.8865 5.72888 16.9861 5.88025 17.0972 5.94012C17.3432 6.07272 17.7252 6 18 6C19.4142 6 20.1213 6 20.5607 6.43934C21 6.87868 21 7.58579 21 9V12'

const extendCamel = (dy) => {
  if (!dy) return CAMEL_REST
  const y = Number((12 + dy).toFixed(4))
  return CAMEL_REST.replace(/^M3 12/, `M3 ${y}`).replace(/V12$/, `V${y}`)
}

const growHead = (extend, dys, o = {}) => ({
  as: 'headboard',
  origin: [12, 7.5],
  d: dys.map(extend),
  times: T5,
  ease: E5,
  dur: 0.76,
  ...o,
})

const TOAST = [0, -8, 6, -2, 0]
const NOD = [0, 5, -4, 1.5, 0]

export default {
  beater: {
    verb: 'the paddle and shaft stir from the mixer neck, bowl and window holding',
    parts: [
      around([16, 11], [16, 18], [0, 22, -16, 5, 0], { as: 'paddle', dur: 0.76 }),
      around([16, 11], [16, 16], [0, 22, -16, 5, 0], { as: 'shaft', dur: 0.76 }),
      null,
      null,
    ],
  },
  bebo: {
    verb: 'the mascot nods from its seat, the stem riding with the blob',
    parts: [around([12, 22], [12, 12], [0, -9, 7, -2.5, 0], { as: 'mascot', dur: 0.74 })],
  },
  'bed-bunk': {
    verb: 'both ladder rungs grow out from the stile, bunks and posts holding',
    parts: [
      null,
      null,
      null,
      null,
      null,
      null,
      grow([17, 12], 'X', { as: 'rungTop', dur: 0.52 }),
      grow([17, 16], 'X', { as: 'rungBot', delay: 0.08, dur: 0.52 }),
      null,
      null,
      null,
    ],
  },
  'bed-double': {
    verb: 'the two pillows scoot together along the still headboard',
    parts: [
      null,
      null,
      nudge([8.5, 10.5], 1.4, 0, { as: 'pillowL', dur: 0.56 }),
      nudge([15.5, 10.5], -1.4, 0, { as: 'pillowR', dur: 0.56 }),
      null,
    ],
  },
  'bed-single-01': {
    verb: 'the mattress yields and springs, headboard posts grow down to stay seated, feet planted',
    parts: [
      null,
      yieldBed([0, 1.0, 2.6, -0.45, 0]),
      ridePillow([0, 1.0, 2.6, -0.45, 0]),
      growHead(extendArch, [0, 1.0, 2.6, -0.45, 0]),
    ],
  },
  'bed-single-02': {
    verb: 'deep sit: mattress sinks, camel-back posts grow to meet it, feet planted',
    parts: [
      null,
      yieldBed([0, 1.2, 3.2, 0.5, 0], { dur: 0.8 }),
      ridePillow([0, 1.2, 3.2, 0.5, 0], { dur: 0.8 }),
      growHead(extendCamel, [0, 1.2, 3.2, 0.5, 0], { dur: 0.8 }),
    ],
  },
  'bed-single': {
    verb: 'the mattress springs past rest, headboard posts stretch with it, feet planted',
    parts: [
      null,
      yieldBed([0, 2.4, -0.7, 0.9, 0], { dur: 0.72 }),
      ridePillow([0, 2.4, -0.7, 0.9, 0], { dur: 0.72 }),
      growHead(extendArch, [0, 2.4, -0.7, 0.9, 0], { dur: 0.72 }),
    ],
  },
  bed: {
    verb: 'mattress and pillow take weight together, posts and rails holding',
    parts: [
      null,
      null,
      null,
      null,
      recoil([12.5, 14.5], 0, 1.4, { as: 'mattress' }),
      recoil([4.5, 8.7], 0, 1.4, { as: 'pillow' }),
    ],
  },
  'bedug-01': {
    verb: 'the skin punches from the seam into the still barrel',
    parts: [
      {
        as: 'skin',
        origin: [7, 9],
        transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1.08)', 'scaleX(1)'],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.56,
      },
      null,
      null,
    ],
  },
  'bedug-02': {
    verb: 'the mallet winds up then slams the skin, barrel and stand holding',
    parts: [
      null,
      null,
      null,
      around([2, 15], [4.5, 12.5], [0, -28, 14, -4, 0], {
        as: 'mallet',
        times: [0, 0.4, 0.52, 0.78, 1],
        ease: E5,
        dur: 0.72,
      }),
      scaleFrom('X', [11, 10], [7, 10], [1, 0.62, 1.14, 1], {
        as: 'skin',
        dur: 0.5,
        delay: 0.28,
        times: [0, 0.28, 0.62, 1],
      }),
      null,
      null,
    ],
  },
  bedug: {
    verb: 'the whole drum bounces from the strike, skin lacing and shell locked together',
    parts: [
      recoil([5, 9], 0, 1.6, { as: 'skin' }),
      recoil([13, 16], 0, 1.6, { as: 'lacing' }),
      recoil([13, 9], 0, 1.6, { as: 'shell' }),
    ],
  },
  'beef-off': {
    verb: 'the slash draws through the cut, bone and both layers recoiling as one steak',
    parts: [
      recoil([8, 10], -1.4, -1.4, { as: 'bone' }),
      recoil([12, 10], -1.4, -1.4, { as: 'top' }),
      recoil([12, 14], -1.4, -1.4, { as: 'bottom' }),
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.56 }) },
    ],
  },
  beef: {
    verb: 'the bone hole stamps the still top cut, the underside holding',
    parts: [stamp([8, 10], { as: 'bone', dur: 0.48 }), null, null],
  },
  'beer-off': {
    verb: 'the slash draws through the pint, mug foam handle and stem recoiling together',
    parts: [
      recoil([16, 10], -1.6, -1.2, { as: 'handle' }),
      recoil([11.1, 14.6], -1.6, -1.2, { as: 'mug' }),
      recoil([13, 4.5], -1.6, -1.2, { as: 'foam' }),
      recoil([14, 8], -1.6, -1.2, { as: 'stem' }),
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.56 }) },
    ],
  },
  beer: {
    verb: 'the pint toasts from its base, foam and inner fill riding with the mug',
    parts: [
      around([12, 22], [12, 14.5], TOAST, { as: 'mug', dur: 0.78 }),
      around([12, 22], [12, 4.5], TOAST, { as: 'foam', dur: 0.78 }),
      around([12, 22], [12.5, 10], TOAST, { as: 'fill', dur: 0.78 }),
    ],
  },
  'behance-01': {
    verb: 'the B rewrites, the Be counter holding',
    parts: [{ as: 'bee', origin: [6.5, 12], ...retrace({ dur: 0.64 }) }, null],
  },
  'behance-02': {
    verb: 'the inner Be rewrites inside the still rounded square',
    parts: [null, { as: 'mark', origin: [12, 12.4], ...retrace({ dur: 0.64 }) }],
  },
  behance: {
    verb: 'the Be counter stamps shut, the B holding',
    parts: [null, stamp([18, 13], { as: 'be', dur: 0.5 })],
  },
  'bell-dot': {
    verb: 'the notification dot stamps on the still bell',
    parts: [null, null, stamp([18, 5], { as: 'dot', dur: 0.46 })],
  },
  'bell-electric': {
    verb: 'the striker swings into the still gong, the housing holding',
    parts: [
      around([14, 19], [20, 15], [0, 14, -6, 0], {
        as: 'striker',
        times: [0, 0.36, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.58,
      }),
      around([14, 19], [17, 18], [0, 14, -6, 0], {
        as: 'arm',
        times: [0, 0.36, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.58,
      }),
      beat([9, 9], { as: 'gong', delay: 0.12, dur: 0.46 }),
      null,
      null,
    ],
  },
  'bell-minus': {
    verb: 'the minus grows across the still bell',
    parts: [null, null, grow([18, 8], 'X', { as: 'minus', dur: 0.5 })],
  },
  'bell-off': {
    verb: 'the slash draws through, body clapper and mute recoiling as one bell',
    parts: [
      recoil([12, 20], -1.2, -1.2, { as: 'clapper' }),
      recoil([14.4, 9], -1.2, -1.2, { as: 'body' }),
      recoil([10.3, 12], -1.2, -1.2, { as: 'mute' }),
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.56 }) },
    ],
  },
  'bell-plus': {
    verb: 'the plus stamps onto the still bell',
    parts: [null, null, stamp([18, 8], { as: 'plus', dur: 0.46 })],
  },
  'bell-ring': {
    verb: 'the bell and clapper swing from the crown, both sound marks kicking out',
    parts: [
      nudge([21, 5], 1.4, -0.4, { as: 'pingR', dur: 0.5 }),
      nudge([3, 5], -1.4, -0.4, { as: 'pingL', dur: 0.5 }),
      around([12, 2], [12, 20], [0, 10, -8, 3, 0], { as: 'clapper', dur: 0.72 }),
      around([12, 2], [12, 10], [0, 10, -8, 3, 0], { as: 'body', dur: 0.72 }),
    ],
  },
  bell: {
    verb: 'the bell and clapper nod from the crown as one piece',
    parts: [
      around([12, 2], [12, 20], NOD, { as: 'clapper', dur: 0.7 }),
      around([12, 2], [12, 10], NOD, { as: 'body', dur: 0.7 }),
    ],
  },
  belt: {
    verb: 'the pin slides through the still buckle, both holes stamping as it seats',
    parts: [
      null,
      null,
      null,
      grow([9, 12], 'X', { as: 'pin', dur: 0.56 }),
      stamp([20, 12], { as: 'holeR', delay: 0.16, dur: 0.4 }),
      stamp([4, 12], { as: 'holeL', delay: 0.2, dur: 0.4 }),
    ],
  },
  'bend-tool': {
    verb: 'the whole tool bends from the lower handle, both knobs riding with the curve',
    parts: [
      around([5, 20], [19, 4], [0, 10, -7, 2.5, 0], { as: 'knobT', dur: 0.72 }),
      around([5, 20], [5, 20], [0, 10, -7, 2.5, 0], { as: 'knobB', dur: 0.72 }),
      around([5, 20], [11, 11], [0, 10, -7, 2.5, 0], { as: 'curve', dur: 0.72 }),
    ],
  },
  'berlin-tower': {
    verb: 'the whole tower sways from the ground, sphere mast antenna and both legs locked',
    parts: [
      around([12, 22], [12, 18.5], NOD, { as: 'mast', dur: 0.78 }),
      around([12, 22], [12, 10], NOD, { as: 'sphere', dur: 0.78 }),
      around([12, 22], [12, 3.5], NOD, { as: 'antenna', dur: 0.78 }),
      around([12, 22], [16.3, 18], NOD, { as: 'legR', dur: 0.78 }),
      around([12, 22], [7.8, 18], NOD, { as: 'legL', dur: 0.78 }),
    ],
  },
  berlin: {
    verb: 'the gate nods from its plinth',
    parts: [around([12, 22], [12, 12], NOD, { as: 'gate', dur: 0.74 })],
  },
  beta: {
    verb: 'the beta glyph rewrites from the stem',
    parts: [{ as: 'glyph', origin: [12, 12], ...retrace({ dur: 0.7 }) }],
  },
  'between-horizontal-end': {
    verb: 'both rows slide to the right end, the carets kicking them along',
    parts: [
      recoil([12, 17], 2.2, 0, { as: 'rowBot' }),
      recoil([12, 7], 2.2, 0, { as: 'rowTop' }),
      nudge([21, 12], 1.4, 0, { as: 'caretR', dur: 0.5 }),
      nudge([3, 12], 1.4, 0, { as: 'caretL', dur: 0.5 }),
    ],
  },
  'between-horizontal-start': {
    verb: 'both rows slide to the left start, the leading caret pulling them',
    parts: [
      recoil([15, 6.5], -2.2, 0, { as: 'rowTop' }),
      recoil([15, 17.5], -2.2, 0, { as: 'rowBot' }),
      nudge([3.5, 12], -1.6, 0, { as: 'caret', dur: 0.5 }),
    ],
  },
  'between-vertical-end': {
    verb: 'the diagonal draws the join, both carets kicking toward the still bracket',
    parts: [
      nudge([6, 4.5], 0, -1.4, { as: 'caretTop', dur: 0.5 }),
      nudge([19.5, 18], 1.4, 0, { as: 'caretEnd', delay: 0.06, dur: 0.5 }),
      null,
      { as: 'join', origin: [10, 14], ...retrace({ dur: 0.6 }) },
    ],
  },
  'between-vertical-start': {
    verb: 'both columns drop to the start, the top caret pushing them down',
    parts: [
      recoil([17.5, 15], 0, 2, { as: 'colR' }),
      recoil([6.5, 15], 0, 2, { as: 'colL' }),
      nudge([12, 3.5], 0, 1.6, { as: 'caret', dur: 0.5 }),
    ],
  },
  'biceps-flexed': {
    verb: 'the muscle swells from the clenched peak, then eases',
    parts: [
      {
        as: 'arm',
        origin: [10, 14],
        transform: [
          'scale(1, 1)',
          'scale(0.94, 1.1)',
          'scale(1.04, 0.96)',
          'scale(1, 1)',
        ],
        times: [0, 0.32, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.62,
      },
    ],
  },
  'bicycle-01': {
    verb: 'the whole bicycle hops, wheels frame crank and bars locked together',
    parts: [
      recoil([6, 16], 0, -1.8, { as: 'wheelL' }),
      recoil([18, 16], 0, -1.8, { as: 'wheelR' }),
      recoil([10.8, 12], 0, -1.8, { as: 'frame' }),
      recoil([8.5, 10], 0, -1.8, { as: 'crank' }),
      recoil([17.5, 10], 0, -1.8, { as: 'bars' }),
    ],
  },
  bicycle: {
    verb: 'the whole bicycle leans from the rear tyre, both wheels riding with the frame',
    parts: [
      around([6, 20], [6, 16], [0, -8, 6, -2, 0], { as: 'wheelL', dur: 0.74 }),
      around([6, 20], [18, 16], [0, -8, 6, -2, 0], { as: 'wheelR', dur: 0.74 }),
      around([6, 20], [10.8, 12], [0, -8, 6, -2, 0], { as: 'frame', dur: 0.74 }),
      around([6, 20], [8.5, 10], [0, -8, 6, -2, 0], { as: 'crank', dur: 0.74 }),
      around([6, 20], [17.4, 9.9], [0, -8, 6, -2, 0], { as: 'bars', dur: 0.74 }),
    ],
  },
  bike: {
    verb: 'the motorbike wheelies from the rear contact, lamp frame and front wheel riding together',
    parts: [
      around([5.5, 20.5], [5.5, 17], [0, -12, 5, -2, 0], { as: 'wheelR', dur: 0.72 }),
      around([5.5, 20.5], [18.5, 17], [0, -12, 5, -2, 0], { as: 'wheelF', dur: 0.72 }),
      around([5.5, 20.5], [15, 4.5], [0, -12, 5, -2, 0], { as: 'lamp', dur: 0.72 }),
      around([5.5, 20.5], [14, 13], [0, -12, 5, -2, 0], { as: 'frame', dur: 0.72 }),
    ],
  },
  'billiard-01': {
    verb: 'the cue slides into the still object ball',
    parts: [null, null, nudge([8.6, 15.4], 1.8, -1.8, { as: 'cue', dur: 0.56 })],
  },
  'billiard-02': {
    verb: 'the eight stamps inside the still ball',
    parts: [stamp([12, 12], { as: 'eight', dur: 0.48 }), null, null],
  },
  billiard: {
    verb: 'object ball and highlight roll off the still cue as one sphere',
    parts: [
      recoil([15, 9], -1.6, 1.2, { as: 'ball' }),
      recoil([18.6, 8], -1.6, 1.2, { as: 'glint' }),
      null,
    ],
  },
  'binary-code': {
    verb: 'the four 1s rewrite in reading order, the 0 blocks holding',
    parts: [
      null,
      null,
      null,
      null,
      { as: 'oneTL', origin: [9.8, 7], ...retrace({ dur: 0.5 }) },
      { as: 'oneBL', origin: [2.8, 17], ...retrace({ dur: 0.5, delay: 0.06 }) },
      { as: 'oneTR', origin: [21.3, 7], ...retrace({ dur: 0.5, delay: 0.12 }) },
      { as: 'oneBR', origin: [21.3, 17], ...retrace({ dur: 0.5, delay: 0.18 }) },
    ],
  },
  binary: {
    verb: 'each 1 and its baseline drop in together, the 0s holding',
    parts: [
      null,
      null,
      recoil([6.6, 6.4], 0, 1.6, { as: 'oneTL' }),
      recoil([15.5, 17.4], 0, 1.6, { as: 'oneBR', delay: 0.08 }),
      recoil([7.6, 10], 0, 1.6, { as: 'baseTL' }),
      recoil([16.5, 21], 0, 1.6, { as: 'baseBR', delay: 0.08 }),
    ],
  },
  bing: {
    verb: 'the mark nods from the foot of its stem',
    parts: [around([4, 18.5], [12, 12], [0, -8, 6, -2, 0], { as: 'mark', dur: 0.7 })],
  },
  binoculars: {
    verb: 'both barrels toe in from the hinge to focus, the bridge holding',
    parts: [
      around([12, 12], [18.2, 12], [0, 7, -3, 0], {
        as: 'right',
        times: [0, 0.4, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.64,
      }),
      null,
      around([12, 12], [5.8, 12], [0, -7, 3, 0], {
        as: 'left',
        times: [0, 0.4, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.64,
      }),
    ],
  },
  'bio-energy': {
    verb: 'both leaves sway from the stem tip, stalk and ground holding',
    parts: [
      null,
      null,
      null,
      around([12, 6], [9, 5], [0, -10, 8, -3, 0], { as: 'leafL', dur: 0.76 }),
      around([12, 6], [14.5, 7.5], [0, 10, -8, 3, 0], { as: 'leafR', dur: 0.76 }),
    ],
  },
  biohazard: {
    verb: 'the trefoil turns on its nucleus as one mark, then settles',
    parts: [
      around([12, 12], [11.9, 12.1], [0, 12, -8, 3, 0], { as: 'core', dur: 0.76 }),
      around([12, 12], [7.1, 15.6], [0, 12, -8, 3, 0], { as: 'armL', dur: 0.76 }),
      around([12, 12], [16.9, 15.6], [0, 12, -8, 3, 0], { as: 'armR', dur: 0.76 }),
      around([12, 12], [12, 7.4], [0, 12, -8, 3, 0], { as: 'armT', dur: 0.76 }),
      around([12, 12], [12, 11.1], [0, 12, -8, 3, 0], { as: 'ring', dur: 0.76 }),
    ],
  },
  'biomass-energy': {
    verb: 'the flame stamps between the still hemispheres',
    parts: [null, null, stamp([11.6, 12], { as: 'flame', dur: 0.5 })],
  },
  'biometric-access': {
    verb: 'the outer print rewrites, then the inner ridge seats, shackle holding',
    parts: [
      null,
      null,
      { as: 'print', origin: [12, 14.8], ...retrace({ dur: 0.62 }) },
      stamp([12, 16.8], { as: 'ridge', delay: 0.16, dur: 0.42 }),
    ],
  },
  'biometric-device': {
    verb: 'the print rewrites on the still pad, then the home dot stamps',
    parts: [
      null,
      { as: 'print', origin: [12, 10], ...retrace({ dur: 0.62 }) },
      null,
      stamp([12, 19], { as: 'home', delay: 0.18, dur: 0.4 }),
    ],
  },
  bird: {
    verb: 'the bird hops from its planted foot, body wing beak eye and leg riding together',
    parts: [
      around([13.5, 21], [11, 10.5], [0, -8, 6, -2, 0], { as: 'body', dur: 0.72 }),
      around([13.5, 21], [13, 19.5], [0, -8, 6, -2, 0], { as: 'leg', dur: 0.72 }),
      null,
      around([13.5, 21], [21, 7], [0, -8, 6, -2, 0], { as: 'beak', dur: 0.72 }),
      around([13.5, 21], [8, 12], [0, -8, 6, -2, 0], { as: 'wing', dur: 0.72 }),
      around([13.5, 21], [16.8, 6.5], [0, -8, 6, -2, 0], { as: 'eye', dur: 0.72 }),
    ],
  },
  birdhouse: {
    verb: 'the house nods on the still pole, roof walls hole perch and floor locked together',
    parts: [
      around([12, 18], [12, 12.5], NOD, { as: 'walls', dur: 0.74 }),
      around([12, 18], [12, 9], NOD, { as: 'hole', dur: 0.74 }),
      around([12, 18], [12, 14.5], NOD, { as: 'perch', dur: 0.74 }),
      around([12, 18], [12, 18], NOD, { as: 'floor', dur: 0.74 }),
      null,
      around([12, 18], [12, 5], NOD, { as: 'roof', dur: 0.74 }),
    ],
  },
  'birthday-cake': {
    verb: 'flame and wick lean from the icing as one candle, cake holding',
    parts: [
      around([12, 9], [12, 4], [0, -10, 8, -3, 0], { as: 'flame', dur: 0.7 }),
      around([12, 9], [12, 7.5], [0, -10, 8, -3, 0], { as: 'wick', dur: 0.7 }),
      null,
      null,
    ],
  },
  biscuit: {
    verb: 'the biscuit tilts from its bite, chips and crumbs riding with the cookie',
    parts: [
      around([12, 22], [7.5, 10], [0, -7, 5, -2, 0], { as: 'chipA', dur: 0.74 }),
      around([12, 22], [14.5, 16.5], [0, -7, 5, -2, 0], { as: 'chipB', dur: 0.74 }),
      around([12, 22], [12, 12], [0, -7, 5, -2, 0], { as: 'cookie', dur: 0.74 }),
      around([12, 22], [14, 11], [0, -7, 5, -2, 0], { as: 'dotA', dur: 0.74 }),
      around([12, 22], [8, 16], [0, -7, 5, -2, 0], { as: 'dotB', dur: 0.74 }),
    ],
  },
  'bitcoin-01': {
    verb: 'the B stamps inside the still coin, ticks holding',
    parts: [null, null, null, null, null, null, null, null, stamp([12, 12], { as: 'btc', dur: 0.48 })],
  },
  'bitcoin-02': {
    verb: 'the three candles catch on the still coin, then the B seats',
    parts: [
      null,
      twinkle([12, 3.7], { as: 'wickM', dur: 0.5 }),
      twinkle([6, 4.2], { as: 'wickL', delay: 0.06, dur: 0.5 }),
      twinkle([18, 4.2], { as: 'wickR', delay: 0.1, dur: 0.5 }),
      stamp([12, 15], { as: 'btc', delay: 0.16, dur: 0.46 }),
    ],
  },
  'bitcoin-03': {
    verb: 'the hand offers the still cloud up, the B riding with the palm',
    parts: [
      null,
      recoil([14, 9], 0, -1.6, { as: 'btc' }),
      recoil([11.1, 18], 0, -1.6, { as: 'hand' }),
    ],
  },
  'bitcoin-04': {
    verb: 'the stacked coins rise under the still marked disc',
    parts: [
      null,
      null,
      grow([8, 6], 'Y', { as: 'coinTop', delay: 0.08, dur: 0.5 }),
      grow([8, 14], 'Y', { as: 'stack', dur: 0.54 }),
    ],
  },
  'bitcoin-bag': {
    verb: 'the bag lifts from its base, B and handles riding with the sack',
    parts: [
      around([12, 22], [12, 14.5], [0, -5, 4, -1.5, 0], { as: 'sack', dur: 0.74 }),
      around([12, 22], [12, 14.5], [0, -5, 4, -1.5, 0], { as: 'btc', dur: 0.74 }),
      around([12, 22], [12, 4.5], [0, -5, 4, -1.5, 0], { as: 'handles', dur: 0.74 }),
    ],
  },
  'bitcoin-circle': {
    verb: 'the B rewrites inside the still circle',
    parts: [null, { as: 'btc', origin: [12, 12], ...retrace({ dur: 0.64 }) }],
  },
  'bitcoin-cloud': {
    verb: 'the B drops into the still cloud',
    parts: [null, arrive([12, 17], 0, -1.8, { as: 'btc', dur: 0.56 })],
  },
  'bitcoin-cpu': {
    verb: 'the B computes on the still die, pins holding',
    parts: [null, compute([12, 12], { as: 'btc', dur: 0.56 }), null],
  },
  'bitcoin-credit-card': {
    verb: 'the B stamps the still card, stripe holding',
    parts: [null, null, stamp([18, 16.5], { as: 'btc', dur: 0.48 })],
  },
  'bitcoin-database': {
    verb: 'the B stamps the still cylinder',
    parts: [null, null, stamp([17.5, 18], { as: 'btc', dur: 0.48 }), null],
  },
  'bitcoin-down-01': {
    verb: 'the download arrow commits off the still coin',
    parts: [null, nudge([12, 19.8], 0, 2.2, { as: 'arrow', dur: 0.52 }), null],
  },
  'bitcoin-down-02': {
    verb: 'the incoming arrow redraws onto the still lower coin',
    parts: [null, { as: 'arrow', origin: [12, 5.3], ...retrace({ dur: 0.64 }) }, null],
  },
  'bitcoin-down': {
    verb: 'the B drops with the arrow, the coin holding',
    parts: [
      null,
      recoil([12, 19.8], 0, 2, { as: 'arrow' }),
      recoil([12, 8.5], 0, 2, { as: 'btc' }),
    ],
  },
  'bitcoin-ellipse': {
    verb: 'the whole B glyph stamps as one piece inside the still ring',
    parts: [
      null,
      stamp([12, 12], { as: 'stem', dur: 0.5 }),
      stamp([12, 12], { as: 'serifT', dur: 0.5 }),
      stamp([12, 12], { as: 'serifB', dur: 0.5 }),
      stamp([12, 12], { as: 'bowlLo', dur: 0.5 }),
      stamp([12, 12], { as: 'bowlHi', dur: 0.5 }),
    ],
  },
  'bitcoin-eye': {
    verb: 'the three lashes catch, B and lid holding',
    parts: [twinkle([12, 4.5], { as: 'lashes', dur: 0.56 }), null, null],
  },
  'bitcoin-filter': {
    verb: 'the B stamps inside the still funnel',
    parts: [null, stamp([11.5, 6.5], { as: 'btc', dur: 0.48 })],
  },
  'bitcoin-flashdisk': {
    verb: 'the B stamps the still stick, connector holding',
    parts: [null, stamp([15.5, 17.5], { as: 'btc', dur: 0.48 }), null, null],
  },
  'bitcoin-graph': {
    verb: 'the three columns grow from the floor in reading order, the B holding the peak',
    parts: [
      grow([11.5, 21.5], 'Y', { as: 'mid', delay: 0.08, dur: 0.54 }),
      grow([18.5, 21.5], 'Y', { as: 'right', delay: 0.14, dur: 0.54 }),
      null,
      grow([4.5, 21.5], 'Y', { as: 'left', dur: 0.54 }),
    ],
  },
  'bitcoin-invoice': {
    verb: 'the whole receipt presents from its foot, curl paper and B locked together',
    parts: [
      around([11, 22], [20, 5], [0, -6, 5, -2, 0], { as: 'curl', dur: 0.74 }),
      around([11, 22], [11, 12], [0, -6, 5, -2, 0], { as: 'sheet', dur: 0.74 }),
      around([11, 22], [10, 10.5], [0, -6, 5, -2, 0], { as: 'btc', dur: 0.74 }),
    ],
  },
  'bitcoin-key': {
    verb: 'the key turns in the still hole, bow bit and ward riding together',
    parts: [
      around([8, 7], [8, 12], [0, 14, -8, 3, 0], { as: 'bow', dur: 0.72 }),
      around([8, 7], [18, 16], [0, 14, -8, 3, 0], { as: 'bit', dur: 0.72 }),
      around([8, 7], [8, 7], [0, 14, -8, 3, 0], { as: 'ward', dur: 0.72 }),
    ],
  },
  'bitcoin-location': {
    verb: 'pin and B drop onto the still ground as one marker',
    parts: [
      null,
      arrive([12, 9], 0, 1.8, { as: 'btc', dur: 0.56 }),
      arrive([12, 10.5], 0, 1.8, { as: 'pin', dur: 0.56 }),
    ],
  },
  'bitcoin-lock': {
    verb: 'the shackle snaps down onto the still body, B holding',
    parts: [null, arrive([12, 5.5], 0, -1.5, { as: 'shackle', dur: 0.52 }), null],
  },
  'bitcoin-mail': {
    verb: 'the flap closes onto the still envelope, B already seated',
    parts: [
      null,
      null,
      arrive([12, 7], 0, 1.4, { as: 'flap', dur: 0.54 }),
      null,
    ],
  },
  'bitcoin-mind': {
    verb: 'the B thinks inside the still head',
    parts: [null, compute([10.5, 10], { as: 'btc', dur: 0.56 })],
  },
  'bitcoin-money-01': {
    verb: 'the whole bill thumbs from its left edge, B and all four corner cuts riding with the paper',
    parts: [
      around([2, 12], [12, 12], [0, -18, 8, -2.5, 0], { as: 'note', dur: 0.74 }),
      around([2, 12], [4.5, 6.5], [0, -18, 8, -2.5, 0], { as: 'cutTL', dur: 0.74 }),
      around([2, 12], [19.5, 6.5], [0, -18, 8, -2.5, 0], { as: 'cutTR', dur: 0.74 }),
      around([2, 12], [19.5, 17.5], [0, -18, 8, -2.5, 0], { as: 'cutBR', dur: 0.74 }),
      around([2, 12], [4.5, 17.5], [0, -18, 8, -2.5, 0], { as: 'cutBL', dur: 0.74 }),
      around([2, 12], [12, 12], [0, -18, 8, -2.5, 0], { as: 'btc', dur: 0.74 }),
    ],
  },
  'bitcoin-money-02': {
    verb: 'the band rewrites across the still note, then the B seats',
    parts: [
      stamp([12, 12], { as: 'btc', delay: 0.14, dur: 0.46 }),
      { as: 'band', origin: [12, 12], ...retrace({ dur: 0.6 }) },
      null,
    ],
  },
}
