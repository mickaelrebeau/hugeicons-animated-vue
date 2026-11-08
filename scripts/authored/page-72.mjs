/**
 * Page 72 — usb-connected-01 → user-warning-01.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped:
 * `user-add-01`, `user-check-01`, `user-remove-01` (visible), `user-group`,
 * `user-multiple-02` (hidden).
 *
 * User badges follow one family rule, mirroring the stores and tasks pages:
 * the bare icon lets only the badge act; `-01` nods the head, then pops the
 * badge; `-02` sways the whole person from the feet while the badge acts.
 * The originals `user-add-01`, `user-check-01` and `user-remove-01` hop or
 * slide the whole person, so their bare twins move the badge alone.
 *
 * USB plugs push into the port, get pulled out, or blink their LED.
 *
 * Identical-geometry pairs get different jobs: usb-connected / -01,
 * usb-memory / -01, usb-not-connected / -01, and every user-X / user-X-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flip,
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
  twinkle,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const plug = (c, dy, o = {}) => ride(c, [[0, 0], [0, dy], [0, -dy * 0.2], [0, 0], [0, 0]], { as: 'plug', ...o })

/** `-01`: the head nods, then the badge pops. */
const nod = (c) => hop(c, 0.8, { as: 'head' })
const badgePop = (c, o = {}) => pop(c, 1.2, { as: 'badge', delay: 0.16, ...o })
/** `-02`: the person sways from the feet. Head and body share one pivot. */
const sway = (pivot, c) => wiggle(pivot, c, 5, { as: 'person' })
// Standard `-02` person: head (9, 8.5), body (9, 17), feet at y 20.5.
const P2 = [9, 20.5]
const sway2 = () => [sway(P2, [9, 8.5]), sway(P2, [9, 17])]

const quarter = (c, o = {}) => ({ as: 'plus', origin: c, transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.8)', 'rotate(96deg) scale(1.08)', 'rotate(90deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56, ...o })
const spinX = (c, o = {}) => ({ as: 'x', origin: c, transform: ['rotate(0deg) scale(1)', 'rotate(-45deg) scale(0.7)', 'rotate(-94deg) scale(1.08)', 'rotate(-90deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56, ...o })
const heartbeat = (c, o = {}) => ({ as: 'heart', origin: c, transform: ['scale(1)', 'scale(1.2)', 'scale(1)', 'scale(1.14)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 0.8], ease: 'easeInOut', dur: 0.8, ...o })
const search = (c, o = {}) => ride(c, [[0, 0], [0.8, 0], [0, 0.8], [-0.8, 0], [0, 0]], { as: 'lens', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8, ...o })
const minus = (c, o = {}) => ({ as: 'minus', origin: c, transform: ['scaleX(1)', 'scaleX(0.2)', 'scaleX(1.1)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.54, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- usb ------------------------------------------------------------------------------------------
  'usb-connected-01': {
    verb: 'the plug pushes down into the port and the tick pops',
    parts: [plug([10, 11], 1), plug([10, 4], 1), scaleFrom('Y', [10, 22], [10, 19.5], [1, 0.8, 1.04, 1], { as: 'cable', times: [0, 0.18, 0.46, 1], ease: OUT, dur: 0.62 }), plug([10, 8.5], 1), pop([16, 12.5], 1.2, { as: 'tick', delay: 0.2 })],
  },
  'usb-connected-02': {
    verb: 'the stick hops and the tick writes in',
    parts: [hop([10, 14.8], 0.9), hop([10, 4.8], 0.9), hop([10, 4.5], 0.9), draw({ as: 'tick', delay: 0.18 })],
  },
  'usb-connected-03': {
    verb: 'the stick nudges down and the check badge pops',
    parts: [nudge([10, 14.8], 0, 1), nudge([10, 4.8], 0, 1), nudge([10, 4.5], 0, 1), pop([15, 18], 1.18, { as: 'badge', delay: 0.18 })],
  },
  'usb-connected': {
    verb: 'the tick writes in and the plug answers',
    parts: [beat([10, 11], { delay: 0.24 }), null, null, null, draw({ as: 'tick' })],
  },
  'usb-error': {
    verb: 'the error badge rattles under the stick',
    parts: [null, null, null, shake([15.4, 17.3])],
  },
  'usb-memory-01': {
    verb: 'the stick LED blinks and the stick shivers',
    parts: [beat([10.7, 13.3], { delay: 0.1 }), blink(), null],
  },
  'usb-memory-02': {
    verb: 'the stick slides up out of the port',
    parts: [hold([12, 14.8], 0, -1.2, { as: 'stick' }), hold([12, 4.8], 0, -1.2, { as: 'stick' }), hold([12, 4.5], 0, -1.2, { as: 'stick' })],
  },
  'usb-memory': {
    verb: 'the cap pops off the stick and clicks back',
    parts: [null, null, ride([18, 6], out(1.2, -1.2), { as: 'cap' })],
  },
  'usb-not-connected-01': {
    verb: 'the plug is pulled up and the cross rattles',
    parts: [plug([10.5, 4], -1.2), plug([10.5, 11], -1.2), null, plug([10.5, 8.5], -1.2), shake([16.5, 14], { as: 'x', delay: 0.14 })],
  },
  'usb-not-connected-02': {
    verb: 'the cross writes itself beside the stick',
    parts: [null, draw({ as: 'x' }), null, null],
  },
  'usb-not-connected': {
    verb: 'the cross spins a quarter turn',
    parts: [null, null, null, null, spinX([16.5, 14])],
  },
  usb: {
    verb: 'the plug pushes into the port and the cable compresses',
    parts: [plug([12, 4], 1.2), plug([12, 11], 1.2), scaleFrom('Y', [12, 22], [12, 19.5], [1, 0.76, 1.04, 1], { as: 'cable', times: [0, 0.18, 0.46, 1], ease: OUT, dur: 0.62 }), plug([12, 8.5], 1.2)],
  },
  usdt: {
    verb: 'the T hops and the ring around it flashes',
    parts: [wave([12, 11], { delay: 0.14 }), hop([12, 12], 1)],
  },

  // --- user basics ----------------------------------------------------------------------------------
  'user-02': {
    verb: 'the head bobs above the shoulders',
    parts: [null, hop([12, 7.5], 1.2)],
  },
  'user-03': {
    verb: 'the shoulders shrug and the head bobs after',
    parts: [hop([12, 7], 0.8, { delay: 0.1 }), ride([12, 17.5], out(0, -0.7), { as: 'shoulders' })],
  },
  'user-account': {
    verb: 'the avatar pops and the detail lines write in',
    parts: [null, pop([9, 12], 1.1, { as: 'avatar' }), line(0.1), line(0.2)],
  },
  'user-ai': {
    verb: 'the sparkle twinkles and the ring follows it round',
    parts: [swing([12, 12], [12, 12], [0, -12, 4, -1, 0], { as: 'ring' }), null, null, twinkle([19, 5])],
  },
  'user-arrow-left-right': {
    verb: 'the two arrows push outward on either side',
    parts: [null, null, nudge([20.8, 8.5], 1.4, 0), nudge([3.3, 8.5], -1.4, 0)],
  },
  'user-circle-02': {
    verb: 'the head bobs inside the ring',
    parts: [null, hop([12, 9.5], 1), null],
  },
  'user-circle': {
    verb: 'the person rises inside the ring',
    parts: [ride([12, 10.5], out(0, -1), { as: 'person', delay: 0.04 }), beat([12, 12], { delay: 0.2 }), ride([12, 17], out(0, -1), { as: 'person' })],
  },
  'user-dollar': {
    verb: 'the dollar coin flips beside the person',
    parts: [null, flip([18, 17.5], 1), null],
  },
  'user-full-view': {
    verb: 'the figure turns around to show itself',
    parts: [flip([12, 5.3], 1, { as: 'figure' }), flip([12, 15.5], 1, { as: 'figure' })],
  },
  'user-group-02': {
    verb: 'the three people hop in turn',
    parts: [hop([12, 17.8], 1), hop([12, 11], 1), hop([19.5, 12.8], 1, { delay: 0.14 }), hop([17.5, 6.5], 1, { delay: 0.14 }), hop([4.5, 12.8], 1, { delay: 0.07 }), hop([6.5, 6.5], 1, { delay: 0.07 })],
  },
  'user-group-03': {
    verb: 'the side people lean in toward the middle one',
    parts: [
      null,
      wiggle([19.9, 19], [17.5, 6.9], -6, { as: 'side' }),
      beat([12, 17], { delay: 0.2 }),
      wiggle([19.9, 19], [19.9, 16], -6, { as: 'side' }),
      wiggle([4.1, 19], [6.5, 6.9], 6, { as: 'side' }),
      wiggle([4.1, 19], [4.1, 16], 6, { as: 'side' }),
    ],
  },
  'user-id-verification': {
    verb: 'the scan corners close in and the person nods',
    parts: [{ as: 'frame', origin: [12, 12], transform: ['scale(1)', 'scale(0.92)', 'scale(1.02)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }, hop([12, 9.5], 0.8, { delay: 0.16 }), null],
  },
  'user-list': {
    verb: 'the list lines write in beside the person',
    parts: [null, null, line(0), line(0.08), line(0.16)],
  },
  'user-multiple-03': {
    verb: 'the person behind leans out to the right',
    parts: [null, ride([19.3, 17.3], out(0.9, 0), { as: 'back' }), null, ride([16.3, 7.5], out(0.9, 0), { as: 'back' })],
  },
  'user-multiple': {
    verb: 'the person behind rises over the front one',
    parts: [null, ride([15, 7], out(0, -1), { as: 'back' }), null, ride([18, 14], out(0, -1), { as: 'back' })],
  },
  'user-roadside': {
    verb: 'the figure waves and the hazard ticks flash in turn',
    parts: [wiggle([12, 18.5], [12, 12.5], 5, { as: 'figure' }), wiggle([12, 18.5], [12, 4], 5, { as: 'figure' }), blink({ delay: 0 }), blink({ delay: 0.1 }), blink({ delay: 0.2 })],
  },
  'user-sharing': {
    verb: 'the broadcast arc pulses over the head',
    parts: [hop([12, 11], 0.6, { delay: 0.2 }), wave([12, 9]), null],
  },
  'user-square': {
    verb: 'the head bobs and the tile answers',
    parts: [beat([12, 12], { delay: 0.2 }), hop([12, 10.9], 1), null],
  },
  'user-status': {
    verb: 'the status dot blinks on the ring',
    parts: [null, blink(), null, null],
  },
  'user-story': {
    verb: 'the dashed half of the story ring fills in',
    parts: [beat([17, 12], { delay: 0.3 }), retrace({ as: 'dash' }), null, null],
  },
  'user-switch': {
    verb: 'the arrows swing round and the two people pop in turn',
    parts: [pop([17, 16.8], 1.1, { as: 'person', delay: 0.2 }), pop([7, 7.3], 1.1, { as: 'person' }), swing([12, 12], [6, 18], [0, -20, 4, -1, 0], { as: 'arrow' }), swing([12, 12], [16, 6], [0, -20, 4, -1, 0], { as: 'arrow' })],
  },
  'user-warning-01': {
    verb: 'the bang stretches and its dot drops in',
    parts: [null, null, scaleFrom('Y', [19, 5], [19, 7], [1, 1.3, 0.9, 1], { as: 'stem' }), pop([19, 12], 1.8, { as: 'dot', delay: 0.2 })],
  },

  // --- user badges (bare / -01 / -02) ---------------------------------------------------------------
  'user-add-02': {
    verb: 'the person sways and the plus turns a quarter',
    parts: [...sway2(), quarter([19, 12], { delay: 0.1 })],
  },
  'user-add': {
    verb: 'the plus turns a quarter beside the person',
    parts: [null, quarter([17.5, 17.5]), null],
  },
  'user-block-01': {
    verb: 'the head nods and the block badge pops',
    parts: [nod([9.5, 8]), null, badgePop([18, 17.5])],
  },
  'user-block-02': {
    verb: 'the person sways and the block badge twists',
    parts: [sway(P2, [9, 8.5]), wiggle([19, 11.5], [19, 11.5], -20, { as: 'badge', delay: 0.1 }), sway(P2, [9, 17])],
  },
  'user-block': {
    verb: 'the block badge rattles',
    parts: [null, null, shake([18, 17.5], { as: 'badge' })],
  },
  'user-check-02': {
    verb: 'the person sways and the tick writes in',
    parts: [...sway2(), draw({ as: 'tick', delay: 0.1 })],
  },
  'user-check': {
    verb: 'the tick retraces itself beside the person',
    parts: [null, null, retrace({ as: 'tick' })],
  },
  'user-edit-01': {
    verb: 'the head nods and the pencil pops',
    parts: [nod([10.5, 8]), null, badgePop([17.1, 17.4])],
  },
  'user-edit': {
    verb: 'the pencil scribbles beside the person',
    parts: [null, null, ride([17.1, 17.4], [[0, 0], [-0.6, 0.6], [0.5, -0.2], [-0.4, 0.5], [0, 0]], { as: 'pencil', times: [0, 0.22, 0.46, 0.72, 1], ease: 'easeInOut', dur: 0.7 })],
  },
  'user-lock-01': {
    verb: 'the head nods and the padlock pops',
    parts: [nod([9.5, 8]), badgePop([18, 16.7]), null],
  },
  'user-lock-02': {
    verb: 'the person sways and the shackle clicks shut',
    parts: [...sway2(), ride([19, 7.5], [[0, 0], [0, -1], [0, 0.3], [0, 0], [0, 0]], { as: 'shackle', delay: 0.1 }), beat([19, 11], { delay: 0.2 })],
  },
  'user-lock': {
    verb: 'the padlock rattles',
    parts: [null, shake([18, 16.7], { as: 'lock' }), null],
  },
  'user-love-01': {
    verb: 'the head nods and the heart pops',
    parts: [nod([9.5, 7.5]), null, badgePop([17.5, 18])],
  },
  'user-love-02': {
    verb: 'the person sways and the heart hops',
    parts: [...sway2(), hop([19, 12], 1.2, { delay: 0.1 })],
  },
  'user-love': {
    verb: 'the heart beats twice',
    parts: [null, null, heartbeat([17.5, 18])],
  },
  'user-minus-01': {
    verb: 'the head nods and the minus pops',
    parts: [nod([10, 8.5]), badgePop([17.5, 19]), null],
  },
  'user-minus-02': {
    verb: 'the person sways and the minus writes in',
    parts: [...sway2(), draw({ as: 'minus', delay: 0.1 })],
  },
  'user-minus': {
    verb: 'the minus shrinks to a point and stretches back',
    parts: [null, minus([17.5, 19]), null],
  },
  'user-question-01': {
    verb: 'the head nods and the question mark pops',
    parts: [nod([9.5, 8]), null, badgePop([17.5, 17])],
  },
  'user-question-02': {
    verb: 'the person sways and the question mark hops',
    parts: [sway([9.5, 20.5], [9.5, 8.5]), sway([9.5, 20.5], [9.5, 17]), hop([19.5, 12], 1.2, { delay: 0.1 })],
  },
  'user-question': {
    verb: 'the question mark tilts from its dot, puzzled',
    parts: [null, null, wiggle([17.5, 21], [17.5, 17], 14, { as: 'mark' })],
  },
  'user-remove-02': {
    verb: 'the person sways and the cross turns a quarter',
    parts: [...sway2(), spinX([19.5, 11.5], { delay: 0.1 })],
  },
  'user-remove': {
    verb: 'the cross rattles beside the person',
    parts: [null, shake([18.5, 18], { as: 'x' }), null],
  },
  'user-search-01': {
    verb: 'the head nods and the magnifier pops',
    parts: [nod([10, 7.5]), badgePop([17.5, 18]), null],
  },
  'user-search-02': {
    verb: 'the person sways and the magnifier circles',
    parts: [sway(P2, [9, 8.5]), search([19, 12.5], { delay: 0.06 }), sway(P2, [9, 17])],
  },
  'user-search': {
    verb: 'the magnifier circles, scanning',
    parts: [null, search([17.5, 18]), null],
  },
  'user-settings-01': {
    verb: 'the head nods and the gear pops',
    parts: [nod([9.5, 7.5]), null, badgePop([18, 17.5])],
  },
  'user-settings-02': {
    verb: 'the person sways and the gear rocks',
    parts: [sway([9, 19.5], [9, 7.5]), sway([9, 19.5], [9, 16]), wiggle([19, 11], [19, 11], 30, { as: 'gear', delay: 0.06 })],
  },
  'user-settings': {
    verb: 'the gear turns once',
    parts: [null, null, lap([18, 17.5], 360, { as: 'gear' })],
  },
  'user-shield-01': {
    verb: 'the head nods and the shield pops',
    parts: [nod([9.5, 7.5]), null, badgePop([18, 17.5])],
  },
  'user-shield-02': {
    verb: 'the person sways and the shield hops',
    parts: [...sway2(), hop([19.3, 11.8], 1.2, { delay: 0.1 })],
  },
  'user-shield': {
    verb: 'the shield stamps down',
    parts: [null, null, stamp([18, 17.5], { as: 'shield' })],
  },
  'user-star-01': {
    verb: 'the head nods and the star pops',
    parts: [nod([10, 8]), null, badgePop([17.5, 17.5])],
  },
  'user-star-02': {
    verb: 'the person sways and the star wheels a full turn',
    parts: [...sway2(), lap([19, 11.5], 360, { as: 'star', delay: 0.1 })],
  },
  'user-star': {
    verb: 'the star twinkles',
    parts: [null, null, twinkle([17.5, 17.5])],
  },
  'user-time-01': {
    verb: 'the head nods and the clock pops',
    parts: [nod([9.5, 8]), null, badgePop([18, 17.5])],
  },
  'user-time-02': {
    verb: 'the person sways and the clock turns once',
    parts: [sway([7.8, 18.5], [9.5, 6]), lap([17, 17.5], 360, { as: 'clock', delay: 0.06 }), sway([7.8, 18.5], [7.8, 15.5])],
  },
  'user-time-03': {
    verb: 'the alarm clock rings and the head hops',
    parts: [hop([10, 6], 0.8, { delay: 0.12 }), shake([17, 18], { as: 'clock' }), null],
  },
  'user-time': {
    verb: 'the clock turns once',
    parts: [null, null, lap([18, 17.5], 360, { as: 'clock' })],
  },
  'user-unlock-01': {
    verb: 'the head nods and the open padlock pops',
    parts: [nod([9.5, 8]), badgePop([18, 16.8]), null],
  },
  'user-unlock-02': {
    verb: 'the person sways and the shackle swings open',
    parts: [sway([9.5, 19.5], [9.5, 7.5]), sway([9.5, 19.5], [9.5, 16]), beat([19, 11], { delay: 0.16 }), swing([17.5, 9], [18.8, 7.5], [0, -28, -24, -26, 0], { as: 'shackle', times: [0, 0.3, 0.5, 0.75, 1] })],
  },
  'user-unlock': {
    verb: 'the open padlock hops',
    parts: [null, hop([18, 16.8], 1.2, { as: 'lock' }), null],
  },
}

export default settleSpecs(specs)
