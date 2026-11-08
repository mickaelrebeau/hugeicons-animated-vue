/**
 * Page 41 — loading-02 → look-bottom.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * location-add-01, login-01, logout-01. Hidden handcrafted loading-03,
 * location-01 and lock sit in this span and are skipped too.
 *
 * Location pins keep the pin and let the inner glyph act; bare pins drop
 * onto the map. Login icons push the arrow into the door, logout icons pull
 * it out. Locks rattle, sync and shut.
 *
 * Identical-geometry pairs get different jobs: location-check / -01,
 * location-favourite / -01, location-offline / -01, location-remove / -01,
 * location-share / -01, location-star / -01, location-update / -01,
 * location-user / -01, lock-sync / -01, login-circle / -01, login-square /
 * -01, logout-circle / -01, logout-square / -01.
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
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  settleSpecs,
  shake,
  sweep,
  swell,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** A pin drops onto the map from above. */
const drop = (c = C, o = {}) => ride(c, [[0, 0], [0, -2], [0, 0.4], [0, 0], [0, 0]], { as: 'pin', times: [0, 0.32, 0.56, 0.8, 1], ease: ['easeOut', 'easeIn', 'easeOut', 'easeInOut'], ...o })
/** The ground ring under a pin spreads when the pin lands. */
const ring = (c, o = {}) => flex('X', c, c, [1, 1, 1.2, 0.96, 1], { as: 'ring', times: [0, 0.5, 0.66, 0.84, 1], ...o })
/** An arrow pushed in or pulled out through a door. */
const push = (c, dx, o = {}) => nudge(c, dx, 0, { as: 'arrow', ...o })
const door = (c, o = {}) => beat(c, { as: 'door', delay: 0.22, ...o })

// ---------------------------------------------------------------------------

const specs = {
  'loading-02': {
    verb: 'the open ring spins a full turn',
    parts: [lap(C, 360, { as: 'ring', dur: 0.9 })],
  },
  'loading-04': {
    verb: 'the progress marker runs along the bar',
    parts: [null, ride([14, 12], [[0, 0], [-8, 0], [6, 0], [0, 0], [0, 0]], { as: 'marker', ease: 'easeInOut', dur: 1 })],
  },
  loading: {
    verb: 'the hourglass turns over and the sand pile settles',
    parts: [lap(C, 180, { as: 'glass', dur: 0.9 }), lap(C, 180, { as: 'glass', dur: 0.9 })],
  },

  // --- pins ---------------------------------------------------------------------------------
  'location-02': {
    verb: 'the empty pin drops onto the map',
    parts: [drop()],
  },
  'location-03': {
    verb: 'the pin drops and the ground ring spreads',
    parts: [drop([12, 9]), ring([12, 19.5]), drop([12, 10])],
  },
  'location-04': {
    verb: 'the dot pops inside the pin and the shadow widens',
    parts: [ring([12, 20]), pop([12, 9], 1.4, { as: 'dot' }), null],
  },
  'location-05': {
    verb: 'the pin bobs above its shadow',
    parts: [hop([12, 9], 1.2, { as: 'pin' }), hop([12, 10], 1.2, { as: 'pin' }), flex('X', [12, 21], [12, 21], [1, 0.7, 1.06, 1, 1], { as: 'shadow', times: [0, 0.32, 0.62, 0.86, 1], dur: 0.56 })],
  },
  'location-06': {
    verb: 'the pin tilts on its point',
    parts: [around([12, 22], [12, 11], [0, -10, 6, -2, 0], { as: 'pin' }), around([12, 22], C, [0, -10, 6, -2, 0], { as: 'pin' })],
  },
  'location-07': {
    verb: 'the pin squashes on landing',
    parts: [{ as: 'pin', origin: [12, 22], transform: ['translate(0px, 0px) scale(1, 1)', 'translate(0px, -1.6px) scale(0.96, 1.04)', 'translate(0px, 0.5px) scale(1.08, 0.92)', 'translate(0px, 0px) scale(1, 1)', 'translate(0px, 0px) scale(1, 1)'], times: [0, 0.3, 0.52, 0.76, 1], ease: 'easeInOut', dur: 0.66 }],
  },
  'location-08': {
    verb: 'the pin drops, the ring spreads under it',
    parts: [ring([12, 20]), drop([12, 9.5]), drop([12, 10.5])],
  },
  'location-09': {
    verb: 'the inner dot pulses like a beacon',
    parts: [wave([12, 20]), pop([12, 9.5], 1.4, { as: 'dot' }), null],
  },
  'location-10': {
    verb: 'the pin spins on its point',
    parts: [{ as: 'dot', origin: [12, 9.5], transform: ['scaleX(1)', 'scaleX(0.1)', 'scaleX(1)'], times: [0, 0.5, 1], ease: 'easeInOut', dur: 0.7 }, { as: 'pin', origin: [12, 10.5], transform: ['scaleX(1)', 'scaleX(0.1)', 'scaleX(1)'], times: [0, 0.5, 1], ease: 'easeInOut', dur: 0.7 }, null],
  },
  'location-add-02': {
    verb: 'the plus spins inside the pin',
    parts: [null, lap([12, 11], 90, { as: 'plus', dur: 0.6 })],
  },
  'location-add': {
    verb: 'the pin drops and the plus pops in it',
    parts: [drop(), pop([12, 11], 1.3, { as: 'plus', delay: 0.3 })],
  },
  'location-check-01': {
    verb: 'the check ticks inside the pin',
    parts: [null, draw({ as: 'check' })],
  },
  'location-check-02': {
    verb: 'the check ticks and the pin hops',
    parts: [hop(C, 0.8, { as: 'pin', delay: 0.24 }), draw({ as: 'check' })],
  },
  'location-check': {
    verb: 'the check pops inside the pin',
    parts: [null, pop([12.5, 11], 1.3, { as: 'check' })],
  },
  'location-favourite-01': {
    verb: 'the heart beats inside the pin',
    parts: [null, { as: 'heart', origin: [12, 10.4], transform: ['scale(1)', 'scale(1.2)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut', dur: 0.72 }],
  },
  'location-favourite-02': {
    verb: 'the heart rises in the pin',
    parts: [null, ride([12, 10.4], out(0, -1.2), { as: 'heart' })],
  },
  'location-favourite': {
    verb: 'the pin drops and the heart answers',
    parts: [drop(), pop([12, 10.4], 1.2, { as: 'heart', delay: 0.3 })],
  },
  'location-offline-01': {
    verb: 'the slash cuts across and the pin fades',
    parts: [dim({ as: 'pin', delay: 0.1 }), dim({ as: 'pin', delay: 0.1 }), dim({ as: 'dot', delay: 0.1 }), dim({ as: 'dot', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'location-offline-02': {
    verb: 'the slash cuts across and the pin shivers',
    parts: [shake(C, { as: 'pin', delay: 0.16 }), shake(C, { as: 'pin', delay: 0.16 }), draw({ as: 'slash' })],
  },
  'location-offline-03': {
    verb: 'the slash draws and the dot falls out of the pin',
    parts: [ride([11.3, 11.8], out(0, 1.4), { as: 'dot', delay: 0.1 }), ride([13.5, 9.5], out(0, 1.4), { as: 'dot', delay: 0.1 }), null, null, draw({ as: 'slash' })],
  },
  'location-offline-04': {
    verb: 'the two halves of the pin split along the slash',
    parts: [ride([10.5, 13.8], out(-0.8, 0.8), { as: 'half', delay: 0.1 }), ride([14.3, 8.8], out(0.8, -0.8), { as: 'half', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'location-offline': {
    verb: 'the pin rattles as the slash cuts',
    parts: [null, null, shake([12, 11], { as: 'dot', delay: 0.1 }), shake([12, 11], { as: 'dot', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'location-remove-01': {
    verb: 'the minus shrinks inside the pin',
    parts: [null, flex('X', [12, 11], [12, 11], [1, 0.3, 1.1, 1, 1], { as: 'minus' })],
  },
  'location-remove-02': {
    verb: 'the minus slides out and the pin dips',
    parts: [ride(C, out(0, 0.6), { as: 'pin', delay: 0.2 }), ride([12, 11], out(1.4, 0), { as: 'minus' })],
  },
  'location-remove': {
    verb: 'the pin lifts off and the minus fades',
    parts: [ride(C, out(0, -1.4), { as: 'pin' }), dim({ as: 'minus' })],
  },
  'location-share-01': {
    verb: 'the signal arcs broadcast from the pin',
    parts: [wave(C, { delay: 0.1 }), null, pop([12, 11], 1.25, { as: 'dot' })],
  },
  'location-share-02': {
    verb: 'the pin hops while the arcs broadcast',
    parts: [wave(C), hop([12, 11], 0.8, { as: 'pin', delay: 0.1 }), hop(C, 0.8, { as: 'pin', delay: 0.1 })],
  },
  'location-share': {
    verb: 'the arcs spread outward as the pin pulses',
    parts: [flex('X', C, C, [1, 1.2, 0.96, 1, 1], { as: 'arcs' }), swell([12, 20.5], C, [1, 1.06, 0.98, 1, 1], { as: 'pin', delay: 0.1 }), null],
  },
  'location-star-01': {
    verb: 'the star spins inside the pin',
    parts: [null, lap([12, 11], 72, { as: 'star', dur: 0.7 })],
  },
  'location-star-02': {
    verb: 'the star twinkles in the pin',
    parts: [null, pop([12, 11], 1.25, { as: 'star' })],
  },
  'location-star': {
    verb: 'the pin drops and the star pops',
    parts: [drop(), pop([12, 11], 1.25, { as: 'star', delay: 0.3 })],
  },
  'location-update-01': {
    verb: 'the refresh ring turns around the pin',
    parts: [null, lap(C, 360, { as: 'refresh', dur: 0.9 }), null],
  },
  'location-update-02': {
    verb: 'the refresh ring turns and the pin hops',
    parts: [lap(C, -360, { as: 'refresh', dur: 0.9 }), hop([12, 11], 1, { as: 'pin', delay: 0.2 }), hop([12, 11.9], 1, { as: 'pin', delay: 0.2 })],
  },
  'location-update': {
    verb: 'the pin pulses inside the refresh ring',
    parts: [pop(C, 1.12, { as: 'pin' }), around(C, C, [0, 40, -6, 2, 0], { as: 'refresh' }), pop([12, 11.5], 2, { as: 'dot', delay: 0.1 })],
  },
  'location-user-01': {
    verb: 'the person bobs: head then body',
    parts: [ride([12, 15], out(0, -0.6), { as: 'body', delay: 0.08 }), hop([12, 5], 1.2, { as: 'head' })],
  },
  'location-user-02': {
    verb: 'the person stands on the spot and the ring spreads',
    parts: [hop([12, 13], 0.8, { as: 'body' }), hop([12, 4.5], 0.8, { as: 'head' }), flex('X', [12, 20.5], [12, 20.5], [1, 1.2, 0.95, 1, 1], { as: 'ring', delay: 0.2 })],
  },
  'location-user-03': {
    verb: 'the person drops onto the spot',
    parts: [ring([12, 19]), drop([12, 13]), drop([12, 4.5])],
  },
  'location-user-04': {
    verb: 'the person nods on the spot',
    parts: [null, around([12, 19], [12, 13], [0, -5, 3, -1, 0], { as: 'body' }), around([12, 8], [12, 4.5], [0, 12, -6, 2, 0], { as: 'head' })],
  },
  'location-user': {
    verb: 'the person waves from the spot',
    parts: [around([12, 22], [12, 15], [0, -6, 4, -1, 0], { as: 'body' }), around([12, 22], [12, 5], [0, -6, 4, -1, 0], { as: 'body' })],
  },
  location: {
    verb: 'the pin drops and the dot pops',
    parts: [drop(), pop([12, 11], 1.3, { as: 'dot', delay: 0.3 })],
  },

  // --- locks --------------------------------------------------------------------------------
  'lock-computer': {
    verb: 'the padlock on the screen corner rattles',
    parts: [null, null, null, null, shake([18.5, 6.3], { as: 'lock' })],
  },
  'lock-key': {
    verb: 'the key turns in the lock',
    parts: [null, around([16, 16], [13.3, 19.7], [0, -40, -30, -34, 0], { as: 'key' }), around([16, 16], [18.6, 15.7], [0, -40, -30, -34, 0], { as: 'key' })],
  },
  'lock-password': {
    verb: 'the dots fill in one by one and the shackle clicks',
    parts: [null, ride([12, 5.5], out(0, -1), { as: 'shackle', delay: 0.4 }), pop([12, 15.5], 2, { as: 'dot', delay: 0.12 }), pop([8, 15.5], 2, { as: 'dot' }), pop([16, 15.5], 2, { as: 'dot', delay: 0.24 })],
  },
  'lock-sync-01': {
    verb: 'the sync ring turns around the padlock',
    parts: [lap(C, 360, { as: 'sync', dur: 0.9 }), null, null],
  },
  'lock-sync-02': {
    verb: 'the sync ring turns back and the padlock hops',
    parts: [lap(C, -360, { as: 'sync', dur: 0.9 }), hop(C, 1, { as: 'lock', delay: 0.2 })],
  },
  'lock-sync': {
    verb: 'the shackle lifts open inside the sync ring',
    parts: [around(C, C, [0, 40, -6, 2, 0], { as: 'sync' }), null, ride([12, 8.8], out(0, -1), { as: 'shackle', delay: 0.1 })],
  },
  locked: {
    verb: 'the scan corners close in and the padlock clicks',
    parts: [swell(C, C, [1, 0.9, 1.04, 1, 1], { as: 'frame' }), hop([12, 11.7], 0.8, { as: 'lock', delay: 0.16 })],
  },
  'locker-01': {
    verb: 'the doors rattle and the vents blink',
    parts: [shake([12, 11], { as: 'locker', dur: 0.5 }), blink({ as: 'vent' }), blink({ as: 'vent', delay: 0.1 }), blink({ as: 'vent', delay: 0.05 }), blink({ as: 'vent', delay: 0.15 }), null, null, null, null],
  },
  locker: {
    verb: 'the handles twist and the door swings',
    parts: [null, null, null, ride([9, 13.5], out(-0.6, 0), { as: 'handle' }), ride([15, 13.5], out(0.6, 0), { as: 'handle' }), null],
  },

  // --- login / logout ----------------------------------------------------------------------
  'login-02': {
    verb: 'the arrow pushes in through the doorframe',
    parts: [door([17.5, 12]), null, push([7, 12], 1.6)],
  },
  'login-03': {
    verb: 'the arrow slides into the door',
    parts: [door([13, 12]), ride([10, 12], out(1.6, 0), { as: 'arrow' })],
  },
  'login-circle-01': {
    verb: 'the arrow pushes into the ring',
    parts: [door([12.5, 12]), push([8.5, 12], 1.6)],
  },
  'login-circle-02': {
    verb: 'the arc closes behind the arrow pushing in',
    parts: [retrace({ as: 'arc', delay: 0.16 }), push([15, 12], -1.6)],
  },
  'login-circle': {
    verb: 'the ring turns as the arrow enters',
    parts: [around([12.5, 12], [12.5, 12], [0, 20, -4, 1, 0], { as: 'ring', delay: 0.1 }), ride([8.5, 12], out(1.6, 0), { as: 'arrow' })],
  },
  'login-method': {
    verb: 'the padlock clicks and the password stars type in',
    parts: [hop([12, 11.3], 0.6, { as: 'lock', delay: 0.4 }), ride([12, 4.5], out(0, -0.8), { as: 'shackle', delay: 0.4 }), pop([12, 20.5], 1.3, { as: 'star', delay: 0.12 }), pop([19.5, 20.5], 1.3, { as: 'star', delay: 0.24 }), pop([4.5, 20.5], 1.3, { as: 'star' })],
  },
  'login-square-01': {
    verb: 'the arrow pushes into the square door',
    parts: [door([15, 12]), push([9.5, 12], 1.6)],
  },
  'login-square-02': {
    verb: 'the arrow enters and the door flexes',
    parts: [flex('X', [20, 12], [12, 12], [1, 0.94, 1.03, 1, 1], { as: 'door', delay: 0.2 }), push([14.5, 12], -1.6)],
  },
  'login-square': {
    verb: 'the arrow slides in and back',
    parts: [null, ride([9.5, 12], out(1.6, 0), { as: 'arrow' })],
  },
  login: {
    verb: 'the arrow pushes into the door, which nods',
    parts: [door([14.5, 12]), push([9.5, 12], 1.6)],
  },
  'logout-02': {
    verb: 'the arrow pulls out through the doorframe',
    parts: [door([7.5, 12]), null, push([18, 12], 1.6)],
  },
  'logout-03': {
    verb: 'the arrow slides out of the door',
    parts: [door([11, 12]), ride([14, 12], out(1.6, 0), { as: 'arrow' })],
  },
  'logout-04': {
    verb: 'the arrow pulls out between the two panels',
    parts: [door([9, 12]), door([18, 12], { delay: 0.26 }), push([13, 12], 1.6)],
  },
  'logout-05': {
    verb: 'the arrow leaves the bracket',
    parts: [door([5, 12]), push([14.5, 12], 1.6)],
  },
  'logout-circle-01': {
    verb: 'the arrow pulls out of the ring',
    parts: [door([10.3, 12]), push([15.5, 12], 1.6)],
  },
  'logout-circle-02': {
    verb: 'the arc opens as the arrow leaves',
    parts: [retrace({ as: 'arc', delay: 0.16 }), push([15, 12], 1.6)],
  },
  'logout-circle': {
    verb: 'the ring turns back as the arrow leaves',
    parts: [around([10.3, 12], [10.3, 12], [0, -20, 4, -1, 0], { as: 'ring', delay: 0.1 }), ride([15.5, 12], out(1.6, 0), { as: 'arrow' })],
  },
  'logout-square-01': {
    verb: 'the arrow pulls out of the square door',
    parts: [door([8.5, 12]), push([15, 12], 1.6)],
  },
  'logout-square-02': {
    verb: 'the arrow leaves and the door flexes',
    parts: [flex('X', [4, 12], [12, 12], [1, 0.94, 1.03, 1, 1], { as: 'door', delay: 0.2 }), push([14.5, 12], 1.6)],
  },
  'logout-square': {
    verb: 'the arrow slides out and back',
    parts: [null, ride([15, 12], out(1.6, 0), { as: 'arrow' })],
  },
  logout: {
    verb: 'the arrow pulls out of the door, which nods',
    parts: [door([9, 12]), push([15, 12], 1.6)],
  },

  // --- misc ---------------------------------------------------------------------------------
  lollipop: {
    verb: 'the lollipop twirls on its stick',
    parts: [lap([12, 8], 360, { as: 'candy', dur: 0.9 }), null, lap([12, 8], 360, { as: 'candy', dur: 0.9 })],
  },
  'long-sleeve-shirt': {
    verb: 'the sleeves swing as the shirt is shaken out',
    parts: [around([12, 3], [12, 14.7], [0, -3, 2, -1, 0], { as: 'body' }), { as: 'sleeves', origin: [12, 6], transform: ['scaleX(1)', 'scaleX(1.06)', 'scaleX(0.97)', 'scaleX(1)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.6 }, hop([12, 3.8], 0.6, { as: 'collar', delay: 0.1 })],
  },
  longitude: {
    verb: 'the meridian swings around as the globe turns',
    parts: [null, { as: 'meridian', origin: C, transform: ['scaleX(1)', 'scaleX(0.1)', 'scaleX(1.6)', 'scaleX(1)'], times: [0, 0.33, 0.66, 1], ease: 'easeInOut', dur: 0.9 }, draw({ as: 'axis', delay: 0.1 })],
  },
  'look-bottom': {
    verb: 'the eyes look down and back',
    parts: [ride([12, 17.5], out(0, 0.6), { as: 'mouth', delay: 0.06 }), ride([12, 12.3], out(0, 1.4), { as: 'eyes' }), null],
  },
}

export default settleSpecs(specs)
