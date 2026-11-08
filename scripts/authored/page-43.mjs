/**
 * Page 43 — mail-unlock-01 → medal-06.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted maximize-screen sits in this span and is skipped.
 *
 * The mail triples follow page 42's rule: bare lets the badge act, -01 snaps
 * the flap shut first, -02 retraces the inner flap first. Map pins drop,
 * folded maps unfold their panels. Masks smile and frown. Medals swing on
 * their ribbon.
 *
 * Identical-geometry pairs get different jobs: mail-unlock / -01,
 * mail-upload / -01, mail-validation / -01, mail-voice / -01,
 * map-pinpoint / -01, maps-circle / -01, maps-global / -01,
 * maps-location / -01, maps-square / -01, mask-theater / -01,
 * maximize / maximize-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  dim,
  draw,
  flex,
  flip,
  glint,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const shut = (o = {}) => flex('Y', [12, 3], [12, 7.7], [1, 0.3, 1.08, 1, 1], { as: 'flap', dur: 0.56, ...o })
const inner = (o = {}) => retrace({ as: 'flap', dur: 0.56, ...o })
/** A pin drops onto the map. */
const drop = (c, o = {}) => ride(c, [[0, 0], [0, -2], [0, 0.4], [0, 0], [0, 0]], { as: 'pin', times: [0, 0.32, 0.56, 0.8, 1], ease: ['easeOut', 'easeIn', 'easeOut', 'easeInOut'], ...o })
/** A folded map panel flaps open and closes. */
const panel = (c, o = {}) => flex('X', c, c, [1, 0.8, 1.04, 1, 1], { as: 'panel', ...o })
/** A medal swinging under its ribbon. */
const sway = (c, o = {}) => around([12, 2], c, [0, 8, -6, 2, 0], { as: 'medal', dur: 0.8, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- mail ---------------------------------------------------------------------------------
  'mail-unlock': {
    verb: 'the shackle lifts open on the corner',
    parts: [null, null, ride([18.5, 17], out(0, -1), { as: 'lock' })],
  },
  'mail-unlock-01': {
    verb: 'the flap snaps shut and the padlock swings open',
    parts: [shut(), null, around([21, 19], [18.5, 17], [0, 14, -4, 1, 0], { as: 'lock', delay: 0.2 })],
  },
  'mail-unlock-02': {
    verb: 'the inner flap redraws and the shackle lifts',
    parts: [inner(), null, ride([18.5, 17], out(0, -1), { as: 'lock', delay: 0.22 })],
  },
  'mail-upload': {
    verb: 'the arrow lifts off the corner',
    parts: [null, null, ride([18.5, 17.5], out(0, -1.4), { as: 'arrow' })],
  },
  'mail-upload-01': {
    verb: 'the flap snaps shut and the arrow hops',
    parts: [null, shut(), hop([18.5, 17.5], 1, { as: 'arrow', delay: 0.2 })],
  },
  'mail-upload-02': {
    verb: 'the inner flap redraws and the arrow lifts',
    parts: [null, inner(), ride([18.5, 17.5], out(0, -1.4), { as: 'arrow', delay: 0.22 })],
  },
  'mail-validation': {
    verb: 'the check ticks inside the seal',
    parts: [null, draw({ as: 'check' }), null, null],
  },
  'mail-validation-01': {
    verb: 'the flap folds down and the seal stamps',
    parts: [inner(), null, null, stamp([17, 17], { as: 'seal', delay: 0.2 })],
  },
  'mail-validation-02': {
    verb: 'the flap snaps shut and the check ticks',
    parts: [shut({ origin: [12, 7.2] }), draw({ as: 'check', delay: 0.22 }), null, null],
  },
  'mail-voice': {
    verb: 'the microphone bobs as it records',
    parts: [null, null, ride([18, 17], [[0, 0], [0, -0.8], [0, 0], [0, -0.5], [0, 0]], { as: 'mic', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 })],
  },
  'mail-voice-01': {
    verb: 'the flap snaps shut and the microphone pulses',
    parts: [flex('Y', [12, 2], [12, 7.2], [1, 0.3, 1.08, 1, 1], { as: 'flap', dur: 0.56 }), null, pop([18, 17], 1.15, { as: 'mic', delay: 0.2 })],
  },
  'mail-voice-02': {
    verb: 'the inner flap redraws and the microphone bobs',
    parts: [null, inner(), ride([18, 17], [[0, 0], [0, -0.8], [0, 0], [0, -0.5], [0, 0]], { as: 'mic', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7, delay: 0.22 })],
  },
  'mail-warning': {
    verb: 'the exclamation stretches and its dot bounces',
    parts: [null, null, flex('Y', [20, 17], [20, 15], [1, 1.3, 0.9, 1.04, 1], { as: 'bang' }), hop([20, 20.8], 1.2, { as: 'dot', delay: 0.14 })],
  },
  mail: {
    verb: 'the flap opens and shuts on the envelope',
    parts: [flex('Y', [12, 6], [12, 8.7], [1, -0.4, -0.4, 1, 1], { as: 'flap', times: [0, 0.3, 0.6, 0.86, 1], dur: 0.8 }), null],
  },
  'mailbox-01': {
    verb: 'the flag flips up and the letter slot opens',
    parts: [flex('X', [6.5, 9], [7.5, 9], [1, 0.3, 1.1, 1, 1], { as: 'slot', delay: 0.16 }), around([17.5, 8], [18.5, 5], [0, 70, 60, 64, 0], { as: 'flag' }), null, null, null],
  },
  mailbox: {
    verb: 'the slot opens and the box nods',
    parts: [hop([12, 10.5], 0.6, { as: 'box', delay: 0.2 }), null, flex('X', [10.5, 11], [12, 11], [1, 0.3, 1.1, 1, 1], { as: 'slot' }), null],
  },
  mails: {
    verb: 'the back envelope slides out from behind the front one',
    parts: [ride([14.5, 9], out(1, -1), { as: 'back' }), null, ride([14.5, 7.8], out(1, -1), { as: 'back' })],
  },

  // --- people -------------------------------------------------------------------------------
  'male-02': {
    verb: 'the man straightens his shoulders',
    parts: [hop(C, 0.8, { as: 'man' })],
  },
  'male-symbol': {
    verb: 'the arrow points out of the circle and back',
    parts: [nudge([15, 9], 0.6, -0.6, { as: 'circle', delay: 0.06 }), nudge([6.8, 17.3], -1, 1, { as: 'arrow' })],
  },
  'man-woman': {
    verb: 'the two figures hop one after the other',
    parts: [hop([17.5, 15.3], 1, { as: 'woman', delay: 0.1 }), hop([6.5, 4], 1, { as: 'man' }), hop([17.5, 4], 1, { as: 'woman', delay: 0.1 }), hop([6.5, 15.3], 1, { as: 'man' })],
  },
  man: {
    verb: 'the man nods and steps',
    parts: [hop([12, 4], 1.2, { as: 'head' }), ride([12, 15.3], out(0, -0.6), { as: 'body', delay: 0.06 })],
  },
  manager: {
    verb: 'the manager straightens the tie',
    parts: [null, flex('Y', [12, 13], [12, 16.8], [1, 0.8, 1.06, 1, 1], { as: 'tie' }), hop([12, 6], 0.8, { as: 'head', delay: 0.1 })],
  },

  // --- map pins -------------------------------------------------------------------------------
  'map-pin-check': {
    verb: 'the check ticks beside the pin',
    parts: [null, null, draw({ as: 'check' })],
  },
  'map-pin-house': {
    verb: 'the little house hops beside the pin',
    parts: [pop([10, 10], 1.25, { as: 'dot' }), hop([18, 18], 1.2, { as: 'house' }), hop([18, 20.5], 1.2, { as: 'house' }), null],
  },
  'map-pin-minus': {
    verb: 'the minus shrinks beside the pin',
    parts: [null, null, flex('X', [17.5, 17.5], [17.5, 17.5], [1, 0.3, 1.1, 1, 1], { as: 'minus' })],
  },
  'map-pin-pen': {
    verb: 'the pen scribbles beside the pin',
    parts: [null, ride([17.5, 17], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' }), null],
  },
  'map-pin-plus': {
    verb: 'the plus spins beside the pin',
    parts: [null, lap([17.5, 17.5], 90, { as: 'plus', dur: 0.6 }), null],
  },
  'map-pin-x-inside': {
    verb: 'the X rattles inside the pin',
    parts: [shake([12, 10.5], { as: 'x' }), null],
  },
  'map-pin-x': {
    verb: 'the X rattles beside the pin',
    parts: [null, shake([18, 18], { as: 'x' }), null],
  },
  'map-pin': {
    verb: 'the pin drops onto the folded map',
    parts: [beat([12, 15.5], { as: 'map', delay: 0.3 }), null, drop([12, 6.5])],
  },
  'map-pinpoint-01': {
    verb: 'the pin drops beside the dial',
    parts: [null, null, drop([17.5, 17]), drop([17.5, 16.5])],
  },
  'map-pinpoint': {
    verb: 'the dial needle sweeps and the pin dot pops',
    parts: [around([11, 11], [11, 11], [0, -30, 6, -2, 0], { as: 'needle' }), null, null, pop([17.5, 16.5], 2, { as: 'dot', delay: 0.14 })],
  },
  'map-pinpoint-02': {
    verb: 'the pin hops and the target arc redraws',
    parts: [hop([17.5, 16.4], 1, { as: 'pin' }), retrace({ as: 'arc', delay: 0.1 }), null, hop([17.5, 15.5], 1, { as: 'pin' })],
  },
  maping: {
    verb: 'the folds of the map flap open',
    parts: [null, panel([15, 13.5], { delay: 0.1 }), panel([8, 10.5])],
  },

  // --- maps -----------------------------------------------------------------------------------
  'maps-circle-01': {
    verb: 'the pin drops onto the round map',
    parts: [drop([13.5, 10]), drop([13.5, 9.5]), null, null],
  },
  'maps-circle': {
    verb: 'the roads redraw under the pin',
    parts: [null, pop([13.5, 9.5], 2, { as: 'dot', delay: 0.2 }), null, retrace({ as: 'road' })],
  },
  'maps-circle-02': {
    verb: 'the pin bobs above the crossroads',
    parts: [null, draw({ as: 'road', delay: 0.14 }), hop([13.5, 10], 1, { as: 'pin' }), hop([13.5, 9.3], 1, { as: 'pin' })],
  },
  'maps-editing': {
    verb: 'the pen scribbles over the folded map',
    parts: [ride([18, 17.5], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' }), null, panel([8, 10], { delay: 0.1 }), null],
  },
  'maps-global-01': {
    verb: 'the pin drops on the globe',
    parts: [null, null, drop([16.5, 7.5]), drop([16.5, 8])],
  },
  'maps-global': {
    verb: 'the globe orbit line swings as the pin dot pops',
    parts: [null, flex('X', [11.5, 15.5], [11.5, 15.5], [1, 0.8, 1.06, 1, 1], { as: 'orbit' }), pop([16.5, 7.5], 1.4, { as: 'dot', delay: 0.14 }), null],
  },
  'maps-global-02': {
    verb: 'the pin swells on the globe',
    parts: [null, retrace({ as: 'orbit', delay: 0.1 }), pop([17, 7], 1.4, { as: 'dot', delay: 0.2 }), swell([17, 13], [17, 7.5], [1, 1.1, 0.96, 1, 1], { as: 'pin' })],
  },
  'maps-location-01': {
    verb: 'the pin drops onto the map',
    parts: [null, null, null, drop([17.5, 17]), drop([17.5, 16.5])],
  },
  'maps-location': {
    verb: 'the map folds open and the pin dot pops',
    parts: [null, panel([8, 9.5]), panel([15, 7.3], { delay: 0.08 }), null, pop([17.5, 16.5], 2, { as: 'dot', delay: 0.2 })],
  },
  'maps-location-02': {
    verb: 'the pin tilts on its point over the map',
    parts: [null, null, null, around([17.5, 22], [17.5, 17], [0, -10, 6, -2, 0], { as: 'pin' }), around([17.5, 22], [17.5, 16.5], [0, -10, 6, -2, 0], { as: 'pin' })],
  },
  'maps-off': {
    verb: 'the slash cuts across and the map fades',
    parts: [dim({ as: 'map', delay: 0.1 }), dim({ as: 'map', delay: 0.1 }), dim({ as: 'fold', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'maps-refresh': {
    verb: 'the refresh arrows turn on the map corner',
    parts: [lap([18, 18], 360, { as: 'refresh', dur: 0.9 }), null, null, null],
  },
  'maps-search': {
    verb: 'the magnifier scans over the map',
    parts: [null, null, null, ride([18, 18], [[0, 0], [-1, -0.8], [0, -1.2], [0.4, -0.4], [0, 0]], { as: 'lens', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  'maps-square-01': {
    verb: 'the pin drops onto the square map',
    parts: [drop([14.5, 10]), null, null, null, drop([14.5, 9.5])],
  },
  'maps-square': {
    verb: 'the roads redraw and the pin dot pops',
    parts: [null, null, retrace({ as: 'road' }), retrace({ as: 'road', delay: 0.1 }), pop([14.5, 9.5], 2, { as: 'dot', delay: 0.2 })],
  },
  'maps-square-02': {
    verb: 'the pin bobs over the roads',
    parts: [null, draw({ as: 'road', delay: 0.14 }), null, hop([14.5, 10], 1, { as: 'pin' }), hop([14.5, 9.3], 1, { as: 'pin' })],
  },
  maps: {
    verb: 'the folded panels flap open in turn',
    parts: [null, panel([8, 10.3]), panel([15, 13.5], { delay: 0.1 })],
  },

  // --- markets ------------------------------------------------------------------------------
  'market-analysis': {
    verb: 'the candles grow and shrink in turn',
    parts: [
      flex('Y', [12, 12], [12, 12], [1, 1.25, 0.9, 1.04, 1], { as: 'candle', delay: 0.08 }),
      flex('Y', [19, 8], [19, 8], [1, 0.7, 1.1, 1, 1], { as: 'candle', delay: 0.16 }),
      flex('Y', [5, 13], [5, 13], [1, 0.7, 1.1, 1, 1], { as: 'candle' }),
      ride([12, 19.5], out(0, 0.6), { as: 'wick', delay: 0.08 }),
      ride([19, 12], out(0, 0.5), { as: 'wick', delay: 0.16 }),
      ride([12, 4.5], out(0, -0.6), { as: 'wick', delay: 0.08 }),
      ride([19, 4], out(0, -0.5), { as: 'wick', delay: 0.16 }),
      ride([5, 17], out(0, 0.5), { as: 'wick' }),
      ride([5, 9], out(0, -0.5), { as: 'wick' }),
    ],
  },
  'market-order': {
    verb: 'the order coin drops onto the dotted price line',
    parts: [ride([12, 10], out(0, -1.6), { as: 'coin' }), draw({ as: 'path', delay: 0.1 }), pop([19.5, 10], 2, { as: 'dot', delay: 0.3 }), pop([4.5, 10], 2, { as: 'dot', delay: 0.2 }), null],
  },
  marketing: {
    verb: 'the megaphone blares',
    parts: [pop([18, 10], 1.1, { as: 'bell' }), shake([10, 10], { as: 'horn', dur: 0.5 }), around([9, 17], [8.4, 18.5], [0, -10, 6, -2, 0], { as: 'handle' })],
  },

  // --- masks --------------------------------------------------------------------------------
  'mask-love': {
    verb: 'the heart beats beside the mask',
    parts: [{ as: 'heart', origin: [17.5, 16.9], transform: ['scale(1)', 'scale(1.2)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut', dur: 0.72 }, null, null, null, null],
  },
  'mask-theater-01': {
    verb: 'the mask smiles wider and the eyes squint',
    parts: [null, hop([8, 9.3], 0.6, { as: 'eye' }), flex('X', [12, 16], [12, 16], [1, 1.2, 0.95, 1.03, 1], { as: 'mouth' }), hop([16, 9.3], 0.6, { as: 'eye' })],
  },
  'mask-theater': {
    verb: 'the mask tilts in a theatrical bow',
    parts: [around([12, 21.5], C, [0, -10, 6, -2, 0], { as: 'mask' }), around([12, 21.5], [8, 9.3], [0, -10, 6, -2, 0], { as: 'mask' }), around([12, 21.5], [12, 16], [0, -10, 6, -2, 0], { as: 'mask' }), around([12, 21.5], [16, 9.3], [0, -10, 6, -2, 0], { as: 'mask' })],
  },
  'mask-theater-02': {
    verb: 'the two masks swap places, comedy and tragedy',
    parts: [ride([8.8, 14.5], out(1, -1), { as: 'mask' }), ride([15.5, 9.5], out(-1, 1), { as: 'mask' })],
  },
  mask: {
    verb: 'the mask pleats breathe in and out',
    parts: [flex('X', [12, 8.5], [12, 8.5], [1, 0.9, 1.04, 1, 1], { as: 'pleat', dur: 0.9 }), flex('X', [12, 11.3], [12, 11.3], [1, 0.9, 1.04, 1, 1], { as: 'pleat', dur: 0.9, delay: 0.06 }), flex('X', [12, 15.5], [12, 15.5], [1, 0.9, 1.04, 1, 1], { as: 'pleat', dur: 0.9, delay: 0.12 }), null, null, flex('Y', [12, 15], [12, 17.5], [1, 1.1, 0.96, 1, 1], { as: 'mask', dur: 0.9 })],
  },
  'master-card': {
    verb: 'the two circles overlap closer and part',
    parts: [null, ride([10, 12], out(1, 0), { as: 'circle' }), ride([14.5, 12], out(-1, 0), { as: 'circle' })],
  },
  mastodon: {
    verb: 'the mascot bubble bounces and its letter rewrites',
    parts: [retrace({ as: 'm', delay: 0.1 }), hop([12, 12.2], 0.8, { as: 'bubble' })],
  },
  matches: {
    verb: 'the matches pop up out of the box and one lights',
    parts: [null, null, ride([12, 6.5], out(0, -1.4), { as: 'match' }), ride([9, 6.5], out(0, -1), { as: 'match', delay: 0.08 }), ride([15, 6.5], out(0, -1), { as: 'match', delay: 0.14 }), pop([11.7, 15], 1.15, { as: 'flame', delay: 0.2 })],
  },
  'material-and-texture': {
    verb: 'the layers of fabric lift one by one',
    parts: [ride([12, 7], out(0, -1.2), { as: 'layer', delay: 0.2 }), ride([12, 12.8], out(0, -0.8), { as: 'layer', delay: 0.1 }), retrace({ as: 'weave', delay: 0.1 }), ride([12, 17.8], out(0, -0.4), { as: 'layer' })],
  },
  math: {
    verb: 'the formula wave redraws and the X spins',
    parts: [null, retrace({ as: 'wave' }), lap([15.5, 13.5], 90, { as: 'x', dur: 0.6, delay: 0.2 })],
  },
  matrix: {
    verb: 'the nine cells light up like a falling code column',
    parts: [
      null,
      pop([12, 8], 2.2, { as: 'cell', delay: 0.12 }),
      pop([12, 12], 2.2, { as: 'cell', delay: 0.24 }),
      pop([12, 16], 2.2, { as: 'cell', delay: 0.36 }),
      pop([7, 8], 2.2, { as: 'cell' }),
      pop([7, 12], 2.2, { as: 'cell', delay: 0.12 }),
      pop([7, 16], 2.2, { as: 'cell', delay: 0.24 }),
      pop([17, 8], 2.2, { as: 'cell', delay: 0.24 }),
      pop([17, 12], 2.2, { as: 'cell', delay: 0.36 }),
      pop([17, 16], 2.2, { as: 'cell', delay: 0.48 }),
    ],
  },

  // --- maximize -----------------------------------------------------------------------------
  'maximize-01': {
    verb: 'the corner arrow pushes out to grow the frame',
    parts: [swell([22, 22], [13.8, 12.7], [1, 1.06, 0.98, 1, 1], { as: 'frame', delay: 0.1 }), nudge([6, 5.7], -1, -1, { as: 'arrow' })],
  },
  maximize: {
    verb: 'the arrow and the frame snap apart and back',
    parts: [ride([13.8, 12.7], out(0.6, 0.6), { as: 'frame' }), ride([6, 5.7], out(-0.6, -0.6), { as: 'arrow' })],
  },
  'maximize-02': {
    verb: 'the arrow pushes out as the picture inside grows',
    parts: [swell([22, 22], [13.4, 12.5], [1, 1.08, 0.97, 1, 1], { as: 'frame', delay: 0.1 }), nudge([6, 6], -1, -1, { as: 'arrow' })],
  },
  'maximize-03': {
    verb: 'the arrow pushes out and the chart line climbs',
    parts: [retrace({ as: 'chart', delay: 0.1 }), nudge([6, 6], -1, -1, { as: 'arrow' })],
  },
  'maximize-04': {
    verb: 'the arrow pushes out and the inner mark pops',
    parts: [pop([14, 12.9], 1.06, { as: 'mark', delay: 0.14 }), nudge([6, 6], -1, -1, { as: 'arrow' })],
  },

  // --- pyramids, medals -----------------------------------------------------------------------
  'mayan-pyramid': {
    verb: 'the tiers stack from the base to the temple',
    parts: [ride([12, 19.5], out(0, -0.4), { as: 'tier' }), ride([12, 14.5], out(0, -0.6), { as: 'tier', delay: 0.08 }), ride([12, 9.5], out(0, -0.8), { as: 'tier', delay: 0.16 }), ride([12, 4.5], out(0, -1), { as: 'temple', delay: 0.24 }), draw({ as: 'stairs', delay: 0.1 })],
  },
  maze: {
    verb: 'the walls redraw as the path is solved',
    parts: [retrace({ as: 'wall' }), retrace({ as: 'wall', delay: 0.1 }), retrace({ as: 'wall', delay: 0.2 }), draw({ as: 'wall', delay: 0.3 }), null],
  },
  'mcp-server': {
    verb: 'the two strokes slide along each other',
    parts: [ride([12.1, 11.9], out(-0.6, -0.6), { as: 'stroke' }), ride([11.9, 11.4], out(0.6, 0.6), { as: 'stroke' })],
  },
  'meal-scan': {
    verb: 'the scan corners close in on the apple',
    parts: [swell(C, C, [1, 0.9, 1.04, 1, 1], { as: 'frame' }), pop([12, 12.6], 1.1, { as: 'apple', delay: 0.16 }), around([12, 9.5], [12.5, 8], [0, -20, 12, -4, 0], { as: 'stem', delay: 0.2 })],
  },
  'medal-01': {
    verb: 'the medal swings on its ribbon',
    parts: [null, null, sway([12, 17.5])],
  },
  'medal-02': {
    verb: 'the star medal spins on its ribbon',
    parts: [null, null, lap([12, 17.6], 72, { as: 'star', dur: 0.8 })],
  },
  'medal-03': {
    verb: 'the medal flips to show its back',
    parts: [flip([12, 17.5], 1, { as: 'medal' }), null, null],
  },
  'medal-04': {
    verb: 'the star medal drops on its ribbon and settles',
    parts: [ride([12, 17.6], out(0, 1), { as: 'medal' }), null, flex('Y', [12, 2], [12, 4.5], [1, 1.2, 0.95, 1, 1], { as: 'ribbon' })],
  },
  'medal-05': {
    verb: 'the medal swings on its crossed ribbons',
    parts: [null, around([12, 2], [12, 7.5], [0, 4, -3, 1, 0], { as: 'ribbon', dur: 0.8 }), sway([12, 17.6])],
  },
  'medal-06': {
    verb: 'the medal swings and its center glints',
    parts: [sway([12, 15.5]), sway([12, 15.5]), null, null, null, null],
  },
}

export default settleSpecs(specs)
