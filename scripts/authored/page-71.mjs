/**
 * Page 71 — tulip → usb-bugs.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped: `undo`
 * (visible), `umbrella` and `upload-01` (hidden).
 *
 * Televisions wiggle their antenna, switch off like a CRT, or bounce on their
 * feet. Unlink icons pull their halves apart along the break. Upload icons
 * lift their arrow: nudge, leave and return, retrace, hold, double push.
 * Unfold chevrons pull together (less) or push apart (more).
 *
 * Identical-geometry pairs get different jobs: tv / -01, two-finger / -01,
 * txt / -01, typescript / -01, underpants / -01, unlink / -01,
 * upload-circle / -01, upload-square / -01. `upload` shares geometry with the
 * handcrafted `upload-01` (arrow launches off the top), so it pushes with a
 * perpendicular squeeze instead.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  DIR,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  fall,
  flex,
  flip,
  hand,
  hold,
  hop,
  nudge,
  pop,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  swing,
  tap,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
/** Push along Y with a perpendicular squeeze (arrow-up-02 beat). */
const push = (c, dy, o = {}) => ({
  as: 'arrow',
  origin: c,
  transform: ['translateY(0px) scaleX(1)', `translateY(${dy}px) scaleX(0.94)`, `translateY(${-dy * 0.12}px) scaleX(1.02)`, 'translateY(0px) scaleX(1)'],
  times: [0, 0.44, 0.72, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  ...o,
})
/** Two short pushes along a vector. */
const twice = (c, dx, dy, o = {}) => ride(c, [[0, 0], [dx, dy], [0, 0], [dx, dy], [0, 0]], { as: 'arrow', times: [0, 0.22, 0.44, 0.66, 1], ease: 'easeInOut', dur: 0.7, ...o })
/** CRT switch-off: the screen pinches to a line and opens again. */
const crt = (c, o = {}) => ({
  as: 'screen',
  origin: c,
  transform: ['scaleY(1)', 'scaleY(0.08)', 'scaleY(1.04)', 'scaleY(1)'],
  times: [0, 0.3, 0.66, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.6,
  ...o,
})
const antenna = (o = {}) => wiggle([12.5, 6], [12.5, 4], 14, { as: 'antenna', ...o })
/** Squash–stretch along Y for a whole logo. */
const boing = (c, o = {}) => ({
  as: 'logo',
  origin: c,
  transform: ['scale(1, 1)', 'scale(1.08, 0.9)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: OUT,
  dur: 0.62,
  ...o,
})
const lift = (c, h = 1.2, o = {}) => ride(c, out(0, -h), { as: 'lid', ...o })

// ---------------------------------------------------------------------------

const specs = {
  tulip: {
    verb: 'the bloom sways on its stem while the leaves flutter',
    parts: [
      wiggle([12, 21], [15, 18], -12, { as: 'leaf', delay: 0.1 }),
      wiggle([12, 21], [9, 18], 12, { as: 'leaf', delay: 0.1 }),
      null,
      wiggle([12, 22], [14.5, 8.5], 7, { as: 'bloom' }),
      wiggle([12, 22], [12, 3.3], 7, { as: 'bloom' }),
      wiggle([12, 22], [9.5, 8.5], 7, { as: 'bloom' }),
    ],
  },
  tumblr: {
    verb: 'the t squashes and springs back up',
    parts: [boing([12, 12.7])],
  },
  'turkish-lira': {
    verb: 'the two slanted bars write themselves in turn and the stem settles',
    parts: [beat([14, 12]), line(0.12), line(0)],
  },
  'turtle-neck': {
    verb: 'the sweater shrugs and the collar folds up',
    parts: [
      ride([12, 11.6], out(0, -0.7), { as: 'body' }),
      ride([12, 16], out(0, -0.7), { as: 'body' }),
      scaleFrom('Y', [12, 6.3], [12, 5.7], [1, 2, 0.8, 1], { as: 'collar', delay: 0.08 }),
    ],
  },

  // --- tv -------------------------------------------------------------------------------------------
  'tv-01': {
    verb: 'the screen switches off to a line and back on, the antenna hops',
    parts: [crt([12, 14]), hop([12.5, 4], 0.9, { delay: 0.2 })],
  },
  'tv-02': {
    verb: 'the set bounces on its feet',
    parts: [
      ride([12, 11], [[0, 0], [0, -1], [0, 0.3], [0, 0], [0, 0]], { as: 'set', times: [0, 0.3, 0.56, 0.8, 1] }),
      scaleFrom('Y', [18.5, 21], [18.5, 20], [1, 1.5, 0.8, 1], { as: 'leg', times: [0, 0.3, 0.56, 1] }),
      scaleFrom('Y', [5.5, 21], [5.5, 20], [1, 1.5, 0.8, 1], { as: 'leg', times: [0, 0.3, 0.56, 1] }),
    ],
  },
  'tv-fix': {
    verb: 'the wrench turns a bolt on the screen',
    parts: [beat([12, 14], { delay: 0.3 }), swing([12, 14], [12, 14], [0, -34, 10, -4, 0], { as: 'wrench' }), null],
  },
  'tv-issue': {
    verb: 'the set rattles, the bang stretches and its dot drops in',
    parts: [shake([12, 14]), pop([12, 18], 1.8, { as: 'dot', delay: 0.22 }), scaleFrom('Y', [12, 15], [12, 13], [1, 1.3, 0.9, 1], { as: 'stem' }), null],
  },
  'tv-smart': {
    verb: 'the cast arcs light up from the corner',
    parts: [null, wave([18.5, 15.5], { origin: [14.5, 11.5] }), null, null],
  },
  tv: {
    verb: 'the antenna wiggles for signal and the screen answers',
    parts: [beat([12, 14], { delay: 0.24 }), antenna()],
  },

  'twenty-four-hours-clock': {
    verb: 'the ring winds back around the day and the 24 pops',
    parts: [
      swing(C, [12, 11.8], [0, -40, 8, -3, 0], { as: 'ring' }),
      pop([14.5, 19], 1.2, { as: 'digit', delay: 0.16 }),
      pop([20.5, 19], 1.2, { as: 'digit', delay: 0.24 }),
    ],
  },
  'twin-tower': {
    verb: 'the towers rise tier by tier and their antennas blink',
    parts: [
      null,
      hop([5.5, 17], 0.5),
      hop([5.5, 10], 0.7, { delay: 0.05 }),
      hop([5.5, 6], 0.9, { delay: 0.1 }),
      hop([18.5, 17], 0.5, { delay: 0.08 }),
      null,
      blink({ delay: 0.2 }),
      hop([18.5, 10], 0.7, { delay: 0.13 }),
      hop([18.5, 6], 0.9, { delay: 0.18 }),
      blink({ delay: 0.28 }),
      null,
      null,
    ],
  },
  twitch: {
    verb: 'the eyes blink twice inside the chat bubble',
    parts: [
      { as: 'eyes', origin: [14, 9], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.16, 0.32, 0.5, 0.7], ease: 'easeInOut', dur: 0.7 },
      null,
    ],
  },
  'twitter-square': {
    verb: 'the bird hops inside its tile',
    parts: [hop([12, 12], 1.2), beat(C, { delay: 0.18 })],
  },
  twitter: {
    verb: 'the bird tips forward and chirps',
    parts: [wiggle([6, 20], C, -8, { as: 'bird' })],
  },
  'two-circle': {
    verb: 'the 2 writes itself inside the ring',
    parts: [retrace({ as: 'digit' }), beat(C, { delay: 0.2 })],
  },
  'two-factor-access': {
    verb: 'the shackle lifts, the shield pops and the tick writes in',
    parts: [null, lift([8.5, 6.5], 1.2), pop([17.9, 12], 1.12, { as: 'shield', delay: 0.16 }), draw({ as: 'tick', delay: 0.26 })],
  },

  // --- two-finger -----------------------------------------------------------------------------------
  'two-finger-01': {
    verb: 'two fingers poke up twice',
    parts: [hand.poke([11.9, 12], DIR.up)],
  },
  'two-finger-02': {
    verb: 'two fingers wag from the wrist',
    parts: [hand.wag([11.9, 12], DIR.up)],
  },
  'two-finger-03': {
    verb: 'two fingers wind back and thrust up',
    parts: [hand.thrust([12.2, 12], DIR.up)],
  },
  'two-finger-04': {
    verb: 'two fingers nudge up and settle',
    parts: [hand.nudge([12, 12.1], DIR.up)],
  },
  'two-finger-05': {
    verb: 'two fingers press up and hold',
    parts: [hand.hold([12, 11.9], DIR.up)],
  },
  'two-finger': {
    verb: 'two fingers tap the glass',
    parts: [tap([11.9, 12])],
  },
  'two-square': {
    verb: 'the 2 hops and the tile flexes under it',
    parts: [flex('Y', [12, 21.5], C, [1, 0.94, 1.03, 0.99, 1], { as: 'tile', delay: 0.12 }), hop(C, 1.2)],
  },

  // --- txt / type -----------------------------------------------------------------------------------
  'txt-01': {
    verb: 'the TXT letters pop off the page',
    parts: [null, pop([12, 19], 1.14, { as: 'letters' })],
  },
  'txt-02': {
    verb: 'the letters slide right along the line',
    parts: [null, nudge([14, 16.5], 1.4, 0, { as: 'letters' })],
  },
  txt: {
    verb: 'the TXT letters write themselves under the page',
    parts: [beat([12, 7.5], { delay: 0.2 }), retrace({ as: 'letters' })],
  },
  'type-cursor': {
    verb: 'the text cursor blinks in the field',
    parts: [null, blink({ as: 'caret', dur: 0.9 })],
  },
  'typescript-01': {
    verb: 'the T and the S hop in turn',
    parts: [null, hop([16.5, 15], 1, { delay: 0.12 }), hop([10.5, 15], 1)],
  },
  'typescript-02': {
    verb: 'the T drops onto the page and the S writes in',
    parts: [null, ride([8.5, 19], [[0, 0], [0, -1.6], [0, 0.3], [0, 0], [0, 0]], { as: 'letter' }), retrace({ as: 'letter', delay: 0.14 })],
  },
  'typescript-03': {
    verb: 'the TS slides right and the page answers',
    parts: [beat(C, { delay: 0.2 }), nudge([15.3, 16.5], 1.2, 0, { as: 'letters' })],
  },
  typescript: {
    verb: 'the T stamps and the S writes itself',
    parts: [null, retrace({ as: 'letter', delay: 0.14 }), stamp([10.5, 15])],
  },

  // --- u --------------------------------------------------------------------------------------------
  uber: {
    verb: 'the bar writes in from the edge and the square pops',
    parts: [null, pop(C, 1.2, { delay: 0.22 }), draw({ as: 'bar' })],
  },
  'ufo-01': {
    verb: 'the saucer bobs and its lights blink in turn',
    parts: [
      ...[[12, 6.5], [12, 17.8], [12, 13], [12, 10]].map((c) => ride(c, [[0, 0], [0, -0.9], [0, 0.5], [0, -0.2], [0, 0]], { as: 'saucer', dur: 0.8 })),
      blink({ delay: 0.1 }),
      blink({ delay: 0.2 }),
      blink({ delay: 0 }),
    ],
  },
  ufo: {
    verb: 'the beam flashes and the speck is pulled up into the saucer',
    parts: [
      null,
      null,
      { as: 'beam', opacity: [1, 0.25, 1, 0.25, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 },
      { as: 'speck', origin: [12, 19], transform: ['translateY(0px)', 'translateY(-5px)', 'translateY(0px)', 'translateY(0px)'], opacity: [1, 0, 0, 1], times: [0, 0.5, 0.52, 1], ease: ['easeIn', 'linear', OUT], dur: 0.8 },
    ],
  },
  'umbrella-dollar': {
    verb: 'the umbrella sways on its handle and the coin flips',
    parts: [
      wiggle([12, 13.5], [12, 2.8], 8, { as: 'umbrella' }),
      wiggle([12, 13.5], [12, 8.5], 8, { as: 'umbrella' }),
      null,
      flip([17.5, 18.5], 1, { delay: 0.1 }),
    ],
  },
  'umbrella-off': {
    verb: 'the slash cuts across and the umbrella dims',
    parts: [{ as: 'dim', opacity: [1, 0.35, 0.35, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.7 }, { as: 'dim', opacity: [1, 0.35, 0.35, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.7 }, { as: 'dim', opacity: [1, 0.35, 0.35, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.7 }, draw({ as: 'slash' })],
  },
  unamused: {
    verb: 'the eyes roll sideways and the mouth tilts',
    parts: [null, ride([12, 8.5], [[0, 0], [1, -0.4], [1, -0.4], [0, 0], [0, 0]], { as: 'eyes', times: [0, 0.3, 0.7, 0.9, 1], dur: 0.8 }), swing([12.5, 15], [12.5, 15], [0, -10, -10, 0, 0], { as: 'mouth', times: [0, 0.3, 0.7, 0.9, 1], dur: 0.8 })],
  },
  'unarchive-03': {
    verb: 'the lid lifts and the arrow rises out of the box',
    parts: [null, lift([12, 5], 1.4), nudge([12, 14], 0, -2.2, { delay: 0.12 })],
  },
  unavailable: {
    verb: 'the slash writes across and the ring rattles',
    parts: [draw({ as: 'slash' }), shake([12.3, 12], { delay: 0.12 })],
  },
  'underpants-01': {
    verb: 'the underpants swing on the washing line',
    parts: [wiggle([12, 8], C, 7, { as: 'pants' }), wiggle([12, 8], [12, 16.3], 7, { as: 'pants' }), null],
  },
  'underpants-02': {
    verb: 'the waistband snaps and the leg lines kick out',
    parts: [null, scaleFrom('Y', [12, 8], C, [1, 1.12, 0.96, 1], { as: 'legs', delay: 0.1 }), { as: 'band', origin: [12, 8], transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.96)', 'scaleX(1)'], times: [0, 0.3, 0.64, 1], ease: OUT, dur: 0.5 }],
  },
  'underpants-03': {
    verb: 'the briefs shake out and the tag pops',
    parts: [shake([12, 14.3]), pop([12, 8], 1.4, { as: 'tag', delay: 0.18 }), shake([12, 12])],
  },
  underpants: {
    verb: 'the waistband stretches and snaps back',
    parts: [null, null, { as: 'band', origin: [12, 8], transform: ['scaleX(1)', 'scaleX(1.14)', 'scaleX(0.94)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.32, 0.5, 0.72, 1], ease: OUT, dur: 0.6 }],
  },
  'undo-02': {
    verb: 'the arc winds back counter-clockwise with its hook',
    parts: [swing(C, [12.6, 12], [0, -28, 6, -2, 0], { as: 'undo' }), swing(C, [6, 5.9], [0, -28, 6, -2, 0], { as: 'undo' })],
  },
  'undo-03': {
    verb: 'the return path retraces and the head steps left',
    parts: [retrace({ as: 'path' }), nudge([5, 8], -2, 0, { as: 'head' })],
  },
  'unfold-less': {
    verb: 'the two chevrons pull together',
    parts: [nudge([12, 16.5], 0, -1.6, { as: 'chevron' }), nudge([12, 7.5], 0, 1.6, { as: 'chevron' })],
  },
  'unfold-more-down': {
    verb: 'the lower arrowhead pushes down twice',
    parts: [null, twice([12, 17], 0, 1.4)],
  },
  'unfold-more-up': {
    verb: 'the upper arrowhead pushes up twice',
    parts: [twice([12, 7], 0, -1.4), null],
  },
  'unfold-more': {
    verb: 'the two chevrons push apart',
    parts: [nudge([12, 16.5], 0, 1.6, { as: 'chevron' }), nudge([12, 7.5], 0, -1.6, { as: 'chevron' })],
  },
  'ungroup-items': {
    verb: 'the corner handles fly out and the two bars part',
    parts: [
      ride([4, 4], out(-1.2, -1.2), { as: 'corner' }),
      ride([20, 4], out(1.2, -1.2), { as: 'corner' }),
      ride([20, 20], out(1.2, 1.2), { as: 'corner' }),
      ride([4, 20], out(-1.2, 1.2), { as: 'corner' }),
      ride([12, 9], out(0, -1), { as: 'item', delay: 0.06 }),
      ride([12, 15], out(0, 1), { as: 'item', delay: 0.06 }),
    ],
  },
  'ungroup-layers': {
    verb: 'the top layer lifts off the bottom one while the handles pinch in',
    parts: [
      ride([4, 4], out(0.6, 0.6), { as: 'corner', delay: 0.1 }),
      ride([20, 4], out(-0.6, 0.6), { as: 'corner', delay: 0.1 }),
      ride([20, 20], out(-0.6, -0.6), { as: 'corner', delay: 0.1 }),
      ride([4, 20], out(0.6, -0.6), { as: 'corner', delay: 0.1 }),
      hold([12, 10.5], 0, -1.6, { as: 'layer' }),
      null,
    ],
  },
  ungroup: {
    verb: 'the two blocks slide apart along the diagonal',
    parts: [hold([9, 6.5], -1.2, -1.2, { as: 'block' }), hold([15, 17.5], 1.2, 1.2, { as: 'block' })],
  },
  unhappy: {
    verb: 'the mouth sinks and the brows droop',
    parts: [null, ride([12, 16.5], [[0, 0], [0, 0.8], [0, 0.8], [0, 0], [0, 0]], { as: 'mouth', times: [0, 0.3, 0.7, 0.9, 1], dur: 0.8 }), ride([12.1, 8.9], [[0, 0], [0, 0.6], [0, 0.6], [0, 0], [0, 0]], { as: 'brows', times: [0, 0.3, 0.7, 0.9, 1], dur: 0.8, delay: 0.06 })],
  },
  'universal-access-circle': {
    verb: 'the figure throws its arms up',
    parts: [null, hop([12, 6.8], 0.6, { delay: 0.1 }), scaleFrom('Y', [12, 9], [12, 9.5], [1, -1, -1, 1], { as: 'arms' }), null],
  },
  'universal-access': {
    verb: 'the figure hops up and lands',
    parts: [hop([12, 5], 1.3), hop([12, 8], 1.3), scaleFrom('Y', [12, 20.5], [12, 14.8], [1, 1.06, 1.06, 1], { as: 'legs', times: [0, 0.32, 0.62, 1] })],
  },
  university: {
    verb: 'the flag waves from the roof and the windows light up',
    parts: [null, null, null, null, null, wiggle([12, 8], [14, 4.8], -14, { as: 'flag' }), null, blink({ delay: 0.1 }), blink({ delay: 0.2 })],
  },

  // --- unlink ---------------------------------------------------------------------------------------
  'unlink-01': {
    verb: 'the two halves twist apart and the sparks flash',
    parts: [
      swing([12, 12], [14.5, 15.5], [0, 12, -4, 1, 0], { as: 'half' }),
      swing([12, 12], [15.5, 8.5], [0, -12, 4, -1, 0], { as: 'half' }),
      wave([4, 8.8], { as: 'sparks', delay: 0.14 }),
    ],
  },
  'unlink-02': {
    verb: 'the chain rattles and the break ticks fly out',
    parts: [shake(C), ride([19.5, 19.5], out(1.2, 1.2), { as: 'tick', delay: 0.1 }), ride([4.5, 4.5], out(-1.2, -1.2), { as: 'tick', delay: 0.1 })],
  },
  'unlink-03': {
    verb: 'the middle link vanishes and the halves pull apart',
    parts: [
      draw({ as: 'link' }),
      ride([18.5, 18.5], out(1, 1), { as: 'tick', delay: 0.14 }),
      ride([5.5, 5.5], out(-1, -1), { as: 'tick', delay: 0.14 }),
      ride([16.4, 7.5], out(0.9, -0.9), { as: 'half' }),
      ride([7.5, 16.4], out(-0.9, 0.9), { as: 'half' }),
    ],
  },
  'unlink-04': {
    verb: 'the halves split along the diagonal and the ticks blink',
    parts: [hold([15.2, 9.5], 0.9, -0.9, { as: 'half' }), hold([8.8, 14.5], -0.9, 0.9, { as: 'half' }), blink({ delay: 0.1, dur: 0.6 }), blink({ delay: 0.1, dur: 0.6 })],
  },
  'unlink-05': {
    verb: 'the chain squeezes and the break ticks burst outward',
    parts: [{ as: 'chain', origin: C, transform: ['scaleX(1)', 'scaleX(0.92)', 'scaleX(1.03)', 'scaleX(1)'], times: [0, 0.3, 0.64, 1], ease: OUT, dur: 0.5 }, pop(C, 1.18, { as: 'ticks', delay: 0.1 })],
  },
  'unlink-06': {
    verb: 'the halves slide apart vertically and the ticks fly sideways',
    parts: [ride([10, 14.5], out(0, 1.2), { as: 'half' }), ride([14, 9.5], out(0, -1.2), { as: 'half' }), ride([21, 12.5], out(1.2, 0), { as: 'tick', delay: 0.1 }), ride([3, 12.5], out(-1.2, 0), { as: 'tick', delay: 0.1 })],
  },
  unlink: {
    verb: 'the two halves pull apart and the sparks pop',
    parts: [ride([14.5, 15.5], out(-0.9, 0.9), { as: 'half' }), ride([15.5, 8.5], out(0.9, -0.9), { as: 'half' }), pop([4, 8.8], 1.3, { as: 'sparks', delay: 0.12 })],
  },
  unsplash: {
    verb: 'the top block drops into the slot',
    parts: [ride([12, 6], [[0, 0], [0, -1.4], [0, 0.6], [0, 0], [0, 0]], { as: 'block' }), beat([12, 15.3], { delay: 0.24 })],
  },

  // --- upload ---------------------------------------------------------------------------------------
  'upload-02': {
    verb: 'the solid arrow pushes up and the baseline stretches',
    parts: [push([12, 10.3], -2.4), { as: 'base', origin: [12, 21], transform: ['scaleX(1)', 'scaleX(1.1)', 'scaleX(0.98)', 'scaleX(1)'], times: [0, 0.44, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.5 }],
  },
  'upload-03': {
    verb: 'the arrow rises and the box answers',
    parts: [beat([12, 14], { delay: 0.2 }), null, nudge([12, 14], 0, -2.2)],
  },
  'upload-04': {
    verb: 'the tray dips and the arrow hops off it',
    parts: [ride([12, 18.8], [[0, 0], [0, 0.6], [0, 0], [0, 0], [0, 0]], { as: 'tray', times: [0, 0.2, 0.46, 0.8, 1] }), hop([12, 9], 1.8, { delay: 0.08 })],
  },
  'upload-05': {
    verb: 'the lid lifts and the arrow leaves through the top',
    parts: [null, lift([12, 4.5], 1.2), fall([12, 14], 0, -4, { delay: 0.1 })],
  },
  'upload-06': {
    verb: 'the shaft stretches up and carries the head',
    parts: [
      null,
      scaleFrom('Y', [12, 16], [12, 10], [1, 1.2, 0.95, 1], { as: 'shaft', times: [0, 0.4, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }),
      { as: 'head', origin: [12, 4.5], transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(0.6px)', 'translateY(0px)'], times: [0, 0.4, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 },
    ],
  },
  'upload-circle-01': {
    verb: 'the arrow leaves through the top and comes back from below',
    parts: [null, fall(C, 0, -3.4)],
  },
  'upload-circle-02': {
    verb: 'the arrow retraces upward and the ring answers',
    parts: [beat(C, { delay: 0.3 }), retrace({ as: 'arrow' })],
  },
  'upload-circle': {
    verb: 'the arrow nudges up inside the ring',
    parts: [beat(C, { delay: 0.2 }), nudge(C, 0, -2.2)],
  },
  'upload-square-01': {
    verb: 'the arrow pushes up twice',
    parts: [null, twice(C, 0, -1.6)],
  },
  'upload-square-02': {
    verb: 'the tile nods and the arrow pops',
    parts: [flex('Y', [12, 21.5], C, [1, 0.94, 1.03, 0.99, 1], { as: 'tile' }), pop(C, 1.18, { as: 'arrow', delay: 0.14 })],
  },
  'upload-square': {
    verb: 'the arrow presses up and holds',
    parts: [null, hold(C, 0, -1.8, { as: 'arrow' })],
  },
  upload: {
    verb: 'the arrow pushes up with a squeeze and the tray stretches',
    parts: [{ as: 'tray', origin: [12, 19], transform: ['scaleX(1)', 'scaleX(1.06)', 'scaleX(0.99)', 'scaleX(1)'], times: [0, 0.44, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.5 }, push([12, 9.5], -2.6)],
  },
  upwork: {
    verb: 'the logo squashes and bounces back',
    parts: [boing(C)],
  },
  'usb-bugs': {
    verb: 'the bug crawls out of the plug',
    parts: [
      null,
      null,
      { as: 'bug', origin: [14.5, 17], transform: ['translate(0px, 0px) rotate(0deg)', 'translate(0.6px, 0.3px) rotate(10deg)', 'translate(1.2px, 0px) rotate(-8deg)', 'translate(0.6px, 0.2px) rotate(6deg)', 'translate(0px, 0px) rotate(0deg)'], times: [0, 0.22, 0.46, 0.72, 1], ease: 'easeInOut', dur: 0.8 },
      null,
    ],
  },
}

export default settleSpecs(specs)
