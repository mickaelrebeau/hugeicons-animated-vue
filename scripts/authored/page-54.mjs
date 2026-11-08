/**
 * Page 54 — profile → radio-button.
 *
 * Gallery page (80 public icons). The handcrafted qr-code-01 original is
 * skipped; the hidden handcrafted puzzle sits in this span and is skipped too.
 *
 * Property sheets keep the sheet and let the corner badge act (add spins,
 * delete twists, edit scribbles, search scans, view blinks). Progress rings
 * move their fill wedge differently per fraction. Quotes drop or rise in the
 * direction they name. Radars sweep their arm.
 *
 * Identical-geometry pairs get different jobs: pulse / -01,
 * pulse-rectangle / -01, punching-ball / -01, pyramid-structure / -01,
 * queue / -01, quill-write / -01, quiz / -01, quran / -01, radar / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  beat,
  blink,
  burst,
  draw,
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  rays,
  retrace,
  ride,
  settleSpecs,
  spinStar,
  stamp,
  sweep,
  swell,
  swing,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const tilt = (origin, deg, o = {}) => ({
  as: 'tilt',
  origin,
  transform: ['rotate(0deg)', `rotate(${deg}deg)`, `rotate(${-deg * 0.6}deg)`, `rotate(${deg * 0.25}deg)`, 'rotate(0deg)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: [INOUT, INOUT, INOUT, OUT],
  dur: 0.7,
  ...o,
})
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
/** Property sheet: [sheet, header, row, row, badge]. */
const sheet = (badge) => [null, null, null, null, badge]
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- profile, progress ---------------------------------------------------------------------------------
  profile: {
    verb: 'the bullets tick down the list and each line rewrites',
    parts: [null, line(), pop([7.5, 7], 1.8, { as: 'bullet' }), pop([7.5, 12], 1.8, { as: 'bullet', delay: 0.1 }), pop([7.5, 17], 1.8, { as: 'bullet', delay: 0.2 }), line(0.1), line(0.2)],
  },
  profit: {
    verb: 'the coin hops up on its sprout while the two leaves sway',
    parts: [hop([12, 9], 1.2, { as: 'coin' }), wiggle([12, 19.5], [15, 19.5], -10, { as: 'leaf', delay: 0.06 }), wiggle([12, 19.5], [9, 19.5], 10, { as: 'leaf', delay: 0.06 }), null, hop([12, 9], 1.2, { as: 'coin' })],
  },
  'programming-flag': {
    verb: 'the code brackets push apart on the flag and the slash redraws',
    parts: [wiggle([4, 3], [12.5, 9], -3, { as: 'flag' }), null, nudge([17, 9], 0.9, 0, { as: 'bracket' }), nudge([8, 9], -0.9, 0, { as: 'bracket' }), draw({ as: 'slash', delay: 0.12 })],
  },
  'progress-01': {
    verb: 'the ring loads around once',
    parts: [loop({ as: 'ring' })],
  },
  'progress-02': {
    verb: 'the quarter wedge grows out from the centre',
    parts: [null, swell(C, [15.8, 8.3], [1, 0.3, 1.08, 1, 1], { as: 'fill' })],
  },
  'progress-03': {
    verb: 'the half wedge swings back, then catches up',
    parts: [null, swing(C, [15.8, 12], [0, -40, 8, -2, 0], { as: 'fill' })],
  },
  'progress-04': {
    verb: 'the three-quarter fill pops from the centre',
    parts: [beat(C, { delay: 0.3 }), pop([12.1, 12.1], 1.1, { as: 'fill' })],
  },
  progress: {
    verb: 'the fill wedge spins once around the ring',
    parts: [null, swing(C, [12.4, 12], [0, 72, 252, 371, 360], { as: 'fill', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9 })],
  },

  // --- projectors, promotion ---------------------------------------------------------------------------------
  'projector-01': {
    verb: 'the lens pops and its light rays blink above it',
    parts: [null, pop([15.5, 10], 1.16, { as: 'lens' }), null, null, blink({ as: 'rays', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.1 }), blink({ as: 'led', opacity: [1, 0.2, 1, 1, 1] })],
  },
  projector: {
    verb: 'the three rays flash out of the lens in turn',
    parts: [beat([14, 12.5], { delay: 0.3 }), null, null, blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1] }), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 }), blink({ as: 'ray', opacity: [1, 0.1, 1, 1, 1], delay: 0.1 })],
  },
  promotion: {
    verb: 'the megaphone blares, kicking back as sound bursts out of the bell',
    parts: [ride([12.2, 9.5], out(-0.8, 0.4), { as: 'horn' }), ride([9.5, 17.5], out(-0.8, 0.4), { as: 'horn' }), ride([7.5, 9.5], out(-0.8, 0.4), { as: 'horn' })],
    extras: [burst(rays(21.5, 9.5, 1.4, 2.6, 5, -72), { delay: 0.08 })],
  },

  // --- property sheets ---------------------------------------------------------------------------------
  'property-add': {
    verb: 'the plus spins in at the sheet corner',
    parts: sheet(spinStar([18.5, 18.5], { as: 'plus' })),
  },
  'property-delete': {
    verb: 'the X twists a quarter turn at the sheet corner',
    parts: sheet(lap([19, 19], 90, { as: 'x', dur: 0.6 })),
  },
  'property-edit': {
    verb: 'the pencil scribbles from its tip at the sheet corner',
    parts: sheet(wiggle([15, 21], [18, 18], -10, { as: 'pencil', dur: 0.66 })),
  },
  'property-new': {
    verb: 'the rows write themselves onto the fresh sheet',
    parts: [beat(C, { delay: 0.36 }), line(), line(0.18), line(0.09)],
  },
  'property-search': {
    verb: 'the magnifier scans in a small loop at the corner',
    parts: sheet(ride([18.5, 18.5], [[0, 0], [-0.9, -0.6], [0.6, -0.9], [0.3, 0.4], [0, 0]], { as: 'lens', ease: INOUT, dur: 0.86 })),
  },
  'property-view': {
    verb: 'the eye at the corner blinks',
    parts: [null, null, null, null, { as: 'eye', origin: [17, 18.5], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.3, 0.6], ease: INOUT, dur: 0.6 }, { as: 'eye', origin: [17, 18.5], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.3, 0.6], ease: INOUT, dur: 0.6 }],
  },
  proportions: {
    verb: 'the inner frame scales from its corner and the divider redraws',
    parts: [null, swell([2, 20], [9.5, 14.5], [1, 0.8, 1.06, 1, 1], { as: 'frame' }), line(0.16)],
  },
  'protection-mask': {
    verb: 'the mask presses onto the face and the face nods',
    parts: [beat([11, 12], { delay: 0.26 }), ride([13.7, 15.8], out(-0.8, -0.6), { as: 'mask' })],
  },
  pulley: {
    verb: 'the rope is hauled and the weight lifts on its line',
    parts: [
      null,
      null,
      null,
      retrace({ as: 'rope', dur: 0.66 }),
      null,
      null,
      flex('Y', [19, 10.5], [19, 13.8], [1, 0.7, 1.05, 1, 1], { as: 'rope' }),
      ride([19, 19], out(0, -2), { as: 'weight' }),
    ],
  },

  // --- pulses ---------------------------------------------------------------------------------
  pulse: {
    verb: 'the heartbeat line sweeps off and rewrites',
    parts: [sweep({ as: 'beat' })],
  },
  'pulse-01': {
    verb: 'a blip runs along the heartbeat line',
    parts: [loop({ as: 'beat', dur: 0.9 })],
  },
  'pulse-02': {
    verb: 'the double heartbeat retraces itself',
    parts: [retrace({ as: 'beat' })],
  },
  'pulse-rectangle': {
    verb: 'the heartbeat sweeps across the monitor',
    parts: [null, sweep({ as: 'beat' })],
  },
  'pulse-rectangle-01': {
    verb: 'the heartbeat spikes taller on the monitor and calms',
    parts: [null, flex('Y', C, C, [1, 1.4, 0.8, 1, 1], { as: 'beat' })],
  },
  'pulse-rectangle-02': {
    verb: 'the monitor nods and the double beat retraces',
    parts: [beat(C, { delay: 0.3 }), retrace({ as: 'beat' })],
  },

  // --- pumpkin, punch ---------------------------------------------------------------------------------
  pumpkin: {
    verb: 'the pumpkin bulges at its sides and the stem wiggles',
    parts: [null, null, ride([18, 13.9], out(0.6, 0), { as: 'side' }), ride([6, 13.9], out(-0.6, 0), { as: 'side' }), wiggle([12, 6], [13.5, 4], 14, { as: 'stem' })],
  },
  punch: {
    verb: 'the fist jabs forward and recoils',
    parts: [{ as: 'fist', origin: C, transform: ['translate(0px, 0px) scale(1)', 'translate(1.2px, 0px) scale(1.12)', 'translate(-0.2px, 0px) scale(0.98)', 'translate(0px, 0px) scale(1)'], times: [0, 0.24, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.5 }],
  },
  'punching-ball': {
    verb: 'the bag swings from its hook after a hit',
    parts: [
      swing([12, 2], [12, 14], [0, 10, -7, 3, 0], { as: 'bag', dur: 0.86 }),
      swing([12, 2], [12, 18], [0, 10, -7, 3, 0], { as: 'bag', dur: 0.86 }),
      null,
      swing([12, 2], [12, 9], [0, 10, -7, 3, 0], { as: 'bag', dur: 0.86 }),
    ],
  },
  'punching-ball-01': {
    verb: 'the bag takes a punch and jolts sideways',
    parts: [ride([12, 14], out(1.2, 0), { as: 'bag', dur: 0.5 }), ride([12, 18], out(1.2, 0), { as: 'bag', dur: 0.5 }), null, ride([12, 9], out(1.2, 0), { as: 'bag', dur: 0.5 })],
  },
  'punching-ball-02': {
    verb: 'the ball wobbles on its spring stand',
    parts: [null, wiggle([12, 18.5], [12, 15.3], -12, { as: 'stand' }), wiggle([12, 18.5], [12, 7], -12, { as: 'stand' })],
  },
  'purse-01': {
    verb: 'the bag swings from its handles',
    wrap: tilt([12, 2], 6),
    parts: [null, null, null, null],
  },
  purse: {
    verb: 'the coins hop out of the wallet and the clasp pops',
    parts: [pop([17.5, 14], 1.3, { as: 'clasp', delay: 0.2 }), hop([4, 18], 1.2, { as: 'coin' }), hop([8, 18], 1.2, { as: 'coin', delay: 0.1 }), null],
  },
  'push-up-bar': {
    verb: 'the upper bar presses down toward the floor bar and rises',
    parts: [ride([12, 7.3], out(0, 1.2), { as: 'bar' }), ride([20.5, 10], out(0, 1.2), { as: 'bar' }), ride([3.5, 10], out(0, 1.2), { as: 'bar' }), ride([12, 5.2], out(0, 1.2), { as: 'bar' }), null, null, null, null],
  },

  // --- pyramids ---------------------------------------------------------------------------------
  'pyramid-maslowo': {
    verb: 'the tier lines write up the pyramid one level at a time',
    parts: [beat(C, { delay: 0.36 }), line(0.12), draw({ as: 'divider' })],
  },
  'pyramid-structure': {
    verb: 'the tiers hop in turn from the base to the tip',
    parts: [hop([12, 4.5], 1.2, { as: 'tier', delay: 0.16 }), hop(C, 1.2, { as: 'tier', delay: 0.08 }), hop([12, 19.5], 1.2, { as: 'tier' })],
  },
  'pyramid-structure-01': {
    verb: 'the tiers slide out alternately left and right, then restack',
    parts: [ride([12, 4.5], out(1, 0), { as: 'tier' }), ride(C, out(-1, 0), { as: 'tier', delay: 0.06 }), ride([12, 19.5], out(1, 0), { as: 'tier', delay: 0.12 })],
  },
  'pyramid-structure-02': {
    verb: 'the tier lines rewrite and the pyramid nods',
    parts: [beat(C, { delay: 0.3 }), line()],
  },
  pyramid: {
    verb: 'the ridge line drops down and the faces redraw',
    parts: [draw({ as: 'ridge' }), retrace({ as: 'faces', delay: 0.12 })],
  },
  python: {
    verb: 'the two snakes turn a half turn around each other',
    wrap: lap(C, 180, { as: 'snakes', dur: 0.8 }),
    parts: [null, null, null, null],
  },
  'qq-plot': {
    verb: 'the fit line draws and the points pop along it',
    parts: [
      null,
      draw({ as: 'fit' }),
      pop([13.3, 17.3], 2.2, { as: 'point', delay: 0.1 }),
      pop([19.3, 11.3], 2.2, { as: 'point', delay: 0.25 }),
      pop([14.3, 4.3], 2.2, { as: 'point', delay: 0.3 }),
      pop([9.3, 6.3], 2.2, { as: 'point', delay: 0.2 }),
      pop([7.3, 11.3], 2.2, { as: 'point', delay: 0.15 }),
    ],
  },

  // --- qr, question, queue ---------------------------------------------------------------------------------
  'qr-code-scan': {
    verb: 'a scan line sweeps down the code inside the brackets',
    parts: [beat(C, { delay: 0.7 }), null, null, null, null],
    extras: [
      {
        as: 'scan',
        tag: 'path',
        attrs: { d: 'M5 5H19', strokeWidth: '1.2' },
        transform: ['translateY(0px)', 'translateY(0px)', 'translateY(14px)', 'translateY(14px)'],
        opacity: [0, 1, 1, 0],
        times: [0, 0.1, 0.8, 1],
        ease: ['linear', INOUT, 'linear'],
        dur: 0.9,
      },
    ],
  },
  'qr-code': {
    verb: 'the three finder squares pop in turn and the data lines rewrite',
    parts: [pop([6, 6], 1.2, { as: 'finder' }), pop([6, 18], 1.2, { as: 'finder', delay: 0.2 }), line(0.1), line(0.2), pop([18, 6], 1.2, { as: 'finder', delay: 0.1 }), line(0.3)],
  },
  question: {
    verb: 'the thought bubble pops above the head and its dots blink',
    parts: [blink({ as: 'dots', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.2, dur: 0.6 }), swell([9, 15], [17, 8], [1, 0.7, 1.08, 1, 1], { as: 'bubble' }), null, null],
  },
  queue: {
    verb: 'the queued items shuffle along one after another',
    parts: [null, ride([12, 14], out(1.2, 0), { as: 'item' }), ride([12, 10], out(1.2, 0), { as: 'item', delay: 0.08 }), ride([12, 6], out(1.2, 0), { as: 'item', delay: 0.16 })],
  },
  'queue-01': {
    verb: 'the stack bounces from the tray up, item by item',
    parts: [beat([12, 16]), hop([12, 14], 1, { as: 'item', delay: 0.06 }), hop([12, 10], 1, { as: 'item', delay: 0.12 }), hop([12, 6], 1, { as: 'item', delay: 0.18 })],
  },
  'queue-02': {
    verb: 'the two lines settle down onto the bar',
    parts: [beat([12, 16], { delay: 0.3 }), ride([12, 10], out(0, 1.2), { as: 'item', delay: 0.08 }), ride([12, 6], out(0, 1.4), { as: 'item' })],
  },

  // --- quills, quizzes ---------------------------------------------------------------------------------
  'quill-write': {
    verb: 'the quill wiggles from its tip and the ink stroke rewrites',
    parts: [wiggle([5, 17], [12.2, 9], -7, { as: 'quill', dur: 0.66 }), line(0.1, { dur: 0.6 })],
  },
  'quill-write-01': {
    verb: 'the ink stroke draws itself and the quill lifts off',
    parts: [hop([12.2, 9], 1.2, { as: 'quill', delay: 0.3 }), draw({ as: 'ink' })],
  },
  'quill-write-02': {
    verb: 'the quill scribbles on the page and the stroke rewrites',
    parts: [null, wiggle([11, 13], [16.3, 7.1], -8, { as: 'quill', dur: 0.66 }), line(0.12, { dur: 0.6 })],
  },
  quiz: {
    verb: 'the question mark hops inside the badge',
    parts: [null, hop(C, 1.4, { as: 'mark' })],
  },
  'quiz-01': {
    verb: 'the badge turns a quarter around the still question mark',
    parts: [lap(C, 90, { as: 'badge', dur: 0.7 }), null],
  },
  'quiz-02': {
    verb: 'the question mark wobbles in the bulb and the dot blinks',
    parts: [beat([12, 10.3], { delay: 0.3 }), null, wiggle([12, 11.5], [12, 8.8], -12, { as: 'mark' }), blink({ as: 'dot', opacity: [1, 0.1, 1, 1, 1], delay: 0.16 })],
  },
  'quiz-03': {
    verb: 'the two answers are ticked off one after the other',
    parts: [null, hop([12, 3.8], 0.8, { as: 'clip' }), null, draw({ as: 'check', delay: 0.1 }), null, draw({ as: 'check', delay: 0.3 })],
  },
  'quiz-04': {
    verb: 'the answer lines rewrite, then the checks pop',
    parts: [null, line(), pop([15.5, 10.5], 1.3, { as: 'check', delay: 0.26 }), line(0.1), pop([15.5, 16.5], 1.3, { as: 'check', delay: 0.36 })],
  },
  'quiz-05': {
    verb: 'the question hops in the front bubble as the back bubble slides out',
    parts: [hop([10.5, 8.3], 1.2, { as: 'mark' }), hop([10.5, 13.5], 1.2, { as: 'mark' }), ride([14.8, 16], out(0.8, 0.8), { as: 'bubble' }), null],
  },
  quora: {
    verb: 'the q tail flicks and the bowl rewrites',
    parts: [ride([14.5, 16.3], out(0.8, 0.8), { as: 'tail' }), line(0.1, { as: 'bowl', dur: 0.6 }), line(0, { as: 'bowl', dur: 0.6 })],
  },

  // --- quotes ---------------------------------------------------------------------------------
  'quote-down-circle': {
    verb: 'the closing quote drops down inside the ring',
    parts: [null, nudge(C, 0, 1.4, { as: 'quote' })],
  },
  'quote-down-square': {
    verb: 'the closing quote hops inside the tile',
    parts: [null, hop(C, 1.4, { as: 'quote' })],
  },
  'quote-down': {
    verb: 'the two closing marks drop in turn',
    parts: [nudge([6, 8], 0, 1.4, { as: 'mark' }), nudge([7, 13.5], 0, 1.4, { as: 'mark' }), nudge([18, 8], 0, 1.4, { as: 'mark', delay: 0.1 }), nudge([19, 13.5], 0, 1.4, { as: 'mark', delay: 0.1 })],
  },
  'quote-up-circle': {
    verb: 'the opening quote lifts up inside the ring',
    parts: [null, nudge(C, 0, -1.4, { as: 'quote' })],
  },
  'quote-up-square': {
    verb: 'the opening quote flips over inside the tile',
    parts: [null, flip(C, 1, { as: 'quote' })],
  },
  'quote-up': {
    verb: 'the two opening marks rise in turn',
    parts: [nudge([18, 16], 0, -1.4, { as: 'mark', delay: 0.1 }), nudge([17, 10], 0, -1.4, { as: 'mark', delay: 0.1 }), nudge([6, 16], 0, -1.4, { as: 'mark' }), nudge([5, 10], 0, -1.4, { as: 'mark' })],
  },
  quotes: {
    verb: 'the quote pops inside the speech bubble, which nods',
    parts: [beat([12, 12.1], { delay: 0.26 }), pop(C, 1.2, { as: 'quote' })],
  },

  // --- quran ---------------------------------------------------------------------------------
  quran: {
    verb: 'the open book hops on its stand',
    parts: [hop([12, 8], 1.2, { as: 'book' }), null],
  },
  'quran-01': {
    verb: 'the open book flips over its spine on the stand',
    parts: [flip([12, 8], 1, { as: 'book' }), beat([12, 14.5], { delay: 0.3 })],
  },
  'quran-02': {
    verb: 'the star turns an eighth on the cover',
    parts: [null, null, lap([12.5, 9.5], 45, { as: 'star', dur: 0.66 }), beat([12.5, 10.8], { delay: 0.3 })],
  },
  'quran-03': {
    verb: 'the crescent rocks and the star twinkles beside it',
    parts: [wiggle([11.9, 9.6], [11.9, 9.6], -14, { as: 'moon' }), null, null, pop([13.5, 8], 2, { as: 'star', delay: 0.14 })],
  },
  qwen: {
    verb: 'the outline rewrites and the centre triangle pops',
    parts: [line(0, { as: 'outline', dur: 0.7 }), beat([13, 12], { delay: 0.2 }), pop([12, 12.8], 1.3, { as: 'core', delay: 0.1 })],
  },

  // --- racing, radar, radio ---------------------------------------------------------------------------------
  'racing-flag': {
    verb: 'the checkered flag ripples on its pole',
    wrap: { as: 'flag', origin: [5, 22], transform: ['skewY(0deg)', 'skewY(-5deg)', 'skewY(4deg)', 'skewY(-1.5deg)', 'skewY(0deg)'], times: [0, 0.24, 0.5, 0.76, 1], ease: INOUT, dur: 0.8 },
    parts: [null, null, null],
  },
  radar: {
    verb: 'the sweep arm turns a full circle',
    parts: [null, lap(C, 360, { as: 'arm', dur: 0.9 })],
  },
  'radar-01': {
    verb: 'the dish arc pings and the arm twitches back and forth',
    parts: [wave([10.7, 12.2], { as: 'arc' }), wiggle(C, C, -28, { as: 'arm' })],
  },
  'radar-02': {
    verb: 'the inner arc sweeps a full circle inside the ring',
    parts: [null, lap(C, 360, { as: 'sweep', dur: 0.9 })],
  },
  'radar-03': {
    verb: 'the two rings spin in opposite directions around the dot',
    parts: [pop(C, 1.3, { as: 'dot', delay: 0.2 }), lap(C, 360, { as: 'ring' }), lap(C, -360, { as: 'ring' })],
  },
  radial: {
    verb: 'the nested arcs turn against each other',
    parts: [lap(C, 360, { as: 'arc' }), lap(C, -360, { as: 'arc', delay: 0.05 }), lap([14, 12], 360, { as: 'arc', delay: 0.1 })],
  },
  radiation: {
    verb: 'the trefoil spins one full turn around its core',
    wrap: lap([12, 11.1], 360, { as: 'trefoil', dur: 0.9 }),
    parts: [null, null, null, null],
  },
  'radio-01': {
    verb: 'the antenna wobbles and the speaker arcs pulse',
    parts: [null, wave([14, 14], { as: 'sound' }), wiggle([6.5, 6], [11.8, 4], -12, { as: 'antenna' }), blink({ as: 'led', opacity: [1, 0.15, 1, 1, 1], delay: 0.1 })],
  },
  'radio-02': {
    verb: 'the antenna wobbles while the dial pops and the lights blink',
    parts: [null, null, wiggle([5, 6], [12, 4], 10, { as: 'antenna' }), blink({ as: 'led', opacity: [1, 0.15, 1, 1, 1] }), pop([15, 13], 1.14, { as: 'dial', delay: 0.1 }), blink({ as: 'led', opacity: [1, 1, 0.15, 1, 1] })],
  },
  'radio-button': {
    verb: 'the selection dot pops on inside the ring',
    parts: [beat(C, { delay: 0.2 }), stamp(C, { as: 'dot' })],
  },
}

export default settleSpecs(specs)
