/**
 * Page 5 — arrow-down-one-zero → arrow-vertical.
 *
 * Every icon is choreographed against its own name, geometry and direction.
 * `parts` is positional: one entry per SVG primitive, `null` keeps it static.
 * Six handcrafted arrows are deliberately absent:
 * arrow-down-right-01, arrow-left-02, arrow-right-02,
 * arrow-up-02, arrow-up-left-01, arrow-up-right-01.
 */

import { OUT, INOUT, grow, nudge, stamp, sweep } from './_kit.mjs'

/** Same directional squash as the handcrafted -02 arrows. */
const squash = (origin, dx, dy, o = {}) => {
  const axis = Math.abs(dx) >= Math.abs(dy) ? 'scaleY' : 'scaleX'
  return nudge(origin, dx, dy, {
    transform: [
      `translate(0px, 0px) ${axis}(1)`,
      `translate(${dx}px, ${dy}px) ${axis}(0.94)`,
      `translate(${-dx * 0.12}px, ${-dy * 0.12}px) ${axis}(1.02)`,
      `translate(0px, 0px) ${axis}(1)`,
    ],
    ...o,
  })
}

export default {
  'arrow-down-one-zero': {
    verb: 'the arrow drops, then 1 sits above 0 in the new descending order',
    parts: [
      nudge([8, 11.5], 0, 2.4, { as: 'shaft' }),
      { as: 'oneBar', origin: [18, 10], transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.5, delay: 0.1 },
      { as: 'zero', origin: [18, 17], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.18 },
      { as: 'oneStem', origin: [17, 6.9], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.12 },
      nudge([8, 18], 0, 2.6, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-down-right-02': {
    verb: 'the filled head leads down-right, the shaft following along the same diagonal',
    parts: [
      nudge([9.5, 9.5], 2.1, 2.1, { as: 'shaft', delay: 0.04 }),
      nudge([14.4, 14.4], 2.1, 2.1, { as: 'head' }),
    ],
  },
  'arrow-down-right': {
    verb: 'the fused arrow travels down-right and settles — same diagonal as arrow-down-right-01',
    parts: [squash([12.2, 12.2], 2.1, 2.1)],
  },
  'arrow-down-to-dot': {
    verb: 'the arrow drops onto the dot, which answers with a pulse',
    parts: [
      nudge([12, 12.5], 0, 2.2, { as: 'head' }),
      { as: 'shaft', origin: [12, 3], transform: ['translateY(0px) scaleY(1)', 'translateY(1.6px) scaleY(0.86)', 'translateY(-0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54, delay: 0.04 },
      stamp([12, 20], { as: 'dot', delay: 0.18, dur: 0.46 }),
    ],
  },
  'arrow-down-to-line': {
    verb: 'the arrow drops onto the baseline, which takes the weight',
    parts: [
      { as: 'shaft', origin: [12, 3], transform: ['translateY(0px) scaleY(1)', 'translateY(1.6px) scaleY(0.86)', 'translateY(-0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54 },
      { as: 'line', origin: [12, 21], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([12, 14.5], 0, 2.4, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-down-wide-narrow': {
    verb: 'the three rows shrink top to bottom from wide to narrow, while the arrow drops past them',
    parts: [
      nudge([7, 11.5], 0, 2.4, { as: 'shaft' }),
      grow([11, 4], 'X', { as: 'wide' }),
      grow([11, 8], 'X', { as: 'mid', delay: 0.08 }),
      grow([11, 12], 'X', { as: 'narrow', delay: 0.16 }),
      nudge([7, 18], 0, 2.6, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-down-za': {
    verb: 'the arrow drops first, then Z sits above A in the reverse order',
    parts: [
      nudge([7.8, 11.5], 0, 2.4, { as: 'shaft' }),
      nudge([7.8, 18], 0, 2.6, { as: 'head', delay: 0.04 }),
      { as: 'letterA', origin: [17.8, 17.2], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.16 },
      { as: 'letterZ', origin: [17.8, 7], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.1 },
    ],
  },
  'arrow-down-zero-one': {
    verb: 'the arrow drops, then 0 sits above 1 — ascending digits under a down sort',
    parts: [
      nudge([8, 18], 0, 2.6, { as: 'head' }),
      nudge([8, 11.5], 0, 2.4, { as: 'shaft', delay: 0.04 }),
      { as: 'oneStem', origin: [17, 16.9], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.16 },
      { as: 'oneBar', origin: [18, 20], transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.5, delay: 0.2 },
      { as: 'zero', origin: [18, 7], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.1 },
    ],
  },
  'arrow-down': {
    verb: 'the chevron drops and squashes — head-only cousin of arrow-down-02',
    parts: [squash([12, 12], 0, 2.6)],
  },
  'arrow-expand-01': {
    verb: 'the two corners fly apart on the diagonal, top-right first',
    parts: [
      nudge([17.4, 6.6], 2.2, -2.2, { as: 'cornerTR' }),
      nudge([6.6, 17.4], -2.2, 2.2, { as: 'cornerBL', delay: 0.08 }),
    ],
  },
  'arrow-expand-02': {
    verb: 'both opposite corners fly out at once — the fused expand',
    parts: [squash([12, 12], 0, 0, {
      transform: [
        'scale(1)',
        'scale(1.16)',
        'scale(0.98)',
        'scale(1)',
      ],
      times: [0, 0.42, 0.74, 1],
    })],
  },
  'arrow-expand-diagonal-01': {
    verb: 'the shaft holds the axis, then both corner heads fire outward along it',
    parts: [
      { as: 'shaft', ...sweep({ dur: 0.7 }) },
      nudge([19.1, 4.9], 1.8, -1.8, { as: 'handleTR', delay: 0.06 }),
      nudge([4.9, 19.1], -1.8, 1.8, { as: 'handleBL', delay: 0.14 }),
      nudge([17.7, 6.3], 1.8, -1.8, { as: 'headTR', delay: 0.08 }),
      nudge([6.3, 17.7], -1.8, 1.8, { as: 'headBL', delay: 0.16 }),
    ],
  },
  'arrow-expand-diagonal-02': {
    verb: 'the fused diagonals stretch to the two far corners at once',
    parts: [{
      as: 'diagonals',
      origin: [12, 12],
      transform: ['scale(1)', 'scale(1.14)', 'scale(0.98)', 'scale(1)'],
      times: [0, 0.42, 0.74, 1],
      ease: OUT,
      dur: 0.58,
    }],
  },
  'arrow-expand-diagonal': {
    verb: 'both corner heads fire first, then the shaft redraws between them',
    parts: [
      { as: 'shaft', ...sweep({ dur: 0.7, delay: 0.12 }) },
      nudge([19.1, 4.9], 1.8, -1.8, { as: 'handleTR' }),
      nudge([4.9, 19.1], -1.8, 1.8, { as: 'handleBL', delay: 0.08 }),
      nudge([17.7, 6.3], 1.8, -1.8, { as: 'headTR', delay: 0.02 }),
      nudge([6.3, 17.7], -1.8, 1.8, { as: 'headBL', delay: 0.1 }),
    ],
  },
  'arrow-expand': {
    verb: 'the four corners fire outward in compass order, handles then heads',
    parts: [
      nudge([5.4, 5.4], -1.8, -1.8, { as: 'handleTL' }),
      nudge([5.4, 18.6], -1.8, 1.8, { as: 'handleBL', delay: 0.12 }),
      nudge([18.6, 5.4], 1.8, -1.8, { as: 'handleTR', delay: 0.06 }),
      nudge([18.6, 18.6], 1.8, 1.8, { as: 'handleBR', delay: 0.18 }),
      nudge([17, 7], 1.8, -1.8, { as: 'headTR', delay: 0.08 }),
      nudge([6.8, 17.2], -1.8, 1.8, { as: 'headBL', delay: 0.14 }),
      nudge([6.9, 6.9], -1.8, -1.8, { as: 'headTL', delay: 0.02 }),
      nudge([17.3, 17.3], 1.8, 1.8, { as: 'headBR', delay: 0.2 }),
    ],
  },
  'arrow-horizontal': {
    verb: 'the two heads pull the bar apart, then it springs back to length',
    parts: [
      nudge([3.5, 12], -2.2, 0, { as: 'headLeft' }),
      nudge([20.5, 12], 2.2, 0, { as: 'headRight', delay: 0.06 }),
      { as: 'bar', origin: [12.1, 12], transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.97)', 'scaleX(1)'], times: [0, 0.42, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.04 },
    ],
  },
  'arrow-left-01': {
    verb: 'the chevron slides left and squashes — head-only cousin of arrow-left-02',
    parts: [squash([12, 12], -2.6, 0)],
  },
  'arrow-left-03': {
    verb: 'the shaft and head slide left toward the end-line, which holds them',
    parts: [
      { as: 'line', origin: [4, 12], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.12 },
      nudge([14, 12], -2.2, 0, { as: 'shaft' }),
      nudge([10, 12], -2.4, 0, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-left-04': {
    verb: 'the filled head leads left, the shaft following a beat later',
    parts: [
      { as: 'shaft', origin: [20, 12], transform: ['translateX(0px) scaleX(1)', 'translateX(-1.6px) scaleX(0.86)', 'translateX(0.2px) scaleX(1.04)', 'translateX(0px) scaleX(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54, delay: 0.06 },
      nudge([7, 12], -2.4, 0, { as: 'head' }),
    ],
  },
  'arrow-left-05': {
    verb: 'the filled body slides onto the end-line, which takes the weight',
    parts: [
      { as: 'line', origin: [4, 12], transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([13.5, 12], -2.4, 0, { as: 'body' }),
    ],
  },
  'arrow-left-big': {
    verb: 'the whole filled arrow slides left and squashes, same beat as arrow-left-02',
    parts: [squash([12, 12], -2.6, 0)],
  },
  'arrow-left-double': {
    verb: 'the right chevron slides first, then the left one follows a step behind',
    parts: [
      nudge([8.5, 12], -2.2, 0, { as: 'lead', delay: 0.1 }),
      nudge([15.5, 12], -2.2, 0, { as: 'trail' }),
    ],
  },
  'arrow-left-from-line': {
    verb: 'the arrow leaves the right line and slides left, the line holding its place',
    parts: [
      nudge([10, 12], -2.4, 0, { as: 'shaft' }),
      nudge([6.5, 12], -2.6, 0, { as: 'head', delay: 0.04 }),
      { as: 'line', origin: [20, 12], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
    ],
  },
  'arrow-left-right': {
    verb: 'the bottom lane runs right, the top lane runs left — two opposite packets',
    parts: [
      nudge([12, 17], 2.4, 0, { as: 'shaftRight', delay: 0.06 }),
      nudge([18.5, 17], 2.6, 0, { as: 'headRight', delay: 0.08 }),
      nudge([12.5, 7], -2.4, 0, { as: 'shaftLeft' }),
      nudge([5.5, 7], -2.6, 0, { as: 'headLeft', delay: 0.04 }),
    ],
  },
  'arrow-left-to-line': {
    verb: 'the arrow slides onto the left line, which takes the weight',
    parts: [
      nudge([14.5, 12], -2.4, 0, { as: 'shaft' }),
      { as: 'line', origin: [3, 12], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([9.5, 12], -2.6, 0, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-left': {
    verb: 'the chevron slides left and squashes — same mark as arrow-left-01',
    parts: [squash([12, 12], -2.6, 0, { dur: 0.54 })],
  },
  'arrow-move-down-left': {
    verb: 'the path corners down-left, then the head plants at the end of the turn',
    parts: [
      { as: 'path', origin: [12.5, 10.5], transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      nudge([5.5, 18], -1.6, 1.8, { as: 'head', delay: 0.1 }),
    ],
  },
  'arrow-move-down-right': {
    verb: 'the path corners down-right, then the head plants at the end of the turn',
    parts: [
      { as: 'path', origin: [11.5, 10.5], transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      nudge([18.5, 18], 1.6, 1.8, { as: 'head', delay: 0.1 }),
    ],
  },
  'arrow-move-left-down': {
    verb: 'the path runs left then down, the start-head leaving and the end-head arriving',
    parts: [
      { as: 'path', origin: [10.5, 13], transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      nudge([4.5, 5], -1.8, 0, { as: 'start' }),
      nudge([18, 20.5], 0, 1.8, { as: 'end', delay: 0.12 }),
    ],
  },
  'arrow-move-right-down': {
    verb: 'the path runs right then down, the start-head leaving and the end-head arriving',
    parts: [
      { as: 'path', origin: [13, 13], transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      nudge([19.5, 5], 1.8, 0, { as: 'start' }),
      nudge([6, 20.5], 0, 1.8, { as: 'end', delay: 0.12 }),
    ],
  },
  'arrow-move-up-left': {
    verb: 'the path corners up-left, then the head plants at the end of the turn',
    parts: [
      { as: 'path', origin: [12.5, 13.5], transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      nudge([5.5, 6], -1.6, -1.8, { as: 'head', delay: 0.1 }),
    ],
  },
  'arrow-move-up-right': {
    verb: 'the path corners up-right, then the head plants at the end of the turn',
    parts: [
      { as: 'path', origin: [11.5, 13.5], transform: ['scale(1)', 'scale(0.94)', 'scale(1.02)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      nudge([18.5, 6], 1.6, -1.8, { as: 'head', delay: 0.1 }),
    ],
  },
  'arrow-reload-horizontal': {
    verb: 'the top arc runs right, the bottom arc runs left, heads chasing their own loops',
    parts: [
      { as: 'arcTop', ...sweep({ dur: 0.82 }) },
      { as: 'arcBottom', ...sweep({ dur: 0.82, delay: 0.1 }) },
      nudge([19.8, 5.5], 1.4, 0, { as: 'headTop', delay: 0.06 }),
      nudge([4.2, 18.5], -1.4, 0, { as: 'headBottom', delay: 0.16 }),
    ],
  },
  'arrow-reload-vertical': {
    verb: 'the left arc drops, the right arc climbs, heads chasing their own loops',
    parts: [
      { as: 'arcLeft', ...sweep({ dur: 0.82 }) },
      { as: 'arcRight', ...sweep({ dur: 0.82, delay: 0.1 }) },
      nudge([18.5, 19.3], 0, 1.4, { as: 'headBottom', delay: 0.06 }),
      nudge([5.5, 4.3], 0, -1.4, { as: 'headTop', delay: 0.16 }),
    ],
  },
  'arrow-right-01': {
    verb: 'the chevron slides right and squashes — head-only cousin of arrow-right-02',
    parts: [squash([12, 12], 2.6, 0)],
  },
  'arrow-right-03': {
    verb: 'the shaft and head slide right toward the end-line, which holds them',
    parts: [
      { as: 'line', origin: [20, 12], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.12 },
      nudge([10, 12], 2.2, 0, { as: 'shaft' }),
      nudge([14, 12], 2.4, 0, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-right-04': {
    verb: 'the filled head leads right, the shaft following a beat later',
    parts: [
      { as: 'shaft', origin: [4, 12], transform: ['translateX(0px) scaleX(1)', 'translateX(1.6px) scaleX(0.86)', 'translateX(-0.2px) scaleX(1.04)', 'translateX(0px) scaleX(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54, delay: 0.06 },
      nudge([17, 12], 2.4, 0, { as: 'head' }),
    ],
  },
  'arrow-right-05': {
    verb: 'the filled body slides onto the end-line, which takes the weight',
    parts: [
      { as: 'line', origin: [20, 12], transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([10.5, 12], 2.4, 0, { as: 'body' }),
    ],
  },
  'arrow-right-big': {
    verb: 'the whole filled arrow slides right and squashes, same beat as arrow-right-02',
    parts: [squash([12, 12], 2.6, 0)],
  },
  'arrow-right-double': {
    verb: 'the left chevron slides first, then the right one follows a step behind',
    parts: [
      nudge([15.5, 12], 2.2, 0, { as: 'lead', delay: 0.1 }),
      nudge([8.5, 12], 2.2, 0, { as: 'trail' }),
    ],
  },
  'arrow-right-from-line': {
    verb: 'the arrow leaves the left line and slides right, the line holding its place',
    parts: [
      nudge([14, 12], 2.4, 0, { as: 'shaft' }),
      nudge([17.5, 12], 2.6, 0, { as: 'head', delay: 0.04 }),
      { as: 'line', origin: [4, 12], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
    ],
  },
  'arrow-right-to-line': {
    verb: 'the filled arrow slides onto the right line, which takes the weight',
    parts: [
      { as: 'line', origin: [21, 12], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([10, 12], 2.4, 0, { as: 'body' }),
    ],
  },
  'arrow-right': {
    verb: 'the chevron slides right and squashes — same mark as arrow-right-01',
    parts: [squash([12, 12], 2.6, 0, { dur: 0.54 })],
  },
  'arrow-shrink-01': {
    verb: 'the two corners pull in along the down-right diagonal',
    parts: [{
      as: 'corners',
      origin: [12, 12],
      transform: ['scale(1)', 'scale(0.86)', 'scale(1.04)', 'scale(1)'],
      times: [0, 0.42, 0.74, 1],
      ease: OUT,
      dur: 0.58,
    }],
  },
  'arrow-shrink-02': {
    verb: 'the two corners pull in along the up-right diagonal — the other shrink',
    parts: [{
      as: 'corners',
      origin: [12, 12],
      transform: ['scale(1)', 'scale(0.86) rotate(2deg)', 'scale(1.04) rotate(-0.6deg)', 'scale(1) rotate(0deg)'],
      times: [0, 0.42, 0.74, 1],
      ease: OUT,
      dur: 0.58,
    }],
  },
  'arrow-shrink': {
    verb: 'the four corners pull inward toward the centre, opposite of expand',
    parts: [
      nudge([17.4, 17.4], -1.6, -1.6, { as: 'br' }),
      nudge([6.6, 17.4], 1.6, -1.6, { as: 'bl', delay: 0.06 }),
      nudge([6.6, 6.6], 1.6, 1.6, { as: 'tl', delay: 0.12 }),
      nudge([17.4, 6.6], -1.6, 1.6, { as: 'tr', delay: 0.18 }),
    ],
  },
  'arrow-turn-backward': {
    verb: 'the path curls back to the left, then the head completes the U-turn',
    parts: [
      { as: 'path', ...sweep({ dur: 0.78 }) },
      nudge([5.5, 15], -1.8, 1.4, { as: 'head', delay: 0.16 }),
    ],
  },
  'arrow-turn-down': {
    verb: 'the path curls down, then the head completes the turn at the bottom',
    parts: [
      { as: 'path', ...sweep({ dur: 0.78 }) },
      nudge([15, 18.5], 1.4, 1.8, { as: 'head', delay: 0.16 }),
    ],
  },
  'arrow-turn-forward': {
    verb: 'the path curls forward to the right, then the head completes the U-turn',
    parts: [
      { as: 'path', ...sweep({ dur: 0.78 }) },
      nudge([18.5, 15], 1.8, 1.4, { as: 'head', delay: 0.16 }),
    ],
  },
  'arrow-turn-up': {
    verb: 'the path curls up, then the head completes the turn at the top',
    parts: [
      { as: 'path', ...sweep({ dur: 0.78 }) },
      nudge([15, 5.5], 1.4, -1.8, { as: 'head', delay: 0.16 }),
    ],
  },
  'arrow-up-01': {
    verb: 'the chevron lifts and squashes — head-only cousin of arrow-up-02',
    parts: [squash([12, 12], 0, -2.6)],
  },
  'arrow-up-03': {
    verb: 'the shaft and head lift toward the top line, which holds them',
    parts: [
      { as: 'line', origin: [12, 4], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.12 },
      nudge([12, 14], 0, -2.2, { as: 'shaft' }),
      nudge([12, 10], 0, -2.4, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-up-04': {
    verb: 'the filled head leads the lift, the shaft following a beat later',
    parts: [
      { as: 'shaft', origin: [12, 20], transform: ['translateY(0px) scaleY(1)', 'translateY(-1.6px) scaleY(0.86)', 'translateY(0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54, delay: 0.06 },
      nudge([12, 7], 0, -2.4, { as: 'head' }),
    ],
  },
  'arrow-up-05': {
    verb: 'the filled body lifts onto the top line, which takes the weight',
    parts: [
      { as: 'line', origin: [12, 4], transform: ['scaleX(1)', 'scaleX(0.72)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([12, 13.5], 0, -2.4, { as: 'body' }),
    ],
  },
  'arrow-up-az': {
    verb: 'the arrow lifts first, then A sits above Z in the new ascending order',
    parts: [
      nudge([7.8, 12.5], 0, -2.4, { as: 'shaft' }),
      nudge([7.8, 6], 0, -2.6, { as: 'head', delay: 0.04 }),
      { as: 'letterA', origin: [17.8, 7], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.1 },
      { as: 'letterZ', origin: [17.8, 17], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.16 },
    ],
  },
  'arrow-up-big': {
    verb: 'the whole filled arrow lifts and squashes, same beat as arrow-up-02',
    parts: [squash([12, 12], 0, -2.6)],
  },
  'arrow-up-double': {
    verb: 'the lower chevron lifts first, then the upper one follows a step ahead',
    parts: [
      nudge([12, 8.5], 0, -2.2, { as: 'lead', delay: 0.1 }),
      nudge([12, 15.5], 0, -2.2, { as: 'trail' }),
    ],
  },
  'arrow-up-down': {
    verb: 'the left lane climbs, the right lane drops — two opposite packets',
    parts: [
      nudge([7, 12], 0, -2.4, { as: 'shaftUp' }),
      nudge([17, 11.5], 0, 2.4, { as: 'shaftDown', delay: 0.06 }),
      nudge([7, 5.5], 0, -2.6, { as: 'headUp', delay: 0.04 }),
      nudge([17, 18.5], 0, 2.6, { as: 'headDown', delay: 0.1 }),
    ],
  },
  'arrow-up-from-dot': {
    verb: 'the arrow lifts off the dot, which answers with a pulse',
    parts: [
      { as: 'shaft', origin: [12, 15], transform: ['translateY(0px) scaleY(1)', 'translateY(-1.6px) scaleY(0.86)', 'translateY(0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54 },
      stamp([12, 20], { as: 'dot', delay: 0.04, dur: 0.46 }),
      nudge([12, 5.5], 0, -2.4, { as: 'head', delay: 0.06 }),
    ],
  },
  'arrow-up-from-line': {
    verb: 'both arrows lift off the shared baseline, left then right',
    parts: [
      nudge([7, 10.3], 0, -2.4, { as: 'shaftLeft' }),
      nudge([17, 10.3], 0, -2.4, { as: 'shaftRight', delay: 0.08 }),
      { as: 'line', origin: [12, 21], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48 },
      nudge([7, 4.5], 0, -2.6, { as: 'headLeft', delay: 0.04 }),
      nudge([17, 4.5], 0, -2.6, { as: 'headRight', delay: 0.12 }),
    ],
  },
  'arrow-up-left-02': {
    verb: 'the filled head leads up-left, the shaft following along the same diagonal',
    parts: [
      nudge([14.5, 14.5], -2.1, -2.1, { as: 'shaft', delay: 0.04 }),
      nudge([9.6, 9.6], -2.1, -2.1, { as: 'head' }),
    ],
  },
  'arrow-up-left': {
    verb: 'the fused arrow travels up-left and settles — same diagonal as arrow-up-left-01',
    parts: [squash([11.8, 11.8], -2.1, -2.1)],
  },
  'arrow-up-narrow-wide': {
    verb: 'the three rows grow bottom to top from narrow to wide, while the arrow lifts past them',
    parts: [
      grow([11, 20], 'X', { as: 'wide', delay: 0.16 }),
      grow([11, 16], 'X', { as: 'mid', delay: 0.08 }),
      grow([11, 12], 'X', { as: 'narrow' }),
      nudge([7, 6], 0, -2.6, { as: 'head', delay: 0.04 }),
      nudge([7, 12.5], 0, -2.4, { as: 'shaft' }),
    ],
  },
  'arrow-up-one-zero': {
    verb: 'the arrow lifts, then 1 sits above 0 in the new ascending order',
    parts: [
      { as: 'oneBar', origin: [18, 10], transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.5, delay: 0.1 },
      { as: 'oneStem', origin: [17, 6.9], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.12 },
      { as: 'zero', origin: [18, 17], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.18 },
      nudge([8, 6], 0, -2.6, { as: 'head', delay: 0.04 }),
      nudge([8, 12.5], 0, -2.4, { as: 'shaft' }),
    ],
  },
  'arrow-up-right-02': {
    verb: 'the filled head leads up-right, the shaft following along the same diagonal',
    parts: [
      nudge([9.5, 14.5], 2.1, -2.1, { as: 'shaft', delay: 0.04 }),
      nudge([14.4, 9.6], 2.1, -2.1, { as: 'head' }),
    ],
  },
  'arrow-up-right-03': {
    verb: 'both strokes of the open arrow travel up-right together',
    parts: [
      nudge([11.3, 12.8], 2.1, -2.1, { as: 'shaft' }),
      nudge([13.2, 10.8], 2.1, -2.1, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-up-right-stack': {
    verb: 'the three stacked sheets peel up-right, nearest first',
    parts: [
      nudge([9.5, 14.5], 1.4, -1.4, { as: 'front' }),
      nudge([10, 14], 1.8, -1.8, { as: 'mid', delay: 0.08 }),
      nudge([12, 12], 2.2, -2.2, { as: 'back', delay: 0.16 }),
    ],
  },
  'arrow-up-right': {
    verb: 'the fused arrow travels up-right and settles — same diagonal as arrow-up-right-01',
    parts: [squash([12.2, 11.8], 2.1, -2.1)],
  },
  'arrow-up-to-line': {
    verb: 'the arrow lifts onto the top line, which takes the weight',
    parts: [
      { as: 'shaft', origin: [12, 21], transform: ['translateY(0px) scaleY(1)', 'translateY(-1.6px) scaleY(0.86)', 'translateY(0.2px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 0.72, 1], ease: [INOUT, OUT, OUT], dur: 0.54 },
      { as: 'line', origin: [12, 3], transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      nudge([12, 9.5], 0, -2.4, { as: 'head', delay: 0.04 }),
    ],
  },
  'arrow-up-wide-narrow': {
    verb: 'the three rows shrink bottom to top from wide to narrow, while the arrow lifts past them',
    parts: [
      grow([11, 12], 'X', { as: 'wide' }),
      grow([11, 16], 'X', { as: 'mid', delay: 0.08 }),
      grow([11, 20], 'X', { as: 'narrow', delay: 0.16 }),
      nudge([7, 6], 0, -2.6, { as: 'head', delay: 0.04 }),
      nudge([7, 12.5], 0, -2.4, { as: 'shaft' }),
    ],
  },
  'arrow-up-za': {
    verb: 'the arrow lifts first, then Z sits above A — reverse of az',
    parts: [
      nudge([7.8, 12.5], 0, -2.4, { as: 'shaft' }),
      nudge([7.8, 6], 0, -2.6, { as: 'head', delay: 0.04 }),
      { as: 'letterZ', origin: [17.8, 7], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.1 },
      { as: 'letterA', origin: [17.8, 17], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.16 },
    ],
  },
  'arrow-up-zero-one': {
    verb: 'the arrow lifts, then 0 sits above 1 — descending digits under an up sort',
    parts: [
      { as: 'oneStem', origin: [17, 16.9], transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.16 },
      { as: 'oneBar', origin: [18, 20], transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1.06)', 'scaleX(1)'], times: [0, 0.16, 0.6, 1], ease: OUT, dur: 0.5, delay: 0.2 },
      { as: 'zero', origin: [18, 7], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.52, delay: 0.1 },
      nudge([8, 6], 0, -2.6, { as: 'head', delay: 0.04 }),
      nudge([8, 12.5], 0, -2.4, { as: 'shaft' }),
    ],
  },
  'arrow-up': {
    verb: 'the chevron lifts and squashes — same mark as arrow-up-01',
    parts: [squash([12, 12], 0, -2.6, { dur: 0.54 })],
  },
  'arrow-vertical': {
    verb: 'the two heads pull the bar apart, then it springs back to length',
    parts: [
      nudge([12, 3.5], 0, -2.2, { as: 'headTop' }),
      nudge([12, 20.5], 0, 2.2, { as: 'headBottom', delay: 0.06 }),
      { as: 'bar', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(1.12)', 'scaleY(0.97)', 'scaleY(1)'], times: [0, 0.42, 0.74, 1], ease: OUT, dur: 0.56, delay: 0.04 },
    ],
  },
}
