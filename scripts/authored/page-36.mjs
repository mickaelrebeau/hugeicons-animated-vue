/**
 * Page 36 — hospital-bed-02 → image-remove-02.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted image-01 sits in this span and is skipped.
 *
 * Houses keep their walls and let one detail act (chimney, door, window,
 * plug, panel). Images keep the frame and let the corner badge act while the
 * landscape line answers. Ice creams wobble and drip.
 *
 * Identical-geometry pairs get different jobs: hotel / hotel-01, house /
 * house-01, html-file / html-file-01, ice-cream / ice-cream-01, image-add /
 * image-add-01, image-delete / image-delete-01, image-done / image-done-01,
 * image-not-found / image-not-found-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  around,
  beat,
  blink,
  burst,
  dim,
  draw,
  fall,
  flex,
  flip,
  glint,
  hold,
  hop,
  lap,
  nudge,
  pop,
  puff,
  rays,
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
/** The landscape line inside a picture dips and settles. */
const hill = (c = [13, 15.5], o = {}) => flex('Y', [c[0], 21], c, [1, 0.8, 1.06, 1, 1], { as: 'hill', delay: 0.16, ...o })
const door = (c, w = 2, o = {}) => flex('X', [c[0] - w, c[1]], c, [1, 0.2, 0.2, 1, 1], { as: 'door', ...o })
const smoke = (x, y, o = {}) => puff(x, y, 0.7, 0.4, -2, o)

// ---------------------------------------------------------------------------

const specs = {
  'hospital-bed-02': {
    verb: 'the scissor legs raise the bed and lower it',
    parts: [
      ride([12, 8], out(0, -1.4), { as: 'bed' }),
      flex('Y', [13.3, 17.5], [13.3, 13.8], [1, 1.2, 0.96, 1, 1], { as: 'leg' }),
      flex('Y', [10.8, 17.5], [10.8, 13.8], [1, 1.2, 0.96, 1, 1], { as: 'leg' }),
      null,
      null,
      ride([8, 4.4], out(0, -1.4), { as: 'bed' }),
    ],
  },
  'hospital-bed': {
    verb: 'the patient settles onto the pillow and the frame dips',
    parts: [ride([12, 8], out(0, 0.6), { as: 'mattress', delay: 0.1 }), null, null, null, null, null, ride([8, 4.4], out(0, 0.8), { as: 'pillow' })],
  },
  'hospital-location': {
    verb: 'the pin drops and the H flips inside it',
    parts: [hop([12.5, 12.1], 1.2, { as: 'pin' }), flip([12.5, 10], 1, { as: 'h', delay: 0.14 })],
  },
  hospital: {
    verb: 'the windows light up floor by floor and the door opens',
    parts: [pop([12, 4], 1.15, { as: 'sign', delay: 0.4 }), null, blink({ as: 'window', delay: 0.2 }), blink({ as: 'window', delay: 0.1 }), blink({ as: 'window' }), blink({ as: 'window', delay: 0.3 }), null, door([12, 19.5], 2.5)],
  },
  'hot-air-balloon': {
    verb: 'the balloon rises and sways with its basket',
    parts: [
      around([12, 21], [12, 10], [0, -4, 3, -1, 0], { as: 'balloon' }),
      around([12, 21], [12, 10], [0, -4, 3, -1, 0], { as: 'balloon' }),
      around([12, 21], [12, 20], [0, -4, 3, -1, 0], { as: 'basket' }),
    ],
    wrap: { as: 'lift', transform: ['translateY(0px)', 'translateY(-1.4px)', 'translateY(-1.4px)', 'translateY(0px)'], times: [0, 0.4, 0.6, 1], ease: 'easeInOut', dur: 0.9 },
  },
  'hot-price': {
    verb: 'the flame flickers and the percent tag spins',
    parts: [{ as: 'flame', origin: C, transform: ['scaleY(1) skewX(0deg)', 'scaleY(1.06) skewX(-3deg)', 'scaleY(0.96) skewX(2deg)', 'scaleY(1.03) skewX(-1deg)', 'scaleY(1) skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }, lap([12, 15], 180, { as: 'percent', dur: 0.8 }), lap([12, 15], 180, { as: 'percent', dur: 0.8 }), lap([12, 15], 180, { as: 'percent', dur: 0.8 })],
  },
  'hot-tube': {
    verb: 'the steam curls up and the bather bobs',
    parts: [null, fall([17, 8], 0, -2, { as: 'steam' }), null, hop([9, 8.5], 0.8, { as: 'bather', delay: 0.1 })],
  },
  hotdog: {
    verb: 'the sausage slides out of the bun and back with a squirt of mustard',
    parts: [null, ride([9.8, 7.9], out(-1, -0.6), { as: 'sausage' }), null, retrace({ as: 'mustard', delay: 0.16 })],
  },
  'hotel-01': {
    verb: 'the windows light up in turn',
    parts: [null, null, null, null, blink({ as: 'window' }), blink({ as: 'window', delay: 0.2 })],
  },
  hotel: {
    verb: 'the H sign flips and the door opens',
    parts: [null, flip([12, 9.5], 1, { as: 'sign' }), door([12, 19]), hop([12, 3], 0.6, { as: 'roof', delay: 0.1 }), null, null],
  },
  'hotel-02': {
    verb: 'the dome rises on the roof and the H flips',
    parts: [null, ride([12, 4.5], out(0, -1), { as: 'dome' }), door([12, 19]), null, null, null, flip([12, 9.5], 1, { as: 'sign', delay: 0.1 })],
  },
  'hotel-bell': {
    verb: 'the bell is struck: the dome dips and the ring lines flash',
    parts: [null, flex('Y', [12, 17], [12, 11.8], [1, 0.9, 1.04, 1, 1], { as: 'dome', dur: 0.4 }), ride([12, 5], [[0, 0], [0, 1], [0, -0.2], [0, 0], [0, 0]], { as: 'knob', dur: 0.4 }), { as: 'ring', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.7 }, { as: 'ring', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.7 }],
  },
  'hotspot-offline': {
    verb: 'the slash cuts across and the signal arcs fade',
    parts: [null, dim({ as: 'arc', delay: 0.1 }), dim({ as: 'arc', delay: 0.1 }), dim({ as: 'arc', delay: 0.14 }), dim({ as: 'arc', delay: 0.14 }), draw({ as: 'slash' })],
  },
  hotspot: {
    verb: 'the signal arcs broadcast out from the dot',
    parts: [pop([12, 14], 1.25, { as: 'dot' }), wave([12, 12], { delay: 0.2 }), wave([12, 13], { delay: 0.1 })],
  },
  'hourglass-off': {
    verb: 'the slash cuts across and the sand stops',
    parts: [null, dim({ as: 'glass', delay: 0.1 }), null, draw({ as: 'slash' }), dim({ as: 'glass', delay: 0.1 })],
  },
  hourglass: {
    verb: 'the hourglass flips over',
    parts: [lap(C, 180, { as: 'glass' }), lap(C, 180, { as: 'glass' }), lap(C, 180, { as: 'glass' }), lap(C, 180, { as: 'glass' })],
  },

  // --- houses ------------------------------------------------------------------------------
  'house-01': {
    verb: 'the chimney puffs smoke',
    parts: [null, null, null, null, ride([18, 8.5], out(0, -0.6), { as: 'chimney' }), null, null, null],
    extras: [smoke(18, 5)],
  },
  house: {
    verb: 'the windows blink and the door opens',
    parts: [null, null, null, null, null, blink({ as: 'window' }), blink({ as: 'window', delay: 0.2 }), flex('Y', [16.5, 22], [16.5, 20], [1, 0.2, 0.2, 1, 1], { as: 'door', delay: 0.1 })],
  },
  'house-02': {
    verb: 'the small house hops up beside the tall one',
    parts: [hop([7, 17.8], 1.2, { as: 'cottage' }), hop([7, 13], 1.2, { as: 'cottage' }), hop([7, 19.5], 1.2, { as: 'cottage' }), null, null, blink({ as: 'window', delay: 0.2 }), null],
  },
  'house-03': {
    verb: 'the roofline redraws and the window lights',
    parts: [retrace({ as: 'roof' }), null, null, null, pop([7, 11.3], 2, { as: 'light', delay: 0.2 }), null, null],
  },
  'house-04': {
    verb: 'the tree beside the house sways',
    parts: [null, null, around([3.5, 20], [3.5, 12], [0, -10, 7, -3, 0], { as: 'tree' }), around([3.5, 20], [3.5, 17], [0, -10, 7, -3, 0], { as: 'tree' }), null, door([14.5, 17]), null],
  },
  'house-05': {
    verb: 'the roof lifts and the chimney puffs',
    parts: [null, null, ride([12, 6.5], out(0, -1), { as: 'roof' }), null, null, null, ride([5, 5.3], out(0, -1), { as: 'roof' })],
    extras: [smoke(5, 2, { delay: 0.1 })],
  },
  'house-heart': {
    verb: 'the heart beats inside the house',
    parts: [null, { as: 'heart', origin: [12, 14], transform: ['scale(1)', 'scale(1.18)', 'scale(0.98)', 'scale(1.1)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: 'easeInOut', dur: 0.72 }],
  },
  'house-plug': {
    verb: 'the plug pushes into the house and settles',
    parts: [ride([10, 11.3], out(0, -1), { as: 'plug' }), ride([14, 11.3], out(0, -1), { as: 'plug' }), ride([12, 14.8], out(0, -1), { as: 'plug' }), flex('Y', [12, 21.3], [12, 19.3], [1, 1.25, 0.95, 1, 1], { as: 'cord' }), null],
  },
  'house-plus': {
    verb: 'the plus spins beside the door',
    parts: [lap([18, 18.5], 90, { as: 'plus', dur: 0.6 }), null, door([11, 17.5])],
  },
  'house-solar-panel': {
    verb: 'the panel catches the sun and the bolt flashes',
    parts: [{ as: 'panel', opacity: [1, 0.3, 1], times: [0, 0.2, 0.5], ease: 'easeInOut', dur: 0.8 }, null, pop([12, 18], 1.3, { as: 'bolt', delay: 0.2 }), { as: 'panel', opacity: [1, 0.3, 1], times: [0, 0.2, 0.5], ease: 'easeInOut', dur: 0.8 }, null],
  },
  'house-wifi': {
    verb: 'the wifi arcs light up in the house',
    parts: [wave([12, 13.5]), null],
  },

  // --- html, misc ---------------------------------------------------------------------------
  'html-file-01': {
    verb: 'the HTML letters hop in turn below the file',
    parts: [null, hop([12, 19.5], 1.2, { as: 'label' })],
  },
  'html-file': {
    verb: 'the file lifts off its label',
    parts: [ride([11.5, 8], out(0, -1), { as: 'file' }), flex('X', [12, 19.5], [12, 19.5], [1, 0.9, 1.04, 1, 1], { as: 'label', delay: 0.14 })],
  },
  'html-file-02': {
    verb: 'the HTML label slides in from the right',
    parts: [null, ride([13.5, 16.5], out(1.4, 0), { as: 'label' })],
  },
  'html-five': {
    verb: 'the shield stamps and the 5 rewrites',
    parts: [stamp([12.5, 12], { as: 'shield' }), sweep({ as: 'five', delay: 0.1 })],
  },
  hugeicons: {
    verb: 'the cup lid lifts off and lands',
    parts: [ride([12, 9.5], out(0, -1.2), { as: 'lid' }), beat([12, 15.5], { as: 'cup', delay: 0.24 }), ride([12, 5.8], out(0, -1.2), { as: 'lid' })],
  },
  humidity: {
    verb: 'the water line inside the drop sloshes',
    parts: [swell([12, 22], [12, 11.8], [1, 1.04, 0.98, 1, 1], { as: 'drop' }), { as: 'water', origin: [12, 13.7], transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(6deg)', 'rotate(-2deg)', 'rotate(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  hut: {
    verb: 'the thatch roof rustles and the door opens',
    parts: [null, door([12, 19.4], 3), shake([12, 7], { as: 'roof' }), null, null, null, null],
  },
  'hydro-power': {
    verb: 'the water wheel arc turns and the drop glows',
    parts: [lap(C, 90, { as: 'wheel', dur: 0.8 }), pop([12, 11.9], 1.15, { as: 'drop', delay: 0.2 })],
  },
  hyperbole: {
    verb: 'the two branches of the hyperbola trace toward the axes',
    parts: [null, null, retrace({ as: 'branch' }), retrace({ as: 'branch', delay: 0.1 })],
  },

  // --- ice ----------------------------------------------------------------------------------
  'ice-cream-01': {
    verb: 'the scoops wobble and the cherry hops',
    parts: [around([12, 19], [12, 15], [0, -4, 3, -1, 0], { as: 'scoop' }), hop([12, 3.5], 1.2, { as: 'cherry', delay: 0.1 }), null, around([12, 19], [11.8, 6.7], [0, -4, 3, -1, 0], { as: 'scoop' }), around([12, 19], [7.7, 6], [0, -4, 3, -1, 0], { as: 'scoop' }), around([12, 19], [16.3, 6], [0, -4, 3, -1, 0], { as: 'scoop' })],
  },
  'ice-cream': {
    verb: 'the stick twirls and the scoops spin with it',
    parts: [flex('X', C, [12, 15], [1, 0.9, 1.04, 1, 1], { as: 'scoop' }), lap([12, 3.5], 360, { as: 'cherry' }), flex('X', [12, 20.5], [12, 20.5], [1, 0.6, 1.1, 1, 1], { as: 'stick' }), null, null, null],
  },
  'ice-cream-02': {
    verb: 'the soft-serve swirl wiggles on the cone',
    parts: [null, { as: 'swirl', origin: [12, 12], transform: ['skewX(0deg)', 'skewX(-8deg)', 'skewX(6deg)', 'skewX(-2deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7 }],
  },
  'ice-cream-03': {
    verb: 'the scoop plops onto the cone',
    parts: [ride([12, 8.2], out(0, -1.6), { as: 'scoop' }), beat([12, 16.5], { as: 'cone', delay: 0.26 })],
  },
  'ice-cream-04': {
    verb: 'the scoop melts a little into the cup',
    parts: [flex('Y', [12.4, 13], [12.4, 7.5], [1, 0.85, 1.04, 1, 1], { as: 'scoop' }), null],
  },
  'ice-cubes': {
    verb: 'the cubes clink: the top one drops and the others jostle',
    parts: [shake([6.5, 17.5], { as: 'cube', delay: 0.24, dur: 0.4 }), shake([16.8, 15.9], { as: 'cube', delay: 0.24, dur: 0.4 }), ride([11, 7], out(0, -1.6), { as: 'cube' })],
  },
  'ice-hockey': {
    verb: 'the stick swings and the puck slides away',
    parts: [around([22, 3], [11.8, 11.7], [0, -14, 6, -1, 0], { as: 'stick', times: [0, 0.36, 0.5, 0.76, 1] }), null, ride([16, 19], [[0, 0], [0, 0], [2, 0], [0, 0], [0, 0]], { as: 'puck', times: [0, 0.4, 0.62, 0.9, 1] })],
  },
  'ice-skating': {
    verb: 'the skate glides forward on its blade',
    parts: [ride([11.7, 9.9], out(-1.4, 0), { as: 'boot' }), ride([13.3, 9.8], out(-1.4, 0), { as: 'boot' }), ride([11.8, 7.3], out(-1.4, 0), { as: 'boot' }), ride([12.1, 19], out(-1.4, 0), { as: 'blade' }), ride([10.5, 19], out(-1.4, 0), { as: 'blade' })],
    extras: [trail('M17 21H21M18 19H21', 1.4)],
  },
  ico: {
    verb: 'the ICO letters flip inside the coin',
    parts: [null, flip([12.5, 12], 1, { as: 'label' })],
  },
  iconjar: {
    verb: 'the jar lid twists open and closes',
    parts: [null, around([12, 4.5], [12, 4.5], [0, -12, 8, -2, 0], { as: 'lid' })],
  },

  // --- identity ----------------------------------------------------------------------------
  'id-card-lanyard': {
    verb: 'the card swings on its lanyard',
    parts: [around([12, 2], [12, 13], [0, 6, -4, 2, 0], { as: 'card' }), around([12, 2], [12, 8], [0, 6, -4, 2, 0], { as: 'card' }), null, around([12, 2], [12, 14.5], [0, 6, -4, 2, 0], { as: 'card' }), around([12, 2], [12, 19.3], [0, 6, -4, 2, 0], { as: 'card' })],
  },
  'id-not-verified': {
    verb: 'the X rattles on the badge corner',
    parts: [shake([17.5, 18], { as: 'x' }), null, null, null, null],
  },
  'id-verified': {
    verb: 'the check seal stamps and the face pops',
    parts: [stamp([17.5, 18], { as: 'seal' }), pop([11, 12], 1.2, { as: 'face', delay: 0.14 }), null, null],
  },
  id: {
    verb: 'the badge clip lifts and the face on the card nods',
    parts: [hop([12, 14], 0.8, { as: 'face', delay: 0.1 }), null, ride([12, 4], out(0, -0.8), { as: 'clip' })],
  },
  'idea-01': {
    verb: 'the bulb lights and its rays flash out',
    parts: [pop([12, 10.2], 1.08, { as: 'bulb' }), pop([12, 2.5], 1.8, { as: 'ray', delay: 0.1 }), pop([21.5, 12], 1.8, { as: 'ray', delay: 0.14 }), pop([2.5, 12], 1.8, { as: 'ray', delay: 0.14 }), pop([18.7, 5.3], 1.8, { as: 'ray', delay: 0.12 }), pop([5.3, 5.3], 1.8, { as: 'ray', delay: 0.12 }), null],
  },
  idea: {
    verb: 'the filament flickers on inside the bulb',
    parts: [null, null, null, { as: 'filament', opacity: [1, 0.1, 1, 0.3, 1], times: [0, 0.15, 0.3, 0.45, 0.7], ease: 'linear', dur: 0.8 }],
    extras: [{ ...burst(rays(12, 8, 9.5, 11.5, 8)), delay: 0.2 }],
  },
  identification: {
    verb: 'the scan corners close in on the face',
    parts: [swell(C, C, [1, 0.9, 1.04, 1, 1], { as: 'frame' }), pop(C, 1.1, { as: 'face', delay: 0.16 })],
  },
  'identity-card': {
    verb: 'the photo pops and the text lines rewrite',
    parts: [null, hop([8, 14.6], 0.8, { as: 'photo' }), hop([8, 9.8], 0.8, { as: 'photo' }), retrace({ as: 'lines', delay: 0.1 })],
  },

  // --- images -------------------------------------------------------------------------------
  'image-02': {
    verb: 'the sun rises over the hills',
    parts: [hill([12, 14]), ride([15.5, 7.5], out(0, -1.2), { as: 'sun' }), null],
  },
  'image-03': {
    verb: 'the sun sets behind the hill and comes back',
    parts: [null, ride([8.5, 8.5], out(0, 1.6), { as: 'sun' }), hill([12, 14.5], { delay: 0 })],
  },
  'image-actual-size': {
    verb: 'the 1:1 numbers flip in the lens',
    parts: [swell([4.5, 19.5], [13.5, 10.5], [1, 1.06, 0.98, 1, 1], { as: 'lens' }), null, flip([9.5, 10.5], 1, { as: 'one', delay: 0.06 }), flip([17, 10.5], 1, { as: 'one', delay: 0.12 }), pop([13.5, 10.5], 1.6, { as: 'colon' })],
  },
  'image-add-01': {
    verb: 'the plus pops and the picture answers',
    parts: [null, hill(), pop([18, 6], 1.3, { as: 'plus' })],
  },
  'image-add': {
    verb: 'the plus spins on the corner',
    parts: [null, null, lap([18, 6], 90, { as: 'plus', dur: 0.6 })],
  },
  'image-add-02': {
    verb: 'the plus spins and the hills ripple',
    parts: [hill([12, 14]), null, lap([18, 6], 90, { as: 'plus', dur: 0.6 })],
  },
  'image-composition-oval': {
    verb: 'the oval frame breathes and the sun pops',
    parts: [swell(C, C, [1, 1.04, 0.98, 1, 1], { as: 'frame' }), hill([12, 13]), pop([14.5, 7.5], 2, { as: 'sun' })],
  },
  'image-composition': {
    verb: 'the curved frame flexes like a lens',
    parts: [flex('X', C, C, [1, 0.94, 1.03, 1, 1], { as: 'frame' }), hill([14.5, 15.2]), pop([7.5, 8.5], 1.3, { as: 'sun' })],
  },
  'image-counter-clockwise': {
    verb: 'the arrow swings back counter-clockwise and the picture tilts',
    parts: [around([10, 14], [10, 14], [0, -10, 4, -1, 0], { as: 'picture', delay: 0.1 }), around([10, 14], [10, 15.5], [0, -10, 4, -1, 0], { as: 'picture', delay: 0.1 }), around([17.5, 8], [17.5, 8], [0, -40, 6, -2, 0], { as: 'arrow' }), around([10, 14], [7.5, 11.5], [0, -10, 4, -1, 0], { as: 'picture', delay: 0.1 })],
  },
  'image-crop': {
    verb: 'the crop corners slide in and out',
    parts: [ride([13, 11], out(-1, 1), { as: 'corner' }), null, ride([11, 13], out(1, -1), { as: 'corner' }), null],
  },
  'image-delete-01': {
    verb: 'the X spins away and the picture fades with it',
    parts: [dim({ as: 'hill', delay: 0.1 }), null, lap([18.5, 5.5], 90, { as: 'x', dur: 0.6 })],
  },
  'image-delete': {
    verb: 'the X rattles on the corner',
    parts: [null, null, shake([18.5, 5.5], { as: 'x' })],
  },
  'image-delete-02': {
    verb: 'the X rattles and the hills shiver',
    parts: [shake([12, 14], { as: 'hill', delay: 0.1 }), null, shake([18.5, 5.5], { as: 'x' })],
  },
  'image-done-01': {
    verb: 'the check ticks and the hill rises',
    parts: [null, hill(), draw({ as: 'check' })],
  },
  'image-done': {
    verb: 'the check pops on the corner',
    parts: [null, null, pop([18, 5], 1.3, { as: 'check' })],
  },
  'image-done-02': {
    verb: 'the check ticks and the hills ripple',
    parts: [hill([12, 14]), null, draw({ as: 'check' })],
  },
  'image-download-02': {
    verb: 'the arrow drops on the corner and the hills answer',
    parts: [hill([12, 14], { delay: 0.26 }), null, ride([18.5, 6], out(0, 1.4), { as: 'arrow' })],
  },
  'image-download': {
    verb: 'the arrow drops on the corner',
    parts: [null, null, ride([19.5, 6], out(0, 1.4), { as: 'arrow' })],
  },
  'image-flip-horizontal': {
    verb: 'the two halves swap across the vertical axis',
    parts: [ride([6.1, 11.9], out(1.6, 0), { as: 'half' }), ride([17.9, 11.9], out(-1.6, 0), { as: 'half' })],
  },
  'image-flip-vertical': {
    verb: 'the two halves swap across the horizontal axis',
    parts: [ride([12.1, 6.1], out(0, 1.6), { as: 'half' }), ride([12.1, 17.9], out(0, -1.6), { as: 'half' })],
  },
  'image-not-found-01': {
    verb: 'the slash cuts across and the sun fades',
    parts: [dim({ as: 'sun', delay: 0.1 }), draw({ as: 'slash' }), null, dim({ as: 'hill', delay: 0.1 })],
  },
  'image-not-found': {
    verb: 'the picture shakes as if lost',
    parts: [null, null, shake(C, { as: 'frame' }), shake([12, 13.8], { as: 'frame' })],
  },
  'image-not-found-02': {
    verb: 'the slash cuts across and the torn corner droops',
    parts: [around([5.9, 21], [9.4, 17], [0, 10, 6, 0, 0], { as: 'tear', delay: 0.1 }), null, dim({ as: 'hill', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'image-play': {
    verb: 'the play badge pushes forward and the picture blinks',
    parts: [null, null, hill([7, 13.5]), pop([15.5, 7.5], 2, { as: 'sun', delay: 0.1 }), nudge([18, 17.5], 1, 0, { as: 'play' })],
  },
  'image-remove-01': {
    verb: 'the minus shrinks on the corner',
    parts: [null, null, flex('X', [18, 6], [18, 6], [1, 0.3, 1.1, 1, 1], { as: 'minus' })],
  },
  'image-remove-02': {
    verb: 'the minus slides off and the hills sink',
    parts: [hill([12, 14]), null, ride([18, 6], out(1.2, 0), { as: 'minus' })],
  },
}

export default settleSpecs(specs)
