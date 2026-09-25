/**
 * Page 12 — bubble-chat-secure → calendar-favorite.
 *
 * Gallery page (80 public icons). Skipped handcrafted originals: `bug-01`,
 * `calendar-add-01`. Hidden handcrafted files in the same alphabetical span
 * (`bulb`, `calendar-03`) are not on this page.
 *
 * Identical-geometry pairs get different jobs: bubble-tea / bubble-tea-01,
 * bus / bus-01, cabinet / cabinet-01, and the calendar 01-vs-plain pairs
 * (block, check-in, check-out, download, favorite).
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  HOLD_E,
  HOLD_T,
  around,
  beat,
  draw,
  grow,
  hold,
  nudge,
  retrace,
  scaleFrom,
  scaleHold,
  shake,
  spinStar,
  stamp,
  sweep,
  twinkle,
} from './_kit.mjs'

/** A node that shrinks, then pops past its size. */
const pop = (origin, o = {}) => ({
  as: 'node',
  origin,
  transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
  times: [0, 0.2, 0.55, 1],
  ease: OUT,
  dur: 0.46,
  ...o,
})

/** The whole vehicle rolls along x, then settles. */
const roll = (origin, dx, o = {}) => nudge(origin, dx, 0, { as: 'bus', dur: 0.62, ...o })

const RINGS = hold([12, 4], 0, -1.5, { as: 'rings', dur: 0.64 })

export default {
  'bubble-chat-secure': {
    verb: 'the shield rises from the bottom of the still bubble',
    parts: [
      null,
      scaleFrom('Y', [12, 16], [12, 12], [1, 0.2, 1.08, 1], { as: 'shield', dur: 0.66 }),
    ],
  },
  'bubble-chat-spark-01': {
    verb: 'the outside spark catches, the bubble and its dots holding',
    parts: [null, twinkle([18, 6], { dur: 0.62 }), null],
  },
  'bubble-chat-spark': {
    verb: 'the spark inside the bubble turns onto its points, then the bubble answers',
    parts: [beat([12, 12], { as: 'bubble', delay: 0.28 }), spinStar([12, 12], { dur: 0.7 })],
  },
  'bubble-chat-temporary': {
    verb: 'the dashed bubble rewrites and dims, as if the message is expiring',
    parts: [
      {
        as: 'bubble',
        origin: [12, 12],
        ...retrace({ dur: 0.72 }),
        opacity: [1, 0.4, 1],
      },
    ],
  },
  'bubble-chat-translate': {
    verb: 'the letters rewrite inside the still bubble',
    parts: [null, { as: 'letters', origin: [12, 12], ...draw({ dur: 0.66 }) }],
  },
  'bubble-chat-unlock': {
    verb: 'the open shackle swings wider on its left foot, then clicks back',
    parts: [
      null,
      around([10, 11], [11.7, 9.3], [0, -32, -32, 0], {
        as: 'shackle',
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.72,
      }),
      null,
    ],
  },
  'bubble-chat-upload': {
    verb: 'the arrow leaves upward out of the still bubble',
    parts: [null, nudge([12, 12], 0, -2.2, { as: 'arrow', dur: 0.52 })],
  },
  'bubble-chat-user': {
    verb: 'the person stands up inside the still bubble',
    parts: [
      null,
      scaleFrom('Y', [12, 15.5], [12, 11.7], [1, 0.72, 1.06, 1], { as: 'person', dur: 0.62 }),
    ],
  },
  'bubble-chat': {
    verb: 'the three dots type on, the bubble holding still',
    parts: [
      null,
      {
        as: 'dots',
        origin: [12, 12],
        opacity: [1, 0.15, 1, 0.35, 1],
        times: [0, 0.18, 0.4, 0.62, 1],
        ease: OUT,
        dur: 0.7,
      },
    ],
  },
  'bubble-tea-01': {
    verb: 'the straw tilts in the lid and the pearls pop',
    parts: [
      null,
      null,
      null,
      around([13, 9], [14.5, 5.5], [0, 14, -6, 2, 0], { as: 'straw', dur: 0.7 }),
      pop([13, 13], { delay: 0.08 }),
      pop([13.5, 18], { delay: 0.16 }),
      pop([10, 15.5], { delay: 0.24 }),
    ],
  },
  'bubble-tea-02': {
    verb: 'the straw grows down from the lid and the drink line lifts',
    parts: [
      null,
      null,
      null,
      grow([12, 2], 'Y', { as: 'straw', dur: 0.58 }),
      nudge([12, 13.6], 0, -1.2, { as: 'wave', dur: 0.56, delay: 0.12 }),
      pop([13, 18.5], { delay: 0.2 }),
      pop([10.5, 16], { delay: 0.28 }),
    ],
  },
  'bubble-tea': {
    verb: 'the cup rocks on its base while the pearls rise',
    parts: [
      around([12, 22], [12, 15.6], [0, 4, -3, 1, 0], { as: 'cup', dur: 0.72 }),
      null,
      null,
      null,
      nudge([13, 13], 0, -1.6, { as: 'pearl', dur: 0.5, delay: 0.06 }),
      nudge([13.5, 18], 0, -1.2, { as: 'pearl', dur: 0.5, delay: 0.14 }),
      nudge([10, 15.5], 0, -1.4, { as: 'pearl', dur: 0.5, delay: 0.22 }),
    ],
  },
  bubbles: {
    verb: 'the three bubbles swell in size order, then the highlight wipes',
    parts: [
      pop([19, 13], { as: 'bubble', delay: 0.16 }),
      pop([13, 19], { as: 'bubble', delay: 0.08 }),
      pop([8.5, 7.5], { as: 'bubble' }),
      { as: 'glint', origin: [7.3, 6.3], ...draw({ dur: 0.5, delay: 0.28 }) },
    ],
  },
  bucket: {
    verb: 'the handle swings off the rim and the drop falls',
    parts: [
      null,
      null,
      nudge([11, 13], 0, 1.8, { as: 'drop', dur: 0.48, delay: 0.16 }),
      around([11, 13], [16.2, 13.7], [0, -16, 6, -2, 0], { as: 'handle', dur: 0.7 }),
    ],
  },
  'bug-02': {
    verb: 'the legs splay and the shell crouches, unlike the crawling bug-01',
    parts: [
      nudge([4.4, 8.4], -1.2, -0.8, { as: 'leg', dur: 0.5 }),
      nudge([19.6, 8.4], 1.2, -0.8, { as: 'leg', dur: 0.5 }),
      nudge([18.8, 19.2], 1.2, 0.6, { as: 'leg', dur: 0.5 }),
      nudge([5.2, 19.2], -1.2, 0.6, { as: 'leg', dur: 0.5 }),
      null,
      null,
      null,
      null,
      scaleHold([12, 12.7], 0.94, { as: 'shell', dur: 0.6 }),
    ],
  },
  bug: {
    verb: 'the shell squashes and the tail rewrites, the legs staying put',
    parts: [
      null,
      null,
      null,
      null,
      scaleFrom('Y', [12, 20], [12, 12.6], [1, 0.86, 1.04, 1], { as: 'shell', dur: 0.58 }),
      null,
      null,
      { as: 'tail', origin: [12, 18.4], ...retrace({ dur: 0.6, delay: 0.08 }) },
    ],
  },
  'building-01': {
    verb: 'the window bars rewrite across the still tower',
    parts: [null, { as: 'windows', origin: [16, 13], ...draw({ dur: 0.66 }) }, null],
  },
  'building-02': {
    verb: 'the door grows up from the floor',
    parts: [
      null,
      null,
      scaleFrom('Y', [12, 22], [12, 19.5], [1, 0.15, 1.06, 1], { as: 'door', dur: 0.62 }),
      null,
    ],
  },
  'building-03': {
    verb: 'the right wing steps out from the main block',
    parts: [hold([18.5, 16], 1.6, 0, { as: 'wing', dur: 0.66 }), null, null, null, null],
  },
  'building-04': {
    verb: 'the annex slides out to the right of the main house',
    parts: [null, null, null, null, hold([18, 16], 1.5, 0, { as: 'annex', dur: 0.66 })],
  },
  'building-05': {
    verb: 'the street door grows from the pavement',
    parts: [
      null,
      null,
      null,
      null,
      null,
      scaleFrom('Y', [16, 22], [16, 20.5], [1, 0.2, 1.08, 1], { as: 'door', dur: 0.56 }),
    ],
  },
  'building-06': {
    verb: 'the front door grows from the threshold',
    parts: [
      null,
      null,
      null,
      scaleFrom('Y', [9, 22], [9, 19], [1, 0.16, 1.06, 1], { as: 'door', dur: 0.6 }),
    ],
  },
  building: {
    verb: 'the three window rows light in order',
    parts: [
      null,
      null,
      null,
      { as: 'windows', origin: [9.5, 8.5], ...draw({ dur: 0.48 }) },
      { as: 'windows', origin: [9.5, 12.5], ...draw({ dur: 0.48, delay: 0.1 }) },
      { as: 'windows', origin: [9.5, 16.5], ...draw({ dur: 0.48, delay: 0.2 }) },
    ],
  },
  'bulb-charging': {
    verb: 'the bolt writes itself inside the still glass',
    parts: [null, { as: 'bolt', origin: [12, 10], ...draw({ dur: 0.58 }) }, null, null],
  },
  bullet: {
    verb: 'the round travels toward its tip, then settles',
    parts: [nudge([12, 12], 1.4, -1.4, { as: 'round', dur: 0.48 })],
  },
  'bulletproof-vest': {
    verb: 'the chest plate stamps into the still vest',
    parts: [null, null, null, stamp([12, 16], { dur: 0.5 }), null],
  },
  'burj-al-arab': {
    verb: 'the sail rewrites along the still mast',
    parts: [null, null, { as: 'sail', origin: [12, 13], ...retrace({ dur: 0.72 }) }, null, null],
  },
  'burning-cd': {
    verb: 'the two disc arcs sweep while the case stays shut',
    parts: [
      null,
      null,
      sweep({ as: 'disc', dur: 0.7 }),
      sweep({ as: 'disc', dur: 0.78, delay: 0.08 }),
    ],
  },
  'bus-01': {
    verb: 'the bus rolls forward on its wheels, then eases back',
    parts: [
      roll([17, 21.3], 2),
      roll([7, 21.3], 2),
      roll([12, 11], 2),
      roll([12, 14.5], 2),
      roll([5.3, 17.5], 2),
      roll([18.8, 17.5], 2),
      roll([12, 17.5], 2),
      roll([12, 6], 2),
      roll([2, 9.5], 2),
      roll([22, 9.5], 2),
    ],
  },
  'bus-02': {
    verb: 'the mirrors tuck in and the marker lights blink',
    parts: [
      null,
      null,
      null,
      null,
      hold([21, 11.3], -1.2, 0, { as: 'mirror', dur: 0.6 }),
      hold([3, 11.3], 1.2, 0, { as: 'mirror', dur: 0.6 }),
      {
        as: 'light',
        origin: [5.3, 16],
        opacity: [1, 0.15, 1, 1],
        times: [0, 0.22, 0.48, 1],
        ease: OUT,
        dur: 0.6,
      },
      {
        as: 'light',
        origin: [18.8, 16],
        opacity: [1, 0.15, 1, 1],
        times: [0, 0.22, 0.48, 1],
        ease: OUT,
        dur: 0.6,
        delay: 0.1,
      },
      null,
    ],
  },
  'bus-03': {
    verb: 'the coach rolls while the wheels squash on the road',
    parts: [
      roll([11, 7.5], 1.8),
      roll([12, 11], 1.8),
      scaleFrom('Y', [7, 19], [7, 17], [1, 0.72, 1.08, 1], { as: 'wheel', dur: 0.5, delay: 0.12 }),
      scaleFrom('Y', [17, 19], [17, 17], [1, 0.72, 1.08, 1], { as: 'wheel', dur: 0.5, delay: 0.12 }),
      roll([11.8, 11], 1.8),
    ],
  },
  'bus-front': {
    verb: 'the headlights blink and the windshield line rewrites',
    parts: [
      null,
      pop([8, 16.3], { as: 'lamp', delay: 0.04 }),
      pop([16, 16.3], { as: 'lamp', delay: 0.12 }),
      null,
      null,
      { as: 'glass', origin: [12, 13], ...retrace({ dur: 0.64 }) },
    ],
  },
  bus: {
    verb: 'the destination band rewrites while the bus stays parked',
    parts: [
      null,
      null,
      null,
      { as: 'band', origin: [12, 14.5], ...retrace({ dur: 0.66 }) },
      null,
      null,
      null,
      { as: 'roof', origin: [12, 6], ...draw({ dur: 0.5, delay: 0.08 }) },
      null,
      null,
    ],
  },
  'c-programming': {
    verb: 'the C rewrites inside the still frame',
    parts: [null, { as: 'glyph', origin: [11.8, 12], ...retrace({ dur: 0.68 }) }],
  },
  c: {
    verb: 'the C draws on, then the two plus marks stamp',
    parts: [
      null,
      { as: 'glyph', origin: [6.9, 12], ...draw({ dur: 0.56 }) },
      stamp([12, 12], { delay: 0.2 }),
      stamp([17.5, 12], { delay: 0.32 }),
    ],
  },
  'cabinet-01': {
    verb: 'the two handles pull apart as if the doors crack open',
    parts: [
      null,
      null,
      null,
      null,
      nudge([9, 8.5], -1.4, 0, { as: 'handle', dur: 0.5 }),
      nudge([15, 8.5], 1.4, 0, { as: 'handle', dur: 0.5 }),
    ],
  },
  'cabinet-02': {
    verb: 'the counter lifts off the still cabinet',
    parts: [null, null, null, hold([12, 4], 0, -1.4, { as: 'top', dur: 0.6 }), null, null],
  },
  'cabinet-03': {
    verb: 'the lower drawer slides down on its handle',
    parts: [
      null,
      null,
      null,
      null,
      hold([12, 13.8], 0, 1.6, { as: 'drawer', dur: 0.64 }),
      null,
    ],
  },
  'cabinet-04': {
    verb: 'the oven window flares on the left door',
    parts: [null, null, null, null, pop([8, 5], { as: 'window', dur: 0.5 })],
  },
  cabinet: {
    verb: 'the shelf line rewrites across the closed doors',
    parts: [
      null,
      null,
      { as: 'shelf', origin: [12, 14], ...retrace({ dur: 0.64 }) },
      null,
      null,
      null,
    ],
  },
  'cable-car': {
    verb: 'the car sways on the still cable',
    parts: [
      around([12, 3.8], [12, 15], [0, 3.5, -2.4, 0.8, 0], { as: 'car', dur: 0.8 }),
      null,
      around([12, 3.8], [12, 16], [0, 3.5, -2.4, 0.8, 0], { as: 'car', dur: 0.8 }),
      around([12, 3.8], [12, 12.5], [0, 3.5, -2.4, 0.8, 0], { as: 'car', dur: 0.8 }),
    ],
  },
  cable: {
    verb: 'the cord rewrites between the two still plugs',
    parts: [null, { as: 'cord', origin: [12, 12], ...retrace({ dur: 0.74 }) }, null, null, null],
  },
  cactus: {
    verb: 'the trunk leans on the pot, spines following',
    parts: [
      null,
      around([12, 15], [12, 9.5], [0, 6, -4, 1, 0], { as: 'trunk', dur: 0.74 }),
      around([12, 15], [12, 13.5], [0, 6, -4, 1, 0], { as: 'rib', dur: 0.74 }),
      around([12, 15], [12, 6.5], [0, 6, -4, 1, 0], { as: 'spines', dur: 0.74 }),
    ],
  },
  caduceus: {
    verb: 'both snakes rewrite around the still staff',
    parts: [
      null,
      null,
      null,
      { as: 'snake', origin: [7, 9.6], ...retrace({ dur: 0.7 }) },
      { as: 'snake', origin: [17, 9.6], ...retrace({ dur: 0.7, delay: 0.08 }) },
    ],
  },
  cafe: {
    verb: 'the cup rim rewrites above the still table',
    parts: [retrace({ as: 'cup', dur: 0.68 }), null, null, null],
  },
  'cake-slice': {
    verb: 'the cherry pops and the frosting line rewrites',
    parts: [
      pop([8, 7], { as: 'cherry' }),
      null,
      null,
      { as: 'icing', origin: [12, 17], ...retrace({ dur: 0.6, delay: 0.1 }) },
      null,
    ],
  },
  cake: {
    verb: 'the drip line rewrites and the cherry pops',
    parts: [
      null,
      { as: 'icing', origin: [12, 14], ...retrace({ dur: 0.62 }) },
      null,
      pop([12, 7.5], { as: 'cherry', delay: 0.16 }),
      null,
    ],
  },
  calculate: {
    verb: 'the plus swells and the multiply mark draws',
    parts: [
      null,
      scaleHold([16, 8], 1.2, { as: 'plus', dur: 0.5 }),
      null,
      null,
      { as: 'times', origin: [8.3, 15.8], ...draw({ dur: 0.56, delay: 0.08 }) },
      null,
    ],
  },
  'calculator-01': {
    verb: 'the display segment blinks on the still keypad',
    parts: [
      null,
      {
        as: 'digit',
        origin: [16, 6],
        opacity: [1, 0.1, 1, 1],
        times: [0, 0.2, 0.42, 1],
        ease: OUT,
        dur: 0.64,
      },
      null,
      null,
      null,
    ],
  },
  calculator: {
    verb: 'the plus turns onto its points and the multiply mark draws',
    parts: [
      spinStar([5.5, 5.5], { dur: 0.64 }),
      { as: 'times', origin: [6, 18], ...draw({ dur: 0.52, delay: 0.12 }) },
      null,
      null,
      null,
      null,
    ],
  },
  'calendar-01': {
    verb: 'the date digits rewrite under the still rings',
    parts: [null, null, null, { as: 'date', origin: [12.3, 16], ...draw({ dur: 0.62 }) }],
  },
  'calendar-02': {
    verb: 'the day marks rewrite across the page',
    parts: [null, null, null, { as: 'days', origin: [12, 16], ...retrace({ dur: 0.66 }) }],
  },
  'calendar-04': {
    verb: 'the blank page drops open from the header rule',
    parts: [
      null,
      scaleFrom('Y', [12, 10], [12, 13], [1, 0.78, 1.03, 1], { as: 'page', dur: 0.62 }),
      null,
    ],
  },
  'calendar-05': {
    verb: 'the corner badge stamps the blank page',
    parts: [null, null, null, stamp([15.5, 16.5], { dur: 0.48 })],
  },
  'calendar-add-02': {
    verb: 'the inner plus turns onto its points',
    parts: [null, null, null, spinStar([12, 16], { dur: 0.66 })],
  },
  'calendar-add': {
    verb: 'the corner plus draws on beside the page',
    parts: [null, null, null, { as: 'plus', origin: [17.5, 18.5], ...draw({ dur: 0.56 }) }],
  },
  'calendar-analysis': {
    verb: 'the chart line draws across the page',
    parts: [{ as: 'chart', origin: [12, 16], ...draw({ dur: 0.64 }) }, null, null, null],
  },
  'calendar-arrow-down': {
    verb: 'the corner arrow travels down',
    parts: [null, null, nudge([17.5, 18.5], 0, 1.8, { as: 'arrow', dur: 0.5 }), null],
  },
  'calendar-arrow-up': {
    verb: 'the corner arrow travels up',
    parts: [null, null, nudge([17.5, 18.5], 0, -1.8, { as: 'arrow', dur: 0.5 }), null],
  },
  'calendar-block-01': {
    verb: 'the prohibition badge wipes on at the corner',
    parts: [null, null, null, { as: 'badge', origin: [17.5, 18.5], ...draw({ dur: 0.6 }) }],
  },
  'calendar-block-02': {
    verb: 'the inner prohibition badge shakes',
    parts: [null, null, null, shake([12, 16], { as: 'badge', dur: 0.52 })],
  },
  'calendar-block': {
    verb: 'the corner prohibition badge stamps shut',
    parts: [null, null, null, stamp([17.5, 18.5], { as: 'badge', dur: 0.5 })],
  },
  'calendar-check-in-01': {
    verb: 'the arrow holds toward the page, then returns',
    parts: [null, null, null, hold([17.5, 19.5], -1.6, 0, { as: 'arrow', dur: 0.64 })],
  },
  'calendar-check-in-02': {
    verb: 'the inner arrow steps into the page',
    parts: [null, null, null, nudge([12.5, 16], -1.6, 0, { as: 'arrow', dur: 0.5 })],
  },
  'calendar-check-in': {
    verb: 'the arrival arrow rewrites toward the page',
    parts: [null, null, null, { as: 'arrow', origin: [17.5, 19.5], ...retrace({ dur: 0.64 }) }],
  },
  'calendar-check-out-01': {
    verb: 'the arrow holds away from the page, then returns',
    parts: [null, null, null, hold([17.5, 19.5], 1.6, 0, { as: 'arrow', dur: 0.64 })],
  },
  'calendar-check-out-02': {
    verb: 'the inner arrow steps out of the page',
    parts: [null, null, null, nudge([12.5, 16], 1.6, 0, { as: 'arrow', dur: 0.5 })],
  },
  'calendar-check-out': {
    verb: 'the departure arrow rewrites away from the page',
    parts: [null, null, null, { as: 'arrow', origin: [17.5, 19.5], ...draw({ dur: 0.6 }) }],
  },
  'calendar-check': {
    verb: 'the binding rings lift and the header rule rewrites',
    parts: [RINGS, { as: 'rule', origin: [12, 10], ...retrace({ dur: 0.6, delay: 0.08 }) }, null],
  },
  'calendar-clock': {
    verb: 'the clock hands sweep on the still page',
    parts: [
      null,
      null,
      null,
      null,
      around([16, 16], [17, 15], [0, 48, 48, 0], {
        as: 'hands',
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.72,
      }),
    ],
  },
  'calendar-cog': {
    verb: 'the cog turns on the corner of the page',
    parts: [
      around([17.5, 18], [17.5, 18], [0, -22, 36, -8, 0], { as: 'cog', dur: 0.74 }),
      null,
      null,
      null,
    ],
  },
  'calendar-days': {
    verb: 'the day dots pop in reading order',
    parts: [
      pop([12, 18], { delay: 0.24 }),
      pop([12, 14], { delay: 0.06 }),
      pop([7.3, 18], { delay: 0.18 }),
      pop([7.3, 14]),
      pop([16.8, 14], { delay: 0.12 }),
      null,
      null,
      null,
    ],
  },
  'calendar-download-01': {
    verb: 'the corner arrow travels down off the page',
    parts: [null, null, nudge([17.5, 18.5], 0, 1.8, { as: 'arrow', dur: 0.5 }), null],
  },
  'calendar-download-02': {
    verb: 'the inner download arrow rewrites',
    parts: [null, null, null, { as: 'arrow', origin: [12, 16], ...retrace({ dur: 0.62 }) }],
  },
  'calendar-download': {
    verb: 'the corner arrow holds down, then returns',
    parts: [null, null, hold([17.5, 18.5], 0, 1.8, { as: 'arrow', dur: 0.66 }), null],
  },
  'calendar-favorite-01': {
    verb: 'the corner heart stamps the page',
    parts: [null, null, null, stamp([17.5, 18.5], { as: 'heart', dur: 0.5 })],
  },
  'calendar-favorite-02': {
    verb: 'the inner heart swells and holds',
    parts: [null, null, null, scaleHold([12, 16], 1.16, { as: 'heart', dur: 0.6 })],
  },
  'calendar-favorite': {
    verb: 'the corner heart beats twice',
    parts: [
      null,
      null,
      null,
      {
        as: 'heart',
        origin: [17.5, 18.5],
        transform: ['scale(1)', 'scale(1.22)', 'scale(1)', 'scale(1.14)', 'scale(1)'],
        times: [0, 0.22, 0.42, 0.64, 1],
        ease: OUT,
        dur: 0.7,
      },
    ],
  },
}
