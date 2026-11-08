/**
 * Page 76 — x-ray → zzz (last gallery page, 44 icons).
 *
 * Handcrafted originals skipped: `zoom-in-area`, `zoom-out-area`.
 *
 * File-type icons (xls, xml, xsl, zip) give each variant its own letter job:
 * retrace, hop, pop or slide. Yen icons flip, hop or push their arrow. The
 * x-ray frame is a `<rect>` with an SVG `transform` attribute, so it stays
 * still while the bones scan.
 *
 * Identical-geometry pairs get different jobs: xls / -01, xml / -01,
 * xsl / -01, yoga / -01, zip / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flex,
  flip,
  hold,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  swing,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'letter', dur: 0.5, delay, ...o })
const quarter = (c, o = {}) => ({ as: 'x', origin: c, transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.8)', 'rotate(96deg) scale(1.08)', 'rotate(90deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56, ...o })
const boing = (c, o = {}) => ({
  as: 'logo',
  origin: c,
  transform: ['scale(1, 1)', 'scale(1.08, 0.9)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: OUT,
  dur: 0.62,
  ...o,
})
const bounceY = (c, delay) => ({ as: 'letter', origin: c, transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.12)', 'scaleY(1)'], times: [0, 0.3, 0.62, 1], ease: 'easeInOut', dur: 0.5, delay })
const float = (c, delay) => ({ as: 'z', origin: c, transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(1.2px)', 'translateY(0px)'], opacity: [1, 0, 0, 1], times: [0, 0.4, 0.42, 1], ease: ['easeOut', 'linear', OUT], dur: 0.8, delay })

// ---------------------------------------------------------------------------

const specs = {
  'x-ray': {
    verb: 'the scan passes down the ribs and the pelvis lights up',
    parts: [null, retrace({ as: 'spine' }), pop([12, 16.4], 1.1, { as: 'pelvis', delay: 0.3 }), blink({ as: 'rib', dur: 0.5 }), blink({ as: 'rib', dur: 0.5, delay: 0.14 })],
  },
  'x-variable-circle': {
    verb: 'the two strokes of the x write in turn inside the ring',
    parts: [retrace({ as: 'stroke' }), retrace({ as: 'stroke', delay: 0.14 }), beat(C, { delay: 0.28 })],
  },
  'x-variable-square': {
    verb: 'the x turns a quarter and the tile flexes',
    parts: [flex('Y', [12, 21.5], C, [1, 0.95, 1.02, 0.99, 1], { as: 'tile', delay: 0.1 }), quarter(C), quarter(C)],
  },
  'x-variable': {
    verb: 'the two strokes slide apart and cross again',
    parts: [ride(C, out(1, -0.6), { as: 'stroke' }), ride(C, out(-1, 0.6), { as: 'stroke' })],
  },
  xing: {
    verb: 'the two strokes slide past each other',
    parts: [ride([15.5, 12], out(0, -1.2), { as: 'stroke' }), ride([6, 11], out(0, 1.2), { as: 'stroke' })],
  },

  // --- file types -----------------------------------------------------------------------------------
  'xls-01': {
    verb: 'the XLS letters hop in turn',
    parts: [null, hop([12.3, 19], 1, { delay: 0.08 }), hop([6, 19], 1), hop([18.3, 19], 1, { delay: 0.16 })],
  },
  'xls-02': {
    verb: 'the letters pop off the page',
    parts: [null, pop([11.8, 16.5], 1.14, { as: 'letter' }), pop([19.3, 16.5], 1.2, { as: 'letter', delay: 0.12 })],
  },
  xls: {
    verb: 'the XLS letters write themselves in turn',
    parts: [beat([12, 7.5], { delay: 0.3 }), line(0.08), line(0), line(0.16)],
  },
  'xml-01': {
    verb: 'the XML letters pop in turn',
    parts: [null, pop([12.5, 19], 1.16, { as: 'letter', delay: 0.08 }), pop([18.5, 19], 1.16, { as: 'letter', delay: 0.16 }), pop([6, 19], 1.16, { as: 'letter' })],
  },
  'xml-02': {
    verb: 'the letters slide right along the line',
    parts: [null, nudge([14, 16.5], 1.4, 0, { as: 'letters' })],
  },
  xml: {
    verb: 'the XML letters write themselves in turn',
    parts: [beat([12, 7.5], { delay: 0.3 }), line(0.08), line(0.16), line(0)],
  },
  'xsl-01': {
    verb: 'the XSL letters bounce in turn',
    parts: [null, bounceY([18.3, 19], 0.16), bounceY([6, 19], 0), bounceY([12.3, 19], 0.08)],
  },
  'xsl-02': {
    verb: 'the XSL letters hop in turn',
    parts: [null, hop([19.5, 16.5], 1, { delay: 0.16 }), hop([9.5, 16.5], 1), hop([14.8, 16.5], 1, { delay: 0.08 })],
  },
  xsl: {
    verb: 'the XSL letters write themselves in turn',
    parts: [beat([12, 7.5], { delay: 0.3 }), line(0.16), line(0), line(0.08)],
  },

  // --- y --------------------------------------------------------------------------------------------
  yelp: {
    verb: 'the burst petals pop round in turn',
    parts: [pop([7, 13.5], 1.14, { as: 'petal', delay: 0.24 }), pop([16.9, 10.6], 1.14, { as: 'petal', delay: 0.06 }), pop([16.4, 17.4], 1.14, { as: 'petal', delay: 0.12 }), pop([10, 19], 1.14, { as: 'petal', delay: 0.18 }), pop([9, 6.5], 1.14, { as: 'petal' })],
  },
  'yen-circle': {
    verb: 'the yen coin flips inside the ring',
    parts: [null, flip(C, 1)],
  },
  'yen-receive': {
    verb: 'the arrow pulls in toward the yen',
    parts: [null, null, null, nudge([18.3, 13], -1.6, 0)],
  },
  'yen-send': {
    verb: 'the arrow pushes away from the yen',
    parts: [null, null, null, nudge([18.3, 13], 1.6, 0)],
  },
  'yen-square': {
    verb: 'the yen hops inside its tile',
    parts: [beat(C, { delay: 0.2 }), hop(C, 1)],
  },
  yen: {
    verb: 'the Y nods and the two bars slide across in turn',
    parts: [hop([12, 12], 0.6), ride([12, 13], out(1, 0), { as: 'bar', delay: 0.06 }), ride([12, 17], out(1, 0), { as: 'bar', delay: 0.14 })],
  },
  'yoga-01': {
    verb: 'the meditating figure levitates and hovers',
    parts: [hold([9.2, 19], 0, -1.2, { as: 'figure' }), hold([15.8, 19], 0, -1.2, { as: 'figure' }), hold([12, 4], 0, -1.2, { as: 'figure' }), hold([9, 11], 0, -1.2, { as: 'figure' }), hold([15, 11], 0, -1.2, { as: 'figure' })],
  },
  'yoga-02': {
    verb: 'the arms stretch out and the head lifts',
    parts: [null, null, hop([12, 4], 0.8, { delay: 0.1 }), scaleFrom('X', [12, 12], [12, 12], [1, 1.1, 0.98, 1], { as: 'arms' })],
  },
  'yoga-03': {
    verb: 'the flame of the pose sways above the open arms',
    parts: [wiggle([12, 17], [12, 10], 6, { as: 'flame' }), ride([12, 12], out(0, -0.6), { as: 'arms', delay: 0.1 }), null],
  },
  'yoga-ball': {
    verb: 'the ball rolls a turn',
    parts: [null, swing(C, [12, 10.2], [0, 70, 250, 368, 360], { as: 'roll', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9 })],
  },
  'yoga-mat': {
    verb: 'the mat unrolls and rolls back up',
    parts: [ride([11.1, 10], out(0.8, 0), { as: 'roll' }), scaleFrom('X', [22, 14.3], [11.9, 14.3], [1, 1.06, 0.98, 1], { as: 'mat' })],
  },
  yoga: {
    verb: 'the hands rise in the lotus pose and the head settles',
    parts: [null, null, hop([12, 4], 0.6, { delay: 0.14 }), ride([9, 11], out(0, -1), { as: 'hand' }), ride([15, 11], out(0, -1), { as: 'hand' })],
  },
  yogurt: {
    verb: 'the cream swirl twists on top of the cup',
    parts: [wiggle([12, 15], [12.1, 8.5], 8, { as: 'swirl' }), beat([12, 18.5], { delay: 0.2 }), null],
  },
  youtube: {
    verb: 'the play button pops inside the screen',
    parts: [beat(C, { delay: 0.16 }), pop([12.5, 12], 1.2, { as: 'play' })],
  },
  yurt: {
    verb: 'the roof lifts off the yurt and settles back',
    parts: [null, null, null, null, ride([12, 6], out(0, -1.2), { as: 'roof' }), ride([12, 6], out(0, -1.2), { as: 'roof' })],
  },

  // --- z --------------------------------------------------------------------------------------------
  zakat: {
    verb: 'the coin drops into the open hand',
    parts: [
      { as: 'coin', origin: [14, 9.2], transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(0.8px)', 'translateY(0px)'], times: [0, 0.3, 0.6, 1], ease: [OUT, 'easeIn', OUT], dur: 0.66 },
      ride([12.1, 18], [[0, 0], [0, 0], [0, 0.6], [0, -0.2], [0, 0]], { as: 'hand', times: [0, 0.4, 0.6, 0.8, 1] }),
    ],
  },
  zap: {
    verb: 'the bolt flashes and jolts',
    parts: [{ as: 'bolt', origin: [11.9, 12.1], transform: ['scale(1)', 'scale(1.12)', 'scale(0.96)', 'scale(1.04)', 'scale(1)'], opacity: [1, 0.3, 1, 0.5, 1], times: [0, 0.16, 0.34, 0.5, 0.8], ease: 'linear', dur: 0.66 }],
  },
  zeppelin: {
    verb: 'the airship drifts forward and its fins flutter',
    parts: [
      ride([15, 18.1], out(1, 0), { as: 'ship', dur: 0.8 }),
      ride([12, 11], out(1, 0), { as: 'ship', dur: 0.8 }),
      ride([3.5, 11], out(1, 0), { as: 'ship', dur: 0.8 }),
      wiggle([7.5, 6], [5.3, 5.9], 10, { as: 'fin', delay: 0.1 }),
      wiggle([7.5, 16], [5.3, 16.1], -10, { as: 'fin', delay: 0.1 }),
    ],
  },
  'zero-circle': {
    verb: 'the zero flips inside the ring',
    parts: [null, flip(C, 1)],
  },
  'zero-square': {
    verb: 'the zero hops inside its tile',
    parts: [beat(C, { delay: 0.2 }), hop(C, 1)],
  },
  'zip-01': {
    verb: 'the ZIP letters zip to the right',
    parts: [null, nudge([12, 19], 1.6, 0, { as: 'letters' })],
  },
  'zip-02': {
    verb: 'the ZIP letters pop off the page',
    parts: [null, pop([14.8, 16.5], 1.14, { as: 'letters' })],
  },
  zip: {
    verb: 'the ZIP letters write themselves under the page',
    parts: [beat([12, 7.5], { delay: 0.3 }), retrace({ as: 'letters' })],
  },
  'zoom-circle': {
    verb: 'the camera lens extends inside the ring',
    parts: [null, beat([9.8, 12], { delay: 0.2 }), scaleFrom('X', [15, 12], [16.3, 12], [1, 1.3, 0.94, 1], { as: 'lens' })],
  },
  'zoom-square': {
    verb: 'the camera hops inside its tile',
    parts: [beat(C, { delay: 0.2 }), hop([9.8, 12], 1), hop([16.3, 12], 1)],
  },
  zoom: {
    verb: 'the lens pushes out from the camera',
    parts: [beat([8.5, 12], { delay: 0.16 }), nudge([19.5, 12], 1.2, 0, { as: 'lens' })],
  },
  zsh: {
    verb: 'the prompt slash writes across the shell',
    parts: [beat(C, { delay: 0.22 }), draw({ as: 'slash' })],
  },
  zzz: {
    verb: 'the Zs float up and fade in turn',
    parts: [float([8, 18], 0), float([7.5, 8], 0.24), float([17, 12], 0.12)],
  },
}

export default settleSpecs(specs)
