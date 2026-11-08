/**
 * Page 70 — touch-interaction → tsunami.
 *
 * Gallery page (80 public icons). No handcrafted originals in this span.
 *
 * Touch-locked hands keep the padlock badge acting (shackle, rattle, pop,
 * keyhole). Touchpads tap or swipe on the pad. Trees sway their crown from the
 * trunk; each numbered tree picks its own amount and its branches answer.
 * Trucks and trains roll or bounce. Transition icons push their arrow toward
 * the side they name.
 *
 * Identical-geometry pairs get different jobs: touch-locked / -01,
 * touchpad / -01, traffic-jam / -01, train / -01, treadmill / -01,
 * tree / -01, trolley / -01, tropical-storm-tracks / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  DIR,
  HOLD_E,
  HOLD_T,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flex,
  flip,
  hand,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  rise,
  settleSpecs,
  shake,
  swing,
  tap,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const bounce = (c, h = 0.7, o = {}) => ride(c, [[0, 0], [0, -h], [0, h * 0.35], [0, -h * 0.25], [0, 0]], { as: 'body', times: [0, 0.24, 0.5, 0.74, 1], dur: 0.66, ...o })
const rollOn = (c, dx = 1.2, o = {}) => ride(c, out(dx, 0), { as: 'vehicle', ...o })
/** Tree crown sways from the trunk base; branches follow with less swing. */
const tree = (deg, o = {}) => [null, wiggle([12, 22], [12, 9.7], deg, { as: 'crown', ...o }), wiggle([12, 22], [13.3, 13.8], deg * 0.6, { as: 'branch', ...o }), wiggle([12, 22], [10.8, 11.8], deg * 0.6, { as: 'branch', ...o }), null]

// ---------------------------------------------------------------------------

const specs = {
  'touch-interaction': {
    verb: 'the hand winds back and thrusts up, and the ripple pulses',
    parts: [wave([12, 5], { as: 'ripple', delay: 0.3 }), hand.thrust([12.7, 13.5], DIR.up)],
  },

  // --- touch-locked ---------------------------------------------------------------------------------
  'touch-locked': {
    verb: 'the finger taps and the padlock shackle clicks shut',
    parts: [tap([11, 12]), beat([17.5, 19.5], { delay: 0.2 }), ride([17.5, 15.5], out(0, 0.8), { as: 'shackle', delay: 0.2 })],
  },
  'touch-locked-01': {
    verb: 'the padlock rattles under the finger',
    parts: [null, shake([17.5, 19.5], { as: 'lock' }), shake([17.5, 15.5], { as: 'lock' })],
  },
  'touch-locked-02': {
    verb: 'the hand nudges up and the padlock pops',
    parts: [hand.nudge([10.7, 12], DIR.up), pop([17, 19.5], 1.14, { as: 'lock', delay: 0.2 }), pop([17, 15.5], 1.14, { as: 'lock', delay: 0.2 })],
  },
  'touch-locked-03': {
    verb: 'the hand holds and the padlock shackle lifts',
    parts: [hand.hold([11.2, 11.5], DIR.up), null, ride([18, 15.5], out(0, -1), { as: 'shackle', delay: 0.14 })],
  },
  'touch-locked-04': {
    verb: 'the hand pokes and the padlock nods',
    parts: [hand.poke([11.2, 11.5], DIR.up), beat([17, 19.5], { delay: 0.3 }), beat([17, 15.5], { delay: 0.3 })],
  },
  touch: {
    verb: 'the finger presses in and lifts with a little bounce',
    parts: [{ as: 'hand', origin: [12.2, 12], transform: ['translateY(0px) scale(1)', 'translateY(1.2px) scale(0.92)', 'translateY(-0.6px) scale(1.03)', 'translateY(0px) scale(1)'], times: [0, 0.3, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }],
  },

  // --- touchpads ---------------------------------------------------------------------------------
  touchpad: {
    verb: 'the finger taps on the pad',
    parts: [tap([15.5, 14]), null],
  },
  'touchpad-01': {
    verb: 'the finger swipes across the pad and back',
    parts: [ride([15.5, 14], [[0, 0], [-2, 0], [1, 0], [0, 0], [0, 0]], { as: 'hand', ease: INOUT, dur: 0.8 }), beat([12, 10], { delay: 0.3 })],
  },
  'touchpad-02': {
    verb: 'the hand pokes the pad twice',
    parts: [hand.poke([15.5, 14], DIR.up), null],
  },
  'touchpad-03': {
    verb: 'the hand holds on the pad, which nods',
    parts: [hand.hold([15.4, 13], DIR.up), beat([12, 10], { delay: 0.3 })],
  },
  'touchpad-04': {
    verb: 'the hand wags over the pad',
    parts: [hand.wag([14.9, 14], DIR.up), null],
  },
  'touchpad-off': {
    verb: 'the slash cuts across the pad, which dims',
    parts: [{ as: 'dim', opacity: [1, 0.3, 0.3, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, delay: 0.14 }, null, null, draw({ as: 'slash' })],
  },
  'tow-truck': {
    verb: 'the truck tows forward and the hook swings',
    parts: [rollOn([17, 19]), rollOn([7, 19]), rollOn([12, 11]), wiggle([3, 13], [11.7, 16], -4, { as: 'hook', delay: 0.1 })],
  },
  towels: {
    verb: 'the folded towels sway on the rail',
    parts: [wiggle([12, 5], [12, 12.5], 5, { as: 'towel' }), beat([12, 6], { delay: 0.3 })],
  },
  'toy-brick': {
    verb: 'the brick studs pop one after the other',
    parts: [pop([7.5, 6], 1.2, { as: 'stud' }), beat([12, 14], { delay: 0.24 }), pop([16.5, 6], 1.2, { as: 'stud', delay: 0.12 })],
  },
  'toy-train': {
    verb: 'the toy train chugs forward, its chimney puffing',
    parts: [rollOn([7, 18]), rollOn([17, 18]), rollOn([7.5, 4]), rollOn([7, 8]), rollOn([15.3, 12.5]), rollOn([7.5, 11]), rollOn([12, 18]), rollOn([17, 14]), rollOn([16, 8.5])],
    extras: [puff(16, 5, 0.7, 0, -1.8, { delay: 0.1 })],
  },
  tractor: {
    verb: 'the tractor bounces over the field and puffs smoke',
    parts: [null, null, bounce([9, 13.5]), bounce([17, 12.3]), bounce([19.5, 12]), bounce([8.5, 7.8]), bounce([8, 3]), bounce([19, 7.8]), bounce([7, 6])],
    extras: [puff(19, 4.5, 0.6, 0.4, -1.6, { delay: 0.1 })],
  },
  'trade-down': {
    verb: 'the trend line drops and the arrow pushes down',
    parts: [nudge([17.5, 13.5], 0.8, 0.8, { as: 'arrow', delay: 0.16 }), line(0, { as: 'trend', dur: 0.6 })],
  },
  'trade-mark': {
    verb: 'the TM letters hop inside the ring',
    parts: [beat(C, { delay: 0.3 }), hop([12, 12.4], 1.2, { as: 'tm' })],
  },
  'trade-up': {
    verb: 'the trend line climbs and the arrow pushes up',
    parts: [nudge([17.5, 10.5], 0.8, -0.8, { as: 'arrow', delay: 0.16 }), line(0, { as: 'trend', dur: 0.6 })],
  },
  'traffic-incident': {
    verb: 'the warning cone rocks under the barrier line',
    parts: [draw({ as: 'barrier' }), wiggle([12, 22], [12.2, 14.2], 6, { as: 'cone', delay: 0.1 })],
  },

  // --- traffic jams ---------------------------------------------------------------------------------
  'traffic-jam': {
    verb: 'the front car bumps forward and the back car brakes',
    parts: [ride([15.5, 9], out(0.8, 0), { as: 'back', delay: 0.14 }), ride([21.5, 15], out(0.8, 0), { as: 'back', delay: 0.14 }), ride([9, 15.5], out(1, 0), { as: 'front' }), ride([9, 10.5], out(1, 0), { as: 'front' }), ride([9, 17.5], out(1, 0), { as: 'front' }), ride([13.5, 15.5], out(1, 0), { as: 'front' }), ride([4.5, 15.5], out(1, 0), { as: 'front' }), ride([2.5, 19], out(1, 0), { as: 'front' }), ride([15.5, 19], out(1, 0), { as: 'front' }), ride([19.5, 11.5], out(0.8, 0), { as: 'back', delay: 0.14 })],
  },
  'traffic-jam-01': {
    verb: 'the headlights blink down the queue',
    parts: [null, blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), null, null, null, blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1] }), blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1] }), null, null, blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'traffic-jam-02': {
    verb: 'the three cars inch forward one after another',
    parts: [ride([9, 16.5], out(0.8, 0), { as: 'car' }), ride([9, 11.5], out(0.8, 0), { as: 'car' }), ride([12.8, 12], out(0.8, 0), { as: 'car', delay: 0.1 }), ride([15.8, 9], out(0.8, 0), { as: 'car', delay: 0.2 }), ride([9, 18.5], out(0.8, 0), { as: 'car' }), ride([13.5, 16.5], out(0.8, 0), { as: 'car' }), ride([4.5, 16.5], out(0.8, 0), { as: 'car' }), ride([2.5, 20], out(0.8, 0), { as: 'car' }), ride([15.5, 20], out(0.8, 0), { as: 'car' })],
  },
  'traffic-light': {
    verb: 'the lights switch from top to bottom and the visors flicker',
    parts: [blink({ as: 'light', opacity: [1, 0.15, 1, 1, 1] }), blink({ as: 'light', opacity: [1, 0.15, 1, 1, 1], delay: 0.2 }), null, null, blink({ as: 'visor', opacity: [1, 0.3, 1, 1, 1] }), blink({ as: 'visor', opacity: [1, 0.3, 1, 1, 1] }), blink({ as: 'visor', opacity: [1, 0.3, 1, 1, 1], delay: 0.2 }), blink({ as: 'visor', opacity: [1, 0.3, 1, 1, 1], delay: 0.2 })],
  },

  // --- trains, trams ---------------------------------------------------------------------------------
  train: {
    verb: 'the train sways on the tracks and its lights blink',
    parts: [bounce([12, 10.5], 0.5), bounce([12, 12.5], 0.5), null, null, blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), bounce([12, 5], 0.5)],
  },
  'train-01': {
    verb: 'the train chugs in place and its rails flex',
    parts: [ride([12, 10.5], [[0, 0], [0, -0.4], [0, 0], [0, -0.4], [0, 0]], { as: 'train', times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut', dur: 0.66 }), null, wiggle([6, 19], [6, 20.5], 8, { as: 'rail' }), wiggle([18, 19], [18, 20.5], -8, { as: 'rail' }), null, null, line(0.1, { as: 'roof' })],
  },
  'train-02': {
    verb: 'the bullet train nose bobs and its window glints',
    parts: [bounce([12, 11], 0.6), bounce([12, 17], 0.6), { ...bounce([12, 7.7], 0.6), opacity: [1, 0.4, 1, 1, 1] }, null],
  },
  'train-track': {
    verb: 'the sleepers flash by one after another along the rails',
    parts: [null, null, ...[0.12, 0.06, 0, 0.18, 0.24].map((d) => blink({ as: 'sleeper', opacity: [1, 0.15, 1, 1, 1], delay: d }))],
  },
  tram: {
    verb: 'the tram rolls forward and the pantograph sparks',
    parts: [{ ...wiggle([12, 5], [12, 3.5], 10, { as: 'pole' }), opacity: [1, 0.4, 1, 1, 1] }, null, null, bounce([12, 12.5], 0.5), bounce([12, 14.5], 0.5), blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), bounce([12, 8], 0.5), blink({ as: 'light', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 })],
  },
  trampoline: {
    verb: 'the trampoline mat dips and springs back',
    parts: [null, null, null, { as: 'mat', origin: [12, 10], transform: ['scale(1, 1)', 'scale(1.02, 0.7)', 'scale(0.99, 1.08)', 'scale(1, 1)'], times: [0, 0.3, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }],
  },
  'transaction-history': {
    verb: 'the history clock hand turns back and the lines rewrite',
    parts: [null, line(0.1), lap([16.5, 17.5], -360, { as: 'clock', dur: 0.9 })],
  },
  transaction: {
    verb: 'the exchange arrows sweep and the coin flips',
    parts: [retrace({ as: 'arrow', dur: 0.66 }), retrace({ as: 'arrow', dur: 0.66, delay: 0.12 }), flip([11.9, 12], 1, { as: 'coin', delay: 0.1 })],
  },

  // --- transitions ---------------------------------------------------------------------------------
  'transition-bottom': {
    verb: 'the arrow pushes down from the top panel to the bottom edge',
    parts: [null, nudge([12, 14], 0, 1.4), wave([12, 19], { as: 'edge', delay: 0.24 })],
  },
  'transition-left': {
    verb: 'the arrow pushes left from the panel to the left edge',
    parts: [null, nudge([10, 12], -1.4, 0), wave([5, 12], { as: 'edge', delay: 0.24 })],
  },
  'transition-right': {
    verb: 'the arrow pushes right from the panel to the right edge',
    parts: [null, wave([19, 12], { as: 'edge', delay: 0.24 }), nudge([14, 12], 1.4, 0)],
  },
  'transition-top': {
    verb: 'the arrow pushes up from the bottom panel to the top edge',
    parts: [null, nudge([12, 10], 0, -1.4), wave([12, 5], { as: 'edge', delay: 0.24 })],
  },
  translate: {
    verb: 'the two language cards swap corners and the arrows turn',
    parts: [ride([8, 8], out(0.6, 0.6), { as: 'card' }), ride([16, 16], out(-0.6, -0.6), { as: 'card' }), ride([8, 8], out(0.6, 0.6), { as: 'card' }), ride([16, 16], out(-0.6, -0.6), { as: 'card' }), nudge([5.8, 18.3], 0.8, 0.8, { as: 'arrow', delay: 0.14 }), nudge([18.3, 5.8], -0.8, -0.8, { as: 'arrow', delay: 0.14 })],
  },
  translation: {
    verb: 'the two scripts hop in turn around the globe',
    parts: [hop([8.5, 8.5], 1, { as: 'script' }), lap(C, 360, { as: 'globe', dur: 0.9 }), hop([15.5, 16], 1, { as: 'script', delay: 0.14 })],
  },
  transmission: {
    verb: 'the gear stick shifts through the gate',
    parts: [ride([8, 18], [[0, 0], [0, -1.2], [1, -1.2], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.8 }), line(0.1, { as: 'gate', dur: 0.66 })],
  },
  transparency: {
    verb: 'the transparent square slides out from behind the circle',
    parts: [beat([9, 9], { delay: 0.2 }), ride([15, 15], out(1, 1), { as: 'square' }), blink({ as: 'hatch', opacity: [1, 0.2, 1, 1, 1] })],
  },
  'trapezoid-line-horizontal': {
    verb: 'the trapezoid flips over its horizontal axis',
    parts: [{ as: 'shape', origin: C, transform: ['scaleY(1)', 'scaleY(-1)', 'scaleY(1)'], times: [0, 0.5, 1], ease: INOUT, dur: 0.86 }, draw({ as: 'axis', delay: 0.1 })],
  },
  'trapezoid-line-vertical': {
    verb: 'the trapezoid flips over its vertical axis',
    parts: [flip(C, 1, { as: 'shape' }), draw({ as: 'axis', delay: 0.1 })],
  },
  'travel-bag': {
    verb: 'the bag hops on its handle and the tag swings',
    parts: [hop([12, 13.8], 1, { as: 'bag' }), hop([12, 13.8], 1, { as: 'bag' }), wiggle([7.5, 11], [7.5, 13], 10, { as: 'tag', delay: 0.1 }), hop([12, 4.8], 1, { as: 'bag' })],
  },

  // --- treadmills ---------------------------------------------------------------------------------
  treadmill: {
    verb: 'the belt rolls and the console lights blink',
    parts: [ride([12.7, 17.5], [[0, 0], [-0.8, 0], [0, 0], [-0.8, 0], [0, 0]], { as: 'belt', times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.66 }), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1] }), null, null, null, null],
  },
  'treadmill-01': {
    verb: 'the console tilts and the rail flexes',
    parts: [null, null, wiggle([17.5, 16], [18.5, 4.5], -6, { as: 'console' }), wiggle([17.5, 16], [17.5, 10.8], -6, { as: 'console' }), null, null],
  },
  'treadmill-02': {
    verb: 'the runner deck bounces and the console lifts',
    parts: [bounce([12, 14.6], 0.5), blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1] }), null, null, ride([19.5, 7], out(0, -0.8), { as: 'console', delay: 0.1 }), null, null],
  },
  treatment: {
    verb: 'the medicine drop lifts out of the hand',
    parts: [ride([12.5, 6.9], out(0, -1.2), { as: 'drop' }), ride([8.5, 16], out(0, -0.4), { as: 'hand', delay: 0.2 }), ride([12.1, 18.5], out(0, -0.4), { as: 'hand', delay: 0.2 })],
  },

  // --- trees ---------------------------------------------------------------------------------
  tree: { verb: 'the tree sways from its trunk', parts: tree(5) },
  'tree-01': { verb: 'the branches flick inside the still crown', parts: [null, null, wiggle([12, 15], [13.3, 13.8], 16, { as: 'branch' }), wiggle([12, 13], [10.8, 11.8], -16, { as: 'branch', delay: 0.08 }), null] },
  'tree-02': { verb: 'the round crown swells and sways', parts: [null, { ...wiggle([12, 22], [12, 9.5], 4, { as: 'crown' }) }, null, null, flex('X', [12, 22], [12, 22], [1, 1.2, 0.96, 1, 1], { as: 'ground' })] },
  'tree-03': { verb: 'the pine sways hard in the wind', parts: tree(8) },
  'tree-04': { verb: 'the crown bobs up on the trunk', parts: [null, hop([12, 9.6], 0.8, { as: 'crown' }), hop([13.3, 13.8], 0.5, { as: 'branch' }), hop([10.8, 11.8], 0.5, { as: 'branch' }), null] },
  'tree-05': { verb: 'the crown rustles back and forth', parts: [null, ride([12, 9.8], [[0, 0], [0.6, 0], [-0.6, 0], [0.4, 0], [0, 0]], { as: 'crown', ease: 'easeInOut', dur: 0.6 }), null, null, null] },
  'tree-06': { verb: 'the wide crown sways gently and its base settles', parts: [...tree(3).slice(0, 4), beat([12, 22], { delay: 0.3 })] },
  'tree-07': {
    verb: 'the three tiers of the pine sway one after another',
    parts: [null, wiggle([12, 18], [12, 4.9], 6, { as: 'tier', delay: 0.12 }), wiggle([12, 18], [12, 10.3], 4, { as: 'tier', delay: 0.06 }), wiggle([12, 18], [12, 15.2], 2, { as: 'tier' }), null],
  },
  'tree-palm': {
    verb: 'the palm fronds flap in the breeze',
    parts: [wiggle([12, 8], [15.5, 11.6], 10, { as: 'frond' }), wiggle([12, 8], [16.6, 5.8], 8, { as: 'frond', delay: 0.06 }), wiggle([12, 8], [7.4, 5], -8, { as: 'frond', delay: 0.06 }), null, null, wiggle([12, 8], [7.8, 10.6], -10, { as: 'frond' })],
  },
  trees: {
    verb: 'the two trees sway one after the other',
    parts: [wiggle([7, 22], [7, 11], 5, { as: 'tree' }), wiggle([13, 22], [15.5, 10], -5, { as: 'tree', delay: 0.12 }), null, null],
  },
  trello: {
    verb: 'the two cards grow and shrink like a board in use',
    parts: [null, flex('Y', [8.3, 6], [8.3, 11.5], [1, 0.8, 1.06, 1, 1], { as: 'card' }), flex('Y', [15.8, 6], [15.8, 9], [1, 1.4, 0.94, 1, 1], { as: 'card' })],
  },
  'trending-up-down': {
    verb: 'the zigzag line rewrites and the two arrows push apart',
    parts: [line(0, { as: 'trend', dur: 0.6 }), nudge([18.7, 17.7], 0.8, 0.8, { as: 'arrow', delay: 0.14 }), nudge([18.7, 6.3], 0.8, -0.8, { as: 'arrow', delay: 0.14 })],
  },

  // --- triangles ---------------------------------------------------------------------------------
  'triangle-01': {
    verb: 'the warning sign rattles and its rays flicker',
    parts: [shake([12, 11]), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1] }), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), line(0.1, { as: 'wave' })],
  },
  'triangle-02': {
    verb: 'the open triangle rewrites and the rays blink',
    parts: [line(0, { as: 'triangle', dur: 0.66 }), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1], delay: 0.3 }), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1], delay: 0.3 })],
  },
  'triangle-03': {
    verb: 'the sparkles twinkle around the triangle and the dot pops',
    parts: [null, blink({ as: 'spark', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'spark', opacity: [1, 0.1, 1, 1, 1] }), blink({ as: 'spark', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 }), pop([16.1, 8], 1.3, { as: 'dot', delay: 0.1 })],
  },
  'triangle-dash': {
    verb: 'the dashes march around the triangle',
    parts: [loop({ as: 'dashes' })],
  },
  'triangle-right': {
    verb: 'the right triangle flips over its long edge',
    parts: [flip([11.8, 11.8], 1, { as: 'triangle' })],
  },
  triangle: {
    verb: 'the triangle turns a third and settles',
    parts: [{ as: 'triangle', origin: C, transform: ['rotate(0deg)', 'rotate(60deg)', 'rotate(118deg)', 'rotate(120deg)'], times: [0, 0.4, 0.8, 1], ease: [INOUT, OUT, OUT], dur: 0.8 }],
  },

  // --- trolleys ---------------------------------------------------------------------------------
  trolley: {
    verb: 'the trolley rolls forward with its boxes',
    wrap: ride(C, out(1.2, 0), { as: 'trolley', dur: 0.66 }),
    parts: [null, null, null, null, null],
  },
  'trolley-01': {
    verb: 'the stacked boxes hop on the trolley one after the other',
    parts: [null, null, null, hop([17, 11.5], 1, { as: 'box' }), hop([15, 6.5], 1, { as: 'box', delay: 0.12 })],
  },
  'trolley-02': {
    verb: 'the trolley tips back on its wheels and the box slides',
    wrap: { as: 'trolley', origin: [14, 19.5], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(-6deg)', 'rotate(0deg)'], times: HOLD_T, ease: HOLD_E, dur: 0.8 },
    parts: [null, null, null, ride([17, 9], out(-0.6, 0), { as: 'box', delay: 0.1 }), null],
  },

  // --- storms ---------------------------------------------------------------------------------
  'tropical-storm-tracks': {
    verb: 'the storm spins a full turn around its eye',
    parts: [lap(C, -360, { as: 'storm', dur: 0.9 }), pop(C, 1.2, { as: 'eye', delay: 0.2 })],
  },
  'tropical-storm-tracks-01': {
    verb: 'the storm arms twitch around the still eye',
    parts: [wiggle(C, C, -24, { as: 'storm' }), null],
  },
  'tropical-storm-tracks-02': {
    verb: 'the storm spins as its track rewrites',
    parts: [lap([8.1, 10.3], -360, { as: 'storm', dur: 0.9 }), pop([8.1, 10.3], 1.2, { as: 'eye', delay: 0.2 }), line(0.1, { as: 'track', dur: 0.66 })],
  },
  'tropical-storm': {
    verb: 'the storm spins clockwise around its eye',
    parts: [lap(C, 360, { as: 'storm', dur: 0.9 }), null],
  },

  // --- trucks ---------------------------------------------------------------------------------
  'truck-delivery': {
    verb: 'the delivery truck speeds forward trailing its speed lines',
    parts: [rollOn([17, 18]), rollOn([7, 18]), rollOn([12, 11]), ride([5, 8], out(-0.8, 0), { as: 'speed', delay: 0.06 }), ride([4, 11], out(-0.8, 0), { as: 'speed', delay: 0.12 }), rollOn([18.3, 8.5])],
  },
  'truck-monster': {
    verb: 'the monster truck bounces on its big wheels',
    parts: [bounce([15, 9]), bounce([6, 11.8]), bounce([14.8, 6]), bounce([8.5, 5]), bounce([12.5, 10.5]), null, null, null],
  },
  'truck-return': {
    verb: 'the return arrow loops back and the truck reverses',
    parts: [rollOn([17, 18], -1), rollOn([7, 18], -1), rollOn([12, 11], -1), rollOn([18.3, 8.5], -1), nudge([9, 11], -0.8, 0.6, { as: 'arrow', delay: 0.14 })],
  },
  truck: {
    verb: 'the truck bounces on its wheels',
    parts: [null, null, bounce([16.5, 12]), bounce([17, 9.5]), bounce([7.5, 10.5])],
  },
  trulli: {
    verb: 'the cone roof pinnacle bobs and the door nods',
    parts: [hop([12, 7], 0.8, { as: 'roof' }), hop([12, 7.3], 0.8, { as: 'roof' }), beat([12, 19], { delay: 0.2 }), null],
  },
  tsunami: {
    verb: 'the giant wave curls over and crashes',
    parts: [ride([8.5, 14], out(0.8, 0.8), { as: 'spray', delay: 0.14 }), ride([12, 21.5], [[0, 0], [1, 0], [-1, 0], [0, 0], [0, 0]], { as: 'water', ease: INOUT, dur: 0.86 }), wiggle([16, 16], [16.5, 11.8], 8, { as: 'crest' }), wiggle([8, 19], [8.4, 10.2], 6, { as: 'wave' })],
  },
}

export default settleSpecs(specs)
