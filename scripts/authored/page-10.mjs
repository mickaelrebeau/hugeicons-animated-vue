/**
 * Page 10 — book-a → border-right-02.
 *
 * `book-a` and `book-alert` were authored early. Skip `bookmark-01`
 * (handcrafted). User walk: `book-bookmark-01` → `border-right-02`.
 * Identical-geometry pairs get different jobs. Page curl on closed books
 * stays still (it is the page block, not a ribbon).
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  OUT,
  INOUT,
  beat,
  draw,
  grow,
  stamp,
  twinkle,
} from './_kit.mjs'

const T5 = [0, 0.18, 0.46, 0.74, 1]
const E5 = [INOUT, OUT, OUT, OUT]
const HOLD_T = [0, 0.26, 0.72, 1]
const HOLD_E = [INOUT, OUT, OUT]

/** Bang mark: stem stretches, the dot answers a beat later. */
const bang = (stemOrigin, dotOrigin, o = {}) => [
  {
    as: 'stem',
    origin: stemOrigin,
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(-0.8px) scaleY(1.1)',
      'translateY(0.3px) scaleY(0.94)',
      'translateY(0px) scaleY(1)',
    ],
    times: [0, 0.24, 0.56, 1],
    ease: OUT,
    dur: 0.56,
    ...o,
  },
  {
    as: 'dot',
    origin: dotOrigin,
    transform: [
      'translateY(0px) scale(1)',
      'translateY(0.9px) scale(0.86)',
      'translateY(-1px) scale(1.2)',
      'translateY(0px) scale(1)',
    ],
    times: [0, 0.18, 0.48, 1],
    ease: OUT,
    dur: 0.56,
    delay: 0.04,
    ...o,
  },
]

/**
 * Rigid rotation around `pivot`. motion-v overwrites transform-origin to the
 * part's own fill-box, so each keyframe also translates the part's center.
 */
const around = (pivot, center, degrees, o = {}) => {
  const [px, py] = pivot
  const [x, y] = center
  const dx = x - px
  const dy = y - py
  return {
    origin: center,
    transform: degrees.map((deg) => {
      const θ = (deg * Math.PI) / 180
      const c = Math.cos(θ)
      const s = Math.sin(θ)
      const tx = dx * (c - 1) - dy * s
      const ty = dx * s + dy * (c - 1)
      return `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) rotate(${deg}deg)`
    }),
    times: T5,
    ease: E5,
    dur: 0.7,
    ...o,
  }
}

/** Retract a stroke toward its end, then rewrite it — no visibility pop. */
const retrace = (o = {}) => ({
  pathLength: [1, 0.14, 1],
  pathOffset: [0, 0.5, 0],
  times: [0, 0.34, 1],
  ease: [INOUT, OUT],
  dur: 0.68,
  ...o,
})

/**
 * Scale along `axis` while keeping `pivot` planted. Same fill-box compensation
 * as `around`.
 */
const scaleFrom = (axis, pivot, center, scales, o = {}) => {
  const i = axis === 'X' ? 0 : 1
  const d = pivot[i] - center[i]
  return {
    origin: center,
    transform: scales.map((s) => {
      const t = d * (1 - s)
      const trans =
        axis === 'X' ? `translate(${t.toFixed(2)}px, 0px)` : `translate(0px, ${t.toFixed(2)}px)`
      return `${trans} scale${axis}(${s})`
    }),
    times: HOLD_T,
    ease: HOLD_E,
    dur: 0.66,
    ...o,
  }
}

/** Travel, hold, return — no overshoot. */
const hold = (origin, dx, dy, o = {}) => ({
  origin,
  transform: [
    'translate(0px, 0px)',
    `translate(${dx}px, ${dy}px)`,
    `translate(${dx}px, ${dy}px)`,
    'translate(0px, 0px)',
  ],
  times: HOLD_T,
  ease: HOLD_E,
  dur: 0.7,
  ...o,
})

/** Uniform scale from the part center, hold, restore. */
const scaleHold = (origin, s, o = {}) => ({
  origin,
  transform: ['scale(1)', `scale(${s})`, `scale(${s})`, 'scale(1)'],
  times: HOLD_T,
  ease: HOLD_E,
  dur: 0.66,
  ...o,
})

const FLIP_T = [0, 0.22, 0.4, 0.7, 1]
const FLIP_E = [INOUT, OUT, OUT, OUT]

const BOOKMARK_02_REST =
  'M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z'
const BOOKMARK_02_LONG =
  'M4 19.3808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V19.3808C20 21.6867 20 22.8396 19.2272 23.2523C17.7305 24.0514 14.9232 21.3852 13.59 20.5824C12.8168 20.1168 12.4302 19.884 12 19.884C11.5698 19.884 11.1832 20.1168 10.41 20.5824C9.0768 21.3852 6.26947 24.0514 4.77285 23.2523C4 22.8396 4 21.6867 4 19.3808Z'

const OPEN02_RIGHT_DONE =
  'M12 22.001C13.8315 20.3881 16.2062 19.4976 18.6667 19.501C20.2287 19.501 21.0097 19.501 21.3547 19.2802C21.5619 19.1476 21.6465 19.0629 21.7791 18.8558C22 18.5107 22 17.8951 22 16.6639V8.40424C22 6.97645 22 6.26256 21.4513 5.68388C20.9025 5.1052 13.8315 5.88709 12 7.5'

const BOOK_BOOKMARK_02_REST = 'M9 2V10L12 7L15 10V2'
const BOOK_BOOKMARK_02_LONG = 'M9 2V11.6L12 8.6L15 11.6V2'

export default {
  'book-a': {
    verb: 'the letter A rewrites on the still page, bookmark holding',
    parts: [
      {
        as: 'letter',
        origin: [12, 10],
        pathLength: [1, 0.14, 1],
        pathOffset: [0, 0.5, 0],
        times: [0, 0.34, 1],
        ease: [INOUT, OUT],
        dur: 0.68,
      },
      null,
      null,
    ],
  },
  'book-alert': {
    verb: 'the bang stretches then the dot answers, cover and bookmark holding',
    parts: [null, null, ...bang([12, 8], [12, 13.8])],
  },
  'book-bookmark-01': {
    verb: 'the page ribbon drops from the head into the still cover, curl holding',
    parts: [
      null,
      scaleFrom('Y', [12, 4], [12, 8], [1, 1.22, 1.22, 1], { as: 'ribbon', dur: 0.7 }),
      null,
    ],
  },
  'book-bookmark-02': {
    verb: 'the flush-top ribbon strokes stretch from the still head into the cover, curl holding',
    parts: [
      null,
      null,
      {
        as: 'ribbon',
        origin: [12, 6],
        d: [BOOK_BOOKMARK_02_REST, BOOK_BOOKMARK_02_LONG, BOOK_BOOKMARK_02_LONG, BOOK_BOOKMARK_02_REST],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.68,
      },
    ],
  },
  'book-bookmark': {
    verb: 'the page ribbon stretches from the still head into the cover, curl holding',
    parts: [
      null,
      scaleFrom('Y', [12, 4], [12, 8], [1, 1.32, 1.32, 1], { as: 'ribbon', dur: 0.7 }),
      null,
    ],
  },
  'book-check': {
    verb: 'the check writes across the still cover, curl holding',
    parts: [null, null, { as: 'check', origin: [16.5, 4.5], ...retrace({ dur: 0.62 }) }],
  },
  'book-copy': {
    verb: 'the front copy peels off the still back from the overlap, its curl riding along',
    parts: [
      around([9, 10], [15, 9], [0, -18, -18, 0], {
        as: 'front',
        dur: 0.76,
        times: HOLD_T,
        ease: HOLD_E,
      }),
      around([9, 10], [20, 14], [0, -18, -18, 0], {
        as: 'curlF',
        dur: 0.76,
        times: HOLD_T,
        ease: HOLD_E,
      }),
      null,
      null,
    ],
  },
  'book-dashed': {
    verb: 'dashed cover and curl open from the still spine',
    parts: [
      around([4, 12], [12, 12], [0, -14, -14, 0], {
        as: 'cover',
        dur: 0.76,
        times: HOLD_T,
        ease: HOLD_E,
      }),
      around([4, 12], [19, 20], [0, -14, -14, 0], {
        as: 'curl',
        dur: 0.76,
        times: HOLD_T,
        ease: HOLD_E,
      }),
    ],
  },
  'book-down': {
    verb: 'the down arrow commits onto the still cover, curl holding',
    parts: [hold([17, 5.5], 0, 2.4, { as: 'arrow', dur: 0.7 }), null, null],
  },
  'book-download': {
    verb: 'the download arrow drops onto the still page, curl holding',
    parts: [null, null, hold([12, 10], 0, 2.6, { as: 'arrow', dur: 0.7 })],
  },
  'book-edit': {
    verb: 'the nib writes on the still right page, left page holding',
    parts: [null, null, stamp([18.6, 17.4], { as: 'nib', dur: 0.52 })],
  },
  'book-headphones': {
    verb: 'both cups hang from the still headband, cover and curl holding',
    parts: [
      null,
      hold([11.8, 8.8], 0, 1.6, { as: 'cupL', dur: 0.7 }),
      hold([19.3, 8.8], 0, 1.6, { as: 'cupR', dur: 0.7 }),
      null,
      null,
    ],
  },
  'book-heart': {
    verb: 'the heart swells on the still page, curl holding',
    parts: [null, null, scaleHold([12, 10], 1.22, { as: 'heart', dur: 0.62 })],
  },
  'book-image': {
    verb: 'the sun twinkles over the still landscape, cover and curl holding',
    parts: [null, null, twinkle([9.5, 7.5], { as: 'sun', dur: 0.62 }), null],
  },
  'book-key': {
    verb: 'the key turns in the still cover, curl holding',
    parts: [
      null,
      null,
      around([14, 8], [16, 6], [0, 22, 22, 0], {
        as: 'key',
        dur: 0.72,
        times: HOLD_T,
        ease: HOLD_E,
      }),
    ],
  },
  'book-lock': {
    verb: 'the lock compresses onto the still cover, curl holding',
    parts: [
      null,
      null,
      scaleFrom('Y', [17, 10], [17, 6], [1, 0.78, 0.78, 1], { as: 'lock', dur: 0.66 }),
    ],
  },
  'book-marked': {
    verb: 'the dog-ear folds down on the still cover, curl holding',
    parts: [
      null,
      around([14, 2], [17, 6.1], [0, 16, 16, 0], {
        as: 'ear',
        dur: 0.7,
        times: HOLD_T,
        ease: HOLD_E,
      }),
      null,
    ],
  },
  'book-minus': {
    verb: 'the minus bar shrinks off the still page, curl holding',
    parts: [null, grow([12, 10], 'X', { as: 'minus', dur: 0.54 }), null],
  },
  'book-open-01': {
    verb: 'the open spread closes as one block toward the gutter, then opens',
    wrap: {
      as: 'book',
      origin: [12, 12],
      transform: ['scaleX(1)', 'scaleX(0.84)', 'scaleX(0.84)', 'scaleX(1)'],
      times: HOLD_T,
      ease: HOLD_E,
      dur: 0.76,
    },
    parts: [null, null],
  },
  'book-open-02': {
    verb: 'the standing page flips over the gutter, covering the pages behind it',
    paintOrder: [1, 2, 0],
    parts: [
      {
        as: 'leaf',
        attrs: { fill: 'var(--hia-icon-surface, Canvas)' },
        ...scaleFrom('X', [12, 12], [15.5, 11.9], [1, 0.12, -0.88, -0.88, 1], {
          as: 'leaf',
          dur: 0.82,
          times: FLIP_T,
          ease: FLIP_E,
        }),
      },
      null,
      { attrs: { d: OPEN02_RIGHT_DONE } },
    ],
  },
  'book-open-check': {
    verb: 'the check writes on the still right page, left page holding',
    parts: [null, null, { as: 'check', origin: [19, 18], ...retrace({ dur: 0.62 }) }],
  },
  'book-open-text': {
    verb: 'the two page texts rewrite, covers holding',
    parts: [
      null,
      null,
      { as: 'textR', origin: [17, 11.2], ...retrace({ dur: 0.7 }) },
      { as: 'textL', origin: [7, 11.2], ...retrace({ dur: 0.7, delay: 0.08 }) },
    ],
  },
  'book-open': {
    verb: 'the open spread closes as one block toward the gutter, then opens',
    wrap: {
      as: 'book',
      origin: [12, 12],
      transform: ['scaleX(1)', 'scaleX(0.9)', 'scaleX(0.9)', 'scaleX(1)'],
      times: HOLD_T,
      ease: HOLD_E,
      dur: 0.76,
    },
    parts: [null, null],
  },
  'book-plus': {
    verb: 'the plus stamps onto the still page, curl holding',
    parts: [null, stamp([12, 10], { as: 'plus', dur: 0.5 }), null],
  },
  'book-search': {
    verb: 'the loupe swings from its handle, cover holding',
    parts: [
      around([21, 20], [17, 16], [0, 14, 14, 0], {
        as: 'loupe',
        dur: 0.7,
        times: HOLD_T,
        ease: HOLD_E,
      }),
      null,
    ],
  },
  'book-text': {
    verb: 'the two lines rewrite on the still page, curl holding',
    parts: [{ as: 'lines', origin: [12, 9], ...retrace({ dur: 0.64 }) }, null, null],
  },
  'book-type': {
    verb: 'the T stem and serifs set as one letter on the still page, curl holding',
    parts: [
      null,
      null,
      scaleFrom('Y', [12, 6], [12, 6.8], [1, 0.72, 0.72, 1], { as: 'cap', dur: 0.66 }),
      scaleFrom('Y', [12, 6], [12, 10], [1, 0.72, 0.72, 1], { as: 'stem', dur: 0.66 }),
      scaleFrom('X', [12, 14], [12, 14], [1, 0.72, 0.72, 1], { as: 'foot', dur: 0.66 }),
    ],
  },
  'book-up-two': {
    verb: 'the upper chevron leads, the lower follows, cover and curl holding',
    parts: [
      null,
      null,
      hold([12, 3.5], 0, -2.2, { as: 'chevTop', dur: 0.7 }),
      hold([12, 10], 0, -2.2, { as: 'chevBot', dur: 0.7, delay: 0.08 }),
    ],
  },
  'book-upload': {
    verb: 'the upload arrow climbs off the still page, curl holding',
    parts: [null, null, hold([12, 10], 0, -2.6, { as: 'arrow', dur: 0.7 })],
  },
  'book-user': {
    verb: 'head and shoulders nod as one reader on the still page, curl holding',
    parts: [
      null,
      null,
      around([12, 14], [12, 8], [0, 8, 8, 0], {
        as: 'head',
        dur: 0.7,
        times: HOLD_T,
        ease: HOLD_E,
      }),
      around([12, 14], [12, 12], [0, 8, 8, 0], {
        as: 'shoulders',
        dur: 0.7,
        times: HOLD_T,
        ease: HOLD_E,
      }),
    ],
  },
  'book-x': {
    verb: 'the cancel x wipes off the still page, curl holding',
    parts: [null, null, { as: 'x', origin: [12, 10], ...draw({ dur: 0.64 }) }],
  },
  book: {
    verb: 'the top crease rewrites on the still cover, curl holding',
    parts: [null, null, { as: 'crease', origin: [9, 6], ...retrace({ dur: 0.6 }) }],
  },
  'bookmark-02': {
    verb: 'the ribbon strokes stretch from the still head, the point lengthening',
    parts: [
      {
        as: 'ribbon',
        origin: [12, 12.3],
        d: [BOOKMARK_02_REST, BOOKMARK_02_LONG, BOOKMARK_02_LONG, BOOKMARK_02_REST],
        times: HOLD_T,
        ease: HOLD_E,
        dur: 0.68,
      },
    ],
  },
  'bookmark-03': {
    verb: 'the inner fold drops inside the still frame',
    parts: [null, hold([12, 7.4], 0, 2.4, { as: 'fold', dur: 0.7 })],
  },
  'bookmark-add-01': {
    verb: 'the plus stamps beside the still ribbon, fold holding',
    parts: [null, null, stamp([17, 6], { as: 'plus', dur: 0.5 })],
  },
  'bookmark-add-02': {
    verb: 'the plus grows beside the still ribbon',
    parts: [null, grow([17, 6], 'Y', { as: 'plus', dur: 0.54 })],
  },
  'bookmark-add': {
    verb: 'the plus rewrites beside the still ribbon, fold holding',
    parts: [null, null, { as: 'plus', origin: [17, 6], ...retrace({ dur: 0.6 }) }],
  },
  'bookmark-block-01': {
    verb: 'the forbidden slash wipes across the still badge, ribbon and fold holding',
    parts: [{ as: 'slash', origin: [16.5, 5.5], ...draw({ dur: 0.64 }) }, null, null],
  },
  'bookmark-block-02': {
    verb: 'the forbidden slash wipes across the still badge, ribbon holding',
    parts: [null, { as: 'badge', origin: [16, 6], ...retrace({ dur: 0.66 }) }],
  },
  'bookmark-block': {
    verb: 'the blocked badge stamps beside the still ribbon, fold holding',
    parts: [stamp([16.5, 5.5], { as: 'badge', dur: 0.5 }), null, null],
  },
  'bookmark-check-01': {
    verb: 'the check writes on the still ribbon, fold holding',
    parts: [null, { as: 'check', origin: [12.5, 13], ...retrace({ dur: 0.62 }) }, null],
  },
  'bookmark-check-02': {
    verb: 'the check stamps on the still ribbon',
    parts: [null, stamp([12.5, 10.5], { as: 'check', dur: 0.5 })],
  },
  'bookmark-check': {
    verb: 'the check grows on the still ribbon, fold holding',
    parts: [null, grow([12.5, 13], 'Y', { as: 'check', dur: 0.54 }), null],
  },
  'bookmark-minus-01': {
    verb: 'the minus bar shrinks beside the still ribbon, fold holding',
    parts: [null, null, grow([17, 5], 'X', { as: 'minus', dur: 0.52 })],
  },
  'bookmark-minus-02': {
    verb: 'the minus bar rewrites beside the still ribbon',
    parts: [null, { as: 'minus', origin: [17, 6], ...retrace({ dur: 0.58 }) }],
  },
  'bookmark-minus': {
    verb: 'the minus bar stamps beside the still ribbon, fold holding',
    parts: [null, null, stamp([17, 5], { as: 'minus', dur: 0.48 })],
  },
  'bookmark-off-01': {
    verb: 'the slash wipes the still ribbon, fold holding',
    parts: [null, null, null, { as: 'slash', origin: [12, 12], ...draw({ dur: 0.66 }) }],
  },
  'bookmark-off-02': {
    verb: 'the slash wipes the still cut ribbon',
    parts: [null, null, { as: 'slash', origin: [12, 12], ...draw({ dur: 0.66 }) }],
  },
  'bookmark-off': {
    verb: 'the slash rewrites across the still cut ribbon, fold holding',
    parts: [null, null, null, { as: 'slash', origin: [12, 12], ...retrace({ dur: 0.66 }) }],
  },
  'bookmark-plus': {
    verb: 'the plus grows inside the still ribbon',
    parts: [null, grow([12, 9.5], 'Y', { as: 'plus', dur: 0.54 })],
  },
  'bookmark-remove-01': {
    verb: 'the x wipes beside the still ribbon, fold holding',
    parts: [null, null, { as: 'x', origin: [17.5, 5.5], ...draw({ dur: 0.64 }) }],
  },
  'bookmark-remove-02': {
    verb: 'the x stamps beside the still ribbon',
    parts: [null, stamp([17.5, 5.5], { as: 'x', dur: 0.5 })],
  },
  'bookmark-remove': {
    verb: 'the x rewrites beside the still ribbon, fold holding',
    parts: [null, null, { as: 'x', origin: [17.5, 5.5], ...retrace({ dur: 0.6 }) }],
  },
  'bookmark-x': {
    verb: 'the x wipes inside the still ribbon',
    parts: [null, { as: 'x', origin: [12, 9.5], ...draw({ dur: 0.64 }) }],
  },
  bookmark: {
    verb: 'the ribbon stretches from the still fold, the crease holding',
    parts: [
      scaleFrom('Y', [12, 7], [12, 12.3], [1, 1.2, 1.2, 1], { as: 'ribbon', dur: 0.68 }),
      null,
    ],
  },
  'books-01': {
    verb: 'the offset volume tucks into the pile while the top volume settles onto it',
    parts: [
      null,
      scaleFrom('Y', [10, 9], [10, 6], [1, 0.78, 0.78, 1], { as: 'top', dur: 0.74 }),
      hold([14, 12], -4, 0, { as: 'mid', dur: 0.74 }),
      hold([20, 12], -4, 0, { as: 'spineM', dur: 0.74 }),
      scaleFrom('Y', [4, 9], [4, 6], [1, 0.78, 0.78, 1], { as: 'spineT', dur: 0.74 }),
      null,
    ],
  },
  'books-02': {
    verb: 'the hanging bookmark stretches from the still binding, volumes holding',
    parts: [
      null,
      null,
      null,
      null,
      scaleFrom('Y', [10, 9], [10, 13], [1, 1.22, 1.22, 1], { as: 'mark', dur: 0.7 }),
    ],
  },
  books: {
    verb: 'the top volume lifts with its spine, the rest holding',
    parts: [
      null,
      hold([10, 6], 0, -1.8, { as: 'top', dur: 0.7 }),
      null,
      null,
      hold([4, 6], 0, -1.8, { as: 'spineT', dur: 0.7 }),
      null,
    ],
  },
  'bookshelf-01': {
    verb: 'the top-row books pull forward, shelf, feet and bottom row holding',
    parts: [
      null,
      null,
      null,
      hold([12.5, 8.5], 0, -1.5, { as: 'leanT', dur: 0.68 }),
      hold([7, 8.5], 0, -1.5, { as: 'leftT', dur: 0.68 }),
      null,
      null,
      hold([17, 8.5], 0, -1.5, { as: 'rightT', dur: 0.68 }),
      null,
    ],
  },
  'bookshelf-02': {
    verb: 'the four top books pull forward, handle, shelf and feet holding',
    parts: [
      null,
      null,
      hold([10.5, 8.5], 0, -1.5, { as: 'lean', dur: 0.68 }),
      hold([17.5, 8.5], 0, -1.5, { as: 'leanR', dur: 0.68 }),
      hold([7, 8.5], 0, -1.5, { as: 'left', dur: 0.68 }),
      hold([14, 8.5], 0, -1.5, { as: 'mid', dur: 0.68 }),
      null,
      null,
    ],
  },
  'bookshelf-03': {
    verb: 'the middle-shelf books pull forward, frame, floors and other rows holding',
    parts: [
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      hold([14, 14], 0, -1.4, { as: 'midL', dur: 0.68 }),
      null,
      hold([16.5, 14], 0, -1.4, { as: 'midLean', dur: 0.68 }),
      hold([19, 14], 0, -1.4, { as: 'midR', dur: 0.68 }),
    ],
  },
  bookshelf: {
    verb: 'the bottom-row books pull forward, shelf, feet and top row holding',
    parts: [
      null,
      null,
      null,
      null,
      null,
      hold([8, 17.3], 0, -1.5, { as: 'leftB', dur: 0.68 }),
      hold([12, 17.5], 0, -1.5, { as: 'midB', dur: 0.68 }),
      null,
      hold([16.5, 17.5], 0, -1.5, { as: 'leanB', dur: 0.68 }),
    ],
  },
  'boom-box': {
    verb: 'both speakers beat together in the still cabinet, handle holding',
    parts: [
      beat([16, 15], { as: 'spkR', dur: 0.5 }),
      beat([8, 15], { as: 'spkL', dur: 0.5 }),
      null,
      null,
    ],
  },
  bootstrap: {
    verb: 'the B rewrites inside the still pills',
    parts: [{ as: 'b', origin: [12, 12], ...retrace({ dur: 0.66 }) }, null, null],
  },
  'border-all-01': {
    verb: 'the inner crosshair rewrites, frame holding',
    parts: [null, { as: 'cross', origin: [12, 12], ...retrace({ dur: 0.7 }) }],
  },
  'border-all-02': {
    verb: 'the full frame rewrites',
    parts: [{ as: 'frame', origin: [12, 12], ...retrace({ dur: 0.74 }) }],
  },
  'border-all': {
    verb: 'the inner ticks tighten toward the center, frame holding',
    parts: [null, scaleHold([12, 12], 0.62, { as: 'cross', dur: 0.66 })],
  },
  'border-bottom-01': {
    verb: 'the bottom edge commits downward, dashes and ticks holding',
    parts: [hold([12, 19.5], 0, 1.6, { as: 'edge', dur: 0.68 }), null, null],
  },
  'border-bottom-02': {
    verb: 'the solid bottom edge rewrites, dashes holding',
    parts: [null, { as: 'edge', origin: [12, 19.5], ...retrace({ dur: 0.68 }) }],
  },
  'border-bottom': {
    verb: 'the bottom edge rewrites onto the still dashes',
    parts: [{ as: 'edge', origin: [12, 19.5], ...retrace({ dur: 0.68 }) }, null, null],
  },
  'border-full': {
    verb: 'the inner rules rewrite, frame holding',
    parts: [null, { as: 'rules', origin: [11, 12], ...retrace({ dur: 0.64 }) }],
  },
  'border-horizontal': {
    verb: 'the mid rule grows from the center, dashes and ticks holding',
    parts: [null, scaleFrom('X', [12, 12], [12, 12], [1, 0.18, 1, 1], { as: 'rule', dur: 0.66 }), null],
  },
  'border-inner': {
    verb: 'the inner cross grows from the center, dashes holding',
    parts: [
      null,
      scaleFrom('X', [12, 12], [12, 12], [1, 0.18, 1, 1], { as: 'h', dur: 0.66 }),
      scaleFrom('Y', [12, 12], [12, 12], [1, 0.18, 1, 1], { as: 'v', dur: 0.66 }),
    ],
  },
  'border-left-01': {
    verb: 'the left edge commits outward, dashes and ticks holding',
    parts: [hold([4.5, 12], -1.6, 0, { as: 'edge', dur: 0.68 }), null, null],
  },
  'border-left-02': {
    verb: 'the solid left edge rewrites, dashes holding',
    parts: [null, { as: 'edge', origin: [4.5, 12], ...retrace({ dur: 0.68 }) }],
  },
  'border-left': {
    verb: 'the left edge rewrites onto the still dashes',
    parts: [{ as: 'edge', origin: [4.5, 12], ...retrace({ dur: 0.68 }) }, null, null],
  },
  'border-none-01': {
    verb: 'the inner ticks rewrite, corner dashes holding',
    parts: [null, { as: 'ticks', origin: [12, 12], ...retrace({ dur: 0.68 }) }],
  },
  'border-none-02': {
    verb: 'the corner dashes rewrite',
    parts: [{ as: 'dashes', origin: [12, 12], ...retrace({ dur: 0.72 }) }],
  },
  'border-none': {
    verb: 'the inner ticks grow from the center, dashes holding',
    parts: [null, grow([12, 12], 'Y', { as: 'ticks', dur: 0.56 })],
  },
  'border-right-01': {
    verb: 'the right edge commits outward, dashes and ticks holding',
    parts: [hold([19.5, 12], 1.6, 0, { as: 'edge', dur: 0.68 }), null, null],
  },
  'border-right-02': {
    verb: 'the solid right edge rewrites, dashes holding',
    parts: [null, { as: 'edge', origin: [19.5, 12], ...retrace({ dur: 0.68 }) }],
  },
}
