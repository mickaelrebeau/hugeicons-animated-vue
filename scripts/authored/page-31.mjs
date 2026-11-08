/**
 * Page 31 — folder-clock → fuel-station.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted folder-open sits in this span and is skipped.
 *
 * Folders keep the folder still and let the badge act. Forward icons push
 * their triangles ahead. Fries pop out of their carton. The fuel can tips
 * and pours.
 *
 * Identical-geometry pairs get different jobs: forward / forward-01,
 * french-fries / french-fries-01, fuel-01 / fuel-02,
 * folder-shared / folder-shared-01.
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
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const there = (dx, dy) => [[0, 0], [dx, dy], [dx, dy], [0, 0], [0, 0]]
/** The folder answers a badge with a small nod. */
const nod = (o = {}) => beat([12, 12], { as: 'folder', delay: 0.3, ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- folders -----------------------------------------------------------------------------
  'folder-clock': {
    verb: 'the clock hands sweep a full hour on the folder corner',
    parts: [null, lap([17, 16.5], 360, { as: 'hands', dur: 0.9 }), null],
  },
  'folder-cloud': {
    verb: 'the cloud drifts off the corner and floats back',
    parts: [null, ride([17.5, 17.5], out(1, -0.8), { as: 'cloud', dur: 0.8 })],
  },
  'folder-code': {
    verb: 'the code brackets step apart and close again',
    parts: [null, nudge([15.5, 14], 1, 0, { as: 'bracket' }), nudge([8.5, 14], -1, 0, { as: 'bracket' })],
  },
  'folder-cog': {
    verb: 'the gear turns a sixth on the corner',
    parts: [null, lap([18, 17.5], 60, { as: 'gear', dur: 0.66 })],
  },
  'folder-details-reference': {
    verb: 'the detail lines rewrite and the reference arrow points out',
    parts: [null, retrace({ as: 'lines', delay: 0.1 }), ride([8.2, 17.8], out(0.8, -0.8), { as: 'arrow' })],
  },
  'folder-details': {
    verb: 'the detail lines stretch out from the left one after another',
    parts: [null, flex('X', [15, 18], [18.5, 18], [1, 0.3, 1.08, 1, 1], { as: 'lines' })],
  },
  'folder-dot': {
    verb: 'the dot pops in the middle of the folder',
    parts: [pop([12, 14], 1.8, { as: 'dot' }), null],
  },
  'folder-download': {
    verb: 'the download arrow drops into the folder corner',
    parts: [null, ride([19, 17], out(0, 1.4), { as: 'arrow' })],
  },
  'folder-edit': {
    verb: 'the pencil scribbles on the corner',
    parts: [null, ride([18, 17], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' })],
  },
  'folder-export': {
    verb: 'the arrow leaves through the right side',
    parts: [ride([18, 18], out(1.6, 0), { as: 'arrow' }), nod({ delay: 0.1 })],
  },
  'folder-favourite': {
    verb: 'the heart beats on the folder corner',
    parts: [null, { ...beat([17.5, 16.7], { as: 'heart' }), transform: ['scale(1)', 'scale(1.18)', 'scale(0.96)', 'scale(1.1)', 'scale(1)'], times: [0, 0.2, 0.4, 0.6, 1], ease: 'easeInOut', dur: 0.7 }],
  },
  'folder-file-storage': {
    verb: 'the storage file slides out of the corner and back',
    parts: [null, ride([18.5, 17], out(0, -1.2), { as: 'file' })],
  },
  'folder-git-two': {
    verb: 'the branch grows: the stem, the curve, then the two commits pop',
    parts: [null, pop([14, 12.5], 1.25, { as: 'commit', delay: 0.3 }), pop([20, 18.5], 1.25, { as: 'commit', delay: 0.4 }), draw({ as: 'branch', delay: 0.1 }), draw({ as: 'stem' })],
  },
  'folder-git': {
    verb: 'the commit node slides along its line',
    parts: [null, ride([12, 14], [[0, 0], [-2, 0], [2, 0], [0, 0], [0, 0]], { as: 'commit', dur: 0.8 }), null],
  },
  'folder-heart': {
    verb: 'the heart hops on the corner',
    parts: [null, hop([18, 18], 1.4, { as: 'heart' })],
  },
  'folder-import': {
    verb: 'the arrow comes in from the right',
    parts: [ride([18, 18], out(-1.6, 0), { as: 'arrow' }), nod({ delay: 0.1 })],
  },
  'folder-input': {
    verb: 'the arrow pushes into the folder from the left',
    parts: [nod({ delay: 0.16 }), nudge([7, 14], 1.6, 0, { as: 'arrow' })],
  },
  'folder-kanban': {
    verb: 'the three kanban columns grow from the top in turn',
    parts: [
      null,
      flex('Y', [12, 11], [12, 12], [1, 2, 0.9, 1.05, 1], { as: 'column', delay: 0.08 }),
      flex('Y', [16, 11], [16, 14], [1, 0.4, 1.08, 1, 1], { as: 'column', delay: 0.16 }),
      flex('Y', [8, 11], [8, 13], [1, 0.4, 1.08, 1, 1], { as: 'column' }),
    ],
  },
  'folder-key': {
    verb: 'the key turns in the corner',
    parts: [null, around([16.5, 19], [18, 17.5], [0, -30, -24, -26, 0], { as: 'key' })],
  },
  'folder-library': {
    verb: 'the shelves above lift off the box one by one and settle',
    parts: [nod({ delay: 0.24 }), ride([12, 7.3], out(0, -1), { as: 'shelf', delay: 0.08 }), ride([12, 3.3], out(0, -1.4), { as: 'shelf' })],
  },
  'folder-links': {
    verb: 'the chain links rock on the corner',
    parts: [null, around([17, 17], [17, 17], [0, -20, 12, -4, 0], { as: 'chain' })],
  },
  'folder-locked': {
    verb: 'the padlock rattles on the corner',
    parts: [null, shake([18.5, 16.5], { as: 'lock' })],
  },
  'folder-management': {
    verb: 'the settings gear turns a sixth on the corner',
    parts: [null, lap([18, 16.5], -60, { as: 'gear', dur: 0.66 })],
  },
  'folder-minus': {
    verb: 'the minus sign shrinks toward its center and comes back',
    parts: [null, flex('X', [18, 17], [18, 17], [1, 0.3, 1.1, 1, 1], { as: 'minus' })],
  },
  'folder-music': {
    verb: 'the note bounces to a beat',
    parts: [null, ride([18.5, 17], [[0, 0], [0, -1.2], [0, 0], [0, -0.7], [0, 0]], { as: 'note', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 })],
  },
  'folder-off': {
    verb: 'the slash cuts across and the folder fades',
    parts: [dim({ as: 'folder', delay: 0.1 }), dim({ as: 'tab', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'folder-output': {
    verb: 'the arrow leaves through the left side',
    parts: [nod({ delay: 0.16 }), nudge([7, 14], -1.6, 0, { as: 'arrow' })],
  },
  'folder-pen': {
    verb: 'the pen writes along the bottom edge',
    parts: [null, ride([6, 17], [[0, 0], [1, 0.4], [2, -0.2], [0.6, 0.2], [0, 0]], { as: 'pen', dur: 0.72 })],
  },
  'folder-pin': {
    verb: 'the pin is pushed into the corner',
    parts: [null, ride([19, 17], out(0, -1.4), { as: 'pin', times: [0, 0.3, 0.55, 0.8, 1] })],
  },
  'folder-remove': {
    verb: 'the X badge rattles on the corner',
    parts: [null, shake([19, 18], { as: 'x' })],
  },
  'folder-root': {
    verb: 'the root node pops and its stem draws down',
    parts: [pop([12, 14], 1.3, { as: 'node' }), draw({ as: 'stem', delay: 0.12 }), null],
  },
  'folder-search-two': {
    verb: 'the magnifier circles inside the folder',
    parts: [null, ride([12.5, 14], [[0, 0], [1, -0.6], [0, -1.2], [-1, -0.6], [0, 0]], { as: 'lens', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  'folder-search': {
    verb: 'the magnifier zooms on the corner',
    parts: [null, swell([21, 20], [18, 17], [1, 1.2, 0.95, 1.03, 1], { as: 'lens' })],
  },
  'folder-security': {
    verb: 'the shield stamps on the corner',
    parts: [null, stamp([18.5, 17], { as: 'shield' })],
  },
  'folder-shared-01': {
    verb: 'the person rises up the corner and the folder nods',
    parts: [ride([18.5, 19.5], out(0, -0.6), { as: 'body', delay: 0.06 }), hop([18.5, 13.8], 1.2, { as: 'head' }), null],
  },
  'folder-shared-02': {
    verb: 'the share links swing around their middle node',
    parts: [lap([16.5, 16.5], 120, { as: 'share', dur: 0.72 }), null],
  },
  'folder-shared-03': {
    verb: 'the folder lifts on its stand and the network line pulses',
    parts: [flex('X', [12, 22], [12, 20], [1, 1.12, 0.96, 1, 1], { as: 'network', delay: 0.16 }), hop([12, 10], 1, { as: 'folder' })],
  },
  'folder-shared': {
    verb: 'the person waves: the head tilts while the shoulders lift',
    parts: [ride([18.5, 19.5], out(0, -0.5), { as: 'body' }), around([18.5, 15.5], [18.5, 13.8], [0, -18, 12, -4, 0], { as: 'head' }), null],
  },
  'folder-symlink': {
    verb: 'the folder with its link arrow skews forward and back',
    parts: [{ as: 'folder', origin: [12, 21], transform: ['skewX(0deg)', 'skewX(-6deg)', 'skewX(3deg)', 'skewX(0deg)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.62 }],
  },
  'folder-sync': {
    verb: 'the sync arrows spin a half turn',
    parts: [null, lap([18, 17], 180, { as: 'sync', dur: 0.82 })],
  },
  'folder-transfer': {
    verb: 'the two folders trade places along the arrows',
    parts: [
      draw({ as: 'arrow', delay: 0.2 }),
      draw({ as: 'arrow', delay: 0.2 }),
      ride([7.5, 7], out(1.2, 1.2), { as: 'folder' }),
      ride([16.5, 17], out(-1.2, -1.2), { as: 'folder' }),
    ],
  },
  'folder-tree': {
    verb: 'the branches draw down and the child folders pop in turn',
    parts: [pop([16.5, 6.5], 1.12, { as: 'child', delay: 0.16 }), pop([16.5, 17.5], 1.12, { as: 'child', delay: 0.3 }), draw({ as: 'branch' }), draw({ as: 'trunk', delay: 0.05 })],
  },
  'folder-unknown': {
    verb: 'the question mark tilts, puzzled',
    parts: [null, around([18.5, 21], [18.5, 16.3], [0, -14, 10, -4, 0], { as: 'question' })],
  },
  'folder-unlocked': {
    verb: 'the shackle lifts and swings open',
    parts: [ride([18.5, 16.5], out(0, -1.2), { as: 'lock' }), null],
  },
  'folder-upload': {
    verb: 'the upload arrow rises out of the corner',
    parts: [ride([19, 17], out(0, -1.4), { as: 'arrow' }), null],
  },
  'folder-video': {
    verb: 'the camera lens blinks like it is recording',
    parts: [null, blink({ as: 'camera' })],
  },
  'folder-view': {
    verb: 'the eye blinks and the pupil looks around',
    parts: [null, flex('Y', [17, 18], [17, 18], [1, 0.1, 1, 1, 1], { as: 'eye', dur: 0.5 }), ride([17, 18], [[0, 0], [-0.8, 0], [0.8, 0], [0, 0], [0, 0]], { as: 'pupil', delay: 0.2 })],
  },
  'folder-zip': {
    verb: 'the zipper pulls down and back up',
    parts: [ride([15, 11], out(0, 1.4), { as: 'zip' }), null],
  },
  folder: {
    verb: 'the folder flap opens and closes',
    parts: [{ as: 'folder', origin: [12, 21], transform: ['scaleY(1)', 'scaleY(0.9)', 'scaleY(1.04)', 'scaleY(1)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.56 }],
  },
  folders: {
    verb: 'the back folder lifts out from behind the front one',
    parts: [nod({ delay: 0.2 }), ride([12, 4.5], out(0, -1.4), { as: 'back' })],
  },

  // --- sports, food, misc -------------------------------------------------------------------
  'football-pitch': {
    verb: 'the ball rolls from goal to goal across the center line',
    parts: [null, ride(C, [[0, 0], [-5, 0], [5, 0], [0, 0], [0, 0]], { as: 'ball', times: [0, 0.3, 0.7, 0.9, 1], ease: 'easeInOut', dur: 1 }), null, pop([20.3, 12], 1.1, { as: 'goal', delay: 0.5 }), pop([3.8, 12], 1.1, { as: 'goal', delay: 0.2 })],
  },
  football: {
    verb: 'the ball spins a fifth on its pentagon',
    parts: [lap(C, 72, { as: 'ball' }), lap(C, 72, { as: 'ball' }), lap(C, 72, { as: 'ball' }), lap(C, 72, { as: 'ball' })],
  },
  footprints: {
    verb: 'the two feet step forward in turn',
    parts: [ride([17.4, 14], [[0, 0], [0, -1.6], [0, -1.6], [0, 0], [0, 0]], { as: 'foot', delay: 0.24 }), ride([6.6, 10], [[0, 0], [0, -1.6], [0, -1.6], [0, 0], [0, 0]], { as: 'foot' })],
  },
  'forgot-password': {
    verb: 'the padlock shakes, the dots blink out one by one and a question mark asks',
    parts: [shake([10, 15.5], { as: 'lock' }), null, dim({ as: 'dot', delay: 0.12 }), pop([19, 21.8], 1.6, { as: 'dot', delay: 0.3 }), dim({ as: 'dot', delay: 0.04 }), around([19, 18.5], [19, 15.8], [0, -14, 10, -4, 0], { as: 'question', delay: 0.18 })],
  },
  fork: {
    verb: 'the fork stabs forward and the tines answer',
    parts: [ride([16.3, 7.8], out(0.8, -0.8), { as: 'tines', delay: 0.06 }), ride([11.9, 12.1], out(0.8, -0.8), { as: 'fork' })],
  },
  forklift: {
    verb: 'the forks lift up the mast and drive forward',
    parts: [
      ride([19, 19], [[0, 0], [0, -4], [0, -4], [0, 0], [0, 0]], { as: 'forks', dur: 0.9 }),
      null,
      null,
      lap([14, 19], 180, { as: 'wheel', dur: 0.9 }),
      lap([6, 19], 180, { as: 'wheel', dur: 0.9 }),
      null,
      null,
    ],
  },
  form: {
    verb: 'the input field fills while the lines rewrite',
    parts: [flex('X', [4, 10], [12, 10], [1, 0.3, 1.04, 1, 1], { as: 'field', delay: 0.1 }), retrace({ as: 'line' }), retrace({ as: 'line', delay: 0.16 }), retrace({ as: 'line', delay: 0.24 })],
  },
  forrst: {
    verb: 'the branches of the tree spread one after another',
    parts: [beat([12, 13], { as: 'tree', delay: 0.3 }), draw({ as: 'branch', delay: 0.16 }), draw({ as: 'branch', delay: 0.08 }), draw({ as: 'branch' })],
  },
  fortress: {
    verb: 'the fortress braces for a hit',
    parts: [{ ...shake([12, 21], { as: 'fortress' }), dur: 0.5 }],
  },
  'forward-01': {
    verb: 'the triangle pushes toward the bar, which steadies it',
    parts: [nudge([14, 12], -1.4, 0, { as: 'play' }), ride([4, 12], out(-0.6, 0), { as: 'bar', delay: 0.1 })],
  },
  forward: {
    verb: 'the play triangle stretches away from the bar and snaps back',
    parts: [flex('X', [8, 12], [14, 12], [1, 1.16, 0.95, 1.02, 1], { as: 'play' }), null],
  },
  'forward-02': {
    verb: 'the two triangles fast-forward one after the other',
    parts: [ride([17, 12], out(1.6, 0), { as: 'triangle', delay: 0.08 }), ride([7, 12], out(1.6, 0), { as: 'triangle' })],
    extras: [trail('M1 9H3M1 15H3', -1.4, { delay: 0.1 })],
  },
  'four-circle': {
    verb: 'the 4 rewrites inside the circle',
    parts: [sweep({ as: 'four' }), null],
  },
  'four-finger-02': {
    verb: 'the four fingers wave hello',
    parts: [around([11.8, 22], [11.8, 12], [0, -10, 8, -4, 0], { as: 'hand' })],
  },
  'four-finger-03': {
    verb: 'the hand presses down like a tap',
    parts: [{ ...beat([12, 21.5], { as: 'hand' }), transform: ['translateY(0px) scale(1)', 'translateY(0.8px) scale(0.94)', 'translateY(-0.2px) scale(1.02)', 'translateY(0px) scale(1)'], times: [0, 0.3, 0.62, 1], dur: 0.5 }],
  },
  'four-k': {
    verb: 'the 4K label flips in its screen',
    parts: [null, flip(C, 1, { as: 'label' })],
  },
  'four-square': {
    verb: 'the 4 pops inside the square',
    parts: [null, pop(C, 1.18, { as: 'four' })],
  },
  frame: {
    verb: 'the crop guides slide apart and close on the frame',
    parts: [flex('Y', C, C, [1, 1.2, 0.95, 1.02, 1], { as: 'rails' }), flex('X', C, C, [1, 1.2, 0.95, 1.02, 1], { as: 'rails', delay: 0.08 })],
  },
  framer: {
    verb: 'the lower tab folds out and the logo settles',
    parts: [hop([12, 9], 0.8, { as: 'logo', delay: 0.14 }), ride([9, 18], out(-0.8, 1), { as: 'tab' })],
  },
  frameworks: {
    verb: 'the blocks connect: the center link, then the side pieces, then the corners',
    parts: [
      pop([12, 4], 1.2, { as: 'node', delay: 0.2 }),
      pop([12, 20], 1.2, { as: 'node', delay: 0.2 }),
      draw({ as: 'link', delay: 0.3 }),
      draw({ as: 'link', delay: 0.3 }),
      draw({ as: 'link', delay: 0.3 }),
      draw({ as: 'link', delay: 0.3 }),
      draw({ as: 'bridge' }),
      pop([19, 12], 1.2, { as: 'node', delay: 0.1 }),
      pop([5, 12], 1.2, { as: 'node', delay: 0.1 }),
    ],
  },
  'french-fries-01': {
    verb: 'the fries pop up out of the carton',
    parts: [nod({ delay: 0.16 }), ride([13.1, 6.6], out(0, -1.6), { as: 'fries' }), null],
  },
  'french-fries-02': {
    verb: 'the three fries spring out of the box in turn',
    parts: [null, ride([12, 7.5], out(0, -1.6), { as: 'fry', delay: 0.08 }), ride([7, 6.5], out(-0.8, -1.4), { as: 'fry' }), ride([17, 7.5], out(0.8, -1.4), { as: 'fry', delay: 0.16 })],
  },
  'french-fries': {
    verb: 'the carton wiggles and the smile grins',
    parts: [around([11.5, 22], [11.5, 15.2], [0, -6, 4, -2, 0], { as: 'carton' }), around([11.5, 22], [13.1, 6.6], [0, -6, 4, -2, 0], { as: 'carton' }), flex('X', [8.1, 15.5], [8.1, 15.5], [1, 1.2, 0.96, 1, 1], { as: 'smile', delay: 0.1 })],
  },
  fridge: {
    verb: 'the handles are tugged in turn, the fridge rocks on its feet',
    parts: [
      around([12, 22], C, [0, -2, 1.5, -0.5, 0], { as: 'body', delay: 0.1 }),
      around([12, 22], [12, 11], [0, -2, 1.5, -0.5, 0], { as: 'body', delay: 0.1 }),
      hold([9, 16.5], -1.2, 0, { as: 'handle', delay: 0.16, dur: 0.6 }),
      hold([9, 6.5], -1.2, 0, { as: 'handle', dur: 0.6 }),
    ],
  },
  frisbee: {
    verb: 'the disc flies up and spins as the motion lines trail',
    parts: [draw({ as: 'trail', delay: 0.1 }), draw({ as: 'trail', delay: 0.16 }), ride([14.5, 9.5], out(1.4, -1.4), { as: 'disc' })],
  },
  frown: {
    verb: 'the frown deepens and the eyes squeeze',
    parts: [null, flex('Y', [12, 16], [12, 15], [1, 1.8, 1.4, 1.1, 1], { as: 'mouth' }), flex('Y', [12, 8.8], [12, 8.8], [1, 0.3, 0.3, 1, 1], { as: 'eyes' })],
  },
  fry: {
    verb: 'the egg wobbles in the pan as the yolk pops',
    parts: [shake([14.5, 9.5], { as: 'pan' }), { ...swell([15, 9], [15, 9], [1, 1.1, 0.95, 1.03, 1], { as: 'egg' }), delay: 0.1 }, around([14.5, 9.5], [5.5, 18.5], [0, -4, 4, -2, 0], { as: 'handle' }), pop([15, 9], 2, { as: 'yolk', delay: 0.2 })],
  },
  'fuel-01': {
    verb: 'the can tips to pour and a drop falls',
    parts: [
      around([20, 22], [12, 13.3], [0, 10, 10, 0, 0], { as: 'can' }),
      fall([12, 15.5], 0, 3, { as: 'drop', delay: 0.16 }),
      around([20, 22], [14.5, 9], [0, 10, 10, 0, 0], { as: 'can' }),
      around([20, 22], [7.8, 3.3], [0, 10, 10, 0, 0], { as: 'can' }),
    ],
  },
  'fuel-02': {
    verb: 'the fuel drop swells and the cap twists',
    parts: [null, swell([12, 18], [12, 15.5], [1, 1.25, 0.95, 1.04, 1], { as: 'drop' }), retrace({ as: 'stripe', delay: 0.1 }), ride([7.8, 3.3], out(0, -1), { as: 'cap' })],
  },
  'fuel-station': {
    verb: 'the flame flickers in the pump window while the hose swings',
    parts: [swell([10, 18], [10, 15.5], [1, 1.2, 0.92, 1.06, 1], { as: 'flame' }), null, null, null, around([16, 14], [19, 12], [0, -10, 6, -2, 0], { as: 'hose' })],
  },
}

export default settleSpecs(specs)
