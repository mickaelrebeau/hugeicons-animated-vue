/**
 * Page 26 — dollar-square → dumbbell.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted download-01 sits in this span and is skipped.
 *
 * Downloads follow the arrow conventions: plain arrows drop, `-02` style
 * shaft+head push 2.6px and narrow, tray icons let the tray answer. Drag
 * icons pull the hand toward the named side with the little arrow leading.
 * Dresses sway from the shoulders. Doors swing open on their hinge side.
 *
 * Identical-geometry pairs get different jobs: door-closed vs door-02,
 * download / download-circle, download-circle / -01, download-square / -01,
 * drag / drag-01, drag-left / -01, drag-right / -01, drawing-compass vs
 * drafting-compass, dress / dress-01, dressing-table / -01, dumbbell / -01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  around,
  beat,
  blink,
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
  retrace,
  ride,
  settleSpecs,
  shake,
  sweep,
  swell,
  swing,
  tap,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const SWAY = [0, -6, 4, -1.5, 0]
const TURN = [0, 72, 252, 370.8, 360]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const drop = (c, d = 2, o = {}) => nudge(c, 0, d, { as: 'arrow', ...o })

/** Shaft+head push along an axis, narrowing across it. */
const push = (origin, axis, d, o = {}) => {
  const across = axis === 'X' ? 'Y' : 'X'
  return {
    as: 'arrow',
    origin,
    transform: [`translate${axis}(0px) scale${across}(1)`, `translate${axis}(${d}px) scale${across}(0.94)`, `translate${axis}(${-d * 0.12}px) scale${across}(1)`, `translate${axis}(0px) scale${across}(1)`],
    times: [0, 0.44, 0.72, 1],
    ease: [INOUT, OUT, OUT],
    dur: 0.5,
    ...o,
  }
}

/** Leave through the bottom and come back from above. */
const through = (origin, dy, o = {}) => fall(origin, 0, dy, { as: 'arrow', ease: [INOUT, 'linear', OUT], dur: 0.66, ...o })

/** A door swinging open around its hinge edge (foreshortened on X). */
const doorSwing = (hingeX, [cx, cy], o = {}) => {
  const keys = [1, 0.55, 0.55, 1]
  return {
    as: 'door',
    origin: [cx, cy],
    transform: keys.map((s) => `translate(${((hingeX - cx) * (1 - s)).toFixed(2)}px, 0px) scaleX(${s})`),
    times: [0, 0.3, 0.62, 1],
    ease: [INOUT, 'linear', INOUT],
    dur: 0.76,
    ...o,
  }
}

/** A grid of grip dots popping with per-dot delays. */
const grip = (centers, order, step = 0.06) => centers.map((c, i) => pop(c, 1.35, { as: 'dot', delay: order[i] * step }))

// ---------------------------------------------------------------------------

const specs = {
  // --- dollar / dome / domino / donut ------------------------------------------------------
  'dollar-square': {
    verb: 'the dollar sign flips inside the square',
    parts: [beat(C, { as: 'frame', delay: 0.3 }), flip(C, 1, { as: 's' })],
  },
  dollar: {
    verb: 'the dollar sign hops and its bar ticks answer',
    parts: [hop(C, 1.2, { as: 's' }), pop([12.5, 12], 1.12, { as: 'bar', delay: 0.2 })],
  },
  dome: {
    verb: 'the dome ribs redraw over the building',
    parts: [beat(C, { as: 'dome', delay: 0.36 }), null, retrace({ as: 'rib' }), retrace({ as: 'rib', delay: 0.1 })],
  },
  domino: {
    verb: 'the domino tips over and rights itself, pips popping',
    parts: [
      around([19, 22], C, [0, 14, -4, 1, 0], { as: 'tile' }),
      around([19, 22], C, [0, 14, -4, 1, 0], { as: 'tile' }),
      pop([12, 7], 2.2, { as: 'pip', delay: 0.2 }),
      around([19, 22], [9.5, 16], [0, 14, -4, 1, 0], { as: 'tile' }),
      around([19, 22], [14.5, 18], [0, 14, -4, 1, 0], { as: 'tile' }),
    ],
  },
  donut: {
    verb: 'the donut rolls a full turn on its hole',
    parts: [pop(C, 1.15, { as: 'hole', delay: 0.2 }), lap(C, 360, { as: 'icing', dur: 0.9 })],
  },

  // --- doors ----------------------------------------------------------------------------------
  'door-01': {
    verb: 'the door swings open on its hinge and shuts',
    parts: [null, doorSwing(4, [9.5, 12]), doorSwing(4, [11.5, 12])],
  },
  'door-02': {
    verb: 'the door handle jiggles and the door answers',
    parts: [beat(C, { as: 'door', delay: 0.24 }), null, ride([15, 12], [[0, 0], [0, 0.6], [0, -0.3], [0, 0.4], [0, 0]], { as: 'handle', dur: 0.5 })],
  },
  'door-closed-locked': {
    verb: 'the padlock on the closed door rattles',
    parts: [null, shake([18, 17.5], { as: 'lock' }), null, null],
  },
  'door-closed': {
    verb: 'someone knocks: the door shudders twice',
    parts: [null, ride(C, [[0, 0], [0.4, 0], [0, 0], [0.4, 0], [0, 0]], { as: 'door', dur: 0.5 }), ride([8.8, 12], [[0, 0], [0.4, 0], [0, 0], [0.4, 0], [0, 0]], { as: 'door', dur: 0.5 })],
  },
  'door-lock': {
    verb: 'the lock on the door turns and clicks',
    parts: [null, null, around([12, 12.5], [12, 12.5], [0, -20, 8, -3, 0], { as: 'lock' })],
  },
  'door-open': {
    verb: 'the open door swings wider and back',
    parts: [doorSwing(4, [9, 12]), null, null],
  },
  door: {
    verb: 'the window cross turns a quarter in the door',
    parts: [null, beat([12, 9], { as: 'window', delay: 0.3 }), null, lap([12, 9], 90, { as: 'cross', dur: 0.62 }), pop([8, 17], 2, { as: 'knob', delay: 0.2 })],
  },
  dot: {
    verb: 'the dot pulses',
    parts: [pop(C, 1.8, { as: 'dot' })],
  },
  doughnut: {
    verb: 'the doughnut icing ripples around the hole',
    parts: [pop(C, 1.12, { as: 'hole', delay: 0.2 }), ride([19, 12], out(0, 0.6), { as: 'drip' }), ride([5, 12], out(0, 0.6), { as: 'drip', delay: 0.08 }), lap(C, 360, { as: 'icing', dur: 0.9 })],
  },

  // --- downloads ---------------------------------------------------------------------------------
  'download-02': {
    verb: 'the arrow drops into the cloud tray, which answers',
    parts: [drop([12, 9.5]), beat([12, 14.5], { as: 'tray', delay: 0.24 })],
  },
  'download-03': {
    verb: 'the arrow drops into the open box',
    parts: [beat([12, 14], { as: 'box', delay: 0.26 }), null, drop([12, 14], 1.6)],
  },
  'download-04': {
    verb: 'the arrow presses down onto the line',
    parts: [push([12, 10.3], 'Y', 2.6), flex('X', [12, 21], [12, 21], [1, 1, 0.9, 1.04, 1], { as: 'line', dur: 0.56 })],
  },
  'download-05': {
    verb: 'the arrow drops into the box and the lid hops',
    parts: [null, hop([12, 4.5], 1, { as: 'lid', delay: 0.2 }), drop([12, 14], 1.6)],
  },
  'download-06': {
    verb: 'the arrow drops into the tray, shaft and head together',
    parts: [beat([12, 15], { as: 'tray', delay: 0.26 }), drop([12, 9], 2.2), drop([12, 14.5], 2.2)],
  },
  'download-circle-01': {
    verb: 'the arrow drops and the circle answers',
    parts: [beat(C, { as: 'ring', delay: 0.22 }), drop(C)],
  },
  'download-circle': {
    verb: 'the arrow drops out through the circle and comes back from the top',
    parts: [null, through(C, 4)],
  },
  'download-circle-02': {
    verb: 'the arrow pushes down, narrowing as it travels',
    parts: [null, push(C, 'Y', 2.6)],
  },
  'download-square-01': {
    verb: 'the arrow drops and the square answers',
    parts: [beat(C, { as: 'frame', delay: 0.22 }), drop(C)],
  },
  'download-square': {
    verb: 'the arrow drops out through the square and comes back from the top',
    parts: [null, through(C, 4)],
  },
  'download-square-02': {
    verb: 'the arrow pushes down, narrowing as it travels',
    parts: [null, push(C, 'Y', 2.6)],
  },
  download: {
    verb: 'the arrow drops into the tray, which flexes under it',
    parts: [flex('X', [12, 19], [12, 19], [1, 1, 0.92, 1.04, 1], { as: 'tray', dur: 0.56 }), drop([12, 9.5])],
  },

  // --- compasses -----------------------------------------------------------------------------------
  'drafting-compass': {
    verb: 'the compass legs open and the arc draws',
    parts: [around([12, 6], [12, 14.8], [0, -4, 3, -1, 0], { as: 'legs' }), null, pop([12, 6], 1.2, { as: 'hinge' }), draw({ as: 'arc', delay: 0.1 }), pop([12, 16], 1.4, { as: 'tick', delay: 0.4 })],
  },
  'drawing-compass': {
    verb: 'the compass swings around its point and redraws the arc',
    parts: [around([12, 7], [12, 16], [0, 6, -4, 1, 0], { as: 'legs' }), hop([12, 3], 0.8, { as: 'handle' }), null, retrace({ as: 'arc', delay: 0.1 }), null],
  },
  'drawing-mode': {
    verb: 'the pen nib scribbles and the circle redraws',
    parts: [retrace({ as: 'circle', delay: 0.1 }), ride([15.5, 15.5], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' })],
  },

  // --- drag -----------------------------------------------------------------------------------------
  'drag-01': {
    verb: 'the hand grabs and the two arrows push apart',
    parts: [nudge([19, 4], 1, 0, { as: 'arrow' }), nudge([5, 4], -1, 0, { as: 'arrow' }), tap([13.4, 11.6], { delay: 0.06 })],
  },
  drag: {
    verb: 'the hand drags left, then right, the arrows following',
    parts: [ride([19, 4], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'arrow' }), ride([5, 4], [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'arrow' }), ride([13.4, 11.6], [[0, 0], [-0.8, 0], [0.8, 0], [0, 0], [0, 0]], { as: 'hand' })],
  },
  'drag-02': {
    verb: 'the hand drags the file toward the upper-left',
    parts: [nudge([16.2, 12.7], -1, -1, { as: 'hand', delay: 0.06 }), nudge([7.4, 7], -1.4, -1.4, { as: 'file' })],
  },
  'drag-03': {
    verb: 'the finger presses and the side arrows push out',
    parts: [tap([12.9, 12]), nudge([18, 4.5], 1, 0, { as: 'arrow', delay: 0.1 }), nudge([4.5, 4.5], -1, 0, { as: 'arrow', delay: 0.1 })],
  },
  'drag-04': {
    verb: 'the hand drags the file up and away',
    parts: [nudge([15, 13], -0.8, -0.8, { as: 'hand', delay: 0.06 }), nudge([7, 7], -1.2, -1.2, { as: 'file' })],
  },
  'drag-drop-horizontal': {
    verb: 'the grip dots light up column by column',
    parts: grip([[6, 9], [6, 15], [18, 9], [12, 9], [18, 15], [12, 15]], [0, 0, 2, 1, 2, 1], 0.12),
  },
  'drag-drop-vertical': {
    verb: 'the grip dots light up row by row',
    parts: grip([[15, 6], [9, 6], [15, 18], [15, 12], [9, 18], [9, 12]], [0, 0, 2, 1, 2, 1], 0.12),
  },
  'drag-drop': {
    verb: 'the grip dots ripple out from the center',
    parts: grip([[6, 6], [6, 12], [6, 18], [18, 6], [18, 12], [12, 12], [12, 6], [18, 18], [12, 18]], [2, 1, 2, 2, 1, 0, 1, 2, 1], 0.12),
  },
  'drag-left-01': {
    verb: 'the hand drags left behind the little arrow',
    parts: [nudge([12.5, 5.2], -1.2, 0, { as: 'ring', delay: 0.04 }), nudge([13.9, 13.2], -1.2, 0, { as: 'hand', delay: 0.04 }), nudge([5.9, 5], -1.6, 0, { as: 'arrow' })],
  },
  'drag-left': {
    verb: 'the hand taps and the little arrow shoots left',
    parts: [pop([12.5, 5.2], 1.12, { as: 'ring', delay: 0.08 }), tap([13.9, 13.2]), nudge([5.9, 5], -1.6, 0, { as: 'arrow', delay: 0.12 })],
  },
  'drag-left-02': {
    verb: 'the finger drags left behind the arrow',
    parts: [nudge([13.4, 13.5], -1, 0, { as: 'hand', delay: 0.04 }), nudge([12, 5.8], -1, 0, { as: 'ring', delay: 0.04 }), nudge([5.4, 6], -1.4, 0, { as: 'arrow' })],
  },
  'drag-left-03': {
    verb: 'the fist pulls left and the arrow leads',
    parts: [nudge([13.7, 13.5], -1, 0, { as: 'hand', delay: 0.04 }), retrace({ as: 'ring', delay: 0.1 }), nudge([4.9, 6], -1.4, 0, { as: 'arrow' })],
  },
  'drag-left-04': {
    verb: 'the hand swipes left, the arrow leading',
    parts: [nudge([13.9, 13.5], -1, 0, { as: 'hand', delay: 0.04 }), nudge([12.5, 5.8], -1, 0, { as: 'ring', delay: 0.04 }), nudge([5.2, 6], -1.4, 0, { as: 'arrow' })],
  },
  'drag-right-01': {
    verb: 'the hand drags right behind the little arrow',
    parts: [nudge([10.5, 5.2], 1.2, 0, { as: 'ring', delay: 0.04 }), nudge([17.2, 5], 1.6, 0, { as: 'arrow' }), nudge([11.9, 13.2], 1.2, 0, { as: 'hand', delay: 0.04 })],
  },
  'drag-right': {
    verb: 'the hand taps and the little arrow shoots right',
    parts: [pop([10.5, 5.2], 1.12, { as: 'ring', delay: 0.08 }), nudge([17.2, 5], 1.6, 0, { as: 'arrow', delay: 0.12 }), tap([11.9, 13.2])],
  },
  'drag-right-02': {
    verb: 'the finger drags right behind the arrow',
    parts: [nudge([11.9, 13.5], 1, 0, { as: 'hand', delay: 0.04 }), nudge([10.5, 5.8], 1, 0, { as: 'ring', delay: 0.04 }), nudge([17.1, 6], 1.4, 0, { as: 'arrow' })],
  },
  'drag-right-03': {
    verb: 'the fist pulls right and the arrow leads',
    parts: [nudge([11.9, 13.5], 1, 0, { as: 'hand', delay: 0.04 }), retrace({ as: 'ring', delay: 0.1 }), nudge([16.3, 6], 1.4, 0, { as: 'arrow' })],
  },
  'drag-right-04': {
    verb: 'the hand swipes right, the arrow leading',
    parts: [nudge([11.4, 13.5], 1, 0, { as: 'hand', delay: 0.04 }), nudge([9.5, 5.8], 1, 0, { as: 'ring', delay: 0.04 }), nudge([17, 6], 1.4, 0, { as: 'arrow' })],
  },

  // --- drama / dresses ----------------------------------------------------------------------------
  drama: {
    verb: 'the two masks rock against each other',
    parts: [
      around([16, 14], [16, 14.1], [0, 8, -5, 2, 0], { as: 'comedy' }),
      around([16, 14], [16, 16], [0, 8, -5, 2, 0], { as: 'comedy' }),
      around([16, 14], [18.5, 11.5], [0, 8, -5, 2, 0], { as: 'comedy' }),
      around([16, 14], [13.5, 11.5], [0, 8, -5, 2, 0], { as: 'comedy' }),
      around([8, 10], [7.9, 9.9], [0, -8, 5, -2, 0], { as: 'tragedy' }),
      around([8, 10], [7.6, 10.8], [0, -8, 5, -2, 0], { as: 'tragedy' }),
    ],
  },
  'dress-01': {
    verb: 'the dress sways from its shoulders',
    parts: [swing([12, 2], [12, 12.4], SWAY, { as: 'dress' }), swing([12, 2], C, SWAY, { as: 'dress' })],
  },
  dress: {
    verb: 'the waist sash draws and the dress twirls',
    parts: [flip([12, 12.4], 1, { as: 'dress', delay: 0.1 }), draw({ as: 'sash' })],
  },
  'dress-02': {
    verb: 'the skirt flares out from the waist and settles',
    parts: [null, beat([12, 10.5], { as: 'waist', delay: 0.2 }), flex('X', [12, 12], [12, 17.1], [1, 1.1, 0.96, 1.02, 1], { as: 'skirt' })],
  },
  'dress-03': {
    verb: 'the skirt flares and the straps tug',
    parts: [null, hop([9, 3], 0.6, { as: 'strap' }), hop([15, 3], 0.6, { as: 'strap', delay: 0.08 }), null, flex('X', [12, 10], [12, 14.5], [1, 1.1, 0.96, 1.02, 1], { as: 'skirt' }), flex('X', [12, 14], [12, 18], [1, 1.12, 0.96, 1.02, 1], { as: 'skirt', delay: 0.06 })],
  },
  'dress-04': {
    verb: 'the gown sways from the bodice',
    parts: [null, swing([12, 10], [12, 16], SWAY, { as: 'gown' }), null, null, swing([12, 10], [12, 18.3], SWAY, { as: 'gown' })],
  },
  'dress-05': {
    verb: 'the dress swishes side to side from the collar',
    parts: [null, swing([12, 7], [12, 14.8], SWAY, { as: 'dress' })],
  },
  'dress-06': {
    verb: 'the skirt sways under the top',
    parts: [swing([12, 9], [12, 15.8], SWAY, { as: 'skirt' }), null],
  },
  'dress-07': {
    verb: 'the bow pops and the dress swishes',
    parts: [pop([12, 13.9], 1.25, { as: 'bow' }), null, swing([12, 7], [12, 14.8], SWAY, { as: 'dress', delay: 0.1 })],
  },
  'dressing-table-01': {
    verb: 'the mirror glints and the drawer slides out',
    parts: [draw({ as: 'shine' }), null, null, null, null, ride([12, 16.5], out(0, 1), { as: 'drawer' })],
  },
  'dressing-table': {
    verb: 'the mirror swivels on its frame',
    parts: [flip([12, 8], 1, { as: 'mirror' }), flip([12, 8], 1, { as: 'mirror' }), null, null, null, null],
  },
  'dressing-table-02': {
    verb: 'the round mirror glints',
    parts: [null, beat([12, 7.5], { as: 'mirror', delay: 0.2 }), draw({ as: 'shine' }), draw({ as: 'shine', delay: 0.1 })],
  },
  'dressing-table-03': {
    verb: 'the mirror shines and the drawer handle pops',
    parts: [null, pop([12, 16], 1.4, { as: 'handle', delay: 0.2 }), null, null, null, null, draw({ as: 'shine' }), draw({ as: 'shine', delay: 0.1 })],
  },

  // --- dr* -----------------------------------------------------------------------------------------
  dribbble: {
    verb: 'the dribbble ball spins a full turn',
    parts: [null, around(C, [14, 16.5], TURN, { as: 'seam', dur: 0.9 }), around(C, [10.5, 8], TURN, { as: 'seam', dur: 0.9 }), around(C, [11, 12.5], TURN, { as: 'seam', dur: 0.9 })],
  },
  drill: {
    verb: 'the drill bit spins and the drill shudders',
    parts: [shake([8, 7], { as: 'body' }), null, null, null, flex('X', [18, 7], [20, 7], [1, 0.6, 1.1, 0.8, 1], { as: 'bit', dur: 0.5 }), pop([16, 7], 1.15, { as: 'chuck' })],
  },
  drink: {
    verb: 'the straw tips in the glass and the lemon spins',
    parts: [beat([9, 11], { as: 'glass', delay: 0.24 }), around([8.5, 6], [6.8, 4], [0, -14, 6, -2, 0], { as: 'straw' }), null, lap([18.5, 6.5], 360, { as: 'lemon', dur: 0.9 })],
  },
  drive: {
    verb: 'the drive lights blink and the lock pops',
    parts: [null, null, pop(C, 1.15, { as: 'lock' }), blink({ as: 'led', dur: 0.6 }), blink({ as: 'led', dur: 0.6, delay: 0.12 })],
  },
  drone: {
    verb: 'the four rotors spin and the drone lifts',
    parts: [
      lap([17.5, 6.5], 360, { as: 'rotor', dur: 0.6 }),
      lap([6.5, 6.5], -360, { as: 'rotor', dur: 0.6 }),
      lap([17.5, 17.5], -360, { as: 'rotor', dur: 0.6 }),
      lap([6.5, 17.5], 360, { as: 'rotor', dur: 0.6 }),
      hop(C, 1, { as: 'body', delay: 0.1 }),
      hop(C, 1, { as: 'body', delay: 0.1 }),
    ],
  },
  drooling: {
    verb: 'the drool drips down and the mouth gapes',
    parts: [null, null, flex('Y', [12, 15], [12, 16], [1, 1.3, 0.9, 1.04, 1], { as: 'mouth' }), flex('Y', [15, 16], [17.6, 19.2], [1, 1.2, 0.94, 1.02, 1], { as: 'drool', delay: 0.1 })],
  },
  dropbox: {
    verb: 'the box flaps fold open and the box lifts',
    parts: [hop([12, 9.5], 1.2, { as: 'flap' }), beat([12, 18.1], { as: 'box', delay: 0.26 }), hop([12, 9.5], 1.2, { as: 'flap', delay: 0.06 })],
  },
  'dropdown-field-type': {
    verb: 'the chevron drops and the options draw below',
    parts: [null, nudge([16, 8], 0, 1, { as: 'chevron' }), draw({ as: 'option', delay: 0.14 }), draw({ as: 'option', delay: 0.24 })],
  },
  'droplet-off': {
    verb: 'the slash cuts across and the drop fades',
    parts: [dim({ as: 'shine', delay: 0.1 }), draw({ as: 'slash' }), dim({ as: 'drop', delay: 0.1 })],
  },
  droplet: {
    verb: 'the droplet wobbles and its shine redraws',
    parts: [swell([12, 22], [12, 11.8], [1, 0.92, 1.06, 0.99, 1], { as: 'drop' }), retrace({ as: 'shine', delay: 0.14 })],
  },
  droplets: {
    verb: 'the small drop falls and the big one wobbles',
    parts: [swell([9.8, 21], [9.8, 12], [1, 0.94, 1.04, 1, 1], { as: 'drop', delay: 0.1 }), fall([17, 10.5], 0, 2.4, { as: 'drop' }), retrace({ as: 'shine', delay: 0.2 })],
  },
  dropper: {
    verb: 'the bulb squeezes and a drop falls from the tip',
    parts: [null, pop([17.2, 6.8], 0.8, { as: 'bulb' })],
    extras: [
      {
        as: 'drop',
        tag: 'circle',
        attrs: { cx: '3', cy: '21', r: '0.6', strokeWidth: '1.2' },
        transform: ['translateY(0px)', 'translateY(0px)', 'translateY(0.6px)', 'translateY(1.8px)'],
        opacity: [0, 0, 1, 0],
        times: [0, 0.34, 0.5, 1],
        ease: ['linear', 'easeIn', 'easeIn'],
        dur: 0.8,
      },
    ],
  },
  drum: {
    verb: 'the sticks beat the drum head twice',
    parts: [
      flex('Y', [12, 13], [12, 8], [1, 0.8, 1, 0.8, 1], { as: 'head', dur: 0.6 }),
      null,
      null,
      null,
      around([21, 2], [18, 5], [0, 10, 0, 10, 0], { as: 'stick', dur: 0.6 }),
      around([3, 2], [6, 5], [0, -10, 0, -10, 0], { as: 'stick', dur: 0.6 }),
    ],
  },
  drumstick: {
    verb: 'the drumstick waggles and steam rises off it',
    parts: [around([8, 14], [6.2, 17.9], [0, -10, 6, -2, 0], { as: 'bone' }), around([8, 14], [15.5, 8.5], [0, -10, 6, -2, 0], { as: 'meat' })],
    extras: [puff(18, 3, 0.7, 0.4, -1.8, { as: 'steam', delay: 0.1 })],
  },
  'ds-3-tool': {
    verb: 'the tool head pulses and its dots blink',
    parts: [beat([12, 16], { as: 'base', delay: 0.24 }), null, draw({ as: 'slot' }), blink({ as: 'dot', dur: 0.6 }), blink({ as: 'dot', dur: 0.6, delay: 0.12 })],
  },
  dua: {
    verb: 'the hands raise in prayer and the crescent glows',
    parts: [nudge([17, 13.5], 0, -1, { as: 'hand' }), nudge([7, 13.5], 0, -1, { as: 'hand' }), around([12, 6], [12, 6], [0, -12, 6, -2, 0], { as: 'moon' }), pop([14, 4], 2, { as: 'star', delay: 0.2 })],
  },

  // --- dumbbells ------------------------------------------------------------------------------------
  'dumbbell-01': {
    verb: 'the dumbbell lifts along its diagonal and comes back down',
    parts: [ride(C, out(1, -1), { as: 'bar' }), ride([17, 7], out(1, -1), { as: 'plate' }), ride([7, 17], out(1, -1), { as: 'plate' }), null],
  },
  dumbbell: {
    verb: 'the dumbbell is curled: it rocks on its handle',
    parts: [around(C, C, [0, -16, 6, -2, 0], { as: 'bar' }), around(C, [17, 7], [0, -16, 6, -2, 0], { as: 'bar' }), around(C, [7, 17], [0, -16, 6, -2, 0], { as: 'bar' }), null],
  },
  'dumbbell-02': {
    verb: 'the dumbbell twists on its grip',
    parts: [
      around(C, C, [0, 14, -6, 2, 0], { as: 'bar' }),
      null,
      around(C, [19.2, 4.8], [0, 14, -6, 2, 0], { as: 'bar' }),
      around(C, [17.2, 6.8], [0, 14, -6, 2, 0], { as: 'bar' }),
      around(C, [6.5, 17.4], [0, 14, -6, 2, 0], { as: 'bar' }),
    ],
  },
  'dumbbell-03': {
    verb: 'the two barbells press up in turn',
    parts: [
      ride([12, 5.9], out(0, -1.2), { as: 'bar' }),
      ride([12, 16.9], out(0, -1.2), { as: 'bar', delay: 0.14 }),
      ride([12, 6.5], out(0, -1.2), { as: 'bar' }),
      ride([12, 17.5], out(0, -1.2), { as: 'bar', delay: 0.14 }),
      ride([12, 6.5], out(0, -1.2), { as: 'bar' }),
      ride([12, 17.5], out(0, -1.2), { as: 'bar', delay: 0.14 }),
      ride([12, 6.5], out(0, -1.2), { as: 'bar' }),
      ride([12, 17.5], out(0, -1.2), { as: 'bar', delay: 0.14 }),
    ],
  },
}

export default settleSpecs(specs)
