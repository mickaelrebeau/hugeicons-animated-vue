/**
 * Page 27 — duplex → ethereum-ellipse.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted earth and edit-02 sit in this span and are skipped.
 *
 * Ease curves retrace along their timing shape, control-point handles pop.
 * Edit pencils scribble or write their underline; `-off` variants draw the
 * slash and dim the pencil. Electric icons flash their bolt. Gym equipment
 * lifts its weight stack or bar. Estimates tick their keys, then the corner
 * badge acts.
 *
 * Identical-geometry pairs get different jobs: ear-rings / -01, eco-lab
 * family, edit / edit-01, electric-home / -01, electric-tower / -01,
 * equipment-gym / -01, estimate / -01.
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
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const LIFT = out(0, -1.6)
const scribble = (origin, o = {}) => ride(origin, [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen', ...o })
const dangle = (pivot, center, o = {}) => around(pivot, center, [0, 12, -8, 3, 0], { as: 'earring', dur: 0.8, ...o })
const keysPop = (centers, step = 0.06) => centers.map((c, i) => pop(c, 1.6, { as: 'key', delay: i * step }))

// ---------------------------------------------------------------------------

const specs = {
  duplex: {
    verb: 'the two roofs settle onto the duplex and the door answers',
    parts: [ride([12, 4], out(0, -1.2), { as: 'roof', delay: 0.1 }), ride([12, 11.5], out(0, -1.2), { as: 'roof' }), null, null, beat([12, 19], { as: 'door', delay: 0.3 })],
  },

  // --- ears ------------------------------------------------------------------------------
  'ear-off': {
    verb: 'the slash draws across and the ear fades',
    parts: [dim({ as: 'ear', delay: 0.1 }), dim({ as: 'ear', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'ear-rings-01': {
    verb: 'the two earrings swing on their hooks',
    parts: [dangle([7, 4], [6.3, 13.3]), dangle([17, 7], [17, 16.3], { delay: 0.1 }), dangle([17, 7], [17, 9.3], { delay: 0.1 }), dangle([7, 4], [7, 6.3])],
  },
  'ear-rings': {
    verb: 'the gems on the earrings glint',
    parts: [null, pop([17, 16.3], 1.1, { as: 'gem', delay: 0.1 }), null, null],
    extras: [glint(20.5, 12, 0.9, { delay: 0.2 }), glint(3, 9.5, 0.9, { delay: 0.32 })],
  },
  'ear-rings-02': {
    verb: 'the drop earrings swing from their studs',
    parts: [
      dangle([7, 7], [7, 16]),
      dangle([17, 7], [17, 16], { delay: 0.1 }),
      dangle([7, 7], [7, 15.5]),
      dangle([17, 7], [17, 15.5], { delay: 0.1 }),
      null,
      null,
    ],
  },
  'ear-rings-03': {
    verb: 'the hoop earrings sway on their bars',
    parts: [dangle([13, 7], [17, 7], { delay: 0.1 }), dangle([11, 17], [7, 17]), null, null, pop([6.5, 7], 1.2, { as: 'stud' }), pop([17.5, 17], 1.2, { as: 'stud', delay: 0.1 })],
  },
  ear: {
    verb: 'the ear perks up and its inner fold redraws',
    parts: [around([12, 22], C, [0, -6, 3, -1, 0], { as: 'ear' }), retrace({ as: 'fold', delay: 0.1 })],
  },
  'earth-lock': {
    verb: 'the globe turns slightly and the lock shackle clicks',
    parts: [null, null, null, null, ride([18.5, 6], [[0, 0], [0, -1.2], [0, 0.25], [0, 0], [0, 0]], { as: 'shackle' })],
  },

  // --- ease curves ---------------------------------------------------------------------------
  'ease-curve-control-points': {
    verb: 'the curve retraces and both control handles pop',
    parts: [retrace({ as: 'curve' }), pop([19, 20], 1.3, { as: 'handle', delay: 0.3 }), draw({ as: 'arm', delay: 0.2 }), pop([5, 4], 1.3, { as: 'handle', delay: 0.1 }), draw({ as: 'arm' })],
  },
  'ease-in-control-point': {
    verb: 'the ease-in curve retraces and its handle pops',
    parts: [retrace({ as: 'curve' }), draw({ as: 'handle', delay: 0.2 })],
  },
  'ease-in-out': {
    verb: 'the ease-in-out curve writes itself',
    parts: [sweep({ as: 'curve' })],
  },
  'ease-in': {
    verb: 'the ease-in curve writes itself, slow then fast',
    parts: [draw({ as: 'curve', dur: 0.8, ease: ['linear', 'linear', [0.6, 0, 1, 1]] })],
  },
  'ease-out-control-point': {
    verb: 'the ease-out curve retraces and its handle pops',
    parts: [retrace({ as: 'curve' }), draw({ as: 'handle', delay: 0.2 })],
  },
  'ease-out': {
    verb: 'the ease-out curve writes itself, fast then slow',
    parts: [draw({ as: 'curve', dur: 0.8, ease: ['linear', 'linear', [0, 0, 0.4, 1]] })],
  },
  eclipse: {
    verb: 'the shadow sweeps across the sun and back',
    parts: [null, ride([12.5, 12], [[0, 0], [-3, 0], [-3, 0], [0.3, 0], [0, 0]], { as: 'shadow', dur: 0.9 })],
  },

  // --- eco -----------------------------------------------------------------------------------
  'eco-energy': {
    verb: 'the energy loop redraws and the leaf sprouts',
    parts: [retrace({ as: 'loop' }), swell([8.5, 16.5], [11.4, 12], [1, 0.6, 1.1, 0.98, 1], { as: 'leaf', delay: 0.1 })],
  },
  'eco-lab-01': {
    verb: 'the sprout on the test tube unfurls',
    parts: [flex('Y', [12, 9], [12, 7], [1, 0.4, 1.1, 1, 1], { as: 'stem' }), swell([12, 5], [10, 3.5], [1, 0.4, 1.15, 1, 1], { as: 'leaf', delay: 0.06 }), null, null, swell([12, 6], [14, 4.5], [1, 0.4, 1.15, 1, 1], { as: 'leaf', delay: 0.12 })],
  },
  'eco-lab-02': {
    verb: 'the round flask swirls under the sprout',
    parts: [null, around([12, 5], [10, 3.5], [0, -10, 6, -2, 0], { as: 'leaf' }), around([12, 9], [12, 15.5], [0, 6, -4, 1.5, 0], { as: 'flask' }), null, around([12, 5], [14, 4.5], [0, 10, -6, 2, 0], { as: 'leaf' })],
  },
  'eco-lab': {
    verb: 'the leaves flutter on the conical flask',
    parts: [null, around([12, 5], [10, 3.5], [0, -14, 8, -3, 0], { as: 'leaf' }), beat([12, 15.5], { as: 'flask', delay: 0.24 }), null, around([12, 5], [14, 4.5], [0, 14, -8, 3, 0], { as: 'leaf', delay: 0.06 })],
  },
  'eco-power': {
    verb: 'the leaf on the power ring sprouts',
    parts: [retrace({ as: 'ring', delay: 0.1 }), swell([11, 22], [15.7, 16.5], [1, 0.6, 1.1, 0.98, 1], { as: 'leaf' })],
  },
  'edge-style': {
    verb: 'the edge styles draw one after another',
    parts: [draw({ as: 'edge' }), draw({ as: 'edge', delay: 0.1 }), draw({ as: 'edge', delay: 0.12 }), draw({ as: 'edge', delay: 0.2 }), draw({ as: 'edge', delay: 0.22 }), draw({ as: 'edge', delay: 0.24 }), draw({ as: 'edge', delay: 0.32 })],
  },

  // --- edit ----------------------------------------------------------------------------------
  'edit-01': {
    verb: 'the pencil writes and the underline draws behind it',
    parts: [scribble([15.5, 8.5]), draw({ as: 'line', delay: 0.1 })],
  },
  edit: {
    verb: 'the pencil taps down and the underline retraces',
    parts: [nudge([15.5, 8.5], -0.8, 0.8, { as: 'pen' }), retrace({ as: 'line', delay: 0.12 })],
  },
  'edit-03': {
    verb: 'the pencil scribbles and its band redraws',
    parts: [scribble([12.1, 11.9]), draw({ as: 'band', delay: 0.12 })],
  },
  'edit-04': {
    verb: 'the pencil scribbles over the baseline',
    parts: [scribble(C), draw({ as: 'line', delay: 0.1 }), draw({ as: 'band', delay: 0.16 })],
  },
  'edit-off-03': {
    verb: 'the slash cuts across and the pencil dims',
    parts: [dim({ as: 'band', delay: 0.1 }), draw({ as: 'slash' }), dim({ as: 'pen', delay: 0.1 })],
  },
  'edit-off-04': {
    verb: 'the slash cuts across the pencil, which flinches',
    parts: [nudge(C, 0.6, 0.6, { as: 'pen', delay: 0.1 }), nudge([16.5, 7.5], 0.6, 0.6, { as: 'pen', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'edit-off': {
    verb: 'the slash cuts across and the pencil fades',
    parts: [dim({ as: 'pen', delay: 0.1 }), dim({ as: 'pen', delay: 0.1 }), dim({ as: 'band', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'edit-road': {
    verb: 'the lane dashes draw down the road and the pencil scribbles',
    parts: [null, null, draw({ as: 'dash' }), draw({ as: 'dash', delay: 0.1 }), draw({ as: 'dash', delay: 0.2 }), scribble([16.8, 17])],
  },
  'edit-table': {
    verb: 'the pencil scribbles and the table rows draw',
    parts: [null, null, draw({ as: 'row' }), draw({ as: 'row', delay: 0.1 }), null, scribble([18, 18])],
  },
  'edit-user-02': {
    verb: 'the pencil scribbles beside the user, who nods',
    parts: [hop([9, 8.5], 0.8, { as: 'head', delay: 0.14 }), null, scribble([19.1, 9.9])],
  },

  // --- eggs ----------------------------------------------------------------------------------
  'egg-fried': {
    verb: 'the yolk wobbles in the fried egg',
    parts: [swell([10, 14], [10, 14], [1, 1.15, 0.94, 1.03, 1], { as: 'yolk' }), beat(C, { as: 'white', delay: 0.16 })],
  },
  'egg-off': {
    verb: 'the slash cuts across and the egg fades',
    parts: [dim({ as: 'egg', delay: 0.1 }), draw({ as: 'slash' })],
  },
  egg: {
    verb: 'the egg wobbles on its base',
    parts: [around([12, 22], C, [0, -8, 6, -3, 0], { as: 'egg' })],
  },
  eggs: {
    verb: 'the two eggs rock against each other',
    parts: [around([17.4, 18], [17.4, 9.7], [0, 8, -5, 2, 0], { as: 'egg' }), around([8.5, 22], [8.5, 14], [0, -8, 5, -2, 0], { as: 'egg', delay: 0.06 })],
  },
  'eid-mubarak': {
    verb: 'the crescent rocks and the lantern swings',
    parts: [around(C, C, [0, -10, 6, -2, 0], { as: 'moon' }), around([16, 2.5], [16, 9], [0, 10, -6, 2, 0], { as: 'lantern' })],
  },
  'eiffel-tower': {
    verb: 'the tower lights up floor by floor and the spire glints',
    parts: [null, pop([12, 3], 1.3, { as: 'spire', delay: 0.3 }), draw({ as: 'arch' }), draw({ as: 'floor', delay: 0.1 }), draw({ as: 'floor', delay: 0.2 })],
    extras: [glint(14.6, 2.2, 0.8, { delay: 0.36 })],
  },
  'eight-circle': {
    verb: 'the 8 rewrites itself inside the circle',
    parts: [sweep({ as: 'eight' }), null],
  },
  'eight-square': {
    verb: 'the 8 flips inside the square',
    parts: [null, flip(C, 1, { as: 'eight' })],
  },
  'elearning-exchange': {
    verb: 'the exchange arcs chase around the cap',
    parts: [around(C, [12.2, 6.5], [0, 72, 252, 370.8, 360], { as: 'arc', dur: 0.9 }), around(C, [11.8, 17.5], [0, 72, 252, 370.8, 360], { as: 'arc', dur: 0.9 }), hop([12.1, 12.6], 0.8, { as: 'cap', delay: 0.2 })],
  },

  // --- electric ----------------------------------------------------------------------------
  'electric-home-01': {
    verb: 'the plug lights up inside the house',
    parts: [null, null, blink({ as: 'plug', dur: 0.6 })],
  },
  'electric-home': {
    verb: 'the roof settles and the plug pops inside',
    parts: [null, ride([12, 6.5], out(0, -1), { as: 'roof' }), pop([12, 13.3], 1.2, { as: 'plug', delay: 0.2 })],
  },
  'electric-home-02': {
    verb: 'the plug pops and the house answers',
    parts: [pop([12, 14.3], 1.2, { as: 'plug' }), beat([11.9, 12], { as: 'house', delay: 0.24 })],
  },
  'electric-plugs': {
    verb: 'the plug pushes in and the bolt flashes',
    parts: [ride([9, 3.5], out(0, 1), { as: 'prong' }), ride([15, 3.5], out(0, 1), { as: 'prong' }), draw({ as: 'cord', delay: 0.1 }), blink({ as: 'bolt', dur: 0.6, delay: 0.1 }), ride([12, 11.5], out(0, 1), { as: 'plug' })],
  },
  'electric-tower-01': {
    verb: 'the pylon braces redraw and the top hums',
    parts: [null, beat([12, 8.5], { as: 'arm', delay: 0.3 }), null, null, draw({ as: 'brace' }), draw({ as: 'brace', delay: 0.12 }), pop([12, 4], 1.15, { as: 'top', delay: 0.2 })],
  },
  'electric-tower': {
    verb: 'the pylon sways in the wind',
    parts: [
      swing([12, 22], [12, 14], [0, -4, 3, -1, 0], { as: 'tower' }),
      swing([12, 22], [12, 8.5], [0, -4, 3, -1, 0], { as: 'tower' }),
      null,
      swing([12, 22], [11.8, 9], [0, -4, 3, -1, 0], { as: 'tower' }),
      swing([12, 22], [10.5, 16], [0, -4, 3, -1, 0], { as: 'tower' }),
      swing([12, 22], [13.5, 16], [0, -4, 3, -1, 0], { as: 'tower' }),
      swing([12, 22], [12, 4], [0, -4, 3, -1, 0], { as: 'tower' }),
    ],
  },
  'electric-tower-02': {
    verb: 'the braces redraw and the cross-arm answers',
    parts: [null, null, null, beat([12, 5.5], { as: 'arm', delay: 0.3 }), draw({ as: 'brace' }), draw({ as: 'brace', delay: 0.12 })],
  },
  'electric-wire': {
    verb: 'the wires redraw and the plus pops',
    parts: [retrace({ as: 'wire' }), retrace({ as: 'wire', delay: 0.1 }), lap([20, 7], 90, { as: 'plus', dur: 0.62 }), draw({ as: 'minus', delay: 0.2 }), null, null],
  },
  'electricity-stack': {
    verb: 'the bolt flashes on the stack',
    parts: [beat([14, 10], { as: 'card', delay: 0.24 }), null, pop([14, 10], 1.25, { as: 'bolt' })],
  },
  'ellipse-selection': {
    verb: 'the selection handles pop around the ellipse',
    parts: [retrace({ as: 'ellipse' }), pop([12, 4], 1.3, { as: 'handle' }), pop([12, 20], 1.3, { as: 'handle', delay: 0.2 }), pop([20, 12], 1.3, { as: 'handle', delay: 0.1 }), pop([4, 12], 1.3, { as: 'handle', delay: 0.3 })],
  },
  ellipse: {
    verb: 'the ellipse squashes round and back',
    parts: [{ as: 'ellipse', origin: C, transform: ['scale(1, 1)', 'scale(0.8, 1.3)', 'scale(1.05, 0.95)', 'scale(1, 1)'], times: [0, 0.4, 0.72, 1], ease: [[0.77, 0, 0.175, 1], [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]], dur: 0.6 }],
  },
  'ellipsis-vertical': {
    verb: 'the three dots bounce down the column',
    parts: [ride(C, [[0, 0], [0, -0.8], [0, 0.6], [0, -0.2], [0, 0]], { as: 'dots', dur: 0.6 })],
  },
  ellipsis: {
    verb: 'the three dots wave side to side',
    parts: [ride(C, [[0, 0], [-0.8, 0], [0.6, 0], [-0.2, 0], [0, 0]], { as: 'dots', dur: 0.6 })],
  },
  encrypt: {
    verb: 'the bits shuffle and the key turns',
    parts: [blink({ as: 'bit', dur: 0.6 }), blink({ as: 'bit', dur: 0.6, delay: 0.08 }), blink({ as: 'bit', dur: 0.6, delay: 0.16 }), blink({ as: 'bit', dur: 0.6, delay: 0.24 }), around([6, 16.5], [12, 16.5], [0, -8, 4, -1, 0], { as: 'key' }), pop([6, 16.5], 2, { as: 'hole', delay: 0.2 })],
  },
  'energy-ellipse': {
    verb: 'the bolt flashes inside the circle',
    parts: [beat(C, { as: 'ring', delay: 0.24 }), pop(C, 1.2, { as: 'bolt' })],
  },
  'energy-rectangle': {
    verb: 'the bolt flickers inside the square',
    parts: [null, blink({ as: 'bolt', dur: 0.6 })],
  },
  energy: {
    verb: 'the bolt strikes down and back',
    parts: [ride(C, [[0, 0], [-0.6, 1.2], [0.2, -0.3], [0, 0], [0, 0]], { as: 'bolt', dur: 0.5 })],
  },
  'engine-slash': {
    verb: 'the slash cuts across and the engine fades',
    parts: [null, dim({ as: 'engine', delay: 0.1 }), null, null, null, draw({ as: 'slash' })],
  },
  engine: {
    verb: 'the engine revs and rattles on its mount',
    parts: [null, shake([13.5, 13], { as: 'engine' }), null, ride([10.5, 6.5], [[0, 0], [0, -0.6], [0, 0], [0, -0.6], [0, 0]], { as: 'cap', dur: 0.5 }), ride([10.5, 5], [[0, 0], [0, -0.6], [0, 0], [0, -0.6], [0, 0]], { as: 'cap', dur: 0.5 })],
  },
  'entering-geo-fence': {
    verb: 'the arrow drops into the fenced area, which ripples',
    parts: [nudge([12, 10], 0, 2), beat([12, 18], { as: 'fence', delay: 0.24 })],
  },
  'entrance-stairs': {
    verb: 'the stairs draw step by step up into the arch',
    parts: [beat(C, { as: 'arch', delay: 0.4 }), draw({ as: 'step' }), draw({ as: 'step', delay: 0.12 }), draw({ as: 'step', delay: 0.24 })],
  },
  envato: {
    verb: 'the leaf flips over',
    parts: [flip([12.2, 12], 1, { as: 'leaf' })],
  },
  'equal-sign-circle': {
    verb: 'the two bars of the equal sign pinch together and part',
    parts: [null, flex('Y', C, C, [1, 0.4, 1.1, 0.98, 1], { as: 'equal' })],
  },
  'equal-sign-square': {
    verb: 'the equal sign stretches wide and settles',
    parts: [flex('X', C, C, [1, 1.2, 0.94, 1.02, 1], { as: 'equal' }), null],
  },
  'equal-sign': {
    verb: 'the two bars slide past each other and line back up',
    parts: [ride([12, 8], out(-1.4, 0), { as: 'bar' }), ride([12, 16], out(1.4, 0), { as: 'bar' })],
  },

  // --- equipment ------------------------------------------------------------------------------
  'equipment-bench-press': {
    verb: 'the bar is pressed up off the bench and lowered',
    parts: [ride([12, 5.5], LIFT, { as: 'bar' }), ride([12, 5.5], LIFT, { as: 'bar' }), ride([12, 5.5], LIFT, { as: 'bar' }), null, beat([12, 14.5], { as: 'bench', delay: 0.3 }), null],
  },
  'equipment-chest-press': {
    verb: 'the handles press forward and the seat answers',
    parts: [beat([12, 11.5], { as: 'seat', delay: 0.26 }), null, null, null, flex('X', C, C, [1, 0.8, 1.04, 1, 1], { as: 'handles' }), null],
  },
  'equipment-gym-01': {
    verb: 'the weight stack lifts one plate after another',
    parts: [ride([12, 13.3], LIFT, { as: 'plate' }), ride([12, 16.8], LIFT, { as: 'plate', delay: 0.06 }), ride([12, 20.3], LIFT, { as: 'plate', delay: 0.12 }), null, null],
  },
  'equipment-gym': {
    verb: 'the cable pulls and the top plate rises',
    parts: [ride([12, 13.3], LIFT, { as: 'plate', delay: 0.06 }), null, null, flex('Y', [12, 5], [12, 6.2], [1, 0.6, 1.04, 1, 1], { as: 'cable' }), null],
  },
  'equipment-gym-02': {
    verb: 'the rings swing on their straps',
    parts: [null, null, around([15.5, 6], [15.5, 11.9], [0, 10, -6, 2, 0], { as: 'ring' }), around([8.5, 6], [8.5, 11.9], [0, -10, 6, -2, 0], { as: 'ring' }), null],
  },
  'equipment-gym-03': {
    verb: 'the bar lifts off the rack and settles back',
    parts: [ride([12, 5.5], LIFT, { as: 'bar' }), ride([12, 5.5], LIFT, { as: 'bar' }), ride([12, 5.5], LIFT, { as: 'bar' }), beat([12, 17.5], { as: 'bench', delay: 0.3 }), null, null],
  },
  'equipment-weightlifting': {
    verb: 'the weights lift on the cable and drop back',
    parts: [ride([12, 9.5], LIFT, { as: 'weight' }), ride([12, 12.5], LIFT, { as: 'weight', delay: 0.06 }), null, null, flex('Y', [12, 5], [12, 6.8], [1, 0.7, 1.04, 1, 1], { as: 'cable' }), null],
  },

  // --- erasers -----------------------------------------------------------------------------------
  'eraser-01': {
    verb: 'the X spins a quarter on the eraser',
    parts: [null, lap([11, 12], 90, { as: 'x', dur: 0.62 })],
  },
  'eraser-add': {
    verb: 'the plus turns a quarter on the eraser',
    parts: [beat(C, { as: 'eraser', delay: 0.3 }), lap([11, 12], 90, { as: 'plus', dur: 0.62 })],
  },
  'eraser-auto': {
    verb: 'the eraser rubs back and forth while the spark pops',
    parts: [ride([14.5, 15], [[0, 0], [-1, 0.4], [0.8, -0.3], [-0.4, 0.2], [0, 0]], { as: 'eraser', dur: 0.7 }), pop([5.5, 5.5], 1.3, { as: 'spark', delay: 0.2 })],
  },
  eraser: {
    verb: 'the eraser rubs out the line, which redraws',
    parts: [ride([12, 10.5], [[0, 0], [-1, 0.4], [0.8, -0.3], [-0.4, 0.2], [0, 0]], { as: 'eraser', dur: 0.7 }), draw({ as: 'line', delay: 0.1 })],
  },

  // --- estimates ---------------------------------------------------------------------------------
  'estimate-01': {
    verb: 'the calculator keys tick in turn',
    parts: [null, draw({ as: 'display' }), ...keysPop([[6.5, 10], [10.5, 10], [14.5, 10], [6.5, 14], [10.5, 14]]), null],
  },
  estimate: {
    verb: 'the display redraws and the coin flips',
    parts: [null, draw({ as: 'display' }), null, null, null, null, null, flip([18.1, 17], 1, { as: 'coin', delay: 0.1 })],
  },
  'estimate-02': {
    verb: 'the keys tick and the clock hand turns',
    parts: [null, draw({ as: 'display' }), ...keysPop([[6, 10.5], [10, 10.5], [14, 10.5], [6, 14.5], [10, 14.5]]), null, around([17.5, 17.5], [18, 17], [0, 72, 252, 370.8, 360], { as: 'hand', dur: 0.9 })],
  },
  'ethereum-ellipse': {
    verb: 'the ether diamond flips inside the circle',
    parts: [flip(C, 1, { as: 'diamond' }), beat(C, { as: 'ring', delay: 0.3 })],
  },
}

export default settleSpecs(specs)
