/**
 * Page 34 — gymnastic → health.
 *
 * Gallery page (80 public icons). Visible handcrafted original skipped:
 * headphone-off. The hidden handcrafted headphones sits in this span and is
 * skipped too.
 *
 * Twenty pointing hands share one family rule: the bare name pokes twice,
 * -01 nudges, -02 wags from the wrist, -03 winds back and thrusts, -04
 * points and holds. Headings rebuild their H and let the level digit act.
 * Hands grab, clap, pray and hold their props.
 *
 * Identical-geometry pairs get different jobs: hamburger / hamburger-01,
 * hand-bag / hand-bag-01, hand-pointing-{down,left,right} / -01, hdr / hdr-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  dim,
  draw,
  fall,
  flex,
  flip,
  glint,
  hold,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const DIR = { down: [0, 1], left: [-1, 0], right: [1, 0] }

/** The pointing-hand family. */
const hand = {
  poke: (c, [x, y]) => ride(c, [[0, 0], [x * 1.6, y * 1.6], [0, 0], [x * 1.1, y * 1.1], [0, 0]], { as: 'hand', times: [0, 0.22, 0.44, 0.66, 1], ease: 'easeInOut', dur: 0.66 }),
  nudge: (c, [x, y]) => nudge(c, x * 2, y * 2, { as: 'hand' }),
  wag: (c, [x, y]) => around([c[0] - x * 8, c[1] - y * 8], c, [0, 8, -6, 3, 0], { as: 'hand', dur: 0.66 }),
  thrust: (c, [x, y]) => ride(c, [[0, 0], [-x * 0.8, -y * 0.8], [x * 2, y * 2], [x * -0.2, y * -0.2], [0, 0]], { as: 'hand', times: [0, 0.3, 0.5, 0.76, 1], ease: ['easeOut', 'easeIn', 'easeOut', 'easeInOut'], dur: 0.66 }),
  hold: (c, [x, y]) => hold(c, x * 1.8, y * 1.8, { as: 'hand' }),
}
const heading = (digit) => ({ parts: [null, null, digit, flex('X', [3.5, 12], [8.5, 12], [1, 0.3, 1.06, 1, 1], { as: 'bar' })] })

// ---------------------------------------------------------------------------

const specs = {
  gymnastic: {
    verb: 'the two rings swing out on their straps',
    parts: [
      around([16, 2], [16, 16], [0, 8, -6, 2, 0], { as: 'ring' }),
      around([16, 2], [16, 9], [0, 8, -6, 2, 0], { as: 'ring' }),
      around([16, 2], [16, 4.5], [0, 8, -6, 2, 0], { as: 'ring' }),
      around([8, 2], [8, 16], [0, -8, 6, -2, 0], { as: 'ring' }),
      around([8, 2], [8, 9], [0, -8, 6, -2, 0], { as: 'ring' }),
      around([8, 2], [8, 4.5], [0, -8, 6, -2, 0], { as: 'ring' }),
    ],
  },
  hackerrank: {
    verb: 'the H rewrites while the arrow tips bounce up and down',
    parts: [null, draw({ as: 'stem', delay: 0.06 }), draw({ as: 'bar', delay: 0.16 }), ride([14.5, 16.5], out(0, 1), { as: 'tip', delay: 0.1 }), ride([9.5, 7.5], out(0, -1), { as: 'tip' }), draw({ as: 'stem', delay: 0.1 })],
  },
  'hair-clips': {
    verb: 'the clip snaps shut on the strand',
    parts: [around([8, 18], [8.5, 15.9], [0, -16, 4, -1, 0], { as: 'clip' }), null, retrace({ as: 'hair', delay: 0.1 })],
  },
  'hair-dryer': {
    verb: 'the dryer blows and its body hums',
    parts: [shake([12, 7], { as: 'dryer', dur: 0.5 }), null, null, around([7, 19], [7, 20.5], [0, 14, -8, 3, 0], { as: 'cord' })],
    extras: [trail('M21 5H23M21 7H24M21 9H23', 1.4)],
  },
  haji: {
    verb: 'the pilgrim bows his head in prayer',
    parts: [null, null, null, null, null, around([12, 13], [12, 7], [0, 10, 10, 0, 0], { as: 'head', dur: 0.9 }), around([12, 13], [12, 5.5], [0, 10, 10, 0, 0], { as: 'head', dur: 0.9 })],
  },
  'halal-lab': {
    verb: 'the corner leaf unfolds from the frame',
    parts: [null, swell([21, 3], [16.5, 7.5], [1, 0.7, 1.08, 1, 1], { as: 'leaf' })],
  },
  halal: {
    verb: 'the seal turns and the lettering rewrites',
    parts: [retrace({ as: 'letters', delay: 0.1 }), lap(C, 45, { as: 'seal', dur: 0.7 })],
  },
  ham: {
    verb: 'the ham wobbles like jelly',
    parts: [{ as: 'ham', origin: [12.3, 11.7], transform: ['scale(1, 1)', 'scale(1.06, 0.94)', 'scale(0.96, 1.04)', 'scale(1.02, 0.98)', 'scale(1, 1)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.66 }],
  },
  'hamburger-01': {
    verb: 'the top bun lifts and the sesame seeds hop',
    parts: [ride([12, 7], out(0, -1.4), { as: 'bun' }), null, ride([10, 7], out(0, -2), { as: 'seed' }), ride([15, 7], out(0, -2), { as: 'seed', delay: 0.06 })],
  },
  hamburger: {
    verb: 'the burger is squashed for a bite',
    parts: [ride([12, 7], out(0, 1), { as: 'bun' }), flex('Y', [12, 20], [12, 16.5], [1, 0.8, 1.06, 1, 1], { as: 'patty' }), ride([10, 7], out(0, 1), { as: 'bun' }), ride([15, 7], out(0, 1), { as: 'bun' })],
  },
  'hamburger-02': {
    verb: 'the layers stack: top bun drops onto the patty',
    parts: [ride([12, 7.5], out(0, -1.6), { as: 'bun' }), null, beat([12, 13], { as: 'patty', delay: 0.2 }), ride([14.5, 7.5], out(0, -1.6), { as: 'seed' }), ride([9, 8], out(0, -1.6), { as: 'seed' })],
  },
  hammer: {
    verb: 'the hammer lifts and strikes',
    parts: [around([2.5, 20], [15.8, 9.5], [0, -18, 6, -1, 0], { as: 'hammer', times: [0, 0.4, 0.56, 0.78, 1] }), around([2.5, 20], [7.8, 15.5], [0, -18, 6, -1, 0], { as: 'hammer', times: [0, 0.4, 0.56, 0.78, 1] })],
  },

  // --- bags ----------------------------------------------------------------------------------
  'hand-bag-01': {
    verb: 'the bag is lifted by its strap',
    parts: [ride([12, 15.5], out(0, -1.2), { as: 'bag', delay: 0.04 }), flex('Y', [12, 11], [12, 6.5], [1, 0.8, 1.06, 1, 1], { as: 'strap' }), ride([12, 17.5], out(0, -1.2), { as: 'bag', delay: 0.04 }), ride([16.5, 16], out(0, -1.2), { as: 'bag', delay: 0.04 }), ride([7.6, 16], out(0, -1.2), { as: 'bag', delay: 0.04 })],
  },
  'hand-bag': {
    verb: 'the clasp flips open and the bag sways',
    parts: [around([12, 2], [12, 15.5], [0, -4, 3, -1, 0], { as: 'bag' }), null, flip([12, 17.5], 1, { as: 'clasp', delay: 0.1 }), around([12, 2], [16.5, 16], [0, -4, 3, -1, 0], { as: 'bag' }), around([12, 2], [7.6, 16], [0, -4, 3, -1, 0], { as: 'bag' })],
  },
  'hand-bag-02': {
    verb: 'the bag swings from its handle',
    parts: [around([12, 1], [12, 16.8], [0, 6, -4, 2, 0], { as: 'bag' }), around([12, 1], [12, 16.5], [0, 6, -4, 2, 0], { as: 'bag' }), around([12, 1], [12, 11.5], [0, 6, -4, 2, 0], { as: 'bag' }), around([12, 1], [12, 11.5], [0, 6, -4, 2, 0], { as: 'bag' }), null],
  },
  'hand-beater': {
    verb: 'the whisk beats in a little circle',
    parts: [null, null, ride([16.1, 8], [[0, 0], [1, -0.6], [0, -1.2], [-1, -0.6], [0, 0]], { as: 'whisk', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.6 }), ride([14.5, 9.5], [[0, 0], [1, -0.6], [0, -1.2], [-1, -0.6], [0, 0]], { as: 'whisk', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.6 })],
  },
  'hand-coins': {
    verb: 'the coin drops into the open hand',
    parts: [null, beat([11, 14], { as: 'hand', delay: 0.26 }), null, ride([18, 7], [[0, 0], [-1, 3], [-1, 3], [0, 0], [0, 0]], { as: 'coin', times: [0, 0.3, 0.6, 0.86, 1] })],
  },
  'hand-fist': {
    verb: 'the knuckles bump forward one after another',
    parts: [ride([18.9, 7], out(0, -0.8), { as: 'knuckle', delay: 0.18 }), ride([14.9, 6.5], out(0, -0.8), { as: 'knuckle', delay: 0.12 }), ride([10.9, 5.5], out(0, -0.8), { as: 'knuckle', delay: 0.06 }), ride([6.9, 6.3], out(0, -0.8), { as: 'knuckle' }), null],
  },
  'hand-grab': {
    verb: 'the fingers curl in to grab',
    parts: [null, flex('Y', [15.8, 9.5], [15.8, 7.3], [1, 0.6, 1.04, 1, 1], { as: 'finger', delay: 0.06 }), flex('Y', [12.3, 8.5], [12.3, 6.3], [1, 0.6, 1.04, 1, 1], { as: 'finger', delay: 0.03 }), flex('Y', [8.8, 12], [8.8, 8.5], [1, 0.7, 1.04, 1, 1], { as: 'finger' })],
  },
  'hand-grip': {
    verb: 'the hands squeeze the ball between them',
    parts: [ride([5.9, 16.7], out(0.8, 0), { as: 'hand' }), ride([18.1, 16.7], out(-0.8, 0), { as: 'hand' }), flex('X', [12, 4.5], [12, 4.5], [1, 0.8, 1.06, 1, 1], { as: 'ball' }), null, null],
  },
  'hand-heart': {
    verb: 'the heart rises out of the open hand and beats',
    parts: [{ ...ride([16, 6.5], [[0, 0], [0, -1], [0, -1], [0, 0], [0, 0]], { as: 'heart' }), transform: ['translate(0px, 0px) scale(1)', 'translate(0px, -1px) scale(1.15)', 'translate(0px, -1px) scale(0.98)', 'translate(0px, 0px) scale(1.04)', 'translate(0px, 0px) scale(1)'] }, null, null, null],
  },
  'hand-helping': {
    verb: 'the hand reaches out and lifts',
    parts: [null, ride([11, 10.3], out(0.4, -0.8), { as: 'hand' }), ride([14, 15.3], out(0.4, -0.8), { as: 'hand', delay: 0.04 })],
  },
  'hand-metal': {
    verb: 'the rock horns shake in the air',
    parts: [shake([12, 22], { as: 'hand', dur: 0.66 }), null, null, null],
  },
  'hand-platter': {
    verb: 'the cloche lifts off the platter',
    parts: [null, null, ride([12, 6.5], out(0, -2), { as: 'cloche' }), null, ride([12, 6.5], out(0, -2), { as: 'cloche' }), null],
  },

  // --- pointing hands ------------------------------------------------------------------------
  'hand-pointing-down-01': { verb: 'the hand nudges downward', parts: [hand.nudge([12.4, 12.3], DIR.down)] },
  'hand-pointing-down-02': { verb: 'the hand wags from the wrist, pointing down', parts: [hand.wag([12, 12], DIR.down)] },
  'hand-pointing-down-03': { verb: 'the hand winds back and thrusts down', parts: [hand.thrust([12.2, 12], DIR.down)] },
  'hand-pointing-down-04': { verb: 'the hand points down and holds', parts: [hand.hold([11.7, 12], DIR.down)] },
  'hand-pointing-down': { verb: 'the hand pokes downward twice', parts: [hand.poke([12.4, 12.3], DIR.down)] },
  'hand-pointing-left-01': { verb: 'the hand nudges to the left', parts: [hand.nudge([11.7, 12.4], DIR.left)] },
  'hand-pointing-left-02': { verb: 'the hand wags from the wrist, pointing left', parts: [hand.wag([12, 12], DIR.left)] },
  'hand-pointing-left-03': { verb: 'the hand winds back and thrusts left', parts: [hand.thrust([12, 12.2], DIR.left)] },
  'hand-pointing-left-04': { verb: 'the hand points left and holds', parts: [hand.hold([12, 11.7], DIR.left)] },
  'hand-pointing-left': { verb: 'the hand pokes left twice', parts: [hand.poke([11.7, 12.4], DIR.left)] },
  'hand-pointing-right-01': { verb: 'the hand nudges to the right', parts: [hand.nudge([12.3, 12.4], DIR.right)] },
  'hand-pointing-right-02': { verb: 'the hand wags from the wrist, pointing right', parts: [hand.wag([12, 12], DIR.right)] },
  'hand-pointing-right-03': { verb: 'the hand winds back and thrusts right', parts: [hand.thrust([12, 12.2], DIR.right)] },
  'hand-pointing-right-04': { verb: 'the hand points right and holds', parts: [hand.hold([12, 11.7], DIR.right)] },
  'hand-pointing-right': { verb: 'the hand pokes right twice', parts: [hand.poke([12.3, 12.4], DIR.right)] },

  'hand-prayer': {
    verb: 'the palms press together in prayer',
    parts: [ride([13.8, 12.7], out(-0.5, 0), { as: 'palm' }), ride([10.3, 12.7], out(0.5, 0), { as: 'palm' }), ride([17, 12], out(-0.6, -0.4), { as: 'arm' }), ride([7, 12], out(0.6, -0.4), { as: 'arm' })],
  },
  'hand-sanitizer': {
    verb: 'the pump is pressed and a drop lands in the hand',
    parts: [null, lap([9.5, 15.5], 90, { as: 'cross', dur: 0.6, delay: 0.2 }), ride([9.5, 7.8], out(0, 0.8), { as: 'pump' }), ride([9.5, 4], out(0, 0.8), { as: 'pump' }), ride([15, 3.9], out(0, 0.8), { as: 'pump' }), fall([19.5, 10], 0, 2.4, { as: 'drop', delay: 0.1 })],
  },
  hand: {
    verb: 'the hand waves hello',
    parts: [around([12, 22], [12, 14.5], [0, -12, 10, -5, 0], { as: 'hand', dur: 0.8 }), around([12, 22], [16.8, 7.3], [0, -12, 10, -5, 0], { as: 'hand', dur: 0.8 }), around([12, 22], [13.3, 6.3], [0, -12, 10, -5, 0], { as: 'hand', dur: 0.8 }), around([12, 22], [9.8, 9], [0, -12, 10, -5, 0], { as: 'hand', dur: 0.8 })],
  },
  handbag: {
    verb: 'the handle lifts the bag, which dangles',
    parts: [around([12, 3], C, [0, 5, -4, 2, 0], { as: 'bag', delay: 0.06 }), ride([12, 6], out(0, -0.8), { as: 'handle' })],
  },
  handcuffs: {
    verb: 'the cuffs click shut and the chain rattles',
    parts: [pop([8, 13], 1.06, { as: 'cuff' }), around([16, 9], [17.6, 15], [0, -14, 4, -1, 0], { as: 'cuff' }), pop([8, 14], 1.4, { as: 'lock', delay: 0.12 }), around([16, 9], [17.1, 16.1], [0, -14, 4, -1, 0], { as: 'cuff' }), shake([12, 5.4], { as: 'chain', delay: 0.14 })],
  },
  'hands-clapping': {
    verb: 'the hands clap and the impact marks flash',
    parts: [ride([9.5, 14.5], [[0, 0], [1, 0], [0, 0], [1, 0], [0, 0]], { as: 'hand', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 }), { as: 'spark', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.3, 0.5, 0.6], ease: 'linear', dur: 0.6 }, ride([19, 13], [[0, 0], [-1, 0], [0, 0], [-1, 0], [0, 0]], { as: 'hand', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 }), ride([12.3, 4.8], [[0, 0], [-0.4, -0.4], [0, 0], [-0.4, -0.4], [0, 0]], { as: 'hand', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 })],
  },
  handshake: {
    verb: 'the two hands shake up and down',
    parts: [ride([14.8, 10.2], [[0, 0], [0, -0.8], [0, 0.8], [0, -0.4], [0, 0]], { as: 'hand', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7 }), ride([10, 12.7], [[0, 0], [0, -0.8], [0, 0.8], [0, -0.4], [0, 0]], { as: 'hand', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7 })],
  },
  hanger: {
    verb: 'the hanger swings on its hook',
    parts: [around([12, 4.5], [12, 15.5], [0, 8, -6, 2, 0], { as: 'hanger' }), around([12, 4.5], [12, 8], [0, 8, -6, 2, 0], { as: 'hanger' })],
  },
  'hanging-clock': {
    verb: 'the clock swings on its bracket and the hand ticks',
    parts: [
      null,
      around([17.5, 6], [17.5, 15.5], [0, 8, -6, 2, 0], { as: 'clock' }),
      null,
      around([17.5, 6], [17.5, 8.5], [0, 8, -6, 2, 0], { as: 'clock' }),
      null,
      null,
      around([17.5, 6], [18, 15.3], [0, 8, -6, 2, 0], { as: 'clock' }),
    ],
  },
  hangout: {
    verb: 'the quote marks hop in turn inside the bubble',
    parts: [null, hop([8.5, 11], 1, { as: 'quote' }), hop([15.5, 11], 1, { as: 'quote', delay: 0.1 })],
  },
  'happy-01': {
    verb: 'the closed eyes squint with joy and the smile widens',
    parts: [null, flex('X', [12, 16], [12, 16], [1, 1.2, 0.95, 1.03, 1], { as: 'mouth' }), hop([12, 8.4], 0.8, { as: 'eyes' })],
  },
  happy: {
    verb: 'the face laughs: the eyes bounce and the smile widens',
    parts: [null, flex('Y', [12, 15], [12, 16], [1, 1.4, 0.9, 1.1, 1], { as: 'mouth' }), hop([15.5, 9], 0.8, { as: 'eye' }), hop([8.5, 9], 0.8, { as: 'eye', delay: 0.06 })],
  },

  // --- hard drives, hats --------------------------------------------------------------------
  'hard-drive-download': {
    verb: 'the arrow drops into the drive and the lights blink',
    parts: [beat([12, 18], { as: 'drive', delay: 0.26 }), blink({ as: 'led', delay: 0.2 }), blink({ as: 'led', delay: 0.3 }), ride([12, 6], out(0, 2), { as: 'arrow' })],
  },
  'hard-drive-upload': {
    verb: 'the arrow lifts out of the drive as the lights blink',
    parts: [blink({ as: 'led' }), blink({ as: 'led', delay: 0.1 }), ride([12, 6], out(0, -2), { as: 'arrow' }), null],
  },
  'hard-drive': {
    verb: 'the drive whirs: it hums and the lights flicker',
    parts: [shake([12, 12], { as: 'drive', dur: 0.4 }), null, blink({ as: 'led' })],
  },
  'hard-hat': {
    verb: 'the hard hat is knocked and rings',
    parts: [null, ride([12, 8], out(0, 0.8), { as: 'ridge' }), shake([12, 11], { as: 'shell', delay: 0.1 })],
  },
  hash: {
    verb: 'the hash slants back and forth',
    parts: [{ as: 'slant', origin: C, transform: ['skewX(0deg)', 'skewX(12deg)', 'skewX(-6deg)', 'skewX(0deg)'], times: [0, 0.32, 0.66, 1], ease: 'easeInOut', dur: 0.6 }, flex('X', C, C, [1, 0.8, 1.06, 1, 1], { as: 'bars', delay: 0.06 })],
  },
  hashtag: {
    verb: 'the strokes write the hashtag: two slants then two bars',
    parts: [draw({ as: 'slant', delay: 0.1 }), draw({ as: 'slant' }), draw({ as: 'bar', delay: 0.2 }), draw({ as: 'bar', delay: 0.3 })],
  },
  'hat-glasses': {
    verb: 'the hat tips and the glasses push up',
    parts: [around([20, 10], [12, 10.5], [0, -8, 4, -1, 0], { as: 'hat' }), around([20, 10], [12, 6.7], [0, -8, 4, -1, 0], { as: 'hat' }), ride([17, 18], out(0, -0.8), { as: 'lens', delay: 0.1 }), ride([12, 17], out(0, -0.8), { as: 'bridge', delay: 0.1 }), ride([7, 18], out(0, -0.8), { as: 'lens', delay: 0.1 })],
  },
  hat: {
    verb: 'the hat is raised in greeting',
    parts: [ride([12, 16.5], [[0, 0], [0, -2], [0, -2], [0, 0], [0, 0]], { as: 'hat' }), ride([12, 10], [[0, 0], [0, -2], [0, -2], [0, 0], [0, 0]], { as: 'hat' }), ride([12, 10], [[0, 0], [0, -2], [0, -2], [0, 0], [0, 0]], { as: 'hat' })],
  },
  haze: {
    verb: 'the sun dims behind the haze lines drifting across',
    parts: [dim({ as: 'sun' }), ride([12, 18], out(1.4, 0), { as: 'haze', dur: 0.8 }), ride([12, 22], out(-1.4, 0), { as: 'haze', dur: 0.8 }), dim({ as: 'rays', delay: 0.06 })],
  },
  hd: {
    verb: 'the HD letters flip in the screen',
    parts: [null, flip([8, 12], 1, { as: 'letter' }), flip([16, 12], 1, { as: 'letter', delay: 0.1 })],
  },
  hdd: {
    verb: 'the platter spins and the slot light pulses',
    parts: [null, lap([12, 9.5], 360, { as: 'platter', dur: 0.9 }), flex('X', [12, 19], [12, 19], [1, 1.4, 0.9, 1, 1], { as: 'slot' })],
  },
  'hdmi-port': {
    verb: 'the plug pushes into the port',
    parts: [beat(C, { as: 'port', delay: 0.2 }), ride([12, 11], out(0, -0.8), { as: 'pins' })],
  },
  'hdr-01': {
    verb: 'the HDR letters hop one by one under the file',
    parts: [hop([5.8, 19], 1.2, { as: 'letter' }), hop([11.8, 19], 1.2, { as: 'letter', delay: 0.08 }), hop([18, 19], 1.2, { as: 'letter', delay: 0.16 }), null],
  },
  hdr: {
    verb: 'the file lifts its label and the letters glow in turn',
    parts: [{ as: 'letter', opacity: [1, 0.2, 1], times: [0, 0.3, 0.6], ease: 'easeInOut', dur: 0.7 }, { as: 'letter', opacity: [1, 0.2, 1], times: [0, 0.3, 0.6], ease: 'easeInOut', dur: 0.7, delay: 0.1 }, { as: 'letter', opacity: [1, 0.2, 1], times: [0, 0.3, 0.6], ease: 'easeInOut', dur: 0.7, delay: 0.2 }, ride([12, 7.5], out(0, -0.6), { as: 'file' })],
  },
  'hdr-02': {
    verb: 'the HDR letters slide in from the right',
    parts: [null, ride([19.5, 16.5], out(1.4, 0), { as: 'letter' }), ride([14, 16.5], out(1.4, 0), { as: 'letter', delay: 0.06 }), ride([8.5, 16.5], out(1.4, 0), { as: 'letter', delay: 0.12 })],
  },

  // --- headings ----------------------------------------------------------------------------
  'heading-01': { verb: 'the H crossbar redraws and the 1 hops', ...heading(hop([18.5, 15], 1.2, { as: 'digit' })) },
  'heading-02': { verb: 'the H crossbar redraws and the 2 rewrites', ...heading(sweep({ as: 'digit' })) },
  'heading-03': { verb: 'the H crossbar redraws and the 3 flips', ...heading(flip([18.5, 15], 1, { as: 'digit' })) },
  'heading-04': { verb: 'the H crossbar redraws and the 4 pops', ...heading(pop([18.5, 15], 1.25, { as: 'digit' })) },
  'heading-05': { verb: 'the H crossbar redraws and the 5 slides in', ...heading(ride([18.5, 15], out(1.2, 0), { as: 'digit' })) },
  'heading-06': { verb: 'the H crossbar redraws and the 6 rolls', ...heading(lap([18.5, 15], 360, { as: 'digit', dur: 0.8 })) },
  heading: {
    verb: 'the two posts step apart and the crossbar stretches with them',
    parts: [nudge([6, 12], -1, 0, { as: 'post' }), nudge([18, 12], 1, 0, { as: 'post' }), flex('X', C, C, [1, 1.2, 0.96, 1.01, 1], { as: 'bar' })],
  },

  // --- headsets, health ---------------------------------------------------------------------
  'headphone-mute': {
    verb: 'the slash cuts across and the ear cups shudder',
    parts: [shake([6.4, 17.6], { as: 'cup', delay: 0.1 }), draw({ as: 'slash' }), shake([17.1, 18.8], { as: 'cup', delay: 0.1 }), dim({ as: 'band', delay: 0.1 })],
  },
  'headset-connected': {
    verb: 'the check ticks and the ear cups pulse',
    parts: [null, pop([6.4, 17.6], 1.08, { as: 'cup', delay: 0.2 }), pop([17.6, 17.6], 1.08, { as: 'cup', delay: 0.24 }), draw({ as: 'check' })],
  },
  'headset-off': {
    verb: 'the slash cuts across and the headset fades',
    parts: [draw({ as: 'slash' }), dim({ as: 'cup', delay: 0.1 }), dim({ as: 'cup', delay: 0.1 }), dim({ as: 'band', delay: 0.1 })],
  },
  headset: {
    verb: 'the ear cups bob to the music',
    parts: [ride([18, 14], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'cup', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 }), ride([6, 14], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'cup', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7, delay: 0.12 }), null],
  },
  healtcare: {
    verb: 'the heart beats over the open hand',
    parts: [{ as: 'heart', origin: [12.5, 6.8], transform: ['scale(1)', 'scale(1.16)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 1], ease: 'easeInOut', dur: 0.7 }, null, null],
  },
  health: {
    verb: 'the heart beats and the cross turns',
    parts: [{ as: 'heart', origin: [12, 11.7], transform: ['scale(1)', 'scale(1.1)', 'scale(0.98)', 'scale(1.06)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 1], ease: 'easeInOut', dur: 0.7 }, lap(C, 90, { as: 'cross', dur: 0.62 })],
  },
}

export default settleSpecs(specs)
