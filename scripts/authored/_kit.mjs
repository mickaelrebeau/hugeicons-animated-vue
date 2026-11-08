/**
 * Shared easings and recurring gestures for the authored pages.
 *
 * Files prefixed with `_` are helpers, not specs: build-authored-icons.mjs
 * skips them when it collects the pages.
 */

export const OUT = [0.23, 1, 0.32, 1]
export const INOUT = [0.77, 0, 0.175, 1]

/** Retracts a stroke to its end, then rewrites it from the start. */
export const sweep = (o = {}) => ({
  pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
  pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
  visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
  times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
  ease: ['linear', INOUT, 'linear', 'linear', 'linear', INOUT, 'linear'],
  dur: 0.82,
  ...o,
})

/** Wipes a stroke off and writes it back on in one direction — for slashes and marks. */
export const draw = (o = {}) => ({
  pathLength: [1, 0.001, 0.001, 1],
  visibility: ['visible', 'hidden', 'hidden', 'visible'],
  times: [0, 0.16, 0.24, 1],
  ease: ['linear', 'linear', OUT],
  dur: 0.66,
  ...o,
})

/** A mark that shrinks away and snaps back into place. */
export const stamp = (origin, o = {}) => ({
  as: 'mark',
  origin,
  transform: ['rotate(0deg) scale(1)', 'rotate(-12deg) scale(0.56)', 'rotate(4deg) scale(1.14)', 'rotate(0deg) scale(1)'],
  times: [0, 0.32, 0.68, 1],
  ease: OUT,
  dur: 0.5,
  ...o,
})

/** A sparkle catching the light. */
export const twinkle = (origin, o = {}) => ({
  as: 'spark',
  origin,
  transform: ['rotate(0deg) scale(1)', 'rotate(-26deg) scale(0.5)', 'rotate(9deg) scale(1.2)', 'rotate(0deg) scale(1)'],
  opacity: [1, 0.5, 1, 1],
  times: [0, 0.3, 0.66, 1],
  ease: OUT,
  dur: 0.62,
  ...o,
})

/** A four-point star turning onto its own axis of symmetry. */
export const spinStar = (origin, o = {}) => ({
  as: 'star',
  origin,
  transform: ['rotate(0deg) scale(1)', 'rotate(46deg) scale(0.66)', 'rotate(90deg) scale(1.12)', 'rotate(90deg) scale(1)'],
  times: [0, 0.36, 0.76, 1],
  ease: OUT,
  dur: 0.78,
  ...o,
})

/** A container acknowledging what just happened inside it. */
export const beat = (origin, o = {}) => ({
  as: 'frame',
  origin,
  transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
  times: [0, 0.3, 0.66, 1],
  ease: OUT,
  dur: 0.48,
  ...o,
})

/** A warning that rattles on its own footing. */
export const shake = (origin, o = {}) => ({
  as: 'frame',
  origin,
  transform: [
    'rotate(0deg) scale(1)',
    'rotate(-4deg) scale(0.97)',
    'rotate(3.2deg) scale(1.03)',
    'rotate(-1.2deg) scale(0.995)',
    'rotate(0deg) scale(1)',
  ],
  times: [0, 0.2, 0.46, 0.72, 1],
  ease: OUT,
  dur: 0.56,
  ...o,
})

/** A block arriving at an alignment edge: pull away, then snap onto it. */
export const arrive = (origin, dx, dy, o = {}) => ({
  as: 'block',
  origin,
  transform: [
    'translate(0px, 0px)',
    `translate(${dx}px, ${dy}px)`,
    `translate(${-dx * 0.14}px, ${-dy * 0.14}px)`,
    'translate(0px, 0px)',
  ],
  times: [0, 0.12, 0.62, 1],
  ease: [OUT, OUT, OUT],
  dur: 0.54,
  ...o,
})

/** Travel along a named axis, then settle — same beat as arrow-down-02. */
export const nudge = (origin, dx, dy, o = {}) => ({
  as: 'arrow',
  origin,
  transform: [
    'translate(0px, 0px)',
    `translate(${dx}px, ${dy}px)`,
    `translate(${-dx * 0.12}px, ${-dy * 0.12}px)`,
    'translate(0px, 0px)',
  ],
  times: [0, 0.44, 0.72, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  ...o,
})

/** A bar that grows from a named origin. */
export const grow = (origin, axis, o = {}) => ({
  as: 'bar',
  origin,
  transform: [`scale${axis}(1)`, `scale${axis}(0.22)`, `scale${axis}(1.08)`, `scale${axis}(1)`],
  times: [0, 0.14, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.58,
  ...o,
})

export const T5 = [0, 0.18, 0.46, 0.74, 1]
export const E5 = [INOUT, OUT, OUT, OUT]
export const HOLD_T = [0, 0.26, 0.72, 1]
export const HOLD_E = [INOUT, OUT, OUT]

/**
 * Rigid rotation around `pivot`. motion-v overwrites transform-origin to the
 * part's own fill-box, so each keyframe also translates the part's center.
 */
export const around = (pivot, center, degrees, o = {}) => {
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
export const retrace = (o = {}) => ({
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
export const scaleFrom = (axis, pivot, center, scales, o = {}) => {
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
export const hold = (origin, dx, dy, o = {}) => ({
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
export const scaleHold = (origin, s, o = {}) => ({
  origin,
  transform: ['scale(1)', `scale(${s})`, `scale(${s})`, 'scale(1)'],
  times: HOLD_T,
  ease: HOLD_E,
  dur: 0.66,
  ...o,
})

/** A processor working through a short computation. */
export const compute = (origin, o = {}) => ({
  as: 'chip',
  origin,
  transform: ['scale(1)', 'scale(0.88)', 'scale(1.07)', 'scale(1)'],
  opacity: [1, 0.62, 1, 1],
  times: [0, 0.3, 0.66, 1],
  ease: OUT,
  dur: 0.56,
  ...o,
})

// ---------------------------------------------------------------------------
// Props and rigs promoted from page 14. Extras (`burst`, `glint`, `trail`,
// `puff`) rest at opacity 0 and end at 0.

export const r2 = (n) => Math.round(n * 100) / 100

/** Radial tick marks around a point — the d string for a flash or a glow. */
export const rays = (cx, cy, r0, r1, n = 8, start = 0) => {
  let d = ''
  for (let i = 0; i < n; i += 1) {
    const a = ((start + (360 / n) * i) * Math.PI) / 180
    const c = Math.cos(a)
    const s = Math.sin(a)
    d += `M${r2(cx + c * r0)} ${r2(cy + s * r0)}L${r2(cx + c * r1)} ${r2(cy + s * r1)}`
  }
  return d
}

/** A burst that blooms out of a point and fades. Symmetric, so it scales from its own center. */
export const burst = (d, o = {}) => ({
  as: 'burst',
  tag: 'path',
  attrs: { d, strokeWidth: '1.2' },
  transform: ['scale(0.4)', 'scale(0.4)', 'scale(1)', 'scale(1.22)'],
  opacity: [0, 0, 1, 0],
  times: [0, 0.3, 0.46, 1],
  ease: ['linear', OUT, OUT],
  dur: 0.7,
  ...o,
})

/** A small four-point glint that twinkles in and out. */
export const glint = (cx, cy, r = 1.1, o = {}) => ({
  as: 'glint',
  tag: 'path',
  attrs: { d: `M${cx} ${r2(cy - r)}V${r2(cy + r)}M${r2(cx - r)} ${cy}H${r2(cx + r)}`, strokeWidth: '1.1' },
  transform: ['rotate(0deg) scale(0.2)', 'rotate(0deg) scale(0.2)', 'rotate(45deg) scale(1.1)', 'rotate(90deg) scale(0.2)'],
  opacity: [0, 0, 1, 0],
  times: [0, 0.3, 0.6, 1],
  ease: ['linear', OUT, INOUT],
  dur: 0.8,
  ...o,
})

/** Short strokes trailing behind something that moves. */
export const trail = (d, dx, o = {}) => ({
  as: 'trail',
  tag: 'path',
  attrs: { d, strokeWidth: '1.2' },
  transform: ['translateX(0px)', 'translateX(0px)', `translateX(${dx * 0.4}px)`, `translateX(${dx}px)`],
  opacity: [0, 0, 1, 0],
  times: [0, 0.2, 0.46, 0.86],
  ease: ['linear', OUT, OUT],
  dur: 0.7,
  ...o,
})

/** A puff that drifts away and dissolves. */
export const puff = (cx, cy, r, dx, dy, o = {}) => ({
  as: 'puff',
  tag: 'circle',
  attrs: { cx: String(cx), cy: String(cy), r: String(r), strokeWidth: '1.1' },
  transform: ['translate(0px, 0px) scale(0.4)', 'translate(0px, 0px) scale(0.4)', `translate(${dx * 0.5}px, ${dy * 0.5}px) scale(1)`, `translate(${dx}px, ${dy}px) scale(1.5)`],
  opacity: [0, 0, 0.9, 0],
  times: [0, 0.16, 0.42, 1],
  ease: ['linear', OUT, OUT],
  dur: 0.8,
  ...o,
})

/** An indicator light that blinks. */
export const blink = (o = {}) => ({
  as: 'led',
  opacity: [1, 0.12, 1, 0.12, 1],
  times: [0, 0.2, 0.4, 0.6, 0.8],
  ease: 'linear',
  dur: 0.8,
  ...o,
})

/** A small light that pops bigger and back. */
export const glow = (origin, s = 2.4, o = {}) => ({
  as: 'light',
  origin,
  transform: ['scale(1)', `scale(${s})`, 'scale(1)'],
  times: [0, 0.36, 1],
  ease: [OUT, INOUT],
  dur: 0.5,
  ...o,
})

/** Uniform translate keyframes for parts that ride together. */
export const ride = (origin, keys, o = {}) => ({
  as: 'ride',
  origin,
  transform: keys.map(([x, y]) => `translate(${x}px, ${y}px)`),
  times: T5,
  ease: E5,
  dur: 0.62,
  ...o,
})

/** A parts list where one rig of parts swings around a shared pivot. */
export const swing = (pivot, center, degrees, o = {}) => ({ ...around(pivot, center, degrees), as: 'swing', ...o })

/** Some tracks finish early; hold their last value so every `times` ends at 1. */
const TRACKS = ['transform', 'opacity', 'pathLength', 'pathOffset', 'visibility']
const settle = (part) => {
  if (!part?.times || part.times.at(-1) === 1) return part
  const out = { ...part, times: [...part.times, 1] }
  for (const k of TRACKS) if (out[k]) out[k] = [...out[k], out[k].at(-1)]
  if (Array.isArray(out.ease) && !(typeof out.ease[0] === 'number')) out.ease = [...out.ease, 'linear']
  return out
}

/** Pads every part, extra and wrap so its `times` ends at 1. */
export const settleSpecs = (specs) =>
  Object.fromEntries(
    Object.entries(specs).map(([name, spec]) => [
      name,
      { ...spec, parts: spec.parts.map(settle), extras: spec.extras?.map(settle), wrap: settle(spec.wrap) },
    ]),
  )

// ---------------------------------------------------------------------------
// Promoted from page 15.

/** Grow along one axis from a planted pivot: dip, overshoot, settle. */
export const rise = (axis, pivot, center, o = {}) => ({
  ...scaleFrom(axis, pivot, center, [1, 0.2, 1.08, 1], { times: [0, 0.16, 0.62, 1], ease: [INOUT, OUT, OUT], dur: 0.6 }),
  as: 'bar',
  ...o,
})

/** Scale on one axis from a pivot through a custom set of five keys. */
export const flex = (axis, pivot, center, scales, o = {}) => ({
  ...scaleFrom(axis, pivot, center, scales, { times: T5, ease: E5, dur: 0.7 }),
  as: 'flex',
  ...o,
})

/** Pop a small mark in place. */
export const pop = (origin, s = 1.5, o = {}) => ({
  as: 'pop',
  origin,
  transform: ['scale(1)', `scale(${s})`, 'scale(0.92)', 'scale(1)'],
  times: [0, 0.34, 0.66, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  ...o,
})

/** A coin or medal flipping on its vertical axis. */
export const flip = (origin, turns = 1, o = {}) => {
  const keys = ['scaleX(1)']
  for (let i = 0; i < turns; i += 1) keys.push('scaleX(0.06)', 'scaleX(1)')
  const n = keys.length
  return {
    as: 'coin',
    origin,
    transform: keys,
    times: keys.map((_, i) => Math.round((i / (n - 1)) * 100) / 100),
    ease: INOUT,
    dur: 0.36 * turns + 0.2,
    ...o,
  }
}

/** A full turn that lands on the rest pose. */
export const lap = (origin, deg = 360, o = {}) => ({
  as: 'lap',
  origin,
  transform: ['rotate(0deg)', `rotate(${deg * 0.2}deg)`, `rotate(${deg * 0.7}deg)`, `rotate(${deg * 1.03}deg)`, `rotate(${deg}deg)`],
  times: [0, 0.2, 0.6, 0.86, 1],
  ease: [INOUT, 'linear', OUT, OUT],
  dur: 0.86,
  ...o,
})

/** A signal arc lighting up in its turn. */
export const wave = (origin, o = {}) => ({
  as: 'wave',
  origin,
  transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
  opacity: [1, 0.15, 1, 1],
  times: [0, 0.24, 0.56, 1],
  ease: OUT,
  dur: 0.62,
  ...o,
})

/** Fade out and back, without moving. */
export const dim = (o = {}) => ({ as: 'dim', opacity: [1, 0.2, 0.2, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.8, ...o })

// ---------------------------------------------------------------------------
// Promoted from page 16.

/** Hop up and land. */
export const hop = (origin, h = 1.4, o = {}) =>
  ride(origin, [[0, 0], [0, -h], [0, h * 0.14], [0, 0], [0, 0]], { as: 'hop', times: [0, 0.32, 0.62, 0.86, 1], dur: 0.56, ...o })

// ---------------------------------------------------------------------------
// Promoted from pages 17 and 19.

/** Uniform scale that keeps `pivot` planted (fill-box compensated). */
export const swell = (pivot, center, scales, o = {}) => {
  const [px, py] = pivot
  const [cx, cy] = center
  return {
    as: 'swell',
    origin: center,
    transform: scales.map((s) => `translate(${((px - cx) * (1 - s)).toFixed(2)}px, ${((py - cy) * (1 - s)).toFixed(2)}px) scale(${s})`),
    times: T5,
    ease: E5,
    dur: 0.7,
    ...o,
  }
}

/** Weather leaving through the bottom and coming back from above. */
export const fall = (origin, dx, dy, o = {}) => ({
  as: 'fall',
  origin,
  transform: ['translate(0px, 0px)', `translate(${dx}px, ${dy}px)`, `translate(${-dx}px, ${-dy}px)`, 'translate(0px, 0px)'],
  opacity: [1, 0, 0, 1],
  times: [0, 0.4, 0.42, 1],
  ease: ['easeIn', 'linear', OUT],
  dur: 0.7,
  ...o,
})

// ---------------------------------------------------------------------------
// Promoted from page 22.

/** The hand pointer taps down. */
export const tap = (origin, o = {}) => ({
  as: 'hand',
  origin,
  transform: ['translateY(0px) scale(1)', 'translateY(1px) scale(0.94)', 'translateY(-0.2px) scale(1.02)', 'translateY(0px) scale(1)'],
  times: [0, 0.3, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  ...o,
})

/** The arrow pointer clicks toward its tip (upper-left). */
export const point = (origin, o = {}) => ({
  as: 'pointer',
  origin,
  transform: ['translate(0px, 0px) scale(1)', 'translate(-0.7px, -0.7px) scale(0.92)', 'translate(0.1px, 0.1px) scale(1.02)', 'translate(0px, 0px) scale(1)'],
  times: [0, 0.3, 0.62, 1],
  ease: [INOUT, OUT, OUT],
  dur: 0.5,
  ...o,
})

// ---------------------------------------------------------------------------
// Promoted from page 34 (pointing hands) for pages 52–53.

export const DIR = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }

/** The pointing-hand family: c is the hand centre, d a DIR unit vector. */
export const hand = {
  poke: (c, [x, y], o = {}) => ride(c, [[0, 0], [x * 1.6, y * 1.6], [0, 0], [x * 1.1, y * 1.1], [0, 0]], { as: 'hand', times: [0, 0.22, 0.44, 0.66, 1], ease: 'easeInOut', dur: 0.66, ...o }),
  nudge: (c, [x, y], o = {}) => nudge(c, x * 2, y * 2, { as: 'hand', ...o }),
  wag: (c, [x, y], o = {}) => around([c[0] - x * 8, c[1] - y * 8], c, [0, 8, -6, 3, 0], { as: 'hand', dur: 0.66, ...o }),
  thrust: (c, [x, y], o = {}) => ride(c, [[0, 0], [-x * 0.8, -y * 0.8], [x * 2, y * 2], [x * -0.2, y * -0.2], [0, 0]], { as: 'hand', times: [0, 0.3, 0.5, 0.76, 1], ease: ['easeOut', 'easeIn', 'easeOut', 'easeInOut'], dur: 0.66, ...o }),
  hold: (c, [x, y], o = {}) => hold(c, x * 1.8, y * 1.8, { as: 'hand', ...o }),
}
