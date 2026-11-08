/**
 * Page 63 — sql → square-round-corner.
 *
 * Gallery page (80 public icons). The hidden handcrafted square-lock-01 sits
 * in this span and is skipped; square-lock shares its geometry and blinks its
 * keyhole while the body nods.
 *
 * Square arrows keep the tile and move the arrow the way it points:
 * bare chevrons nudge; -01 (same geometry) stretch along their axis and the
 * tile nods; -02 shaft-and-head nudge with a perpendicular squeeze (the
 * arrow-02 originals' ~2.6px / scale 0.94 beat); -03 curved arrows rewrite,
 * then nudge; doubles push farther. Expand flies out, shrink pulls in, reload
 * sweeps.
 *
 * Padlock squares: bare lets the badge act; -01 (same geometry) lifts the
 * shackle, then pops the badge; -02 badges (round) turn or stamp.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  INOUT,
  OUT,
  beat,
  blink,
  draw,
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
  spinStar,
  stamp,
  sweep,
  swing,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const loop = (o = {}) => ({ as: 'loop', pathLength: [1, 0.3, 1], pathOffset: [0, 1, 2], times: [0, 0.5, 1], ease: 'easeInOut', dur: 1, ...o })
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const tile = (delay = 0.3) => beat(C, { as: 'tile', delay })

const V = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0], ul: [-0.7, -0.7], ur: [0.7, -0.7], dl: [-0.7, 0.7], dr: [0.7, 0.7] }
/** Arrow beats, all on the arrow part centred in the tile. */
const arr = {
  chevron: ([x, y]) => nudge(C, x * 1.6, y * 1.6, { as: 'arrow' }),
  stretch: ([x, y]) => (x ? flex('X', C, C, [1, 1.3, 0.92, 1, 1], { as: 'arrow' }) : flex('Y', C, C, [1, 1.3, 0.92, 1, 1], { as: 'arrow' })),
  shaft: ([x, y]) => ({
    as: 'arrow',
    origin: C,
    transform: ['translate(0px, 0px) scale(1, 1)', `translate(${x * 2.6}px, ${y * 2.6}px) scale(${x ? 1 : 0.94}, ${y ? 1 : 0.94})`, `translate(${-x * 0.3}px, ${-y * 0.3}px) scale(1, 1)`, 'translate(0px, 0px) scale(1, 1)'],
    times: [0, 0.44, 0.72, 1],
    ease: [INOUT, OUT, OUT],
    dur: 0.5,
  }),
  curve: ([x, y]) => ({ as: 'arrow', origin: C, pathLength: [1, 0.14, 1, 1], pathOffset: [0, 0.5, 0, 0], transform: ['translate(0px, 0px)', 'translate(0px, 0px)', `translate(${x * 1.2}px, ${y * 1.2}px)`, 'translate(0px, 0px)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.7 }),
  double: ([x, y]) => ride(C, [[0, 0], [x * 2.4, y * 2.4], [-x * 0.4, -y * 0.4], [x * 1.2, y * 1.2], [0, 0]], { as: 'arrow', times: [0, 0.24, 0.48, 0.72, 1], ease: 'easeInOut', dur: 0.7 }),
}
/** Square-arrow specs: frame index and arrow index vary per icon. */
const sq = (verb, arrow, frameFirst = true, nod = false) => ({ verb, parts: frameFirst ? [nod ? tile() : null, arrow] : [arrow, nod ? tile() : null] })

/** Lock bodies: shackle lift for the -01 variants. */
const shackle = (c = [11, 5.5]) => ride(c, out(0, -1.2), { as: 'shackle' })

// ---------------------------------------------------------------------------

const specs = {
  sql: {
    verb: 'the S, Q and L letters hop in turn',
    parts: [null, hop([7, 12], 1.1, { as: 'letter' }), hop([12.5, 12.8], 1.1, { as: 'letter', delay: 0.1 }), hop([17.5, 12], 1.1, { as: 'letter', delay: 0.2 })],
  },
  'square-01': {
    verb: 'the cube lifts open and the corner arrow kicks back',
    parts: [ride([8.5, 14.1], out(-0.4, -0.8), { as: 'cube' }), ride([8.5, 14.1], out(0.4, -0.8), { as: 'cube' }), nudge([20, 6], 0.9, -0.9, { as: 'arrow', delay: 0.12 })],
  },

  // --- square arrows: data transfer ---------------------------------------------------------------------------------
  'square-arrow-data-transfer-diagonal': {
    verb: 'the two diagonal arrows push past each other and back',
    parts: [nudge([13, 14], -1, 1, { as: 'arrow' }), nudge([11, 10], 1, -1, { as: 'arrow', delay: 0.06 }), null],
  },
  'square-arrow-data-transfer-horizontal': {
    verb: 'the two arrows trade direction, the top going right and the bottom left',
    parts: [null, nudge([12, 9], 1.4, 0, { as: 'arrow' }), nudge([12, 15], -1.4, 0, { as: 'arrow', delay: 0.08 })],
  },
  'square-arrow-data-transfer-vertical': {
    verb: 'the two arrows trade direction, the left going up and the right down',
    parts: [null, nudge([9, 12], 0, -1.4, { as: 'arrow' }), nudge([15, 12], 0, 1.4, { as: 'arrow', delay: 0.08 })],
  },

  // --- square arrows: diagonal ---------------------------------------------------------------------------------
  'square-arrow-diagonal': sq('the diagonal double arrow stretches toward both corners', flex('X', C, C, [1, 1.24, 0.94, 1, 1], { as: 'arrow' }), false),
  'square-arrow-diagonal-01': sq('the diagonal arrow slides up-right and back while the tile nods', ride(C, out(1, -1), { as: 'arrow' }), false, true),
  'square-arrow-diagonal-02': sq('the diagonal arrow turns a quarter and back', swing(C, C, [0, 90, 90, 0, 0], { as: 'arrow', times: [0, 0.3, 0.66, 1, 1], ease: [INOUT, 'linear', OUT, 'linear'], dur: 0.8 })),

  // --- square arrows: down ---------------------------------------------------------------------------------
  'square-arrow-down': sq('the chevron nudges down in the tile', arr.chevron(V.down)),
  'square-arrow-down-01': sq('the chevron stretches down and the tile nods', arr.stretch(V.down), true, true),
  'square-arrow-down-02': sq('the arrow drives down, squeezing narrow', arr.shaft(V.down)),
  'square-arrow-down-03': sq('the curved arrow rewrites and dips down', arr.curve(V.down)),
  'square-arrow-down-double': sq('the double chevron pushes down twice', arr.double(V.down)),
  'square-arrow-down-left': sq('the corner arrow pushes down-left', arr.chevron(V.dl)),
  'square-arrow-down-right': sq('the corner arrow pushes down-right', arr.chevron(V.dr)),

  // --- square arrows: expand / shrink ---------------------------------------------------------------------------------
  'square-arrow-expand': sq('the corner arrows fly out toward the tile corners', { as: 'arrows', origin: C, transform: ['scale(1)', 'scale(1.22)', 'scale(0.96)', 'scale(1)'], times: [0, 0.4, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }, false),
  'square-arrow-expand-01': sq('the corner arrows stretch out along the diagonal and the tile nods', flex('Y', C, C, [1, 1.24, 0.95, 1, 1], { as: 'arrows' }), false, true),
  'square-arrow-expand-02': sq('the opposite corner arrows fly out', { as: 'arrows', origin: C, transform: ['scale(1)', 'scale(1.22)', 'scale(0.96)', 'scale(1)'], times: [0, 0.4, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }, false, true),
  'square-arrow-shrink': sq('the corner arrows pull in toward the centre', { as: 'arrows', origin: C, transform: ['scale(1)', 'scale(0.76)', 'scale(1.04)', 'scale(1)'], times: [0, 0.4, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }),
  'square-arrow-shrink-01': sq('the corner arrows squeeze in and the tile nods', flex('X', C, C, [1, 0.76, 1.04, 1, 1], { as: 'arrows' }), true, true),
  'square-arrow-shrink-02': sq('the opposite corner arrows pull in', { as: 'arrows', origin: C, transform: ['scale(1)', 'scale(0.76)', 'scale(1.04)', 'scale(1)'], times: [0, 0.4, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56 }, true, true),

  // --- square arrows: horizontal / vertical ---------------------------------------------------------------------------------
  'square-arrow-horizontal': sq('the double arrow stretches left and right', flex('X', C, C, [1, 1.24, 0.94, 1, 1], { as: 'arrow' })),
  'square-arrow-vertical': sq('the double arrow stretches up and down', flex('Y', C, C, [1, 1.24, 0.94, 1, 1], { as: 'arrow' }), false),
  'square-arrow-left-right': sq('the two arrows push apart left and right', ride(C, [[0, 0], [-1, 0], [1, 0], [0, 0], [0, 0]], { as: 'arrows', ease: INOUT, dur: 0.7 })),
  'square-arrow-up-down': sq('the two arrows push apart up and down', ride(C, [[0, 0], [0, -1], [0, 1], [0, 0], [0, 0]], { as: 'arrows', ease: INOUT, dur: 0.7 })),

  // --- square arrows: left ---------------------------------------------------------------------------------
  'square-arrow-left': sq('the chevron nudges left in the tile', arr.chevron(V.left)),
  'square-arrow-left-01': sq('the chevron stretches left and the tile nods', arr.stretch(V.left), true, true),
  'square-arrow-left-02': sq('the arrow drives left, squeezing flat', arr.shaft(V.left)),
  'square-arrow-left-03': sq('the curved arrow rewrites and dips left', arr.curve(V.left)),
  'square-arrow-left-double': sq('the double chevron pushes left twice', arr.double(V.left)),

  // --- square arrows: move ---------------------------------------------------------------------------------
  'square-arrow-move-down-left': sq('the bent arrow travels down, then left', ride(C, [[0, 0], [0, 1], [-1, 1], [0, 0], [0, 0]], { as: 'arrow', ease: INOUT, dur: 0.76 })),
  'square-arrow-move-down-right': sq('the bent arrow travels down, then right', ride([12.1, 12], [[0, 0], [0, 1], [1, 1], [0, 0], [0, 0]], { as: 'arrow', ease: INOUT, dur: 0.76 })),
  'square-arrow-move-left-down': sq('the bent arrow travels left, then down', ride([12, 12.1], [[0, 0], [-1, 0], [-1, 1], [0, 0], [0, 0]], { as: 'arrow', ease: INOUT, dur: 0.76 })),
  'square-arrow-move-left-up': sq('the bent arrow travels up, then left', ride([11.9, 12], [[0, 0], [0, -1], [-1, -1], [0, 0], [0, 0]], { as: 'arrow', ease: INOUT, dur: 0.76 })),
  'square-arrow-move-right-down': sq('the bent arrow travels right, then down', ride([12.1, 12.1], [[0, 0], [1, 0], [1, 1], [0, 0], [0, 0]], { as: 'arrow', ease: INOUT, dur: 0.76 })),
  'square-arrow-move-right-up': sq('the bent arrow travels up, then right', ride([12.1, 12], [[0, 0], [0, -1], [1, -1], [0, 0], [0, 0]], { as: 'arrow', ease: INOUT, dur: 0.76 })),

  // --- square arrows: reload ---------------------------------------------------------------------------------
  'square-arrow-reload': sq('the reload arcs sweep around', sweep({ as: 'arcs' }), false),
  'square-arrow-reload-01': sq('the reload arcs spin a full turn and the tile nods', lap(C, 360, { as: 'arcs' }), false, true),
  'square-arrow-reload-02': sq('the reload arrow winds back around', lap(C, -360, { as: 'arc' })),

  // --- square arrows: right ---------------------------------------------------------------------------------
  'square-arrow-right': sq('the chevron nudges right in the tile', arr.chevron(V.right)),
  'square-arrow-right-01': sq('the chevron stretches right and the tile nods', arr.stretch(V.right), true, true),
  'square-arrow-right-02': sq('the arrow drives right, squeezing flat', arr.shaft(V.right)),
  'square-arrow-right-03': sq('the curved arrow rewrites and dips right', arr.curve(V.right)),
  'square-arrow-right-double': sq('the double chevron pushes right twice', arr.double(V.right)),

  // --- square arrows: up ---------------------------------------------------------------------------------
  'square-arrow-up': sq('the chevron nudges up in the tile', arr.chevron(V.up)),
  'square-arrow-up-01': sq('the chevron stretches up and the tile nods', arr.stretch(V.up), true, true),
  'square-arrow-up-02': sq('the arrow drives up, squeezing narrow', arr.shaft(V.up)),
  'square-arrow-up-03': sq('the curved arrow rewrites and lifts up', arr.curve(V.up)),
  'square-arrow-up-double': sq('the double chevron pushes up twice', arr.double(V.up)),
  'square-arrow-up-left': sq('the corner arrow pushes up-left', arr.chevron(V.ul)),
  'square-arrow-up-right': sq('the corner arrow pushes up-right', arr.chevron(V.ur)),
  'square-arrow-up-right-02': {
    verb: 'the arrow shaft and head drive up-right out of the open corner',
    parts: [null, nudge([11.5, 12.5], 1.2, -1.2, { as: 'arrow' }), nudge([13.1, 10.9], 1.2, -1.2, { as: 'arrow' })],
  },

  // --- other squares ---------------------------------------------------------------------------------
  'square-asterisk': {
    verb: 'the asterisk turns a sixth in the tile',
    parts: [null, lap(C, 60, { as: 'asterisk', dur: 0.7 })],
  },
  'square-bottom-dashed-scissors': {
    verb: 'the scissors snip along the dashed edge',
    parts: [ride([8.5, 8.5], [[0, 0], [0, 0.8], [0, 0], [0, 0.8], [0, 0]], { as: 'handle', ease: 'easeInOut', times: [0, 0.2, 0.4, 0.6, 0.8] }), null, ride([8.5, 15.5], [[0, 0], [0, -0.8], [0, 0], [0, -0.8], [0, 0]], { as: 'handle', ease: 'easeInOut', times: [0, 0.2, 0.4, 0.6, 0.8] }), loop({ as: 'edge', delay: 0.1 })],
  },
  'square-chart-gantt': {
    verb: 'the Gantt bars rewrite in turn',
    parts: [null, line(0, { as: 'bars', dur: 0.66 })],
  },
  'square-circle': {
    verb: 'the circle check draws and the corner arrow kicks',
    parts: [beat(C, { delay: 0.3 }), draw({ as: 'check' }), draw({ as: 'check', delay: 0.08 }), nudge([16, 9], 0.8, -0.8, { as: 'arrow', delay: 0.14 })],
  },
  'square-dashed-kanban': {
    verb: 'the kanban columns grow in turn and the dashed frame traces',
    parts: [loop({ as: 'frame' }), flex('Y', [12, 8], [12, 10], [1, 1.4, 0.9, 1, 1], { as: 'column', delay: 0.1 }), flex('Y', [8, 8], [8, 11], [1, 0.6, 1.08, 1, 1], { as: 'column' }), flex('Y', [16, 8], [16, 12], [1, 0.7, 1.06, 1, 1], { as: 'column', delay: 0.2 })],
  },
  'square-dashed-top-solid': {
    verb: 'the dashes march around the frame',
    parts: [loop({ as: 'frame' })],
  },
  'square-f': {
    verb: 'the F rewrites and its bar draws',
    parts: [null, line(0, { as: 'stem', dur: 0.6 }), draw({ as: 'bar', delay: 0.2 })],
  },

  // --- square locks ---------------------------------------------------------------------------------
  'square-lock': {
    verb: 'the keyhole blinks and the lock body nods',
    parts: [beat([12, 15.5], { delay: 0.1 }), null, blink({ as: 'keyhole', opacity: [1, 0.1, 1, 0.1, 1] })],
  },
  'square-lock-02': {
    verb: 'the key slot turns in the lock and the shackle settles',
    parts: [swing([12, 15.5], [12, 15.5], [0, 90, 90, 0, 0], { as: 'slot', times: [0, 0.3, 0.66, 1, 1], ease: [INOUT, 'linear', OUT, 'linear'], dur: 0.8 }), null, ride([12, 5.5], out(0, 0.8), { as: 'shackle', delay: 0.4 })],
  },
  'square-lock-add': {
    verb: 'the plus spins in beside the lock',
    parts: [null, null, spinStar([17, 18], { as: 'plus' })],
  },
  'square-lock-add-01': {
    verb: 'the shackle lifts, then the plus pops',
    parts: [null, shackle(), pop([17, 18], 1.3, { as: 'plus', delay: 0.28 })],
  },
  'square-lock-add-02': {
    verb: 'the plus badge turns a quarter beside the lock',
    parts: [lap([17, 18], 90, { as: 'badge', dur: 0.66 }), null, null],
  },
  'square-lock-check': {
    verb: 'the check draws beside the lock',
    parts: [draw({ as: 'check' }), null, null],
  },
  'square-lock-check-01': {
    verb: 'the shackle lifts, then the check pops',
    parts: [pop([18, 19], 1.3, { as: 'check', delay: 0.28 }), null, shackle([10, 5.5])],
  },
  'square-lock-check-02': {
    verb: 'the check badge stamps down beside the lock',
    parts: [null, null, stamp([17, 18], { as: 'badge' })],
  },
  'square-lock-minus': {
    verb: 'the minus wipes off beside the lock',
    parts: [draw({ as: 'minus' }), null, null],
  },
  'square-lock-minus-01': {
    verb: 'the shackle lifts, then the minus pinches in',
    parts: [flex('X', [17, 17], [17, 17], [1, 0.3, 1.08, 1, 1], { as: 'minus', delay: 0.28 }), null, shackle()],
  },
  'square-lock-minus-02': {
    verb: 'the minus badge flips beside the lock',
    parts: [flip([17, 18], 1, { as: 'badge' }), null, null],
  },
  'square-lock-password': {
    verb: 'the password dots appear one by one on the lock',
    parts: [null, null, pop([9.5, 15.5], 2, { as: 'dot' }), pop([14.5, 15.5], 2, { as: 'dot', delay: 0.14 })],
  },
  'square-lock-remove': {
    verb: 'the X twists beside the lock',
    parts: [lap([17.5, 18.5], 90, { as: 'x', dur: 0.6 }), null, null],
  },
  'square-lock-remove-01': {
    verb: 'the shackle lifts, then the X pops',
    parts: [pop([17.5, 18.5], 1.3, { as: 'x', delay: 0.28 }), null, shackle()],
  },
  'square-lock-remove-02': {
    verb: 'the X badge rattles beside the lock',
    parts: [shake([17, 18], { as: 'badge' }), null, null],
  },

  // --- letters, misc ---------------------------------------------------------------------------------
  'square-m': {
    verb: 'the M rewrites in the tile',
    parts: [null, line(0, { as: 'm', dur: 0.66 })],
  },
  'square-mouse-pointer': {
    verb: 'the pointer clicks into the corner of the tile',
    parts: [beat([11.5, 11.5], { delay: 0.2 }), { as: 'pointer', origin: [15.9, 15.9], transform: ['translate(0px, 0px) scale(1)', 'translate(-0.7px, -0.7px) scale(0.92)', 'translate(0.1px, 0.1px) scale(1.02)', 'translate(0px, 0px) scale(1)'], times: [0, 0.3, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.5 }],
  },
  'square-parking-off': {
    verb: 'the slash cuts across and the P dims',
    parts: [{ as: 'dim', opacity: [1, 0.25, 0.25, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, delay: 0.14 }, draw({ as: 'slash' }), null],
  },
  'square-power': {
    verb: 'the power stem presses down and the ring rewrites',
    parts: [null, line(0.12, { as: 'ring', dur: 0.6 }), ride([12, 9.5], out(0, 1.4), { as: 'stem' })],
  },
  'square-root-square': {
    verb: 'the radical rewrites in the tile',
    parts: [null, line(0, { as: 'radical', dur: 0.66 })],
  },
  'square-round-corner': {
    verb: 'the rounded corner rewrites as the frame nods',
    parts: [beat(C, { delay: 0.3 }), line(0, { as: 'corner', dur: 0.6 })],
  },
}

export default settleSpecs(specs)
