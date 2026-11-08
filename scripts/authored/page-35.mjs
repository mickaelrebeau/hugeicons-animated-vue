/**
 * Page 35 — heart-add → hospital-bed-01.
 *
 * Gallery page (80 public icons). Visible handcrafted originals skipped:
 * help-circle, history. The hidden handcrafted home-01 sits in this span and
 * is skipped too.
 *
 * Hearts beat and let their badge act. Hierarchies light their nodes from
 * the root down. Homes keep the house and let the door, window or inner
 * mark act. Holds lift their palm or the object resting on it.
 *
 * Identical-geometry pairs get different jobs: hierarchy-circle /
 * hierarchy-circle-01, hierarchy-square / hierarchy-square-01, high-heels /
 * high-heels-01, hold / hold-01, hold-locked / hold-locked-01, honey /
 * honey-01.
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
const H = [12, 12.1]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
/** A heart beat: lub-dub. */
const pulse = (origin = H, s = 1.12, o = {}) => ({
  as: 'heart',
  origin,
  transform: ['scale(1)', `scale(${s})`, 'scale(0.98)', `scale(${1 + (s - 1) * 0.6})`, 'scale(1)'],
  times: [0, 0.18, 0.36, 0.54, 1],
  ease: 'easeInOut',
  dur: 0.72,
  ...o,
})
/** A node in a tree that lights up in its turn. */
const node = (c, delay = 0, o = {}) => pop(c, 1.2, { as: 'node', delay, ...o })
/** Lift the palm and whatever rests on it. */
const lift = (c, h = 1, o = {}) => ride(c, out(0, -h), { as: 'palm', ...o })

// ---------------------------------------------------------------------------

const specs = {
  // --- hearts --------------------------------------------------------------------------------
  'heart-add': {
    verb: 'the heart beats and the plus turns',
    parts: [pulse(H, 1.06, { delay: 0.2 }), lap([17.5, 16], 90, { as: 'plus', dur: 0.6 })],
  },
  'heart-check': {
    verb: 'the check ticks and the heart answers',
    parts: [pulse(H, 1.06, { delay: 0.3 }), draw({ as: 'check' })],
  },
  'heart-crack': {
    verb: 'the crack splits down the heart and the two halves shudder',
    parts: [draw({ as: 'crack' }), shake(H, { as: 'heart', delay: 0.2 })],
  },
  'heart-handshake': {
    verb: 'the hands inside the heart shake',
    parts: [pulse(H, 1.04, { delay: 0.3 }), ride([18.4, 12.8], [[0, 0], [0, -0.6], [0, 0.6], [0, 0], [0, 0]], { as: 'hand' }), ride([15.5, 16.1], [[0, 0], [0, -0.6], [0, 0.6], [0, 0], [0, 0]], { as: 'hand' }), ride([13.8, 9], [[0, 0], [0, -0.6], [0, 0.6], [0, 0], [0, 0]], { as: 'hand' })],
  },
  'heart-minus': {
    verb: 'the minus shrinks and the heart deflates a little',
    parts: [flex('X', [17.5, 16], [17.5, 16], [1, 0.3, 1.1, 1, 1], { as: 'minus' }), swell(H, H, [1, 0.94, 1.02, 1, 1], { as: 'heart', delay: 0.1 })],
  },
  'heart-off': {
    verb: 'the slash cuts across and the heart halves fade',
    parts: [draw({ as: 'slash' }), dim({ as: 'heart', delay: 0.1 }), dim({ as: 'heart', delay: 0.1 })],
  },
  'heart-plus': {
    verb: 'the plus pops and the heart swells',
    parts: [pop([18, 15.5], 1.4, { as: 'plus' }), swell(H, H, [1, 1.06, 0.98, 1.02, 1], { as: 'heart', delay: 0.1 })],
  },
  'heart-pulse': {
    verb: 'the pulse line traces across the beating heart',
    parts: [pulse(H, 1.06, { delay: 0.1 }), retrace({ as: 'pulse' })],
  },
  'heart-remove': {
    verb: 'the X rattles beside the heart',
    parts: [null, shake([18.5, 16], { as: 'x' })],
  },
  heart: {
    verb: 'the heart beats twice',
    parts: [pulse(H, 1.14)],
  },
  heartbreak: {
    verb: 'the jagged crack redraws and the heart slumps',
    parts: [{ ...swell([12, 20.7], H, [1, 0.94, 0.94, 1, 1], { as: 'heart' }), delay: 0.2 }, draw({ as: 'crack' })],
  },
  heater: {
    verb: 'the heat waves rise from the heater as the vents glow',
    parts: [null, null, blink({ as: 'vent', delay: 0.06 }), blink({ as: 'vent', delay: 0.12 }), blink({ as: 'vent' }), fall([14.5, 5], 0, -2, { as: 'heat', delay: 0.1 }), fall([9.5, 5], 0, -2, { as: 'heat' })],
  },
  helicopter: {
    verb: 'the rotor blades spin and the helicopter lifts off its skids',
    parts: [
      ride([14, 6], out(0, -1), { as: 'body' }),
      ride([12, 11.5], out(0, -1), { as: 'body' }),
      ride([17.8, 11], out(0, -1), { as: 'body' }),
      null,
      { as: 'rotor', origin: [14, 4], transform: ['translateY(0px) scaleX(1)', 'translateY(-1px) scaleX(0.2)', 'translateY(-1px) scaleX(1)', 'translateY(0px) scaleX(0.2)', 'translateY(0px) scaleX(1)'], times: [0, 0.25, 0.5, 0.75, 1], ease: 'linear', dur: 0.6 },
    ],
  },
  'help-square': {
    verb: 'the question mark tilts and the dot bounces',
    parts: [null, around([12, 13.5], [12, 10.3], [0, -14, 10, -4, 0], { as: 'question' }), hop([12, 16.8], 1.2, { as: 'dot', delay: 0.16 })],
  },
  'hexagon-01': {
    verb: 'the hexagon turns a sixth',
    parts: [lap(C, 60, { as: 'hexagon', dur: 0.7 })],
  },
  hexagon: {
    verb: 'the hexagon tightens like a bolt and springs back',
    parts: [swell(C, C, [1, 0.86, 1.05, 1, 1], { as: 'hexagon' })],
  },

  // --- hierarchies --------------------------------------------------------------------------
  'hierarchy-circle-01': {
    verb: 'the root lights up, the branches draw, then the leaves pop',
    parts: [node([12, 5]), node([5, 19], 0.3), node([19, 19], 0.36), draw({ as: 'branch', delay: 0.1 })],
  },
  'hierarchy-circle': {
    verb: 'the leaves swap places under the root',
    parts: [hop([12, 5], 1, { as: 'root' }), ride([5, 19], out(1.4, 0), { as: 'leaf', delay: 0.1 }), ride([19, 19], out(-1.4, 0), { as: 'leaf', delay: 0.1 }), null],
  },
  'hierarchy-circle-02': {
    verb: 'the big root drops a level and the leaves answer',
    parts: [node([5, 19], 0.24), node([19, 19], 0.28), retrace({ as: 'branch', delay: 0.1 }), ride([12, 6], out(0, 1), { as: 'root' })],
  },
  'hierarchy-circle-03': {
    verb: 'the left root sends the line out to both leaves',
    parts: [node([19, 19], 0.34), node([19, 5], 0.3), draw({ as: 'branch', delay: 0.1 }), pop([6, 12], 1.12, { as: 'root' })],
  },
  'hierarchy-files': {
    verb: 'the two files hang on the tree and slide out',
    parts: [ride([16.5, 6], out(1, 0), { as: 'file', delay: 0.1 }), ride([16.5, 18], out(1, 0), { as: 'file', delay: 0.2 }), draw({ as: 'tree' })],
  },
  'hierarchy-square-01': {
    verb: 'the top block lights and the child blocks pop down the line',
    parts: [draw({ as: 'branch', delay: 0.1 }), node([17, 11.5], 0.24), node([17, 19.5], 0.34), pop([7, 5], 1.12, { as: 'root' })],
  },
  'hierarchy-square': {
    verb: 'the child blocks slide out from the branch',
    parts: [null, ride([17, 11.5], out(1.2, 0), { as: 'child' }), ride([17, 19.5], out(1.2, 0), { as: 'child', delay: 0.1 }), null],
  },
  'hierarchy-square-02': {
    verb: 'the branch draws down from the root to both blocks',
    parts: [draw({ as: 'branch', delay: 0.1 }), node([5, 19], 0.3), node([19, 19], 0.36), pop([12, 5], 1.12, { as: 'root' })],
  },
  'hierarchy-square-03': {
    verb: 'the root block hops and the curved branch redraws',
    parts: [hop([12, 6], 1, { as: 'root' }), node([5, 19], 0.24), node([19, 19], 0.28), retrace({ as: 'branch', delay: 0.06 })],
  },
  'hierarchy-square-04': {
    verb: 'the left block sends the branch to the two right blocks',
    parts: [pop([5.5, 12], 1.12, { as: 'root' }), node([18.5, 5], 0.3), node([18.5, 19], 0.36), draw({ as: 'branch', delay: 0.1 })],
  },
  'hierarchy-square-05': {
    verb: 'the right block gathers the two left blocks toward it',
    parts: [pop([18.5, 12], 1.12, { as: 'root', delay: 0.3 }), ride([5.5, 19], out(1, 0), { as: 'leaf' }), ride([5.5, 5], out(1, 0), { as: 'leaf' }), retrace({ as: 'branch' })],
  },
  'hierarchy-square-06': {
    verb: 'the hub turns and its spokes reach every block',
    parts: [node([12, 4.5], 0.24), node([4.5, 19.5], 0.3), node([19.5, 19.5], 0.36), lap([12, 12.5], 120, { as: 'hub', dur: 0.7 }), draw({ as: 'spoke', delay: 0.1 })],
  },
  'hierarchy-square-07': {
    verb: 'the person at the top nods to the team below',
    parts: [node([5, 19.5], 0.24), node([19, 19.5], 0.3), retrace({ as: 'branch', delay: 0.1 }), hop([12, 9.1], 0.8, { as: 'person' }), hop([12, 3.8], 0.8, { as: 'person' })],
  },
  'hierarchy-square-08': {
    verb: 'the person sends the work to the two blocks on the right',
    parts: [hop([5.5, 13.8], 0.8, { as: 'person' }), hop([5.5, 7.8], 0.8, { as: 'person' }), node([19, 5], 0.3), node([19, 19], 0.36), draw({ as: 'branch', delay: 0.1 })],
  },
  'hierarchy-square-10': {
    verb: 'the hub spins and the bottom blocks drop into place',
    parts: [ride([4.5, 20], out(0, -1), { as: 'leaf', delay: 0.24 }), ride([19.5, 20], out(0, -1), { as: 'leaf', delay: 0.3 }), retrace({ as: 'branch', delay: 0.1 }), node([12, 4.5]), lap([12, 13.5], 120, { as: 'hub', dur: 0.7 })],
  },
  hierarchy: {
    verb: 'the leader hops and the two team members answer in turn',
    parts: [hop([12, 8.4], 1, { as: 'leader' }), hop([12, 3.5], 1, { as: 'leader' }), hop([18.5, 20.4], 1, { as: 'member', delay: 0.24 }), hop([18.5, 15.5], 1, { as: 'member', delay: 0.24 }), hop([5.5, 20.4], 1, { as: 'member', delay: 0.16 }), hop([5.5, 15.5], 1, { as: 'member', delay: 0.16 }), draw({ as: 'branch', delay: 0.08 })],
  },

  // --- shoes, highlighter, hijab ------------------------------------------------------------
  'high-heels-01': {
    verb: 'the heel taps the floor',
    parts: [
      around([16.8, 22], [11.5, 5.2], [0, -6, 0, -3, 0], { as: 'shoe', times: [0, 0.25, 0.5, 0.75, 1] }),
      around([16.8, 22], [7, 9], [0, -6, 0, -3, 0], { as: 'shoe', times: [0, 0.25, 0.5, 0.75, 1] }),
      null,
      around([16.8, 22], [12.5, 12.1], [0, -6, 0, -3, 0], { as: 'shoe', times: [0, 0.25, 0.5, 0.75, 1] }),
    ],
  },
  'high-heels': {
    verb: 'the shoe struts: it lifts and steps forward',
    parts: [ride([11.5, 5.2], out(1, -1), { as: 'shoe' }), ride([7, 9], out(1, -1), { as: 'shoe' }), ride([16.8, 20], out(1, -1), { as: 'shoe' }), ride([12.5, 12.1], out(1, -1), { as: 'shoe' })],
  },
  'high-heels-02': {
    verb: 'the shoe drops off the box and lands',
    parts: [hop([17.1, 17.4], 1.4, { as: 'shoe' }), around([2, 12], [5.5, 8], [0, -20, 4, -1, 0], { as: 'box' }), hop([12, 16], 1.4, { as: 'shoe' }), hop([4.5, 16], 1.4, { as: 'shoe' })],
  },
  highlighter: {
    verb: 'the highlighter swipes along a line',
    parts: [ride(C, [[0, 0], [-1.2, 1.2], [1, -1], [0, 0], [0, 0]], { as: 'marker', dur: 0.7 })],
    extras: [{ as: 'mark', tag: 'path', attrs: { d: 'M3 22H13', strokeWidth: '2' }, pathLength: [0, 0, 1, 1], opacity: [0, 1, 1, 0], times: [0, 0.2, 0.6, 1], ease: 'easeInOut', dur: 0.9 }],
  },
  hijab: {
    verb: 'the scarf drapes and the face nods',
    parts: [around([12, 13], [12, 9], [0, 6, -3, 1, 0], { as: 'face' }), around([12, 10], [11, 15.5], [0, -6, 4, -1, 0], { as: 'drape', delay: 0.06 }), around([12, 13], [12, 8], [0, 6, -3, 1, 0], { as: 'face' }), null],
  },

  // --- sports, holds -------------------------------------------------------------------------
  hockey: {
    verb: 'the stick swings and slaps the puck away',
    parts: [around([20, 3], [11.7, 12.3], [0, -16, 6, -1, 0], { as: 'stick', times: [0, 0.36, 0.5, 0.76, 1] }), ride([18.5, 19.5], [[0, 0], [0, 0], [2, 0], [0, 0], [0, 0]], { as: 'puck', times: [0, 0.4, 0.62, 0.9, 1] }), around([20, 3], [17, 7.8], [0, -16, 6, -1, 0], { as: 'stick', times: [0, 0.36, 0.5, 0.76, 1] })],
  },
  'hold-01': {
    verb: 'the palm lifts what it holds',
    parts: [lift([11.7, 12], 1.2)],
  },
  'hold-02': {
    verb: 'the palm flexes open and closed',
    parts: [swell([12, 20], [11.9, 12], [1, 0.92, 1.04, 1, 1], { as: 'palm' })],
  },
  'hold-03': {
    verb: 'the hand rocks its load side to side',
    parts: [around([12, 21], [12.2, 12], [0, -6, 4, -2, 0], { as: 'hand' })],
  },
  'hold-04': {
    verb: 'the hands cup and bob gently',
    parts: [ride(C, [[0, 0], [0, -0.8], [0, 0], [0, -0.5], [0, 0]], { as: 'hands', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 })],
  },
  'hold-05': {
    verb: 'the palm pushes forward to offer',
    parts: [ride([12, 11.9], out(0.8, -0.8), { as: 'palm' })],
  },
  'hold-locked-01': {
    verb: 'the padlock rattles above the palm',
    parts: [null, shake([18, 19.5], { as: 'lock' }), shake([18, 19.5], { as: 'lock' })],
  },
  'hold-locked': {
    verb: 'the shackle lifts and drops shut',
    parts: [null, null, ride([18, 15.5], out(0, -1.2), { as: 'shackle' })],
  },
  'hold-locked-02': {
    verb: 'the hand closes around the padlock',
    parts: [swell([11, 20], [11.2, 11.5], [1, 0.94, 1.03, 1, 1], { as: 'hand' }), pop([18, 19.5], 1.1, { as: 'lock', delay: 0.16 }), pop([18, 15.5], 1.1, { as: 'lock', delay: 0.16 })],
  },
  'hold-phone': {
    verb: 'the hand lifts the phone and the screen lights',
    parts: [lift([14.5, 13], 0.6, { delay: 0.04 }), lift([10, 10], 1), blink({ as: 'screen', delay: 0.2 }), pop([10, 15], 2.4, { as: 'button', delay: 0.3 })],
  },
  hold: {
    verb: 'the hand opens wider and closes',
    parts: [flex('X', [11.7, 20], [11.7, 12], [1, 1.08, 0.96, 1, 1], { as: 'hand' })],
  },
  hologram: {
    verb: 'the projection rises from the base and flickers',
    parts: [null, { as: 'beam', opacity: [1, 0.3, 1, 0.3, 1], times: [0, 0.2, 0.4, 0.6, 0.8], ease: 'linear', dur: 0.8 }, hop([12, 7.5], 1.2, { as: 'cube' }), hop([12, 8.8], 1.2, { as: 'cube' })],
  },

  // --- homes ---------------------------------------------------------------------------------
  'home-02': {
    verb: 'the chimney-side mark grows like smoke rising',
    parts: [null, flex('Y', [17, 17.5], [17, 15.5], [1, 0.3, 1.2, 1, 1], { as: 'mark' })],
  },
  'home-03': {
    verb: 'the door swings open and closes',
    parts: [null, flex('X', [9, 17.5], [12, 17.5], [1, 0.2, 0.2, 1, 1], { as: 'door' })],
  },
  'home-04': {
    verb: 'the doorstep line slides to welcome',
    parts: [null, flex('X', C, [12, 17], [1, 0.3, 1.1, 1, 1], { as: 'step' })],
  },
  'home-05': {
    verb: 'the round window lights up',
    parts: [null, pop([12, 15], 1.3, { as: 'window' })],
  },
  'home-06': {
    verb: 'the round window blinks',
    parts: [null, blink({ as: 'window' })],
  },
  'home-07': {
    verb: 'the house roof settles and the door opens',
    parts: [hop([12, 12], 0.8, { as: 'house', delay: 0.2 }), flex('X', [9.5, 18], [12, 18], [1, 0.2, 0.2, 1, 1], { as: 'door' })],
  },
  'home-08': {
    verb: 'the little window pops on',
    parts: [null, pop([16, 16.5], 1.6, { as: 'window' })],
  },
  'home-09': {
    verb: 'the roof lifts off the walls and lands',
    parts: [ride([12, 6.5], out(0, -1.4), { as: 'roof' }), null],
  },
  'home-10': {
    verb: 'the front gable hops and the roof line redraws',
    parts: [hop([6.5, 12], 1, { as: 'gable' }), hop([6.5, 17], 1, { as: 'gable' }), null, draw({ as: 'ridge', delay: 0.1 })],
  },
  'home-11': {
    verb: 'the roof settles on the walls as the door opens',
    parts: [ride([12, 6.5], out(0, -1), { as: 'roof' }), null, flex('X', [9, 17.5], [12, 17.5], [1, 0.2, 0.2, 1, 1], { as: 'door', delay: 0.1 })],
  },
  'home-12': {
    verb: 'the roof pitches up and the smile underlines it',
    parts: [flex('Y', [12, 10], [12, 6.3], [1, 1.25, 0.94, 1, 1], { as: 'roof' }), null, flex('X', [12, 16], [12, 16], [1, 1.3, 0.94, 1, 1], { as: 'smile', delay: 0.1 })],
  },
  'home-13': {
    verb: 'the four window panes light up in turn',
    parts: [null, null, pop([10, 12], 1.8, { as: 'pane' }), pop([14, 12], 1.8, { as: 'pane', delay: 0.1 }), pop([14, 16], 1.8, { as: 'pane', delay: 0.2 }), pop([10, 16], 1.8, { as: 'pane', delay: 0.3 })],
  },
  'home-wifi': {
    verb: 'the wifi arcs light up from the inside out',
    parts: [null, wave([12, 14])],
  },
  home: {
    verb: 'the house hops and the smile grins',
    parts: [hop(C, 1, { as: 'house' }), flex('X', [12, 17.5], [12, 17.5], [1, 1.3, 0.94, 1, 1], { as: 'smile', delay: 0.14 })],
  },

  // --- honey, honor, hoodie, hop -------------------------------------------------------------
  'honey-01': {
    verb: 'the lid twists and the honeycomb glows',
    parts: [around([12, 3.5], [12, 3.5], [0, -12, 8, -2, 0], { as: 'lid' }), null, pop([12, 14], 1.15, { as: 'comb', delay: 0.14 })],
  },
  honey: {
    verb: 'the jar wobbles and the honeycomb turns',
    parts: [around([12, 22], [12, 3.5], [0, -4, 3, -1, 0], { as: 'jar' }), around([12, 22], [12, 13.5], [0, -4, 3, -1, 0], { as: 'jar' }), lap([12, 14], 60, { as: 'comb', dur: 0.7 })],
  },
  'honey-02': {
    verb: 'the dipper lifts out and a drop falls',
    parts: [ride([13, 3.5], out(0, -1.2), { as: 'dipper' }), null, null, fall([8, 16.5], 0, 2.4, { as: 'drop', delay: 0.1 }), null],
  },
  honor: {
    verb: 'the medal ribbon swings and the bars shine',
    parts: [null, around([12, 3], C, [0, -6, 4, -2, 0], { as: 'badge' }), around([12, 3], [12, 10.5], [0, -6, 4, -2, 0], { as: 'badge' })],
  },
  'honour-star': {
    verb: 'the star spins inside the badge',
    parts: [null, null, lap([12, 11], 72, { as: 'star', dur: 0.7 })],
  },
  hoodie: {
    verb: 'the hood is pulled up and the strings swing',
    parts: [null, around([12, 17], [12, 18], [0, -12, 8, -3, 0], { as: 'strings' }), ride([12, 5.1], out(0, -1), { as: 'hood' }), ride([12, 7.5], out(0, -1), { as: 'hood' }), null],
  },
  'hop-off': {
    verb: 'the slash cuts across and the hop cone wilts',
    parts: [dim({ as: 'cone', delay: 0.1 }), dim({ as: 'cone', delay: 0.1 }), dim({ as: 'cone', delay: 0.1 }), null, dim({ as: 'cone', delay: 0.1 }), dim({ as: 'cone', delay: 0.1 }), dim({ as: 'cone', delay: 0.1 }), draw({ as: 'slash' })],
  },
  hop: {
    verb: 'the hop cone swings on its stem',
    parts: [
      around([12, 2], [8.6, 15.1], [0, -8, 6, -2, 0], { as: 'cone' }),
      around([12, 2], [7.9, 8.1], [0, -8, 6, -2, 0], { as: 'cone' }),
      around([12, 2], [16.1, 8.1], [0, -8, 6, -2, 0], { as: 'cone' }),
      null,
      around([12, 2], [15.4, 15.1], [0, -8, 6, -2, 0], { as: 'cone' }),
      around([12, 2], [12, 12.8], [0, -8, 6, -2, 0], { as: 'cone' }),
      around([12, 2], [12, 20.1], [0, -8, 6, -2, 0], { as: 'cone' }),
    ],
  },
  'horizonal-scroll-point': {
    verb: 'the point scrolls left and right between the arrows',
    parts: [ride(C, [[0, 0], [-3, 0], [3, 0], [0, 0], [0, 0]], { as: 'point', dur: 0.8 }), nudge([20, 12], 0.8, 0, { as: 'arrow', delay: 0.3 }), nudge([4, 12], -0.8, 0, { as: 'arrow', delay: 0.1 })],
  },
  'horizontal-resize': {
    verb: 'the handles pull the bars apart and push them back',
    parts: [nudge([10, 12], -1, 0, { as: 'bar' }), nudge([14, 12], 1, 0, { as: 'bar' }), nudge([8, 12], -1.6, 0, { as: 'arm' }), nudge([4.4, 12], -1.6, 0, { as: 'head' }), nudge([19.6, 12], 1.6, 0, { as: 'head' }), nudge([16, 12], 1.6, 0, { as: 'arm' })],
  },
  'horse-head': {
    verb: 'the horse tosses its head',
    parts: [around([14, 21], [12, 12], [0, -10, 6, -2, 0], { as: 'head' })],
  },
  'horse-saddle': {
    verb: 'the horse rears with its saddle',
    parts: [
      around([7, 21], [19.5, 7], [0, -10, 2, -1, 0], { as: 'horse' }),
      around([7, 21], [11.3, 11.5], [0, -10, 2, -1, 0], { as: 'horse' }),
      around([3, 9], [3.3, 11.5], [0, 20, -10, 4, 0], { as: 'tail' }),
      around([7, 21], [16.5, 14.3], [0, -10, 2, -1, 0], { as: 'horse' }),
      around([7, 21], [13, 18], [0, -10, 2, -1, 0], { as: 'horse' }),
      around([7, 21], [10.5, 16.6], [0, -10, 2, -1, 0], { as: 'horse' }),
      null,
      around([7, 21], [9.5, 10.8], [0, -10, 2, -1, 0], { as: 'horse' }),
    ],
  },
  horse: {
    verb: 'the horse trots: it bobs and swishes its tail',
    parts: [
      ride([19.5, 7], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'horse', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 }),
      ride([11.3, 11.5], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'horse', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 }),
      around([4, 9.5], [3.3, 11.5], [0, 20, -14, 6, 0], { as: 'tail', dur: 0.7 }),
      ride([16.5, 14.3], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'leg', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 }),
      null,
      ride([10.5, 16.6], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'horse', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7 }),
      ride([7.5, 17.8], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'leg', times: [0, 0.25, 0.5, 0.75, 1], dur: 0.7, delay: 0.1 }),
    ],
  },

  // --- hospitals ----------------------------------------------------------------------------
  'hospital-01': {
    verb: 'the H sign flips and the windows light up in turn',
    parts: [flip([12, 4], 1, { as: 'sign' }), null, blink({ as: 'window', delay: 0.1 }), blink({ as: 'window', delay: 0.2 }), blink({ as: 'window', delay: 0.3 }), blink({ as: 'window', delay: 0.15 }), null, null],
  },
  'hospital-02': {
    verb: 'the cross on the building turns and the wings brace',
    parts: [null, null, null, null, lap([12, 9], 90, { as: 'cross', dur: 0.62 })],
  },
  'hospital-bed-01': {
    verb: 'the bed rolls on its wheels and the pillow settles',
    parts: [
      ride([12, 8], out(1, 0), { as: 'bed' }),
      ride([12, 14], out(1, 0), { as: 'bed' }),
      ride([5.1, 13.5], out(1, 0), { as: 'bed' }),
      ride([18.9, 13.5], out(1, 0), { as: 'bed' }),
      ride([5, 19], out(1, 0), { as: 'bed' }),
      ride([19, 19], out(1, 0), { as: 'bed' }),
      hop([8, 4.4], 0.8, { as: 'pillow', delay: 0.1 }),
    ],
  },
}

export default settleSpecs(specs)
