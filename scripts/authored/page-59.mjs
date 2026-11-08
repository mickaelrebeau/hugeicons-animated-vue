/**
 * Page 59 — semi-truck → shield-key.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * sent, settings-01, share-08. The hidden handcrafted shield-02 sits in this
 * span and is skipped too. settings shares settings-01's geometry, so it rocks
 * back a notch instead of the original's clockwise spin.
 *
 * Gears turn by their own symmetry (a sixth, an eighth, a full turn). The
 * setting-done / setting-error badges act at the corner while the cut gear
 * rocks. Shares push their arrow out. Shields keep the shield and let the
 * emblem inside answer.
 *
 * Identical-geometry pairs get different jobs: server-stack / -01,
 * setting-done / -01, settings / settings-01, settings-error / -01,
 * setup / -01, seven-z / seven-z01, shaka / -01, share / -01,
 * share-location / -01, sheriff / -01.
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
  scaleHold,
  settleSpecs,
  shake,
  stamp,
  swing,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const B = [17, 17] // corner badge centre on the setting-done / setting-error icons
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
const flash = (c, s = 1.22, o = {}) => ({ ...pop(c, s, { as: 'bolt', ...o }), opacity: [1, 0.3, 1, 1] })
const led = (delay = 0) => blink({ as: 'led', opacity: [1, 0.1, 1, 1, 1], delay })
const gearRock = (c, o = {}) => wiggle(c, c, -22, { as: 'gear', ...o })
/** File badges: [page, letters]. */
const fileStamp = () => [null, stamp([12, 19], { as: 'letters' })]
const fileSlide = () => [
  beat([12, 7.5]),
  { as: 'letters', origin: [12, 19], transform: ['translateX(0px)', 'translateX(-2px)', 'translateX(0.3px)', 'translateX(0px)'], opacity: [1, 0, 1, 1], times: [0, 0.2, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
]
/** A rack unit slides out with its lights. */
const unit = (c, dx, delay = 0) => ride(c, out(dx, 0), { as: 'unit', delay })

// ---------------------------------------------------------------------------

const specs = {
  // --- transport, sending ---------------------------------------------------------------------------------
  'semi-truck': {
    verb: 'the truck rolls forward puffing exhaust from its stack',
    wrap: ride(C, out(1.2, 0), { as: 'truck', dur: 0.7 }),
    parts: [null, null, null, null, null],
    extras: [puff(12, 2.5, 0.6, -0.6, -1.8, { delay: 0.1 }), trail('M1.5 9H0M1.5 12H0.5', -1.2)],
  },
  'send-to-back': {
    verb: 'the front square sinks back while the two behind it step up',
    parts: [pop([6, 6], 1.12, { as: 'back', delay: 0.14 }), pop([18, 18], 1.12, { as: 'back', delay: 0.14 }), scaleHold(C, 0.82, { as: 'front' })],
  },
  'send-to-mobile-02': {
    verb: 'the arrow shoots out of the phone, which nods',
    parts: [beat([10.5, 12], { delay: 0.24 }), null, nudge([16, 12], 1.4, 0)],
  },
  'send-to-mobile': {
    verb: 'the arrow shoots out and the home dot pops',
    parts: [nudge([16, 12], 1.4, 0), null, pop([10.5, 19], 2, { as: 'dot', delay: 0.2 })],
  },
  'sending-order': {
    verb: 'the parcel slides right along the arrow',
    parts: [line(0.2, { as: 'road' }), ride([12, 10.8], out(0.8, 0), { as: 'parcel' }), nudge([18, 18.5], 1.4, 0, { delay: 0.08 })],
  },
  senseless: {
    verb: 'the spiral eyes spin and the wavy mouth wobbles',
    parts: [null, lap([7.5, 9.7], 360, { as: 'eye' }), lap([16.5, 9.3], -360, { as: 'eye' }), wiggle([12, 16.5], [12, 16.5], 6, { as: 'mouth' })],
  },
  'sent-02': {
    verb: 'the paper plane darts up and to the right',
    wrap: ride(C, out(1.3, -1.3), { as: 'plane', dur: 0.66 }),
    parts: [null, null, null],
    extras: [trail('M4 20L2 22M2.5 15L1.5 16', -1.3)],
  },
  seo: {
    verb: 'the trend line rewrites and the magnifier scans',
    parts: [ride([10, 15], [[0, 0], [-0.8, -0.6], [0.6, -0.8], [0.3, 0.4], [0, 0]], { as: 'lens', ease: INOUT, dur: 0.9 }), line(0, { as: 'trend', dur: 0.7 })],
  },
  'separator-horizontal': {
    verb: 'the two chevrons push away from the divider, which stretches',
    parts: [nudge([12, 19], 0, 1.2, { as: 'chevron' }), nudge([12, 5], 0, -1.2, { as: 'chevron' }), flex('X', C, C, [1, 1.1, 0.97, 1, 1], { as: 'divider' })],
  },

  // --- servers ---------------------------------------------------------------------------------
  'server-stack': {
    verb: 'the status lights blink down the stack',
    parts: [null, null, led(0), led(0.1), led(0.2), led(0.3)],
  },
  'server-stack-01': {
    verb: 'the two units slide out of the rack in opposite directions',
    parts: [unit([12, 7], 1), unit([12, 17], -1, 0.06), unit([6, 7], 1), unit([10, 7], 1), unit([6, 17], -1, 0.06), unit([10, 17], -1, 0.06)],
  },
  'server-stack-02': {
    verb: 'the lights blink across both units and the stand nods',
    parts: [null, null, beat([12, 20], { delay: 0.3 }), led(0), led(0.08), led(0.16), led(0.24)],
  },
  'server-stack-03': {
    verb: 'the lights cascade down the three units',
    parts: [null, null, null, led(0), led(0.12), led(0.24), led(0.06), led(0.18), led(0.3)],
  },
  service: {
    verb: 'the service mark rewrites itself',
    parts: [retrace({ as: 'mark', dur: 0.8 })],
  },
  'serving-food': {
    verb: 'the cloche lifts off the tray and sets back down',
    parts: [beat([13, 14], { delay: 0.5 }), ride([11, 18], out(0, -0.5), { as: 'hand', delay: 0.5 }), { as: 'cloche', origin: [13, 6.8], transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(-1.6px)', 'translateY(0px)'], times: HOLD_T, ease: HOLD_E, dur: 0.76 }],
  },

  // --- gears ---------------------------------------------------------------------------------
  'setting-06': {
    verb: 'the hexagon turns a sixth and the slash redraws',
    parts: [lap(C, 60, { as: 'hex', dur: 0.7 }), draw({ as: 'slash', delay: 0.16 })],
  },
  'setting-07': {
    verb: 'the gear turns an eighth and the hub pops',
    parts: [lap(C, 45, { as: 'gear', dur: 0.66 }), pop(C, 1.16, { as: 'hub', delay: 0.14 })],
  },
  'setting-done': {
    verb: 'the check draws on the badge and the gear rocks',
    parts: [gearRock([11.8, 12]), draw({ as: 'check', delay: 0.14 }), null, gearRock([11.2, 11.4])],
  },
  'setting-done-01': {
    verb: 'the badge pops at the corner of the gear',
    parts: [null, pop(B, 1.2, { as: 'badge' }), pop(B, 1.2, { as: 'badge' }), pop([11.2, 11.4], 1.12, { as: 'hub', delay: 0.18 })],
  },
  'setting-done-02': {
    verb: 'the hub pops and the check draws',
    parts: [null, draw({ as: 'check', delay: 0.2 }), null, pop([11.7, 10.9], 1.16, { as: 'hub' })],
  },
  'setting-done-03': {
    verb: 'the check pops while the cut gear rocks',
    parts: [pop(B, 1.3, { as: 'check', delay: 0.16 }), null, gearRock([11.4, 11.4]), gearRock([11.2, 11.2])],
  },
  'setting-done-04': {
    verb: 'the badge ring traces around and the check draws',
    parts: [draw({ as: 'check', delay: 0.3 }), loop({ as: 'ring', dur: 0.8 }), null, null],
  },
  'setting-error-03': {
    verb: 'the alert badge rattles while the gear rocks',
    parts: [shake(B, { as: 'alert' }), gearRock([11.4, 11.4], { delay: 0.1 }), gearRock([11.2, 11.2], { delay: 0.1 })],
  },
  'setting-error-04': {
    verb: 'the alert badge pops and the hub dims',
    parts: [pop(B, 1.2, { as: 'alert' }), dim({ delay: 0.12, opacity: [1, 0.35, 0.35, 1] }), null],
  },
  settings: {
    verb: 'the gear rocks back a notch and the hub pops',
    parts: [wiggle(C, [12.1, 12], -30, { as: 'gear' }), pop(C, 1.18, { as: 'hub', delay: 0.1 })],
  },
  'settings-02': {
    verb: 'the gear spins a full turn around its hub',
    parts: [beat(C, { delay: 0.4 }), lap(C, 360, { as: 'gear', dur: 0.9 })],
  },
  'settings-03': {
    verb: 'the hex nut turns back a sixth and the hub pops',
    parts: [pop(C, 1.18, { as: 'hub', delay: 0.14 }), lap(C, -60, { as: 'hex', dur: 0.7 })],
  },
  'settings-04': {
    verb: 'the two slider knobs slide in opposite directions',
    parts: [null, ride([8.5, 15.5], [[0, 0], [0, -4], [0, 1], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.9 }), ride([15.5, 8.5], [[0, 0], [0, 4], [0, -1], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.9 }), null, null],
  },
  'settings-05': {
    verb: 'the two slider knobs slide across in opposite directions',
    parts: [null, ride([8.5, 8.5], [[0, 0], [4, 0], [-1, 0], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.9 }), ride([15.5, 15.5], [[0, 0], [-4, 0], [1, 0], [0, 0], [0, 0]], { as: 'knob', ease: INOUT, dur: 0.9 }), null, null],
  },
  'settings-error-01': {
    verb: 'the gear jams with a rattle and the alert pops',
    parts: [pop(B, 1.2, { as: 'alert', delay: 0.2 }), shake([11.8, 12], { as: 'gear' }), shake([11.2, 11.4], { as: 'gear' })],
  },
  'settings-error-02': {
    verb: 'the hub rocks and the alert badge rattles',
    parts: [null, gearRock([11.7, 10.9]), shake(B, { as: 'alert', delay: 0.1 })],
  },
  'settings-error': {
    verb: 'the alert badge rattles at the corner of the gear',
    parts: [shake(B, { as: 'alert' }), null, null],
  },
  setup: {
    verb: 'the arrow ring spins once around the gear',
    parts: [null, null, lap(C, 360, { as: 'ring', dur: 0.9 })],
  },
  'setup-01': {
    verb: 'the gear spins inside the still arrow ring',
    parts: [lap(C, -360, { as: 'gear', dur: 0.9 }), pop(C, 1.3, { as: 'hub', delay: 0.2 }), null],
  },
  'setup-02': {
    verb: 'the arrow ring rewrites and the gear turns a notch',
    parts: [lap(C, 45, { as: 'gear', dur: 0.66 }), null, line(0, { as: 'ring', dur: 0.7 })],
  },

  // --- sevens ---------------------------------------------------------------------------------
  'seven-circle': {
    verb: 'the seven hops inside the ring',
    parts: [hop(C, 1.4, { as: 'seven' }), beat(C, { delay: 0.3 })],
  },
  'seven-square': {
    verb: 'the seven flips inside the tile',
    parts: [null, flip(C, 1, { as: 'seven' })],
  },
  'seven-z': {
    verb: 'the 7Z letters stamp down under the page',
    parts: fileStamp(),
  },
  'seven-z01': {
    verb: 'the page nods while the 7Z letters slide in from the left',
    parts: fileSlide(),
  },
  'seven-z02': {
    verb: 'the 7Z label slides out of the page to the right and back',
    parts: [null, nudge([15.5, 16.5], 1.8, 0, { as: 'label' })],
  },
  'shadcn-square': {
    verb: 'the two strokes rewrite in the tile',
    parts: [null, line(0, { as: 'strokes', dur: 0.6 })],
  },
  shadcn: {
    verb: 'the long stroke rewrites, then the short one draws',
    parts: [draw({ as: 'short', delay: 0.24 }), line(0, { as: 'long', dur: 0.6 })],
  },

  // --- shaka ---------------------------------------------------------------------------------
  shaka: {
    verb: 'the shaka hand waves from the wrist',
    parts: [wiggle([12, 21], [12, 11.9], 12, { as: 'hand' })],
  },
  'shaka-01': {
    verb: 'the shaka hand shakes side to side, hang loose',
    parts: [swing(C, [12, 11.9], [0, 12, -12, 10, 0], { as: 'hand', times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut', dur: 0.66 })],
  },
  'shaka-02': {
    verb: 'the shaka hand hops up',
    parts: [hop([12.1, 12], 1.6, { as: 'hand' })],
  },
  'shaka-03': {
    verb: 'the shaka hand pops toward the viewer',
    parts: [pop(C, 1.14, { as: 'hand' })],
  },
  'shaka-04': {
    verb: 'the shaka hand thrusts forward on the diagonal',
    parts: [nudge(C, 1.2, -1.2, { as: 'hand' })],
  },

  // --- shampoo, shapes ---------------------------------------------------------------------------------
  shampoo: {
    verb: 'the pump presses down and a bubble puffs out',
    parts: [beat([12, 15], { delay: 0.2 }), ride([12, 6.5], out(0, 0.8), { as: 'pump' }), ride([13.5, 3.5], out(0, 1), { as: 'pump' }), line(0.3, { as: 'label' })],
    extras: [puff(18.5, 4, 0.8, 1.2, -1, { delay: 0.12 })],
  },
  'shape-collection': {
    verb: 'the four shapes pop one after another',
    parts: [pop([6.5, 6.5], 1.2, { as: 'shape' }), pop([17.5, 6.5], 1.2, { as: 'shape', delay: 0.1 }), pop([6.5, 17.5], 1.2, { as: 'shape', delay: 0.2 }), pop([17.5, 17.5], 1.2, { as: 'shape', delay: 0.3 })],
  },
  'shapes-01': {
    verb: 'the triangle hops, the circle pops and the square turns a quarter',
    parts: [hop([12, 6.5], 1.2, { as: 'triangle' }), pop([17.5, 17.5], 1.2, { as: 'circle', delay: 0.1 }), lap([6.5, 17.5], 90, { as: 'square', delay: 0.2, dur: 0.6 })],
  },
  shapes: {
    verb: 'the shape cluster flips on its axis',
    parts: [flip(C, 1, { as: 'shapes' })],
  },

  // --- share ---------------------------------------------------------------------------------
  share: {
    verb: 'the arrow lifts out of the box and settles back',
    parts: [null, nudge([14.6, 9], 1, -1)],
  },
  'share-01': {
    verb: 'the box nods and the arrow pops',
    parts: [beat([10.4, 12.5], { delay: 0.2 }), pop([14.6, 9], 1.14, { as: 'arrow' })],
  },
  'share-02': {
    verb: 'the three nodes pop in turn and the links rewrite',
    parts: [line(0.2, { as: 'links', dur: 0.6 }), pop([12, 5], 1.2, { as: 'node' }), pop([5, 19], 1.2, { as: 'node', delay: 0.1 }), pop([19, 19], 1.2, { as: 'node', delay: 0.2 })],
  },
  'share-03': {
    verb: 'the arrow rises out of the tray, which nods',
    parts: [nudge([12, 9], 0, -1.4), beat([12, 16], { delay: 0.24 })],
  },
  'share-04': {
    verb: 'the corner arrow pushes out and the box rewrites',
    parts: [line(0.1, { as: 'box', dur: 0.6 }), nudge([16, 8], 1, -1)],
  },
  'share-05': {
    verb: 'the box flexes as the corner arrow pops',
    parts: [{ ...beat([11, 13]), transform: ['scale(1)', 'scale(0.92)', 'scale(1.04)', 'scale(1)'] }, pop([16, 8], 1.18, { as: 'arrow', delay: 0.1 })],
  },
  'share-06': {
    verb: 'the corner arrow rewrites and the round box nods',
    parts: [beat([11, 13], { delay: 0.3 }), line(0, { as: 'arrow', dur: 0.56 })],
  },
  'share-07': {
    verb: 'the three nodes pop in turn and the link curves rewrite',
    parts: [pop([17.5, 5.5], 1.2, { as: 'node', delay: 0.1 }), pop([5.5, 11.5], 1.2, { as: 'node' }), pop([18.5, 18.5], 1.2, { as: 'node', delay: 0.2 }), line(0.1, { as: 'links', dur: 0.6 })],
  },
  'share-knowledge': {
    verb: 'the two people bob in turn and the hand-off arrow rewrites',
    parts: [hop([6, 6.5], 1, { as: 'person' }), hop([18, 17.5], 1, { as: 'person', delay: 0.2 }), line(0.1, { as: 'arrow' }), line(0, { as: 'notes' })],
  },
  'share-location': {
    verb: 'the pin hops inside the sharing ring',
    parts: [hop(C, 1.4, { as: 'pin' }), null, hop([12, 11.5], 1.4, { as: 'pin' })],
  },
  'share-location-01': {
    verb: 'the sharing ring winds around the still pin',
    parts: [null, lap(C, -360, { as: 'ring', dur: 0.9 }), blink({ as: 'dot', opacity: [1, 0.1, 1, 1, 1], delay: 0.3 })],
  },
  'share-location-02': {
    verb: 'the pin drops into place and the ring traces around it',
    parts: [ride(C, [[0, 0], [0, -1.4], [0, 0.3], [0, 0], [0, 0]], { as: 'pin' }), ride([12, 11], [[0, 0], [0, -1.4], [0, 0.3], [0, 0], [0, 0]], { as: 'pin' }), loop({ as: 'ring', delay: 0.1 })],
  },
  'shared-drive': {
    verb: 'the two users bob on the drive and the lights blink',
    parts: [null, null, hop([9.5, 9], 1, { as: 'user' }), hop([15.4, 9], 1, { as: 'user', delay: 0.14 }), led(0.1), led(0.2)],
  },
  'shared-wifi': {
    verb: 'the wifi arc pulses and the dot pops in the frame',
    parts: [beat(C, { delay: 0.3 }), wave([12, 11], { as: 'signal' }), pop([12, 16], 2, { as: 'dot', delay: 0.12 })],
  },
  sharing: {
    verb: 'the two arcs fan out from the centre ball, which pops',
    parts: [pop([12, 16], 1.2, { as: 'ball' }), ride([19, 8], out(0.8, -0.6), { as: 'arc', delay: 0.08 }), ride([5, 8], out(-0.8, -0.6), { as: 'arc', delay: 0.08 })],
  },

  // --- shells, sheriffs ---------------------------------------------------------------------------------
  shell: {
    verb: 'the shell rocks on its base',
    parts: [wiggle([12, 22], C, 8, { as: 'shell' })],
  },
  shellfish: {
    verb: 'the shell lid opens on its hinge and closes',
    parts: [swing([12, 16], [12, 11.7], [0, -10, -10, 0, 0], { as: 'lid', times: [0, 0.26, 0.72, 1, 1], ease: [INOUT, 'linear', OUT, 'linear'], dur: 0.8 }), null],
  },
  sheriff: {
    verb: 'the sheriff tips the hat',
    parts: [hop([12, 10.7], 1.2, { as: 'hat' }), hop([12, 5.4], 1.2, { as: 'hat' }), null, null],
  },
  'sheriff-01': {
    verb: 'the hat brim tilts with a nod',
    wrap: tilt([12, 12], -6),
    parts: [null, null, null, null],
  },
  'sheriff-02': {
    verb: 'the star badge spins once and its centre pops',
    parts: [lap(C, 360, { as: 'star', dur: 0.9 }), pop(C, 1.2, { as: 'centre', delay: 0.3 })],
  },

  // --- shields ---------------------------------------------------------------------------------
  'shield-01': {
    verb: 'the shield outline traces itself around',
    parts: [loop({ as: 'shield' })],
  },
  'shield-ban': {
    verb: 'the slash cuts across the shield, which nods',
    parts: [draw({ as: 'slash' }), beat(C, { delay: 0.3 })],
  },
  'shield-blockchain': {
    verb: 'the block in the shield pops',
    parts: [beat(C, { delay: 0.3 }), pop([12, 11.5], 1.2, { as: 'block' })],
  },
  'shield-energy': {
    verb: 'the bolt flashes in the shield',
    parts: [flash([12, 11.5], 1.24), beat(C, { delay: 0.3 })],
  },
  'shield-half': {
    verb: 'the dividing line draws down the shield',
    parts: [draw({ as: 'divider' }), beat(C, { delay: 0.3 })],
  },
  'shield-key': {
    verb: 'the keyhole key turns in the shield',
    parts: [null, wiggle([12, 9], [12, 11.5], 24, { as: 'key' })],
  },
}

export default settleSpecs(specs)
