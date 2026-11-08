/**
 * Page 56 — repeat-off → rotate-cw-square.
 *
 * Gallery page (80 public icons). The handcrafted robot-01 original is
 * skipped; the hidden handcrafted rocket-01 sits in this span and is skipped
 * too. robot shares robot-01's geometry, so it turns its head instead of the
 * original's antenna and eye beat.
 *
 * Repeat arrows chase around their loop. Restaurants swing a different
 * utensil per variant. Right-to-left lists slide toward the right margin.
 * Roots keep the radical and let the brackets or the x act. Rotate icons spin
 * in the direction they name.
 *
 * Identical-geometry pairs get different jobs: repeat-one / -01,
 * resize / -01, restaurant-02 / -03, reverse-withdrawal / -01,
 * rice-bowl / -01, road-location / -01, robot / robot-01, root / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  beat,
  blink,
  dim,
  draw,
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  settleSpecs,
  spinStar,
  sweep,
  swell,
  swing,
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
const tilt = (origin, deg, o = {}) => ({
  as: 'tilt',
  origin,
  transform: ['rotate(0deg)', `rotate(${deg}deg)`, `rotate(${-deg * 0.6}deg)`, `rotate(${deg * 0.25}deg)`, 'rotate(0deg)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: [INOUT, INOUT, INOUT, OUT],
  dur: 0.7,
  ...o,
})
const spin = (deg, o = {}) => lap(C, deg, { as: 'spin', dur: 0.86, ...o })
/** Rigid rotation of one part around a shared centre, landing on a full turn. */
const orbit = (pivot, c, deg, o = {}) =>
  swing(pivot, c, [0, deg * 0.2, deg * 0.7, deg * 1.03, deg], { as: 'orbit', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.86, ...o })
const look = (c) => ride(c, [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'head', times: [0, 0.26, 0.6, 0.86, 1], ease: INOUT, dur: 0.9 })

// ---------------------------------------------------------------------------

const specs = {
  // --- repeat, replace ---------------------------------------------------------------------------------
  'repeat-off': {
    verb: 'the off bar draws across and the loop arrows dim',
    parts: [dim({ delay: 0.14 }), dim({ delay: 0.14 }), draw({ as: 'bar' })],
  },
  'repeat-one-01': {
    verb: 'the two arrows push apart along the loop and the 1 pops',
    parts: [ride([10, 9.5], out(-0.8, 0), { as: 'arrow' }), ride([14, 14.5], out(0.8, 0), { as: 'arrow' }), pop(C, 1.3, { as: 'one', delay: 0.16 })],
  },
  'repeat-one-02': {
    verb: 'the corner 1 pops and the loop arrows rewrite',
    parts: [pop([21, 6.4], 1.3, { as: 'one' }), line(0.1, { as: 'arrow', dur: 0.6 }), line(0.2, { as: 'arrow', dur: 0.6 })],
  },
  'repeat-one': {
    verb: 'the loop arrows sweep around the 1, which hops',
    parts: [sweep({ as: 'arrow' }), sweep({ as: 'arrow', delay: 0.1 }), hop(C, 1.2, { as: 'one', delay: 0.2 })],
  },
  repeat: {
    verb: 'the two loop arrows sweep one after the other',
    parts: [sweep({ as: 'arrow' }), sweep({ as: 'arrow', delay: 0.14 })],
  },
  'replace-all': {
    verb: 'the swap arrow rewrites and every item shifts across',
    parts: [ride([6.5, 17.5], out(0.9, -0.9), { as: 'item' }), ride([17.5, 6.5], out(-0.9, 0.9), { as: 'item' }), hop([19.5, 17.5], 1, { as: 'item', delay: 0.1 }), hop([13.8, 17.5], 1, { as: 'item', delay: 0.18 }), line(0, { as: 'arrow', dur: 0.6 })],
  },
  replace: {
    verb: 'the two squares trade places along the swap arrow and settle',
    parts: [ride([6.5, 17.5], out(1.2, -1.2), { as: 'item' }), ride([17.5, 6.5], out(-1.2, 1.2), { as: 'item' }), line(0, { as: 'arrow', dur: 0.6 })],
  },
  replay: {
    verb: 'the replay arc winds back a full turn and the play mark pops',
    parts: [lap(C, -360, { as: 'arc' }), orbit(C, [18.3, 4.3], -360, { as: 'arc' }), pop([12.5, 12], 1.2, { as: 'play', delay: 0.3 })],
  },
  replit: {
    verb: 'the three blocks pull apart and click back together',
    parts: [ride([8, 5.5], out(-0.6, -0.8), { as: 'block' }), ride([8, 18.5], out(-0.6, 0.8), { as: 'block' }), ride([16, 12], out(1, 0), { as: 'block' })],
  },
  repository: {
    verb: 'the bookmark tab drops and the lines rewrite',
    parts: [null, ride([12, 18], out(0, 1.2), { as: 'tab' }), line(0.1), line(0)],
  },
  repost: {
    verb: 'the two arrows push along their arcs in opposite directions',
    parts: [nudge([6.7, 18.5], -1.2, 0, { as: 'head', delay: 0.1 }), line(0.1, { as: 'arc' }), nudge([17.3, 5.5], 1.2, 0, { as: 'head' }), line(0, { as: 'arc' })],
  },
  'reset-password': {
    verb: 'the reset arc winds back around the lock, which pops',
    parts: [lap(C, -360, { as: 'arc' }), pop(C, 1.14, { as: 'lock', delay: 0.3 })],
  },

  // --- resize ---------------------------------------------------------------------------------
  resize: {
    verb: 'the hand pinches and the arrows push outward',
    parts: [nudge([19, 4], 1.2, 0, { delay: 0.12 }), nudge([5, 4], -1.2, 0, { delay: 0.12 }), { as: 'hand', origin: [13.4, 11.7], transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.5 }],
  },
  'resize-01': {
    verb: 'the hand taps and the two arrows blink',
    parts: [blink({ as: 'arrow', opacity: [1, 0.15, 1, 1, 1], delay: 0.16 }), blink({ as: 'arrow', opacity: [1, 0.15, 1, 1, 1], delay: 0.16 }), ride([13.4, 11.7], [[0, 0], [0, 1], [0, -0.2], [0, 0], [0, 0]], { as: 'hand', dur: 0.5 })],
  },
  'resize-02': {
    verb: 'the pointer hops and the arrows push outward',
    parts: [hop([12.9, 12], 1.2, { as: 'hand' }), nudge([18, 4.5], 1.2, 0, { delay: 0.1 }), nudge([4.5, 4.5], -1.2, 0, { delay: 0.1 })],
  },
  'resize-field-rectangle': {
    verb: 'the field stretches from its top-left corner and the grip rewrites',
    parts: [swell([3, 3], C, [1, 1.06, 0.98, 1, 1], { as: 'field' }), line(0.1, { as: 'grip' })],
  },
  'resize-field': {
    verb: 'the grip is dragged out and snaps back',
    parts: [ride(C, out(1.4, 1.4), { as: 'grip' })],
  },
  'resources-add': {
    verb: 'the plus spins in and the three blocks hop in turn',
    parts: [hop([6.5, 6], 1, { as: 'block', delay: 0.1 }), hop([6.5, 17.5], 1, { as: 'block', delay: 0.2 }), hop([18, 18], 1, { as: 'block', delay: 0.3 }), spinStar([18, 6], { as: 'plus' })],
  },
  'resources-remove': {
    verb: 'the minus wipes off and the blocks nod',
    parts: [beat([6.5, 6], { delay: 0.2 }), beat([6.5, 17.5], { delay: 0.3 }), beat([18, 18], { delay: 0.4 }), draw({ as: 'minus' })],
  },

  // --- restaurants ---------------------------------------------------------------------------------
  'restaurant-01': {
    verb: 'the crossed fork and spoon scissor apart and back',
    parts: [wiggle(C, [9.5, 15.5], 10, { as: 'fork' }), wiggle(C, [17.9, 7.1], 10, { as: 'fork' }), wiggle(C, [18.5, 6.5], 10, { as: 'fork' }), wiggle(C, [10.7, 11.7], -10, { as: 'spoon' })],
  },
  'restaurant-02': {
    verb: 'the fork swings across the knife and back',
    parts: [null, null, wiggle(C, [17.9, 7.1], 12, { as: 'fork' }), wiggle(C, [18.5, 6.5], 12, { as: 'fork' }), null],
  },
  'restaurant-03': {
    verb: 'the knife slices down past the fork and back',
    parts: [ride([5.5, 19.5], out(0.8, 0.8), { as: 'knife' }), ride([14.5, 10.5], out(0.8, 0.8), { as: 'knife' }), null, null, ride([11, 12], out(0.8, 0.8), { as: 'knife' })],
  },
  'restaurant-table': {
    verb: 'the cloche lifts off the table and sets back down',
    parts: [beat([12, 13], { delay: 0.5 }), { as: 'cloche', origin: [12, 6], transform: ['translateY(0px)', 'translateY(-1.4px)', 'translateY(-1.4px)', 'translateY(0px)'], times: [0, 0.26, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.7 }, null],
  },
  restaurant: {
    verb: 'the awning ripples and the chairs slide out from the table',
    parts: [ride([5.5, 16.5], out(-0.8, 0), { as: 'chair' }), wave([12, 5], { as: 'awning' }), null, ride([18.5, 16.5], out(0.8, 0), { as: 'chair' }), null],
  },
  'restore-bin': {
    verb: 'the restore arrow rewrites as the lid pops up',
    parts: [null, line(0, { as: 'arrow', dur: 0.6 }), hop([12, 3.8], 1.2, { as: 'lid', delay: 0.1 })],
  },
  'return-request': {
    verb: 'the return arrow loops back on the box and the seam nods',
    parts: [beat([12, 14.5], { delay: 0.3 }), null, line(0.2, { as: 'seam' }), nudge([12, 14.5], -1.2, 0, { as: 'arrow' })],
  },
  'reverse-withdrawal': {
    verb: 'the arrow climbs back up into the slot',
    parts: [null, nudge(C, 0, -1.6, { as: 'arrow' }), null],
  },
  'reverse-withdrawal-01': {
    verb: 'the bag hops and the arrow redraws upward',
    parts: [hop([12, 14], 1, { as: 'bag', delay: 0.14 }), line(0, { as: 'arrow', dur: 0.56 }), null],
  },
  'reverse-withdrawal-02': {
    verb: 'the coin rises back up into the slot',
    parts: [ride([12, 14], out(0, -1.6), { as: 'coin' }), null, ride([12, 14], out(0, -1.6), { as: 'coin' }), null],
  },

  // --- shapes, ribbons, bowls ---------------------------------------------------------------------------------
  'rhombus-01': {
    verb: 'the rhombus outline traces itself around',
    parts: [loop({ as: 'shape' })],
  },
  rhombus: {
    verb: 'the rhombus flips over on its axis',
    parts: [flip(C, 1, { as: 'shape' })],
  },
  ribbon: {
    verb: 'the ribbon swings from its bar and the bar nods',
    parts: [beat([12, 6], { delay: 0.3 }), wiggle([12, 6], [12, 12.1], 7, { as: 'ribbon' })],
  },
  'rice-bowl': {
    verb: 'the chopsticks dip into the rice and lift out',
    parts: [null, null, ride([19.5, 6], out(-1, 1.2), { as: 'sticks' }), ride([17, 4], out(-1, 1.2), { as: 'sticks' })],
  },
  'rice-bowl-01': {
    verb: 'steam curls up off the rice heap, which hops',
    parts: [null, hop([11, 7.7], 0.9, { as: 'rice' }), null, null],
    extras: [puff(8, 3, 0.6, -0.4, -2, { delay: 0.1 }), puff(12, 2.5, 0.6, 0.3, -2, { delay: 0.2 })],
  },
  'rice-bowl-02': {
    verb: 'the rice mound hops in the bowl and the grains twinkle',
    parts: [hop([12, 6], 1, { as: 'rice' }), beat([12, 16], { delay: 0.3 }), blink({ as: 'grain', opacity: [1, 0.1, 1, 1, 1] }), blink({ as: 'grain', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'grain', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },

  // --- right ---------------------------------------------------------------------------------
  'right-angle': {
    verb: 'the angle arc rewrites and both arrows push outward',
    parts: [nudge([5, 4], 0, -1.2, { delay: 0.16 }), nudge([20, 19], 1.2, 0, { delay: 0.16 }), line(0, { as: 'arc' }), null],
  },
  'right-to-left-block-quote': {
    verb: 'the quoted lines slide toward the right bar, which nods',
    parts: [ride([11, 6], out(1, 0), { as: 'line' }), ride([10, 12], out(1, 0), { as: 'line', delay: 0.06 }), ride([11, 18], out(1, 0), { as: 'line', delay: 0.12 }), beat([19, 12], { delay: 0.24 })],
  },
  'right-to-left-list-bullet': {
    verb: 'the right-hand bullets pop down the list',
    parts: [line(0.04), line(0.14), line(0.24), pop([19.9, 5.5], 2, { as: 'bullet' }), pop([19.9, 12.5], 2, { as: 'bullet', delay: 0.1 }), pop([19.9, 19.5], 2, { as: 'bullet', delay: 0.2 })],
  },
  'right-to-left-list-dash': {
    verb: 'the right-hand dashes blink down the list',
    parts: [null, blink({ as: 'dash', opacity: [1, 0.1, 1, 1, 1] }), null, blink({ as: 'dash', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), null, blink({ as: 'dash', opacity: [1, 0.1, 1, 1, 1], delay: 0.2 })],
  },
  'right-to-left-list-number': {
    verb: 'the numbers hop and the lines rewrite from the right',
    parts: [line(0), line(0.08), line(0.16), hop([19.5, 18], 1, { as: 'number', delay: 0.16 }), hop([19.5, 6], 1, { as: 'number' })],
  },
  'right-to-left-list-triangle': {
    verb: 'the triangle markers nudge left into the lines',
    parts: [null, nudge([19, 18.5], -1, 0, { as: 'marker', delay: 0.12 }), nudge([19, 5.5], -1, 0, { as: 'marker' }), null, null],
  },
  'right-triangle': {
    verb: 'the right-angle mark redraws in the corner',
    parts: [beat(C, { delay: 0.3 }), draw({ as: 'mark' })],
  },
  ripple: {
    verb: 'the drop ripples out to the rim',
    parts: [wave(C, { as: 'ring', delay: 0.16 }), wave([12, 11.5], { as: 'drop' })],
  },
  'riyal-rectangle': {
    verb: 'the riyal strokes rewrite and the dots blink',
    parts: [null, line(0.16), line(0.08), line(0), blink({ as: 'dots', opacity: [1, 0.1, 1, 1, 1], delay: 0.3 })],
  },
  riyal: {
    verb: 'the riyal strokes hop in turn and the dots blink',
    parts: [null, hop([17.5, 12.5], 1, { as: 'stroke', delay: 0.16 }), hop([12.5, 11], 1, { as: 'stroke', delay: 0.08 }), hop([6.5, 11], 1, { as: 'stroke' }), blink({ as: 'dots', opacity: [1, 0.1, 1, 1, 1], delay: 0.3 })],
  },

  // --- roads ---------------------------------------------------------------------------------
  'road-01': {
    verb: 'the centre dashes stream down the road',
    parts: [null, ...[0.08, 0, 0.16].map((d) => ride([12, 12], [[0, 0], [0, 1.4], [0, 0], [0, 1.4], [0, 0]], { as: 'dash', times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear', dur: 0.8, delay: d }))],
  },
  'road-02': {
    verb: 'the centre dashes stream left along the road',
    parts: [null, ...[0.08, 0, 0.16].map((d) => ride(C, [[0, 0], [-1.4, 0], [0, 0], [-1.4, 0], [0, 0]], { as: 'dash', times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear', dur: 0.8, delay: d }))],
  },
  'road-location': {
    verb: 'the pin hops above the road',
    parts: [null, hop([12, 6.5], 1.6, { as: 'pin' }), null, hop([12, 6], 1.6, { as: 'pin' })],
  },
  'road-location-01': {
    verb: 'the road dashes slide by and the pin dot blinks',
    parts: [ride([12, 16], [[0, 0], [-1.4, 0], [0, 0], [-1.4, 0], [0, 0]], { as: 'dash', times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear', dur: 0.8 }), null, null, blink({ as: 'dot', opacity: [1, 0.1, 1, 0.1, 1] })],
  },
  'road-location-02': {
    verb: 'the pin presses down onto the road and the dashes rewrite',
    parts: [null, line(0.1, { as: 'dash' }), ride([12, 6.6], out(0, 1.2), { as: 'pin' }), ride([12, 5.6], out(0, 1.2), { as: 'pin' })],
  },
  'road-wayside': {
    verb: 'the roundabout turns a quarter around its island',
    wrap: lap(C, 90, { as: 'roundabout', dur: 0.8 }),
    parts: [null, null, null, null, null, null, null, null, null],
  },
  road: {
    verb: 'the lane dashes stream toward the viewer and the far bend rewrites',
    parts: [null, null, ride([12, 21.5], out(0, 0.8), { as: 'dash', delay: 0.08 }), ride([12, 17.5], out(0, 0.8), { as: 'dash' }), line(0.1, { as: 'bend', dur: 0.66 })],
  },

  // --- robots, rockets ---------------------------------------------------------------------------------
  robot: {
    verb: 'the head looks left and right on its body',
    parts: [look([12, 3]), null, look([9.3, 8.3]), look([14.8, 8.3]), look([12, 9])],
  },
  'robot-02': {
    verb: 'the antenna wobbles with its light blinking, and the eyes blink',
    parts: [null, wiggle([12, 8], [12, 6.5], 14, { as: 'antenna' }), { ...wiggle([12, 8], [12, 3.5], 14, { as: 'antenna' }), opacity: [1, 0.3, 1, 0.3, 1] }, blink({ as: 'eyes', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 }), null],
  },
  robotic: {
    verb: 'the ears pulse out, the eyes blink and the smile widens',
    parts: [
      null,
      ride([20.5, 15], out(0.7, 0), { as: 'ear' }),
      ride([3.5, 15], out(-0.7, 0), { as: 'ear' }),
      pop([12, 3.5], 1.3, { as: 'bulb', delay: 0.1 }),
      null,
      blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 }),
      blink({ as: 'eye', opacity: [1, 0, 1, 1, 1], delay: 0.2, dur: 0.6 }),
      flex('X', [12, 17.8], [12, 17.8], [1, 1.3, 0.95, 1, 1], { as: 'smile', delay: 0.1 }),
    ],
  },
  'rocket-02': {
    verb: 'the rocket lifts off between two clouds of exhaust',
    parts: [
      ride([12, 7], out(0, -1.6), { as: 'rocket' }),
      wave([19.5, 18], { as: 'cloud', delay: 0.1 }),
      wave([4.5, 18], { as: 'cloud', delay: 0.1 }),
      flex('Y', [10, 15], [10, 17.5], [1, 1.3, 0.9, 1, 1], { as: 'flame' }),
      flex('Y', [14, 15], [14, 16], [1, 1.5, 0.9, 1, 1], { as: 'flame' }),
    ],
  },
  rocket: {
    verb: 'the rocket darts up and to the right, trailing speed lines',
    wrap: ride(C, out(1.3, -1.3), { as: 'rocket', dur: 0.66 }),
    parts: [null, null, blink({ as: 'spark', opacity: [1, 0.1, 1, 1, 1] }), blink({ as: 'spark', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), null, null],
    extras: [trail('M5 19.5L3 21.5M2.5 16.5L1.5 17.5', -1.3)],
  },
  'rocking-chair': {
    verb: 'the chair rocks back and forth on its runner',
    wrap: tilt([12, 21], 7, { dur: 0.9 }),
    parts: [null, null, null, null, null, null],
  },
  'rocking-horse': {
    verb: 'the horse rocks on its curved base',
    wrap: tilt([12, 20], -7, { dur: 0.9 }),
    parts: [null, null, null, null],
  },
  'roller-coaster': {
    verb: 'a car runs along the looping track',
    parts: [loop({ as: 'track', pathLength: [1, 0.4, 1], dur: 1.1 }), null, null, null, null, null, null, null, null],
  },
  'roller-skate': {
    verb: 'the skate rolls forward trailing speed lines',
    wrap: ride(C, out(1.4, 0), { as: 'skate', dur: 0.66 }),
    parts: [null, null, null, null, null, null, null, null],
    extras: [trail('M1.5 9H0M1.5 12.5H0.5', -1.4)],
  },
  'rolling-pin': {
    verb: 'the rolling pin rolls back and forth along its axis',
    wrap: ride(C, [[0, 0], [-1.2, 1.2], [1.2, -1.2], [-0.3, 0.3], [0, 0]], { as: 'pin', ease: INOUT, dur: 0.9 }),
    parts: [null, null, null],
  },

  // --- roots ---------------------------------------------------------------------------------
  root: {
    verb: 'the x under the radical pops',
    parts: [null, pop([17.5, 14], 1.3, { as: 'x' }), pop([17.5, 14], 1.3, { as: 'x' })],
  },
  'root-01': {
    verb: 'the radical sign rewrites over the x',
    parts: [line(0, { as: 'radical', dur: 0.66 }), null, null],
  },
  'root-02': {
    verb: 'the radical rewrites and the x pops inside the frame',
    parts: [null, line(0, { as: 'radical', dur: 0.6 }), pop([14.8, 13.1], 1.3, { as: 'x', delay: 0.2 }), pop([14.8, 13.1], 1.3, { as: 'x', delay: 0.2 })],
  },
  'root-circle': {
    verb: 'the root sign hops inside the ring',
    parts: [hop([11.9, 12], 1.3, { as: 'root' }), beat(C, { delay: 0.3 })],
  },
  'root-first-bracket': {
    verb: 'the round brackets push outward and the x pops',
    parts: [null, pop([14.8, 13.1], 1.3, { as: 'x', delay: 0.14 }), pop([14.8, 13.1], 1.3, { as: 'x', delay: 0.14 }), nudge([4, 12], -1, 0, { as: 'bracket' }), nudge([20, 12], 1, 0, { as: 'bracket' })],
  },
  'root-second-bracket': {
    verb: 'the square brackets close in on the root, which pops',
    parts: [pop([11.9, 12], 1.12, { as: 'root', delay: 0.16 }), nudge([20, 12], -1, 0, { as: 'bracket' }), nudge([4, 12], 1, 0, { as: 'bracket' })],
  },
  'root-third-bracket': {
    verb: 'the curly braces rock and the radical rewrites',
    parts: [line(0.1, { as: 'radical', dur: 0.6 }), null, null, wiggle([20, 12], [20.1, 12], -10, { as: 'brace' }), wiggle([4, 12], [3.9, 12], 10, { as: 'brace' })],
  },
  rose: {
    verb: 'the bloom nods on its stem and the leaf flutters',
    parts: [wiggle([9, 12], [15.1, 8.5], -8, { as: 'bloom' }), wiggle([7, 18], [7.8, 19.5], 14, { as: 'leaf', delay: 0.08 }), null],
  },

  // --- rotate ---------------------------------------------------------------------------------
  'rotate-01': {
    verb: 'the arrow spins a full turn clockwise',
    parts: [lap(C, 360, { as: 'arrow' })],
  },
  'rotate-02': {
    verb: 'the arrow and its dotted tail spin a full turn counter-clockwise',
    wrap: spin(-360),
    parts: [null, null],
  },
  'rotate-360': {
    verb: 'the 360 loop turns around its vertical axis',
    parts: [flip([12.3, 12.1], 1, { as: 'loop' })],
  },
  'rotate-bottom-left': {
    verb: 'the square tips a quarter turn left and the arrow pushes',
    parts: [lap([9, 10], -90, { as: 'square', dur: 0.7 }), nudge([16.5, 16.5], -1.2, 0, { delay: 0.1 })],
  },
  'rotate-bottom-right': {
    verb: 'the square tips a quarter turn right and the arrow pushes',
    parts: [lap([15, 10], 90, { as: 'square', dur: 0.7 }), nudge([7.5, 16.5], 1.2, 0, { delay: 0.1 })],
  },
  'rotate-ccw-square': {
    verb: 'the open square rolls back a quarter turn and the head pulls left',
    parts: [lap([12, 13.5], -90, { as: 'square', dur: 0.7 }), nudge([13, 5], -1.2, 0, { as: 'head' })],
  },
  'rotate-clockwise': {
    verb: 'the arrow and its dotted tail spin a full turn clockwise',
    wrap: spin(360),
    parts: [null, null],
  },
  'rotate-crop': {
    verb: 'the corner arrows swap corners and the crop marks spread apart',
    parts: [
      orbit(C, [5.5, 18.5], 180, { dur: 0.8 }),
      orbit(C, [18.5, 5.5], 180, { dur: 0.8 }),
      ride([13, 11], out(0.8, 0.8), { as: 'crop' }),
      ride([11, 13], out(-0.8, -0.8), { as: 'crop' }),
    ],
  },
  'rotate-cw-square': {
    verb: 'the open square rolls on a quarter turn and the head pushes right',
    parts: [lap([12, 13.5], 90, { as: 'square', dur: 0.7 }), nudge([11, 5], 1.2, 0, { as: 'head' })],
  },
}

export default settleSpecs(specs)
