/**
 * Page 1 — a-arrow-down → ai-eraser.
 *
 * Every icon is choreographed against its own name, geometry and direction.
 * `parts` is positional: one entry per SVG primitive, `null` keeps it static.
 * add-circle (handcrafted) and accident (already right) are deliberately absent.
 */

import { OUT, INOUT, beat, stamp, sweep, twinkle } from './_kit.mjs'

export default {
  // Sorting glyphs: the letter stays put, the arrow travels along its own axis.
  'a-arrow-down': {
    verb: 'the letter holds the baseline while the arrow drops, head first, and settles',
    parts: [
      { as: 'letter', origin: [7, 18], transform: ['scale(1)', 'scale(0.975)', 'scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46 },
      { as: 'letter', origin: [7, 18], transform: ['scale(1)', 'scale(0.975)', 'scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46 },
      { as: 'shaft', origin: [18, 7], transform: ['translateY(0px) scaleY(1)', 'translateY(0.6px) scaleY(0.86)', 'translateY(1.6px) scaleY(1.06)', 'translateY(0px) scaleY(1)'], times: [0, 0.26, 0.56, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
      { as: 'head', origin: [18, 15], transform: ['translateY(0px)', 'translateY(2.6px)', 'translateY(-0.4px)', 'translateY(0px)'], times: [0, 0.44, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.64, delay: 0.03 },
    ],
  },
  'a-arrow-up': {
    verb: 'the letter holds the baseline while the arrow lifts, head first, and settles',
    parts: [
      { as: 'letter', origin: [7, 18], transform: ['scale(1)', 'scale(0.975)', 'scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46 },
      { as: 'shaft', origin: [18, 17], transform: ['translateY(0px) scaleY(1)', 'translateY(-0.6px) scaleY(0.86)', 'translateY(-1.6px) scaleY(1.06)', 'translateY(0px) scaleY(1)'], times: [0, 0.26, 0.56, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
      { as: 'letter', origin: [7, 18], transform: ['scale(1)', 'scale(0.975)', 'scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46 },
      { as: 'head', origin: [18, 9], transform: ['translateY(0px)', 'translateY(-2.6px)', 'translateY(0.4px)', 'translateY(0px)'], times: [0, 0.44, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.64, delay: 0.03 },
    ],
  },
  'a-large-small': {
    verb: 'the two letters pull apart in scale — the big A swells while the small one shrinks further',
    parts: [
      { as: 'bigLetter', origin: [6.5, 17], transform: ['scale(1)', 'scale(1.14)', 'scale(0.99)', 'scale(1)'], times: [0, 0.42, 0.74, 1], ease: OUT, dur: 0.66 },
      { as: 'smallLetter', origin: [18.5, 17], transform: ['scale(1)', 'scale(0.82)', 'scale(1.02)', 'scale(1)'], times: [0, 0.42, 0.74, 1], ease: OUT, dur: 0.66 },
      { as: 'smallLetter', origin: [18.5, 17], transform: ['scale(1)', 'scale(0.82)', 'scale(1.02)', 'scale(1)'], times: [0, 0.42, 0.74, 1], ease: OUT, dur: 0.66 },
      { as: 'bigLetter', origin: [6.5, 17], transform: ['scale(1)', 'scale(1.14)', 'scale(0.99)', 'scale(1)'], times: [0, 0.42, 0.74, 1], ease: OUT, dur: 0.66 },
    ],
  },
  abacus: {
    verb: 'beads are flicked along their wires, the top row one way and the bottom row the other',
    parts: [
      null,
      { as: 'topRow', origin: [12, 9], transform: ['translateX(0px)', 'translateX(1.3px)', 'translateX(-0.3px)', 'translateX(0px)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.58 },
      { as: 'bottomRow', origin: [12, 15], transform: ['translateX(0px)', 'translateX(-1.3px)', 'translateX(0.3px)', 'translateX(0px)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.58, delay: 0.08 },
    ],
  },
  absolute: {
    verb: 'the two bars clamp inward on the value, which compresses and springs back',
    parts: [
      { as: 'bars', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.9)', 'scaleX(1.03)', 'scaleX(1)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
      { as: 'value', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.84)', 'scaleX(1.05)', 'scaleX(1)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.6, delay: 0.04 },
      { as: 'value', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.84)', 'scaleX(1.05)', 'scaleX(1)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.6, delay: 0.04 },
    ],
  },
  acceleration: {
    verb: 'the mass picks up speed down the ramp on an ease-in, and the speed arrow snaps forward behind it',
    parts: [
      null,
      { as: 'mass', origin: [8.5, 7], transform: ['translateX(0px)', 'translateX(0.5px)', 'translateX(3.6px)', 'translateX(0px)'], times: [0, 0.34, 0.62, 1], ease: ['easeIn', 'easeIn', OUT], dur: 0.78 },
      { as: 'speedMark', origin: [21.7, 12], transform: ['translateX(0px) scaleX(1)', 'translateX(0.4px) scaleX(1.12)', 'translateX(0px) scaleX(1)'], times: [0, 0.46, 1], ease: OUT, dur: 0.6, delay: 0.1 },
    ],
  },
  access: {
    verb: 'the credential presses in from the left, its chip lights up, and the two readers accept it in turn',
    parts: [
      { as: 'reader', origin: [22, 7.5], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.34, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.14 },
      { as: 'reader', origin: [22, 16.5], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.34, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.22 },
      { as: 'credential', origin: [7, 12], transform: ['translateX(0px)', 'translateX(1.5px)', 'translateX(-0.2px)', 'translateX(0px)'], times: [0, 0.34, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
      { as: 'chip', origin: [7, 7], transform: ['translateX(0px) scale(1)', 'translateX(1.5px) scale(1.45)', 'translateX(-0.2px) scale(1)', 'translateX(0px) scale(1)'], times: [0, 0.34, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
    ],
  },
  accessibility: {
    verb: 'the wheel completes a full turn under the rider, who leans into the push',
    parts: [
      { as: 'wheel', origin: [9, 17.5], transform: ['rotate(0deg)', 'rotate(360deg)'], ease: INOUT, dur: 0.92 },
      { as: 'rider', origin: [9, 17.5], transform: ['translateX(0px)', 'translateX(0.7px)', 'translateX(0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.8 },
      { as: 'head', origin: [17, 4], transform: ['translateX(0px) translateY(0px)', 'translateX(0.5px) translateY(-0.4px)', 'translateX(0px) translateY(0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.8, delay: 0.04 },
    ],
  },
  'account-recovery': {
    verb: 'the restore ring sweeps a full turn counter-clockwise and the account reappears inside it',
    parts: [
      { as: 'ring', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-360deg)'], ease: INOUT, dur: 1 },
      { as: 'account', origin: [12, 12], transform: ['scale(1)', 'scale(0.82)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.45, 1, 1], times: [0, 0.34, 0.72, 1], ease: OUT, dur: 0.72, delay: 0.16 },
    ],
  },

  // Four ways of saying "account settings": each frame adjusts differently.
  'account-setting-01': {
    verb: 'the cog notches forward one step and the portrait nods as the setting takes',
    parts: [
      { as: 'portrait', origin: [12, 16.5], transform: ['translateY(0px)', 'translateY(0.5px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.56, delay: 0.08 },
      { as: 'cog', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(20deg)', 'rotate(-4deg)', 'rotate(0deg)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
    ],
  },
  'account-setting-02': {
    verb: 'the scalloped badge breathes open and the portrait steps forward into it',
    parts: [
      { as: 'badge', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(-9deg) scale(1.045)', 'rotate(2deg) scale(0.995)', 'rotate(0deg) scale(1)'], times: [0, 0.38, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.7 },
      { as: 'portrait', origin: [12, 16], transform: ['scale(1)', 'scale(0.9)', 'scale(1.04)', 'scale(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.1 },
    ],
  },
  'account-setting-03': {
    verb: 'the crest pops as it is stamped and the portrait lands squarely inside',
    parts: [
      { as: 'crest', origin: [12, 12], transform: ['scale(1)', 'scale(0.93)', 'scale(1.035)', 'scale(1)'], times: [0, 0.32, 0.66, 1], ease: OUT, dur: 0.56 },
      { as: 'portrait', origin: [12, 16.5], transform: ['scale(1) translateY(0px)', 'scale(0.86) translateY(0.7px)', 'scale(1.05) translateY(-0.2px)', 'scale(1) translateY(0px)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.08 },
    ],
  },
  'account-setting': {
    verb: 'the cog backs off a notch and the portrait settles the other way',
    parts: [
      { as: 'portrait', origin: [12, 16.5], transform: ['translateX(0px)', 'translateX(-0.45px)', 'translateX(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.5, delay: 0.06 },
      { as: 'cog', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-17deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.42, 0.74, 1], ease: [INOUT, OUT, OUT], dur: 0.6 },
    ],
  },

  // The activity family: a monitor trace. Some sweep like a screen, some beat like a pulse.
  'activity-01': {
    verb: 'the trace redraws left to right across the screen and the frame answers on the last beat',
    parts: [
      { as: 'screen', origin: [12, 12], transform: ['scale(1)', 'scale(1)', 'scale(1.04)', 'scale(1)'], times: [0, 0.72, 0.86, 1], ease: ['linear', OUT, OUT], dur: 0.84 },
      { as: 'trace', origin: [12, 12], ...sweep() },
    ],
  },
  'activity-02': {
    verb: 'the trace redraws across the panel, then the status dot registers the reading',
    parts: [
      { as: 'statusDot', origin: [19.5, 4.5], transform: ['scale(1)', 'scale(1.5)', 'scale(1)'], opacity: [1, 0.55, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.5, delay: 0.62 },
      { as: 'panel', origin: [11.5, 12.5], transform: ['scale(1)', 'scale(1)', 'scale(1.035)', 'scale(1)'], times: [0, 0.7, 0.85, 1], ease: ['linear', OUT, OUT], dur: 0.86 },
      { as: 'trace', origin: [11.5, 12.5], ...sweep({ dur: 0.8 }) },
    ],
  },
  'activity-03': {
    verb: 'the spike jumps off the baseline like a heartbeat and the frame flexes with it',
    parts: [
      { as: 'frame', origin: [12, 12], transform: ['scale(1)', 'scale(0.985)', 'scale(1.025)', 'scale(1)'], times: [0, 0.24, 0.52, 1], ease: OUT, dur: 0.66 },
      { as: 'spike', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.45)', 'scaleY(0.92)', 'scaleY(1)'], times: [0, 0.2, 0.42, 0.68, 1], ease: [INOUT, OUT, OUT, OUT], dur: 0.7 },
    ],
  },
  'activity-04': {
    verb: 'the spike is rewritten across the panel and the status dot flashes once it lands',
    parts: [
      { as: 'statusDot', origin: [19.5, 4.5], transform: ['scale(1)', 'scale(1.45)', 'scale(1)'], opacity: [1, 0.6, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.48, delay: 0.66 },
      { as: 'panel', origin: [11.5, 12.5], transform: ['scale(1)', 'scale(1)', 'scale(1.03)', 'scale(1)'], times: [0, 0.72, 0.87, 1], ease: ['linear', OUT, OUT], dur: 0.88 },
      { as: 'spike', origin: [11.5, 12.5], ...sweep({ dur: 0.84 }) },
    ],
  },
  'activity-05': {
    verb: 'the wide readout sweeps a fresh line across the full width of the display',
    parts: [
      { as: 'display', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(1)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.74, 0.88, 1], ease: ['linear', OUT, OUT], dur: 0.9 },
      { as: 'trace', origin: [12, 11], ...sweep({ dur: 0.86 }) },
    ],
  },
  'activity-circle': {
    verb: 'the dial breathes while the reading is traced across it',
    parts: [
      { as: 'dial', origin: [12, 12], transform: ['scale(1)', 'scale(0.98)', 'scale(1.025)', 'scale(1)'], times: [0, 0.3, 0.74, 1], ease: OUT, dur: 0.86 },
      { as: 'trace', origin: [12, 12.5], ...sweep({ dur: 0.84 }) },
    ],
  },
  activity: {
    verb: 'the pulse pumps up from the baseline and the frame takes the recoil',
    parts: [
      { as: 'frame', origin: [12, 12], transform: ['scale(1)', 'scale(1.03)', 'scale(0.995)', 'scale(1)'], times: [0, 0.3, 0.62, 1], ease: OUT, dur: 0.62 },
      { as: 'pulse', origin: [12, 14], transform: ['scaleY(1)', 'scaleY(0.5)', 'scaleY(1.4)', 'scaleY(1)'], times: [0, 0.22, 0.5, 1], ease: [INOUT, OUT, OUT], dur: 0.64 },
    ],
  },
  'activity-spark': {
    verb: 'the reading is traced first, then the spark fires in the corner it points to',
    parts: [
      { as: 'trace', origin: [12, 12], ...sweep({ dur: 0.78 }) },
      { as: 'frame', origin: [12, 12], transform: ['scale(1)', 'scale(1)', 'scale(1.025)', 'scale(1)'], times: [0, 0.68, 0.84, 1], ease: ['linear', OUT, OUT], dur: 0.8 },
      twinkle([19, 19], { delay: 0.6 }),
    ],
  },
  acute: {
    verb: 'the angle pinches tighter and the arc is drawn in to measure it',
    parts: [
      { as: 'angle', origin: [12, 20], transform: ['scaleX(1)', 'scaleX(0.9)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.68 },
      { as: 'arc', origin: [10.1, 16.1], ...sweep({ dur: 0.72, delay: 0.06 }) },
    ],
  },

  // The add family: strokes that retract to the join and snap back out.
  'add-01': {
    verb: 'the upright grows out of the crossing point and the crossbar follows a beat later',
    parts: [
      { as: 'upright', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.16)', 'scaleY(1.12)', 'scaleY(1)'], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.5 },
      { as: 'crossbar', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.16)', 'scaleX(1.12)', 'scaleX(1)'], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.06 },
    ],
  },
  'add-02': {
    verb: 'the solid mark twists down and springs back to true',
    parts: [
      { as: 'mark', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(-16deg) scale(0.78)', 'rotate(5deg) scale(1.1)', 'rotate(0deg) scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52 },
    ],
  },
  'add-circle-half-dot': {
    verb: 'the dotted ring completes a full revolution and the mark lands at its centre',
    parts: [
      { as: 'ring', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(360deg)'], ease: INOUT, dur: 0.95 },
      stamp([12, 12], { as: 'plus', delay: 0.34, dur: 0.54 }),
    ],
  },
  'add-female': {
    verb: 'she settles onto her feet and the add mark is stamped at her shoulder',
    parts: [
      { as: 'figure', origin: [9.4, 21], transform: ['translateY(0px) scale(1)', 'translateY(0.5px) scale(0.99)', 'translateY(0px) scale(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.54 },
      stamp([18.5, 18.5], { as: 'plus', delay: 0.1 }),
    ],
  },
  add: {
    verb: 'both strokes swing in through the crossing point and square up',
    parts: [
      { as: 'upright', origin: [12, 12], transform: ['rotate(0deg) scaleY(1)', 'rotate(9deg) scaleY(0.3)', 'rotate(-3deg) scaleY(1.1)', 'rotate(0deg) scaleY(1)'], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.54 },
      { as: 'crossbar', origin: [12, 12], transform: ['rotate(0deg) scaleX(1)', 'rotate(-9deg) scaleX(0.3)', 'rotate(3deg) scaleX(1.1)', 'rotate(0deg) scaleX(1)'], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.54 },
    ],
  },
  'add-invoice': {
    verb: 'the invoice lifts off the stack, its lines settle in reading order, and the add mark is stamped on the corner',
    parts: [
      { as: 'invoice', origin: [11, 22], transform: ['translateY(0px)', 'translateY(-0.9px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.6 },
      { as: 'line', origin: [7, 11], transform: ['scaleX(1)', 'scaleX(0.55)', 'scaleX(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      stamp([17, 18], { as: 'plus', delay: 0.2 }),
      { as: 'line', origin: [7, 7], transform: ['scaleX(1)', 'scaleX(0.55)', 'scaleX(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.5, delay: 0.06 },
    ],
  },
  'add-male': {
    verb: 'he rocks back onto his stance and the add mark is stamped at his shoulder',
    parts: [
      { as: 'figure', origin: [9.2, 21], transform: ['translateX(0px) translateY(0px)', 'translateX(-0.4px) translateY(0.4px)', 'translateX(0px) translateY(0px)'], times: [0, 0.36, 1], ease: OUT, dur: 0.58 },
      stamp([18.5, 18.5], { as: 'plus', delay: 0.12, dur: 0.54 }),
    ],
  },
  'add-money-circle': {
    verb: 'the amount jumps up as it is credited, the coin edge answers, and the add mark is stamped above',
    parts: [
      { as: 'amount', origin: [11, 18], transform: ['translateY(0px)', 'translateY(-1.5px)', 'translateY(0.3px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      { as: 'coin', origin: [11, 13], transform: ['scale(1)', 'scale(0.975)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.68, 1], ease: OUT, dur: 0.56 },
      stamp([18.5, 5.5], { as: 'plus', delay: 0.16 }),
    ],
  },
  'add-square': {
    verb: 'the square makes room and the mark resolves at its centre',
    parts: [
      { as: 'square', origin: [12, 12], transform: ['scale(1)', 'scale(0.955)', 'scale(1.022)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
      stamp([12, 12], { as: 'plus', delay: 0.05, dur: 0.46 }),
    ],
  },
  'add-team-02': {
    verb: 'the newcomer leans into the group, the group nods back, and the add mark is stamped between them',
    parts: [
      { as: 'group', origin: [3, 20], transform: ['scaleX(1)', 'scaleX(0.94)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.56 },
      { as: 'member', origin: [9.5, 7.5], transform: ['translateY(0px)', 'translateY(-0.6px)', 'translateY(0px)'], times: [0, 0.38, 1], ease: OUT, dur: 0.54 },
      { as: 'newcomer', origin: [17, 7.5], transform: ['translateX(0px)', 'translateX(-1.1px)', 'translateX(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.6 },
      stamp([18, 17], { as: 'plus', delay: 0.16 }),
    ],
  },
  'add-team': {
    verb: 'the two heads bob in turn as the pair closes up and the add mark is stamped beside them',
    parts: [
      { as: 'member', origin: [8.5, 11], transform: ['translateY(0px)', 'translateY(-0.7px)', 'translateY(0px)'], times: [0, 0.38, 1], ease: OUT, dur: 0.54 },
      { as: 'newcomer', origin: [15.3, 11], transform: ['translateX(0px) translateY(0px)', 'translateX(-0.9px) translateY(-0.5px)', 'translateX(0px) translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.08 },
      { as: 'bench', origin: [2, 20], transform: ['scaleX(1)', 'scaleX(0.95)', 'scaleX(1.015)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.56 },
      stamp([19, 17], { as: 'plus', delay: 0.18 }),
    ],
  },
  'add-to-list': {
    verb: 'the arrow pushes the new entry in from the left, the rows shuffle down in order, and the tick is written last',
    parts: [
      beat([12, 12], { as: 'page', dur: 0.54, delay: 0.1 }),
      { as: 'row', origin: [13.5, 17], transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'], times: [0, 0.38, 1], ease: OUT, dur: 0.46, delay: 0.24 },
      { as: 'row', origin: [13.5, 7], transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'], times: [0, 0.38, 1], ease: OUT, dur: 0.46, delay: 0.12 },
      { as: 'row', origin: [13.5, 12], transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'], times: [0, 0.38, 1], ease: OUT, dur: 0.46, delay: 0.18 },
      { as: 'tick', origin: [8.8, 16], ...sweep({ dur: 0.6, delay: 0.3 }) },
      { as: 'arrow', origin: [3.5, 5], transform: ['translateX(0px)', 'translateX(1.8px)', 'translateX(-0.2px)', 'translateX(0px)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
    ],
  },
  'address-book': {
    verb: 'the spine tabs are pulled out and the contact on the open page comes forward',
    parts: [
      { as: 'cover', origin: [4.5, 12], transform: ['scaleX(1)', 'scaleX(0.97)', 'scaleX(1.008)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'contact', origin: [13.3, 12], transform: ['scale(1)', 'scale(0.9)', 'scale(1.05)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      { as: 'tabs', origin: [4.5, 12], transform: ['translateX(0px)', 'translateX(-1.1px)', 'translateX(0.2px)', 'translateX(0px)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
    ],
  },
  'adjust-position': {
    verb: 'the two blocks trade places along the track and the handle nudges right behind them',
    parts: [
      { as: 'topBlock', origin: [18, 7], transform: ['translateX(0px)', 'translateX(1.6px)', 'translateX(-0.2px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      null,
      { as: 'handle', origin: [7.5, 17], transform: ['translateX(0px)', 'translateX(1.2px)', 'translateX(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.06 },
      { as: 'bottomBlock', origin: [18, 17], transform: ['translateX(0px)', 'translateX(-1.6px)', 'translateX(0.2px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
    ],
  },

  // Adobe marks: the badge stays a badge, each pair of letters gets its own tic.
  'adobe-after-effect': {
    verb: 'the badge takes a keyframe beat and the two letters pop up after it in order',
    parts: [
      beat([12, 12], { as: 'badge', dur: 0.44 }),
      { as: 'letter', origin: [9, 16], transform: ['scale(1)', 'scale(0.82)', 'scale(1.08)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.08 },
      { as: 'letter', origin: [16, 16], transform: ['scale(1)', 'scale(0.82)', 'scale(1.08)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.16 },
    ],
  },
  'adobe-illustrator': {
    verb: 'the tittle hops off the stem and lands back on it, squashing the stroke underneath',
    parts: [
      beat([12, 12], { as: 'badge', dur: 0.46 }),
      { as: 'letter', origin: [10, 16], transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
      { as: 'stem', origin: [16, 16], transform: ['scaleY(1)', 'scaleY(1)', 'scaleY(0.84)', 'scaleY(1)'], times: [0, 0.48, 0.66, 1], ease: ['linear', OUT, OUT], dur: 0.62, delay: 0.06 },
      { as: 'tittle', origin: [16, 8.3], transform: ['translateY(0px)', 'translateY(-2.8px)', 'translateY(0.4px)', 'translateY(0px)'], times: [0, 0.34, 0.66, 1], ease: [OUT, 'easeIn', OUT], dur: 0.62, delay: 0.06 },
    ],
  },
  'adobe-indesign': {
    verb: 'the upright is set from the top down and the bowl drops in beside it',
    parts: [
      beat([12, 12], { as: 'badge', dur: 0.46 }),
      { as: 'bowl', origin: [13, 16], transform: ['scale(1)', 'scale(0.82)', 'scale(1.07)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.1 },
      { as: 'upright', origin: [8, 8], transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.7, 1], ease: OUT, dur: 0.52 },
    ],
  },
  'adobe-photoshop': {
    verb: 'the P holds while the S wiggles through its own curve',
    parts: [
      beat([12, 12], { as: 'badge', dur: 0.46 }),
      { as: 'letter', origin: [6.5, 16], transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
      { as: 'curve', origin: [15.5, 13], transform: ['skewX(0deg)', 'skewX(-11deg)', 'skewX(7deg)', 'skewX(0deg)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.58, delay: 0.06 },
    ],
  },
  'adobe-premier': {
    verb: 'the P settles and the shoulder of the R flicks up off it',
    parts: [
      beat([12, 12], { as: 'badge', dur: 0.46 }),
      { as: 'letter', origin: [7, 16], transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
      { as: 'shoulder', origin: [14, 16], transform: ['rotate(0deg)', 'rotate(-9deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.07 },
    ],
  },
  'adobe-xd': {
    verb: 'the crossing strokes scissor through each other and the D lands after them',
    parts: [
      beat([12, 12], { as: 'badge', dur: 0.46 }),
      { as: 'cross', origin: [9, 12], transform: ['rotate(0deg) scale(1)', 'rotate(-14deg) scale(0.88)', 'rotate(5deg) scale(1.06)', 'rotate(0deg) scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56 },
      { as: 'letter', origin: [16, 16], transform: ['scale(1)', 'scale(0.84)', 'scale(1.07)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.09 },
    ],
  },
  adventure: {
    verb: 'the axe is swung back and planted, the haft following the head, while the crest holds firm',
    parts: [
      { as: 'head', origin: [5.5, 18.5], transform: ['scale(1)', 'scale(1)', 'scale(1.2)', 'scale(1)'], times: [0, 0.44, 0.6, 1], ease: ['linear', OUT, OUT], dur: 0.66 },
      { as: 'haft', origin: [6, 12], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      { as: 'blade', origin: [9, 13.5], transform: ['rotate(0deg)', 'rotate(-11deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
      beat([12, 12], { as: 'crest', dur: 0.56, delay: 0.12 }),
      { as: 'haft', origin: [6, 12], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(2deg)', 'rotate(0deg)'], times: [0, 0.36, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.66 },
    ],
  },
  advertisiment: {
    verb: 'the panel gives an announcing beat and the two letters are called out in turn',
    parts: [
      { as: 'letter', origin: [9, 17], transform: ['scale(1)', 'scale(0.8)', 'scale(1.1)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.08 },
      { as: 'panel', origin: [12, 13], transform: ['scale(1)', 'scale(0.965)', 'scale(1.03)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5 },
      { as: 'letter', origin: [16.3, 17], transform: ['scale(1)', 'scale(0.8)', 'scale(1.1)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.16 },
    ],
  },
  adzan: {
    verb: 'the call carries outward from the minaret, both sides pushing away from the tower again and again',
    loops: true,
    parts: [
      { as: 'dome', origin: [12, 12], transform: ['scale(1)', 'scale(1.035)', 'scale(1)'], times: [0, 0.4, 1], ease: OUT, dur: 1.1, repeat: Infinity, repeatDelay: 0.14 },
      { as: 'tower', origin: [12, 22], transform: ['scaleY(1)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.4, 1], ease: OUT, dur: 1.1, repeat: Infinity, repeatDelay: 0.14 },
      null,
      { as: 'callRight', origin: [20, 16], transform: ['translateX(0px)', 'translateX(1.4px)', 'translateX(0px)'], opacity: [1, 0.35, 1], times: [0, 0.46, 1], ease: OUT, dur: 1.1, repeat: Infinity, repeatDelay: 0.14 },
      { as: 'callLeft', origin: [4, 16], transform: ['translateX(0px)', 'translateX(-1.4px)', 'translateX(0px)'], opacity: [1, 0.35, 1], times: [0, 0.46, 1], ease: OUT, dur: 1.1, repeat: Infinity, repeatDelay: 0.14 },
    ],
  },
  affiliate: {
    verb: 'the network reaches out to all four corners at once while the payout pulses at the centre',
    parts: [
      { as: 'reachTopRight', origin: [20.6, 3.4], transform: ['translate(0px, 0px)', 'translate(1.3px, -1.3px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.68, delay: 0.06 },
      { as: 'reachBottomRight', origin: [20.6, 20.6], transform: ['translate(0px, 0px)', 'translate(1.3px, 1.3px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.68, delay: 0.06 },
      { as: 'reachTopLeft', origin: [3.4, 3.4], transform: ['translate(0px, 0px)', 'translate(-1.3px, -1.3px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.68, delay: 0.06 },
      { as: 'reachBottomLeft', origin: [3.4, 20.6], transform: ['translate(0px, 0px)', 'translate(-1.3px, 1.3px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.68, delay: 0.06 },
      { as: 'hub', origin: [12, 12], transform: ['scale(1)', 'scale(1.05)', 'scale(1)'], times: [0, 0.38, 1], ease: OUT, dur: 0.62 },
      { as: 'payout', origin: [12, 12], transform: ['scale(1)', 'scale(0.86)', 'scale(1.08)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.1 },
    ],
  },

  // Agreements: two parties meeting in the middle.
  'agreement-01': {
    verb: 'the two hands drive together, clasp, and pump twice before letting go',
    parts: [
      { as: 'leftHand', origin: [2, 12], transform: ['translateX(0px)', 'translateX(1.1px)', 'translateX(0.6px)', 'translateX(0.95px)', 'translateX(0px)'], times: [0, 0.3, 0.48, 0.66, 1], ease: [INOUT, OUT, OUT, OUT], dur: 0.82 },
      { as: 'rightHand', origin: [22, 10.5], transform: ['translateX(0px)', 'translateX(-1.1px)', 'translateX(-0.6px)', 'translateX(-0.95px)', 'translateX(0px)'], times: [0, 0.3, 0.48, 0.66, 1], ease: [INOUT, OUT, OUT, OUT], dur: 0.82 },
    ],
  },
  'agreement-02': {
    verb: 'the clasp pumps down twice and both cuffs take up the slack',
    parts: [
      { as: 'clasp', origin: [12, 12], transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(-0.3px)', 'translateY(0.45px)', 'translateY(0px)'], times: [0, 0.28, 0.46, 0.66, 1], ease: [INOUT, OUT, OUT, OUT], dur: 0.8 },
      { as: 'cuff', origin: [22, 14.8], transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.6, delay: 0.06 },
      { as: 'cuff', origin: [2, 6.8], transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.6, delay: 0.06 },
    ],
  },
  'agreement-03': {
    verb: 'the hand lifts and presses the seal down onto the page, which takes the weight',
    parts: [
      { as: 'seal', origin: [14.7, 22.8], transform: ['translateY(0px)', 'translateY(-1.5px)', 'translateY(0.5px)', 'translateY(0px)'], times: [0, 0.32, 0.62, 1], ease: [OUT, 'easeIn', OUT], dur: 0.74 },
      { as: 'page', origin: [11.5, 22], transform: ['scale(1)', 'scale(1)', 'scale(0.978)', 'scale(1)'], times: [0, 0.56, 0.7, 1], ease: ['linear', OUT, OUT], dur: 0.76 },
      { as: 'fold', origin: [3, 2], transform: ['scale(1)', 'scale(1)', 'scale(0.96)', 'scale(1)'], times: [0, 0.56, 0.7, 1], ease: ['linear', OUT, OUT], dur: 0.76 },
    ],
  },
  agreement: {
    verb: 'the two hands meet in one firm shake and release',
    parts: [
      { as: 'leftHand', origin: [2, 12], transform: ['translateX(0px)', 'translateX(1.3px)', 'translateX(-0.2px)', 'translateX(0px)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
      { as: 'rightHand', origin: [22, 10.5], transform: ['translateX(0px)', 'translateX(-1.3px)', 'translateX(0.2px)', 'translateX(0px)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.62 },
    ],
  },

  // The ai-* family: the machine part reacts, the subject part stays legible.
  'ai-audio': {
    verb: 'the level meter plays on, bars rising from the centre outward, while the spark keeps time',
    loops: true,
    parts: [
      null,
      { as: 'spark', origin: [18.5, 5.5], transform: ['rotate(0deg) scale(1)', 'rotate(-18deg) scale(0.72)', 'rotate(6deg) scale(1.14)', 'rotate(0deg) scale(1)'], times: [0, 0.26, 0.6, 1], ease: OUT, dur: 0.92, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'barCentre', origin: [12, 14], transform: ['scaleY(1)', 'scaleY(0.42)', 'scaleY(1.22)', 'scaleY(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.72, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'barInner', origin: [9, 14], transform: ['scaleY(1)', 'scaleY(0.42)', 'scaleY(1.22)', 'scaleY(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.72, delay: 0.08, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'barOuter', origin: [6, 14], transform: ['scaleY(1)', 'scaleY(0.42)', 'scaleY(1.22)', 'scaleY(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.72, delay: 0.16, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'barInner', origin: [15, 14], transform: ['scaleY(1)', 'scaleY(0.42)', 'scaleY(1.22)', 'scaleY(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.72, delay: 0.08, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'barOuter', origin: [18, 14], transform: ['scaleY(1)', 'scaleY(0.42)', 'scaleY(1.22)', 'scaleY(1)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.72, delay: 0.16, repeat: Infinity, repeatDelay: 0.1 },
    ],
  },
  'ai-beautify': {
    verb: 'the brush sweeps up its own diagonal and the sparkles light up one after another in its wake',
    parts: [
      { as: 'brush', origin: [10, 21.5], transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1px, -1px) rotate(-4deg)', 'translate(0px, 0px) rotate(0deg)'], times: [0, 0.4, 1], ease: OUT, dur: 0.7 },
      twinkle([19.5, 4], { delay: 0.2, dur: 0.56 }),
      twinkle([19.5, 14], { delay: 0.3, dur: 0.56 }),
      twinkle([10.5, 4], { delay: 0.1, dur: 0.56 }),
    ],
  },
  'ai-book': {
    verb: 'the page lifts off the spine and turns, and the letter on it settles back down',
    parts: [
      { as: 'cover', origin: [3.5, 12], transform: ['scaleX(1)', 'scaleX(0.972)', 'scaleX(1.006)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.62 },
      { as: 'page', origin: [3.5, 19.5], transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(1deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.68 },
      { as: 'page', origin: [3.5, 19.5], transform: ['rotate(0deg)', 'rotate(-4deg)', 'rotate(1deg)', 'rotate(0deg)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.68 },
      { as: 'letter', origin: [11.5, 12], transform: ['scale(1)', 'scale(0.88)', 'scale(1.05)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.08 },
    ],
  },
  'ai-brain-01': {
    verb: 'the two hemispheres fire in turn, left then right, and lean away from the midline',
    parts: [
      { as: 'leftLobe', origin: [12, 12], transform: ['translateX(0px) scale(1)', 'translateX(-0.55px) scale(1.045)', 'translateX(0px) scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.72 },
      { as: 'rightLobe', origin: [12, 12], transform: ['translateX(0px) scale(1)', 'translateX(0.55px) scale(1.045)', 'translateX(0px) scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.72, delay: 0.18 },
    ],
  },
  'ai-brain-02': {
    verb: 'the chip in the middle computes first and both hemispheres light up around it',
    parts: [
      { as: 'leftLobe', origin: [12, 12], transform: ['scale(1)', 'scale(1.04)', 'scale(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.66, delay: 0.14 },
      { as: 'rightLobe', origin: [12, 12], transform: ['scale(1)', 'scale(1.04)', 'scale(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.66, delay: 0.22 },
      { as: 'chip', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(-4deg) scale(0.9)', 'rotate(1deg) scale(1.06)', 'rotate(0deg) scale(1)'], opacity: [1, 0.65, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.6 },
    ],
  },
  'ai-brain-03': {
    verb: 'the skull breathes once and the letter resolves inside it',
    parts: [
      { as: 'brain', origin: [12, 12], transform: ['scale(1)', 'scale(1.032)', 'scale(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.68 },
      { as: 'letter', origin: [11.5, 14.5], transform: ['rotate(0deg) scale(1)', 'rotate(-7deg) scale(0.82)', 'rotate(2deg) scale(1.08)', 'rotate(0deg) scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.58, delay: 0.08 },
    ],
  },
  'ai-brain-04': {
    verb: 'a thought leaves the cortex and fires down the three taps in order, nearest first',
    parts: [
      { as: 'cortex', origin: [12, 12], transform: ['scale(1)', 'scale(1.035)', 'scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.64 },
      { as: 'tap', origin: [15, 5.5], transform: ['scale(1)', 'scale(0.76)', 'scale(1.14)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.18 },
      { as: 'tap', origin: [15, 18.5], transform: ['scale(1)', 'scale(0.76)', 'scale(1.14)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.26 },
      { as: 'tap', origin: [15, 12], transform: ['scale(1)', 'scale(0.76)', 'scale(1.14)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.1 },
    ],
  },
  'ai-brain-05': {
    verb: 'the cortex pulses, the co-processor answers, and its pins flicker with the exchange',
    parts: [
      { as: 'cortex', origin: [12.5, 12], transform: ['scale(1)', 'scale(1.035)', 'scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.66 },
      { as: 'chip', origin: [16.5, 12], transform: ['scale(1)', 'scale(0.9)', 'scale(1.05)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.58, delay: 0.1 },
      { as: 'pins', origin: [16.5, 12], transform: ['scale(1)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.45, 1], times: [0, 0.36, 1], ease: OUT, dur: 0.56, delay: 0.16 },
    ],
  },
  'ai-brain': {
    verb: 'both hemispheres breathe together and part slightly at the midline',
    parts: [
      { as: 'leftLobe', origin: [12, 12], transform: ['translateX(0px) scale(1)', 'translateX(-0.7px) scale(1.03)', 'translateX(0px) scale(1)'], times: [0, 0.38, 1], ease: OUT, dur: 0.66 },
      { as: 'rightLobe', origin: [12, 12], transform: ['translateX(0px) scale(1)', 'translateX(0.7px) scale(1.03)', 'translateX(0px) scale(1)'], times: [0, 0.38, 1], ease: OUT, dur: 0.66 },
    ],
  },
  'ai-browser': {
    verb: 'the address bar fills left to right as the page loads, then the spark fires in the corner',
    parts: [
      twinkle([18.5, 18.5], { delay: 0.34 }),
      { as: 'addressBar', origin: [3, 7.5], transform: ['scaleX(1)', 'scaleX(0.08)', 'scaleX(1)'], times: [0, 0.24, 1], ease: OUT, dur: 0.6 },
      beat([11.5, 11.5], { as: 'window', dur: 0.56, delay: 0.08 }),
    ],
  },
  'ai-chat-01': {
    verb: 'the bubble pops out from its tail and the chip inside starts working',
    parts: [
      { as: 'bubble', origin: [5, 20], transform: ['scale(1)', 'scale(0.88)', 'scale(1.045)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56 },
      { as: 'chip', origin: [12, 12], transform: ['scale(1)', 'scale(0.9)', 'scale(1.05)', 'scale(1)'], opacity: [1, 0.6, 1, 1], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.1 },
    ],
  },
  'ai-chat-02': {
    verb: 'the bubble pops out from its tail and the letter forms inside it',
    parts: [
      { as: 'bubble', origin: [5, 20], transform: ['scale(1)', 'scale(0.88)', 'scale(1.045)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56 },
      { as: 'letter', origin: [11.5, 15], transform: ['rotate(0deg) scale(1)', 'rotate(-8deg) scale(0.8)', 'rotate(2deg) scale(1.08)', 'rotate(0deg) scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.58, delay: 0.1 },
    ],
  },
  'ai-chat': {
    verb: 'the bubble bobs up as it arrives and the chip breathes inside it',
    parts: [
      { as: 'bubble', origin: [12, 21.5], transform: ['translateY(0px)', 'translateY(-1.1px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.34, 0.7, 1], ease: [OUT, OUT, OUT], dur: 0.64 },
      { as: 'chip', origin: [12, 12], transform: ['scale(1)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.7, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.62, delay: 0.08 },
    ],
  },

  // Chemistry: the vessel rocks, the liquid line moves, the reaction sparks.
  'ai-chemistry-01': {
    verb: 'the tube is tipped, the level climbs the glass, and the reaction sparks off the side',
    parts: [
      { as: 'tube', origin: [9.5, 22], transform: ['rotate(0deg)', 'rotate(-3deg)', 'rotate(1deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.68 },
      twinkle([16, 14], { delay: 0.24 }),
      { as: 'tube', origin: [9.5, 22], transform: ['rotate(0deg)', 'rotate(-3deg)', 'rotate(1deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.68 },
      { as: 'level', origin: [9.5, 8], transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.3px) rotate(-3deg)', 'translateY(-0.2px) rotate(1deg)', 'translateY(0px) rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.68 },
    ],
  },
  'ai-chemistry-02': {
    verb: 'the flask is swirled on its base, the level sloshes with it, and the reaction sparks below',
    parts: [
      { as: 'flask', origin: [10.2, 22], transform: ['rotate(0deg)', 'rotate(4deg)', 'rotate(-1.5deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.72 },
      { as: 'flask', origin: [10.2, 22], transform: ['rotate(0deg)', 'rotate(4deg)', 'rotate(-1.5deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.72 },
      { as: 'level', origin: [12, 11.5], transform: ['rotate(0deg) translateY(0px)', 'rotate(6deg) translateY(-0.7px)', 'rotate(-2deg) translateY(0.1px)', 'rotate(0deg) translateY(0px)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.72 },
      twinkle([18.5, 18.5], { delay: 0.28 }),
    ],
  },
  'ai-chemistry-03': {
    verb: 'the round flask rocks on its belly, the level tilts against it, and the reaction sparks out',
    parts: [
      { as: 'neck', origin: [10.5, 14.5], transform: ['rotate(0deg)', 'rotate(-4.5deg)', 'rotate(1.5deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      twinkle([17.5, 18.5], { delay: 0.26 }),
      { as: 'neck', origin: [10.5, 14.5], transform: ['rotate(0deg)', 'rotate(-4.5deg)', 'rotate(1.5deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
      { as: 'level', origin: [10.5, 11], transform: ['rotate(0deg)', 'rotate(-7deg)', 'rotate(2.5deg)', 'rotate(0deg)'], times: [0, 0.34, 0.68, 1], ease: [INOUT, OUT, OUT], dur: 0.74 },
    ],
  },
  'ai-chemistry': {
    verb: 'the level bubbles up the tube twice before the reaction sparks off the side',
    parts: [
      { as: 'tube', origin: [9.5, 22], transform: ['rotate(0deg)', 'rotate(-2deg)', 'rotate(0.8deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.78 },
      twinkle([16, 14], { delay: 0.3 }),
      { as: 'tube', origin: [9.5, 22], transform: ['rotate(0deg)', 'rotate(-2deg)', 'rotate(0.8deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.78 },
      { as: 'level', origin: [9.5, 8], transform: ['translateY(0px)', 'translateY(-1.2px)', 'translateY(-0.4px)', 'translateY(-1px)', 'translateY(0px)'], times: [0, 0.24, 0.44, 0.62, 1], ease: [OUT, OUT, OUT, OUT], dur: 0.78 },
    ],
  },
  'ai-chip': {
    verb: 'the core turns a quarter onto its next face while the pins flicker with current',
    parts: [
      beat([12, 12], { as: 'die', dur: 0.58 }),
      { as: 'pins', origin: [12, 12], transform: ['scale(1)', 'scale(1.045)', 'scale(1)'], opacity: [1, 0.45, 1], times: [0, 0.38, 1], ease: OUT, dur: 0.66, delay: 0.06 },
      { as: 'core', origin: [12, 12], transform: ['rotate(0deg) scale(1)', 'rotate(48deg) scale(1.1)', 'rotate(90deg) scale(1)'], times: [0, 0.52, 1], ease: INOUT, dur: 0.78 },
    ],
  },
  'ai-cloud-01': {
    verb: 'the cloud floats up and the chip slung beneath it does the work, pins flickering',
    parts: [
      { as: 'cloud', origin: [12, 9], transform: ['translateY(0px)', 'translateY(-1px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.74 },
      { as: 'chip', origin: [12, 17], transform: ['scale(1)', 'scale(0.9)', 'scale(1.05)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.6, delay: 0.1 },
      { as: 'pins', origin: [12, 17], transform: ['scale(1)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.45, 1], times: [0, 0.36, 1], ease: OUT, dur: 0.58, delay: 0.16 },
    ],
  },
  'ai-cloud-02': {
    verb: 'the cloud holds while its three feeds drop down to their endpoints, centre first',
    parts: [
      { as: 'cloud', origin: [12, 9], transform: ['translateY(0px)', 'translateY(-0.7px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.7 },
      { as: 'feed', origin: [17.5, 17], transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.54, delay: 0.22 },
      { as: 'feed', origin: [6.5, 17], transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.54, delay: 0.14 },
      { as: 'feed', origin: [12, 17], transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.54, delay: 0.06 },
    ],
  },
  'ai-cloud': {
    verb: 'the cloud lifts and the spark it carries flares underneath',
    parts: [
      { as: 'cloud', origin: [12, 10.3], transform: ['translateY(0px)', 'translateY(-1.2px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.76 },
      twinkle([12, 17.5], { delay: 0.14 }),
    ],
  },
  'ai-computer': {
    verb: 'the machine wakes: the chip pulses, its pins flicker, and the screen blinks once',
    parts: [
      beat([12, 10], { as: 'monitor', dur: 0.56 }),
      null,
      null,
      { as: 'screenLine', origin: [12, 15], transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1)'], opacity: [1, 0.4, 1], times: [0, 0.34, 1], ease: OUT, dur: 0.5, delay: 0.2 },
      { as: 'chip', origin: [17, 7], transform: ['scale(1)', 'scale(0.9)', 'scale(1.06)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.06 },
      { as: 'pins', origin: [17, 7], transform: ['scale(1)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.45, 1], times: [0, 0.36, 1], ease: OUT, dur: 0.56, delay: 0.12 },
    ],
  },
  'ai-content-generator-01': {
    verb: 'the copy is written line by line down the page, then the spark signs it off',
    parts: [
      beat([11, 11.5], { as: 'page', dur: 0.6 }),
      twinkle([18, 18], { delay: 0.66 }),
      { as: 'copy', origin: [11, 11.5], ...sweep({ dur: 0.92 }) },
    ],
  },
  'ai-content-generator-02': {
    verb: 'the glyph is drawn stroke by stroke and the spark signs it off',
    parts: [
      beat([11, 11], { as: 'page', dur: 0.6 }),
      twinkle([18, 18], { delay: 0.62 }),
      { as: 'glyph', origin: [11, 11], ...sweep({ dur: 0.86 }) },
    ],
  },
  'ai-content-generator': {
    verb: 'the copy is written out fast and the spark spins as it finishes',
    parts: [
      beat([11, 11.5], { as: 'page', dur: 0.54 }),
      { as: 'spark', origin: [18, 18], transform: ['rotate(0deg) scale(1)', 'rotate(-90deg) scale(0.6)', 'rotate(0deg) scale(1.16)', 'rotate(0deg) scale(1)'], opacity: [1, 0.5, 1, 1], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.66, delay: 0.5 },
      { as: 'copy', origin: [11, 11.5], ...sweep({ dur: 0.76 }) },
    ],
  },
  'ai-dna': {
    verb: 'the helix twists edge-on, narrowing then opening again, while the reader chip pulses',
    parts: [
      { as: 'helix', origin: [7.5, 10], transform: ['scaleX(1)', 'scaleX(0.74)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.76 },
      { as: 'reader', origin: [16, 17], transform: ['scale(1)', 'scale(0.92)', 'scale(1.05)', 'scale(1)'], opacity: [1, 0.7, 1, 1], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.6, delay: 0.14 },
    ],
  },
  'ai-editing': {
    verb: 'the nib runs up its own diagonal in one stroke and the spark answers at the tip',
    parts: [
      twinkle([7, 6], { delay: 0.18 }),
      { as: 'pen', origin: [13.5, 14.5], transform: ['translate(0px, 0px)', 'translate(1.2px, -1.2px)', 'translate(-0.2px, 0.2px)', 'translate(0px, 0px)'], times: [0, 0.36, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.68 },
    ],
  },
  'ai-eraser': {
    verb: 'the eraser rubs back and forth along its own diagonal and the spark flares where it clears',
    parts: [
      { as: 'eraser', origin: [13, 13.5], transform: ['translate(0px, 0px)', 'translate(-1.2px, 1.2px)', 'translate(1px, -1px)', 'translate(-0.4px, 0.4px)', 'translate(0px, 0px)'], times: [0, 0.26, 0.52, 0.74, 1], ease: [INOUT, INOUT, INOUT, OUT], dur: 0.82 },
      twinkle([5.5, 5.5], { delay: 0.2 }),
    ],
  },
}
