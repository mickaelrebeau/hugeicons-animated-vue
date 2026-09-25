/**
 * Page 13 — calendar-fold → calling.
 *
 * Gallery page (80 public icons). Skipped handcrafted original: `call-02`
 * (the whole handset rattles on a loop). These gestures are expressive:
 * the page or the handset plays the action, and the badge answers.
 *
 * Identical-geometry pairs get different jobs: lock / lock-01, love / love-01,
 * remove / remove-01, setting / setting-01, upload / upload-01, end / end-01,
 * end-03 / incoming-04, missed / missed-01, received / received-02,
 * ringing / ringing-01, spark / spark-01.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  HOLD_E,
  HOLD_T,
  around,
  draw,
  nudge,
  retrace,
  scaleFrom,
  shake,
  stamp,
  twinkle,
} from './_kit.mjs'

/** Page takes a hit, then settles. */
const flinch = (origin, o = {}) => ({
  as: 'page',
  origin,
  transform: [
    'translate(0px, 0px) rotate(0deg) scale(1)',
    'translate(0.6px, 0.8px) rotate(2.4deg) scale(0.96)',
    'translate(-0.3px, -0.2px) rotate(-1deg) scale(1.02)',
    'translate(0px, 0px) rotate(0deg) scale(1)',
  ],
  times: [0, 0.28, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.56,
  ...o,
})

/** Handset comes up to the ear. */
const lift = (origin, o = {}) => ({
  as: 'handset',
  origin,
  transform: [
    'translate(0px, 0px) rotate(0deg)',
    'translate(-2.4px, -2.6px) rotate(-18deg)',
    'translate(0.35px, 0.2px) rotate(3deg)',
    'translate(0px, 0px) rotate(0deg)',
  ],
  times: [0, 0.4, 0.7, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.66,
  ...o,
})

/** Handset drops onto the hook. */
const hang = (origin, o = {}) => ({
  as: 'handset',
  origin,
  transform: [
    'translate(0px, 0px) rotate(0deg)',
    'translate(1.2px, 2.6px) rotate(16deg)',
    'translate(0px, 3.2px) rotate(20deg)',
    'translate(0px, 0px) rotate(0deg)',
  ],
  times: [0, 0.36, 0.58, 1],
  ease: ['easeIn', OUT, OUT],
  dur: 0.68,
  ...o,
})

/** One finite rattle — not the looping call-02 spin. */
const rattle = (origin, o = {}) => ({
  as: 'handset',
  origin,
  transform: [
    'rotate(0deg)',
    'rotate(-11deg)',
    'rotate(9deg)',
    'rotate(-5deg)',
    'rotate(0deg)',
  ],
  times: [0, 0.18, 0.4, 0.64, 1],
  ease: OUT,
  dur: 0.58,
  ...o,
})

/** A heart that squashes, then rebounds. */
const heartbeat = (origin, o = {}) => ({
  as: 'heart',
  origin,
  transform: [
    'scale(1, 1)',
    'scale(1.28, 0.78)',
    'scale(0.9, 1.2)',
    'scale(1.08, 0.94)',
    'scale(1, 1)',
  ],
  times: [0, 0.18, 0.4, 0.64, 1],
  ease: OUT,
  dur: 0.64,
  ...o,
})

const EAR = [11.9, 12.1]
const PHONE = [12, 12]

export default {
  'calendar-fold': {
    verb: 'the dog-ear peels back and the sheet lifts with it',
    parts: [
      around([15, 22], [12, 13], [0, -4, 1.5, 0], {
        as: 'sheet',
        times: [0, 0.42, 0.72, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      }),
      around([15, 16], [18, 19], [0, -28, -8, 0], {
        as: 'corner',
        times: [0, 0.38, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      }),
      null,
      null,
    ],
  },
  'calendar-heart': {
    verb: 'the corner heart squashes, and the page flinches',
    parts: [null, null, flinch([12, 13], { delay: 0.12 }), heartbeat([18, 18.4])],
  },
  'calendar-lock-01': {
    verb: 'the corner lock clicks shut and the page takes the knock',
    parts: [
      null,
      flinch([12, 13], { delay: 0.16 }),
      null,
      {
        as: 'lock',
        origin: [17.5, 17.5],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(-16deg) scale(0.88)',
          'rotate(6deg) scale(1.08)',
          'rotate(0deg) scale(1)',
        ],
        times: [0, 0.32, 0.62, 1],
        ease: OUT,
        dur: 0.58,
      },
    ],
  },
  'calendar-lock-02': {
    verb: 'the inner lock turns as if the shackle is dropping',
    parts: [
      null,
      null,
      null,
      around([12, 16], [12, 16], [0, -18, 8, -3, 0], { as: 'lock', dur: 0.66 }),
    ],
  },
  'calendar-lock': {
    verb: 'the corner lock drops onto the page and squashes',
    parts: [
      null,
      null,
      null,
      {
        as: 'lock',
        origin: [17.5, 17.5],
        transform: [
          'translate(0px, 0px) scale(1, 1)',
          'translate(0px, 2.2px) scale(1.16, 0.78)',
          'translate(0px, -0.8px) scale(0.94, 1.08)',
          'translate(0px, 0px) scale(1, 1)',
        ],
        times: [0, 0.34, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.58,
      },
    ],
  },
  'calendar-love-01': {
    verb: 'the corner heart beats twice, the page holding still',
    parts: [
      null,
      null,
      null,
      {
        as: 'heart',
        origin: [17, 18.5],
        transform: [
          'scale(1, 1)',
          'scale(1.24, 0.8)',
          'scale(1, 1)',
          'scale(1.12, 0.9)',
          'scale(1, 1)',
        ],
        times: [0, 0.16, 0.36, 0.56, 1],
        ease: OUT,
        dur: 0.72,
      },
    ],
  },
  'calendar-love-02': {
    verb: 'the inner heart flutters on its point',
    parts: [
      null,
      null,
      null,
      {
        as: 'heart',
        origin: [12, 16],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(-12deg) scale(1.16)',
          'rotate(8deg) scale(0.94)',
          'rotate(0deg) scale(1)',
        ],
        times: [0, 0.28, 0.58, 1],
        ease: OUT,
        dur: 0.62,
      },
    ],
  },
  'calendar-love': {
    verb: 'the page leans in while the corner heart squashes once',
    parts: [
      null,
      {
        as: 'page',
        origin: [12, 13],
        transform: ['rotate(0deg)', 'rotate(-3.5deg)', 'rotate(1.2deg)', 'rotate(0deg)'],
        times: [0, 0.36, 0.68, 1],
        ease: OUT,
        dur: 0.66,
      },
      null,
      heartbeat([17, 18.5], { delay: 0.08 }),
    ],
  },
  'calendar-minus-01': {
    verb: 'the minus slices in from the left and the page recoils',
    parts: [
      null,
      flinch([12, 13], { delay: 0.18 }),
      null,
      scaleFrom('X', [14, 18.5], [17.5, 18.5], [1, 0.15, 1.12, 1], { as: 'minus', dur: 0.56 }),
    ],
  },
  'calendar-minus-02': {
    verb: 'the inner minus wipes the day, then the page ticks',
    parts: [
      null,
      flinch([12, 13], { delay: 0.28 }),
      null,
      { as: 'minus', origin: [12, 16], ...draw({ dur: 0.48 }) },
    ],
  },
  'calendar-minus': {
    verb: 'the minus grows through the middle of the page',
    parts: [
      scaleFrom('X', [9.5, 16], [12, 16], [1, 0.12, 1.14, 1], { as: 'minus', dur: 0.56 }),
      null,
      null,
      flinch([12, 13], { delay: 0.2 }),
    ],
  },
  'calendar-mortarboard': {
    verb: 'the cap is tossed and the tassel lags behind',
    parts: [
      null,
      null,
      null,
      {
        as: 'cap',
        origin: [16.5, 16.5],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-0.4px, -3.2px) rotate(-14deg)',
          'translate(0.3px, -0.4px) rotate(5deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: [0, 0.36, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      },
      {
        as: 'tassel',
        origin: [22, 16.5],
        transform: [
          'rotate(0deg)',
          'rotate(0deg)',
          'rotate(22deg)',
          'rotate(-6deg)',
          'rotate(0deg)',
        ],
        times: [0, 0.28, 0.52, 0.76, 1],
        ease: OUT,
        dur: 0.78,
      },
      null,
    ],
  },
  'calendar-off': {
    verb: 'the slash cuts the page, which tips away and dims',
    parts: [
      null,
      {
        as: 'page',
        origin: [12, 13],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(3deg) scale(0.96)',
          'rotate(3deg) scale(0.96)',
          'rotate(0deg) scale(1)',
        ],
        opacity: [1, 0.45, 0.45, 1],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.72,
      },
      null,
      { as: 'slash', origin: [12, 12], ...draw({ dur: 0.5 }) },
    ],
  },
  'calendar-plus': {
    verb: 'the plus spins in and the page pops open under it',
    parts: [
      {
        as: 'plus',
        origin: [19, 19],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(-40deg) scale(0.4)',
          'rotate(12deg) scale(1.22)',
          'rotate(0deg) scale(1)',
        ],
        times: [0, 0.28, 0.62, 1],
        ease: OUT,
        dur: 0.62,
      },
      null,
      null,
      flinch([12, 13], { delay: 0.22 }),
    ],
  },
  'calendar-range': {
    verb: 'the start dot jumps, the bar stretches to the end dot, which answers',
    parts: [
      scaleFrom('X', [12, 14], [14.5, 14], [1, 0.2, 1.08, 1], { as: 'bar', dur: 0.58, delay: 0.12 }),
      {
        as: 'dot',
        origin: [7.3, 14],
        transform: ['translate(0px, 0px) scale(1)', 'translate(0px, -1.6px) scale(1.4)', 'translate(0px, 0px) scale(1)'],
        times: [0, 0.36, 1],
        ease: [OUT, OUT],
        dur: 0.5,
      },
      {
        as: 'days',
        origin: [12, 18],
        transform: ['scale(1)', 'scale(1)', 'scale(1.18)', 'scale(1)'],
        times: [0, 0.4, 0.68, 1],
        ease: OUT,
        dur: 0.64,
      },
      null,
      null,
      null,
    ],
  },
  'calendar-remove-01': {
    verb: 'the corner cross slashes down and the page flinches',
    parts: [
      null,
      flinch([12, 13], { delay: 0.16 }),
      null,
      {
        as: 'cross',
        origin: [18, 19],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(-28deg) scale(0.7)',
          'rotate(8deg) scale(1.12)',
          'rotate(0deg) scale(1)',
        ],
        times: [0, 0.3, 0.62, 1],
        ease: OUT,
        dur: 0.56,
      },
    ],
  },
  'calendar-remove-02': {
    verb: 'the inner cross wipes the day off, then rewrites',
    parts: [null, null, null, { as: 'cross', origin: [12, 16], ...draw({ dur: 0.58 }) }],
  },
  'calendar-remove': {
    verb: 'the corner cross shakes the day loose',
    parts: [null, shake([12, 13], { as: 'page', delay: 0.08 }), null, shake([18, 19], { as: 'cross', dur: 0.48 })],
  },
  'calendar-search': {
    verb: 'the loupe hunts across the corner, then settles',
    parts: [
      {
        as: 'loupe',
        origin: [18.5, 18.5],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-1.6px, -1.2px) rotate(-12deg)',
          'translate(1.5px, 0.4px) rotate(10deg)',
          'translate(-0.4px, 1.3px) rotate(-4deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: [0, 0.24, 0.48, 0.72, 1],
        ease: OUT,
        dur: 0.78,
      },
      null,
      null,
      null,
    ],
  },
  'calendar-setting-01': {
    verb: 'the corner cog cranks and the page ticks with each tooth',
    parts: [
      null,
      flinch([12, 13], { delay: 0.2 }),
      null,
      around([17.5, 18], [17.5, 18], [0, -28, 46, -8, 0], { as: 'cog', dur: 0.78 }),
    ],
  },
  'calendar-setting-02': {
    verb: 'the inner cog winds the other way, tighter',
    parts: [
      null,
      null,
      null,
      around([12, 16], [12, 16], [0, 24, -40, 10, 0], { as: 'cog', dur: 0.74 }),
    ],
  },
  'calendar-setting': {
    verb: 'the corner cog jams, rattles, then seats',
    parts: [null, null, null, shake([17.5, 18], { as: 'cog', dur: 0.52 })],
  },
  'calendar-sync': {
    verb: 'the sync arrows swap places in a full turn',
    parts: [
      null,
      null,
      null,
      around([18, 17.5], [18, 17.5], [0, 90, 200, 320, 360], { as: 'sync', dur: 0.8 }),
    ],
  },
  'calendar-upload-01': {
    verb: 'the arrow stretches upward and the page compresses under it',
    parts: [
      null,
      {
        as: 'page',
        origin: [12, 18],
        transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1.03)', 'scaleY(1)'],
        times: [0, 0.36, 0.68, 1],
        ease: OUT,
        dur: 0.6,
        delay: 0.08,
      },
      {
        as: 'arrow',
        origin: [17.5, 22],
        transform: [
          'translate(0px, 0px) scale(1, 1)',
          'translate(0px, -2.8px) scale(0.86, 1.28)',
          'translate(0px, 0.4px) scale(1.04, 0.94)',
          'translate(0px, 0px) scale(1, 1)',
        ],
        times: [0, 0.38, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.6,
      },
      null,
    ],
  },
  'calendar-upload-02': {
    verb: 'the inner arrow climbs, then the page follows',
    parts: [
      null,
      flinch([12, 13], { delay: 0.22 }),
      null,
      nudge([12, 16], 0, -2.2, { as: 'arrow', dur: 0.5 }),
    ],
  },
  'calendar-upload': {
    verb: 'the arrow holds high while the page stays pressed',
    parts: [
      null,
      {
        as: 'page',
        origin: [12, 18],
        transform: ['scaleY(1)', 'scaleY(0.9)', 'scaleY(0.9)', 'scaleY(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.7,
      },
      {
        as: 'arrow',
        origin: [17.5, 18.5],
        transform: [
          'translate(0px, 0px)',
          'translate(0px, -2.4px)',
          'translate(0px, -2.4px)',
          'translate(0px, 0px)',
        ],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.7,
      },
      null,
    ],
  },
  'calendar-user': {
    verb: 'the person hops into the corner',
    parts: [
      null,
      null,
      null,
      {
        as: 'person',
        origin: [17.5, 22],
        transform: [
          'translate(0px, 0px) scale(1, 1)',
          'translate(0px, -2.6px) scale(0.92, 1.12)',
          'translate(0px, 0.6px) scale(1.08, 0.9)',
          'translate(0px, 0px) scale(1, 1)',
        ],
        times: [0, 0.36, 0.64, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.58,
      },
    ],
  },
  'calendar-x': {
    verb: 'the cross chops the date and the page flinches',
    parts: [
      {
        as: 'cross',
        origin: [12, 16],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(18deg) scale(1.2)',
          'rotate(-6deg) scale(0.94)',
          'rotate(0deg) scale(1)',
        ],
        times: [0, 0.32, 0.64, 1],
        ease: OUT,
        dur: 0.54,
      },
      null,
      null,
      flinch([12, 13], { delay: 0.14 }),
    ],
  },
  calendar: {
    verb: 'the rings lift, the date writes, and the page settles',
    parts: [
      {
        as: 'rings',
        origin: [12, 4],
        transform: ['translateY(0px)', 'translateY(-2.2px)', 'translateY(0.4px)', 'translateY(0px)'],
        times: [0, 0.3, 0.62, 1],
        ease: OUT,
        dur: 0.56,
      },
      flinch([12, 13], { delay: 0.24 }),
      null,
      { as: 'date', origin: [12.3, 16], ...draw({ dur: 0.5, delay: 0.12 }) },
    ],
  },
  calendars: {
    verb: 'the back calendar fans out from under the front one',
    parts: [
      null,
      around([15, 8], [8.6, 15.1], [0, -8, -3, 0], {
        as: 'back',
        times: [0, 0.4, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.7,
      }),
      null,
      {
        as: 'rings',
        origin: [15, 3.5],
        transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(0px)'],
        times: [0, 0.4, 1],
        ease: [OUT, OUT],
        dur: 0.56,
      },
      null,
    ],
  },
  'call-add-02': {
    verb: 'the plus screws in, then the handset hops',
    parts: [
      {
        as: 'plus',
        origin: [17.5, 6.5],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(-50deg) scale(0.35)',
          'rotate(10deg) scale(1.2)',
          'rotate(0deg) scale(1)',
        ],
        times: [0, 0.3, 0.64, 1],
        ease: OUT,
        dur: 0.62,
      },
      lift(PHONE, { delay: 0.18, dur: 0.58 }),
    ],
  },
  'call-add': {
    verb: 'the handset lifts and the plus stamps the new call',
    parts: [lift(EAR), stamp([16.5, 7.5], { delay: 0.2, dur: 0.46 })],
  },
  'call-blocked-02': {
    verb: 'the ban wipes on and the handset recoils',
    parts: [
      { as: 'badge', origin: [17.5, 6.5], ...draw({ dur: 0.5 }) },
      {
        as: 'handset',
        origin: PHONE,
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(1.6px, 1.2px) rotate(8deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        opacity: [1, 0.55, 1],
        times: [0, 0.4, 1],
        ease: [INOUT, OUT],
        dur: 0.64,
        delay: 0.12,
      },
    ],
  },
  'call-blocked': {
    verb: 'the handset jerks away as the ban shakes',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: [
          'translate(0px, 0px)',
          'translate(2.2px, 1.4px)',
          'translate(-0.4px, -0.2px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.3, 0.62, 1],
        ease: OUT,
        dur: 0.56,
      },
      shake([16.5, 7.5], { as: 'badge', dur: 0.48, delay: 0.06 }),
    ],
  },
  'call-disabled-02': {
    verb: 'the handset drops and the slash cuts it',
    parts: [hang(PHONE, { dur: 0.62 }), { as: 'slash', origin: [12, 12], ...draw({ dur: 0.48, delay: 0.1 }) }],
  },
  'call-disabled': {
    verb: 'the handset sags and fades while the slash rewrites',
    parts: [
      {
        as: 'handset',
        origin: [12, 12],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(0px, 1.8px) rotate(10deg)',
          'translate(0px, 1.8px) rotate(10deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        opacity: [1, 0.35, 0.35, 1],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.74,
      },
      { as: 'slash', origin: [11.9, 12.1], ...retrace({ dur: 0.6 }) },
    ],
  },
  'call-done-02': {
    verb: 'the check writes itself and the handset nods yes',
    parts: [
      { as: 'check', origin: [17, 7], ...retrace({ dur: 0.52 }) },
      rattle(PHONE, {
        transform: ['rotate(0deg)', 'rotate(7deg)', 'rotate(-3deg)', 'rotate(0deg)'],
        times: [0, 0.4, 0.7, 1],
        dur: 0.5,
        delay: 0.16,
      }),
    ],
  },
  'call-done': {
    verb: 'the handset nods as the check stamps',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(4deg)', 'rotate(0deg)'],
        times: [0, 0.34, 0.66, 1],
        ease: OUT,
        dur: 0.52,
        delay: 0.08,
      },
      stamp([17, 8], { as: 'check', dur: 0.46 }),
    ],
  },
  'call-end-01': {
    verb: 'the cross slams and the handset hangs up',
    parts: [
      hang(EAR, { delay: 0.08 }),
      {
        as: 'cross',
        origin: [17, 7],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(-20deg) scale(1.25)',
          'rotate(4deg) scale(0.92)',
          'rotate(0deg) scale(1)',
        ],
        times: [0, 0.28, 0.6, 1],
        ease: OUT,
        dur: 0.5,
      },
    ],
  },
  'call-end-02': {
    verb: 'the handset falls onto the hook, which dips',
    parts: [
      around([4, 7.5], [12, 7.5], [0, 14, 18, 0], {
        as: 'handset',
        times: [0, 0.4, 0.62, 1],
        ease: ['easeIn', OUT, OUT],
        dur: 0.7,
      }),
      nudge([12, 15], 0, 1.8, { as: 'hook', dur: 0.46, delay: 0.28 }),
    ],
  },
  'call-end-03': {
    verb: 'the corner cross chops down and the handset drops',
    parts: [
      {
        as: 'cross',
        origin: [18, 6],
        transform: [
          'translate(0px, 0px) rotate(0deg) scale(1)',
          'translate(0px, 1.4px) rotate(16deg) scale(1.18)',
          'translate(0px, 0px) rotate(0deg) scale(1)',
        ],
        times: [0, 0.36, 1],
        ease: [INOUT, OUT],
        dur: 0.52,
      },
      hang(PHONE, { delay: 0.1 }),
    ],
  },
  'call-end-04': {
    verb: 'the receiver plunges off the cradle',
    parts: [
      null,
      {
        as: 'receiver',
        origin: [12, 12.5],
        transform: [
          'translate(0px, 0px) scale(1, 1)',
          'translate(0px, 2.8px) scale(1.08, 0.82)',
          'translate(0px, -0.5px) scale(0.96, 1.06)',
          'translate(0px, 0px) scale(1, 1)',
        ],
        times: [0, 0.36, 0.66, 1],
        ease: ['easeIn', OUT, OUT],
        dur: 0.58,
      },
    ],
  },
  'call-end': {
    verb: 'the handset flips down as the cross stamps the hang-up',
    parts: [hang(EAR), stamp([17, 7], { as: 'cross', delay: 0.16, dur: 0.44 })],
  },
  'call-incoming-02': {
    verb: 'the arrow dives in and the handset tips up to catch it',
    parts: [
      lift(EAR, { delay: 0.12 }),
      nudge([16.8, 7.2], -2.2, 2.2, { as: 'arrow', dur: 0.48 }),
    ],
  },
  'call-incoming-03': {
    verb: 'the chevron dives into the handset, which tips to meet it',
    parts: [
      nudge([17.5, 5.5], -1.6, 2, { as: 'arrow', dur: 0.46 }),
      lift(PHONE, { delay: 0.1, dur: 0.56 }),
    ],
  },
  'call-incoming-04': {
    verb: 'the missed cross falls onto a handset that does not rise',
    parts: [
      {
        as: 'cross',
        origin: [18, 3],
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(0px, 2.4px) rotate(12deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: [0, 0.4, 1],
        ease: ['easeIn', OUT],
        dur: 0.52,
      },
      {
        as: 'handset',
        origin: PHONE,
        opacity: [1, 0.4, 1],
        times: [0, 0.4, 1],
        ease: OUT,
        dur: 0.56,
      },
    ],
  },
  'call-incoming': {
    verb: 'the incoming arrow rewrites as the handset rises to the ear',
    parts: [lift(EAR, { delay: 0.08 }), { as: 'arrow', origin: [17, 7], ...draw({ dur: 0.5 }) }],
  },
  'call-internal-02': {
    verb: 'the arrows trade floors and the handset sways',
    parts: [
      {
        as: 'arrows',
        origin: [17, 6.5],
        transform: [
          'translate(0px, 0px)',
          'translate(0px, 1.8px)',
          'translate(0px, -1.2px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.32, 0.64, 1],
        ease: OUT,
        dur: 0.64,
      },
      {
        as: 'handset',
        origin: PHONE,
        transform: ['rotate(0deg)', 'rotate(6deg)', 'rotate(-4deg)', 'rotate(0deg)'],
        times: [0, 0.34, 0.66, 1],
        ease: OUT,
        dur: 0.6,
      },
    ],
  },
  'call-internal': {
    verb: 'the transfer arc sweeps and the handset follows it',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: ['rotate(0deg)', 'rotate(8deg)', 'rotate(-6deg)', 'rotate(0deg)'],
        times: [0, 0.36, 0.68, 1],
        ease: OUT,
        dur: 0.66,
        delay: 0.08,
      },
      { as: 'arc', origin: [16.5, 6.5], ...retrace({ dur: 0.64 }) },
    ],
  },
  'call-locked-02': {
    verb: 'the lock clamps down and the handset freezes dim',
    parts: [
      {
        as: 'lock',
        origin: [17.5, 4],
        transform: [
          'translate(0px, 0px) scale(1, 1)',
          'translate(0px, 2px) scale(1.1, 0.82)',
          'translate(0px, 0.4px) scale(1, 1)',
        ],
        times: [0, 0.4, 1],
        ease: [INOUT, OUT],
        dur: 0.56,
      },
      {
        as: 'handset',
        origin: PHONE,
        opacity: [1, 0.45, 1],
        times: [0, 0.45, 1],
        ease: OUT,
        dur: 0.64,
        delay: 0.12,
      },
    ],
  },
  'call-locked': {
    verb: 'the shackle snaps down onto the body',
    parts: [
      null,
      {
        as: 'shackle',
        origin: [16.5, 6.5],
        transform: [
          'translate(0px, 0px)',
          'translate(0px, -1.8px)',
          'translate(0px, 0.6px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.28, 0.52, 1],
        ease: [INOUT, 'easeIn', OUT],
        dur: 0.58,
      },
      flinch([16.5, 8.8], { as: 'body', delay: 0.24, dur: 0.46 }),
    ],
  },
  'call-minus-02': {
    verb: 'the minus slices in and the handset shrinks back',
    parts: [
      scaleFrom('X', [14, 6], [17.5, 6], [1, 0.1, 1.16, 1], { as: 'minus', dur: 0.5 }),
      {
        as: 'handset',
        origin: PHONE,
        transform: ['scale(1)', 'scale(0.94)', 'scale(1)'],
        times: [0, 0.4, 1],
        ease: [INOUT, OUT],
        dur: 0.56,
        delay: 0.1,
      },
    ],
  },
  'call-minus': {
    verb: 'the minus cuts across and the handset dips',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: ['translateY(0px)', 'translateY(1.6px)', 'translateY(0px)'],
        times: [0, 0.42, 1],
        ease: [INOUT, OUT],
        dur: 0.54,
        delay: 0.08,
      },
      { as: 'minus', origin: [16.5, 7.5], ...draw({ dur: 0.46 }) },
    ],
  },
  'call-missed-01': {
    verb: 'the return arrow falls away and the handset droops',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(0.8px, 1.8px) rotate(8deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: [0, 0.45, 1],
        ease: [INOUT, OUT],
        dur: 0.66,
      },
      nudge([16.4, 6.9], 1.4, 1.6, { as: 'arrow', dur: 0.48 }),
    ],
  },
  'call-missed-02': {
    verb: 'the cradle dips as the missed arrow rewrites above it',
    parts: [
      {
        as: 'cradle',
        origin: [12, 19],
        transform: ['rotate(0deg)', 'rotate(6deg)', 'rotate(0deg)'],
        times: [0, 0.4, 1],
        ease: [INOUT, OUT],
        dur: 0.6,
      },
      { as: 'arrow', origin: [11.9, 7.1], ...draw({ dur: 0.52 }) },
    ],
  },
  'call-missed-03': {
    verb: 'the missed arrow bounces off and the handset does not follow',
    parts: [
      {
        as: 'arrow',
        origin: [17, 8],
        transform: [
          'translate(0px, 0px)',
          'translate(2px, -1.8px)',
          'translate(0.4px, 0.6px)',
          'translate(0px, 0px)',
        ],
        times: [0, 0.32, 0.62, 1],
        ease: OUT,
        dur: 0.58,
      },
      {
        as: 'handset',
        origin: PHONE,
        opacity: [1, 0.5, 1],
        times: [0, 0.35, 1],
        ease: OUT,
        dur: 0.6,
      },
    ],
  },
  'call-missed-04': {
    verb: 'the dropped handset stays low while the arrow rewrites overhead',
    parts: [
      {
        as: 'handset',
        origin: [12, 20],
        transform: ['rotate(0deg)', 'rotate(5deg)', 'rotate(0deg)'],
        times: [0, 0.4, 1],
        ease: OUT,
        dur: 0.6,
      },
      { as: 'arrow', origin: [12, 6.5], ...retrace({ dur: 0.58 }) },
    ],
  },
  'call-missed': {
    verb: 'the missed arrow shakes and the handset gives up',
    parts: [
      hang(EAR, { dur: 0.6 }),
      shake([16.4, 6.9], { as: 'arrow', dur: 0.46 }),
    ],
  },
  'call-outgoing-02': {
    verb: 'the handset tips away as the arrow leaves upward',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(1.6px, 1.2px) rotate(10deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: [0, 0.42, 1],
        ease: [INOUT, OUT],
        dur: 0.6,
      },
      nudge([17.2, 6.8], 2, -2.2, { as: 'arrow', dur: 0.46 }),
    ],
  },
  'call-outgoing-03': {
    verb: 'the chevron launches and the handset kicks back',
    parts: [
      {
        as: 'arrow',
        origin: [17.5, 8],
        transform: [
          'translate(0px, 0px) scale(1)',
          'translate(1.4px, -2.4px) scale(1.16)',
          'translate(0px, 0px) scale(1)',
        ],
        times: [0, 0.4, 1],
        ease: [INOUT, OUT],
        dur: 0.54,
      },
      {
        as: 'handset',
        origin: PHONE,
        transform: ['translate(0px, 0px)', 'translate(-1.2px, 1px)', 'translate(0px, 0px)'],
        times: [0, 0.4, 1],
        ease: OUT,
        dur: 0.54,
        delay: 0.06,
      },
    ],
  },
  'call-outgoing-04': {
    verb: 'the declined cross shakes a handset that pulls back',
    parts: [
      shake([18, 6], { as: 'cross', dur: 0.46 }),
      {
        as: 'handset',
        origin: PHONE,
        transform: ['translate(0px, 0px)', 'translate(-1.6px, 0.8px)', 'translate(0px, 0px)'],
        times: [0, 0.36, 1],
        ease: OUT,
        dur: 0.52,
      },
    ],
  },
  'call-outgoing': {
    verb: 'the outgoing arrow rewrites as the handset turns away',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: ['rotate(0deg)', 'rotate(12deg)', 'rotate(-3deg)', 'rotate(0deg)'],
        times: [0, 0.38, 0.7, 1],
        ease: OUT,
        dur: 0.62,
      },
      { as: 'arrow', origin: [17, 7], ...retrace({ dur: 0.56 }) },
    ],
  },
  'call-paused-02': {
    verb: 'the pause bars pinch shut and the handset holds its breath',
    parts: [
      scaleFrom('X', [17, 6], [17, 6], [1, 0.35, 0.35, 1], { as: 'pause', dur: 0.7 }),
      {
        as: 'handset',
        origin: PHONE,
        transform: ['scale(1)', 'scale(0.97)', 'scale(0.97)', 'scale(1)'],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.7,
      },
    ],
  },
  'call-paused': {
    verb: 'the pause bars blink while the handset waits',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'],
        times: [0, 0.5, 1],
        ease: INOUT,
        dur: 0.8,
      },
      {
        as: 'pause',
        origin: [16, 7],
        opacity: [1, 0.1, 1, 0.25, 1],
        times: [0, 0.18, 0.4, 0.62, 1],
        ease: OUT,
        dur: 0.74,
      },
    ],
  },
  'call-received-02': {
    verb: 'the arrow lands in the handset, which tips up to take it',
    parts: [
      nudge([16.5, 7], -1.8, 2, { as: 'arrow', dur: 0.46 }),
      lift(PHONE, { delay: 0.12 }),
    ],
  },
  'call-received': {
    verb: 'the received arrow rewrites while the handset rises',
    parts: [lift(EAR, { delay: 0.06 }), { as: 'arrow', origin: [16.5, 7], ...retrace({ dur: 0.56 }) }],
  },
  'call-ringing-01': {
    verb: 'the cradle rocks once and the waves burst outward',
    parts: [
      rattle([12, 15.5], { as: 'cradle', dur: 0.62 }),
      {
        as: 'waves',
        origin: [12, 10],
        transform: ['scale(1)', 'scale(0.55)', 'scale(1.28)', 'scale(1)'],
        opacity: [1, 0.35, 1, 1],
        times: [0, 0.22, 0.58, 1],
        ease: OUT,
        dur: 0.64,
      },
    ],
  },
  'call-ringing-02': {
    verb: 'the corner waves pop twice and the handset rattles',
    parts: [
      rattle(EAR, { dur: 0.56 }),
      {
        as: 'waves',
        origin: [16.5, 7.5],
        transform: ['scale(1)', 'scale(1.35)', 'scale(0.8)', 'scale(1.2)', 'scale(1)'],
        opacity: [1, 0.45, 1, 0.6, 1],
        times: [0, 0.2, 0.4, 0.64, 1],
        ease: OUT,
        dur: 0.7,
      },
    ],
  },
  'call-ringing-03': {
    verb: 'the waves bloom above a handset that jumps',
    parts: [
      {
        as: 'waves',
        origin: [12, 9],
        transform: ['scale(1)', 'scale(0.4)', 'scale(1.3)', 'scale(1)'],
        times: [0, 0.2, 0.55, 1],
        ease: OUT,
        dur: 0.6,
      },
      {
        as: 'handset',
        origin: [12, 20],
        transform: ['translateY(0px)', 'translateY(-1.8px)', 'translateY(0.4px)', 'translateY(0px)'],
        times: [0, 0.34, 0.64, 1],
        ease: OUT,
        dur: 0.56,
        delay: 0.08,
      },
    ],
  },
  'call-ringing-04': {
    verb: 'the corner waves flare and the handset gives one shake',
    parts: [
      {
        as: 'waves',
        origin: [14, 10],
        transform: ['scale(1)', 'scale(1.4)', 'scale(0.85)', 'scale(1)'],
        opacity: [1, 0.4, 1, 1],
        times: [0, 0.28, 0.6, 1],
        ease: OUT,
        dur: 0.62,
      },
      rattle(PHONE, { delay: 0.06, dur: 0.52 }),
    ],
  },
  'call-ringing': {
    verb: 'the waves rush outward while the cradle stays planted',
    parts: [
      null,
      {
        as: 'waves',
        origin: [12, 10],
        transform: ['scale(1)', 'scale(0.45)', 'scale(1.32)', 'scale(0.9)', 'scale(1)'],
        opacity: [1, 0.3, 1, 0.7, 1],
        times: [0, 0.18, 0.42, 0.68, 1],
        ease: OUT,
        dur: 0.72,
      },
    ],
  },
  'call-spark-01': {
    verb: 'the handset lifts and the spark catches beside it',
    parts: [lift(EAR), twinkle([17.5, 6.5], { delay: 0.14, dur: 0.58 })],
  },
  'call-spark-02': {
    verb: 'the spark bursts, then the handset jumps to meet it',
    parts: [lift(PHONE, { delay: 0.16 }), twinkle([17.5, 6.5], { dur: 0.56 })],
  },
  'call-spark': {
    verb: 'the spark spins out while the handset tips toward it',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(2deg)', 'rotate(0deg)'],
        times: [0, 0.4, 0.72, 1],
        ease: OUT,
        dur: 0.64,
      },
      {
        as: 'spark',
        origin: [17.5, 6.5],
        transform: [
          'rotate(0deg) scale(1)',
          'rotate(40deg) scale(0.5)',
          'rotate(90deg) scale(1.24)',
          'rotate(90deg) scale(1)',
        ],
        times: [0, 0.3, 0.68, 1],
        ease: OUT,
        dur: 0.7,
      },
    ],
  },
  'call-unlocked-02': {
    verb: 'the lock swings open and the handset comes alive',
    parts: [
      around([14, 11], [17.5, 7], [0, -24, -8, 0], {
        as: 'lock',
        times: [0, 0.4, 0.7, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.68,
      }),
      lift(PHONE, { delay: 0.2, dur: 0.56 }),
    ],
  },
  'call-unlocked': {
    verb: 'the shackle swings clear and the handset lifts',
    parts: [
      lift(EAR, { delay: 0.18, dur: 0.56 }),
      around([17.9, 6.5], [16.2, 4.8], [0, -32, -10, 0], {
        as: 'shackle',
        times: [0, 0.38, 0.68, 1],
        ease: [INOUT, OUT, OUT],
        dur: 0.66,
      }),
      null,
    ],
  },
  call: {
    verb: 'the handset swings up to the ear',
    parts: [lift(EAR, { dur: 0.62 })],
  },
  'calling-02': {
    verb: 'the handset stays at the ear while the waves keep leaving it',
    parts: [
      {
        as: 'waves',
        origin: [13, 11],
        transform: ['scale(1)', 'scale(1.28)', 'scale(0.82)', 'scale(1.16)', 'scale(1)'],
        opacity: [1, 0.4, 1, 0.55, 1],
        times: [0, 0.22, 0.44, 0.68, 1],
        ease: OUT,
        dur: 0.76,
      },
      {
        as: 'handset',
        origin: PHONE,
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-1.2px, -1.4px) rotate(-8deg)',
          'translate(-1.2px, -1.4px) rotate(-8deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.76,
      },
    ],
  },
  calling: {
    verb: 'the handset holds at the ear and the waves pulse out of it',
    parts: [
      {
        as: 'handset',
        origin: EAR,
        transform: [
          'translate(0px, 0px) rotate(0deg)',
          'translate(-1.4px, -1.6px) rotate(-10deg)',
          'translate(-1.4px, -1.6px) rotate(-10deg)',
          'translate(0px, 0px) rotate(0deg)',
        ],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.78,
      },
      {
        as: 'waves',
        origin: [13, 11],
        transform: ['scale(1)', 'scale(0.6)', 'scale(1.3)', 'scale(0.85)', 'scale(1)'],
        opacity: [1, 0.25, 1, 0.5, 1],
        times: [0, 0.2, 0.46, 0.7, 1],
        ease: OUT,
        dur: 0.74,
        delay: 0.06,
      },
    ],
  },
}
