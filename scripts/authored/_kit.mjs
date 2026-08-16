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
