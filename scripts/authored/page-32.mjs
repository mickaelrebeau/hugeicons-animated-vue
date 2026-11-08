/**
 * Page 32 — fuel → globe.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * full-screen, github. Hidden handcrafted ghost and gift sit in this span
 * and are skipped too.
 *
 * Git icons grow their branches and pop their commits along the flow.
 * Globes spin their meridians. Game controllers press their buttons.
 * Gallery strips slide their cards.
 *
 * Identical-geometry pairs get different jobs: game-controller /
 * game-controller-01, geometric-shapes / geometric-shapes-01, gif / gif-01.
 *
 * globe [2] carries an SVG transform attribute, so it stays still.
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
  trail,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** A button pressed in. */
const press = (origin, o = {}) => ({
  as: 'button',
  origin,
  transform: ['scale(1)', 'scale(0.6)', 'scale(1.15)', 'scale(1)'],
  times: [0, 0.24, 0.56, 1],
  ease: ['easeIn', 'easeOut', 'easeOut'],
  dur: 0.42,
  ...o,
})
/** A meridian curve swinging as the globe turns: squeeze on X and back. */
const spin = (origin, o = {}) => ({
  as: 'meridian',
  origin,
  transform: ['scaleX(1)', 'scaleX(0.1)', 'scaleX(-1)', 'scaleX(-1)', 'scaleX(1)'],
  times: [0, 0.3, 0.55, 0.6, 1],
  ease: ['easeIn', 'easeOut', 'linear', 'easeInOut'],
  dur: 0.9,
  ...o,
})

// ---------------------------------------------------------------------------

const specs = {
  fuel: {
    verb: 'the drop swells inside the can and the cap lifts',
    parts: [ride([7, 4.8], out(0, -1), { as: 'cap' }), retrace({ as: 'spout', delay: 0.1 }), null, swell([12, 17.5], [12, 13.9], [1, 1.2, 0.94, 1.04, 1], { as: 'drop', delay: 0.06 })],
  },
  'full-signal': {
    verb: 'the three signal bars grow from the baseline in turn',
    parts: [
      { ...flex('Y', [18.5, 19], [18.5, 12], [1, 0.2, 1.06, 1, 1], { as: 'bar' }), delay: 0.16 },
      { ...flex('Y', [12, 19], [12, 13.5], [1, 0.2, 1.06, 1, 1], { as: 'bar' }), delay: 0.08 },
      flex('Y', [5.5, 19], [5.5, 15.5], [1, 0.2, 1.06, 1, 1], { as: 'bar' }),
    ],
  },
  'function-circle': {
    verb: 'the f rewrites inside the circle',
    parts: [sweep({ as: 'f' }), null],
  },
  'function-of-x': {
    verb: 'the f rewrites and the brackets close on the x',
    parts: [sweep({ as: 'f' }), nudge([21.7, 16], -0.8, 0, { as: 'paren', delay: 0.2 }), nudge([11.3, 16], 0.8, 0, { as: 'paren', delay: 0.2 }), lap([16.5, 16], 90, { as: 'x', dur: 0.6, delay: 0.1 }), lap([16.5, 16], 90, { as: 'x', dur: 0.6, delay: 0.1 })],
  },
  'function-square': {
    verb: 'the f leans like italic and straightens inside the square',
    parts: [{ as: 'f', origin: [12, 17], transform: ['skewX(0deg)', 'skewX(-14deg)', 'skewX(4deg)', 'skewX(0deg)'], times: [0, 0.34, 0.68, 1], ease: 'easeInOut', dur: 0.6 }, null],
  },
  function: {
    verb: 'the f draws its curve, then crosses its bar',
    parts: [retrace({ as: 'f' }), draw({ as: 'bar', delay: 0.3 })],
  },
  'funnel-plus': {
    verb: 'the plus spins a quarter beside the funnel',
    parts: [null, lap([18.8, 5.8], 90, { as: 'plus', dur: 0.6 })],
  },
  'funnel-x': {
    verb: 'the X rattles beside the funnel',
    parts: [shake([19.3, 5.3], { as: 'x' }), null],
  },
  funnel: {
    verb: 'the funnel squeezes and a drop slips through the spout',
    parts: [flex('X', [12, 12], [12, 12.1], [1, 0.9, 1.04, 1, 1], { as: 'funnel' })],
    extras: [{ as: 'drop', tag: 'circle', attrs: { cx: '12', cy: '20', r: '0.8', fill: 'currentColor', stroke: 'none' }, opacity: [0, 0, 1, 0], transform: ['translateY(-2px)', 'translateY(-2px)', 'translateY(0px)', 'translateY(2.5px)'], times: [0, 0.3, 0.6, 1], ease: ['linear', 'easeIn', 'easeIn'], dur: 0.7 }],
  },
  galaxy: {
    verb: 'the spiral arms turn around the core',
    parts: [lap([12.4, 12], 180, { as: 'arm', dur: 1 }), lap([11.6, 12], 180, { as: 'arm', dur: 1, delay: 0.04 }), pop(C, 1.2, { as: 'core' })],
  },
  'gallery-horizontal-end': {
    verb: 'the front card slides left and the stack behind steps aside',
    parts: [ride([16, 12], out(-1.4, 0), { as: 'card' }), ride([7, 12], out(-0.8, 0), { as: 'stack', delay: 0.06 }), ride([3, 12], out(-0.5, 0), { as: 'stack', delay: 0.1 })],
  },
  'gallery-horizontal': {
    verb: 'the card swipes right and the edges behind follow',
    parts: [ride([2, 12], out(0.5, 0), { as: 'edge', delay: 0.1 }), ride([16, 12], out(1.4, 0), { as: 'card' }), ride([6, 12], out(0.8, 0), { as: 'edge', delay: 0.06 })],
  },
  'gallery-thumbnails': {
    verb: 'the dots step along as the picture slides',
    parts: [
      ride([12, 9.5], [[0, 0], [-1.2, 0], [0.2, 0], [0, 0], [0, 0]], { as: 'picture' }),
      pop([4.5, 20], 1.8, { as: 'dot' }),
      pop([9.5, 20], 1.8, { as: 'dot', delay: 0.1 }),
      pop([14.5, 20], 1.8, { as: 'dot', delay: 0.2 }),
      pop([19.5, 20], 1.8, { as: 'dot', delay: 0.3 }),
    ],
  },
  'gallery-vertical-end': {
    verb: 'the card scrolls up under the stacked edges',
    parts: [ride([12, 2], out(0, -0.5), { as: 'edge', delay: 0.1 }), ride([12, 16], out(0, -1.4), { as: 'card' }), ride([12, 6], out(0, -0.8), { as: 'edge', delay: 0.06 })],
  },
  'gallery-vertical': {
    verb: 'the card scrolls down over the stacked edges',
    parts: [ride([12, 22], out(0, 0.5), { as: 'edge', delay: 0.1 }), ride([12, 8], out(0, 1.4), { as: 'card' }), ride([12, 18], out(0, 0.8), { as: 'edge', delay: 0.06 })],
  },
  'game-controller-01': {
    verb: 'the cable wiggles while the controller is held',
    parts: [null, { as: 'cable', origin: [12, 9], transform: ['skewX(0deg)', 'skewX(-12deg)', 'skewX(10deg)', 'skewX(-4deg)', 'skewX(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.7 }, null],
  },
  'game-controller': {
    verb: 'the controller rumbles in the hands and the button is pressed',
    parts: [press([12, 13]), null, shake([12, 13.9], { as: 'pad', dur: 0.5 })],
  },
  'game-controller-02': {
    verb: 'the two sticks circle like thumbs are on them',
    parts: [
      ride([15.5, 16], [[0, 0], [0.8, 0], [0, 0.8], [-0.8, 0], [0, 0]], { as: 'stick', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }),
      ride([8.5, 16], [[0, 0], [-0.8, 0], [0, -0.8], [0.8, 0], [0, 0]], { as: 'stick', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }),
      null,
      null,
    ],
  },
  'game-controller-03': {
    verb: 'the shoulder buttons click and the face buttons answer',
    parts: [null, ride([12, 4.3], out(0, 0.6), { as: 'shoulder' }), lap([7.5, 11.5], 90, { as: 'dpad', dur: 0.56 }), press([16, 10], { delay: 0.14 }), press([18, 13], { delay: 0.22 })],
  },
  game: {
    verb: 'the console hops and the cable swings',
    parts: [hop([12, 14.5], 1, { as: 'console' }), around([12, 7], [13, 4.5], [0, -14, 10, -4, 0], { as: 'cable' }), lap([8.5, 14.5], 90, { as: 'dpad', dur: 0.6 }), press([17, 14.5], { delay: 0.2 })],
  },
  gameboy: {
    verb: 'the screen lights up as the buttons are pressed',
    parts: [blink({ as: 'screen', delay: 0.2 }), lap([9, 17], 90, { as: 'dpad', dur: 0.56 }), press([17, 17], { delay: 0.1 }), null],
  },
  'gamepad-directional': {
    verb: 'the four directional keys press in a clockwise round',
    parts: [
      ride([12, 5.8], out(0, 0.8), { as: 'key', dur: 0.4 }),
      ride([12, 18.3], out(0, -0.8), { as: 'key', dur: 0.4, delay: 0.24 }),
      ride([18.3, 12], out(-0.8, 0), { as: 'key', dur: 0.4, delay: 0.12 }),
      ride([5.8, 12], out(0.8, 0), { as: 'key', dur: 0.4, delay: 0.36 }),
    ],
  },
  gamepad: {
    verb: 'the cross turns and the two buttons are tapped',
    parts: [null, lap([8, 12], 90, { as: 'dpad', dur: 0.6 }), press([17.8, 10.7], { delay: 0.1 }), press([15.3, 13.2], { delay: 0.22 })],
  },
  garage: {
    verb: 'the door rolls up into the frame and comes back down',
    parts: [
      null,
      null,
      ride([12, 16], [[0, 0], [0, -3], [0, -3], [0, 0], [0, 0]], { as: 'slat', dur: 0.9 }),
      { ...ride([12, 19], [[0, 0], [0, -3], [0, -3], [0, 0], [0, 0]], { as: 'slat', dur: 0.9 }), opacity: [1, 0, 0, 1, 1] },
      blink({ as: 'light' }),
    ],
  },
  'garbage-truck': {
    verb: 'the truck drives off and the bin lid tips',
    parts: [
      lap([17, 18], 360, { as: 'wheel', dur: 0.8 }),
      lap([7, 18], 360, { as: 'wheel', dur: 0.8 }),
      draw({ as: 'stripe', delay: 0.1 }),
      draw({ as: 'stripe', delay: 0.16 }),
      ride([12, 11], [[0, 0], [0, -0.6], [0, 0], [0, -0.3], [0, 0]], { as: 'body', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.8 }),
      ride([18.5, 9.5], [[0, 0], [0, -0.6], [0, 0], [0, -0.3], [0, 0]], { as: 'body', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.8 }),
    ],
  },
  garlands: {
    verb: 'the pennants swing on their strings, the top row then the bottom',
    parts: [
      null,
      around([12, 6], [12, 8.5], [0, -10, 7, -3, 0], { as: 'flag' }),
      around([4.8, 4.8], [4.8, 7.5], [0, -10, 7, -3, 0], { as: 'flag', delay: 0.04 }),
      around([19.2, 4.8], [19.2, 7.5], [0, -10, 7, -3, 0], { as: 'flag', delay: 0.08 }),
      null,
      around([12, 16], [12, 18.5], [0, 10, -7, 3, 0], { as: 'flag', delay: 0.16 }),
      around([4.8, 14.8], [4.8, 17.5], [0, 10, -7, 3, 0], { as: 'flag', delay: 0.2 }),
      around([19.2, 14.8], [19.3, 17.5], [0, 10, -7, 3, 0], { as: 'flag', delay: 0.24 }),
    ],
  },
  'gas-pipe': {
    verb: 'the valve wheel turns and the needle swings on the gauge',
    parts: [null, null, null, null, around([12, 7], [12.8, 6.3], [0, 70, 50, 60, 0], { as: 'needle' }), lap([12, 19], 90, { as: 'valve', dur: 0.62 })],
  },
  'gas-stove': {
    verb: 'the burner flame turns and the knobs click on',
    parts: [pop([12, 10], 1.1, { as: 'burner', delay: 0.2 }), lap([12, 10], 90, { as: 'flame', dur: 0.66 }), null, press([12, 18], { delay: 0.1 }), press([16, 18], { delay: 0.16 }), press([8, 18])],
  },
  gauge: {
    verb: 'the needle sweeps to the left and back up to the right',
    parts: [null, null, around([12, 14], [16.3, 9.8], [0, -110, 8, -2, 0], { as: 'needle', dur: 0.9 })],
  },
  gavel: {
    verb: 'the gavel lifts and strikes',
    parts: [
      around([3, 21], [10.4, 5.6], [0, -16, 6, -1, 0], { as: 'gavel', times: [0, 0.4, 0.56, 0.78, 1] }),
      around([3, 21], [18.4, 13.6], [0, -16, 6, -1, 0], { as: 'gavel', times: [0, 0.4, 0.56, 0.78, 1] }),
      around([3, 21], [14.4, 9.6], [0, -16, 6, -1, 0], { as: 'gavel', times: [0, 0.4, 0.56, 0.78, 1] }),
      around([3, 21], [7.7, 16.3], [0, -16, 6, -1, 0], { as: 'gavel', times: [0, 0.4, 0.56, 0.78, 1] }),
    ],
  },
  gears: {
    verb: 'the two gears turn against each other',
    parts: [lap([8, 7.3], 120, { as: 'gear', dur: 0.9 }), lap([16, 16.8], -120, { as: 'gear', dur: 0.9 }), null, null],
  },
  gem: {
    verb: 'the gem catches the light and sparkles',
    parts: [pop(C, 1.06, { as: 'gem' }), retrace({ as: 'facets', delay: 0.1 })],
    extras: [{ ...glint(18.5, 4.5, 1.3), delay: 0.2 }],
  },
  'geology-crust': {
    verb: 'the layers pulse outward from the core',
    parts: [null, pop(C, 1.04, { as: 'crust', delay: 0.3 }), pop([12, 12], 1.12, { as: 'core' }), pop([8.8, 12], 1.1, { as: 'mantle', delay: 0.1 }), pop([16, 11.6], 1.06, { as: 'layer', delay: 0.2 })],
  },
  'geometric-shapes-01': {
    verb: 'each shape plays in turn: the triangle hops, the square turns, the circle swells, the X spins',
    parts: [hop([17.5, 6], 1.2, { as: 'triangle' }), lap([6, 6], 90, { as: 'square', dur: 0.6, delay: 0.1 }), pop([17.5, 18], 1.15, { as: 'circle', delay: 0.2 }), lap([6, 18], 90, { as: 'x', dur: 0.6, delay: 0.3 })],
  },
  'geometric-shapes': {
    verb: 'the four shapes trade places clockwise and come back',
    parts: [ride([17.5, 6], out(0, 1.2), { as: 'shape' }), ride([6, 6], out(1.2, 0), { as: 'shape' }), ride([17.5, 18], out(-1.2, 0), { as: 'shape' }), ride([6, 18], out(0, -1.2), { as: 'shape' })],
  },
  'geometric-shapes-02': {
    verb: 'the circle rolls onto the stacked squares',
    parts: [ride([6.5, 6.5], out(1.2, 1.2), { as: 'circle' }), null, beat([17.5, 16.5], { as: 'square', delay: 0.24 })],
  },
  'georgian-lari': {
    verb: 'the lari curve rewrites and the base line underlines it',
    parts: [sweep({ as: 'curve' }), ride([13, 7.5], out(0, -0.8), { as: 'stroke', delay: 0.1 }), ride([9, 7.5], out(0, -0.8), { as: 'stroke', delay: 0.14 }), draw({ as: 'base', delay: 0.2 })],
  },
  'gibbous-moon': {
    verb: 'the moon tilts and its rim glows',
    parts: [around([11.5, 12.5], [11.5, 12.5], [0, -12, 6, -2, 0], { as: 'moon' }), retrace({ as: 'rim', delay: 0.1 })],
  },
  'gif-01': {
    verb: 'the GIF label plays: the letters flicker like frames',
    parts: [{ as: 'label', opacity: [1, 0.2, 1, 0.2, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, null],
  },
  gif: {
    verb: 'the file folds its corner and the label hops',
    parts: [hop([12, 19], 1, { as: 'label', delay: 0.1 }), pop([12, 7.5], 1.05, { as: 'file' })],
  },
  'gif-02': {
    verb: 'the GIF label slides in from the side',
    parts: [null, ride([14, 16.5], out(1.4, 0), { as: 'label' })],
  },
  'gift-card-02': {
    verb: 'the ribbon bow twirls on the card',
    parts: [null, null, null, lap([10, 12], 90, { as: 'bow', dur: 0.62 })],
  },
  'gift-card': {
    verb: 'the bow loops flap and the ribbon tails flutter',
    parts: [
      null,
      around([12, 13], [9, 9.2], [0, -14, 8, -3, 0], { as: 'loop' }),
      around([12, 13], [15, 9.2], [0, 14, -8, 3, 0], { as: 'loop' }),
      null,
      null,
      flex('Y', [12, 13], [12, 14.5], [1, 1.4, 0.9, 1.05, 1], { as: 'tails', delay: 0.1 }),
    ],
  },
  'git-branch-minus': {
    verb: 'the minus pulls the branch back in',
    parts: [retrace({ as: 'branch', delay: 0.1 }), flex('X', [18, 18], [18, 18], [1, 0.3, 1.1, 1, 1], { as: 'minus' }), pop([18, 6], 1.2, { as: 'node', delay: 0.24 }), null],
  },
  'git-branch-plus': {
    verb: 'the plus spins, then the new branch draws to its node',
    parts: [null, pop([18, 6], 1.25, { as: 'node', delay: 0.3 }), null, draw({ as: 'branch', delay: 0.1 }), lap([18, 18], 90, { as: 'plus', dur: 0.6 }), lap([18, 18], 90, { as: 'plus', dur: 0.6 })],
  },
  'git-branch': {
    verb: 'the trunk draws down, the branch bends off and the nodes pop',
    parts: [draw({ as: 'branch', delay: 0.16 }), draw({ as: 'trunk' }), pop([5, 5], 1.25, { as: 'node' }), pop([19, 5], 1.25, { as: 'node', delay: 0.4 }), pop([5, 19], 1.25, { as: 'node', delay: 0.2 })],
  },
  'git-commit-horizontal': {
    verb: 'the commit slides along the horizontal line',
    parts: [ride(C, [[0, 0], [-3, 0], [3, 0], [0, 0], [0, 0]], { as: 'commit', dur: 0.8 }), null],
  },
  'git-commit-vertical': {
    verb: 'the line flows down through the commit, which pops',
    parts: [draw({ as: 'line' }), pop(C, 1.25, { as: 'commit', delay: 0.16 }), draw({ as: 'line', delay: 0.26 })],
  },
  'git-commit': {
    verb: 'the commit node drops onto the line and settles',
    parts: [null, ride(C, out(0, -2.4), { as: 'commit' })],
  },
  'git-compare-arrows': {
    verb: 'the two arrows trade between the nodes',
    parts: [pop([5, 6], 1.2, { as: 'node' }), ride([15.5, 8.5], out(1, 0), { as: 'shaft', delay: 0.06 }), pop([19, 18], 1.2, { as: 'node', delay: 0.16 }), ride([8.5, 15.5], out(-1, 0), { as: 'shaft', delay: 0.06 }), ride([10.5, 18], out(-1, 0), { as: 'head', delay: 0.06 }), ride([13.5, 6], out(1, 0), { as: 'head', delay: 0.06 })],
  },
  'git-compare': {
    verb: 'the two lines redraw toward their nodes, which pop',
    parts: [retrace({ as: 'line' }), retrace({ as: 'line', delay: 0.08 }), pop([19, 19], 1.25, { as: 'node', delay: 0.3 }), pop([5, 5], 1.25, { as: 'node', delay: 0.36 })],
  },
  'git-fork': {
    verb: 'the fork splits: the stem grows and the two tips pop',
    parts: [pop([6, 6], 1.25, { as: 'node', delay: 0.3 }), pop([12, 18], 1.2, { as: 'node' }), pop([18, 6], 1.25, { as: 'node', delay: 0.36 }), draw({ as: 'fork', delay: 0.06 })],
  },
  'git-graph': {
    verb: 'the graph steps down the left lane, then the right branch curls',
    parts: [pop([5, 6], 1.25, { as: 'node' }), draw({ as: 'lane', delay: 0.1 }), pop([5, 18], 1.25, { as: 'node', delay: 0.2 }), null, pop([19, 6], 1.25, { as: 'node', delay: 0.4 }), draw({ as: 'branch', delay: 0.3 })],
  },
  'git-merge-conflict': {
    verb: 'the conflict X rattles while the merge line waits',
    parts: [retrace({ as: 'branch', delay: 0.2 }), null, shake([6, 6], { as: 'x' }), shake([6, 6], { as: 'x' }), pop([18, 18], 1.2, { as: 'node', delay: 0.3 })],
  },
  'git-merge': {
    verb: 'the side branch joins the trunk and the merge node pops',
    parts: [pop([7, 18], 1.2, { as: 'node', delay: 0.3 }), pop([7, 6], 1.2, { as: 'node' }), ride([17, 12], out(-1, 0), { as: 'node', delay: 0.1 }), retrace({ as: 'merge' })],
  },
  'git-pull-request-arrow': {
    verb: 'the request arrow loops back to the base node',
    parts: [pop([5, 6], 1.2, { as: 'node', delay: 0.3 }), draw({ as: 'trunk' }), pop([19, 18], 1.2, { as: 'node', delay: 0.1 }), ride([15.5, 7], out(-1, 0), { as: 'arrow', delay: 0.16 })],
  },
  'git-pull-request-closed': {
    verb: 'the X closes the request, the branch fades',
    parts: [null, dim({ as: 'line', delay: 0.1 }), null, null, dim({ as: 'node', delay: 0.1 }), lap([18, 6], 90, { as: 'x', dur: 0.56 })],
  },
  'git-pull-request-create-arrow': {
    verb: 'the plus spins open a new request and the arrow points back',
    parts: [pop([5, 6], 1.2, { as: 'node', delay: 0.3 }), null, ride([15.5, 7], out(-1, 0), { as: 'arrow', delay: 0.1 }), lap([19, 18], 90, { as: 'plus', dur: 0.6 })],
  },
  'git-pull-request-create': {
    verb: 'the plus pops, then the request branch draws over',
    parts: [pop([6, 6], 1.2, { as: 'node', delay: 0.3 }), null, pop([18, 18], 1.4, { as: 'plus' }), pop([18, 18], 1.4, { as: 'plus' }), draw({ as: 'branch', delay: 0.16 })],
  },
  'git-pull-request-draft': {
    verb: 'the draft dots blink in, waiting to become a line',
    parts: [null, null, null, pop([18, 18], 1.2, { as: 'node', delay: 0.3 }), pop([18, 11], 2, { as: 'dot', delay: 0.14 }), pop([18, 6], 2, { as: 'dot' })],
  },
  'git-pull-request': {
    verb: 'the request branch draws across and its nodes pop',
    parts: [null, draw({ as: 'branch' }), pop([6, 18], 1.2, { as: 'node', delay: 0.36 }), pop([6, 6], 1.2, { as: 'node', delay: 0.26 }), pop([18, 18], 1.2, { as: 'node', delay: 0.16 })],
  },
  gitbook: {
    verb: 'the book page lifts and lays flat',
    parts: [{ as: 'book', origin: [12, 20], transform: ['skewY(0deg)', 'skewY(-6deg)', 'skewY(2deg)', 'skewY(0deg)'], times: [0, 0.32, 0.66, 1], ease: 'easeInOut', dur: 0.62 }],
  },
  'github-01': {
    verb: 'the octocat bobs its head',
    parts: [hop([12, 12], 1.2, { as: 'cat' })],
  },
  gitlab: {
    verb: 'the fox head tilts side to side',
    parts: [around([12, 22], C, [0, -8, 6, -2, 0], { as: 'fox' })],
  },
  'give-blood': {
    verb: 'the blood drop falls into the open hand',
    parts: [ride([13, 6.7], [[0, 0], [0, 2], [0, 2], [0, 0], [0, 0]], { as: 'drop', times: [0, 0.3, 0.6, 0.86, 1] }), null, beat([12, 18.5], { as: 'hand', delay: 0.18 })],
  },
  'give-pill': {
    verb: 'the capsule spins over the hand',
    parts: [lap([14, 7], 180, { as: 'pill', dur: 0.8 }), null, ride([12, 18.5], out(0, -0.6), { as: 'hand', delay: 0.2 })],
  },
  'glass-water': {
    verb: 'the water sloshes in the glass',
    parts: [null, { as: 'water', origin: [12, 10], transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(8deg)', 'rotate(-3deg)', 'rotate(0deg)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }],
  },
  glasses: {
    verb: 'the glasses are pushed up the nose',
    parts: [ride([6.3, 17], out(0, -1), { as: 'lens' }), ride([17.8, 17], out(0, -1), { as: 'lens' }), null, null, ride([12, 15.3], out(0, -1), { as: 'bridge' })],
  },
  'global-editing': {
    verb: 'the pencil writes over the globe',
    parts: [null, ride([17.5, 17.5], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' }), retrace({ as: 'land', delay: 0.1 }), retrace({ as: 'land', delay: 0.2 })],
  },
  'global-education': {
    verb: 'the open book pages flap under the globe',
    parts: [hop([12, 8], 1, { as: 'globe' }), around([12, 21], [17, 12], [0, -6, 3, -1, 0], { as: 'page', delay: 0.08 }), around([12, 21], [7, 12], [0, 6, -3, 1, 0], { as: 'page', delay: 0.08 })],
  },
  'global-refresh': {
    verb: 'the refresh arrows chase around the corner of the globe',
    parts: [lap([17.5, 17.5], 360, { as: 'refresh', dur: 0.9 }), null, retrace({ as: 'land', delay: 0.1 }), retrace({ as: 'land', delay: 0.2 })],
  },
  'global-search': {
    verb: 'the magnifier scans across the globe',
    parts: [null, null, null, ride([17.5, 17.5], [[0, 0], [-1.2, -0.6], [0, -1.2], [0.4, -0.4], [0, 0]], { as: 'lens', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  global: {
    verb: 'the continents drift as the globe turns',
    parts: [null, ride([14.9, 5.7], out(-1.2, 0), { as: 'land', dur: 0.8 }), ride([5.6, 16], out(1.2, 0), { as: 'land', dur: 0.8, delay: 0.06 }), ride([17.8, 17.4], out(-1.2, 0), { as: 'land', dur: 0.8, delay: 0.1 })],
  },
  'globe-02': {
    verb: 'the meridian turns and the latitude lines breathe',
    parts: [null, spin(C), flex('X', C, [12, 15], [1, 0.9, 1.04, 1, 1], { as: 'parallel', delay: 0.1 }), flex('X', C, [12, 9], [1, 0.9, 1.04, 1, 1], { as: 'parallel', delay: 0.1 })],
  },
  'globe-lock': {
    verb: 'the padlock rattles on the corner of the globe',
    parts: [null, spin(C, { dur: 0.8 }), null, shake([18.5, 17], { as: 'lock' })],
  },
  'globe-off': {
    verb: 'the slash cuts across and the globe fades',
    parts: [dim({ as: 'globe', delay: 0.1 }), dim({ as: 'globe', delay: 0.1 }), dim({ as: 'globe', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'globe-x': {
    verb: 'the X rattles at the corner and the meridian shudders',
    parts: [null, shake([19, 5], { as: 'x' }), spin(C, { dur: 0.7 }), null],
  },
  globe: {
    verb: 'the desk globe spins on its stand',
    parts: [null, null, null, spin([11.8, 4.1], { dur: 1 }), spin([16.4, 13], { dur: 1 }), around([12.5, 19], [12, 10.5], [0, -10, 6, -2, 0], { as: 'arm' })],
  },
}

export default settleSpecs(specs)
