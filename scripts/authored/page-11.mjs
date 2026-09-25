/**
 * Page 11 — border-right → bubble-chat-search.
 *
 * `border-right-01` and `border-right-02` were authored with page 10. No
 * handcrafted originals in this slice. Identical-geometry pairs (`bread` /
 * `bread-01`, `briefcase` / `briefcase-01`, `bubble-chat-download` /
 * `bubble-chat-download-01`) get different jobs.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  E5,
  HOLD_E,
  HOLD_T,
  T5,
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
} from './_kit.mjs'

/** Eyelid closes on the vertical axis, then opens. */
const blink = (origin, o = {}) => ({
  as: 'eye',
  origin,
  transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1)', 'scaleY(1)'],
  times: [0, 0.18, 0.36, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.6,
  ...o,
})

/** A node or handle that shrinks, then pops past its size. */
const pop = (origin, o = {}) => ({
  as: 'node',
  origin,
  transform: ['scale(1)', 'scale(0.4)', 'scale(1.28)', 'scale(1)'],
  times: [0, 0.2, 0.55, 1],
  ease: OUT,
  dur: 0.46,
  ...o,
})

/** A stroke written from its end back toward its start. */
const drawFromEnd = (o = {}) => ({
  pathLength: [1, 0.001, 0.001, 1],
  pathOffset: [0, 0.999, 0.999, 0],
  visibility: ['visible', 'hidden', 'hidden', 'visible'],
  times: [0, 0.14, 0.2, 1],
  ease: ['linear', 'linear', OUT],
  dur: 0.66,
  ...o,
})

/** A ball landing along (dx, dy): squash on contact, stretch on the rebound. */
const land = (origin, dx, dy, o = {}) => ({
  as: 'ball',
  origin,
  transform: [
    'translate(0px, 0px) scale(1, 1)',
    `translate(${dx}px, ${dy}px) scale(1.16, 0.8)`,
    `translate(${-dx * 0.5}px, ${-dy * 0.6}px) scale(0.92, 1.08)`,
    'translate(0px, 0px) scale(1, 1)',
  ],
  times: [0, 0.3, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  delay: 0.36,
  ...o,
})

/** Draw back along the flight line, then loose past the rest pose. */
const loose = (dx, dy, o = {}) => ({
  as: 'arrow',
  origin: [15, 9],
  transform: [
    'translate(0px, 0px)',
    `translate(${-dx * 0.65}px, ${-dy * 0.65}px)`,
    `translate(${dx}px, ${dy}px)`,
    'translate(0px, 0px)',
  ],
  times: [0, 0.42, 0.6, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.7,
  ...o,
})

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2)

/** One full eased turn around `pivot`, sampled so the fill-box stays on the arc. */
const fullTurn = (pivot, center, o = {}) => {
  const steps = 16
  const ts = Array.from({ length: steps + 1 }, (_, i) => i / steps)
  const degrees = ts.map((t) => Math.round(360 * easeInOutCubic(t) * 100) / 100)
  return around(pivot, center, degrees, {
    times: ts,
    ease: Array(steps).fill('linear'),
    dur: 1,
    ...o,
  })
}

const HOP_T = [0, 0.4, 0.7, 1]
const HOP_E = [INOUT, OUT, OUT]
const DROP_T = [0, 0.36, 0.68, 1]
const DROP_E = [OUT, 'easeIn', OUT]

export default {
  'border-right': {
    verb: 'the right edge rewrites onto the still dashes',
    parts: [{ as: 'edge', origin: [19.5, 12], ...retrace({ dur: 0.68 }) }, null, null],
  },
  'border-top-01': {
    verb: 'the top edge commits upward, dashes and ticks holding',
    parts: [hold([12, 4.5], 0, -1.6, { as: 'edge', dur: 0.68 }), null, null],
  },
  'border-top-02': {
    verb: 'the solid top edge rewrites, dashes holding',
    parts: [null, { as: 'edge', origin: [12, 4.5], ...retrace({ dur: 0.68 }) }],
  },
  'border-top': {
    verb: 'the top edge rewrites onto the still dashes',
    parts: [{ as: 'edge', origin: [12, 4.5], ...retrace({ dur: 0.68 }) }, null, null],
  },
  'border-vertical': {
    verb: 'the mid column grows from the center, dashes and ticks holding',
    parts: [null, null, scaleFrom('Y', [12, 12], [12, 12], [1, 0.18, 1, 1], { as: 'rule', dur: 0.66 })],
  },
  borobudur: {
    verb: 'the spire rises off the stupa and settles, the niches flickering like lamps',
    parts: [
      null,
      nudge([12, 4.5], 0, -1.6, { as: 'spire', dur: 0.6 }),
      null,
      {
        as: 'niches',
        origin: [12, 12.8],
        opacity: [1, 0.25, 1, 1],
        times: [0, 0.3, 0.6, 1],
        ease: OUT,
        dur: 0.6,
        delay: 0.12,
      },
    ],
  },
  'bot-message-square': {
    verb: 'the bot blinks and its antenna twitches as the chat bubble acknowledges',
    parts: [
      blink([15, 12.75]),
      beat([12, 14.1], { as: 'bubble', dur: 0.5, delay: 0.1 }),
      blink([9, 12.75]),
      around([12, 6.75], [9.5, 4.8], [0, -16, 8, -3, 0], { as: 'antenna', dur: 0.7 }),
      null,
      null,
    ],
  },
  'bot-off': {
    verb: 'the slash wipes across, the antenna droops and the lone eye goes heavy-lidded',
    parts: [
      around([12, 8], [10.5, 6], [0, 20, 20, 0], { as: 'antenna', times: HOLD_T, ease: HOLD_E, dur: 0.74 }),
      null,
      null,
      {
        as: 'eye',
        origin: [9, 14],
        transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(0.3)', 'scaleY(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.74,
      },
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.66 }) },
      null,
      null,
    ],
  },
  bot: {
    verb: 'both eyes blink, the mouth widens into a grin and the antenna wiggles',
    parts: [
      null,
      null,
      {
        as: 'mouth',
        origin: [12, 17],
        transform: ['scaleX(1)', 'scaleX(1.35)', 'scaleX(0.92)', 'scaleX(1)'],
        times: [0, 0.34, 0.66, 1],
        ease: OUT,
        dur: 0.56,
        delay: 0.1,
      },
      null,
      blink([15, 12]),
      blink([9, 12]),
      around([12, 7], [10, 5], [0, -16, 8, -3, 0], { as: 'antenna', dur: 0.7 }),
    ],
  },
  'bounce-left': {
    verb: 'the trail writes from the far bounce back to the ball, which lands and rebounds',
    parts: [
      { as: 'trail', origin: [14.5, 15.5], ...drawFromEnd() },
      { ...land([6, 5], 0.8, 1.4), attrs: { cx: '6', cy: '5', transform: null } },
    ],
  },
  'bounce-right': {
    verb: 'the trail writes from the far bounce back to the ball, which lands and rebounds',
    parts: [
      { as: 'trail', origin: [9.5, 15.5], ...drawFromEnd() },
      land([18, 5], -0.8, 1.4),
    ],
  },
  'bounding-box': {
    verb: 'the selection handles pop in a wave from the top-left corner, edges holding',
    parts: [
      null,
      pop([4, 4], { as: 'handle' }),
      pop([4, 12], { as: 'handle', delay: 0.05 }),
      pop([12, 4], { as: 'handle', delay: 0.05 }),
      pop([12, 12], { as: 'handle', delay: 0.08 }),
      pop([20, 12], { as: 'handle', delay: 0.12 }),
      pop([12, 20], { as: 'handle', delay: 0.12 }),
      pop([20, 20], { as: 'handle', delay: 0.16 }),
    ],
  },
  'bow-arrow': {
    verb: 'the arrow draws back against the flexing bow, then looses up-right',
    parts: [
      loose(2, -2),
      loose(2, -2),
      loose(2, -2),
      {
        as: 'bow',
        origin: [11.2, 12.8],
        transform: ['scale(1)', 'scale(0.95)', 'scale(1.03)', 'scale(1)'],
        times: [0, 0.42, 0.6, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
    ],
  },
  'bow-tie': {
    verb: 'the wings flare out from the knot as it cinches, then settle',
    parts: [
      scaleFrom('X', [10, 12], [5.6, 12], [1, 1.12, 0.97, 1], {
        as: 'wingL',
        times: [0, 0.3, 0.65, 1],
        ease: OUT,
        dur: 0.56,
      }),
      scaleFrom('X', [14, 12], [18.4, 12], [1, 1.12, 0.97, 1], {
        as: 'wingR',
        times: [0, 0.3, 0.65, 1],
        ease: OUT,
        dur: 0.56,
      }),
      {
        as: 'knot',
        origin: [12, 12],
        transform: ['scale(1)', 'scale(0.82)', 'scale(1.06)', 'scale(1)'],
        times: [0, 0.3, 0.65, 1],
        ease: OUT,
        dur: 0.56,
      },
      null,
      null,
    ],
  },
  'bowling-ball': {
    verb: 'the ball rocks forward and back, its finger holes circling the center',
    wrap: {
      as: 'ball',
      origin: [12, 12],
      transform: ['translateX(0px)', 'translateX(1.8px)', 'translateX(-0.5px)', 'translateX(0.15px)', 'translateX(0px)'],
      times: T5,
      ease: E5,
      dur: 0.8,
    },
    parts: [
      null,
      around([12, 12], [18, 9], [0, 48, -14, 4, 0], { as: 'hole', dur: 0.8 }),
      around([12, 12], [15, 6], [0, 48, -14, 4, 0], { as: 'hole', dur: 0.8 }),
      around([12, 12], [14, 10], [0, 48, -14, 4, 0], { as: 'hole', dur: 0.8 }),
    ],
  },
  'bowling-pins': {
    verb: 'the ball rolls into the pin, which wobbles on its base',
    parts: [
      {
        as: 'ball',
        origin: [16.8, 16],
        transform: ['translateX(0px)', 'translateX(1.2px)', 'translateX(-0.7px)', 'translateX(0px)'],
        times: [0, 0.3, 0.55, 1],
        ease: [INOUT, 'easeIn', OUT],
        dur: 0.62,
      },
      {
        as: 'ball',
        origin: [16.5, 14],
        transform: ['translateX(0px)', 'translateX(1.2px)', 'translateX(-0.7px)', 'translateX(0px)'],
        times: [0, 0.3, 0.55, 1],
        ease: [INOUT, 'easeIn', OUT],
        dur: 0.62,
      },
      around([7.5, 22], [7.5, 12], [0, -9, 6, -2, 0], { as: 'pin', delay: 0.2, dur: 0.66 }),
      around([7.5, 22], [7.5, 9], [0, -9, 6, -2, 0], { as: 'neck', delay: 0.2, dur: 0.66 }),
    ],
  },
  bowling: {
    verb: 'the side pins topple outward from their bases while the head pin rocks',
    parts: [
      around([12, 22], [12, 12], [0, -4, 5, -2, 0], { as: 'head', dur: 0.72 }),
      around([12, 22], [12, 8], [0, -4, 5, -2, 0], { as: 'stripe', dur: 0.72 }),
      around([19.2, 20], [19.2, 12], [0, 14, -4, 1, 0], { as: 'pinR', delay: 0.08, dur: 0.72 }),
      around([4.8, 20], [4.8, 12], [0, -14, 4, -1, 0], { as: 'pinL', delay: 0.08, dur: 0.72 }),
    ],
  },
  box: {
    verb: 'the parcel hops and lands on its base, squashing on contact',
    wrap: {
      as: 'parcel',
      origin: [12, 12],
      transform: [
        'translateY(0px) scale(1, 1)',
        'translateY(-2.2px) scale(0.96, 1.04)',
        'translateY(0.5px) scale(1.04, 0.95)',
        'translateY(0px) scale(1, 1)',
      ],
      times: DROP_T,
      ease: DROP_E,
      dur: 0.62,
    },
    parts: [null, null, null],
  },
  boxer: {
    verb: 'the waistband stretches wide and snaps back, the legs riding along',
    parts: [
      {
        as: 'band',
        origin: [12, 4.5],
        transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.97)', 'scaleX(1)'],
        times: [0, 0.34, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.52,
      },
      {
        as: 'legs',
        origin: [12, 13.7],
        transform: ['scaleX(1)', 'scaleX(1.04)', 'scaleX(0.99)', 'scaleX(1)'],
        times: [0, 0.34, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.52,
        delay: 0.04,
      },
      null,
    ],
  },
  boxes: {
    verb: 'the top box lifts off the stack and drops back, the lower boxes taking the weight',
    parts: [
      scaleFrom('Y', [7, 22], [7, 17], [1, 1, 0.93, 1], { as: 'lowL', times: DROP_T, ease: DROP_E, dur: 0.62 }),
      scaleFrom('Y', [17, 22], [17, 17], [1, 1, 0.93, 1], { as: 'lowR', times: DROP_T, ease: DROP_E, dur: 0.62 }),
      {
        as: 'top',
        origin: [12, 7],
        transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(0.35px)', 'translateY(0px)'],
        times: DROP_T,
        ease: DROP_E,
        dur: 0.62,
      },
      {
        as: 'top',
        origin: [12, 3.5],
        transform: ['translateY(0px)', 'translateY(-2px)', 'translateY(0.35px)', 'translateY(0px)'],
        times: DROP_T,
        ease: DROP_E,
        dur: 0.62,
      },
      scaleFrom('Y', [7, 22], [7, 13.5], [1, 1, 0.93, 1], { as: 'tapeL', times: DROP_T, ease: DROP_E, dur: 0.62 }),
      scaleFrom('Y', [17, 22], [17, 13.5], [1, 1, 0.93, 1], { as: 'tapeR', times: DROP_T, ease: DROP_E, dur: 0.62 }),
    ],
  },
  'boxing-bag': {
    verb: 'the bag swings from its chain after a hit, the top bar holding',
    parts: [
      around([12, 2], [12, 14], [0, 10, -6, 2.5, 0], { as: 'bands', dur: 0.82 }),
      around([12, 2], [12, 4.5], [0, 10, -6, 2.5, 0], { as: 'hanger', dur: 0.82 }),
      null,
      around([12, 2], [12, 14], [0, 10, -6, 2.5, 0], { as: 'bag', dur: 0.82 }),
    ],
  },
  'boxing-glove-01': {
    verb: 'the glove winds back, jabs up-right and recoils',
    parts: [
      {
        as: 'glove',
        origin: [12.4, 11.7],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-0.8px, 0.8px) rotate(-4deg)',
          'translate(1.8px, -1.8px) rotate(3deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: [0, 0.3, 0.52, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.54,
      },
    ],
  },
  'boxing-glove': {
    verb: 'the fist punches straight up and swells, the cuff following',
    parts: [
      {
        as: 'fist',
        origin: [12.3, 9],
        transform: [
          'translateY(0px) scale(1)',
          'translateY(0.8px) scale(0.96)',
          'translateY(-2.2px) scale(1.06)',
          'translateY(0px) scale(1)',
        ],
        times: [0, 0.3, 0.52, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.54,
      },
      {
        as: 'cuff',
        origin: [11.5, 18.5],
        transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(-2.2px)', 'translateY(0px)'],
        times: [0, 0.3, 0.52, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.54,
      },
      {
        as: 'cuff',
        origin: [8.5, 19],
        transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(-2.2px)', 'translateY(0px)'],
        times: [0, 0.3, 0.52, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.54,
      },
    ],
  },
  braces: {
    verb: 'the braces pinch in toward their content, then spring back',
    parts: [
      nudge([5.5, 12], 1.4, 0, { as: 'braceL', dur: 0.52 }),
      nudge([18.5, 12], -1.4, 0, { as: 'braceR', dur: 0.52 }),
    ],
  },
  brackets: {
    verb: 'the brackets open outward and grow taller, then close back',
    parts: [
      {
        as: 'bracketR',
        origin: [18, 12],
        transform: ['translateX(0px) scaleY(1)', 'translateX(1.4px) scaleY(1.08)', 'translateX(1.4px) scaleY(1.08)', 'translateX(0px) scaleY(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.66,
      },
      {
        as: 'bracketL',
        origin: [6, 12],
        transform: ['translateX(0px) scaleY(1)', 'translateX(-1.4px) scaleY(1.08)', 'translateX(-1.4px) scaleY(1.08)', 'translateX(0px) scaleY(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.66,
      },
    ],
  },
  'brain-01': {
    verb: 'the thought traces the whole brain outline',
    parts: [{ as: 'brain', origin: [12, 12], ...retrace({ dur: 0.8 }) }],
  },
  'brain-02': {
    verb: 'the brain inside the still head retraces itself',
    parts: [null, { as: 'brain', origin: [10.5, 9.6], ...retrace({ dur: 0.74 }) }],
  },
  'brain-03': {
    verb: 'the two hemispheres part at the midline, then reconnect',
    parts: [
      nudge([7, 12], -1.2, 0, { as: 'lobeL', times: [0, 0.35, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }),
      nudge([17, 12], 1.2, 0, { as: 'lobeR', times: [0, 0.35, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }),
    ],
  },
  'brain-circuit': {
    verb: 'signals run out along the three traces, each node lighting on arrival',
    parts: [
      null,
      null,
      { as: 'traceM', origin: [16.8, 12], ...draw({ dur: 0.5, delay: 0.05 }) },
      pop([18.5, 3.5], { delay: 0.3 }),
      { as: 'traceT', origin: [15.8, 5.8], ...draw({ dur: 0.5 }) },
      { as: 'traceB', origin: [15.8, 18.3], ...draw({ dur: 0.5, delay: 0.1 }) },
      pop([18.5, 20.5], { delay: 0.4 }),
      pop([20.5, 12], { delay: 0.35 }),
    ],
  },
  'brain-cog': {
    verb: 'the cog winds back, then turns one tooth inside the still brain',
    parts: [
      {
        as: 'cog',
        origin: [12, 12],
        transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(52deg)', 'rotate(45deg)'],
        times: [0, 0.2, 0.7, 1],
        ease: [INOUT, INOUT, OUT],
        dur: 0.8,
      },
      null,
    ],
  },
  brain: {
    verb: 'the inner fold curls in, the lobes answering a beat later',
    parts: [
      beat([12, 12], { as: 'lobes', dur: 0.5, delay: 0.18 }),
      { as: 'fold', origin: [10.2, 11.2], ...retrace({ dur: 0.6 }) },
    ],
  },
  brandfetch: {
    verb: 'the stem strikes down, then the looping bowl rewrites over it',
    parts: [
      { as: 'bowl', origin: [12, 10.7], ...retrace({ dur: 0.72, delay: 0.12 }) },
      { as: 'stem', origin: [8, 14.3], ...draw({ dur: 0.5 }) },
    ],
  },
  'bread-01': {
    verb: 'the loaf proofs — it rises and swells, then settles',
    parts: [
      {
        as: 'loaf',
        origin: [12.1, 12.2],
        transform: ['scale(1)', 'scale(1.07)', 'scale(0.98)', 'scale(1)'],
        times: [0, 0.4, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.72,
      },
    ],
  },
  'bread-02': {
    verb: 'the cut slice with its swirl slides off the loaf, then rejoins',
    parts: [
      hold([7, 12], -1.4, 0, { as: 'slice', dur: 0.68 }),
      null,
      hold([6.7, 13.5], -1.4, 0, { as: 'slice', dur: 0.68 }),
    ],
  },
  'bread-03': {
    verb: 'the two rolls bob up from the dish in turn',
    parts: [
      nudge([11, 8.5], 0, -1.4, { as: 'rollL', dur: 0.5 }),
      nudge([16.5, 9], 0, -1.4, { as: 'rollR', dur: 0.5, delay: 0.08 }),
      null,
      null,
    ],
  },
  'bread-04': {
    verb: 'the back slice pops up behind the front one like toast',
    parts: [
      scaleFrom('Y', [8.5, 20], [8.5, 12], [1, 0.96, 1.01, 1], {
        as: 'front',
        times: [0, 0.2, 0.55, 1],
        ease: OUT,
        dur: 0.6,
      }),
      {
        as: 'back',
        origin: [15, 12],
        transform: ['translateY(0px)', 'translateY(-2.2px)', 'translateY(0.3px)', 'translateY(0px)'],
        times: [0, 0.35, 0.7, 1],
        ease: [OUT, 'easeIn', OUT],
        dur: 0.62,
        delay: 0.06,
      },
    ],
  },
  bread: {
    verb: 'the baguette is picked up and tilted, then set back down',
    parts: [
      {
        as: 'loaf',
        origin: [12.1, 12.2],
        transform: [
          'translateY(0px) rotate(0deg)',
          'translateY(-1.2px) rotate(-7deg)',
          'translateY(0.2px) rotate(2deg)',
          'translateY(0px) rotate(0deg)',
        ],
        times: [0, 0.38, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.66,
      },
    ],
  },
  'breast-pump': {
    verb: 'the flange pumps twice and the valve answers, bottle holding',
    parts: [
      null,
      null,
      null,
      null,
      pop([4.5, 9.5], { as: 'valve', delay: 0.2, dur: 0.5 }),
      {
        as: 'flange',
        origin: [18, 6],
        transform: ['translateX(0px)', 'translateX(0.9px)', 'translateX(0px)', 'translateX(0.9px)', 'translateX(0px)'],
        times: [0, 0.22, 0.48, 0.72, 1],
        ease: [INOUT, INOUT, INOUT, OUT],
        dur: 0.76,
      },
    ],
  },
  'brick-wall-fire': {
    verb: 'the flame flickers up from its base, the wall holding',
    parts: [
      scaleFrom('Y', [16.5, 21.5], [16.5, 15], [1, 1.14, 0.93, 1.06, 1], {
        as: 'flame',
        times: T5,
        ease: E5,
        dur: 0.72,
      }),
      null,
      null,
    ],
  },
  'brick-wall-shield': {
    verb: 'the shield rises off the wall corner and lands back on guard',
    parts: [
      null,
      null,
      {
        as: 'shield',
        origin: [17.5, 17],
        transform: [
          'translateY(0px) scale(1)',
          'translateY(-1.4px) scale(1.1)',
          'translateY(0.2px) scale(0.97)',
          'translateY(0px) scale(1)',
        ],
        times: [0, 0.36, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.58,
      },
    ],
  },
  'brick-wall': {
    verb: 'the mortar courses relay inside the still frame',
    parts: [null, { as: 'mortar', origin: [12, 12], ...retrace({ dur: 0.74 }) }],
  },
  bridge: {
    verb: 'the cable sags under load and springs taut, hangers stretching with it',
    parts: [
      {
        as: 'cable',
        origin: [12, 7],
        transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(-0.2px)', 'translateY(0px)'],
        times: [0, 0.4, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.66,
      },
      null,
      null,
      null,
      scaleFrom('Y', [10, 16], [10, 12.5], [1, 0.886, 1.03, 1], {
        as: 'hanger',
        times: [0, 0.4, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.66,
      }),
      scaleFrom('Y', [14, 16], [14, 12.5], [1, 0.886, 1.03, 1], {
        as: 'hanger',
        times: [0, 0.4, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.66,
      }),
    ],
  },
  'briefcase-01': {
    verb: 'the handle lifts the case, the body following a beat behind',
    parts: [
      hold([12, 14.8], 0, -0.9, { as: 'body', dur: 0.7, delay: 0.06 }),
      hold([12, 4.8], 0, -1.3, { as: 'handle', dur: 0.7 }),
      hold([12, 9.5], 0, -0.9, { as: 'body', dur: 0.7, delay: 0.06 }),
      hold([12, 14], 0, -0.9, { as: 'body', dur: 0.7, delay: 0.06 }),
    ],
  },
  'briefcase-02': {
    verb: 'the handle pulls up and both straps stretch after it',
    parts: [
      hold([12, 4.8], 0, -1.3, { as: 'handle', dur: 0.7 }),
      null,
      scaleFrom('Y', [12, 14], [12, 12.5], [1, 1.3, 1.3, 1], { as: 'straps', dur: 0.7, delay: 0.04 }),
      null,
    ],
  },
  'briefcase-03': {
    verb: 'the seam wipes open across the case and the clasp drops',
    parts: [
      null,
      null,
      { as: 'seam', origin: [12, 12.5], ...draw({ dur: 0.62 }) },
      hold([12, 14], 0, 0.9, { as: 'clasp', dur: 0.62, delay: 0.1 }),
    ],
  },
  'briefcase-04': {
    verb: 'the lock plate stamps shut between the curved seams',
    parts: [null, null, null, stamp([12, 14], { as: 'lock', dur: 0.5 })],
  },
  'briefcase-05': {
    verb: 'the curved seam retraces edge to edge, the clasp stem growing after it',
    parts: [
      null,
      null,
      { as: 'seam', origin: [12, 12], ...retrace({ dur: 0.68 }) },
      grow([12, 15], 'Y', { as: 'stem', dur: 0.54, delay: 0.14 }),
    ],
  },
  'briefcase-06': {
    verb: 'the case swings from its handle as it is carried',
    parts: [
      around([12, 3], [12, 4.75], [0, -7, 5, -2, 0], { as: 'handle', dur: 0.78 }),
      around([12, 3], [12, 13.75], [0, -7, 5, -2, 0], { as: 'body', dur: 0.78 }),
      around([12, 3], [12, 13], [0, -7, 5, -2, 0], { as: 'seam', dur: 0.78 }),
      around([12, 3], [12, 11.75], [0, -7, 5, -2, 0], { as: 'keyhole', dur: 0.78 }),
    ],
  },
  'briefcase-07': {
    verb: 'the seam rewrites and the two straps buckle in turn',
    parts: [
      { as: 'seam', origin: [12, 12.5], ...retrace({ dur: 0.66 }) },
      {
        as: 'straps',
        origin: [12, 12.5],
        transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.12)', 'scaleY(1)'],
        times: [0, 0.3, 0.62, 1],
        ease: OUT,
        dur: 0.5,
        delay: 0.16,
      },
      null,
      null,
    ],
  },
  'briefcase-08': {
    verb: 'the pocket line slides open from the center, case holding',
    parts: [null, null, grow([12, 10.5], 'X', { as: 'pocket', dur: 0.58 })],
  },
  'briefcase-09': {
    verb: 'the two straps cinch toward the center and release',
    parts: [
      null,
      null,
      {
        as: 'straps',
        origin: [12, 13.75],
        transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(0.82)', 'scaleX(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.66,
      },
    ],
  },
  'briefcase-business': {
    verb: 'the lid lifts off the lower half with its handle and clasp, then closes',
    parts: [
      hold([12, 11], 0, -1.2, { as: 'lid', dur: 0.7 }),
      hold([12, 4], 0, -1.2, { as: 'lid', dur: 0.7 }),
      hold([12, 12.75], 0, -1.2, { as: 'lid', dur: 0.7 }),
      null,
    ],
  },
  'briefcase-conveyor-belt': {
    verb: 'the case rides along the belt and glides back, rollers holding',
    parts: [
      null,
      null,
      null,
      null,
      null,
      null,
      hold([12, 10.5], 1.8, 0, { as: 'case', dur: 0.8 }),
      hold([12, 3.5], 1.8, 0, { as: 'case', dur: 0.8 }),
      hold([12, 10], 1.8, 0, { as: 'case', dur: 0.8 }),
      hold([8, 10], 1.8, 0, { as: 'case', dur: 0.8 }),
      hold([16, 10], 1.8, 0, { as: 'case', dur: 0.8 }),
    ],
  },
  'briefcase-dollar': {
    verb: 'the dollar flips like a coin on its vertical axis, case holding',
    parts: [
      null,
      null,
      {
        as: 'dollar',
        origin: [12, 14],
        transform: ['scaleX(1)', 'scaleX(-1)', 'scaleX(1)'],
        times: [0, 0.5, 1],
        ease: [INOUT, INOUT],
        dur: 0.8,
      },
      null,
      null,
    ],
  },
  'briefcase-medical': {
    verb: 'the medical cross stamps onto the still case',
    parts: [null, null, stamp([12, 14], { as: 'cross', dur: 0.5 })],
  },
  briefcase: {
    verb: 'the clasp folds up to unlatch, then snaps shut',
    parts: [
      null,
      null,
      null,
      scaleFrom('Y', [12, 12.5], [12, 14], [1, 0.25, 0.25, 1], { as: 'clasp', dur: 0.62 }),
    ],
  },
  'bring-to-front': {
    verb: 'the middle square rises forward while the back pieces recede',
    parts: [
      scaleHold([12, 12], 1.12, { as: 'front', dur: 0.68 }),
      {
        as: 'backTL',
        origin: [5, 5],
        transform: ['translate(0px, 0px) scale(1)', 'translate(-0.6px, -0.6px) scale(0.86)', 'translate(-0.6px, -0.6px) scale(0.86)', 'translate(0px, 0px) scale(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.68,
      },
      {
        as: 'backBR',
        origin: [19, 19],
        transform: ['translate(0px, 0px) scale(1)', 'translate(0.6px, 0.6px) scale(0.86)', 'translate(0.6px, 0.6px) scale(0.86)', 'translate(0px, 0px) scale(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.68,
      },
    ],
  },
  broccoli: {
    verb: 'the florets squash onto the stalk and bounce back up',
    parts: [
      scaleFrom('Y', [12, 14], [12.1, 8], [1, 0.88, 1.06, 1], {
        as: 'florets',
        times: [0, 0.3, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.56,
      }),
      null,
    ],
  },
  brochure: {
    verb: 'the side flaps fold in over the center panel, then open',
    parts: [
      null,
      scaleFrom('X', [18.5, 12], [20.25, 12], [1, 0.15, 0.15, 1], { as: 'flapR', dur: 0.72 }),
      scaleFrom('X', [5.5, 12], [3.75, 12], [1, 0.15, 0.15, 1], { as: 'flapL', dur: 0.72, delay: 0.06 }),
      null,
    ],
  },
  'broken-bone': {
    verb: 'the halves snap apart at the break, the crack marks flash, then the bone knits',
    parts: [
      hold([5.9, 16.6], -1, 1, { as: 'lower', times: [0, 0.2, 0.6, 1], ease: [OUT, OUT, INOUT], dur: 0.72 }),
      hold([16.7, 6.3], 1, -1, { as: 'upper', times: [0, 0.2, 0.6, 1], ease: [OUT, OUT, INOUT], dur: 0.72 }),
      pop([7, 6], { as: 'crack', delay: 0.06 }),
      pop([15, 16], { as: 'crack', delay: 0.06 }),
    ],
  },
  browser: {
    verb: 'the toolbar rule loads across the still window',
    parts: [null, { as: 'toolbar', origin: [12, 9], ...draw({ dur: 0.62 }) }],
  },
  'brush-cleaning': {
    verb: 'the brush scrubs side to side, bristles and handle together',
    wrap: {
      as: 'brush',
      origin: [12, 12],
      transform: [
        'translateX(0px) rotate(0deg)',
        'translateX(-1.2px) rotate(-3deg)',
        'translateX(1.2px) rotate(3deg)',
        'translateX(-0.5px) rotate(-1deg)',
        'translateX(0px) rotate(0deg)',
      ],
      times: T5,
      ease: [OUT, INOUT, INOUT, OUT],
      dur: 0.62,
    },
    parts: [null, null],
  },
  brush: {
    verb: 'the brush takes a stroke, rocking on its bristle tip',
    parts: [around([4, 19], [12.7, 12], [0, -8, 6, -2, 0], { as: 'brush', dur: 0.72 })],
  },
  'bubble-chat-add': {
    verb: 'the plus turns a quarter onto itself inside the still bubble',
    parts: [null, spinStar([12, 12], { as: 'plus', dur: 0.66 })],
  },
  'bubble-chat-blocked': {
    verb: 'the slash wipes across and the broken bubble recoils',
    parts: [
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.66 }) },
      scaleHold([12, 12], 0.94, { as: 'bubble', dur: 0.66 }),
    ],
  },
  'bubble-chat-cancel': {
    verb: 'the cancel x wipes off the still bubble and rewrites',
    parts: [null, { as: 'x', origin: [12, 12], ...draw({ dur: 0.64 }) }],
  },
  'bubble-chat-delay': {
    verb: 'the clock hands sweep one full turn inside the still bubble',
    parts: [null, fullTurn([12, 12], [13.5, 10.5], { as: 'hands' })],
  },
  'bubble-chat-done': {
    verb: 'the check writes in and the bubble acknowledges',
    parts: [
      beat([12, 12], { as: 'bubble', dur: 0.48, delay: 0.32 }),
      { as: 'check', origin: [12, 12.2], ...retrace({ dur: 0.62 }) },
    ],
  },
  'bubble-chat-download-01': {
    verb: 'the download glyph drops onto its tray and settles',
    parts: [null, nudge([12, 12], 0, 1.4, { as: 'glyph', dur: 0.52 })],
  },
  'bubble-chat-download-02': {
    verb: 'the arrow falls out the bottom and drops back in from the top',
    parts: [
      null,
      {
        as: 'arrow',
        origin: [12, 12],
        transform: ['translateY(0px)', 'translateY(3px)', 'translateY(-3px)', 'translateY(0px)'],
        opacity: [1, 0, 0, 1],
        times: [0, 0.4, 0.42, 1],
        ease: ['easeIn', 'linear', OUT],
        dur: 0.7,
      },
    ],
  },
  'bubble-chat-download': {
    verb: 'the arrow and tray rewrite inside the still bubble',
    parts: [null, { as: 'glyph', origin: [12, 12], ...retrace({ dur: 0.7 }) }],
  },
  'bubble-chat-edit': {
    verb: 'the pencil scribbles along its nib inside the still bubble',
    parts: [
      null,
      {
        as: 'pencil',
        origin: [12, 12],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-0.8px, 0.6px) rotate(-6deg)',
          'translate(0.6px, -0.4px) rotate(4deg)',
          'translate(-0.3px, 0.2px) rotate(-2deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: T5,
        ease: [INOUT, INOUT, INOUT, OUT],
        dur: 0.62,
      },
    ],
  },
  'bubble-chat-favourite': {
    verb: 'the heart beats twice inside the still bubble',
    parts: [
      null,
      {
        as: 'heart',
        origin: [12, 12.5],
        transform: ['scale(1)', 'scale(1.25)', 'scale(0.95)', 'scale(1.12)', 'scale(1)'],
        times: T5,
        ease: E5,
        dur: 0.72,
      },
    ],
  },
  'bubble-chat-income': {
    verb: 'the incoming arrow travels left into the bubble and settles',
    parts: [null, nudge([12, 12], -1.8, 0, { as: 'arrow' })],
  },
  'bubble-chat-lock': {
    verb: 'the shackle lifts to unlock and drops back shut, body holding',
    parts: [null, hold([12, 9.25], 0, -1.4, { as: 'shackle', dur: 0.66 }), null],
  },
  'bubble-chat-notification': {
    verb: 'the badge pops and the bubble rattles like a ping',
    parts: [
      pop([19.5, 5], { as: 'badge', dur: 0.5 }),
      shake([12.5, 12], { as: 'bubble', delay: 0.08 }),
      shake([12.5, 12], { as: 'bubble', delay: 0.08 }),
    ],
  },
  'bubble-chat-outcome': {
    verb: 'the outgoing arrow travels right out of the bubble and settles',
    parts: [null, nudge([12, 12], 1.8, 0, { as: 'arrow' })],
  },
  'bubble-chat-preview': {
    verb: 'the eye inside the bubble blinks, pupil closing with it',
    parts: [null, blink([12, 12], { dur: 0.64 }), blink([12, 12], { dur: 0.64 })],
  },
  'bubble-chat-question': {
    verb: 'the question hook tilts on its tail, the dot answering a beat later',
    parts: [
      null,
      around([12, 13.5], [12, 10.25], [0, -14, 9, -3, 0], { as: 'hook', dur: 0.66 }),
      {
        as: 'dot',
        origin: [12, 16.75],
        transform: ['translateY(0px) scale(1)', 'translateY(0.9px) scale(0.86)', 'translateY(-1px) scale(1.2)', 'translateY(0px) scale(1)'],
        times: [0, 0.18, 0.48, 1],
        ease: OUT,
        dur: 0.56,
        delay: 0.1,
      },
    ],
  },
  'bubble-chat-search': {
    verb: 'the loupe scans a small loop inside the still bubble',
    parts: [
      null,
      {
        as: 'loupe',
        origin: [12.5, 12],
        transform: ['translate(0px, 0px)', 'translate(-1px, -0.6px)', 'translate(0px, -1.2px)', 'translate(1px, -0.6px)', 'translate(0px, 0px)'],
        times: [0, 0.25, 0.5, 0.75, 1],
        ease: [INOUT, 'linear', 'linear', OUT],
        dur: 0.8,
      },
    ],
  },
}
