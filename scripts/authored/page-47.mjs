/**
 * Page 47 — more-horizontal-circle → move-right.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * more-horizontal, more-vertical. The hidden handcrafted
 * mouse-left-click-01 sits in this span and is skipped too.
 *
 * Twenty-three plain mice each get their own move: the wheel scrolls down
 * or up, the body clicks, glides, tilts, hops or wiggles its cable. Click
 * icons press their side and flash the click marks on that side. Motion
 * icons streak forward. Mosques raise their dome and crescent.
 *
 * Identical-geometry pairs get different jobs: more-horizontal-circle /
 * -01, more-horizontal-square / -01, more-vertical-circle / -01,
 * more-vertical-square / -01, mortarboard / -01, mosque / mosque-01,
 * motion / motion-01, motorbike / motorbike-01, mouse / mouse-01 / -23,
 * mouse-left-click (-01 is an original), mouse-right-click / -01,
 * mouse-scroll / -01.
 *
 * move-left [0] and mouse-right-click-02 [3] carry an SVG transform
 * attribute, so they stay still.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  dim,
  draw,
  fall,
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
  stamp,
  sweep,
  swell,
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** The scroll wheel rolls: slides along its slot and returns. */
const roll = (c, dy, o = {}) => ride(c, [[0, 0], [0, dy], [0, 0], [0, dy], [0, 0]], { as: 'wheel', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7, ...o })
/** The mouse body clicks down. */
const click = (c, o = {}) => ({ as: 'mouse', origin: c, transform: ['scale(1)', 'scale(0.95)', 'scale(1.02)', 'scale(1)'], times: [0, 0.22, 0.5, 1], ease: 'easeInOut', dur: 0.42, ...o })
/** The mouse glides across the desk. */
const glide = (c, dx, o = {}) => ride(c, [[0, 0], [dx, 0], [-dx * 0.6, 0], [0, 0], [0, 0]], { as: 'mouse', ease: 'easeInOut', dur: 0.8, ...o })
/** A cable wiggles from the mouse. */
const cable = (c, o = {}) => ({ as: 'cable', origin: c, transform: ['skewX(0deg)', 'skewX(-14deg)', 'skewX(10deg)', 'skewX(-4deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7, ...o })
/** Click marks flash beside a button. */
const marks = (o = {}) => ({ as: 'marks', opacity: [1, 0, 1, 0, 1], times: [0, 0.15, 0.3, 0.45, 0.6], ease: 'linear', dur: 0.7, ...o })
/** One side of a mouse is pressed: it tilts down on that side. */
const press = (side, c = C, o = {}) => around([12, 22], c, [0, side * 3, 0, side * 1, 0], { as: 'mouse', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6, ...o })
const streak = (c, o = {}) => ride(c, out(1, -1), { as: 'streak', ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- more -----------------------------------------------------------------------------------
  'more-horizontal-circle': {
    verb: 'the three dots slide together and spread',
    parts: [ride([19.5, 12], out(-2, 0), { as: 'dot' }), pop(C, 1.2, { as: 'dot', delay: 0.1 }), ride([4.5, 12], out(2, 0), { as: 'dot' })],
  },
  'more-horizontal-square-01': {
    verb: 'the dots wave left to right',
    parts: [{ as: 'dots', origin: C, transform: ['skewY(0deg)', 'skewY(-10deg)', 'skewY(8deg)', 'skewY(0deg)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.66 }],
  },
  'more-horizontal-square-02': {
    verb: 'the three dots pulse inside the square',
    parts: [null, pop(C, 2, { as: 'dot', delay: 0.08 }), pop([17, 12], 2, { as: 'dot', delay: 0.16 }), pop([7, 12], 2, { as: 'dot' })],
  },
  'more-horizontal-square': {
    verb: 'the dots stretch out and spring back',
    parts: [flex('X', C, C, [1, 1.2, 0.94, 1.02, 1], { as: 'dots' })],
  },
  'more-or-less-circle': {
    verb: 'the approximate strokes wobble inside the circle',
    parts: [null, flex('X', C, C, [1, 0.7, 1.08, 1, 1], { as: 'line', delay: 0.08 }), nudge([12, 8.4], -0.8, 0, { as: 'stroke' }), nudge([12, 15.6], 0.8, 0, { as: 'stroke' })],
  },
  'more-or-less-square': {
    verb: 'the approximate strokes wobble inside the square',
    parts: [null, flex('X', C, C, [1, 0.7, 1.08, 1, 1], { as: 'line', delay: 0.08 }), nudge([12, 8], 0.8, 0, { as: 'stroke' }), nudge([12, 16], -0.8, 0, { as: 'stroke' })],
  },
  'more-or-less': {
    verb: 'the top and bottom strokes slide in opposite ways',
    parts: [flex('X', C, C, [1, 0.8, 1.06, 1, 1], { as: 'line', delay: 0.08 }), nudge([11.9, 5], -1.2, 0, { as: 'stroke' }), nudge([12.1, 19], 1.2, 0, { as: 'stroke' })],
  },
  'more-vertical-circle-01': {
    verb: 'the three dots hop top to bottom',
    parts: [hop([12, 19.5], 1, { as: 'dot', delay: 0.16 }), hop(C, 1, { as: 'dot', delay: 0.08 }), hop([12, 4.5], 1, { as: 'dot' })],
  },
  'more-vertical-circle-02': {
    verb: 'the dots stretch apart inside the circle',
    parts: [null, flex('Y', C, C, [1, 1.2, 0.94, 1.02, 1], { as: 'dots' })],
  },
  'more-vertical-circle': {
    verb: 'the three dots gather to the middle and spread',
    parts: [ride([12, 19.5], out(0, -2), { as: 'dot' }), pop(C, 1.2, { as: 'dot', delay: 0.1 }), ride([12, 4.5], out(0, 2), { as: 'dot' })],
  },
  'more-vertical-square-01': {
    verb: 'the dots lean left and right',
    parts: [{ as: 'dots', origin: C, transform: ['skewX(0deg)', 'skewX(-10deg)', 'skewX(8deg)', 'skewX(0deg)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.66 }],
  },
  'more-vertical-square-02': {
    verb: 'the dots pulse inside the square',
    parts: [null, pop(C, 1.3, { as: 'dots' })],
  },
  'more-vertical-square': {
    verb: 'the dots stretch tall and spring back',
    parts: [flex('Y', C, C, [1, 1.2, 0.94, 1.02, 1], { as: 'dots' })],
  },
  more: {
    verb: 'the three circles orbit a third of a turn',
    parts: [lap([12, 13.8], 120, { as: 'circle', dur: 0.8 }), lap([12, 13.8], 120, { as: 'circle', dur: 0.8 }), lap([12, 13.8], 120, { as: 'circle', dur: 0.8 })],
  },
  mortar: {
    verb: 'the pestle grinds in the bowl',
    parts: [shake([12, 17], { as: 'bowl', delay: 0.1, dur: 0.5 }), null, ride([6.5, 5.5], [[0, 0], [1.6, 1.6], [0.6, 2.2], [1.6, 1.6], [0, 0]], { as: 'pestle', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  'mortarboard-01': {
    verb: 'the tassel swings beside the cap',
    parts: [null, null, around([20.5, 9.5], [20.5, 15.3], [0, -16, 12, -4, 0], { as: 'tassel' })],
  },
  mortarboard: {
    verb: 'the cap is tossed up and lands',
    parts: [ride([12, 8], [[0, 0], [0, -2], [0, 0.3], [0, 0], [0, 0]], { as: 'cap' }), null, ride([20.5, 15.3], [[0, 0], [0, -2], [0, 0.3], [0, 0], [0, 0]], { as: 'cap' })],
  },
  'mortarboard-02': {
    verb: 'the board tilts and the tassel answers',
    parts: [around([12, 13], [12, 8], [0, -8, 4, -1, 0], { as: 'board' }), null, around([20.5, 9.5], [20.5, 15.3], [0, 12, -8, 2, 0], { as: 'tassel', delay: 0.1 })],
  },

  // --- mosques -------------------------------------------------------------------------------
  'mosque-01': {
    verb: 'the dome rises on the hall',
    parts: [ride([12, 5.5], out(0, -1.2), { as: 'dome' }), ride([12, 10.5], out(0, -0.6), { as: 'drum', delay: 0.06 }), null, null],
  },
  mosque: {
    verb: 'the door opens under the dome',
    parts: [null, null, null, flex('X', [9.5, 18.5], [12, 18.5], [1, 0.3, 0.3, 1, 1], { as: 'door' })],
  },
  'mosque-02': {
    verb: 'the crescent tips on the dome and the minaret answers',
    parts: [null, hop([19.3, 4.5], 0.8, { as: 'minaret', delay: 0.14 }), around([9, 6], [9, 3], [0, -20, 12, -4, 0], { as: 'crescent' }), null, null, null, null],
  },
  'mosque-03': {
    verb: 'the dome rises over the colonnade',
    parts: [null, null, null, null, null, pop([12, 2.5], 2, { as: 'finial', delay: 0.2 }), null, ride([12, 5.5], out(0, -1), { as: 'dome' })],
  },
  'mosque-04': {
    verb: 'the two minarets rise either side of the dome',
    parts: [null, ride([5, 17], out(0, -1), { as: 'tower', delay: 0.06 }), ride([5, 11], out(0, -1), { as: 'tower', delay: 0.06 }), ride([19, 11], out(0, -1), { as: 'tower', delay: 0.12 }), ride([19, 17], out(0, -1), { as: 'tower', delay: 0.12 }), null, hop([12, 6], 0.8, { as: 'dome' }), null, null],
  },
  'mosque-05': {
    verb: 'the minaret top glows and the dome nods',
    parts: [pop([19, 4], 1.2, { as: 'top' }), null, hop([10, 7.5], 0.8, { as: 'dome', delay: 0.1 }), null, null, null],
  },
  'mosque-location': {
    verb: 'the pin drops beside the dome',
    parts: [hop([8, 10], 0.8, { as: 'dome', delay: 0.3 }), ride([16.5, 14.6], [[0, 0], [0, -2], [0, 0.4], [0, 0], [0, 0]], { as: 'pin', times: [0, 0.32, 0.56, 0.8, 1] })],
  },

  // --- motion, motorbikes, mountain ---------------------------------------------------------
  'motion-01': {
    verb: 'the square dashes forward and its streaks trail',
    parts: [streak([7, 7], { delay: 0.12 }), streak(C, { delay: 0.06 }), ride([17, 17], out(1.2, -1.2), { as: 'block' })],
  },
  motion: {
    verb: 'the streaks redraw behind the square',
    parts: [retrace({ as: 'streak', delay: 0.1 }), retrace({ as: 'streak' }), pop([17, 17], 1.08, { as: 'block', delay: 0.2 })],
  },
  'motion-02': {
    verb: 'the round block dashes and the streaks follow',
    parts: [ride([16.5, 16.5], out(1.2, -1.2), { as: 'block' }), streak([10.5, 10.5], { delay: 0.06 }), streak([5.5, 5.5], { delay: 0.12 })],
  },
  'motorbike-01': {
    verb: 'the bike pops a wheelie',
    parts: [around([4.5, 16.5], [19.5, 16.5], [0, -12, -12, 0, 0], { as: 'bike', dur: 0.8 }), around([4.5, 16.5], [17, 14.5], [0, -12, -12, 0, 0], { as: 'bike', dur: 0.8 }), null, around([4.5, 16.5], [9.5, 11.8], [0, -12, -12, 0, 0], { as: 'bike', dur: 0.8 }), around([4.5, 16.5], [14, 7.5], [0, -12, -12, 0, 0], { as: 'bike', dur: 0.8 })],
  },
  motorbike: {
    verb: 'the bike revs: the frame bounces on its wheels',
    parts: [null, ride([17, 14.5], [[0, 0], [0, -0.6], [0, 0], [0, -0.6], [0, 0]], { as: 'frame', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 }), null, ride([9.5, 11.8], [[0, 0], [0, -0.6], [0, 0], [0, -0.6], [0, 0]], { as: 'frame', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 }), ride([14, 7.5], [[0, 0], [0, -0.6], [0, 0], [0, -0.6], [0, 0]], { as: 'frame', times: [0, 0.2, 0.4, 0.6, 1], dur: 0.6 })],
    extras: [trail('M0 13H2M0 16H2', -1.2)],
  },
  'motorbike-02': {
    verb: 'the scooter rolls forward and back',
    parts: [ride([19.5, 16.5], out(1, 0), { as: 'scooter' }), ride([4.5, 16.5], out(1, 0), { as: 'scooter' }), ride([12, 10.5], out(1, 0), { as: 'scooter' })],
  },
  mountain: {
    verb: 'the peaks rise one after the other',
    parts: [flex('Y', [9, 20], [9, 12], [1, 0.8, 1.06, 1, 1], { as: 'peak' }), flex('Y', [14, 20], [14, 14.5], [1, 0.7, 1.08, 1, 1], { as: 'peak', delay: 0.1 })],
  },

  // --- mice -----------------------------------------------------------------------------------
  'mouse-01': { verb: 'the wheel rolls down twice', parts: [null, roll([12, 7.5], 1)] },
  'mouse-02': { verb: 'the mouse clicks and its wheel nudges', parts: [null, click([12, 12]), roll([12, 8], 0.6, { delay: 0.1 })] },
  'mouse-03': { verb: 'the mouse glides left and back', parts: [glide([12, 12], -1.6), glide([12, 6.5], -1.6), glide([12, 11], -1.6)] },
  'mouse-04': { verb: 'the cord wiggles above the mouse', parts: [null, cable([12, 8]), roll([12, 10], 0.6, { delay: 0.1 })] },
  'mouse-05': { verb: 'the tilted mouse rocks and the cable swings', parts: [around([9.5, 20], [9.5, 12], [0, -6, 4, -1, 0], { as: 'mouse' }), cable([17, 5.9]), around([9.5, 20], [10.7, 10], [0, -6, 4, -1, 0], { as: 'mouse' })] },
  'mouse-06': { verb: 'the tilted mouse glides forward', parts: [cable([17.8, 5.5]), ride([9.5, 12], out(-1, -1), { as: 'mouse' }), ride([11.1, 8.8], out(-1, -1), { as: 'mouse' })] },
  'mouse-07': { verb: 'the cable curls and the mouse clicks', parts: [cable([9, 4]), click([13, 14], { delay: 0.1 }), roll([13, 10], 0.6, { delay: 0.2 })] },
  'mouse-08': { verb: 'the mouse tugs on its cable', parts: [ride([13, 14], out(0, 1), { as: 'mouse' }), flex('Y', [9, 2], [9, 5.5], [1, 1.2, 0.95, 1, 1], { as: 'cable' }), ride([13, 11], out(0, 1), { as: 'mouse' })] },
  'mouse-09': { verb: 'the wheel scrolls up', parts: [null, roll([12, 7.5], -1)] },
  'mouse-10': { verb: 'the wheel spins and the cord trembles', parts: [cable([12, 4]), null, roll([12, 8.5], 1, { dur: 0.5 })] },
  'mouse-11': { verb: 'the divider flexes as the mouse clicks', parts: [null, click([12.5, 12]), roll([12.5, 7.3], 0.6, { delay: 0.1 }), flex('X', [12.5, 12], [12.5, 12], [1, 0.9, 1.04, 1, 1], { as: 'divider' })] },
  'mouse-12': { verb: 'the mouse hops off the desk', parts: [hop([12, 13.5], 1.2, { as: 'mouse' }), flex('Y', [12, 2], [12, 5], [1, 1.3, 0.95, 1, 1], { as: 'cord' }), hop([12, 10], 1.2, { as: 'mouse' })] },
  'mouse-13': { verb: 'the slanted mouse spins a little on its tail', parts: [around([5, 19], [9, 12.5], [0, 10, -6, 2, 0], { as: 'mouse' }), cable([17, 5.9]), around([5, 19], [10.7, 10], [0, 10, -6, 2, 0], { as: 'mouse' })] },
  'mouse-14': { verb: 'the slanted mouse wheel scrolls', parts: [null, null, ride([11, 8.9], [[0, 0], [-0.5, 0.8], [0, 0], [-0.5, 0.8], [0, 0]], { as: 'wheel', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 })] },
  'mouse-15': { verb: 'the mouse slides right and the cord follows', parts: [cable([9, 4], { delay: 0.1 }), glide([12, 14], 1.4), glide([12, 10], 1.4)] },
  'mouse-16': { verb: 'the wheel scrolls down under the cord', parts: [null, cable([9, 5.5], { delay: 0.1 }), roll([12, 11], 0.8)] },
  'mouse-17': { verb: 'the mouse squeezes as it is gripped', parts: [null, swell([12, 22], [12, 11.9], [1, 0.95, 1.03, 1, 1], { as: 'mouse' }), flex('X', [12, 13.5], [12, 13.5], [1, 0.8, 1.06, 1, 1], { as: 'grip', delay: 0.06 }), roll([12, 7], 0.6, { delay: 0.14 })] },
  'mouse-18': { verb: 'the mouse wobbles on its curved base', parts: [around([12, 22], [12, 7.8], [0, -6, 5, -2, 0], { as: 'mouse' }), around([12, 22], C, [0, -6, 5, -2, 0], { as: 'mouse' }), around([12, 22], [12, 9], [0, -6, 5, -2, 0], { as: 'mouse' })] },
  'mouse-19': { verb: 'the long mouse clicks and its wheel rolls', parts: [null, click([12, 12]), roll([12, 7], 0.8, { delay: 0.1 })] },
  'mouse-20': { verb: 'the mouse smiles as the wheel rolls', parts: [null, null, roll([12, 8], 0.8), flex('X', [12, 18], [12, 18], [1, 1.3, 0.94, 1, 1], { as: 'smile', delay: 0.1 })] },
  'mouse-21': { verb: 'the logo line on the mouse blinks', parts: [null, null, blink({ as: 'logo' }), roll([12, 7], -0.8, { delay: 0.1 })] },
  'mouse-22': { verb: 'the wheel scrolls up and the cable lifts', parts: [null, roll([12, 8.5], -0.8), ride([12, 4], out(0, -0.8), { as: 'cable', delay: 0.06 })] },
  'mouse-23': { verb: 'the mouse turns a little left and right', parts: [around([12, 18], C, [0, -10, 8, -3, 0], { as: 'mouse' }), around([12, 18], [12, 7.5], [0, -10, 8, -3, 0], { as: 'mouse' })] },
  mouse: { verb: 'the mouse clicks and the wheel answers', parts: [click(C), roll([12, 7.5], 0.6, { delay: 0.1 })] },

  // --- clicks -------------------------------------------------------------------------------
  'mouse-left-click-02': {
    verb: 'the left button presses and the click ring pops',
    parts: [press(-1), null, null, pop([5.5, 5], 1.3, { as: 'ring' })],
  },
  'mouse-left-click-03': {
    verb: 'the left button lights with a diagonal slash',
    parts: [press(-1), null, draw({ as: 'slash' }), null],
  },
  'mouse-left-click-04': {
    verb: 'the left side clicks and the marks flash',
    parts: [null, roll([13.5, 8.5], 0.6, { delay: 0.1 }), press(-1, [13.5, 12]), marks()],
  },
  'mouse-left-click-05': {
    verb: 'the ring pops as the left button presses',
    parts: [press(-1, [12.5, 12]), null, null, null, pop([5.5, 5.5], 1.3, { as: 'ring' })],
  },
  'mouse-left-click-06': {
    verb: 'the left click marks flash',
    parts: [null, press(-1, [13.5, 12]), null, null, marks()],
  },
  'mouse-left-click': {
    verb: 'the left side clicks and the arc flashes',
    parts: [null, marks(), roll([13.5, 8], 0.6), press(-1, [13.5, 12])],
  },
  'mouse-pointer-off': {
    verb: 'the slash cuts across and the pointer fades',
    parts: [dim({ as: 'pointer', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'mouse-right-click-01': {
    verb: 'the right side clicks and the arc flashes',
    parts: [null, press(1, [10.5, 12]), marks(), roll([10.5, 8], 0.6, { delay: 0.1 })],
  },
  'mouse-right-click': {
    verb: 'the right arc pulses as the wheel rolls',
    parts: [roll([10.5, 7], 0.8), null, pop([20, 4], 1.3, { as: 'arc' }), null],
  },
  'mouse-right-click-02': {
    verb: 'the right button presses',
    parts: [press(1, [11.5, 12]), null, null, null],
  },
  'mouse-right-click-03': {
    verb: 'the right button lights with a diagonal slash',
    parts: [press(1), null, null, draw({ as: 'slash' })],
  },
  'mouse-right-click-04': {
    verb: 'the right side clicks and the marks flash',
    parts: [null, press(1, [10.5, 12]), roll([10.5, 8.5], 0.6, { delay: 0.1 }), marks()],
  },
  'mouse-right-click-05': {
    verb: 'the ring pops as the right button presses',
    parts: [null, press(1, [11, 12]), null, null, pop([18, 5.5], 1.3, { as: 'ring' })],
  },
  'mouse-right-click-06': {
    verb: 'the right click marks flash',
    parts: [null, press(1, [10.5, 12]), null, marks(), null],
  },
  'mouse-scroll-01': {
    verb: 'the scroll arrows chase down the wheel',
    parts: [null, null, ride([12, 6.9], out(0, 1.2), { as: 'arrow' }), ride([12, 12.1], out(0, 1.2), { as: 'arrow', delay: 0.08 })],
  },
  'mouse-scroll': {
    verb: 'the scroll arrows push apart and back',
    parts: [null, flex('Y', [12, 9.3], [12, 9.3], [1, 0.6, 1.1, 1, 1], { as: 'wheel' }), nudge([12, 6.9], 0, -1, { as: 'arrow' }), nudge([12, 12.1], 0, 1, { as: 'arrow' })],
  },
  'mouse-scroll-02': {
    verb: 'the scroll arrows chase up the wheel',
    parts: [null, null, ride([12, 6.9], out(0, -1.2), { as: 'arrow', delay: 0.08 }), ride([12, 12.1], out(0, -1.2), { as: 'arrow' })],
  },

  // --- move -----------------------------------------------------------------------------------
  'move-01': {
    verb: 'the hand drags the arrow up',
    parts: [ride([10.4, 11.9], out(0.6, -0.8), { as: 'hand' }), ride([18, 5.7], out(1, -1), { as: 'arrow' })],
  },
  'move-02': {
    verb: 'the picture is dragged up toward the arrow',
    parts: [ride([10.4, 13], out(0.8, -0.8), { as: 'picture' }), ride([18, 5.5], out(1, -1), { as: 'arrow', delay: 0.06 })],
  },
  'move-bottom': {
    verb: 'the arrow drives down from the dot',
    parts: [ride([12, 17], out(0, 1.6), { as: 'arrow' }), null],
  },
  'move-left': {
    verb: 'the arrow pushes left away from the dot',
    parts: [null, ride([7, 12], out(-1.6, 0), { as: 'arrow' })],
  },
  'move-right': {
    verb: 'the arrow pushes right away from the dot',
    parts: [pop([5, 12], 1.15, { as: 'dot', delay: 0.1 }), ride([17, 12], out(1.6, 0), { as: 'arrow' })],
  },
}

export default settleSpecs(specs)
