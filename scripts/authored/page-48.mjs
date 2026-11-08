/**
 * Page 48 — move-to → not-equal-sign-square.
 *
 * Gallery page (80 public icons). No visible handcrafted originals; the
 * hidden handcrafted music-note-01 sits in this span and is skipped.
 *
 * Music notes bounce on the beat. Navigation arrows point and travel.
 * Nodes add, remove and move their branches. Multiplication signs spin.
 * File labels keep the page and let the label act.
 *
 * Identical-geometry pairs get different jobs: mp-3 / mp-301, mp-four /
 * mp-four-01, music-note-square / -01, napkins / napkins-01, navigator /
 * navigator-01.
 *
 * move-top [0] carries an SVG transform attribute, so it stays still.
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
/** Bounce on the beat. */
const beatHop = (c, o = {}) => ride(c, [[0, 0], [0, -1.2], [0, 0], [0, -0.7], [0, 0]], { as: 'note', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7, ...o })
/** An arrow-cursor heading forward along its tip. */
const head = (c, dx, dy, o = {}) => ride(c, [[0, 0], [dx, dy], [dx, dy], [0, 0], [0, 0]], { as: 'arrow', times: [0, 0.3, 0.6, 0.9, 1], ease: 'easeInOut', dur: 0.8, ...o })
const label = (c, o = {}) => hop(c, 1.2, { as: 'label', ...o })

// ---------------------------------------------------------------------------

const specs = {
  'move-to': {
    verb: 'the bottom line slides right with its arrow, the bullets answer',
    parts: [ride([14, 17.6], out(1.4, 0), { as: 'line' }), ride([18.5, 17.6], out(1.4, 0), { as: 'line' }), null, null, pop([4.3, 3.6], 2, { as: 'dot', delay: 0.2 }), pop([4.3, 10.6], 2, { as: 'dot', delay: 0.26 }), pop([4.3, 17.6], 2, { as: 'dot', delay: 0.32 })],
  },
  'move-top': {
    verb: 'the arrow drives up from the dot',
    parts: [null, ride([12, 7], out(0, -1.6), { as: 'arrow' })],
  },
  move: {
    verb: 'the four arrows push out to the edges and come back',
    parts: [nudge([12, 6], 0, -0.8, { as: 'stem' }), nudge([6, 12], -0.8, 0, { as: 'stem' }), nudge([18, 12], 0.8, 0, { as: 'stem' }), nudge([12, 17.8], 0, 0.8, { as: 'stem' }), nudge([12, 4.5], 0, -1.2, { as: 'head' }), nudge([12, 19.5], 0, 1.2, { as: 'head' }), nudge([19.5, 12], 1.2, 0, { as: 'head' }), nudge([4.5, 12], -1.2, 0, { as: 'head' })],
  },
  'mp-3': {
    verb: 'the MP3 label hops under the page',
    parts: [null, label([12, 19])],
  },
  'mp-301': {
    verb: 'the page lifts off its MP3 label',
    parts: [ride([12, 7.5], out(0, -1), { as: 'page' }), flex('X', [12, 19], [12, 19], [1, 0.9, 1.04, 1, 1], { as: 'label', delay: 0.14 })],
  },
  'mp-four-01': {
    verb: 'the MP4 label flips under the page',
    parts: [null, flip([12, 19], 1, { as: 'label' })],
  },
  'mp-four': {
    verb: 'the MP4 label hops under the page',
    parts: [null, label([12, 19])],
  },
  'mp-four-02': {
    verb: 'the MP4 label slides in from the right',
    parts: [null, ride([14, 16.5], out(1.4, 0), { as: 'label' })],
  },
  'mp-three-02': {
    verb: 'the MP3 label bounces beside the page',
    parts: [null, beatHop([14, 16.5], { as: 'label' })],
  },
  muhammad: {
    verb: 'the seal turns and the calligraphy rewrites',
    parts: [lap(C, 45, { as: 'seal', dur: 0.7 }), retrace({ as: 'script', delay: 0.1 })],
  },
  'multiplication-sign-circle': {
    verb: 'the × spins a quarter inside the circle',
    parts: [lap(C, 90, { as: 'x', dur: 0.6 }), null],
  },
  'multiplication-sign-square': {
    verb: 'the × pops inside the square',
    parts: [null, pop(C, 1.25, { as: 'x' })],
  },
  'multiplication-sign': {
    verb: 'the × spins and squeezes',
    parts: [{ as: 'x', origin: C, transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.8)', 'rotate(90deg) scale(1.05)', 'rotate(90deg) scale(1)'], times: [0, 0.4, 0.8, 1], ease: 'easeInOut', dur: 0.66 }],
  },
  'mushroom-01': {
    verb: 'the cap bounces on the stem and its spots twinkle',
    parts: [hop([12, 13], 0.8, { as: 'cap' }), hop([12, 7.5], 0.8, { as: 'cap' }), pop([15.5, 4], 1.3, { as: 'spot', delay: 0.2 }), null, pop([9, 7], 2.4, { as: 'spot', delay: 0.3 })],
  },
  mushroom: {
    verb: 'the mushroom sprouts: the cap pushes up from the stem',
    parts: [flex('Y', [12.3, 22.6], [12.3, 17.8], [1, 0.7, 1.1, 1, 1], { as: 'stem' }), ride([12, 8.6], out(0, -1.2), { as: 'cap', delay: 0.06 }), ride([17, 7], out(0, -1.2), { as: 'cap', delay: 0.06 })],
  },
  'music-note-02': {
    verb: 'the note bounces on the beat',
    parts: [beatHop([16, 10.5]), beatHop([7, 17])],
  },
  'music-note-03': {
    verb: 'the two note heads bounce in turn',
    parts: [beatHop([6.5, 18.5]), beatHop([18, 16], { delay: 0.12 }), null, null],
  },
  'music-note-04': {
    verb: 'the flag flutters on the note',
    parts: [null, beatHop([8.5, 17], { delay: 0.1 }), around([12.5, 3], [16, 6.5], [0, -14, 10, -4, 0], { as: 'flag' })],
  },
  'music-note-square-01': {
    verb: 'the note sways inside the square',
    parts: [null, around([12, 17], C, [0, -10, 8, -3, 0], { as: 'note' })],
  },
  'music-note-square-02': {
    verb: 'the two notes bounce inside the square',
    parts: [null, beatHop([11.5, 12])],
  },
  'music-note-square': {
    verb: 'the note pops inside the square',
    parts: [null, pop(C, 1.15, { as: 'note' })],
  },
  'music-note': {
    verb: 'the notes bounce and the small note hops in',
    parts: [beatHop([6, 7], { delay: 0.12 }), beatHop([10.5, 19.5]), pop([20, 18], 1.4, { as: 'dot', delay: 0.2 }), null, retrace({ as: 'beam', delay: 0.1 })],
  },
  'music-three': {
    verb: 'the beamed notes rock to the beat',
    parts: [beatHop([18, 16], { delay: 0.1 }), beatHop([6, 18]), around([15, 18], [15, 10.3], [0, -4, 3, -1, 0], { as: 'beam' })],
  },
  muslim: {
    verb: 'the figure bows in prayer',
    parts: [around([12, 14], [12, 7], [0, 12, 12, 0, 0], { as: 'head', dur: 0.9 }), around([12, 16], [12, 13.8], [0, 8, 8, 0, 0], { as: 'hands', dur: 0.9 }), null, null, around([12, 14], [12, 6], [0, 12, 12, 0, 0], { as: 'head', dur: 0.9 })],
  },
  mute: {
    verb: 'the face has no mouth and its eyes widen',
    parts: [null, flex('Y', [12, 8.8], [12, 8.8], [1, 1.6, 1.6, 1, 1], { as: 'eyes', dur: 0.7 })],
  },
  mymind: {
    verb: 'the dot hops and the shape sways',
    parts: [around([12, 23], C, [0, -6, 4, -1, 0], { as: 'shape' }), around([12, 23], [14, 12], [0, -6, 4, -1, 0], { as: 'shape' }), hop([8.5, 11], 1.2, { as: 'dot', delay: 0.1 })],
  },
  'n-th-root-circle': {
    verb: 'the root sign draws inside the circle',
    parts: [null, retrace({ as: 'root' })],
  },
  'n-th-root-square': {
    verb: 'the index n pops and the root redraws',
    parts: [pop([8.5, 8.8], 1.3, { as: 'n' }), retrace({ as: 'root', delay: 0.1 }), null],
  },
  'n-th-root': {
    verb: 'the root sign stretches its bar and the index hops',
    parts: [flex('X', [8, 14], [12, 14], [1, 1.1, 0.97, 1, 1], { as: 'root' }), hop([5.5, 6], 1, { as: 'n', delay: 0.1 })],
  },
  'nano-technology': {
    verb: 'the atoms pulse out from the hexagon core',
    parts: [null, null, pop([12, 3.5], 1.3, { as: 'atom', delay: 0.14 }), pop([12, 20.5], 1.3, { as: 'atom', delay: 0.14 }), pop([3.5, 7.5], 1.3, { as: 'atom', delay: 0.2 }), pop([20.5, 7.5], 1.3, { as: 'atom', delay: 0.2 }), pop([20.5, 16.5], 1.3, { as: 'atom', delay: 0.26 }), pop([3.5, 16.5], 1.3, { as: 'atom', delay: 0.26 }), lap(C, 60, { as: 'core', dur: 0.6 })],
  },
  'napkins-01': {
    verb: 'the top napkin lifts off the stack',
    parts: [ride([13.5, 10.5], out(0.8, -0.8), { as: 'napkin' }), null, ride([14.3, 10], out(0.8, -0.8), { as: 'napkin' })],
  },
  napkins: {
    verb: 'the back napkin peeks out and settles',
    parts: [null, ride([10.5, 13.5], out(-0.8, 0.8), { as: 'napkin' }), null],
  },
  'napkins-02': {
    verb: 'the folded napkin flops down on its point',
    parts: [hop([12, 10], 0.8, { as: 'napkin' }), flex('Y', [12, 14], [12, 18], [1, 1.1, 0.95, 1, 1], { as: 'fold', delay: 0.1 }), ride([12, 11.8], out(0, 0.6), { as: 'chevron', delay: 0.1 })],
  },
  'natural-food': {
    verb: 'the leaf and the sprout sway from the soil',
    parts: [around([6, 20], [5.5, 7], [0, -10, 6, -2, 0], { as: 'leaf' }), around([6, 20], [5.9, 14], [0, -10, 6, -2, 0], { as: 'leaf' }), around([8, 21], [15.2, 14.1], [0, 8, -5, 2, 0], { as: 'sprout', delay: 0.08 }), around([8, 21], [10, 18], [0, 8, -5, 2, 0], { as: 'sprout', delay: 0.08 })],
  },

  // --- navigation -----------------------------------------------------------------------------
  'navigation-01': {
    verb: 'the four arrows point out from the center in turn',
    parts: [pop(C, 1.25, { as: 'center' }), nudge([4.7, 12], -1, 0, { as: 'arrow', delay: 0.1 }), nudge([12, 19.3], 0, 1, { as: 'arrow', delay: 0.2 }), nudge([19.3, 12], 1, 0, { as: 'arrow', delay: 0.3 }), nudge([12, 4.7], 0, -1, { as: 'arrow' })],
  },
  'navigation-02': {
    verb: 'the arrows pull in toward the dot',
    parts: [nudge([4.6, 12], 1, 0, { as: 'arrow' }), nudge([12, 19.4], 0, -1, { as: 'arrow' }), nudge([19.4, 12], -1, 0, { as: 'arrow' }), nudge([12, 4.6], 0, 1, { as: 'arrow' }), pop(C, 1.4, { as: 'dot', delay: 0.14 })],
  },
  'navigation-03': {
    verb: 'the arrow heads up-right and comes back',
    parts: [head([12.3, 11.7], 1.4, -1.4)],
  },
  'navigation-04': {
    verb: 'the arrow spins a full turn inside the compass',
    parts: [lap([11.6, 12.1], 360, { as: 'arrow' }), null],
  },
  'navigation-05': {
    verb: 'the compass needle swings and settles',
    parts: [null, around(C, C, [0, 40, -20, 8, 0], { as: 'needle', dur: 0.9 }), pop(C, 2, { as: 'pin', delay: 0.2 })],
  },
  'navigation-06': {
    verb: 'the arrow tilts as it steers',
    parts: [around([12, 12.2], [12, 12.2], [0, -20, 10, -3, 0], { as: 'arrow' })],
  },
  'navigation-off': {
    verb: 'the slash cuts across and the arrow fades',
    parts: [draw({ as: 'slash' }), dim({ as: 'arrow', delay: 0.1 })],
  },
  'navigation-two-off': {
    verb: 'the slash cuts across and the arrow stalls',
    parts: [shake([11.8, 12.2], { as: 'arrow', delay: 0.16 }), draw({ as: 'slash' })],
  },
  'navigation-two': {
    verb: 'the arrow travels up and back',
    parts: [head([12, 12.2], 0, -1.6)],
  },
  navigation: {
    verb: 'the arrow travels up-right and back',
    parts: [head([12.2, 11.8], 1.2, -1.2)],
  },
  'navigator-01': {
    verb: 'the road dashes stream downward as the car drives',
    parts: [null, hop([12, 17.6], 0.6, { as: 'car', delay: 0.06 }), ride([12, 4], out(0, 2), { as: 'dash' }), ride([12, 10], out(0, 2), { as: 'dash', delay: 0.06 })],
  },
  navigator: {
    verb: 'the car swerves between the lanes',
    parts: [null, around([12, 21], [12, 17.6], [0, -12, 10, -3, 0], { as: 'car' }), null, null],
  },
  'navigator-02': {
    verb: 'the road dashes stream left as the car drives',
    parts: [null, hop([6.4, 12], 0.6, { as: 'car', delay: 0.06 }), ride([20, 12], out(-2, 0), { as: 'dash' }), ride([14, 12], out(-2, 0), { as: 'dash', delay: 0.06 })],
  },
  necklace: {
    verb: 'the pendant swings on the chain',
    parts: [around([12, 7], [12, 10], [0, 12, -8, 3, 0], { as: 'pendant' }), around([12, 7], [12, 16.4], [0, 12, -8, 3, 0], { as: 'pendant' }), null],
  },
  nerd: {
    verb: 'the nerd pushes up the glasses and grins',
    parts: [null, flex('X', [12, 16], [12, 16], [1, 1.2, 0.95, 1.03, 1], { as: 'mouth', delay: 0.1 }), ride([12, 9], out(0, -1), { as: 'glasses' })],
  },
  'neural-network': {
    verb: 'the nodes fire along the links',
    parts: [pop([19, 12], 1.2, { as: 'node', delay: 0.3 }), pop([12, 4], 1.3, { as: 'node' }), pop([11, 11.5], 1.3, { as: 'node', delay: 0.15 }), pop([4.5, 7.5], 1.2, { as: 'node', delay: 0.08 }), pop([8.5, 19.5], 1.2, { as: 'node', delay: 0.22 }), retrace({ as: 'link' }), draw({ as: 'link', delay: 0.06 })],
  },
  neutral: {
    verb: 'the face blinks, unmoved',
    parts: [null, null, flex('Y', [12, 9.8], [12, 9.8], [1, 0.1, 1, 1, 1], { as: 'eyes', dur: 0.5 })],
  },
  'new-job': {
    verb: 'the sparkle pops on the briefcase',
    parts: [null, lap([17.5, 17.5], 90, { as: 'sparkle', dur: 0.6 }), ride([11.5, 3.8], out(0, -0.8), { as: 'handle', delay: 0.1 })],
  },
  'new-office': {
    verb: 'the sparkle twinkles and the windows light up',
    parts: [lap([6.5, 17.5], 90, { as: 'sparkle', dur: 0.6 }), blink({ as: 'window', delay: 0.1 }), blink({ as: 'window', delay: 0.2 }), null],
  },
  'new-releases': {
    verb: 'the badge spins and the check ticks',
    parts: [lap(C, 45, { as: 'badge', dur: 0.7 }), draw({ as: 'check', delay: 0.2 })],
  },
  'new-twitter-ellipse': {
    verb: 'the X rewrites inside the circle',
    parts: [retrace({ as: 'x' }), null],
  },
  'new-twitter-rectangle': {
    verb: 'the X pops inside the square',
    parts: [null, pop(C, 1.15, { as: 'x' })],
  },
  'new-twitter': {
    verb: 'the X strokes slide along each other',
    parts: [{ as: 'x', origin: C, transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'], times: [0, 0.3, 0.62, 1], ease: 'easeInOut', dur: 0.56 }],
  },
  'news-01': {
    verb: 'the headlines write in and the front page lifts',
    parts: [retrace({ as: 'lines', delay: 0.1 }), null, ride([13.3, 12], out(0.6, -0.6), { as: 'page' })],
  },
  news: {
    verb: 'the paper unfolds and the lines write',
    parts: [null, draw({ as: 'line', delay: 0.06 }), draw({ as: 'line', delay: 0.14 }), draw({ as: 'line', delay: 0.22 }), flex('X', [18, 14.5], [20, 14.5], [1, 0.4, 1.08, 1, 1], { as: 'fold' })],
  },
  'next-week': {
    verb: 'the calendar page flips forward and the arrow jumps',
    parts: [ride([12, 5], out(0, -0.8), { as: 'ring', delay: 0.1 }), null, nudge([12.5, 14], 1.2, 0, { as: 'arrow' })],
  },
  next: {
    verb: 'the play triangle jumps to the bar',
    parts: [ride([10, 12], out(2, 0), { as: 'play' }), beat([20, 12], { as: 'bar', delay: 0.2 })],
  },
  nfc: {
    verb: 'the arcs broadcast outward one after another',
    parts: [wave([17, 12], { delay: 0.24 }), wave([13.5, 12], { delay: 0.16 }), wave([9.8, 12], { delay: 0.08 }), wave([6, 12])],
  },
  nike: {
    verb: 'the swoosh swings up',
    parts: [around([5, 17], [10.6, 13.4], [0, -10, 4, -1, 0], { as: 'swoosh' })],
  },
  'nine-circle': {
    verb: 'the 9 rewrites inside the circle',
    parts: [sweep({ as: 'loop' }), sweep({ as: 'tail', delay: 0.14 }), null],
  },
  'nine-square': {
    verb: 'the 9 spins upside down and back inside the square',
    parts: [null, lap([12, 12], 360, { as: 'nine', dur: 0.9 }), lap([12, 12], 360, { as: 'nine', dur: 0.9 })],
  },
  'nintendo-switch': {
    verb: 'the joy-cons slide off and back on',
    parts: [ride([6.3, 10], out(-1, 0), { as: 'joycon' }), ride([6.3, 14], out(-1, 0), { as: 'joycon' }), ride([17.8, 10], out(1, 0), { as: 'joycon' }), ride([6.3, 7], out(-1, 0), { as: 'joycon' }), ride([17.8, 14], out(1, 0), { as: 'joycon' }), ride([17.8, 17], out(1, 0), { as: 'joycon' })],
  },
  nintendo: {
    verb: 'the buttons press on either side',
    parts: [null, null, null, pop([4.5, 8.5], 3, { as: 'button' }), pop([19.5, 15.5], 3, { as: 'button', delay: 0.14 })],
  },
  niqab: {
    verb: 'the veil drapes and the eyes blink',
    parts: [null, around([12, 4], [12, 12.4], [0, -3, 2, -1, 0], { as: 'veil' }), null, flex('X', [12, 11], [12, 11], [1, 0.8, 1.06, 1, 1], { as: 'veil', delay: 0.1 })],
  },
  'no-internet': {
    verb: 'the slash cuts across and the globe fades',
    parts: [dim({ as: 'globe', delay: 0.1 }), dim({ as: 'globe', delay: 0.1 }), dim({ as: 'globe', delay: 0.1 }), dim({ as: 'globe', delay: 0.1 }), draw({ as: 'slash' })],
  },
  'no-meeting-room': {
    verb: 'the slash cuts across and the door fades',
    parts: [draw({ as: 'slash' }), dim({ as: 'door', delay: 0.1 })],
  },
  'no-signal': {
    verb: 'the empty bar stubs flicker, searching',
    parts: [{ as: 'bar', opacity: [1, 0.2, 1, 1], times: [0, 0.2, 0.4, 1], ease: 'linear', dur: 0.8, delay: 0.3 }, { as: 'bar', opacity: [1, 0.2, 1, 1], times: [0, 0.2, 0.4, 1], ease: 'linear', dur: 0.8, delay: 0.15 }, { as: 'bar', opacity: [1, 0.2, 1, 1], times: [0, 0.2, 0.4, 1], ease: 'linear', dur: 0.8 }],
  },

  // --- nodes ----------------------------------------------------------------------------------
  'node-add': {
    verb: 'the plus spins and the child nodes pop',
    parts: [draw({ as: 'branch', delay: 0.1 }), pop([16.5, 11.5], 1.15, { as: 'node', delay: 0.24 }), pop([16.5, 19.5], 1.15, { as: 'node', delay: 0.34 }), lap([7, 5], 90, { as: 'plus', dur: 0.6 })],
  },
  'node-edit': {
    verb: 'the pen scribbles on the corner and the branch redraws',
    parts: [retrace({ as: 'branch', delay: 0.1 }), pop([16, 19.5], 1.12, { as: 'node', delay: 0.3 }), null, ride([18.5, 8.5], [[0, 0], [-0.8, 0.6], [0.6, -0.3], [-0.4, 0.3], [0, 0]], { as: 'pen' })],
  },
  'node-move-down': {
    verb: 'the top child slides down past the bottom one',
    parts: [null, null, ride([13, 12.5], [[0, 0], [0, 7.5], [0, 7.5], [0, 0], [0, 0]], { as: 'node', ease: 'easeInOut', dur: 0.9 }), ride([13, 20], [[0, 0], [0, -7.5], [0, -7.5], [0, 0], [0, 0]], { as: 'node', ease: 'easeInOut', dur: 0.9 }), nudge([20, 17.1], 0, 1, { as: 'arrow' })],
  },
  'node-move-up': {
    verb: 'the bottom child slides up past the top one',
    parts: [null, ride([13, 12.5], [[0, 0], [0, 7.5], [0, 7.5], [0, 0], [0, 0]], { as: 'node', ease: 'easeInOut', dur: 0.9 }), ride([13, 20], [[0, 0], [0, -7.5], [0, -7.5], [0, 0], [0, 0]], { as: 'node', ease: 'easeInOut', dur: 0.9 }), null, nudge([20, 14.5], 0, -1, { as: 'arrow' })],
  },
  'node-remove': {
    verb: 'the X rattles and the child nodes shrink',
    parts: [null, pop([16.5, 11.5], 0.8, { as: 'node', delay: 0.2 }), pop([16.5, 19.5], 0.8, { as: 'node', delay: 0.28 }), shake([6.5, 4.5], { as: 'x' })],
  },
  noodles: {
    verb: 'the chopsticks lift the noodles from the bowl',
    parts: [hop([15.5, 10.8], 0.6, { as: 'egg', delay: 0.2 }), ride([8.5, 7], out(0, -1.2), { as: 'noodles', delay: 0.06 }), ride([12, 4.5], out(0, -1.2), { as: 'sticks' }), null],
  },
  nose: {
    verb: 'the nose twitches',
    parts: [flex('X', [12, 19], [12, 19], [1, 1.12, 0.94, 1.06, 1], { as: 'nostrils', times: [0, 0.2, 0.4, 0.6, 1] }), nudge([5.9, 11.8], -0.4, 0, { as: 'side' }), nudge([18.1, 11.8], 0.4, 0, { as: 'side' })],
  },
  'not-equal-sign-circle': {
    verb: 'the slash cuts through the equals inside the circle',
    parts: [null, retrace({ as: 'sign' })],
  },
  'not-equal-sign-square': {
    verb: 'the not-equal sign rattles inside the square',
    parts: [null, shake(C, { as: 'sign' })],
  },
}

export default settleSpecs(specs)
