/**
 * Page 4 — analytics → arrow-down-narrow-wide.
 *
 * Every icon is choreographed against its own name, geometry and direction.
 * `parts` is positional: one entry per SVG primitive, `null` keeps it static.
 * archive-02, arrow-down-02 and arrow-down-left-01 (handcrafted) are absent.
 */

import { OUT, INOUT, beat, draw, shake, stamp, sweep, twinkle } from './_kit.mjs'

/** Travel along a named axis, then settle — same beat as arrow-down-02. */
const nudge = (origin, dx, dy, o = {}) => ({
  as: 'arrow',
  origin,
  transform: [
    'translate(0px, 0px)',
    `translate(${dx}px, ${dy}px)`,
    `translate(${-dx * 0.12}px, ${-dy * 0.12}px)`,
    'translate(0px, 0px)',
  ],
  times: [0, 0.44, 0.72, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  ...o,
})

/** A bar that grows from a named origin. */
const grow = (origin, axis, o = {}) => ({
  as: 'bar',
  origin,
  transform: [`scale${axis}(1)`, `scale${axis}(0.22)`, `scale${axis}(1.08)`, `scale${axis}(1)`],
  times: [0, 0.14, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.58,
  ...o,
})

export default {
  analytics: {
    verb: 'the three bars grow from the floor — short, then mid, then tall — and the frame acknowledges the reading',
    parts: [
      grow([7, 17], 'Y', { as: 'short' }),
      grow([12, 17], 'Y', { as: 'tall', delay: 0.16 }),
      grow([17, 17], 'Y', { as: 'mid', delay: 0.08 }),
      beat([12, 12], { delay: 0.22 }),
    ],
  },
  'anchor-point': {
    verb: 'the centre holds, then the four corners ping along the bezier from top-right to bottom-left',
    parts: [
      twinkle([20.5, 12], { as: 'endRight', delay: 0.18, dur: 0.46 }),
      twinkle([3.5, 12], { as: 'endLeft', delay: 0.3, dur: 0.46 }),
      beat([12, 12], { as: 'centre' }),
      twinkle([19, 4], { as: 'cornerTR', delay: 0.06, dur: 0.46 }),
      twinkle([5, 20], { as: 'cornerBL', delay: 0.24, dur: 0.46 }),
      { as: 'armLeft', ...sweep({ dur: 0.7, delay: 0.08 }) },
      { as: 'armRight', ...sweep({ dur: 0.7, delay: 0.14 }) },
      { as: 'curveTR', ...sweep({ dur: 0.72 }) },
      { as: 'curveBL', ...sweep({ dur: 0.72, delay: 0.18 }) },
    ],
  },
  anchor: {
    verb: 'the ring holds the chain, the shank drops, and the flukes spread to catch',
    parts: [
      beat([12, 5.5], { as: 'ring', delay: 0.16 }),
      { as: 'shank', origin: [12, 8], transform: ['scaleY(1)', 'scaleY(0.78)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.58 },
      { as: 'flukes', origin: [12, 21], transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.6, delay: 0.08 },
    ],
  },
  android: {
    verb: 'the antennae twitch, then the arms and legs settle into a standing pose',
    parts: [
      { as: 'body', origin: [12, 11.5], transform: ['scaleY(1)', 'scaleY(0.96)', 'scaleY(1.02)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.12 },
      { as: 'armRight', origin: [20, 11], transform: ['rotate(0deg)', 'rotate(12deg)', 'rotate(-3deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.08 },
      { as: 'legRight', origin: [15, 19], transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.5, delay: 0.16 },
      { as: 'legLeft', origin: [9, 19], transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.5, delay: 0.2 },
      { as: 'armLeft', origin: [4, 11], transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.08 },
      { as: 'antennae', origin: [12, 4], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.54 },
      { as: 'visor', origin: [12, 10], transform: ['scaleX(1)', 'scaleX(0.2)', 'scaleX(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.5, delay: 0.1 },
    ],
  },
  angel: {
    verb: 'the halo lifts, both eyes blink, and the smile opens',
    parts: [
      beat([12, 14.8], { as: 'head', delay: 0.12 }),
      { as: 'smile', origin: [12, 16], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.12)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.54, delay: 0.2 },
      { as: 'halo', origin: [12, 4], transform: ['translateY(0px) scaleX(1)', 'translateY(-1.2px) scaleX(1.08)', 'translateY(0.2px) scaleX(0.98)', 'translateY(0px) scaleX(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.64 },
      { as: 'eyes', origin: [12, 10], transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.1 },
    ],
  },
  'angle-01': {
    verb: 'the two rays close a little, then the marked angle opens back to its rest',
    parts: [
      { as: 'rays', origin: [6.5, 20], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(1.5deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62 },
      { as: 'arc', origin: [8, 17], transform: ['scale(1)', 'scale(0.82)', 'scale(1.06)', 'scale(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62, delay: 0.04 },
    ],
  },
  angle: {
    verb: 'the two inner arcs tick open from the vertex while the rays hold',
    parts: [
      { as: 'rays', origin: [12, 2], transform: ['rotate(0deg)', 'rotate(-2deg)', 'rotate(0.6deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.56 },
      { as: 'arcInner', origin: [12, 9], transform: ['scale(1)', 'scale(0.7)', 'scale(1.08)', 'scale(1)'], times: [0, 0.32, 0.66, 1], ease: OUT, dur: 0.54 },
      { as: 'arcOuter', origin: [12, 13], transform: ['scale(1)', 'scale(0.7)', 'scale(1.08)', 'scale(1)'], times: [0, 0.32, 0.66, 1], ease: OUT, dur: 0.54, delay: 0.1 },
    ],
  },
  'angry-bird': {
    verb: 'the brows slam down, the beak snaps, and both pupils flare',
    parts: [
      { as: 'body', origin: [12.5, 13.5], transform: ['scale(1)', 'scale(0.96)', 'scale(1.03)', 'scale(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.56, delay: 0.08 },
      { as: 'crest', origin: [17, 9], transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.52 },
      { as: 'beak', origin: [18, 16], transform: ['rotate(0deg) scale(1)', 'rotate(8deg) scale(0.9)', 'rotate(-3deg) scale(1.08)', 'rotate(0deg) scale(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.5, delay: 0.1 },
      { as: 'browTop', origin: [11, 4.5], transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
      { as: 'browLow', origin: [9, 5.3], transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.04 },
      { as: 'tail', origin: [3, 13], transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.56, delay: 0.06 },
      { as: 'eyeLeft', origin: [13, 12], transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'], times: [0, 0.24, 0.58, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      { as: 'eyeRight', origin: [20, 12], transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'], times: [0, 0.24, 0.58, 1], ease: OUT, dur: 0.5, delay: 0.16 },
    ],
  },
  angry: {
    verb: 'the brows drop, the mouth inverts further, and the face tightens',
    parts: [
      shake([12, 12], { dur: 0.52 }),
      { as: 'mouth', origin: [12, 16], transform: ['scaleY(1)', 'scaleY(1.35)', 'scaleY(0.9)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.54, delay: 0.08 },
      { as: 'brows', origin: [12, 10], transform: ['translateY(0px)', 'translateY(1.1px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
    ],
  },
  annoyed: {
    verb: 'both lids flatten to dashes and the mouth slides into a straight line',
    parts: [
      beat([12, 12], { delay: 0.1 }),
      { as: 'eyeLeft', origin: [8, 9], transform: ['scaleX(1)', 'scaleX(1.4)', 'scaleX(0.7)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
      { as: 'mouth', origin: [12, 15], transform: ['scaleX(1) translateY(0px)', 'scaleX(0.7) translateY(0.4px)', 'scaleX(1.08) translateY(0px)', 'scaleX(1) translateY(0px)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.54, delay: 0.08 },
      { as: 'eyeRight', origin: [16, 9], transform: ['scaleX(1)', 'scaleX(1.4)', 'scaleX(0.7)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.04 },
    ],
  },
  anonymous: {
    verb: 'the mask drops over the face, then both eye-holes blink together',
    parts: [
      { as: 'eyeLeft', origin: [7, 18], transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.2 },
      { as: 'eyeRight', origin: [17, 18], transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.2 },
      { as: 'bridge', origin: [12, 17], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.24 },
      { as: 'brow', origin: [12, 12], transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.56, delay: 0.08 },
      { as: 'mask', origin: [12, 7], transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(0.3px)', 'translateY(0px)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.6 },
    ],
  },
  antenna: {
    verb: 'the four tines fire left to right, then the mast grounds the signal',
    parts: [
      { as: 'boom', origin: [12, 7], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.22 },
      { as: 'tine4', origin: [19.5, 7], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.46, delay: 0.18 },
      { as: 'tine3', origin: [14.5, 7], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.46, delay: 0.12 },
      { as: 'tine2', origin: [9.5, 7], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.46, delay: 0.06 },
      { as: 'tine1', origin: [4.5, 7], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.46 },
      grow([12, 15], 'Y', { as: 'mast', delay: 0.24 }),
    ],
  },
  anvil: {
    verb: 'the horn and face take a blow, then the body settles back onto the foot',
    parts: [
      { as: 'face', origin: [14.5, 7.5], transform: ['translateY(0px)', 'translateY(1.1px)', 'translateY(-0.25px)', 'translateY(0px)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.52 },
      { as: 'horn', origin: [4.5, 7], transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(1.2deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.52, delay: 0.04 },
      { as: 'foot', origin: [13, 20], transform: ['scaleY(1)', 'scaleY(0.9)', 'scaleY(1.04)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.54, delay: 0.1 },
    ],
  },
  apartment: {
    verb: 'the left tower lights floor by floor, then the right wing answers',
    parts: [
      { as: 'towerLeft', origin: [8, 21.5], transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1.02)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.58 },
      { as: 'windowsLeft', origin: [8, 10], transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.56, delay: 0.06 },
      { as: 'door', origin: [8, 21.5], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.16 },
      { as: 'wingRight', origin: [17.5, 21.5], transform: ['scaleY(1)', 'scaleY(0.88)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      { as: 'windowsRight', origin: [17.5, 13.5], transform: ['scaleY(1)', 'scaleY(0.15)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.56, delay: 0.18 },
    ],
  },
  aperture: {
    verb: 'the six blades iris shut, then reopen on the circle',
    parts: [
      beat([12, 12], { delay: 0.16 }),
      { as: 'blades', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(28deg) scale(0.72)', 'rotate(-4deg) scale(1.04)', 'rotate(0deg) scale(1)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.72 },
    ],
  },
  'api-gateway': {
    verb: 'the two chevrons pass a packet through the gate, left in then right out',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      { as: 'pillarRight', origin: [20, 12], transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.54, delay: 0.12 },
      { as: 'pillarLeft', origin: [4, 12], transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.54 },
      nudge([14.5, 12], 1.6, 0, { as: 'chevronOut', delay: 0.14 }),
      nudge([9.5, 12], -1.6, 0, { as: 'chevronIn' }),
    ],
  },
  api: {
    verb: 'A, then P, then I write themselves inside the chip',
    parts: [
      beat([12, 12], { delay: 0.28 }),
      { as: 'letterA', ...sweep({ dur: 0.7 }) },
      { as: 'letterP', ...sweep({ dur: 0.7, delay: 0.12 }) },
      grow([18.5, 15], 'Y', { as: 'letterI', delay: 0.24 }),
    ],
  },
  'app-store': {
    verb: 'the A draws itself, then the crossbar stamps across the badge',
    parts: [
      beat([12, 12], { delay: 0.2 }),
      { as: 'strokeRight', ...sweep({ dur: 0.72, delay: 0.08 }) },
      { as: 'strokeLeft', ...sweep({ dur: 0.72 }) },
      { as: 'bar', origin: [12, 14], transform: ['scaleX(1)', 'scaleX(0.15)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.56, delay: 0.22 },
    ],
  },
  'app-window-mac': {
    verb: 'the traffic-light dots blink red then yellow, and the window settles',
    parts: [
      { as: 'dotClose', origin: [5.5, 7.5], transform: ['scale(1)', 'scale(0.35)', 'scale(1.25)', 'scale(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.48 },
      { as: 'dotMin', origin: [9.5, 7.5], transform: ['scale(1)', 'scale(0.35)', 'scale(1.25)', 'scale(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.48, delay: 0.1 },
      beat([12, 12], { delay: 0.16 }),
    ],
  },
  'app-window': {
    verb: 'the title bar draws across, then the close-handle drops into the corner',
    parts: [
      beat([12, 12], { delay: 0.16 }),
      { as: 'titlebar', ...sweep({ dur: 0.7 }) },
      grow([7, 4.5], 'Y', { as: 'handle', delay: 0.14 }),
    ],
  },
  'apple-01': {
    verb: 'the bite marks the left side, then the leaf nods',
    parts: [
      { as: 'fruit', origin: [12, 13.8], transform: ['scale(1)', 'scale(0.94)', 'scale(1.03)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'bite', origin: [7, 10], transform: ['scale(1)', 'scale(0.4)', 'scale(1.12)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.52, delay: 0.08 },
      { as: 'leaf', origin: [12, 6], transform: ['rotate(0deg)', 'rotate(-14deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.58, delay: 0.12 },
    ],
  },
  'apple-finder': {
    verb: 'the face smiles, both eyes blink, and the window-shine slides across',
    parts: [
      beat([12, 12], { delay: 0.12 }),
      { as: 'eyeLeft', origin: [7, 9], transform: ['scaleY(1)', 'scaleY(0.14)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
      { as: 'eyeRight', origin: [17, 9], transform: ['scaleY(1)', 'scaleY(0.14)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.06 },
      { as: 'smile', origin: [12, 17.5], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.12)', 'scaleX(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.54, delay: 0.12 },
      { as: 'shine', origin: [12, 12], transform: ['translateX(0px)', 'translateX(1.6px)', 'translateX(0px)'], times: [0, 0.46, 1], ease: OUT, dur: 0.62, delay: 0.08 },
    ],
  },
  'apple-intelligence': {
    verb: 'the starburst turns a quarter on its own axis and flares',
    parts: [
      { as: 'burst', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(22deg) scale(0.86)', 'rotate(90deg) scale(1.08)', 'rotate(90deg) scale(1)'], times: [0, 0.36, 0.76, 1], ease: OUT, dur: 0.78 },
    ],
  },
  'apple-music': {
    verb: 'the two beamed notes bounce, the right one a beat later',
    parts: [
      beat([12, 12], { delay: 0.16 }),
      { as: 'notes', origin: [11.5, 12.3], transform: ['rotate(0deg) translateY(0px)', 'rotate(-6deg) translateY(-1.4px)', 'rotate(2deg) translateY(0.3px)', 'rotate(0deg) translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.64 },
    ],
  },
  'apple-news': {
    verb: 'the folded corner peels, then the two sheets settle back into the N',
    parts: [
      { as: 'foldBL', origin: [6.3, 17.7], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.08 },
      { as: 'foldTR', origin: [17.7, 6.3], transform: ['rotate(0deg)', 'rotate(8deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.58 },
      beat([12, 12], { delay: 0.14 }),
    ],
  },
  'apple-pie': {
    verb: 'steam puffs from the two slits, the crust settles, and the dish holds',
    parts: [
      { as: 'crust', origin: [12, 11.9], transform: ['scaleX(1)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.08 },
      { as: 'apple', origin: [12, 5], transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.1px) rotate(-8deg)', 'translateY(0.2px) rotate(2deg)', 'translateY(0px) rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'slitRight', origin: [14.8, 11], transform: ['scaleY(1)', 'scaleY(1.6)', 'scaleY(1)'], opacity: [1, 0.45, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      { as: 'slitLeft', origin: [9.3, 11], transform: ['scaleY(1)', 'scaleY(1.6)', 'scaleY(1)'], opacity: [1, 0.45, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.5, delay: 0.18 },
      { as: 'dish', origin: [12, 19], transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.1 },
    ],
  },
  'apple-reminder': {
    verb: 'the three list rows write themselves top to bottom, bullets first',
    parts: [
      beat([12, 12], { delay: 0.22 }),
      { as: 'bullets', origin: [7.3, 12], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.54 },
      { as: 'rows', origin: [14, 12], transform: ['scaleX(1)', 'scaleX(0.18)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.58, delay: 0.1 },
    ],
  },
  'apple-stocks': {
    verb: 'the sparkline draws left to right, then the pin drops onto the peak',
    parts: [
      beat([12, 12], { delay: 0.22 }),
      { as: 'sparkline', ...sweep({ dur: 0.86 }) },
      { as: 'axis', origin: [15, 12], transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1.04)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      stamp([15, 9], { as: 'pin', delay: 0.28, dur: 0.46 }),
    ],
  },
  'apple-vision-pro': {
    verb: 'the visor dips onto the face, then the nose-bridge settles',
    parts: [
      { as: 'visor', origin: [12, 12], transform: ['translateY(0px) scaleY(1)', 'translateY(-1.4px) scaleY(0.92)', 'translateY(0.3px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.64 },
    ],
  },
  apple: {
    verb: 'the leaf nods and the fruit gives a little at the bite',
    parts: [
      { as: 'leaf', origin: [13.8, 3.8], transform: ['rotate(0deg)', 'rotate(-16deg)', 'rotate(5deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.58 },
      { as: 'fruit', origin: [12, 14.8], transform: ['scale(1)', 'scale(0.94)', 'scale(1.03)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.08 },
    ],
  },
  'appointment-01': {
    verb: 'the rings drop onto the calendar, the date line draws, then the tick writes on the side',
    parts: [
      { as: 'rings', origin: [12, 4], transform: ['translateY(0px)', 'translateY(-1.4px)', 'translateY(0.3px)', 'translateY(0px)'], times: [0, 0.32, 0.66, 1], ease: OUT, dur: 0.52 },
      beat([12, 13], { delay: 0.1 }),
      { as: 'dateLine', ...sweep({ dur: 0.64, delay: 0.08 }) },
      { as: 'tick', ...draw({ dur: 0.56, delay: 0.22 }) },
    ],
  },
  'appointment-02': {
    verb: 'the tick writes inside the closed page after the rings land',
    parts: [
      { as: 'rings', origin: [12, 4], transform: ['translateY(0px)', 'translateY(-1.4px)', 'translateY(0.3px)', 'translateY(0px)'], times: [0, 0.32, 0.66, 1], ease: OUT, dur: 0.52 },
      beat([12, 13], { delay: 0.08 }),
      { as: 'dateLine', ...sweep({ dur: 0.6, delay: 0.1 }) },
      { as: 'tick', ...draw({ dur: 0.54, delay: 0.2 }) },
    ],
  },
  appointment: {
    verb: 'the tick lands first, then the rings and the date line catch up',
    parts: [
      { as: 'rings', origin: [12, 4], transform: ['translateY(0px)', 'translateY(-1.2px)', 'translateY(0.25px)', 'translateY(0px)'], times: [0, 0.32, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.16 },
      beat([12, 13], { delay: 0.2 }),
      { as: 'dateLine', ...sweep({ dur: 0.62, delay: 0.18 }) },
      { as: 'tick', ...draw({ dur: 0.52 }) },
    ],
  },
  'approximately-equal-circle': {
    verb: 'both waves slide in opposite directions inside the circle',
    parts: [
      { as: 'waves', origin: [12, 12], transform: ['translateX(0px)', 'translateX(1.4px)', 'translateX(-0.3px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.58 },
      beat([12, 12], { delay: 0.1 }),
    ],
  },
  'approximately-equal-square': {
    verb: 'the waves drift while the square frame gives a little',
    parts: [
      { as: 'waves', origin: [12, 12], transform: ['translateX(0px)', 'translateX(-1.4px)', 'translateX(0.3px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.58 },
      beat([12, 12], { delay: 0.1 }),
    ],
  },
  'approximately-equal': {
    verb: 'the top wave slides right while the bottom wave slides left',
    parts: [
      { as: 'top', origin: [12, 8], transform: ['translateX(0px)', 'translateX(1.8px)', 'translateX(-0.3px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.56 },
      { as: 'bottom', origin: [12, 16], transform: ['translateX(0px)', 'translateX(-1.8px)', 'translateX(0.3px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.56, delay: 0.06 },
    ],
  },
  apricot: {
    verb: 'the two halves part a little, then the leaf nods them back together',
    parts: [
      { as: 'right', origin: [14.5, 14], transform: ['rotate(0deg)', 'rotate(6deg)', 'rotate(-1.5deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'left', origin: [7.5, 14], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(1.5deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'leaf', origin: [13.5, 4], transform: ['rotate(0deg)', 'rotate(-12deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.58, delay: 0.08 },
    ],
  },
  apron: {
    verb: 'the neck strap lifts the bib, then the pocket settles on the belly',
    parts: [
      { as: 'skirt', origin: [12, 22], transform: ['scaleY(1)', 'scaleY(0.94)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      { as: 'pocket', origin: [12, 15.5], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.16 },
      { as: 'straps', origin: [12, 2], transform: ['translateY(0px)', 'translateY(-1.2px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58 },
    ],
  },
  'arc-browser': {
    verb: 'the three colour arcs chase each other around the mark, then the stem plants',
    parts: [
      { as: 'arcLeft', origin: [8.7, 13.3], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'arcRight', origin: [19.1, 10.8], transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.06 },
      { as: 'blade', origin: [13.3, 12.1], transform: ['rotate(0deg) scale(1)', 'rotate(-6deg) scale(0.94)', 'rotate(2deg) scale(1.03)', 'rotate(0deg) scale(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62 },
      stamp([5.6, 17.6], { as: 'stem', delay: 0.18, dur: 0.48 }),
    ],
  },
  archer: {
    verb: 'the bow draws, the string tightens, then the arrow flies a step along its shaft',
    parts: [
      { as: 'bow', origin: [11.7, 11.3], transform: ['scaleX(1)', 'scaleX(0.9)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62 },
      stamp([5, 18], { as: 'fletching', delay: 0.22, dur: 0.46 }),
      nudge([14, 9], 1.8, -1.8, { as: 'shaft', delay: 0.08 }),
      nudge([18.5, 4.5], 1.8, -1.8, { as: 'head', delay: 0.12 }),
    ],
  },
  'archive-01': {
    verb: 'the two drawers pull open in opposite directions, then the handles wink',
    parts: [
      { as: 'drawerLeft', origin: [6, 12], transform: ['translateX(0px)', 'translateX(-1.6px)', 'translateX(0.3px)', 'translateX(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.66 },
      { as: 'drawerRight', origin: [16.5, 12.5], transform: ['translateX(0px)', 'translateX(1.6px)', 'translateX(-0.3px)', 'translateX(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.66, delay: 0.06 },
      { as: 'railLeft', ...sweep({ dur: 0.64, delay: 0.08 }) },
      { as: 'railRight', ...sweep({ dur: 0.64, delay: 0.14 }) },
      twinkle([6, 17], { as: 'knobLeft', delay: 0.22, dur: 0.44 }),
      twinkle([17.6, 16.8], { as: 'knobRight', delay: 0.28, dur: 0.44 }),
    ],
  },
  'archive-03': {
    verb: 'the lid lifts, then the arrow drops a file into the box — inverse of archive-02’s drawer',
    parts: [
      { as: 'box', origin: [12, 21], transform: ['scaleY(1)', 'scaleY(0.94)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      { as: 'lid', origin: [12, 5], transform: ['translateY(0px)', 'translateY(-1.8px)', 'translateY(0.3px)', 'translateY(0px)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.62 },
      nudge([12, 14], 0, 2.4, { as: 'file', delay: 0.12 }),
    ],
  },
  'archive-04': {
    verb: 'the drawer pulls forward on its seam, then seats back',
    parts: [
      { as: 'body', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.96)', 'scaleY(1.02)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.08 },
      { as: 'seam', origin: [12, 14], transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(-0.3px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.64 },
    ],
  },
  'archive-arrow-down': {
    verb: 'the file-arrow drops into the drawer, and the seam takes the weight',
    parts: [
      { as: 'body', origin: [12, 16], transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.12 },
      { as: 'seam', origin: [12, 14], transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      nudge([12, 8.5], 0, 2.2, { as: 'head', delay: 0.04 }),
      { as: 'shaft', origin: [12, 3], transform: ['translateY(0px) scaleY(1)', 'translateY(1.4px) scaleY(0.82)', 'translateY(-0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.56 },
    ],
  },
  'archive-arrow-up': {
    verb: 'the file-arrow lifts out of the drawer, the seam closing behind it',
    parts: [
      { as: 'body', origin: [12, 16], transform: ['translateY(0px)', 'translateY(-0.6px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.08 },
      { as: 'seam', origin: [12, 14], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.06 },
      nudge([12, 4.5], 0, -2.2, { as: 'head' }),
      { as: 'shaft', origin: [12, 10], transform: ['translateY(0px) scaleY(1)', 'translateY(-1.4px) scaleY(0.82)', 'translateY(0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.56, delay: 0.04 },
    ],
  },
  'archive-off-03': {
    verb: 'the slash cuts the box, and the lid and body go dim',
    parts: [
      { as: 'bar', ...draw({ dur: 0.82 }) },
      { as: 'box', origin: [12, 15.5], transform: ['scale(1)', 'scale(1)', 'scale(0.96)', 'scale(1)'], opacity: [1, 1, 0.38, 1], times: [0, 0.28, 0.54, 1], ease: [OUT, OUT, INOUT], dur: 0.82, delay: 0.04 },
      { as: 'lid', origin: [12, 6.5], transform: ['scale(1)', 'scale(1)', 'scale(0.94)', 'scale(1)'], opacity: [1, 1, 0.32, 1], times: [0, 0.28, 0.54, 1], ease: [OUT, OUT, INOUT], dur: 0.82, delay: 0.08 },
    ],
  },
  'archive-off-04': {
    verb: 'the slash cuts the drawer, and both the body and the seam go dim',
    parts: [
      { as: 'bar', ...draw({ dur: 0.82 }) },
      { as: 'body', origin: [12, 12], transform: ['scale(1)', 'scale(1)', 'scale(0.96)', 'scale(1)'], opacity: [1, 1, 0.38, 1], times: [0, 0.28, 0.54, 1], ease: [OUT, OUT, INOUT], dur: 0.82, delay: 0.04 },
      { as: 'seam', origin: [12, 14], transform: ['scaleX(1)', 'scaleX(1)', 'scaleX(0.7)', 'scaleX(1)'], opacity: [1, 1, 0.3, 1], times: [0, 0.28, 0.54, 1], ease: [OUT, OUT, INOUT], dur: 0.82, delay: 0.08 },
    ],
  },
  'archive-restore': {
    verb: 'the lid holds while the file-arrow climbs back out of the box',
    parts: [
      nudge([12, 16.5], 0, -2.6, { as: 'file' }),
      { as: 'box', origin: [12, 14.5], transform: ['scaleY(1)', 'scaleY(0.94)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.08 },
      { as: 'lid', origin: [12, 5.5], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0px)'], times: [0, 0.36, 1], ease: OUT, dur: 0.54, delay: 0.04 },
    ],
  },
  'archive-x': {
    verb: 'the X stamps on the box, and the lid flinches',
    parts: [
      { as: 'box', origin: [12, 14.5], transform: ['scale(1)', 'scale(0.96)', 'scale(1.02)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.54, delay: 0.1 },
      stamp([12, 14.5], { as: 'mark', delay: 0.04, dur: 0.5 }),
      { as: 'lid', origin: [12, 5.5], transform: ['rotate(0deg)', 'rotate(-3deg)', 'rotate(1deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.52 },
    ],
  },
  archive: {
    verb: 'the cabinet splits on its equator — top lid lifts, bottom drawer drops',
    parts: [
      { as: 'body', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.96)', 'scaleY(1.02)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58 },
      { as: 'seam', ...sweep({ dur: 0.7 }) },
      { as: 'handleTop', origin: [12, 7], transform: ['translateY(0px)', 'translateY(-1.1px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.56 },
      { as: 'handleBottom', origin: [12, 17], transform: ['translateY(0px)', 'translateY(1.1px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.56, delay: 0.06 },
    ],
  },
  armchair: {
    verb: 'both arms drop to catch a sitter, then the back and legs take the weight',
    parts: [
      { as: 'seat', origin: [12, 13.5], transform: ['scaleY(1)', 'scaleY(0.9)', 'scaleY(1.04)', 'scaleY(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.08 },
      { as: 'back', origin: [12, 4], transform: ['rotate(0deg)', 'rotate(-3deg)', 'rotate(0.8deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58 },
      { as: 'legs', origin: [12, 20], transform: ['scaleY(1)', 'scaleY(0.86)', 'scaleY(1.04)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.52, delay: 0.12 },
    ],
  },
  'armored-boot': {
    verb: 'the toe plants, the shin plates stack, and the rivets wink',
    parts: [
      { as: 'boot', origin: [12.1, 22], transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(1.2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62 },
      { as: 'plate', origin: [8.5, 15.8], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.54, delay: 0.08 },
      { as: 'spur', origin: [17.6, 19.5], transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.12 },
      { as: 'strapHigh', origin: [4.6, 8.5], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.46, delay: 0.06 },
      { as: 'strapLow', origin: [4, 12], transform: ['scaleX(1)', 'scaleX(0.4)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.46, delay: 0.12 },
      twinkle([10, 10], { delay: 0.2, dur: 0.44 }),
      twinkle([10, 6], { delay: 0.28, dur: 0.44 }),
    ],
  },
  'arrange-by-letters-az': {
    verb: 'A sits at the top, Z drops below, and the sort-arrow points down the new order',
    parts: [
      { as: 'letterZ', origin: [7, 17.5], transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(-0.3px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      { as: 'letterA', origin: [7, 6], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.54 },
      nudge([17.5, 12], 0, 2.4, { as: 'sort', delay: 0.08 }),
    ],
  },
  'arrange-by-letters-za': {
    verb: 'Z sits at the top, A drops below — reverse of az — and the sort-arrow still points down',
    parts: [
      { as: 'letterZ', origin: [7, 6.5], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.54 },
      { as: 'letterA', origin: [7, 18], transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(-0.3px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      nudge([17.5, 12], 0, 2.4, { as: 'sort', delay: 0.08 }),
    ],
  },
  'arrange-by-numbers-nine-one': {
    verb: 'nine stays on top, one drops below, and the sort-arrow confirms descending',
    parts: [
      { as: 'one', origin: [7, 17.4], transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(-0.3px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      { as: 'nine', origin: [7, 6.5], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.54 },
      nudge([16.5, 12], 0, 2.4, { as: 'sort', delay: 0.08 }),
    ],
  },
  'arrange-by-numbers-one-nine': {
    verb: 'one stays on top, nine drops below — ascending — and the sort-arrow confirms',
    parts: [
      { as: 'one', origin: [7, 6.4], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.54 },
      { as: 'nine', origin: [7, 17.5], transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(-0.3px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      nudge([16.5, 12], 0, 2.4, { as: 'sort', delay: 0.08 }),
    ],
  },
  arrange: {
    verb: 'the four tiles shuffle — top-left and bottom-right swap influence along the diagonal',
    parts: [
      { as: 'tileTL', origin: [5.5, 5.5], transform: ['translate(0px, 0px)', 'translate(1.4px, 1.4px)', 'translate(-0.2px, -0.2px)', 'translate(0px, 0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.6 },
      { as: 'tileBL', origin: [5.5, 18.5], transform: ['translate(0px, 0px)', 'translate(1.2px, -0.6px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.56, delay: 0.06 },
      { as: 'guides', ...sweep({ dur: 0.74, delay: 0.08 }) },
      { as: 'tileTR', origin: [18.5, 5.5], transform: ['translate(0px, 0px)', 'translate(-1.2px, 0.6px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.56, delay: 0.06 },
      { as: 'tileBR', origin: [19.5, 18.5], transform: ['translate(0px, 0px)', 'translate(-1.4px, -1.4px)', 'translate(0.2px, 0.2px)', 'translate(0px, 0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.6 },
    ],
  },
  'arrow-all-direction': {
    verb: 'the four heads fire outward in compass order — north, east, south, west — then pull back',
    parts: [
      nudge([12, 6.2], 0, -2.2, { as: 'shaftN' }),
      nudge([12, 17.8], 0, 2.2, { as: 'shaftS', delay: 0.12 }),
      nudge([17.8, 12], 2.2, 0, { as: 'shaftE', delay: 0.06 }),
      nudge([6.2, 12], -2.2, 0, { as: 'shaftW', delay: 0.18 }),
      nudge([12, 4.5], 0, -2.2, { as: 'headN', delay: 0.02 }),
      nudge([4.5, 12], -2.2, 0, { as: 'headW', delay: 0.2 }),
      nudge([19.5, 12], 2.2, 0, { as: 'headE', delay: 0.08 }),
      nudge([12, 19.5], 0, 2.2, { as: 'headS', delay: 0.14 }),
    ],
  },
  'arrow-big-down-dash': {
    verb: 'the dash holds the start, then the big arrow drops away from it',
    parts: [
      nudge([12, 14], 0, 2.4, { as: 'head' }),
      { as: 'dash', origin: [12, 3], transform: ['scaleX(1)', 'scaleX(0.6)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
    ],
  },
  'arrow-big-left-dash': {
    verb: 'the dash holds the start, then the big arrow slides left away from it',
    parts: [
      { as: 'dash', origin: [21, 12], transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
      nudge([10, 12], -2.4, 0, { as: 'head' }),
    ],
  },
  'arrow-big-right-dash': {
    verb: 'the dash holds the start, then the big arrow slides right away from it',
    parts: [
      nudge([14, 12], 2.4, 0, { as: 'head' }),
      { as: 'dash', origin: [3, 12], transform: ['scaleY(1)', 'scaleY(0.6)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
    ],
  },
  'arrow-big-up-dash': {
    verb: 'the dash holds the start, then the big arrow lifts away from it',
    parts: [
      { as: 'dash', origin: [12, 21], transform: ['scaleX(1)', 'scaleX(0.6)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
      nudge([12, 10], 0, -2.4, { as: 'head' }),
    ],
  },
  'arrow-data-transfer-diagonal': {
    verb: 'the two packets pass each other on the diagonal, one down-right and one up-left',
    parts: [
      nudge([14.5, 13.9], 1.8, 1.8, { as: 'downRight' }),
      nudge([9.5, 10.1], -1.8, -1.8, { as: 'upLeft', delay: 0.08 }),
    ],
  },
  'arrow-data-transfer-horizontal': {
    verb: 'the top packet runs left, the bottom packet runs right — two lanes, opposite ways',
    parts: [
      nudge([11.9, 7], -2.4, 0, { as: 'top' }),
      nudge([12.1, 17], 2.4, 0, { as: 'bottom', delay: 0.08 }),
    ],
  },
  'arrow-data-transfer-vertical': {
    verb: 'the right packet climbs, the left packet drops — two lanes, opposite ways',
    parts: [
      nudge([17, 11.9], 0, -2.4, { as: 'up' }),
      nudge([7, 12.1], 0, 2.4, { as: 'down', delay: 0.08 }),
    ],
  },
  'arrow-diagonal': {
    verb: 'both corner handles fire along the diagonal, then the shaft redraws between them',
    parts: [
      nudge([18.9, 5.1], 1.6, -1.6, { as: 'handleTR' }),
      nudge([5.1, 18.9], -1.6, 1.6, { as: 'handleBL', delay: 0.08 }),
      { as: 'shaft', ...sweep({ dur: 0.72, delay: 0.1 }) },
    ],
  },
  'arrow-down-01': {
    verb: 'the chevron drops, squashes a little, and settles — head-only cousin of arrow-down-02',
    parts: [nudge([12, 12], 0, 2.6, { transform: ['translate(0px, 0px) scaleX(1)', 'translate(0px, 2.6px) scaleX(0.94)', 'translate(0px, -0.3px) scaleX(1.02)', 'translate(0px, 0px) scaleX(1)'] })],
  },
  'arrow-down-03': {
    verb: 'the shaft and head drop toward the baseline, which holds them',
    parts: [
      { as: 'baseline', origin: [12, 20], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.12 },
      nudge([12, 10], 0, 2.2, { as: 'shaft' }),
      nudge([12, 14], 0, 2.4, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-down-04': {
    verb: 'the filled head leads the drop, the shaft following a beat later',
    parts: [
      nudge([12, 17], 0, 2.4, { as: 'head' }),
      { as: 'shaft', origin: [12, 4], transform: ['translateY(0px) scaleY(1)', 'translateY(1.6px) scaleY(0.86)', 'translateY(-0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54, delay: 0.06 },
    ],
  },
  'arrow-down-05': {
    verb: 'the filled body drops onto the baseline, which takes the weight',
    parts: [
      { as: 'baseline', origin: [12, 20], transform: ['scaleX(1)', 'scaleX(0.72)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([12, 10.7], 0, 2.4, { as: 'body' }),
    ],
  },
  'arrow-down-az': {
    verb: 'the arrow drops first, then A sits above Z in the new order',
    parts: [
      nudge([7.8, 11.5], 0, 2.4, { as: 'shaft' }),
      nudge([7.8, 18], 0, 2.6, { as: 'head', delay: 0.04 }),
      { as: 'letterZ', origin: [17.8, 17], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.16 },
      { as: 'letterA', origin: [17.8, 7.2], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.1 },
    ],
  },
  'arrow-down-big': {
    verb: 'the whole filled arrow drops and squashes, same beat as arrow-down-02',
    parts: [
      nudge([12, 12], 0, 2.6, {
        transform: [
          'translate(0px, 0px) scaleX(1)',
          'translate(0px, 2.6px) scaleX(0.94)',
          'translate(0px, -0.3px) scaleX(1.02)',
          'translate(0px, 0px) scaleX(1)',
        ],
      }),
    ],
  },
  'arrow-down-double': {
    verb: 'the upper chevron drops first, then the lower one follows a step behind',
    parts: [
      nudge([12, 15.5], 0, 2.2, { as: 'lower', delay: 0.1 }),
      nudge([12, 8.5], 0, 2.2, { as: 'upper' }),
    ],
  },
  'arrow-down-from-line': {
    verb: 'the arrow leaves the top line and drops, the line holding its place',
    parts: [
      nudge([12, 14], 0, 2.4, { as: 'shaft' }),
      nudge([12, 17.5], 0, 2.6, { as: 'head', delay: 0.04 }),
      { as: 'line', origin: [12, 4], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
    ],
  },
  'arrow-down-left-02': {
    verb: 'the filled head leads down-left, the shaft following along the same diagonal',
    parts: [
      nudge([14.5, 9.5], -2.1, 2.1, { as: 'shaft', delay: 0.04 }),
      nudge([9.6, 14.4], -2.1, 2.1, { as: 'head' }),
    ],
  },
  'arrow-down-left': {
    verb: 'the fused arrow travels down-left and settles — same diagonal as arrow-down-left-01',
    parts: [nudge([11.8, 12.2], -2.1, 2.1)],
  },
  'arrow-down-narrow-wide': {
    verb: 'the three rows grow left to right from narrow to wide, while the arrow drops past them',
    parts: [
      nudge([7, 11.5], 0, 2.4, { as: 'shaft' }),
      grow([11, 12], 'X', { as: 'wide', delay: 0.16 }),
      grow([11, 8], 'X', { as: 'mid', delay: 0.08 }),
      grow([11, 4], 'X', { as: 'narrow' }),
      nudge([7, 18], 0, 2.6, { as: 'head', delay: 0.04 }),
    ],
  },
}
