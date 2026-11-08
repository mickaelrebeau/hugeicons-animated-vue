/**
 * Page 74 — wallet-04 → wifi-02.
 *
 * Gallery page (80 public icons). Handcrafted original skipped: `wifi-01`.
 *
 * Wallet badges follow the family rule: bare lets the badge act; `-01` lifts
 * the flap, then pops the badge; `-02` blinks the clasp, then the badge acts.
 * Waterfalls cascade their bars in the direction they name. Wardrobes open
 * their doors or slide their drawers. Scales swing their needle.
 *
 * Identical-geometry pairs get different jobs: wallet-add / -01,
 * wallet-done / -01, wallet-not-found / -01, wallet-remove / -01,
 * wardrobe / -01, watch / -01, waterfall-down / -01, waterfall-up / -01,
 * wav / -01, waving-hand / -01, web-design / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  hold,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  swing,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const dimmed = (o = {}) => ({ as: 'dim', opacity: [1, 0.35, 0.35, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.7, ...o })
const quarter = (c, o = {}) => ({ as: 'mark', origin: c, transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.8)', 'rotate(96deg) scale(1.08)', 'rotate(90deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56, ...o })
const boing = (c, o = {}) => ({
  as: 'logo',
  origin: c,
  transform: ['scale(1, 1)', 'scale(1.08, 0.9)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: OUT,
  dur: 0.62,
  ...o,
})
const badgePop = (c, o = {}) => pop(c, 1.2, { as: 'badge', delay: 0.18, ...o })

/** Wallet `-01`: the top flap (bar at y 3–7) lifts off the body. */
const flap01 = () => ride([10.5, 5], out(0, -1.2), { as: 'flap' })
/** Wallet `-02`: the clasp dot blinks. */
const clasp = () => blink({ as: 'clasp', dur: 0.6 })

/** Waterfall bar: drop and land, or grow from a fixed end. */
const drop = (c, delay, dy = 1.4) => ride(c, [[0, 0], [0, dy], [0, -dy * 0.2], [0, 0], [0, 0]], { as: 'bar', delay, dur: 0.56 })
const growFrom = (pivot, c, delay) => scaleFrom('Y', pivot, c, [1, 0.2, 1.1, 1], { as: 'bar', times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.56, delay })

// ---------------------------------------------------------------------------

const specs = {
  // --- wallet ---------------------------------------------------------------------------------------
  'wallet-04': {
    verb: 'the tucked flap lifts and drops back into the wallet',
    parts: [beat([12, 15], { delay: 0.24 }), scaleFrom('Y', [9, 8.5], [9, 5.5], [1, 1.2, 0.95, 1], { as: 'flap' })],
  },
  'wallet-05': {
    verb: 'the strap slides down and snaps back across the wallet',
    parts: [null, ride([12, 11.5], out(0, 1.2), { as: 'strap' })],
  },
  'wallet-add-01': {
    verb: 'the flap lifts and the plus pops',
    parts: [flap01(), null, null, badgePop([6.5, 17.5])],
  },
  'wallet-add-02': {
    verb: 'the clasp blinks and the plus turns a quarter',
    parts: [null, null, clasp(), quarter([6.5, 18], { delay: 0.14 })],
  },
  'wallet-add': {
    verb: 'the plus turns a quarter',
    parts: [null, null, null, quarter([6.5, 17.5])],
  },
  'wallet-cards': {
    verb: 'the two cards rise out of the wallet in turn',
    parts: [null, ride([12, 12], out(0, -1), { as: 'card', delay: 0.1 }), ride([12, 8], out(0, -1.4), { as: 'card' })],
  },
  'wallet-done-01': {
    verb: 'the flap lifts and the tick pops',
    parts: [flap01(), null, null, badgePop([7, 18])],
  },
  'wallet-done-02': {
    verb: 'the clasp blinks and the tick writes in',
    parts: [null, null, clasp(), draw({ as: 'tick', delay: 0.14 })],
  },
  'wallet-done': {
    verb: 'the tick writes itself onto the wallet',
    parts: [null, null, null, draw({ as: 'tick' })],
  },
  'wallet-not-found-01': {
    verb: 'the wallet rattles and the slash cuts across',
    parts: [draw({ as: 'slash', delay: 0.14 }), ...[[5, 5.3], [19, 12.6], [16, 12], [12, 13], [12.5, 5]].map((c) => wiggle([12, 13], c, -4, { as: 'wallet', dur: 0.56 }))],
  },
  'wallet-not-found-02': {
    verb: 'the slash writes across and the wallet dims',
    parts: [draw({ as: 'slash' }), dimmed(), dimmed(), dimmed(), dimmed()],
  },
  'wallet-not-found': {
    verb: 'the slash writes itself across the wallet',
    parts: [draw({ as: 'slash' }), null, null, null, null, null],
  },
  'wallet-remove-01': {
    verb: 'the flap lifts and the cross pops',
    parts: [flap01(), null, null, badgePop([6, 18])],
  },
  'wallet-remove-02': {
    verb: 'the clasp blinks and the cross rattles',
    parts: [null, null, clasp(), shake([6, 18.5], { as: 'x', delay: 0.14 })],
  },
  'wallet-remove': {
    verb: 'the cross turns a quarter',
    parts: [null, null, null, quarter([6, 18])],
  },
  wallet: {
    verb: 'the flap lifts and the clasp pops',
    parts: [ride([10.5, 5], out(0, -0.8), { as: 'flap' }), null, pop([19, 14], 1.16, { as: 'clasp', delay: 0.16 })],
  },
  walpaper: {
    verb: 'the sun pops over the mountain as it slides into place',
    parts: [null, null, pop([7.5, 8.5], 1.5, { as: 'sun', delay: 0.16 }), ride([14, 12.4], out(-1.2, 0), { as: 'hill' })],
  },
  wanted: {
    verb: 'the poster swings on its pin',
    parts: [
      wiggle([12, 2], [12, 11.9], 5, { as: 'poster' }),
      wiggle([12, 2], [12, 18], 5, { as: 'poster' }),
      wiggle([12, 2], [12, 7.5], 5, { as: 'poster' }),
      wiggle([12, 2], [12, 12.4], 5, { as: 'poster' }),
    ],
  },

  // --- wardrobe -------------------------------------------------------------------------------------
  'wardrobe-01': {
    verb: 'the door handle jiggles and the wardrobe rocks',
    parts: [null, beat([12, 11], { delay: 0.2 }), null, null, null, ride([15, 11], [[0, 0], [0, 0.6], [0, -0.4], [0, 0.3], [0, 0]], { as: 'handle', ease: 'easeInOut' })],
  },
  'wardrobe-02': {
    verb: 'the handles pull apart as the doors open',
    parts: [null, null, null, hold([9, 10.5], -0.9, 0, { as: 'handle' }), hold([15, 10.5], 0.9, 0, { as: 'handle' })],
  },
  'wardrobe-03': {
    verb: 'the drawer line slides down and the handles knock',
    parts: [null, ride([12, 16], out(0, 0.8), { as: 'drawer' }), null, null, hop([9, 9.5], 0.7, { delay: 0.12 }), hop([15, 9.5], 0.7, { delay: 0.2 })],
  },
  'wardrobe-04': {
    verb: 'the two handles turn in opposite directions',
    parts: [null, null, null, null, ride([9, 9], out(0, -0.8), { as: 'handle' }), ride([15, 11], out(0, 0.8), { as: 'handle' })],
  },
  wardrobe: {
    verb: 'the drawers slide out in turn',
    parts: [null, null, null, ride([7.5, 14], out(-1, 0), { as: 'drawer', delay: 0.1 }), ride([7.5, 8], out(-1, 0), { as: 'drawer' }), null],
  },
  warehouse: {
    verb: 'the shutter rolls up and drops back',
    parts: [null, ride([12, 14], out(0, -1.4), { as: 'slat' }), ride([12, 18], out(0, -1.4), { as: 'slat', delay: 0.06 }), null],
  },
  'washing-machine': {
    verb: 'the drum spins and the water sloshes',
    parts: [null, lap([12, 13], 360, { as: 'drum' }), ride([12, 13], [[0, 0], [0.8, 0], [-0.8, 0], [0.4, 0], [0, 0]], { as: 'water', ease: 'easeInOut', dur: 0.8 }), blink({ dur: 0.6 })],
  },
  'washington-monument': {
    verb: 'the obelisk rises from its base',
    parts: [
      scaleFrom('Y', [12, 19], [12, 10.5], [1, 0.9, 1.04, 1], { as: 'obelisk' }),
      null,
      null,
      scaleFrom('Y', [12, 19], [12, 6], [1, 0.9, 1.04, 1], { as: 'obelisk' }),
      scaleFrom('Y', [12, 19], [12, 16], [1, 0.9, 1.04, 1], { as: 'obelisk' }),
    ],
  },
  'waste-restore': {
    verb: 'the lid lifts and the restore arrow sweeps round',
    parts: [ride([12, 3.5], out(0, -1.2), { as: 'lid' }), null, retrace({ as: 'arrow', delay: 0.1 })],
  },
  waste: {
    verb: 'the lid lifts and the badge turns once',
    parts: [ride([12, 3.5], out(0, -1.2), { as: 'lid' }), null, lap([17, 19], 360, { as: 'badge', delay: 0.06 })],
  },

  // --- watch ----------------------------------------------------------------------------------------
  'watch-01': {
    verb: 'the straps stretch and the face answers',
    parts: [beat(C, { delay: 0.16 }), ride([12, 4], out(0, -0.8), { as: 'strap' }), ride([12, 20], out(0, 0.8), { as: 'strap' }), null],
  },
  'watch-02': {
    verb: 'the hand ticks forward a quarter',
    parts: [null, null, null, swing(C, [12.5, 11.5], [0, 30, 96, 88, 90], { as: 'hand', times: [0, 0.3, 0.6, 0.8, 1], ease: OUT })],
  },
  watch: {
    verb: 'the hand sweeps a full lap',
    parts: [null, null, null, swing(C, [12.5, 11.5], [0, 72, 252, 371, 360], { as: 'hand', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9 })],
  },
  'water-energy': {
    verb: 'the drop swells and the ring turns around it',
    parts: [swing(C, C, [0, 40, -8, 3, 0], { as: 'ring', delay: 0.1 }), pop([12, 11.5], 1.16, { as: 'drop' })],
  },
  'water-polo': {
    verb: 'the player bobs over the rippling water',
    parts: [ride([12, 20.7], [[0, 0], [0.8, 0], [-0.6, 0], [0.3, 0], [0, 0]], { as: 'water', dur: 0.8 }), ride([12, 8.6], [[0, 0], [0, -0.8], [0, 0.4], [0, -0.2], [0, 0]], { as: 'player', dur: 0.8 })],
  },
  'water-pump': {
    verb: 'the handle pumps and a drop falls from the spout',
    parts: [
      null,
      null,
      null,
      null,
      swing([8.5, 7], [8.5, 7], [0, -12, 6, -2, 0], { as: 'handle' }),
      { as: 'drop', origin: [20, 17.5], transform: ['translateY(0px)', 'translateY(2.4px)', 'translateY(-1px)', 'translateY(0px)'], opacity: [1, 0, 0, 1], times: [0, 0.4, 0.42, 1], ease: ['easeIn', 'linear', OUT], dur: 0.7, delay: 0.2 },
      null,
    ],
  },

  // --- waterfall ------------------------------------------------------------------------------------
  'waterfall-down-01': {
    verb: 'the bars grow down from their tops in a cascade',
    parts: [null, growFrom([20, 14], [20, 15.5], 0.24), growFrom([16, 8], [16, 11], 0.16), growFrom([12, 11], [12, 12.5], 0.08), growFrom([8, 5], [8, 8], 0)],
  },
  'waterfall-down-03': {
    verb: 'the bars drop in a cascade down to the line',
    parts: [null, drop([20, 17], 0.32, 0.8), drop([16, 12.5], 0.24), drop([12, 11.5], 0.16), drop([8, 6.5], 0.08), drop([4, 9.5], 0)],
  },
  'waterfall-down': {
    verb: 'the bars drop in a cascade',
    parts: [null, drop([20, 15.5], 0.24, 1), drop([16, 11], 0.16), drop([12, 12.5], 0.08), drop([8, 8], 0)],
  },
  'waterfall-up-01': {
    verb: 'the bars grow up from their bases in a cascade',
    parts: [growFrom([8, 17], [8, 15.5], 0), growFrom([12, 14], [12, 11.5], 0.08), growFrom([16, 9], [16, 7.5], 0.16), growFrom([20, 10], [20, 7], 0.24), null],
  },
  'waterfall-up-02': {
    verb: 'the bars hop up in a cascade above the line',
    parts: [null, hop([4, 16.5], 1, { delay: 0 }), hop([8, 11.5], 1, { delay: 0.08 }), hop([12, 10], 1, { delay: 0.16 }), hop([16, 8], 1, { delay: 0.24 }), hop([20, 4], 0.8, { delay: 0.32 })],
  },
  'waterfall-up': {
    verb: 'the bars rise in a cascade',
    parts: [drop([8, 15.5], 0, -1.2), drop([12, 11.5], 0.08, -1.2), drop([16, 7.5], 0.16, -1.2), drop([20, 7], 0.24, -1.2), null],
  },
  watermelon: {
    verb: 'the slice rocks on its rind',
    parts: [null, wiggle([12.5, 21], [12.5, 12.5], 8, { as: 'slice' })],
  },
  'wattpad-square': {
    verb: 'the W squashes inside its tile',
    parts: [boing([12.2, 11.9]), beat(C, { delay: 0.2 })],
  },
  wattpad: {
    verb: 'the W wobbles like a page turning',
    parts: [wiggle([12.3, 22], [12.3, 11.8], 6, { as: 'logo' })],
  },
  'wav-01': {
    verb: 'the WAV letters pop off the file',
    parts: [null, pop([12, 19], 1.14, { as: 'letters' })],
  },
  'wav-02': {
    verb: 'the letters slide right along the line',
    parts: [null, nudge([14, 16.5], 1.4, 0, { as: 'letters' })],
  },
  wav: {
    verb: 'the WAV letters write themselves under the file',
    parts: [beat([12, 7.5], { delay: 0.24 }), retrace({ as: 'letters' })],
  },
  'wave-square': {
    verb: 'the square wave retraces along its line',
    parts: [retrace({ as: 'wave' })],
  },
  'wave-triangle': {
    verb: 'the triangle wave wipes off and writes back on',
    parts: [draw({ as: 'wave' })],
  },
  wave: {
    verb: 'the sine wave swells and settles its amplitude',
    parts: [{ as: 'wave', origin: C, transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.2)', 'scaleY(1)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.66 }],
  },

  // --- waving hand ----------------------------------------------------------------------------------
  'waving-hand-01': {
    verb: 'the hand hops hello and the motion arc writes in',
    parts: [hop([10.5, 11.9], 1), retrace({ as: 'arc', delay: 0.12 })],
  },
  'waving-hand-02': {
    verb: 'the hand waves twice from the wrist',
    parts: [swing([9, 21], [11, 11.9], [0, 12, -6, 12, 0], { as: 'hand', times: [0, 0.22, 0.48, 0.72, 1], ease: 'easeInOut', dur: 0.9 }), blink({ as: 'arc', dur: 0.9 })],
  },
  'waving-hand': {
    verb: 'the hand waves from the wrist and the motion arc flickers',
    parts: [wiggle([9, 21], [10.5, 11.9], 14, { as: 'hand' }), blink({ as: 'arc' })],
  },
  waze: {
    verb: 'the car bounces on its wheels and winks',
    parts: [
      { as: 'eyes', origin: [13, 9], transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.3, 0.6], ease: 'easeInOut', dur: 0.6, delay: 0.2 },
      ride([13, 13.8], [[0, 0], [0, -0.8], [0, 0.3], [0, 0], [0, 0]], { as: 'body' }),
      lap([9, 19], 360, { as: 'wheel' }),
      lap([17, 19.3], 360, { as: 'wheel' }),
      ride([12, 11], [[0, 0], [0, -0.8], [0, 0.3], [0, 0], [0, 0]], { as: 'body' }),
    ],
  },

  // --- web ------------------------------------------------------------------------------------------
  'web-design-01': {
    verb: 'the window frame answers as the content blocks pop',
    parts: [beat(C), null, pop([15, 12], 1.2, { as: 'block', delay: 0.12 }), pop([14, 16], 1.3, { as: 'block', delay: 0.2 }), null],
  },
  'web-design-02': {
    verb: 'the code brackets push apart on the panel',
    parts: [null, beat([15, 17.5], { delay: 0.16 }), nudge([17.3, 17.5], 1, 0, { as: 'bracket' }), nudge([12.8, 17.5], -1, 0, { as: 'bracket' }), null],
  },
  'web-design': {
    verb: 'the sidebar slides and the content lines write in',
    parts: [null, null, line(0.1), line(0.18), nudge([9, 14.5], -1, 0, { as: 'edge' })],
  },
  'web-programming': {
    verb: 'the brackets open outward in the browser',
    parts: [null, null, nudge([8.3, 14.5], -1.2, 0, { as: 'bracket' }), nudge([15.8, 14.5], 1.2, 0, { as: 'bracket' })],
  },
  'web-protection': {
    verb: 'the shield stamps onto the browser window',
    parts: [null, null, stamp([17.5, 17.5], { as: 'shield' })],
  },
  'web-security': {
    verb: 'the padlock shackle clicks shut on the browser',
    parts: [null, null, ride([17.5, 14.5], [[0, 0], [0, -1], [0, 0.3], [0, 0], [0, 0]], { as: 'shackle' }), beat([17.5, 19], { delay: 0.2 })],
  },
  'web-validation': {
    verb: 'the badge pops and the tick writes in',
    parts: [pop([17.5, 17.5], 1.14, { as: 'badge' }), null, null, draw({ as: 'tick', delay: 0.16 })],
  },
  'webflow-ellipse': {
    verb: 'the W writes itself inside the ring',
    parts: [beat(C, { delay: 0.24 }), retrace({ as: 'logo' })],
  },
  'webflow-rectangle': {
    verb: 'the W hops inside the tile',
    parts: [null, hop([12.5, 12.5], 1)],
  },
  webflow: {
    verb: 'the wing squashes and its corner tab answers',
    parts: [boing([12.1, 12]), pop([4.3, 8.2], 1.2, { as: 'tab', delay: 0.16 })],
  },
  'webhook-off': {
    verb: 'the slash cuts the hook and the nodes fade',
    parts: [dimmed(), dimmed(), draw({ as: 'slash' }), dimmed(), dimmed(), dimmed()],
  },
  webhook: {
    verb: 'the three nodes fire in turn around the hook',
    parts: [null, null, pop([12, 7.5], 1.5, { as: 'node' }), pop([7, 16.5], 1.5, { as: 'node', delay: 0.12 }), pop([17, 16.5], 1.5, { as: 'node', delay: 0.24 }), null],
  },
  wechat: {
    verb: 'the front bubble hops and the eyes blink',
    parts: [blink({ as: 'eye', dur: 0.5, delay: 0.1 }), blink({ as: 'eye', dur: 0.5, delay: 0.1 }), blink({ as: 'eye', dur: 0.5, delay: 0.24 }), hop([16, 16], 0.9), beat([10, 10], { delay: 0.14 })],
  },
  wedding: {
    verb: 'the rings clink together and the heart pops',
    parts: [ride([8.5, 16.5], out(0.7, 0), { as: 'ring' }), ride([15.5, 16.5], out(-0.7, 0), { as: 'ring' }), pop([12, 5.5], 1.2, { as: 'heart', delay: 0.2 })],
  },

  // --- weight ---------------------------------------------------------------------------------------
  'weight-scale-01': {
    verb: 'the needle swings across the dial',
    parts: [null, null, swing([12, 17], [12.5, 16], [0, -50, 30, -10, 0], { as: 'needle', dur: 0.8 }), ride([12, 3.5], out(0, 0.8), { as: 'plate' }), ride([12, 6.5], out(0, 0.8), { as: 'plate' })],
  },
  'weight-scale': {
    verb: 'the plate presses down and the needle swings',
    parts: [null, ride([12, 6], out(0, 0.8), { as: 'plate' }), null, swing([11.5, 10], [12, 8.5], [0, 30, -18, 6, 0], { as: 'needle', delay: 0.1, dur: 0.8 })],
  },
  weight: {
    verb: 'the kettlebell drops and bounces',
    parts: [
      ride([12, 6], [[0, 0], [0, 1.2], [0, -0.5], [0, 0.2], [0, 0]], { as: 'weight', times: [0, 0.3, 0.56, 0.8, 1], ease: ['easeIn', OUT, OUT, OUT] }),
      ride([12, 15], [[0, 0], [0, 1.2], [0, -0.5], [0, 0.2], [0, 0]], { as: 'weight', times: [0, 0.3, 0.56, 0.8, 1], ease: ['easeIn', OUT, OUT, OUT] }),
    ],
  },
  wellness: {
    verb: 'the hands lift the leaf and it sways',
    parts: [ride([8.5, 16.4], out(0, -0.6), { as: 'hands' }), ride([12, 18.5], out(0, -0.6), { as: 'hands' }), wiggle([12, 12], [12, 7], 8, { as: 'leaf', delay: 0.1 })],
  },
  'whatsapp-business': {
    verb: 'the B pops and the bubble rattles',
    parts: [shake(C, { as: 'bubble', delay: 0.1 }), pop(C, 1.18, { as: 'letter' })],
  },
  whatsapp: {
    verb: 'the handset rings inside the bubble',
    parts: [beat(C, { delay: 0.2 }), shake(C, { as: 'handset' })],
  },
  'wheat-off': {
    verb: 'the slash writes across and the wheat dims',
    parts: [dimmed(), draw({ as: 'slash' })],
  },
  wheat: {
    verb: 'the wheat stalk sways in the wind',
    parts: [wiggle([3, 21], [12, 12], 5, { as: 'stalk' })],
  },
  wheelchair: {
    verb: 'the wheelchair rolls forward on its turning wheels',
    parts: [
      lap([7.5, 16.5], 360, { as: 'wheel', times: [0, 0.18, 0.46, 0.74, 1], dur: 0.7 }),
      lap([20, 20], 360, { as: 'wheel', times: [0, 0.18, 0.46, 0.74, 1], dur: 0.7 }),
      ride([16.5, 16], out(1, 0), { as: 'chair' }),
      ride([3.5, 6.5], out(1, 0), { as: 'chair' }),
      ride([11.5, 7], out(1, 0), { as: 'chair' }),
      ride([16, 10.5], out(1, 0), { as: 'chair' }),
    ],
  },
  whisk: {
    verb: 'the whisk beats back and forth',
    parts: [
      swing([10, 14], [16.5, 7.5], [0, 10, -10, 8, -6, 0], { as: 'head', times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'easeInOut', dur: 0.8 }),
      swing([10, 14], [16.5, 7.5], [0, 10, -10, 8, -6, 0], { as: 'head', times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'easeInOut', dur: 0.8 }),
      null,
      null,
    ],
  },
  whistle: {
    verb: 'the whistle blows: it rattles, the ball spins and the sound lines flash',
    parts: [shake([11.9, 15.1]), blink({ as: 'sound', dur: 0.6 }), lap([8.1, 15], 360, { as: 'ball' })],
  },
  whiteboard: {
    verb: 'the marker scribbles and the line writes across the board',
    parts: [null, retrace({ as: 'scribble' }), ride([17.6, 8.4], [[0, 0], [-0.8, 0.6], [0.4, -0.2], [-0.4, 0.4], [0, 0]], { as: 'marker', times: [0, 0.22, 0.46, 0.72, 1], ease: 'easeInOut', dur: 0.7 })],
  },
  'wifi-02': {
    verb: 'the wifi wedge pulses with signal',
    parts: [wave(C)],
  },
}

export default settleSpecs(specs)
