/**
 * Page 25 — dice-faces-05 → dollar-sign.
 *
 * Gallery page (80 public icons). Handcrafted original skipped:
 * document-attachment.
 *
 * Direction signs swing on their post toward the side they point. Distribute
 * icons slide their blocks toward the named guide. Dollar receive/send push
 * their arrow in or out; the sign itself rewrites, flips or hops per variant.
 * Doctors nod; the stethoscope or cross acts.
 *
 * Identical-geometry pairs get different jobs: dim-sum / dim-sum-01,
 * direction-left / -01, direction-right / -01, directions / -01,
 * disability / -01, discount-tag / -01, dish / dish-01, do-not-touch /
 * -01, doc / doc-01, doctor / doctor-01, dollar-receive / -01, dollar-send / -01.
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
  hold,
  hop,
  lap,
  nudge,
  pop,
  puff,
  retrace,
  ride,
  settleSpecs,
  shake,
  stamp,
  sweep,
  swell,
  swing,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const WOBBLE = [0, -8, 6, -2, 0]
const HALF = [0, 36, 126, 185.4, 180]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const pips = (centers, step = 0.08, s = 1.8) => centers.map((c, i) => pop(c, s, { as: 'pip', delay: i * step }))
const percent = () => [around(C, C, HALF, { as: 'percent', dur: 0.76 }), around(C, [9.3, 9.3], HALF, { as: 'percent', dur: 0.76 }), around(C, [14.8, 14.8], HALF, { as: 'percent', dur: 0.76 })]

// ---------------------------------------------------------------------------

const specs = {
  // --- dice -----------------------------------------------------------------------------
  'dice-faces-05': {
    verb: 'the five pips pop in an X, center last',
    parts: [beat(C, { as: 'die', delay: 0.4 }), ...pips([[8, 8], [8, 16], [16, 16]]), pop(C, 1.8, { as: 'pip', delay: 0.32 }), pop([16, 8], 1.8, { as: 'pip', delay: 0.24 })],
  },
  'dice-faces-06': {
    verb: 'the six pips pop down each column',
    parts: [beat(C, { as: 'die', delay: 0.4 }), pop([9, 7], 1.8, { as: 'pip' }), pop([9, 17], 1.8, { as: 'pip', delay: 0.16 }), pop([15, 17], 1.8, { as: 'pip', delay: 0.32 }), pop([15, 12], 1.8, { as: 'pip', delay: 0.24 }), pop([9, 12], 1.8, { as: 'pip', delay: 0.08 }), pop([15, 7], 1.8, { as: 'pip', delay: 0.16 })],
  },
  'dice-faces': {
    verb: 'the die is rolled: it tumbles and lands on its face',
    parts: [around(C, C, [0, 90, 180, 186, 180], { as: 'die', dur: 0.7 }), around(C, C, [0, 90, 180, 186, 180], { as: 'die', dur: 0.7 })],
  },
  dice: {
    verb: 'the top die hops off the pair and lands',
    parts: [beat([6, 17], { as: 'die', delay: 0.3 }), hop([12, 8.5], 1.8, { as: 'top' }), beat([18, 17], { as: 'die', delay: 0.34 }), hop([12, 8.5], 1.8, { as: 'top' })],
  },
  dices: {
    verb: 'the two dice tumble against each other',
    parts: [around(C, [8.5, 14.8], WOBBLE, { as: 'die' }), around(C, [14.8, 8], [0, 8, -6, 2, 0], { as: 'die' }), around(C, [6, 12.3], WOBBLE, { as: 'die' }), around(C, [11, 17.3], WOBBLE, { as: 'die' })],
  },
  digestion: {
    verb: 'the gut ripples as food passes through',
    parts: [retrace({ as: 'gut', dur: 0.8 }), retrace({ as: 'gut', dur: 0.8, delay: 0.1 }), pop([15, 8], 1.4, { as: 'bite', delay: 0.2 })],
  },
  digg: {
    verb: 'the letters hop in a wave',
    parts: [hop([20, 14], 1, { delay: 0.18 }), hop([13.5, 14], 1, { delay: 0.12 }), hop([4, 10.5], 1), hop([9, 10.5], 1, { delay: 0.06 })],
  },
  'digital-clock': {
    verb: 'the colon blinks while the digits tick',
    parts: [null, null, null, flex('Y', [17.8, 12.5], [17.8, 12.5], [1, 0.4, 1.06, 1, 1], { as: 'digit', delay: 0.2 }), flex('Y', [12.3, 12.5], [12.3, 12.5], [1, 0.4, 1.06, 1, 1], { as: 'digit', delay: 0.1 }), null, blink({ as: 'colon', dur: 0.8 })],
  },
  'dim-sum-01': {
    verb: 'the chopsticks pinch toward the dumpling',
    parts: [around([22, 3], [17.8, 5.8], [0, 6, -2, 1, 0], { as: 'stick' }), around([22, 9], [15, 13], [0, -6, 2, -1, 0], { as: 'stick' }), null, null],
  },
  'dim-sum': {
    verb: 'the dumpling hops and the chopsticks follow',
    parts: [ride([17.8, 5.8], out(0, -0.8), { as: 'stick', delay: 0.06 }), ride([15, 13], out(0, -0.8), { as: 'stick', delay: 0.06 }), hop([9, 13.5], 1.2, { as: 'dumpling' }), hop([9, 11], 1.2, { as: 'dumpling' })],
  },
  'dim-sum-02': {
    verb: 'the steam rises off the bun',
    parts: [hop([9, 12], 0.8, { as: 'face', delay: 0.1 }), pop([16.8, 7], 1.6, { as: 'spark', delay: 0.2 }), beat([9, 14.5], { as: 'bun', delay: 0.2 }), retrace({ as: 'steam' })],
  },
  'dining-table': {
    verb: 'the table sets itself: top and base settle into place',
    parts: [ride([12.5, 5.5], out(0, -1), { as: 'top' }), ride([12, 4], out(0, -1), { as: 'top' }), beat([12, 19], { as: 'base', delay: 0.2 }), null, null, flex('Y', [12, 15.5], [12, 12.5], [1, 1.1, 0.96, 1, 1], { as: 'leg' })],
  },
  diploma: {
    verb: 'the seal pops and the ribbon flutters',
    parts: [null, draw({ as: 'line' }), pop([12, 14.5], 1.2, { as: 'seal', delay: 0.1 }), around([12, 14.5], [13.3, 18.3], [0, 8, -6, 2, 0], { as: 'ribbon', delay: 0.14 })],
  },

  // --- directions -----------------------------------------------------------------------
  'direction-left-01': {
    verb: 'the sign swings left on its post',
    parts: [around([15, 7.5], [10, 7.5], [0, -10, 4, -1, 0], { as: 'sign' }), null, null],
  },
  'direction-left': {
    verb: 'the sign pushes left along its post',
    parts: [nudge([10, 7.5], -1.4, 0, { as: 'sign' }), null, null],
  },
  'direction-left-02': {
    verb: 'the sign slides left and the post top answers',
    parts: [nudge([12, 7.5], -1.4, 0, { as: 'sign' }), nudge([12, 7.5], -1.4, 0, { as: 'sign' }), null, pop([14, 3.5], 1.6, { as: 'cap', delay: 0.2 }), null],
  },
  'direction-right-01': {
    verb: 'the sign swings right on its post',
    parts: [around([9, 7.5], [14, 7.5], [0, 10, -4, 1, 0], { as: 'sign' }), null, null],
  },
  'direction-right-02': {
    verb: 'the sign slides right and the post top answers',
    parts: [nudge([12, 7.5], 1.4, 0, { as: 'sign' }), null, pop([10, 3.5], 1.6, { as: 'cap', delay: 0.2 }), null],
  },
  'direction-right': {
    verb: 'the sign pushes right along its post',
    parts: [nudge([14, 7.5], 1.4, 0, { as: 'sign' }), null, null],
  },
  'directions-01': {
    verb: 'the two signs swing toward their sides in turn',
    parts: [around([12, 6], [8, 6], [0, -10, 4, -1, 0], { as: 'sign' }), around([12, 11], [16, 11], [0, 10, -4, 1, 0], { as: 'sign', delay: 0.12 }), null, null],
  },
  directions: {
    verb: 'the two signs push out to their sides',
    parts: [nudge([8, 6], -1.2, 0, { as: 'sign' }), nudge([16, 11], 1.2, 0, { as: 'sign', delay: 0.08 }), null, null],
  },
  'directions-02': {
    verb: 'the three signs push out to their sides in turn',
    parts: [nudge([15.5, 4.5], 1.2, 0, { as: 'sign' }), nudge([15.5, 13.5], 1.2, 0, { as: 'sign', delay: 0.16 }), nudge([8.5, 9.5], -1.2, 0, { as: 'sign', delay: 0.08 }), null, null],
  },
  dirham: {
    verb: 'the dirham coin flips over',
    parts: [flip(C, 1, { as: 'coin' }), flip(C, 1, { as: 'coin' }), flip(C, 1, { as: 'coin' }), flip(C, 1, { as: 'coin' }), flip(C, 1, { as: 'coin' })],
  },

  // --- disability ------------------------------------------------------------------------
  'disability-01': {
    verb: 'the wheelchair rolls forward and back',
    parts: [ride([16, 13], out(1.2, 0), { as: 'chair' }), ride([12.5, 4], out(1.2, 0), { as: 'chair' }), ride([10, 16], out(1.2, 0), { as: 'chair' })],
  },
  disability: {
    verb: 'the wheel turns as the rider nods',
    parts: [null, hop([12.5, 4], 0.8, { as: 'head' }), around([10, 16], [10, 16], [0, 72, 252, 370.8, 360], { as: 'wheel', dur: 0.9 })],
  },
  'disability-02': {
    verb: 'the arm pushes the wheel and the rider leans in',
    parts: [around([11.5, 10], [9.3, 10.5], [0, -14, 4, -1, 0], { as: 'arm' }), hop([14, 4], 0.8, { as: 'head' }), retrace({ as: 'wheel', delay: 0.1 }), null],
  },

  // --- discs ---------------------------------------------------------------------------------
  'disc-album': {
    verb: 'the record spins inside its sleeve',
    parts: [lap(C, 360, { as: 'record', dur: 0.9 }), pop(C, 1.6, { as: 'hole', delay: 0.2 }), null],
  },
  'disc-three': {
    verb: 'the disc glare sweeps around',
    parts: [null, pop(C, 1.2, { as: 'hub', delay: 0.2 }), lap(C, 360, { as: 'glare', dur: 0.9 })],
  },
  'disc-two': {
    verb: 'the inner ring pulses and the hole pops',
    parts: [null, pop(C, 1.15, { as: 'ring' }), pop(C, 2, { as: 'hole', delay: 0.1 })],
  },
  disc: {
    verb: 'the disc flips over',
    parts: [flip(C, 1, { as: 'disc' }), flip(C, 1, { as: 'disc' })],
  },
  discord: {
    verb: 'the eyes blink and the controller bobs',
    parts: [hop(C, 0.8, { as: 'pad' }), flex('Y', [15.6, 11.5], [15.6, 11.5], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5, delay: 0.1 }), flex('Y', [8.3, 11.5], [8.3, 11.5], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5, delay: 0.1 }), hop([12, 17.3], 0.8, { as: 'pad' })],
  },

  // --- discounts --------------------------------------------------------------------------
  'discount-01': {
    verb: 'the percent sign turns a half inside the badge',
    parts: [null, ...percent()],
  },
  discount: {
    verb: 'the badge rosette turns and the dots pop',
    parts: [lap(C, 45, { as: 'badge', dur: 0.8 }), draw({ as: 'slash', delay: 0.1 }), pop([9.3, 9.3], 2.2, { as: 'dot', delay: 0.2 }), pop([14.8, 14.8], 2.2, { as: 'dot', delay: 0.3 })],
  },
  'discount-tag-01': {
    verb: 'the tag swings from its hole',
    parts: [
      around([12, 7], [12, 12], [0, 8, -5, 2, 0], { as: 'tag' }),
      null,
      around([12, 7], [12, 15.5], [0, 8, -5, 2, 0], { as: 'tag' }),
      around([12, 7], [9.8, 13.3], [0, 8, -5, 2, 0], { as: 'tag' }),
      around([12, 7], [14.3, 17.8], [0, 8, -5, 2, 0], { as: 'tag' }),
    ],
  },
  'discount-tag': {
    verb: 'the slash writes on the tag and its dots pop',
    parts: [null, null, draw({ as: 'slash' }), pop([9.8, 13.3], 2.2, { as: 'dot', delay: 0.2 }), pop([14.3, 17.8], 2.2, { as: 'dot', delay: 0.3 })],
  },
  'discount-tag-02': {
    verb: 'the divider draws and the dots pop on the label',
    parts: [draw({ as: 'divider' }), null, pop([16.8, 12.5], 2.2, { as: 'dot', delay: 0.2 }), pop([9.3, 12.5], 2.2, { as: 'dot', delay: 0.1 }), pop([6.5, 6.5], 1.6, { as: 'hole' })],
  },
  'discover-circle': {
    verb: 'the compass needle spins a full turn',
    parts: [null, lap(C, 360, { as: 'needle', dur: 0.9 }), pop(C, 2, { as: 'pin', delay: 0.3 })],
  },
  'discover-square': {
    verb: 'the compass needle swings and settles',
    parts: [around(C, C, [0, -40, 25, -8, 0], { as: 'needle', dur: 0.8 }), null, null],
  },

  // --- dishes ----------------------------------------------------------------------------------
  'dish-01': {
    verb: 'the cloche lifts off the plate and is set back down',
    parts: [null, ride([12, 4.7], out(0, -1.6), { as: 'cloche' }), null, ride([12, 10.8], out(0, -1.6), { as: 'cloche' })],
  },
  dish: {
    verb: 'the knob on the cloche glints and the plate answers',
    parts: [null, pop([12, 4.7], 1.2, { as: 'knob' }), beat([12, 19], { as: 'plate', delay: 0.24 }), null],
    extras: [glint(17, 9, 0.9, { delay: 0.2 })],
  },
  'dish-02': {
    verb: 'the fork taps and the plate rims ripple',
    parts: [beat([18.5, 12], { as: 'rim', delay: 0.2 }), beat([16.5, 12], { as: 'rim', delay: 0.3 }), ride([6, 12], out(0, -1), { as: 'fork' }), ride([6, 8], out(0, -1), { as: 'fork' }), ride([6, 7.6], out(0, -1), { as: 'fork' })],
  },
  'dish-washer': {
    verb: 'the dishwasher spins its rack and the light blinks',
    parts: [null, null, draw({ as: 'panel' }), lap([14.5, 15], 360, { as: 'drum', dur: 0.9 }), retrace({ as: 'water', delay: 0.1 }), blink({ as: 'led', dur: 0.6 })],
  },
  displeased: {
    verb: 'the frown deepens and the brows furrow',
    parts: [null, ride([12, 15.7], out(0, 0.6), { as: 'mouth' }), ride([12.1, 9.9], out(0, 0.6), { as: 'brows' })],
  },

  // --- distribute -------------------------------------------------------------------------------
  'distribute-horizontal-center': {
    verb: 'the blocks slide toward each other and space back out',
    parts: [nudge([7, 12], 1, 0, { as: 'guide' }), nudge([17, 12], -1, 0, { as: 'block' }), nudge([7, 12], 1, 0, { as: 'block' }), nudge([17, 12], -1, 0, { as: 'guide' })],
  },
  'distribute-horizontal-left': {
    verb: 'the blocks slide to their left guides',
    parts: [null, null, nudge([19.5, 12], -2.2, 0, { as: 'block', delay: 0.08 }), nudge([7.5, 12], -2.2, 0, { as: 'block' })],
  },
  'distribute-horizontal-right': {
    verb: 'the blocks slide to their right guides',
    parts: [null, null, nudge([16.5, 12], 2.2, 0, { as: 'block' }), nudge([4.5, 12], 2.2, 0, { as: 'block', delay: 0.08 })],
  },
  'distribute-vertical-bottom': {
    verb: 'the blocks drop to their bottom guides',
    parts: [null, null, nudge([12, 4.5], 0, 2.2, { as: 'block', delay: 0.08 }), nudge([12, 16.5], 0, 2.2, { as: 'block' })],
  },
  'distribute-vertical-center': {
    verb: 'the blocks slide toward each other and space back out',
    parts: [nudge([12, 17], 0, -1, { as: 'guide' }), nudge([12, 7], 0, 1, { as: 'block' }), nudge([12, 17], 0, -1, { as: 'block' }), nudge([12, 7], 0, 1, { as: 'guide' })],
  },
  'distribute-vertical-top': {
    verb: 'the blocks rise to their top guides',
    parts: [null, null, nudge([12, 7.5], 0, -2.2, { as: 'block' }), nudge([12, 19.5], 0, -2.2, { as: 'block', delay: 0.08 })],
  },
  distribution: {
    verb: 'the box lid hops and the routes below redraw',
    parts: [beat([12, 11.5], { as: 'box', delay: 0.3 }), hop([12, 4], 1.2, { as: 'lid' }), draw({ as: 'label', delay: 0.1 }), retrace({ as: 'routes', delay: 0.2 })],
  },

  // --- divide -----------------------------------------------------------------------------------
  'divide-sign-circle': {
    verb: 'the divide sign turns a half and the circle answers',
    parts: [lap(C, 180, { as: 'sign', dur: 0.7 }), beat(C, { as: 'ring', delay: 0.34 })],
  },
  'divide-sign-square': {
    verb: 'the divide sign squeezes flat and springs back',
    parts: [flex('Y', C, C, [1, 0.3, 1.12, 0.98, 1], { as: 'sign' }), null],
  },
  'divide-sign': {
    verb: 'the two dots hop away from the bar and drop back',
    parts: [flex('X', C, C, [1, 1.1, 0.96, 1, 1], { as: 'bar' }), ride([12, 5.5], out(0, -1.4), { as: 'dot' }), ride([12, 18.5], out(0, 1.4), { as: 'dot' })],
  },

  // --- dna --------------------------------------------------------------------------------------
  'dna-01': {
    verb: 'the double helix twists a half turn',
    parts: [flip(C, 1, { as: 'helix' })],
  },
  'dna-off': {
    verb: 'the slash cuts across and the helix fades',
    parts: [dim({ as: 'helix', delay: 0.1 }), draw({ as: 'slash' })],
  },
  dna: {
    verb: 'the strands twist around the cell',
    parts: [pop(C, 1.08, { as: 'cell', delay: 0.2 }), around(C, [17.9, 6.1], [0, 20, -8, 3, 0], { as: 'strand' }), around(C, [6.1, 17.9], [0, 20, -8, 3, 0], { as: 'strand' })],
  },

  // --- do not touch -------------------------------------------------------------------------------
  'do-not-touch-01': {
    verb: 'the slash cuts across and the hand recoils',
    parts: [nudge([10.7, 14.8], -0.6, 0.8, { as: 'hand', delay: 0.1 }), nudge([13.8, 8.8], -0.6, 0.8, { as: 'hand', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'do-not-touch': {
    verb: 'the hand reaches and the slash blocks it',
    parts: [nudge([10.7, 14.8], 0.6, -0.8, { as: 'hand' }), nudge([13.8, 8.8], 0.6, -0.8, { as: 'hand' }), shake(C, { as: 'slash', delay: 0.16 })],
  },
  'do-not-touch-02': {
    verb: 'the slash cuts across and the hand pulls back',
    parts: [nudge([11.2, 14.3], 0.8, 0.8, { as: 'hand', delay: 0.1 }), nudge([14.5, 8.8], 0.8, 0.8, { as: 'hand', delay: 0.1 }), draw({ as: 'slash' })],
  },

  // --- docs -----------------------------------------------------------------------------------------
  'doc-01': {
    verb: 'the DOC label hops under the page',
    parts: [null, hop([12, 19], 1.2, { as: 'label' })],
  },
  doc: {
    verb: 'the page folds its corner and the label answers',
    parts: [retrace({ as: 'page' }), beat([12, 19], { as: 'label', delay: 0.3 })],
  },
  'doc-02': {
    verb: 'the DOC label stamps onto the page',
    parts: [stamp([14, 16.5], { as: 'label' }), null],
  },
  dock: {
    verb: 'the dock rises up from the screen edge',
    parts: [null, ride([12, 15], out(0, -1.2), { as: 'dock' })],
  },

  // --- doctors --------------------------------------------------------------------------------------
  'doctor-01': {
    verb: 'the doctor nods and the stethoscope swings',
    parts: [null, null, around([8.5, 13], [8.5, 16.5], [0, 10, -6, 2, 0], { as: 'stethoscope' }), hop([12, 6], 0.8, { as: 'head' }), null],
  },
  doctor: {
    verb: 'the stethoscope bell pops and the doctor nods',
    parts: [null, null, null, hop([12, 6], 0.8, { as: 'head', delay: 0.12 }), pop([16, 19.3], 2, { as: 'bell' })],
  },
  'doctor-02': {
    verb: 'the cross on the cap turns a quarter as the doctor nods',
    parts: [null, hop([12, 8], 0.8, { as: 'head' }), lap([12, 5], 90, { as: 'cross', dur: 0.62, delay: 0.1 })],
  },
  'doctor-03': {
    verb: 'the cross on the coat turns a quarter as the doctor nods',
    parts: [null, hop([12, 6], 0.8, { as: 'head' }), lap([16, 17.5], 90, { as: 'cross', dur: 0.62, delay: 0.1 })],
  },
  'document-code': {
    verb: 'the brackets part on the page and the corner folds',
    parts: [nudge([19.5, 19], 0.8, 0, { as: 'bracket' }), nudge([12.5, 19], -0.8, 0, { as: 'bracket' }), null, retrace({ as: 'fold' })],
  },
  'document-validation': {
    verb: 'the validation check writes in its badge',
    parts: [draw({ as: 'check' }), null, beat([17, 7], { as: 'badge', delay: 0.3 }), draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.2 })],
  },

  // --- dollars -----------------------------------------------------------------------------------------
  'dollar-01': {
    verb: 'the dollar sign rewrites itself',
    parts: [sweep({ as: 's' }), null],
  },
  'dollar-02': {
    verb: 'the dollar sign flips over on its bar',
    parts: [flip(C, 1, { as: 's' }), null],
  },
  'dollar-circle': {
    verb: 'the dollar coin flips',
    parts: [flip(C, 1, { as: 'coin' }), flip(C, 1, { as: 'coin' })],
  },
  'dollar-receive-01': {
    verb: 'the arrow pulls the money in toward the sign',
    parts: [beat([6.5, 12], { as: 's', delay: 0.26 }), null, nudge([18.3, 12], -1.6, 0, { as: 'arrow' })],
  },
  'dollar-receive': {
    verb: 'the incoming arrow rewrites and the sign hops',
    parts: [hop([6.5, 12], 1, { as: 's', delay: 0.2 }), hop([6.5, 12], 1, { as: 's', delay: 0.2 }), retrace({ as: 'arrow' })],
  },
  'dollar-receive-02': {
    verb: 'the arrow pulls in and the sign flips',
    parts: [flip([6.5, 12], 1, { as: 's', delay: 0.2 }), flip([6.5, 12], 1, { as: 's', delay: 0.2 }), nudge([18.3, 12], -1.6, 0, { as: 'arrow' })],
  },
  'dollar-send-01': {
    verb: 'the arrow pushes the money out',
    parts: [beat([6.5, 12], { as: 's' }), null, nudge([18.3, 12], 1.6, 0, { as: 'arrow', delay: 0.06 })],
  },
  'dollar-send': {
    verb: 'the outgoing arrow rewrites as the sign hops',
    parts: [hop([6.5, 12], 1, { as: 's' }), hop([6.5, 12], 1, { as: 's' }), retrace({ as: 'arrow', delay: 0.1 })],
  },
  'dollar-send-02': {
    verb: 'the sign flips and the arrow pushes out',
    parts: [flip([6.5, 12], 1, { as: 's' }), flip([6.5, 12], 1, { as: 's' }), nudge([18.3, 12], 1.6, 0, { as: 'arrow', delay: 0.16 })],
  },
  'dollar-sign': {
    verb: 'the dollar sign swells and the bar stretches through it',
    parts: [swell(C, C, [1, 0.9, 1.06, 0.99, 1], { as: 's' }), flex('Y', C, C, [1, 1.12, 0.96, 1, 1], { as: 'bar' })],
  },
}

export default settleSpecs(specs)
