/**
 * Page 60 — shield-minus → shower-head.
 *
 * Gallery page (80 public icons). The handcrafted shopping-cart-01 original
 * is skipped; the hidden handcrafted shopping-cart-add-01 sits in this span
 * and is skipped too.
 *
 * Shopping baskets and carts follow one rule per variant, the badge keeping
 * its own beat (add spins, check / done draw, check-in rises, check-out drops,
 * favorite beats, remove twists, secure rattles):
 * - bare: the badge acts.
 * - -01 (same geometry as bare): the basket swings on its handle, or the
 *   cart rolls forward, then the badge pops.
 * - -02: the fill bar rewrites (baskets) or the cart tips back on its
 *   wheels, then the badge acts.
 * - -03: the basket slats blink in turn, then the badge acts.
 *
 * Identical-geometry pairs get different jobs under that rule, plus
 * shipping-truck / -01, shirt / -01, shopping-bag / -01, and
 * shopping-cart / shopping-cart-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  HOLD_E,
  HOLD_T,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flex,
  flip,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  settleSpecs,
  shake,
  spinStar,
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

/** Badge beats, by badge kind. c is the badge centre. */
const badge = {
  add: (c, o = {}) => spinStar(c, { as: 'plus', ...o }),
  check: (c, o = {}) => draw({ as: 'check', ...o }),
  in: (c, o = {}) => nudge(c, 0, -1.2, { as: 'arrow', ...o }),
  out: (c, o = {}) => nudge(c, 0, 1.2, { as: 'arrow', ...o }),
  fav: (c, o = {}) => ({ as: 'heart', origin: c, transform: ['scale(1)', 'scale(1.26)', 'scale(1)', 'scale(1.16)', 'scale(1)'], times: [0, 0.18, 0.4, 0.58, 1], ease: 'easeInOut', dur: 0.8, ...o }),
  remove: (c, o = {}) => lap(c, 90, { as: 'x', dur: 0.6, ...o }),
  secure: (c, o = {}) => shake(c, { as: 'shield', ...o }),
}
const D = 0.28 // badge delay after a body beat

// Basket bodies (centres from the dump).
const BODY = [11, 14.5]
const swingBasket = (c, o = {}) => wiggle([11, 2], c, 6, { as: 'basket', ...o })
const slats = (d0 = 0) => [blink({ as: 'slat', opacity: [1, 0.15, 1, 1, 1], delay: d0 }), blink({ as: 'slat', opacity: [1, 0.15, 1, 1, 1], delay: d0 + 0.08 })]
/** Cart -01 roll for [wheel, wheel, cart] plus badge. */
const roll = (o = {}) => ride(C, out(1, 0), { as: 'cart', ...o })
/** Cart -02 tip-back wrap. */
const tip = tilt([11.5, 20], -5)

// ---------------------------------------------------------------------------

const specs = {
  // --- shields ---------------------------------------------------------------------------------
  'shield-minus': {
    verb: 'the minus wipes off the shield and redraws',
    parts: [draw({ as: 'minus' }), null],
  },
  'shield-plus': {
    verb: 'the plus spins onto the shield',
    parts: [spinStar([12, 11], { as: 'plus' }), null],
  },
  'shield-question-mark': {
    verb: 'the question mark wobbles on the shield and its dot blinks',
    parts: [wiggle([12, 13], [12, 9.8], -12, { as: 'mark' }), blink({ as: 'dot', opacity: [1, 0.1, 1, 1, 1], delay: 0.16 }), null],
  },
  'shield-user': {
    verb: 'the user hops on the shield',
    parts: [beat(C, { delay: 0.3 }), hop([12, 10.7], 1.2, { as: 'user' })],
  },
  shield: {
    verb: 'the shield takes a hit and braces',
    parts: [{ as: 'shield', origin: C, transform: ['scale(1)', 'scale(0.88)', 'scale(1.05)', 'scale(1)'], times: [0, 0.24, 0.6, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }],
  },

  // --- shipping ---------------------------------------------------------------------------------
  'shipment-tracking': {
    verb: 'the route rewrites from the parcel and the pin hops',
    parts: [beat([7, 17], { delay: 0.3 }), null, hop([18, 7.1], 1.4, { as: 'pin', delay: 0.2 }), line(0, { as: 'route', dur: 0.6 }), hop([18, 6], 1.4, { as: 'pin', delay: 0.2 })],
  },
  'shipping-center': {
    verb: 'the parcels stack up one after another in the depot',
    parts: [hop([10, 19.5], 1, { as: 'parcel' }), hop([14, 19.5], 1, { as: 'parcel', delay: 0.1 }), hop([12, 15.5], 1, { as: 'parcel', delay: 0.2 }), null],
  },
  'shipping-loading': {
    verb: 'the parcel hops on the conveyor as the rollers spin',
    parts: [hop([11, 11], 1.2, { as: 'parcel' }), hop([11, 4], 1.2, { as: 'parcel' }), hop([11, 9], 1.2, { as: 'parcel' }), null, blink({ as: 'roller', opacity: [1, 0.1, 1, 0.1, 1] }), blink({ as: 'roller', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.1 }), blink({ as: 'roller', opacity: [1, 0.1, 1, 0.1, 1], delay: 0.05 })],
  },
  'shipping-truck-01': {
    verb: 'the truck body bounces on its wheels',
    parts: [null, null, ride([12, 10.8], [[0, 0], [0, -0.9], [0, 0.35], [0, -0.2], [0, 0]], { as: 'body', times: [0, 0.24, 0.5, 0.74, 1], dur: 0.66 })],
  },
  'shipping-truck-02': {
    verb: 'the truck rocks back on its rear wheels and settles',
    wrap: tilt([7, 20], -5),
    parts: [null, null, null],
  },
  'shipping-truck': {
    verb: 'the truck rolls forward trailing speed lines',
    wrap: ride(C, out(1.4, 0), { as: 'truck', dur: 0.66 }),
    parts: [null, null, null],
    extras: [trail('M1.5 8H0M1.5 11.5H0.5', -1.4)],
  },
  'shirt-01': {
    verb: 'the shirt sways on its hanger',
    wrap: tilt([12, 3], 6, { dur: 0.8 }),
    parts: [null, null],
  },
  shirt: {
    verb: 'the collar and sleeves lift with a shrug',
    parts: [null, hop([12, 7.5], 0.9, { as: 'collar' })],
  },
  shocked: {
    verb: 'the eyes widen and the mouth drops open',
    parts: [null, flex('Y', [12, 16], [12, 16.5], [1, 2, 1.8, 1, 1], { as: 'mouth' }), pop([8.5, 9.5], 1.3, { as: 'eye' }), pop([15.5, 9.5], 1.3, { as: 'eye' })],
  },
  'shop-sign': {
    verb: 'the shop sign swings from its bracket',
    parts: [wiggle([12, 2.5], [12.1, 12], 6, { as: 'sign', dur: 0.8 }), wiggle([12, 2.5], [7, 16], 6, { as: 'sign', dur: 0.8 })],
  },
  shopify: {
    verb: 'the S flips on the bag and the handle hops',
    parts: [beat([9.5, 13.5], { delay: 0.3 }), beat([18.5, 13.5], { delay: 0.3 }), hop([10, 3.7], 1, { as: 'handle' }), hop([12.2, 3.9], 1, { as: 'handle' }), flip([9.8, 13.5], 1, { as: 's' })],
  },

  // --- shopping bags ---------------------------------------------------------------------------------
  'shopping-bag': {
    verb: 'the bag hops as if picked up',
    parts: [hop(C, 1.2, { as: 'bag' }), hop([12, 8.5], 1.2, { as: 'bag' })],
  },
  'shopping-bag-01': {
    verb: 'the bag sways from its handle and the handle rewrites',
    parts: [wiggle([12, 3], C, 6, { as: 'bag' }), line(0.1, { as: 'handle' })],
  },
  'shopping-bag-02': {
    verb: 'the handle lifts and the price line draws',
    parts: [null, beat([12, 14.8], { delay: 0.2 }), hop([12, 5.3], 1, { as: 'handle' }), draw({ as: 'tag', delay: 0.12 })],
  },
  'shopping-bag-03': {
    verb: 'the back bag slides out from behind the front one',
    parts: [hop([10, 7.5], 0.8, { as: 'handle' }), null, ride([17.1, 12], out(1, 0), { as: 'back' })],
  },
  'shopping-bag-add': {
    verb: 'the plus spins in at the bag corner',
    parts: [null, null, badge.add([18.5, 18.5])],
  },
  'shopping-bag-check': {
    verb: 'the check draws itself at the bag corner',
    parts: [beat([11.2, 11.5], { delay: 0.3 }), null, badge.check()],
  },
  'shopping-bag-favorite': {
    verb: 'the heart beats at the bag corner',
    parts: [null, null, badge.fav([18, 18.5])],
  },
  'shopping-bag-remove': {
    verb: 'the X twists at the bag corner',
    parts: [null, badge.remove([18.5, 19]), null],
  },

  // --- shopping baskets ---------------------------------------------------------------------------------
  'shopping-basket': {
    verb: 'the basket handle swings over the basket',
    parts: [null, wiggle([12, 9], [12, 5.8], 14, { as: 'handle' })],
  },
  'shopping-basket-01': {
    verb: 'the basket hops as if picked up by its handle',
    parts: [hop([12, 14.5], 1.2, { as: 'basket' }), hop([12, 5.8], 1.2, { as: 'basket' })],
  },
  'shopping-basket-02': {
    verb: 'the fill bar rewrites and the handle hops',
    parts: [null, hop([12, 4.8], 1, { as: 'handle', delay: 0.2 }), line(0, { as: 'bar', dur: 0.56 })],
  },
  'shopping-basket-03': {
    verb: 'the slats blink in turn and the handles flex',
    parts: [null, ...slats(0), blink({ as: 'slat', opacity: [1, 0.15, 1, 1, 1], delay: 0.16 }), null, wiggle([18, 8.5], [16.5, 6], 10, { as: 'handle', delay: 0.2 }), wiggle([6, 8.5], [7.5, 6], -10, { as: 'handle', delay: 0.2 })],
  },
  'shopping-basket-add': {
    verb: 'the plus spins in at the basket corner',
    parts: [null, null, badge.add([18.3, 19])],
  },
  'shopping-basket-add-01': {
    verb: 'the basket swings on its handle, then the plus pops',
    parts: [swingBasket([11.3, 14.5]), null, pop([18.3, 19], 1.3, { as: 'plus', delay: D })],
  },
  'shopping-basket-add-02': {
    verb: 'the fill bar rewrites, then the plus spins in',
    parts: [badge.add([17, 18], { delay: D }), null, null, line(0, { as: 'bar' })],
  },
  'shopping-basket-add-03': {
    verb: 'the slats blink in turn, then the plus spins in',
    parts: [...slats(0), null, null, null, badge.add([19, 18], { delay: D }), null],
  },
  'shopping-basket-check-in': {
    verb: 'the arrow rises out of the basket corner',
    parts: [null, null, badge.in([18, 18.5])],
  },
  'shopping-basket-check-in-01': {
    verb: 'the basket swings on its handle, then the arrow pops',
    parts: [swingBasket(BODY), null, pop([18, 18.5], 1.3, { as: 'arrow', delay: D })],
  },
  'shopping-basket-check-in-02': {
    verb: 'the fill bar rewrites, then the arrow rises',
    parts: [null, badge.in([18.5, 18], { delay: D }), null, line(0, { as: 'bar' })],
  },
  'shopping-basket-check-in-03': {
    verb: 'the slats blink in turn, then the arrow rises',
    parts: [null, ...slats(0), null, null, null, badge.in([19, 17.5], { delay: D })],
  },
  'shopping-basket-check-out': {
    verb: 'the arrow drops at the basket corner',
    parts: [null, null, badge.out([18, 18.5])],
  },
  'shopping-basket-check-out-01': {
    verb: 'the basket swings on its handle, then the arrow pops',
    parts: [swingBasket(BODY), null, pop([18, 18.5], 1.3, { as: 'arrow', delay: D })],
  },
  'shopping-basket-check-out-02': {
    verb: 'the fill bar rewrites, then the arrow drops',
    parts: [null, badge.out([18.5, 18], { delay: D }), null, line(0, { as: 'bar' })],
  },
  'shopping-basket-check-out-03': {
    verb: 'the slats blink in turn, then the arrow drops',
    parts: [null, ...slats(0), null, null, null, badge.out([19, 17.5], { delay: D })],
  },
  'shopping-basket-done': {
    verb: 'the check draws at the basket corner',
    parts: [null, null, badge.check()],
  },
  'shopping-basket-done-01': {
    verb: 'the basket swings on its handle, then the check pops',
    parts: [swingBasket(BODY), null, pop([17.5, 19], 1.3, { as: 'check', delay: D })],
  },
  'shopping-basket-done-02': {
    verb: 'the fill bar rewrites, then the check draws',
    parts: [null, badge.check(null, { delay: D }), null, line(0, { as: 'bar' })],
  },
  'shopping-basket-done-03': {
    verb: 'the slats blink in turn, then the check draws',
    parts: [...slats(0), null, null, null, badge.check(null, { delay: D }), null],
  },
  'shopping-basket-favorite': {
    verb: 'the heart beats at the basket corner',
    parts: [null, null, badge.fav([17.5, 19])],
  },
  'shopping-basket-favorite-01': {
    verb: 'the basket swings on its handle, then the heart pops',
    parts: [swingBasket(BODY), null, pop([17.5, 19], 1.3, { as: 'heart', delay: D })],
  },
  'shopping-basket-favorite-02': {
    verb: 'the fill bar rewrites, then the heart beats',
    parts: [null, badge.fav([16.5, 17.9], { delay: D }), null, line(0, { as: 'bar' })],
  },
  'shopping-basket-favorite-03': {
    verb: 'the slats blink in turn, then the heart beats',
    parts: [...slats(0), null, null, null, badge.fav([18.5, 18], { delay: D }), null],
  },
  'shopping-basket-remove': {
    verb: 'the X twists at the basket corner',
    parts: [null, null, badge.remove([18.5, 19.5])],
  },
  'shopping-basket-remove-01': {
    verb: 'the basket swings on its handle, then the X pops',
    parts: [swingBasket(BODY), null, pop([18.5, 19.5], 1.3, { as: 'x', delay: D })],
  },
  'shopping-basket-remove-02': {
    verb: 'the fill bar rewrites, then the X twists',
    parts: [badge.remove([17.5, 18.5], { delay: D }), null, null, line(0, { as: 'bar' })],
  },
  'shopping-basket-remove-03': {
    verb: 'the slats blink in turn, then the X twists',
    parts: [null, ...slats(0), null, null, null, badge.remove([19.5, 18.5], { delay: D })],
  },
  'shopping-basket-secure': {
    verb: 'the shield badge rattles at the basket corner',
    parts: [null, null, badge.secure([18, 18.5])],
  },
  'shopping-basket-secure-01': {
    verb: 'the basket swings on its handle, then the shield pops',
    parts: [swingBasket(BODY), null, pop([18, 18.5], 1.2, { as: 'shield', delay: D })],
  },
  'shopping-basket-secure-02': {
    verb: 'the fill bar rewrites, then the shield rattles',
    parts: [null, null, line(0, { as: 'bar' }), badge.secure([17.5, 18], { delay: D })],
  },
  'shopping-basket-secure-03': {
    verb: 'the slats blink in turn, then the shield rattles',
    parts: [...slats(0), null, null, null, null, badge.secure([19, 17.5], { delay: D })],
  },

  // --- shopping carts ---------------------------------------------------------------------------------
  'shopping-cart': {
    verb: 'the items hop inside the cart',
    parts: [null, null, null, hop([13.5, 11.5], 1.4, { as: 'items' })],
  },
  'shopping-cart-02': {
    verb: 'the cart rolls forward and back on its wheels',
    wrap: ride(C, [[0, 0], [1.2, 0], [-0.5, 0], [0, 0], [0, 0]], { as: 'cart', ease: INOUT, dur: 0.8 }),
    parts: [null, null, null, null, null, null],
  },
  'shopping-cart-add': {
    verb: 'the plus spins in above the cart',
    parts: [null, null, null, badge.add([19, 6])],
  },
  'shopping-cart-add-02': {
    verb: 'the cart tips back on its wheels, then the plus spins in',
    wrap: tip,
    parts: [null, null, badge.add([13, 6], { delay: D }), null, null, null, null],
  },
  'shopping-cart-check': {
    verb: 'the check draws above the cart',
    parts: [null, null, null, badge.check()],
  },
  'shopping-cart-check-01': {
    verb: 'the cart rolls forward, then the check pops',
    parts: [roll(), roll(), roll(), pop([18.5, 6], 1.3, { as: 'check', delay: D })],
  },
  'shopping-cart-check-02': {
    verb: 'the cart tips back on its wheels, then the check draws',
    wrap: tip,
    parts: [null, null, badge.check(null, { delay: D }), null, null, null, null],
  },
  'shopping-cart-check-in': {
    verb: 'the arrow drops into the cart',
    parts: [null, null, null, nudge([19.5, 6], 0, 1.2, { as: 'arrow' })],
  },
  'shopping-cart-check-in-01': {
    verb: 'the cart rolls forward, then the arrow pops',
    parts: [roll(), roll(), roll(), pop([19.5, 6], 1.3, { as: 'arrow', delay: D })],
  },
  'shopping-cart-check-in-02': {
    verb: 'the cart tips back on its wheels, then the arrow drops in',
    wrap: tip,
    parts: [null, null, nudge([13.5, 7], 0, 1.2, { as: 'arrow', delay: D }), null, null, null, null],
  },
  'shopping-cart-check-out': {
    verb: 'the arrow lifts out of the cart',
    parts: [null, null, null, nudge([19.5, 6], 0, -1.2, { as: 'arrow' })],
  },
  'shopping-cart-check-out-01': {
    verb: 'the cart rolls forward, then the arrow pops',
    parts: [roll(), roll(), roll(), pop([19.5, 6], 1.3, { as: 'arrow', delay: D })],
  },
  'shopping-cart-check-out-02': {
    verb: 'the cart tips back on its wheels, then the arrow lifts out',
    wrap: tip,
    parts: [null, null, nudge([13.5, 7], 0, -1.2, { as: 'arrow', delay: D }), null, null, null, null],
  },
  'shopping-cart-favorite': {
    verb: 'the heart beats above the cart',
    parts: [null, null, null, badge.fav([18.5, 6])],
  },
  'shopping-cart-favorite-01': {
    verb: 'the cart rolls forward, then the heart pops',
    parts: [roll(), roll(), roll(), pop([18.5, 6], 1.3, { as: 'heart', delay: D })],
  },
  'shopping-cart-favorite-02': {
    verb: 'the cart tips back on its wheels, then the heart beats',
    wrap: tip,
    parts: [null, null, badge.fav([13.5, 5.4], { delay: D }), null, null, null, null],
  },
  'shopping-cart-remove': {
    verb: 'the X twists above the cart',
    parts: [null, null, null, badge.remove([19.5, 5.5])],
  },
  'shopping-cart-remove-01': {
    verb: 'the cart rolls forward, then the X pops',
    parts: [roll(), roll(), roll(), pop([19.5, 5.5], 1.3, { as: 'x', delay: D })],
  },
  'shopping-cart-remove-02': {
    verb: 'the cart tips back on its wheels, then the X twists',
    wrap: tip,
    parts: [null, null, badge.remove([13.5, 6], { delay: D }), null, null, null, null],
  },

  // --- clothes, body, tools ---------------------------------------------------------------------------------
  'shorts-pants': {
    verb: 'the waistband stretches and the drawstring swings',
    parts: [null, wiggle([12, 13.5], [12, 14.3], 12, { as: 'string', delay: 0.1 }), flex('X', C, [12, 5], [1, 1.12, 0.96, 1, 1], { as: 'band' }), null, null],
  },
  shoulder: {
    verb: 'the joint flares and the arm swings at the shoulder',
    parts: [blink({ as: 'ache', opacity: [1, 0.15, 1, 0.15, 1] }), null, null, wiggle([12, 15], [15.5, 16.5], 10, { as: 'arm' }), pop([18, 15], 2.4, { as: 'joint' }), wiggle([12, 15], [13, 19.3], 10, { as: 'arm' })],
  },
  shovel: {
    verb: 'the shovel digs in from its handle and lifts',
    parts: [swing([19, 5], [19, 5], [0, -10, 4, -1, 0], { as: 'shovel' }), swing([19, 5], [12.5, 11.5], [0, -10, 4, -1, 0], { as: 'shovel' }), swing([19, 5], [7.8, 16.2], [0, -10, 4, -1, 0], { as: 'shovel' })],
  },
  'shower-head': {
    verb: 'the shower head tilts and water drops stream out',
    parts: [wiggle([20, 4], [12, 11.7], -5, { as: 'head' })],
    extras: [0, 0.12, 0.24].map((d, i) => ({
      as: 'drop',
      tag: 'path',
      attrs: { d: ['M5.5 19L4.5 20.5', 'M8.5 20.5L7.5 22', 'M3 16.5L2 18'][i], strokeWidth: '1.2' },
      transform: ['translate(0px, 0px)', 'translate(0px, 0px)', 'translate(-0.8px, 1.6px)', 'translate(-1.2px, 2.4px)'],
      opacity: [0, 0, 1, 0],
      times: [0, 0.15, 0.5, 0.9],
      ease: ['linear', OUT, 'linear'],
      dur: 0.8,
      delay: d,
    })),
  },
}

export default settleSpecs(specs)
