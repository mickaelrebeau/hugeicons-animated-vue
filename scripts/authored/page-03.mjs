/**
 * Page 3 — album-not-found-02 → analytics-up.
 *
 * Every icon is choreographed against its own name, geometry and direction.
 * `parts` is positional: one entry per SVG primitive, `null` keeps it static.
 * alert-circle (handcrafted) is deliberately absent.
 */

import { OUT, INOUT, arrive, beat, compute, draw, shake, stamp, sweep, twinkle } from './_kit.mjs'

/** Bang mark: stem stretches, the dot answers a beat later. */
const bang = (stemOrigin, dotOrigin, o = {}) => [
  {
    as: 'stem',
    origin: stemOrigin,
    transform: ['translateY(0px) scaleY(1)', 'translateY(-0.8px) scaleY(1.1)', 'translateY(0.3px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    times: [0, 0.24, 0.56, 1],
    ease: OUT,
    dur: 0.56,
    ...o,
  },
  {
    as: 'dot',
    origin: dotOrigin,
    transform: ['translateY(0px) scale(1)', 'translateY(0.9px) scale(0.86)', 'translateY(-1px) scale(1.2)', 'translateY(0px) scale(1)'],
    times: [0, 0.18, 0.48, 1],
    ease: OUT,
    dur: 0.56,
    delay: 0.04,
    ...o,
  },
]

/** A bar that grows from a named origin (the edge it is aligned to). */
const grow = (origin, axis, o = {}) => ({
  as: 'bar',
  origin,
  transform: [`scale${axis}(1)`, `scale${axis}(0.22)`, `scale${axis}(1.08)`, `scale${axis}(1)`],
  times: [0, 0.14, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.58,
  ...o,
})

const dim = (origin, o = {}) => ({
  as: 'print',
  origin,
  transform: ['scale(1)', 'scale(1)', 'scale(0.95)', 'scale(0.96)', 'scale(1)'],
  opacity: [1, 1, 0.35, 0.4, 1],
  times: [0, 0.3, 0.5, 0.72, 1],
  ease: [OUT, OUT, 'linear', INOUT],
  dur: 0.88,
  ...o,
})

export default {
  'album-not-found-02': {
    verb: 'the slash cuts the stack, the hill breaks, and the sun goes out',
    parts: [
      { as: 'hill', origin: [8, 14], transform: ['scale(1)', 'scale(1)', 'scale(0.92)', 'scale(1)'], opacity: [1, 1, 0.3, 1], times: [0, 0.3, 0.54, 1], ease: [OUT, OUT, INOUT], dur: 0.88 },
      dim([14, 14], { as: 'printBack', delay: 0.04 }),
      dim([10, 10], { as: 'printFront' }),
      { as: 'bar', ...draw({ dur: 0.88 }) },
      { as: 'sun', origin: [13, 7], transform: ['scale(1)', 'scale(1)', 'scale(0)', 'scale(1.28)', 'scale(1)'], times: [0, 0.28, 0.48, 0.78, 1], ease: OUT, dur: 0.88 },
    ],
  },
  'album-not-found': {
    verb: 'the ridge splits under the slash and both prints go dim',
    parts: [
      dim([14, 14], { as: 'printBack', delay: 0.04 }),
      dim([10, 10], { as: 'printFront' }),
      { as: 'ridge', origin: [11.5, 13.5], transform: ['scale(1)', 'scale(1)', 'scaleX(0.7)', 'scale(1)'], opacity: [1, 1, 0.28, 1], times: [0, 0.3, 0.54, 1], ease: [OUT, OUT, INOUT], dur: 0.88 },
      { as: 'bar', ...draw({ dur: 0.88 }) },
    ],
  },
  album: {
    verb: 'the disc turns a quarter in its sleeve and the cutout catches the light',
    parts: [
      beat([12, 12], { delay: 0.12 }),
      { as: 'cutout', origin: [14, 3], transform: ['rotate(0deg)', 'rotate(18deg)', 'rotate(-4deg)', 'rotate(0deg)'], times: [0, 0.48, 0.78, 1], ease: OUT, dur: 0.78 },
    ],
  },

  // Alerts: same bang as alert-circle, but each body rattles on its own footing.
  'alert-01': {
    verb: 'the triangle rocks on its base, the inverted bang hanging from the apex',
    parts: [
      shake([12, 21], { dur: 0.62 }),
      { as: 'stem', origin: [12, 13], transform: ['scaleY(1)', 'scaleY(0.78)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.62, delay: 0.06 },
      { as: 'dot', origin: [12, 9.25], transform: ['scale(1)', 'scale(0.7)', 'scale(1.28)', 'scale(1)'], times: [0, 0.22, 0.56, 1], ease: OUT, dur: 0.62 },
    ],
  },
  'alert-02': {
    verb: 'the triangle hops on its tip and the bang drops then springs — same beat as alert-circle',
    parts: [
      { as: 'frame', origin: [12, 21], transform: ['translateY(0px) scale(1)', 'translateY(-1.2px) scale(0.97)', 'translateY(0.4px) scale(1.03)', 'translateY(0px) scale(1)'], times: [0, 0.22, 0.54, 1], ease: OUT, dur: 0.56 },
      ...bang([12, 12], [12, 16.75]),
    ],
  },
  'alert-diamond': {
    verb: 'the diamond tips on its bottom point, the bang rattling inside',
    parts: [
      { as: 'frame', origin: [12, 22], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(4.5deg)', 'rotate(-1.4deg)', 'rotate(0deg)'], times: [0, 0.22, 0.48, 0.74, 1], ease: OUT, dur: 0.64 },
      ...bang([12, 12], [12, 15.75], { delay: 0.06 }),
    ],
  },
  'alert-square': {
    verb: 'the sign rattles left-right on its nails, the bang keeping time',
    parts: [
      { as: 'frame', origin: [12, 12], transform: ['translateX(0px)', 'translateX(-1.1px)', 'translateX(0.9px)', 'translateX(-0.35px)', 'translateX(0px)'], times: [0, 0.18, 0.42, 0.68, 1], ease: OUT, dur: 0.58 },
      ...bang([12, 12], [12, 15.75]),
    ],
  },
  alert: {
    verb: 'the triangle double-shakes — two warnings, one after the other',
    parts: [
      { as: 'frame', origin: [12, 21], transform: ['rotate(0deg)', 'rotate(-5deg)', 'rotate(4deg)', 'rotate(-4deg)', 'rotate(1.4deg)', 'rotate(0deg)'], times: [0, 0.16, 0.34, 0.54, 0.76, 1], ease: OUT, dur: 0.72 },
      { as: 'stem', origin: [12, 13], transform: ['scaleY(1)', 'scaleY(0.82)', 'scaleY(1.12)', 'scaleY(0.9)', 'scaleY(1)'], times: [0, 0.2, 0.42, 0.66, 1], ease: OUT, dur: 0.72 },
      { as: 'dot', origin: [12, 9.25], transform: ['scale(1)', 'scale(0.7)', 'scale(1.24)', 'scale(0.82)', 'scale(1)'], times: [0, 0.18, 0.4, 0.64, 1], ease: OUT, dur: 0.72 },
    ],
  },

  algorithm: {
    verb: 'the chip computes, current runs down the stem, then the three nodes light left to right',
    parts: [
      compute([12, 7], { delay: 0.04 }),
      { as: 'nodeLeft', origin: [4.5, 20.5], transform: ['scale(1)', 'scale(0.4)', 'scale(1.16)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.22 },
      { as: 'nodeMid', origin: [12, 20.5], transform: ['scale(1)', 'scale(0.4)', 'scale(1.16)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.32 },
      { as: 'stem', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      { as: 'bus', origin: [12, 19], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.18 },
      { as: 'nodeRight', origin: [19.5, 20.5], transform: ['scale(1)', 'scale(0.4)', 'scale(1.16)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.42 },
    ],
  },
  'alien-01': {
    verb: 'the left eye closes first, then the right, and the mouth opens on a tilted head',
    parts: [
      { as: 'eyeLeft', origin: [8, 12], transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52 },
      { as: 'eyeRight', origin: [16, 12], transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.14 },
      { as: 'mouth', origin: [12, 18], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.2)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.54, delay: 0.22 },
      { as: 'head', origin: [12, 22], transform: ['rotate(0deg)', 'rotate(-3deg)', 'rotate(1.6deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.72 },
    ],
  },
  'alien-02': {
    verb: 'the antennae twitch, the single eye blinks, and the mouth-dot answers',
    parts: [
      { as: 'eye', origin: [12, 10], transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.16 },
      { as: 'antennaRight', origin: [19, 2], transform: ['rotate(0deg)', 'rotate(12deg)', 'rotate(-4deg)', 'rotate(0deg)'], times: [0, 0.3, 0.64, 1], ease: OUT, dur: 0.5 },
      { as: 'antennaLeft', origin: [5, 2], transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.3, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.08 },
      { as: 'head', origin: [12, 12], transform: ['scale(1)', 'scale(0.978)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.1 },
      { as: 'mouth', origin: [12, 17], transform: ['scale(1)', 'scale(0.4)', 'scale(1.4)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.28 },
    ],
  },
  alien: {
    verb: 'the head floats up and both eyes blink together — a hover, not a tilt',
    parts: [
      { as: 'eyeLeft', origin: [8, 12], transform: ['scaleY(1)', 'scaleY(0.14)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      { as: 'eyeRight', origin: [16, 12], transform: ['scaleY(1)', 'scaleY(0.14)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      { as: 'mouth', origin: [12, 18], transform: ['scaleX(1)', 'scaleX(1.25)', 'scaleX(1)'], times: [0, 0.42, 1], ease: OUT, dur: 0.56, delay: 0.2 },
      { as: 'head', origin: [12, 22], transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: [OUT, INOUT, OUT], dur: 0.72 },
    ],
  },

  // Align: every object travels toward the named edge, never the opposite one.
  'align-bottom': {
    verb: 'both columns drop onto the baseline, the short one a beat after the tall',
    parts: [
      arrive([16.5, 16], 0, -2.4, { as: 'short', delay: 0.08 }),
      arrive([7.5, 16], 0, -2.8, { as: 'tall' }),
      { as: 'guide', ...sweep({ dur: 0.7 }) },
    ],
  },
  'align-box-bottom-center': {
    verb: 'the two lines drop to the floor of the box and sit on centre',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([12, 17], 0, -2.6, { as: 'block' }),
    ],
  },
  'align-box-bottom-left': {
    verb: 'the block slides down-left into the corner of the box',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([7, 17], 2.2, -2.2, { as: 'block' }),
    ],
  },
  'align-box-bottom-right': {
    verb: 'the block slides down-right into the corner of the box',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([17, 17], -2.2, -2.2, { as: 'block' }),
    ],
  },
  'align-box-middle-center': {
    verb: 'the block gathers into the dead centre of the box',
    parts: [
      beat([12, 12], { delay: 0.16 }),
      { as: 'block', origin: [12, 12], transform: ['scale(1)', 'scale(1.16)', 'scale(0.94)', 'scale(1)'], times: [0, 0.14, 0.56, 1], ease: [OUT, OUT, OUT], dur: 0.54 },
    ],
  },
  'align-box-middle-left': {
    verb: 'the block slides left to the midline of the box',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([7, 12], 2.6, 0, { as: 'block' }),
    ],
  },
  'align-box-middle-right': {
    verb: 'the block slides right to the midline of the box',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([17, 12], -2.6, 0, { as: 'block' }),
    ],
  },
  'align-box-top-center': {
    verb: 'the two lines rise and pin themselves under the lid, centred',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([12, 7], 0, 2.6, { as: 'block' }),
    ],
  },
  'align-box-top-left': {
    verb: 'the block slides up-left into the corner of the box',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([7, 7], 2.2, 2.2, { as: 'block' }),
    ],
  },
  'align-box-top-right': {
    verb: 'the block slides up-right into the corner of the box',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      arrive([17, 7], -2.2, 2.2, { as: 'block' }),
    ],
  },
  'align-end-horizontal': {
    verb: 'both columns grow down from their tops until they sit on the end guide',
    parts: [
      grow([7.5, 3], 'Y', { as: 'tall' }),
      grow([16.5, 9], 'Y', { as: 'short', delay: 0.08 }),
      { as: 'guide', ...sweep({ dur: 0.72, delay: 0.1 }) },
    ],
  },
  'align-end-vertical': {
    verb: 'both rows grow right from their left edge until they kiss the end guide',
    parts: [
      grow([3, 7.5], 'X', { as: 'long' }),
      grow([9, 16.5], 'X', { as: 'short', delay: 0.08 }),
      { as: 'guide', ...sweep({ dur: 0.72, delay: 0.1 }) },
    ],
  },
  'align-horizontal-center': {
    verb: 'the two bars of different widths collapse onto the centre axis',
    parts: [
      { as: 'tickBottom', origin: [12, 22], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46, delay: 0.16 },
      { as: 'tickMid', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46, delay: 0.08 },
      { as: 'tickTop', origin: [12, 2], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46 },
      { as: 'barShort', origin: [12, 7.5], transform: ['scaleX(1)', 'scaleX(1.22)', 'scaleX(0.92)', 'scaleX(1)'], times: [0, 0.14, 0.56, 1], ease: [OUT, OUT, OUT], dur: 0.54 },
      { as: 'barLong', origin: [12, 16.5], transform: ['scaleX(1)', 'scaleX(1.18)', 'scaleX(0.94)', 'scaleX(1)'], times: [0, 0.14, 0.56, 1], ease: [OUT, OUT, OUT], dur: 0.54, delay: 0.06 },
    ],
  },
  'align-horizontal-distribute-center': {
    verb: 'the two columns push apart from the middle until their centre-ticks line up',
    parts: [
      { as: 'tickRight', origin: [16.5, 12], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.14, 0.56, 1], ease: OUT, dur: 0.5, delay: 0.16 },
      { as: 'tickLeft', origin: [7.5, 12], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.14, 0.56, 1], ease: OUT, dur: 0.5, delay: 0.1 },
      arrive([7.5, 12], 1.8, 0, { as: 'tall' }),
      arrive([16.5, 12], -1.8, 0, { as: 'short', delay: 0.06 }),
    ],
  },
  'align-horizontal-distribute-end': {
    verb: 'each column slides until its right edge sits on its own end-guide',
    parts: [
      arrive([10, 12], 2.2, 0, { as: 'tall' }),
      arrive([19, 12], 2.2, 0, { as: 'short', delay: 0.08 }),
      { as: 'guideLeft', ...sweep({ dur: 0.7 }) },
      { as: 'guideRight', ...sweep({ dur: 0.7, delay: 0.08 }) },
    ],
  },
  'align-horizontal-distribute-start': {
    verb: 'each column slides until its left edge sits on its own start-guide',
    parts: [
      { as: 'guideRight', ...sweep({ dur: 0.7, delay: 0.08 }) },
      { as: 'guideLeft', ...sweep({ dur: 0.7 }) },
      arrive([5, 12], -2.2, 0, { as: 'tall' }),
      arrive([14, 12], -2.2, 0, { as: 'short', delay: 0.08 }),
    ],
  },
  'align-horizontal-justify-center': {
    verb: 'the two columns close in on the centre line from opposite sides',
    parts: [
      { as: 'guide', ...sweep({ dur: 0.7, delay: 0.12 }) },
      arrive([18.5, 12], 2.4, 0, { as: 'short' }),
      arrive([5.5, 12], -2.4, 0, { as: 'tall', delay: 0.06 }),
    ],
  },
  'align-horizontal-justify-end': {
    verb: 'both columns pack right until they rest against the end guide',
    parts: [
      { as: 'guide', ...sweep({ dur: 0.7, delay: 0.1 }) },
      arrive([17, 12], -2.6, 0, { as: 'tall' }),
      arrive([8, 12], -2.6, 0, { as: 'short', delay: 0.08 }),
    ],
  },
  'align-horizontal-justify-start': {
    verb: 'both columns pack left until they rest against the start guide',
    parts: [
      { as: 'guide', ...sweep({ dur: 0.7, delay: 0.1 }) },
      arrive([7, 12], 2.6, 0, { as: 'tall' }),
      arrive([16, 12], 2.6, 0, { as: 'short', delay: 0.08 }),
    ],
  },
  'align-horizontal-space-around': {
    verb: 'the single block breathes between the two rails, equal air on each side',
    parts: [
      { as: 'railRight', origin: [19, 12], transform: ['scaleY(1)', 'scaleY(0.86)', 'scaleY(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.56, delay: 0.1 },
      { as: 'railLeft', origin: [5, 12], transform: ['scaleY(1)', 'scaleY(0.86)', 'scaleY(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.56, delay: 0.1 },
      { as: 'block', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.72)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58 },
    ],
  },
  'align-horizontal-space-between': {
    verb: 'the two columns hug their rails, the gap in the middle opening then settling',
    parts: [
      { as: 'railRight', origin: [19, 12], transform: ['scaleY(1)', 'scaleY(0.86)', 'scaleY(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.54, delay: 0.12 },
      { as: 'railLeft', origin: [5, 12], transform: ['scaleY(1)', 'scaleY(0.86)', 'scaleY(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.54, delay: 0.12 },
      arrive([5, 12], 1.6, 0, { as: 'tall' }),
      arrive([19, 12], -1.6, 0, { as: 'short', delay: 0.06 }),
    ],
  },
  'align-key-object': {
    verb: 'the four handles close in on the key object, then the key stamps',
    parts: [
      { as: 'frame', origin: [12, 12], transform: ['scale(1)', 'scale(1.06)', 'scale(0.97)', 'scale(1)'], times: [0, 0.14, 0.5, 1], ease: OUT, dur: 0.56 },
      { as: 'handleTopRight', origin: [20, 4], transform: ['scale(1)', 'scale(0.4)', 'scale(1.1)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.06 },
      { as: 'handleTopLeft', origin: [4, 4], transform: ['scale(1)', 'scale(0.4)', 'scale(1.1)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46 },
      { as: 'handleBottomLeft', origin: [4, 20], transform: ['scale(1)', 'scale(0.4)', 'scale(1.1)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.12 },
      stamp([17.5, 18.4], { as: 'key', delay: 0.22, dur: 0.54 }),
    ],
  },
  'align-left': {
    verb: 'both rows slide left until they sit on the guide, the short one first',
    parts: [
      arrive([8, 7.5], 2.4, 0, { as: 'short' }),
      arrive([8, 16.5], 2.8, 0, { as: 'long', delay: 0.08 }),
      { as: 'guide', ...sweep({ dur: 0.7 }) },
    ],
  },
  'align-right': {
    verb: 'both rows slide right until they sit on the guide, the short one first',
    parts: [
      arrive([16, 7.5], -2.4, 0, { as: 'short' }),
      arrive([16, 16.5], -2.8, 0, { as: 'long', delay: 0.08 }),
      { as: 'guide', ...sweep({ dur: 0.7 }) },
    ],
  },
  'align-selection': {
    verb: 'the four handles close the marching ants around the selection',
    parts: [
      { as: 'frame', origin: [12, 12], transform: ['scale(1)', 'scale(1.05)', 'scale(0.975)', 'scale(1)'], times: [0, 0.14, 0.5, 1], ease: OUT, dur: 0.56 },
      { as: 'handleTopRight', origin: [20, 4], transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.06 },
      { as: 'handleTopLeft', origin: [4, 4], transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46 },
      { as: 'handleBottomRight', origin: [20, 20], transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.18 },
      { as: 'handleBottomLeft', origin: [4, 20], transform: ['scale(1)', 'scale(0.35)', 'scale(1.12)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46, delay: 0.12 },
    ],
  },
  'align-start-horizontal': {
    verb: 'both columns hang from the top guide and grow downward',
    parts: [
      grow([7.5, 7], 'Y', { as: 'tall' }),
      grow([16.5, 7], 'Y', { as: 'short', delay: 0.08 }),
      { as: 'guide', ...sweep({ dur: 0.7 }) },
    ],
  },
  'align-start-vertical': {
    verb: 'both rows grow right from the start guide',
    parts: [
      grow([7, 7.5], 'X', { as: 'long' }),
      grow([7, 16.5], 'X', { as: 'short', delay: 0.08 }),
      { as: 'guide', ...sweep({ dur: 0.7 }) },
    ],
  },
  'align-top': {
    verb: 'both columns rise to kiss the top guide, the short one a beat later',
    parts: [
      arrive([16.5, 8], 0, 2.4, { as: 'short', delay: 0.08 }),
      arrive([7.5, 8], 0, 2.8, { as: 'tall' }),
      { as: 'guide', ...sweep({ dur: 0.7 }) },
    ],
  },
  'align-vertical-center': {
    verb: 'the two columns of different heights collapse onto the horizon',
    parts: [
      { as: 'short', origin: [16.5, 12], transform: ['scaleY(1)', 'scaleY(1.22)', 'scaleY(0.92)', 'scaleY(1)'], times: [0, 0.14, 0.56, 1], ease: [OUT, OUT, OUT], dur: 0.54 },
      { as: 'tall', origin: [7.5, 12], transform: ['scaleY(1)', 'scaleY(1.18)', 'scaleY(0.94)', 'scaleY(1)'], times: [0, 0.14, 0.56, 1], ease: [OUT, OUT, OUT], dur: 0.54, delay: 0.06 },
      { as: 'tickLeft', origin: [2, 12], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46 },
      { as: 'tickMid', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46, delay: 0.08 },
      { as: 'tickRight', origin: [22, 12], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46, delay: 0.16 },
    ],
  },
  'align-vertical-distribute-center': {
    verb: 'the two rows push apart until their centre-ticks line up',
    parts: [
      { as: 'tickTop', origin: [12, 7.5], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.14, 0.56, 1], ease: OUT, dur: 0.5, delay: 0.1 },
      { as: 'tickBottom', origin: [12, 16.5], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.14, 0.56, 1], ease: OUT, dur: 0.5, delay: 0.16 },
      arrive([12, 16.5], 0, -1.8, { as: 'wide', delay: 0.06 }),
      arrive([12, 7.5], 0, 1.8, { as: 'narrow' }),
    ],
  },
  'align-vertical-distribute-end': {
    verb: 'each row drops until its bottom edge sits on its own end-guide',
    parts: [
      { as: 'guideTop', ...sweep({ dur: 0.7 }) },
      { as: 'guideBottom', ...sweep({ dur: 0.7, delay: 0.08 }) },
      arrive([12, 19], 0, -2.2, { as: 'wide' }),
      arrive([12, 10], 0, -2.2, { as: 'narrow', delay: 0.08 }),
    ],
  },
  'align-vertical-distribute-start': {
    verb: 'each row rises until its top edge sits on its own start-guide',
    parts: [
      { as: 'guideBottom', ...sweep({ dur: 0.7, delay: 0.08 }) },
      { as: 'guideTop', ...sweep({ dur: 0.7 }) },
      arrive([12, 14], 0, 2.2, { as: 'wide' }),
      arrive([12, 5], 0, 2.2, { as: 'narrow', delay: 0.08 }),
    ],
  },
  'align-vertical-justify-center': {
    verb: 'the two rows close in on the horizon from above and below',
    parts: [
      { as: 'guide', ...sweep({ dur: 0.7, delay: 0.12 }) },
      arrive([12, 5.5], 0, -2.4, { as: 'narrow' }),
      arrive([12, 18.5], 0, 2.4, { as: 'wide', delay: 0.06 }),
    ],
  },
  'align-vertical-justify-end': {
    verb: 'both rows pack down until they rest on the end guide',
    parts: [
      { as: 'guide', ...sweep({ dur: 0.7, delay: 0.1 }) },
      arrive([12, 17], 0, -2.6, { as: 'wide' }),
      arrive([12, 8], 0, -2.6, { as: 'narrow', delay: 0.08 }),
    ],
  },
  'align-vertical-justify-start': {
    verb: 'both rows pack up until they rest on the start guide',
    parts: [
      { as: 'guide', ...sweep({ dur: 0.7, delay: 0.1 }) },
      arrive([12, 14], 0, 2.6, { as: 'wide', delay: 0.08 }),
      arrive([12, 5], 0, 2.6, { as: 'narrow' }),
    ],
  },
  'align-vertical-space-around': {
    verb: 'the single block breathes between the two rails, equal air above and below',
    parts: [
      { as: 'block', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58 },
      { as: 'railBottom', origin: [12, 18.5], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.56, delay: 0.1 },
      { as: 'railTop', origin: [12, 5.5], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.56, delay: 0.1 },
    ],
  },
  'align-vertical-space-between': {
    verb: 'the two rows hug their rails, the gap in the middle opening then settling',
    parts: [
      { as: 'railTop', origin: [12, 5], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.54, delay: 0.12 },
      { as: 'railBottom', origin: [12, 19], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.54, delay: 0.12 },
      arrive([12, 19], 0, -1.6, { as: 'wide', delay: 0.06 }),
      arrive([12, 5], 0, 1.6, { as: 'narrow' }),
    ],
  },

  'all-bookmark': {
    verb: 'the back page peels, then the ribbon folds into the saved-state like bookmark-01',
    parts: [
      { as: 'ribbon', origin: [10.5, 5], transform: ['translateY(0px) scaleY(1)', 'translateY(2.2px) scaleY(0.9)', 'translateY(-0.7px) scaleY(1.05)', 'translateY(0px) scaleY(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'page', origin: [21, 2], transform: ['translateX(0px) rotate(0deg)', 'translateX(1.4px) rotate(4deg)', 'translateX(-0.2px) rotate(-0.8deg)', 'translateX(0px) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.62, delay: 0.08 },
    ],
  },
  allah: {
    verb: 'the calligraphy writes itself, the inner lettering a beat after the outer mark',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      { as: 'lettering', ...sweep({ dur: 0.92 }) },
    ],
  },
  alms: {
    verb: 'the coin drops from the upper hand into the open palm',
    parts: [
      { as: 'coin', origin: [13.5, 8.5], transform: ['translateY(0px) scale(1)', 'translateY(3.4px) scale(0.92)', 'translateY(5.2px) scale(0.86)', 'translateY(0px) scale(1)'], opacity: [1, 1, 0.55, 1], times: [0, 0.4, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.78 },
      { as: 'palm', origin: [14, 22], transform: ['translateY(0px)', 'translateY(0px)', 'translateY(0.7px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.42, 0.62, 0.82, 1], ease: OUT, dur: 0.78 },
      { as: 'giver', origin: [8, 6], transform: ['rotate(0deg)', 'rotate(6deg)', 'rotate(-1deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.7 },
    ],
  },
  'alpha-circle': {
    verb: 'the letter writes itself inside a circle that tightens around it',
    parts: [
      { as: 'letter', ...sweep({ dur: 0.86 }) },
      beat([12, 12], { delay: 0.22 }),
    ],
  },
  'alpha-square': {
    verb: 'the letter writes itself inside a square that takes the weight of the stroke',
    parts: [
      { as: 'letter', ...sweep({ dur: 0.86 }) },
      { as: 'frame', origin: [12, 12], transform: ['scale(1)', 'scale(0.97) rotate(-0.8deg)', 'scale(1.015) rotate(0.3deg)', 'scale(1) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.16 },
    ],
  },
  alpha: {
    verb: 'the letter writes itself in one continuous stroke, tail last',
    parts: [{ as: 'letter', ...sweep({ dur: 0.94 }) }],
  },
  'alphabet-arabic': {
    verb: 'the script writes right to left — the isolated letter first, then the joined forms',
    parts: [
      { as: 'mark', origin: [9, 4], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.28 },
      { as: 'tail', ...sweep({ dur: 0.72 }) },
      { as: 'letterMid', ...sweep({ dur: 0.78, delay: 0.1 }) },
      { as: 'letterLeft', ...sweep({ dur: 0.78, delay: 0.2 }) },
    ],
  },
  'alphabet-bangla': {
    verb: 'the matra draws across the top after the body of the letter has landed',
    parts: [
      { as: 'body', ...sweep({ dur: 0.84 }) },
      { as: 'stem', origin: [17, 6], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.62, delay: 0.16 },
      { as: 'flourish', ...sweep({ dur: 0.7, delay: 0.28 }) },
    ],
  },
  'alphabet-chinese': {
    verb: 'the character builds top to bottom: crown, then vertical, then the cross-stroke',
    parts: [
      { as: 'cross', ...sweep({ dur: 0.7, delay: 0.28 }) },
      { as: 'vertical', origin: [12.5, 9], transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.56, delay: 0.14 },
      { as: 'crown', ...sweep({ dur: 0.7 }) },
    ],
  },
  'alphabet-greek': {
    verb: 'omega opens from the left foot, around the bowl, and plants the right foot',
    parts: [{ as: 'omega', ...sweep({ dur: 0.96 }) }],
  },
  'alphabet-hebrew': {
    verb: 'the letter writes right to left, the long diagonal last',
    parts: [
      { as: 'diagonal', ...sweep({ dur: 0.8, delay: 0.18 }) },
      { as: 'armRight', origin: [19, 3], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.14, 0.58, 1], ease: OUT, dur: 0.52 },
      { as: 'armLeft', origin: [5, 21], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.14, 0.58, 1], ease: OUT, dur: 0.52, delay: 0.1 },
    ],
  },
  'alphabet-hindi': {
    verb: 'the letter lands, the side mark joins, then the shirorekha draws across the top',
    parts: [
      { as: 'body', ...sweep({ dur: 0.78 }) },
      { as: 'side', ...sweep({ dur: 0.62, delay: 0.16 }) },
      { as: 'stem', origin: [19, 5], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.14, 0.58, 1], ease: OUT, dur: 0.5, delay: 0.22 },
      { as: 'shirorekha', ...sweep({ dur: 0.64, delay: 0.32 }) },
    ],
  },
  'alphabet-japanese': {
    verb: 'the horizontal stroke first, then the falling stroke, then the sweeping curve',
    parts: [
      { as: 'falling', origin: [9, 3], transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.14, 0.58, 1], ease: OUT, dur: 0.54, delay: 0.12 },
      { as: 'horizontal', ...sweep({ dur: 0.64 }) },
      { as: 'sweeping', ...sweep({ dur: 0.82, delay: 0.22 }) },
    ],
  },
  'alphabet-korean': {
    verb: 'giyeok draws its corner, then the vertical iueung stands beside it',
    parts: [
      { as: 'giyeok', ...sweep({ dur: 0.72 }) },
      { as: 'iueung', origin: [16, 12], transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.14, 0.58, 1], ease: OUT, dur: 0.54, delay: 0.18 },
    ],
  },
  'alphabet-thai': {
    verb: 'the letter loops from the head down through the body in one stroke',
    parts: [{ as: 'letter', ...sweep({ dur: 0.96 }) }],
  },

  amazon: {
    verb: 'the a holds, then the smile-arrow draws from left to right and the dart lands',
    parts: [
      beat([12.3, 9.8], { as: 'letter', delay: 0.08 }),
      { as: 'counter', origin: [11.4, 12.6], transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.1 },
      { as: 'smile', ...sweep({ dur: 0.86, delay: 0.16 }) },
      { as: 'dart', origin: [21, 18], transform: ['translate(0px, 0px) rotate(0deg) scale(1)', 'translate(-2.4px, 1.2px) rotate(-12deg) scale(0.6)', 'translate(0.3px, -0.2px) rotate(4deg) scale(1.08)', 'translate(0px, 0px) rotate(0deg) scale(1)'], times: [0, 0.12, 0.62, 1], ease: [OUT, OUT, OUT], dur: 0.7, delay: 0.28 },
    ],
  },
  ambulance: {
    verb: 'the van lurches forward, both wheels turn, and the plus stamps on the door',
    parts: [
      { as: 'cabin', origin: [16.5, 18], transform: ['translateX(0px) rotate(0deg)', 'translateX(1.4px) rotate(-1.4deg)', 'translateX(-0.3px) rotate(0.5deg)', 'translateX(0px) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.7, delay: 0.04 },
      { as: 'body', origin: [7.8, 18], transform: ['translateX(0px) rotate(0deg)', 'translateX(1.4px) rotate(-1.4deg)', 'translateX(-0.3px) rotate(0.5deg)', 'translateX(0px) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.7 },
      { as: 'light', origin: [21.5, 15], transform: ['scale(1)', 'scale(1.8)', 'scale(1)'], opacity: [1, 0.35, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.4, delay: 0.1 },
      stamp([8, 11], { as: 'plus', delay: 0.18, dur: 0.48 }),
      { as: 'wheelRight', origin: [17, 18], transform: ['rotate(0deg)', 'rotate(90deg)'], times: [0, 1], ease: INOUT, dur: 0.7 },
      { as: 'wheelLeft', origin: [7, 18], transform: ['rotate(0deg)', 'rotate(90deg)'], times: [0, 1], ease: INOUT, dur: 0.7 },
    ],
  },
  'american-football': {
    verb: 'the ball spirals along its long axis, laces holding the spin',
    parts: [
      { as: 'ball', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.72 },
      { as: 'seam', origin: [12, 12], transform: ['rotate(0deg) scaleX(1)', 'rotate(-8deg) scaleX(0.7)', 'rotate(3deg) scaleX(1.05)', 'rotate(0deg) scaleX(1)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.72 },
      { as: 'laces', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(14deg)', 'rotate(-4deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.72, delay: 0.04 },
    ],
  },
  amie: {
    verb: 'the four lobes pinch in around the pill, then the pill stands up',
    parts: [
      { as: 'clover', origin: [12, 12], transform: ['scale(1)', 'scale(0.94) rotate(-4deg)', 'scale(1.03) rotate(1.2deg)', 'scale(1) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.64 },
      { as: 'pill', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.1 },
    ],
  },
  ammo: {
    verb: 'the left round seats first, then the right — two cartridges dropping into a clip',
    parts: [
      { as: 'tipLeft', origin: [8, 8], transform: ['translateY(0px)', 'translateY(-3.2px)', 'translateY(0.4px)', 'translateY(0px)'], times: [0, 0.12, 0.55, 1], ease: [INOUT, INOUT, OUT], dur: 0.5 },
      { as: 'collarLeft', origin: [8, 10.5], transform: ['translateY(0px)', 'translateY(-3.2px)', 'translateY(0.4px)', 'translateY(0px)'], times: [0, 0.12, 0.55, 1], ease: [INOUT, INOUT, OUT], dur: 0.5 },
      { as: 'caseLeft', origin: [8, 19], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.12, 0.55, 1], ease: OUT, dur: 0.5, delay: 0.04 },
      { as: 'baseLeft', origin: [8, 22], transform: ['translateY(0px)', 'translateY(0.5px)', 'translateY(0px)'], times: [0, 0.55, 1], ease: OUT, dur: 0.5, delay: 0.08 },
      { as: 'tipRight', origin: [16, 8], transform: ['translateY(0px)', 'translateY(-3.2px)', 'translateY(0.4px)', 'translateY(0px)'], times: [0, 0.12, 0.55, 1], ease: [INOUT, INOUT, OUT], dur: 0.5, delay: 0.14 },
      { as: 'collarRight', origin: [16, 10.5], transform: ['translateY(0px)', 'translateY(-3.2px)', 'translateY(0.4px)', 'translateY(0px)'], times: [0, 0.12, 0.55, 1], ease: [INOUT, INOUT, OUT], dur: 0.5, delay: 0.14 },
      { as: 'caseRight', origin: [16, 19], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.12, 0.55, 1], ease: OUT, dur: 0.5, delay: 0.18 },
      { as: 'baseRight', origin: [16, 22], transform: ['translateY(0px)', 'translateY(0.5px)', 'translateY(0px)'], times: [0, 0.55, 1], ease: OUT, dur: 0.5, delay: 0.22 },
    ],
  },
  ampersand: {
    verb: 'the loop tightens around itself then opens back into the mark',
    parts: [
      { as: 'mark', origin: [12, 12], transform: ['scale(1) rotate(0deg)', 'scale(0.9) rotate(-6deg)', 'scale(1.05) rotate(2deg)', 'scale(1) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.68 },
    ],
  },
  ampersands: {
    verb: 'the left mark tightens first, then the right one answers',
    parts: [
      { as: 'left', origin: [6, 12], transform: ['scale(1) rotate(0deg)', 'scale(0.88) rotate(-8deg)', 'scale(1.06) rotate(2deg)', 'scale(1) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'right', origin: [18, 12], transform: ['scale(1) rotate(0deg)', 'scale(0.88) rotate(8deg)', 'scale(1.06) rotate(-2deg)', 'scale(1) rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.12 },
    ],
  },
  amphora: {
    verb: 'the two handles lift the jar and the body settles back onto its foot',
    parts: [
      { as: 'body', origin: [12, 22], transform: ['translateY(0px) scaleY(1)', 'translateY(-1.3px) scaleY(1.04)', 'translateY(0.2px) scaleY(0.98)', 'translateY(0px) scaleY(1)'], times: [0, 0.38, 0.72, 1], ease: OUT, dur: 0.7 },
      { as: 'rim', origin: [12, 6], transform: ['scaleX(1)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.54, delay: 0.08 },
      { as: 'handleRight', origin: [16.5, 4], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.66 },
      { as: 'handleLeft', origin: [7.5, 4], transform: ['rotate(0deg)', 'rotate(8deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.66 },
    ],
  },
  ampoule: {
    verb: 'the left vial tips to pour, then the right one — two doses, one after the other',
    parts: [
      { as: 'vialLeft', origin: [6.5, 22], transform: ['rotate(0deg)', 'rotate(-7deg)', 'rotate(1.6deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62 },
      { as: 'levelLeft', origin: [6.5, 16], transform: ['scaleX(1) translateY(0px)', 'scaleX(0.7) translateY(0.6px)', 'scaleX(1) translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.62, delay: 0.06 },
      { as: 'vialRight', origin: [17.5, 22], transform: ['rotate(0deg)', 'rotate(7deg)', 'rotate(-1.6deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62, delay: 0.16 },
      { as: 'levelRight', origin: [17.5, 16], transform: ['scaleX(1) translateY(0px)', 'scaleX(0.7) translateY(0.6px)', 'scaleX(1) translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.62, delay: 0.22 },
    ],
  },
  'analysis-text-link': {
    verb: 'the three notes write themselves, then the trend line draws across the page',
    parts: [
      beat([12, 12], { delay: 0.28 }),
      { as: 'note1', origin: [7.5, 4], transform: ['scale(1)', 'scale(0)', 'scale(1.3)', 'scale(1)'], times: [0, 0.22, 0.6, 1], ease: OUT, dur: 0.46 },
      { as: 'note2', origin: [9, 7], transform: ['scaleX(1)', 'scaleX(0.15)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.14, 0.58, 1], ease: OUT, dur: 0.46, delay: 0.08 },
      { as: 'trend', ...sweep({ dur: 0.9, delay: 0.18 }) },
    ],
  },
  'analytics-01': {
    verb: 'the three bars grow from the baseline, shortest then tallest then middle',
    parts: [
      grow([7, 17], 'Y', { as: 'short' }),
      grow([12, 17], 'Y', { as: 'tall', delay: 0.16 }),
      grow([17, 17], 'Y', { as: 'mid', delay: 0.08 }),
      beat([12, 12], { delay: 0.28 }),
    ],
  },
  'analytics-02': {
    verb: 'the bars rise, then the spark in the corner marks the reading',
    parts: [
      { as: 'bars', origin: [11.5, 17.5], transform: ['scaleY(1)', 'scaleY(0.28)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.14, 0.58, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
      twinkle([18.5, 5.5], { delay: 0.28 }),
      beat([12, 12], { delay: 0.22 }),
    ],
  },
  'analytics-03': {
    verb: 'five bars rise from the floor left to right, a skyline building itself',
    parts: [
      grow([4, 20], 'Y', { as: 'bar2' }),
      grow([8, 20], 'Y', { as: 'bar1', delay: 0.06 }),
      grow([12, 20], 'Y', { as: 'bar3', delay: 0.12 }),
      grow([16, 20], 'Y', { as: 'bar4', delay: 0.18 }),
      grow([20, 20], 'Y', { as: 'bar5', delay: 0.24 }),
    ],
  },
  'analytics-down': {
    verb: 'the three bars shrink from the right, and the trend arrow falls with them',
    parts: [
      { as: 'barRight', origin: [17, 18], transform: ['scaleY(1)', 'scaleY(0.35)', 'scaleY(1)'], times: [0, 0.42, 1], ease: OUT, dur: 0.62, delay: 0.16 },
      { as: 'barMid', origin: [12, 18], transform: ['scaleY(1)', 'scaleY(0.45)', 'scaleY(1)'], times: [0, 0.42, 1], ease: OUT, dur: 0.62, delay: 0.08 },
      { as: 'barLeft', origin: [7, 18], transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1)'], times: [0, 0.42, 1], ease: OUT, dur: 0.62 },
      { as: 'trend', origin: [17, 7], transform: ['translate(0px, 0px)', 'translate(1.2px, 2.2px)', 'translate(0px, 0px)'], times: [0, 0.5, 1], ease: OUT, dur: 0.7 },
      beat([12, 12], { delay: 0.18 }),
    ],
  },
  'analytics-up': {
    verb: 'the trend arrow climbs out of the frame and the bars inside rise with it',
    parts: [
      beat([12, 12], { delay: 0.16 }),
      { as: 'trend', origin: [6, 11.5], transform: ['translate(0px, 0px)', 'translate(1.4px, -2.4px)', 'translate(-0.2px, 0.2px)', 'translate(0px, 0px)'], times: [0, 0.46, 0.76, 1], ease: OUT, dur: 0.74 },
    ],
  },
}
