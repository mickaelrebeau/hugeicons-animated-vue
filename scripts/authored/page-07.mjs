/**
 * Page 7 — backpack-03 → bean.
 *
 * Each spec is a verb read off the name and the dump geometry. Variants of a
 * family get different jobs when the primitives differ. battery-charging-01
 * (handcrafted) is absent.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  arrive,
  beat,
  draw,
  grow,
  nudge,
  shake,
  stamp,
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

/** Bang mark: stem stretches, the dot answers a beat later. */
const bang = (stemOrigin, dotOrigin, o = {}) => [
  {
    as: 'stem',
    origin: stemOrigin,
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(-0.8px) scaleY(1.1)',
      'translateY(0.3px) scaleY(0.94)',
      'translateY(0px) scaleY(1)',
    ],
    times: [0, 0.24, 0.56, 1],
    ease: OUT,
    dur: 0.56,
    ...o,
  },
  {
    as: 'dot',
    origin: dotOrigin,
    transform: [
      'translateY(0px) scale(1)',
      'translateY(0.9px) scale(0.86)',
      'translateY(-1px) scale(1.2)',
      'translateY(0px) scale(1)',
    ],
    times: [0, 0.18, 0.48, 1],
    ease: OUT,
    dur: 0.56,
    delay: 0.04,
    ...o,
  },
]

/** A dollar (or ¢) sliding as one glyph — every primitive gets the same track. */
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
  ease: E5,
  dur: 0.7,
  ...o,
})

/** A battery cell that drains then refills from its floor. */
const fillCell = (origin, o = {}) => ({
  as: 'cell',
  origin,
  transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.1)', 'scaleY(1)'],
  times: [0, 0.16, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.62,
  ...o,
})

/** A barcode bar that scans from its floor. */
const scan = (origin, peak, o = {}) => ({
  as: 'bar',
  origin,
  transform: ['scaleY(1)', `scaleY(${peak})`, 'scaleY(1.06)', 'scaleY(1)'],
  times: [0, 0.28, 0.68, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.58,
  ...o,
})

/** The same translate on every attached primitive — a suitcase on a belt. */
const slide = (origin, dx, o = {}) => ({
  origin,
  transform: [
    'translateX(0px)',
    `translateX(${(dx * 0.2).toFixed(2)}px)`,
    `translateX(${dx}px)`,
    `translateX(${(-dx * 0.12).toFixed(2)}px)`,
    'translateX(0px)',
  ],
  times: T5,
  ease: E5,
  dur: 0.72,
  ...o,
})

export default {
  'backpack-03': {
    verb: 'the top pocket lid shuts from the hinge, then both snap buttons stamp',
    parts: [
      grow([12, 5], 'Y', { as: 'pocket', dur: 0.56 }),
      null,
      null,
      null,
      stamp([9, 14], { as: 'snapL', delay: 0.14, dur: 0.42 }),
      stamp([15, 14], { as: 'snapR', delay: 0.2, dur: 0.42 }),
      null,
    ],
  },
  backpack: {
    verb: 'the waist zip redraws, then both hip straps clip onto the still bag',
    parts: [
      null,
      { as: 'zip', origin: [12, 15.5], ...retrace({ dur: 0.62 }) },
      null,
      nudge([12, 4], 0, -1.4, { as: 'handle', delay: 0.08, dur: 0.5 }),
      arrive([3.5, 16], -1.4, 0, { as: 'strapL', delay: 0.16 }),
      arrive([20.5, 16], 1.4, 0, { as: 'strapR', delay: 0.22 }),
    ],
  },
  'backward-01': {
    verb: 'the skip chevron jumps left, the end bar compressing as it catches',
    parts: [
      nudge([10, 12], -2.6, 0, { as: 'head', dur: 0.52 }),
      {
        as: 'bar',
        origin: [20, 12],
        transform: ['scaleY(1)', 'scaleY(0.86)', 'scaleY(1.06)', 'scaleY(1)'],
        times: [0, 0.4, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.52,
        delay: 0.06,
      },
    ],
  },
  'backward-02': {
    verb: 'the rear chevron chases the front one left, then they stack again',
    parts: [
      nudge([7, 12], -2.2, 0, { as: 'rear', dur: 0.5 }),
      nudge([17, 12], -2.2, 0, { as: 'front', delay: 0.08, dur: 0.5 }),
    ],
  },
  backward: {
    verb: 'the end bar punches left first, then the chevron follows into skip',
    parts: [
      nudge([10, 12], -2.6, 0, { as: 'head', delay: 0.08, dur: 0.52 }),
      nudge([20, 12], -1.6, 0, { as: 'bar', dur: 0.46 }),
    ],
  },
  bacteria: {
    verb: 'the three nuclei twinkle in the still dish, then both cilia wriggle',
    parts: [
      {
        as: 'ciliumA',
        origin: [8, 12.5],
        transform: ['rotate(0deg)', 'rotate(12deg)', 'rotate(-10deg)', 'rotate(3deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.7,
        delay: 0.12,
      },
      {
        as: 'ciliumB',
        origin: [15, 16.5],
        transform: ['rotate(0deg)', 'rotate(-14deg)', 'rotate(11deg)', 'rotate(-3deg)', 'rotate(0deg)'],
        times: T5,
        ease: E5,
        dur: 0.7,
        delay: 0.16,
      },
      null,
      twinkle([15, 8], { as: 'org', dur: 0.5 }),
      twinkle([9, 17], { as: 'dotA', delay: 0.08, dur: 0.46 }),
      twinkle([19, 13], { as: 'dotB', delay: 0.14, dur: 0.46 }),
      twinkle([8, 8], { as: 'dotC', delay: 0.2, dur: 0.46 }),
    ],
  },
  'badge-alert': {
    verb: 'the bang stem stretches, the dot answers, the badge holding still',
    parts: [null, ...bang([12, 10], [12, 15.8])],
  },
  'badge-cent': {
    verb: 'the whole cent glyph drops as one piece, C and stem locked together',
    parts: [
      null,
      ticket([12, 12], 1.8, { as: 'cee' }),
      ticket([12, 12], 1.8, { as: 'stem' }),
    ],
  },
  'badge-check': {
    verb: 'the check writes on the still badge from tail to tip',
    parts: [{ as: 'tick', origin: [12, 12], ...retrace({ dur: 0.56 }) }, null],
  },
  'badge-dollar-sign': {
    verb: 'the whole dollar glyph drops as one piece, S and stems locked together',
    parts: [
      null,
      ticket([12, 12], 1.8, { as: 'ess' }),
      ticket([12, 12], 1.8, { as: 'stems' }),
    ],
  },
  'badge-euro': {
    verb: 'the euro glyph rewrites itself on the still badge',
    parts: [null, { as: 'euro', origin: [11.3, 12], ...retrace({ dur: 0.66 }) }],
  },
  'badge-indian-rupee': {
    verb: 'the rupee bars rewrite on the still badge',
    parts: [null, { as: 'rupee', origin: [12.5, 12], ...retrace({ dur: 0.66 }) }],
  },
  'badge-info': {
    verb: 'the i-dot stamps first, then the stem grows down from it',
    parts: [
      null,
      grow([12, 12], 'Y', { as: 'stem', delay: 0.1, dur: 0.5 }),
      stamp([12, 8.3], { as: 'dot', dur: 0.42 }),
    ],
  },
  'badge-japanese-yen': {
    verb: 'the yen glyph rewrites on the still badge',
    parts: [null, { as: 'yen', origin: [12, 12.5], ...retrace({ dur: 0.66 }) }],
  },
  'badge-minus': {
    verb: 'the minus bar pinches short on the still badge, then snaps back',
    parts: [null, grow([12, 12], 'X', { as: 'minus', dur: 0.5 })],
  },
  'badge-percent': {
    verb: 'the slash draws, then both dots stamp onto their corners',
    parts: [
      null,
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.5 }) },
      stamp([9.3, 9.3], { as: 'dotA', delay: 0.14, dur: 0.4 }),
      stamp([14.8, 14.8], { as: 'dotB', delay: 0.2, dur: 0.4 }),
    ],
  },
  'badge-plus': {
    verb: 'the plus stamps onto the still badge',
    parts: [null, stamp([12, 12], { as: 'plus', dur: 0.5 })],
  },
  'badge-pound-sterling': {
    verb: 'the pound glyph rewrites on the still badge',
    parts: [null, { as: 'pound', origin: [11.5, 11.8], ...retrace({ dur: 0.66 }) }],
  },
  'badge-question-mark': {
    verb: 'the hook draws, then the dot stamps under it',
    parts: [
      null,
      { as: 'hook', origin: [12, 10.3], ...retrace({ dur: 0.56 }) },
      stamp([12, 16.8], { as: 'dot', delay: 0.16, dur: 0.4 }),
    ],
  },
  'badge-russian-ruble': {
    verb: 'the ruble glyph rewrites on the still badge',
    parts: [null, { as: 'ruble', origin: [12, 12.5], ...retrace({ dur: 0.66 }) }],
  },
  'badge-swiss-franc': {
    verb: 'the F stem writes, then the two crossbars grow from it',
    parts: [
      null,
      { as: 'stem', origin: [13, 12.5], ...retrace({ dur: 0.5 }) },
      grow([12.5, 11], 'X', { as: 'barA', delay: 0.1, dur: 0.42 }),
      grow([11, 15], 'X', { as: 'barB', delay: 0.16, dur: 0.42 }),
    ],
  },
  'badge-turkish-lira': {
    verb: 'the lira glyph rewrites on the still badge',
    parts: [null, { as: 'lira', origin: [12, 12], ...retrace({ dur: 0.66 }) }],
  },
  'badge-x': {
    verb: 'the x draws on the still badge',
    parts: [{ as: 'x', origin: [12, 12], ...draw({ dur: 0.52 }) }, null],
  },
  badge: {
    verb: 'the empty badge stamps onto the page and seats',
    parts: [stamp([12, 12], { as: 'badge', dur: 0.54 })],
  },
  'badminton-shuttle': {
    verb: 'the cork hits first, then the skirt feathers splay and recover',
    parts: [
      {
        as: 'skirt',
        origin: [12, 17],
        transform: [
          'scaleY(1) scaleX(1)',
          'scaleY(0.9) scaleX(1.08)',
          'scaleY(1.08) scaleX(0.94)',
          'scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [HIT, OUT, OUT],
        dur: 0.62,
        delay: 0.08,
      },
      null,
      grow([12, 17], 'Y', { as: 'vanes', delay: 0.1, dur: 0.5 }),
      {
        as: 'band',
        origin: [12, 12.7],
        transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.94)', 'scaleX(1)'],
        times: [0, 0.32, 0.68, 1],
        ease: [HIT, OUT, OUT],
        dur: 0.56,
        delay: 0.06,
      },
    ],
  },
  badminton: {
    verb: 'racket and shuttle swing from the grip as one piece, then settle',
    parts: [
      around([7, 17], [4.4, 19.6], [0, -12, 8, -3, 0], { as: 'shuttle', dur: 0.72 }),
      around([7, 17], [9.3, 14.8], [0, -12, 8, -3, 0], { as: 'shaft', dur: 0.72 }),
      around([7, 17], [16.2, 7.8], [0, -12, 8, -3, 0], { as: 'head', dur: 0.72 }),
    ],
  },
  'baggage-claim': {
    verb: 'the suitcase rides the still belt left, handle and ribs travelling with the case',
    parts: [
      null,
      slide([12, 12], -2.4, { as: 'case' }),
      slide([17, 12], -2.4, { as: 'ribR' }),
      slide([7, 12], -2.4, { as: 'ribL' }),
      slide([12, 4], -2.4, { as: 'handle' }),
    ],
  },
  'balance-scale': {
    verb: 'the beam tips on the fulcrum, both pans riding with it, then levels',
    parts: [
      null,
      around([12, 5], [12, 5], [0, 8, -7, 2, 0], { as: 'beam', dur: 0.84 }),
      null,
      null,
      around([12, 5], [19, 12.5], [0, 8, -7, 2, 0], { as: 'panR', dur: 0.84 }),
      around([12, 5], [5, 12.5], [0, 8, -7, 2, 0], { as: 'panL', dur: 0.84 }),
    ],
  },
  balloon: {
    verb: 'the balloon sways from the held end of its string, skin glint and tail locked together',
    parts: [
      around([5.5, 22], [12.5, 9.5], [0, -8, 7, -2.5, 0], { as: 'skin', dur: 0.78 }),
      around([5.5, 22], [13.5, 7], [0, -8, 7, -2.5, 0], { as: 'glint', dur: 0.78 }),
      around([5.5, 22], [9, 19.5], [0, -8, 7, -2.5, 0], { as: 'tail', dur: 0.78 }),
    ],
  },
  balloons: {
    verb: 'the three balloons bob on their strings, each skin locked to its tether',
    parts: [
      around([12, 22], [12, 6.5], [0, -5, 6, -2, 0], { as: 'mid', dur: 0.8 }),
      around([18.3, 22], [18.5, 15.5], [0, 6, -5, 2, 0], { as: 'right', dur: 0.8, delay: 0.06 }),
      around([12, 22], [11.5, 16.5], [0, -5, 6, -2, 0], { as: 'stringM', dur: 0.8 }),
      around([18.3, 22], [18.3, 21], [0, 6, -5, 2, 0], { as: 'stringR', dur: 0.8, delay: 0.06 }),
      around([5.8, 22], [5.5, 15.5], [0, -6, 5, -2, 0], { as: 'left', dur: 0.8, delay: 0.1 }),
      around([5.8, 22], [5.8, 21], [0, -6, 5, -2, 0], { as: 'stringL', dur: 0.8, delay: 0.1 }),
    ],
  },
  ban: {
    verb: 'the slash draws through the still ring',
    parts: [null, { as: 'slash', origin: [12, 12], ...draw({ dur: 0.58 }) }],
  },
  banana: {
    verb: 'the fruit hangs from the stem and swells ripe, the inner curve riding with the peel',
    parts: [
      around([20, 2], [16.1, 16.5], [0, 7, -5, 2, 0], { as: 'inner', dur: 0.78 }),
      around([20, 2], [11.2, 9.5], [0, 7, -5, 2, 0], { as: 'neck', dur: 0.78 }),
      around([20, 2], [12.2, 11.3], [0, 7, -5, 2, 0], { as: 'peel', dur: 0.78 }),
    ],
  },
  bandage: {
    verb: 'the four pads stamp onto the dressing, nearest first, the wrap holding',
    parts: [
      null,
      null,
      stamp([14.5, 12], { as: 'padA', dur: 0.4 }),
      stamp([12, 9.5], { as: 'padB', delay: 0.06, dur: 0.4 }),
      stamp([9.5, 12], { as: 'padC', delay: 0.12, dur: 0.4 }),
      stamp([12, 14.5], { as: 'padD', delay: 0.18, dur: 0.4 }),
    ],
  },
  bank: {
    verb: 'the portico nods on the still plinth, lantern columns and pediment riding as one temple',
    parts: [
      around([12, 19], [12, 5.8], [0, 4, -3.5, 1.2, 0], { as: 'lantern', dur: 0.78 }),
      around([12, 19], [7, 14], [0, 4, -3.5, 1.2, 0], { as: 'colsL', dur: 0.78 }),
      around([12, 19], [17, 14], [0, 4, -3.5, 1.2, 0], { as: 'colsR', dur: 0.78 }),
      around([12, 19], [12, 5.5], [0, 4, -3.5, 1.2, 0], { as: 'pediment', dur: 0.78 }),
      null,
    ],
  },
  'banknote-arrow-down': {
    verb: 'the download arrow commits down off the still note',
    parts: [null, nudge([19, 17.5], 0, 2.4, { as: 'arrow', dur: 0.52 }), null, null, null],
  },
  'banknote-arrow-up': {
    verb: 'the upload arrow commits up off the still note',
    parts: [null, nudge([19, 17.5], 0, -2.4, { as: 'arrow', dur: 0.52 }), null, null, null],
  },
  'banknote-x': {
    verb: 'the x draws over the still note',
    parts: [null, { as: 'x', origin: [19.5, 18], ...draw({ dur: 0.52 }) }, null, null, null],
  },
  banknote: {
    verb: 'the serial ticks blink, then the seal stamps the still bill',
    parts: [
      null,
      stamp([12, 12], { as: 'seal', delay: 0.12, dur: 0.46 }),
      grow([5.5, 12], 'X', { as: 'tickL', dur: 0.42 }),
      grow([18.5, 12], 'X', { as: 'tickR', delay: 0.06, dur: 0.42 }),
    ],
  },
  'bar-chart-horizontal': {
    verb: 'the three bars grow from the axis in reading order, the frame holding',
    parts: [
      null,
      grow([7, 16], 'X', { as: 'barC', delay: 0.16, dur: 0.52 }),
      grow([7, 12], 'X', { as: 'barB', delay: 0.08, dur: 0.52 }),
      grow([7, 8], 'X', { as: 'barA', dur: 0.52 }),
    ],
  },
  'bar-chart': {
    verb: 'the three columns play a two-peak phrase from the floor, middle last',
    parts: [
      scan([12, 18], 0.22, { as: 'mid', delay: 0.1, dur: 0.64 }),
      scan([19, 8], 0.28, { as: 'right', delay: 0.16, dur: 0.58 }),
      scan([5, 12], 0.18, { as: 'left', dur: 0.58 }),
    ],
  },
  'bar-code-01': {
    verb: 'the bars scan from the top left to right, then the three digits blink',
    parts: [
      scan([3, 4.5], 0.2, { as: 'b0', dur: 0.5 }),
      scan([7.5, 4.5], 0.2, { as: 'b1', delay: 0.04, dur: 0.5 }),
      scan([12, 4.5], 0.2, { as: 'b2', delay: 0.08, dur: 0.5 }),
      scan([16.5, 4.5], 0.2, { as: 'b3', delay: 0.12, dur: 0.5 }),
      scan([21, 4.5], 0.2, { as: 'b4', delay: 0.16, dur: 0.5 }),
      twinkle([7.5, 20.3], { as: 'd0', delay: 0.28, dur: 0.4 }),
      twinkle([12, 20.3], { as: 'd1', delay: 0.34, dur: 0.4 }),
      twinkle([16.5, 20.3], { as: 'd2', delay: 0.4, dur: 0.4 }),
    ],
  },
  'bar-code-02': {
    verb: 'the thin guards scan while the two thick bars hold as anchors',
    parts: [
      scan([2, 20], 0.18, { as: 'g0', dur: 0.52 }),
      scan([5, 20], 0.18, { as: 'g1', delay: 0.06, dur: 0.52 }),
      scan([15, 20], 0.18, { as: 'g2', delay: 0.18, dur: 0.52 }),
      null,
      null,
    ],
  },
  'bar-code': {
    verb: 'the bars grow from the floor left to right, the digits staying planted',
    parts: [
      scan([3, 20.5], 0.16, { as: 'b0', dur: 0.52 }),
      scan([7.5, 16.5], 0.16, { as: 'b1', delay: 0.05, dur: 0.52 }),
      scan([12, 16.5], 0.16, { as: 'b2', delay: 0.1, dur: 0.52 }),
      scan([16.5, 16.5], 0.16, { as: 'b3', delay: 0.15, dur: 0.52 }),
      scan([21, 20.5], 0.16, { as: 'b4', delay: 0.2, dur: 0.52 }),
      null,
      null,
      null,
    ],
  },
  'barcode-scan': {
    verb: 'the viewfinder corners rewrite, then the three bars scan from the floor',
    parts: [
      { as: 'finder', origin: [12, 12], ...retrace({ dur: 0.64 }) },
      scan([16, 17], 0.2, { as: 'bR', delay: 0.16, dur: 0.48 }),
      scan([12, 13], 0.2, { as: 'bM', delay: 0.12, dur: 0.48 }),
      null,
      scan([8, 17], 0.2, { as: 'bL', delay: 0.08, dur: 0.48 }),
    ],
  },
  barcode: {
    verb: 'the five bars scan from the floor in spatial order, mixed weights included',
    parts: [
      scan([3.5, 19], 0.16, { as: 'b0', dur: 0.52 }),
      scan([16.5, 19], 0.16, { as: 'b3', delay: 0.15, dur: 0.52 }),
      scan([8, 19], 0.16, { as: 'b1', delay: 0.05, dur: 0.52 }),
      scan([12, 19], 0.16, { as: 'b2', delay: 0.1, dur: 0.52 }),
      scan([21, 19], 0.16, { as: 'b4', delay: 0.2, dur: 0.52 }),
    ],
  },
  barns: {
    verb: 'the barn doors cross shut, then the loft window bar seats',
    parts: [
      null,
      { as: 'doors', origin: [12, 17.8], ...draw({ dur: 0.56 }) },
      grow([12, 8.5], 'X', { as: 'loft', delay: 0.16, dur: 0.42 }),
      null,
    ],
  },
  barrel: {
    verb: 'the two hoops snap onto the still cask, top then bottom',
    parts: [
      null,
      null,
      null,
      grow([12, 7], 'X', { as: 'hoopT', dur: 0.5 }),
      grow([12, 17], 'X', { as: 'hoopB', delay: 0.1, dur: 0.5 }),
    ],
  },
  'baseball-bat': {
    verb: 'the bat swings from the grip, the ball popping off the barrel',
    parts: [
      around([4.5, 19.5], [13.2, 10.8], [0, -22, 14, -4, 0], {
        as: 'bat',
        times: [0, 0.32, 0.54, 0.78, 1],
        ease: [INOUT, HIT, OUT, OUT],
        dur: 0.7,
      }),
      around([4.5, 19.5], [4.5, 19.5], [0, -22, 14, -4, 0], {
        as: 'grip',
        times: [0, 0.32, 0.54, 0.78, 1],
        ease: [INOUT, HIT, OUT, OUT],
        dur: 0.7,
      }),
      around([4.5, 19.5], [8.5, 15.5], [0, -22, 14, -4, 0], {
        as: 'tape',
        times: [0, 0.32, 0.54, 0.78, 1],
        ease: [INOUT, HIT, OUT, OUT],
        dur: 0.7,
      }),
      arrive([18.5, 18.5], 1.8, -1.4, { as: 'ball', delay: 0.28, dur: 0.48 }),
    ],
  },
  'baseball-helmet': {
    verb: 'the helmet nods on its brim, then seats',
    parts: [around([12, 21], [12, 12], [0, 6, -5, 2, 0], { as: 'shell', dur: 0.7 }), null],
  },
  baseball: {
    verb: 'both stitch rows rewrite around the still ball',
    parts: [
      null,
      { as: 'stitchL', origin: [7, 17], ...retrace({ dur: 0.64 }) },
      { as: 'stitchR', origin: [17, 7], ...retrace({ dur: 0.64, delay: 0.08 }) },
    ],
  },
  baseline: {
    verb: 'the A drops onto the still baseline and seats',
    parts: [arrive([12, 10.1], 0, -2.2, { as: 'letter', dur: 0.56 }), null],
  },
  bash: {
    verb: 'the prompt chevron redraws, then the cursor bar grows',
    parts: [
      { as: 'prompt', origin: [8, 9], ...retrace({ dur: 0.52 }) },
      grow([12.5, 11], 'X', { as: 'cursor', delay: 0.14, dur: 0.42 }),
      null,
    ],
  },
  'basketball-01': {
    verb: 'the ball turns on its axis, every seam riding with the sphere',
    parts: [
      around([12, 12], [12, 12], [0, 28, 70, 24, 0], { as: 'sphere', dur: 0.8 }),
      around([12, 12], [7.8, 7.8], [0, 28, 70, 24, 0], { as: 'seamA', dur: 0.8 }),
      around([12, 12], [16.2, 16.2], [0, 28, 70, 24, 0], { as: 'seamB', dur: 0.8 }),
      around([12, 12], [10.5, 13.5], [0, 28, 70, 24, 0], { as: 'seamC', dur: 0.8 }),
    ],
  },
  'basketball-02': {
    verb: 'the ball squashes on the floor and rebounds, equator and meridians riding',
    parts: [
      {
        as: 'sphere',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.4px) scaleY(0.88) scaleX(1.08)',
          'translateY(-2.2px) scaleY(1.06) scaleX(0.96)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
      {
        as: 'eq',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.4px) scaleY(0.88) scaleX(1.08)',
          'translateY(-2.2px) scaleY(1.06) scaleX(0.96)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
      {
        as: 'mer',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.4px) scaleY(0.88) scaleX(1.08)',
          'translateY(-2.2px) scaleY(1.06) scaleX(0.96)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
      {
        as: 'sideL',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.4px) scaleY(0.88) scaleX(1.08)',
          'translateY(-2.2px) scaleY(1.06) scaleX(0.96)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
      {
        as: 'sideR',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.4px) scaleY(0.88) scaleX(1.08)',
          'translateY(-2.2px) scaleY(1.06) scaleX(0.96)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
    ],
  },
  'basketball-hoop': {
    verb: 'the net swishes from the rim, the backboard and hoop holding',
    parts: [
      null,
      {
        as: 'net',
        origin: [12, 13],
        transform: [
          'scaleY(1) scaleX(1)',
          'scaleY(0.78) scaleX(1.1)',
          'scaleY(1.12) scaleX(0.94)',
          'scaleY(1) scaleX(1)',
        ],
        times: [0, 0.3, 0.64, 1],
        ease: [HIT, OUT, OUT],
        dur: 0.64,
      },
      null,
      {
        as: 'band',
        origin: [12, 16.5],
        transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.94)', 'scaleX(1)'],
        times: [0, 0.3, 0.64, 1],
        ease: [HIT, OUT, OUT],
        dur: 0.64,
      },
    ],
  },
  basketball: {
    verb: 'the ball bounces, every seam riding the same squash off the floor',
    parts: [
      {
        as: 'sphere',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.6px) scaleY(0.86) scaleX(1.1)',
          'translateY(-2.6px) scaleY(1.08) scaleX(0.94)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
      {
        as: 'seamA',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.6px) scaleY(0.86) scaleX(1.1)',
          'translateY(-2.6px) scaleY(1.08) scaleX(0.94)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
      {
        as: 'seamB',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.6px) scaleY(0.86) scaleX(1.1)',
          'translateY(-2.6px) scaleY(1.08) scaleX(0.94)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
      {
        as: 'seamC',
        origin: [12, 22],
        transform: [
          'translateY(0px) scaleY(1) scaleX(1)',
          'translateY(1.6px) scaleY(0.86) scaleX(1.1)',
          'translateY(-2.6px) scaleY(1.08) scaleX(0.94)',
          'translateY(0px) scaleY(1) scaleX(1)',
        ],
        times: [0, 0.28, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
    ],
  },
  bath: {
    verb: 'the faucet drips twice, the spout riding the tap, the tub holding',
    parts: [
      null,
      around([5, 11], [7.5, 7], [0, -8, 6, -2, 0], { as: 'tap', dur: 0.7 }),
      around([5, 11], [10, 5], [0, -8, 6, -2, 0], { as: 'spout', dur: 0.7 }),
      null,
    ],
  },
  'bathtub-01': {
    verb: 'water fills the still tub from the rim, then the faucet nods a drip',
    parts: [
      null,
      grow([12, 12], 'Y', { as: 'bowl', dur: 0.64 }),
      null,
      around([4, 12], [6.5, 7.5], [0, -10, 7, -2, 0], { as: 'tap', delay: 0.12, dur: 0.6 }),
      around([4, 12], [9.3, 5], [0, -10, 7, -2, 0], { as: 'spout', delay: 0.12, dur: 0.6 }),
    ],
  },
  'bathtub-02': {
    verb: 'the overflow rim redraws, then the faucet handle turns',
    parts: [
      { as: 'rim', origin: [12, 10.5], ...retrace({ dur: 0.6 }) },
      null,
      null,
      around([6.5, 9], [6.5, 6], [0, 16, -10, 0], {
        as: 'handle',
        times: [0, 0.4, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.62,
        delay: 0.1,
      }),
    ],
  },
  bathtub: {
    verb: 'the faucet handle turns, spout riding with it, the tub staying put',
    parts: [
      null,
      null,
      null,
      around([4, 12], [6.5, 7.5], [0, 14, -8, 0], {
        as: 'tap',
        times: [0, 0.4, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.64,
      }),
      around([4, 12], [9.3, 5], [0, 14, -8, 0], {
        as: 'spout',
        times: [0, 0.4, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.64,
      }),
    ],
  },
  'batteries-energy': {
    verb: 'the bolt stamps the jumper, then both packs fill from the left of each cell',
    parts: [
      stamp([12, 6], { as: 'bolt', dur: 0.46 }),
      null,
      null,
      grow([16, 19], 'X', { as: 'rLo', delay: 0.16, dur: 0.5 }),
      grow([16, 16], 'X', { as: 'rHi', delay: 0.1, dur: 0.5 }),
      null,
      grow([2, 19], 'X', { as: 'lLo', delay: 0.16, dur: 0.5 }),
      grow([2, 16], 'X', { as: 'lHi', delay: 0.1, dur: 0.5 }),
    ],
  },
  'battery-charging-02': {
    verb: 'the through-bolt stamps the open shell, the nipple holding',
    parts: [null, stamp([10, 12], { as: 'bolt', dur: 0.52 }), null],
  },
  'battery-charging': {
    verb: 'the bolt stamps inside the closed cell, then the nipple answers',
    parts: [
      null,
      stamp([10.3, 12], { as: 'bolt', dur: 0.5 }),
      beat([20.5, 12], { delay: 0.16, dur: 0.42 }),
    ],
  },
  'battery-eco-charging': {
    verb: 'the leaf stamps the open cell, the nipple holding',
    parts: [null, null, stamp([10.5, 12], { as: 'leaf', dur: 0.54 })],
  },
  'battery-empty': {
    verb: 'the hollow shell pinches, then the nipple seats on the empty cell',
    parts: [
      {
        as: 'shell',
        origin: [10.5, 12],
        transform: ['scaleY(1)', 'scaleY(0.9)', 'scaleY(1.04)', 'scaleY(1)'],
        times: [0, 0.32, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.56,
      },
      arrive([20.5, 12], 1.4, 0, { as: 'nipple', delay: 0.12 }),
    ],
  },
  'battery-full': {
    verb: 'four cells refill from the floor left to right, the shell holding',
    parts: [
      null,
      null,
      fillCell([6, 14], { delay: 0 }),
      fillCell([9, 14], { delay: 0.06 }),
      fillCell([12, 14], { delay: 0.12 }),
      fillCell([15, 14], { delay: 0.18 }),
    ],
  },
  'battery-low': {
    verb: 'the last cell drains and struggles back, the shell holding',
    parts: [null, null, fillCell([6, 14], { dur: 0.7 })],
  },
  'battery-medium-01': {
    verb: 'two cells refill left then right from the floor',
    parts: [null, null, fillCell([6, 14]), fillCell([9, 14], { delay: 0.1 })],
  },
  'battery-medium-02': {
    verb: 'three cells refill left to right from the floor',
    parts: [
      null,
      null,
      fillCell([6, 14]),
      fillCell([9, 14], { delay: 0.08 }),
      fillCell([12, 14], { delay: 0.16 }),
    ],
  },
  'battery-medium': {
    verb: 'both cells refill together as a pack, then settle',
    parts: [null, null, fillCell([6, 14]), fillCell([9, 14])],
  },
  'battery-plus': {
    verb: 'the plus stamps the open cell, the nipple holding',
    parts: [null, null, stamp([10.5, 12], { as: 'plus', dur: 0.5 })],
  },
  'battery-warning': {
    verb: 'the bang stem stretches, the dot answers, the open cell holding',
    parts: [null, null, ...bang([10.5, 10], [10.5, 15.7])],
  },
  battery: {
    verb: 'the nipple seats onto the still empty shell',
    parts: [null, arrive([21, 12], 1.6, 0, { as: 'nipple', dur: 0.52 })],
  },
  'bbq-grill': {
    verb: 'heat shimmers off the lid, then the three legs take the weight together',
    parts: [
      around([12, 15], [7.5, 18.5], [0, 4, -3, 1, 0], { as: 'legL', delay: 0.16, dur: 0.56 }),
      around([12, 15], [16.5, 18.5], [0, -4, 3, -1, 0], { as: 'legR', delay: 0.16, dur: 0.56 }),
      around([12, 15], [12, 18.5], [0, 2, -2, 0.5, 0], { as: 'legM', delay: 0.16, dur: 0.56 }),
      {
        as: 'heat',
        origin: [12, 4],
        transform: [
          'translateY(0px) scaleY(1)',
          'translateY(-1.6px) scaleY(1.14)',
          'translateY(0.4px) scaleY(0.9)',
          'translateY(0px) scaleY(1)',
        ],
        times: [0, 0.34, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.66,
      },
      null,
      beat([12, 11.5], { delay: 0.08, dur: 0.46 }),
      null,
    ],
  },
  'beach-02': {
    verb: 'the umbrella canopy opens from the pole, then the sun stamps',
    parts: [
      null,
      grow([9.5, 6.5], 'X', { as: 'canopy', dur: 0.58 }),
      null,
      stamp([19, 5], { as: 'sun', delay: 0.16, dur: 0.44 }),
    ],
  },
  beach: {
    verb: 'the umbrella canopy opens from the pole, the shore line holding',
    parts: [
      null,
      grow([11, 6.3], 'X', { as: 'canopy', dur: 0.6 }),
      { as: 'wave', origin: [12, 16.8], ...retrace({ delay: 0.12, dur: 0.56 }) },
      null,
    ],
  },
  beaker: {
    verb: 'the whole beaker tips from its base to pour, the meniscus riding with the glass',
    parts: [
      around([12, 21], [12.1, 12], [0, -8, 12, -3, 0], { as: 'glass', dur: 0.78 }),
      around([12, 21], [11, 14], [0, -8, 12, -3, 0], { as: 'fill', dur: 0.78 }),
    ],
  },
  'bean-off': {
    verb: 'the slash draws through, the bean recoiling off the cut',
    parts: [
      {
        as: 'bean',
        origin: [12, 12],
        transform: [
          'translate(0px, 0px)',
          'translate(-0.8px, -0.6px)',
          'translate(0.3px, 0.2px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.28, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.6,
        delay: 0.08,
      },
      {
        as: 'cleft',
        origin: [9.2, 9.3],
        transform: [
          'translate(0px, 0px)',
          'translate(-0.8px, -0.6px)',
          'translate(0.3px, 0.2px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.28, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.6,
        delay: 0.08,
      },
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.56 }) },
    ],
  },
  bean: {
    verb: 'the cleft highlight rewrites across the still bean',
    parts: [null, { as: 'cleft', origin: [9.3, 9.3], ...retrace({ dur: 0.64 }) }],
  },
}
