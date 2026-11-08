/**
 * Page 50 — package-delivered-01 → pavilon.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * paint-brush-02, party, pause. The hidden handcrafted panel-left sits in
 * this span and is skipped too.
 *
 * Packages keep the box and let the badge act (-01 boxes have a lid strip
 * and a handle bar). Panels slide their divider to open or close. Pathfinder
 * icons push their two squares into each other the way the operation reads.
 * Pacman chomps.
 *
 * Identical-geometry pairs get different jobs: package-dimensions / -01,
 * pacman / pacman-01, paint-brush / paint-brush-01, pan / pan-01,
 * parabola / parabola-01, paragraph-bullets-point / -01,
 * pathfinder-merge / pathfinder-unite.
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
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** A -01 box: [body, lid, lid seam, handle, badge]. The handle flexes when the badge lands. */
const box01 = (badge, o = {}) => [null, null, null, flex('X', [12, 10.5], [12, 10.5], [1, 0.4, 1.08, 1, 1], { as: 'handle', delay: 0.2, ...o }), badge]
/** Two overlapping squares (top-left A, bottom-right B) slide into each other. */
const meet = (c, dx, o = {}) => ride(c, out(dx, dx), { as: 'shape', ...o })
const chomp = (c, o = {}) => ({ as: 'pacman', origin: c, transform: ['scaleY(1)', 'scaleY(0.82)', 'scaleY(1)', 'scaleY(0.82)', 'scaleY(1)'], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'easeInOut', dur: 0.7, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- packages ---------------------------------------------------------------------------------
  'package-delivered-01': {
    verb: 'the check ticks on the box corner',
    parts: box01(draw({ as: 'check' })),
  },
  'package-delivered': {
    verb: 'the box lands and the check ticks',
    parts: [hop([12, 14.5], 1, { as: 'box' }), draw({ as: 'check', delay: 0.3 }), hop([12, 6.5], 1, { as: 'box' }), hop([7, 12.5], 1, { as: 'box' }), hop([12, 6.5], 1, { as: 'box' })],
  },
  'package-dimensions-01': {
    verb: 'the measuring rulers stretch along the box',
    parts: [null, null, null, flex('X', [7.5, 3.5], [14.5, 3.5], [1, 0.4, 1.06, 1, 1], { as: 'ruler' }), flex('Y', [3.5, 7.5], [3.5, 14.5], [1, 0.4, 1.06, 1, 1], { as: 'ruler', delay: 0.1 })],
  },
  'package-dimensions': {
    verb: 'the box grows to fit its rulers',
    parts: [swell([7.5, 21.5], [14.5, 14.5], [1, 0.9, 1.04, 1, 1], { as: 'box' }), swell([7.5, 21.5], [14.5, 9.5], [1, 0.9, 1.04, 1, 1], { as: 'box' }), swell([7.5, 21.5], [12, 18.5], [1, 0.9, 1.04, 1, 1], { as: 'box' }), null, null],
  },
  'package-dimensions-02': {
    verb: 'the rulers measure the box edges in turn',
    parts: [null, null, null, flex('X', [7, 3], [14, 3], [1, 0.4, 1.06, 1, 1], { as: 'ruler' }), flex('Y', [4, 7], [4, 14], [1, 0.4, 1.06, 1, 1], { as: 'ruler', delay: 0.1 })],
  },
  'package-moving-01': {
    verb: 'the box slides forward and the speed lines trail',
    parts: [ride([12, 14.5], out(1.2, 0), { as: 'box' }), ride([12, 5], out(1.2, 0), { as: 'box' }), ride([12, 5], out(1.2, 0), { as: 'box' }), ride([12, 10.5], out(1.2, 0), { as: 'box' }), ride([5.5, 17], out(-0.8, 0), { as: 'speed', delay: 0.06 })],
  },
  'package-moving': {
    verb: 'the box rocks on the move and the speed lines flicker',
    parts: [around([18, 22], [12, 14.3], [0, -5, 3, -1, 0], { as: 'box' }), around([18, 22], [13, 6.5], [0, -5, 3, -1, 0], { as: 'box' }), around([18, 22], [13, 6.5], [0, -5, 3, -1, 0], { as: 'box' }), dim({ as: 'speed' }), dim({ as: 'speed', delay: 0.1 })],
  },
  'package-open': {
    verb: 'the box opens and the sparkle bursts out of the top',
    parts: [beat([12, 14], { as: 'box', delay: 0.1 }), ride([12, 3.5], out(0, -1.2), { as: 'sparkle' })],
  },
  'package-out-of-stock': {
    verb: 'the X rattles above the empty box',
    parts: [null, shake([12, 4], { as: 'x' })],
  },
  'package-process-01': {
    verb: 'the clock sweeps on the box corner',
    parts: box01(lap([17.5, 17.5], 360, { as: 'clock', dur: 0.9 })),
  },
  'package-process': {
    verb: 'the gear-clock turns on the box corner',
    parts: [null, lap([18, 18], 360, { as: 'clock', dur: 0.9 }), null, null, null],
  },
  'package-receive-01': {
    verb: 'the arrow drops onto the box corner',
    parts: box01(ride([18.5, 18], out(0, 1.4), { as: 'arrow' })),
  },
  'package-receive': {
    verb: 'the arrow drops into the box',
    parts: [beat([12, 13.5], { as: 'box', delay: 0.26 }), ride([12, 5.5], out(0, 2), { as: 'arrow' })],
  },
  'package-remove-01': {
    verb: 'the X rattles on the box corner',
    parts: box01(shake([19, 19], { as: 'x' })),
  },
  'package-remove': {
    verb: 'the X spins away on the box corner',
    parts: [null, lap([19, 18], 90, { as: 'x', dur: 0.6 }), null, null, null],
  },
  'package-search-01': {
    verb: 'the magnifier zooms on the box corner',
    parts: box01(swell([21.4, 21.4], [17.9, 17.9], [1, 1.2, 0.95, 1.03, 1], { as: 'lens' })),
  },
  'package-search': {
    verb: 'the magnifier scans over the box',
    parts: [null, null, null, null, ride([18, 18], [[0, 0], [-1, -0.8], [0, -1.2], [0.4, -0.4], [0, 0]], { as: 'lens', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  'package-sent-01': {
    verb: 'the arrow lifts off the box corner',
    parts: box01(ride([18.5, 18], out(0, -1.4), { as: 'arrow' })),
  },
  'package-sent': {
    verb: 'the arrow rises out of the box',
    parts: [beat([12, 13.5], { as: 'box', delay: 0.1 }), ride([12, 5.5], out(0, -2), { as: 'arrow' })],
  },
  package: {
    verb: 'the box hops and its tape pops',
    parts: [hop([12, 14.5], 1, { as: 'box' }), hop([12, 6.5], 1, { as: 'box' }), pop([7, 12.5], 1.6, { as: 'tape', delay: 0.2 }), hop([12, 6.5], 1, { as: 'box' })],
  },
  packaging: {
    verb: 'the lid lifts and the leaf mark sways',
    parts: [null, ride([11.7, 3.5], out(0, -1), { as: 'lid' }), around([6, 19], [10.2, 15], [0, -10, 6, -2, 0], { as: 'leaf', delay: 0.1 })],
  },

  // --- pacman --------------------------------------------------------------------------------
  'pacman-01': {
    verb: 'pacman chomps toward the pellet',
    parts: [ride([20, 12], out(-1.4, 0), { as: 'pellet' }), null, chomp([10, 12])],
  },
  pacman: {
    verb: 'pacman eats the pellet, which reappears',
    parts: [{ as: 'pellet', opacity: [1, 0, 0, 1], times: [0, 0.3, 0.7, 1], ease: 'easeInOut', dur: 0.8 }, flex('Y', [10.5, 7.5], [10.5, 7.5], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5 }), ride([10, 12], out(1.2, 0), { as: 'pacman' })],
  },
  'pacman-02': {
    verb: 'the ghost floats and its eyes look around',
    parts: [ride(C, [[0, 0], [0, -1], [0, 0], [0, -0.6], [0, 0]], { as: 'ghost', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.9 }), ride([12, 10], [[0, 0], [-1, -1], [1, -1], [0, -0.6], [0, 0]], { as: 'eyes', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.9 })],
  },
  paella: {
    verb: 'the pan sizzles: the ingredients hop in turn',
    parts: [null, hop([12, 11.8], 0.6, { as: 'food' }), pop([14, 6], 3, { as: 'pea', delay: 0.06 }), pop([18, 13.5], 3, { as: 'pea', delay: 0.12 }), pop([16.5, 16.5], 3, { as: 'pea', delay: 0.18 }), pop([8, 17], 3, { as: 'pea', delay: 0.24 }), pop([6, 9], 3, { as: 'pea', delay: 0.3 }), hop([12.5, 18.3], 0.6, { as: 'shrimp', delay: 0.1 }), hop([9.6, 6.6], 0.6, { as: 'shrimp', delay: 0.16 }), hop([17.5, 9.4], 0.6, { as: 'shrimp', delay: 0.22 }), hop([7.4, 13.3], 0.6, { as: 'shrimp', delay: 0.28 }), null, null],
  },
  'paint-board': {
    verb: 'the paint dots pop on the palette',
    parts: [null, pop([9.5, 8.5], 1.3, { as: 'paint' }), pop([16.5, 9.5], 1.3, { as: 'paint', delay: 0.1 }), pop([7, 15], 2.4, { as: 'paint', delay: 0.2 })],
  },
  'paint-brush-01': {
    verb: 'the brush paints a stroke',
    parts: [ride(C, [[0, 0], [-1, 1], [1, -0.6], [0, 0], [0, 0]], { as: 'brush' }), ride([8.8, 15.3], [[0, 0], [-1, 1], [1, -0.6], [0, 0], [0, 0]], { as: 'brush' })],
  },
  'paint-brush': {
    verb: 'the bristles flex as the brush presses',
    parts: [null, flex('X', [8.8, 15.3], [8.8, 15.3], [1, 1.2, 0.9, 1.04, 1], { as: 'bristles' })],
  },
  'paint-brush-03': {
    verb: 'the brush sweeps and the paint stroke draws',
    parts: [retrace({ as: 'stroke', delay: 0.1 }), around([22, 2], [13.5, 10.5], [0, -10, 6, -2, 0], { as: 'brush' })],
  },
  'paint-brush-04': {
    verb: 'the brush dabs down and the drip lands',
    parts: [ride([12.5, 8.5], out(0, 1), { as: 'brush' }), retrace({ as: 'drip', delay: 0.14 })],
  },
  'paint-bucket': {
    verb: 'the bucket tips and the drop falls',
    parts: [around([19, 12], [10.4, 11.5], [0, 12, 12, 0, 0], { as: 'bucket' }), fall([20, 19.5], 0, 2, { as: 'drop', delay: 0.16 })],
  },

  // --- pans ---------------------------------------------------------------------------------
  'pan-01': {
    verb: 'the pan flips the food',
    parts: [around([8, 16], [14.5, 9.5], [0, -10, 4, -1, 0], { as: 'pan' }), ride([14.5, 9.5], [[0, 0], [0.6, -2], [0, 0.3], [0, 0], [0, 0]], { as: 'food' }), around([8, 16], [6.4, 17.6], [0, -10, 4, -1, 0], { as: 'pan' })],
  },
  pan: {
    verb: 'the food sizzles in the pan',
    parts: [null, shake([14.5, 9.5], { as: 'food', dur: 0.5 }), null],
  },
  'pan-02': {
    verb: 'the pot lid lifts and the steam escapes',
    parts: [ride([15, 15.5], out(0, -0.6), { as: 'pot', delay: 0.1 }), around([9, 13], [8, 12], [0, -10, 4, -1, 0], { as: 'handle', delay: 0.1 }), ride([4.5, 8.5], out(-0.6, -0.6), { as: 'spoon' })],
  },
  'pan-03': {
    verb: 'the flames flicker under the pot and the steam curls',
    parts: [{ as: 'flame', origin: [16, 19.3], transform: ['scaleY(1)', 'scaleY(1.6)', 'scaleY(0.8)', 'scaleY(1.3)', 'scaleY(1)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7 }, null, null, fall([16.5, 6], 0, -1.6, { as: 'steam' }), null, around([10, 11], [5.5, 6.5], [0, -10, 4, -1, 0], { as: 'spoon', delay: 0.1 })],
  },

  // --- panels ---------------------------------------------------------------------------------
  'panel-bottom-close': {
    verb: 'the chevron pushes the bottom panel shut',
    parts: [null, ride([12, 16], [[0, 0], [0, 3], [0, 3], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.8 }), nudge([12, 10], 0, 1, { as: 'chevron' })],
  },
  'panel-left-close': {
    verb: 'the arrow pushes the left panel shut',
    parts: [null, ride([9, 12], [[0, 0], [-4, 0], [-4, 0], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.8 }), nudge([15.5, 12], -1, 0, { as: 'chevron' })],
  },
  'panel-left-dashed': {
    verb: 'the dashed divider marches down',
    parts: [null, { as: 'dashes', pathLength: [1, 0.4, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1 }],
  },
  'panel-left-open': {
    verb: 'the arrow pulls the left panel open',
    parts: [null, ride([9, 12], [[0, 0], [4, 0], [4, 0], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.8 }), nudge([14.5, 12], 1, 0, { as: 'chevron' })],
  },
  'panel-right-close': {
    verb: 'the arrow pushes the right panel shut',
    parts: [null, ride([15, 12], [[0, 0], [4, 0], [4, 0], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.8 }), nudge([9.5, 12], 1, 0, { as: 'chevron' })],
  },
  'panel-right-dashed': {
    verb: 'the dashed divider marches up',
    parts: [null, { as: 'dashes', pathLength: [1, 0.4, 1], pathOffset: [0, -1, -2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1 }],
  },
  'panel-right-open': {
    verb: 'the arrow pulls the right panel open',
    parts: [null, ride([15, 12], [[0, 0], [-4, 0], [-4, 0], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.8 }), nudge([8.5, 12], -1, 0, { as: 'chevron' })],
  },
  'panel-right': {
    verb: 'the right panel widens and narrows',
    parts: [null, ride([15, 12], [[0, 0], [-3, 0], [1, 0], [0, 0], [0, 0]], { as: 'divider', ease: 'easeInOut', dur: 0.8 })],
  },
  'panel-top-bottom-dashed': {
    verb: 'the dashed band slides across',
    parts: [ride(C, [[0, 0], [1.5, 0], [-1.5, 0], [0, 0], [0, 0]], { as: 'dashes', ease: 'easeInOut', dur: 0.9 }), null],
  },

  // --- parabolas, paragraphs ------------------------------------------------------------------
  'parabola-01': {
    verb: 'the curve redraws over the axis',
    parts: [retrace({ as: 'curve' }), null],
  },
  parabola: {
    verb: 'the curve opens wider and back',
    parts: [flex('X', [12, 18], [12, 10.5], [1, 1.12, 0.96, 1, 1], { as: 'curve' }), flex('X', [12, 21], [12, 21], [1, 1.1, 0.96, 1, 1], { as: 'axis', delay: 0.06 })],
  },
  'parabola-02': {
    verb: 'the axis arrow rises and the curve follows',
    parts: [flex('Y', [12, 17], [12, 9.5], [1, 1.12, 0.96, 1, 1], { as: 'curve', delay: 0.1 }), null, nudge(C, 0, -1, { as: 'axis' })],
  },
  'parabola-03': {
    verb: 'the curve redraws and the axis arrow pushes up',
    parts: [retrace({ as: 'curve' }), draw({ as: 'baseline', delay: 0.1 }), nudge(C, 0, -1, { as: 'axis', delay: 0.2 })],
  },
  paragliding: {
    verb: 'the glider drifts and sways under its wing',
    parts: [around([12, 9], [12, 9], [0, -6, 4, -2, 0], { as: 'wing', dur: 0.9 }), around([12, 4], [12, 15.7], [0, 8, -6, 2, 0], { as: 'pilot', dur: 0.9 }), around([12, 4], [12, 20], [0, 8, -6, 2, 0], { as: 'pilot', dur: 0.9 }), around([12, 9], [12, 15.5], [0, -6, 4, -2, 0], { as: 'lines', dur: 0.9 })],
  },
  'paragraph-bullets-point-01': {
    verb: 'the square bullets pop and the lines write after them',
    parts: [pop([6.5, 6.5], 1.12, { as: 'bullet' }), pop([6.5, 17.5], 1.12, { as: 'bullet', delay: 0.14 }), draw({ as: 'line', delay: 0.06 }), draw({ as: 'line', delay: 0.2 }), draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.24 })],
  },
  'paragraph-bullets-point': {
    verb: 'the bullets trade places and the lines follow',
    parts: [ride([6.5, 6.5], out(0, 11), { as: 'bullet' }), ride([6.5, 17.5], out(0, -11), { as: 'bullet' }), null, null, null, null],
  },
  'paragraph-bullets-point-02': {
    verb: 'the round bullets roll in and the lines write',
    parts: [draw({ as: 'line', delay: 0.06 }), draw({ as: 'line', delay: 0.2 }), draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.24 }), ride([6.5, 6.5], out(-1.2, 0), { as: 'bullet' }), ride([6.5, 17.5], out(-1.2, 0), { as: 'bullet', delay: 0.14 })],
  },
  'paragraph-spacing': {
    verb: 'the lines spread apart around the paragraph',
    parts: [nudge([12, 2], 0, -0.6, { as: 'line' }), nudge([12, 22], 0, 0.6, { as: 'line' }), flex('Y', C, C, [1, 1.12, 0.96, 1, 1], { as: 'arrows' })],
  },
  paragraph: {
    verb: 'the pilcrow rewrites',
    parts: [sweep({ as: 'pilcrow' })],
  },
  parallelogram: {
    verb: 'the parallelogram leans back and forth',
    parts: [{ as: 'shape', origin: C, transform: ['skewX(0deg)', 'skewX(10deg)', 'skewX(-6deg)', 'skewX(0deg)'], times: [0, 0.33, 0.66, 1], ease: 'easeInOut', dur: 0.66 }],
  },
  'parking-area-circle': {
    verb: 'the P pops inside the circle',
    parts: [null, pop([12.5, 12.5], 1.15, { as: 'p' })],
  },
  'parking-area-square': {
    verb: 'the P flips inside the square',
    parts: [null, flip([12.5, 12.5], 1, { as: 'p' })],
  },
  'parking-meter': {
    verb: 'the needle sweeps on the meter',
    parts: [null, null, around([12, 15], [12, 13.5], [0, -60, 20, -6, 0], { as: 'needle', dur: 0.9 }), null, retrace({ as: 'dial', delay: 0.1 })],
  },

  // --- passports --------------------------------------------------------------------------------
  'passport-01': {
    verb: 'the passport opens a page and the globe spins',
    parts: [flex('X', [13, 13.4], [17.5, 13.4], [1, 0.5, 1.06, 1, 1], { as: 'page' }), null, { as: 'globe', origin: [10.5, 10], transform: ['scaleX(1)', 'scaleX(0.1)', 'scaleX(1)'], times: [0, 0.5, 1], ease: 'easeInOut', dur: 0.8 }, flex('X', [10.5, 17], [10.5, 17], [1, 0.5, 1.06, 1, 1], { as: 'line', delay: 0.2 })],
  },
  'passport-expired': {
    verb: 'the X rattles on the passport corner',
    parts: [null, null, shake([19, 5], { as: 'x' })],
  },
  'passport-valid': {
    verb: 'the check ticks on the passport corner',
    parts: [null, hop([8.5, 12.5], 0.6, { as: 'photo', delay: 0.24 }), draw({ as: 'check' })],
  },
  passport: {
    verb: 'the photo pops and the lines rewrite',
    parts: [null, pop([8.5, 12], 1.1, { as: 'photo' }), draw({ as: 'line', delay: 0.1 }), draw({ as: 'line', delay: 0.18 })],
  },
  'password-validation': {
    verb: 'the dots type and the check seal stamps',
    parts: [null, stamp([17.5, 16.5], { as: 'seal', delay: 0.2 }), { as: 'dots', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.16, 0.32, 0.48, 0.64], ease: 'linear', dur: 0.8 }, draw({ as: 'check', delay: 0.3 })],
  },
  path: {
    verb: 'the route traces through the square',
    parts: [null, retrace({ as: 'path' })],
  },

  // --- pathfinder -------------------------------------------------------------------------------
  'pathfinder-crop': {
    verb: 'the overlap stays as the outer corners fade',
    parts: [pop(C, 1.1, { as: 'overlap', delay: 0.1 }), dim({ as: 'shape' }), dim({ as: 'shape' })],
  },
  'pathfinder-divide': {
    verb: 'the two squares split apart and rejoin',
    parts: [meet([8.5, 8.5], -1), meet([15.5, 15.5], 1)],
  },
  'pathfinder-exclude': {
    verb: 'the overlap blinks out as the squares hold',
    parts: [{ as: 'overlap', opacity: [1, 0, 1, 0, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, null, null],
  },
  'pathfinder-intersect': {
    verb: 'the squares pull in toward their overlap',
    parts: [pop(C, 1.15, { as: 'overlap', delay: 0.2 }), meet([15.5, 15.5], -0.8), meet([8.5, 8.5], 0.8)],
  },
  'pathfinder-merge': {
    verb: 'the merged shape squeezes into one',
    parts: [swell(C, C, [1, 0.9, 1.04, 1, 1], { as: 'shape' })],
  },
  'pathfinder-minus-back': {
    verb: 'the back square slides away from the front one',
    parts: [meet([15.5, 15.5], 1), meet(C, 1), null],
  },
  'pathfinder-minus-front': {
    verb: 'the front square slides away from the back one',
    parts: [meet([8.5, 8.5], -1), meet(C, -1), null],
  },
  'pathfinder-outline': {
    verb: 'the outlines redraw around both squares',
    parts: [retrace({ as: 'outline', delay: 0.1 }), retrace({ as: 'outline' })],
  },
  'pathfinder-trim': {
    verb: 'the back square trims behind the front one',
    parts: [flex('X', [2, 8.5], [8.5, 8.5], [1, 0.8, 1.04, 1, 1], { as: 'back' }), hop([15.5, 15.5], 0.8, { as: 'front', delay: 0.1 })],
  },
  'pathfinder-unite': {
    verb: 'the united shape hops as one',
    parts: [hop(C, 1, { as: 'shape' })],
  },
  patient: {
    verb: 'the patient nods and the sling settles',
    parts: [null, null, ride([14, 20.5], out(0, -0.6), { as: 'sling' }), hop([12, 6], 0.8, { as: 'head' })],
  },
  patio: {
    verb: 'the umbrella spins on its pole',
    parts: [null, null, null, null, { as: 'umbrella', origin: [12, 8.5], transform: ['scaleX(1)', 'scaleX(0.6)', 'scaleX(1)', 'scaleX(0.6)', 'scaleX(1)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.9 }],
  },
  'pause-circle': {
    verb: 'the pause bars press inside the circle',
    parts: [null, flex('Y', C, C, [1, 0.6, 1.1, 1, 1], { as: 'bars' })],
  },
  pavilon: {
    verb: 'the pavilion roof lifts and settles',
    parts: [flex('Y', [12, 21.5], C, [1, 1.04, 0.98, 1, 1], { as: 'pavilion' })],
  },
}

export default settleSpecs(specs)
