/**
 * Page 2 — ai-file → album-not-found-01.
 *
 * Every icon is choreographed against its own name, geometry and direction.
 * `parts` is positional: one entry per SVG primitive, `null` keeps it static.
 * airplane-take-off-01 and alarm-clock (handcrafted) are deliberately absent.
 */

import { OUT, INOUT, beat, compute, draw, spinStar, stamp, sweep, twinkle } from './_kit.mjs'

export default {
  // ai-* containers: the machine part does the thinking, the subject keeps its own gesture.
  'ai-file': {
    verb: 'the page lifts off the stack as the spark signs it',
    parts: [
      { as: 'page', origin: [11, 22], transform: ['translateY(0px) scale(1)', 'translateY(-1.5px) scale(1.012)', 'translateY(0px) scale(1)'], times: [0, 0.42, 1], ease: OUT, dur: 0.58 },
      twinkle([17.5, 18.5], { delay: 0.12 }),
    ],
  },
  'ai-folder-01': {
    verb: 'the folder opens and feeds three branches, the middle one dropping first',
    parts: [
      { as: 'folder', origin: [12, 18.5], transform: ['translateY(0px) scaleY(1)', 'translateY(-0.8px) scaleY(1.04)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.6 },
      { as: 'branchRight', origin: [16, 16], transform: ['scale(1)', 'scale(0.28)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.16 },
      { as: 'branchLeft', origin: [8, 16], transform: ['scale(1)', 'scale(0.28)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.08 },
      { as: 'branchDown', origin: [12, 16], transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.52 },
    ],
  },
  'ai-folder-02': {
    verb: 'the folder tips open and the chip inside runs its pass',
    parts: [
      { as: 'folder', origin: [2, 18.5], transform: ['rotate(0deg)', 'rotate(-1.6deg)', 'rotate(0.4deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.62 },
      compute([12, 17], { delay: 0.12 }),
    ],
  },
  'ai-folder': {
    verb: 'the outer branches answer first, then the middle one, and the folder tips with them',
    parts: [
      { as: 'folder', origin: [22, 18.5], transform: ['rotate(0deg)', 'rotate(1.6deg)', 'rotate(-0.4deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.62 },
      { as: 'branchRight', origin: [16, 16], transform: ['scale(1)', 'scale(0.28)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.52 },
      { as: 'branchLeft', origin: [8, 16], transform: ['scale(1)', 'scale(0.28)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.07 },
      { as: 'branchDown', origin: [12, 16], transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.08)', 'scaleY(1)'], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.52, delay: 0.15 },
    ],
  },
  'ai-game': {
    verb: 'the pad rumbles while the two buttons are pressed in turn',
    parts: [
      { as: 'pad', origin: [12, 14], transform: ['translateX(0px) rotate(0deg)', 'translateX(-0.5px) rotate(-1deg)', 'translateX(0.5px) rotate(1deg)', 'translateX(0px) rotate(0deg)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.56 },
      { as: 'buttonLeft', origin: [7.25, 11.75], transform: ['scale(1)', 'scale(2.4)', 'scale(1)'], opacity: [1, 0.5, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.36 },
      { as: 'buttonRight', origin: [16.75, 11.75], transform: ['scale(1)', 'scale(2.4)', 'scale(1)'], opacity: [1, 0.5, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.36, delay: 0.18 },
      twinkle([12, 6], { delay: 0.3 }),
    ],
  },
  'ai-generative': {
    verb: 'the star turns a quarter onto itself and the frame takes what it made',
    parts: [
      beat([12, 14], { delay: 0.24 }),
      spinStar([18, 6]),
    ],
  },
  'ai-idea': {
    verb: 'the bulb dims for an instant, then flares — the idea landing',
    parts: [
      { as: 'bulb', origin: [11.5, 19], transform: ['scale(1)', 'scale(0.962)', 'scale(1.05)', 'scale(1)'], opacity: [1, 0.5, 1, 1], times: [0, 0.24, 0.58, 1], ease: OUT, dur: 0.68 },
      twinkle([16.5, 5.5], { delay: 0.16 }),
      { as: 'screw', origin: [11.5, 19], transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1)'], times: [0, 0.3, 1], ease: OUT, dur: 0.5 },
    ],
  },
  'ai-image': {
    verb: 'the ridge redraws itself left to right, the sun pops back in, the spark signs off',
    parts: [
      { as: 'sun', origin: [7, 8], transform: ['scale(1)', 'scale(0)', 'scale(1.28)', 'scale(1)'], times: [0, 0.2, 0.64, 1], ease: OUT, dur: 0.58, delay: 0.12 },
      beat([11.5, 12.5], { delay: 0.3 }),
      twinkle([18.5, 5.5], { delay: 0.38 }),
      { as: 'ridge', ...sweep({ dur: 0.92 }) },
    ],
  },
  'ai-innovation-01': {
    verb: 'the pins carry current, the chip works it through, and the bulb lights last',
    parts: [
      { as: 'bulb', origin: [7, 14], transform: ['scale(1)', 'scale(0.97)', 'scale(1.04)', 'scale(1)'], opacity: [1, 0.5, 1, 1], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.62, delay: 0.22 },
      compute([16, 8], { delay: 0.1 }),
      { as: 'pins', origin: [16, 8], transform: ['scale(1)', 'scale(0.86)', 'scale(1.04)', 'scale(1)'], opacity: [1, 0.35, 1, 1], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5 },
      { as: 'collar', origin: [11, 17.5], transform: ['scaleX(1)', 'scaleX(0.94)', 'scaleX(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46, delay: 0.26 },
      null,
    ],
  },
  'ai-innovation-02': {
    verb: 'the letter resolves inside the glass and the dome lights around it',
    parts: [
      { as: 'dome', origin: [12, 14], transform: ['scale(1)', 'scale(0.972)', 'scale(1.04)', 'scale(1)'], opacity: [1, 0.55, 1, 1], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.62, delay: 0.18 },
      { as: 'collar', origin: [12, 17.5], transform: ['scaleX(1)', 'scaleX(0.94)', 'scaleX(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46, delay: 0.24 },
      null,
      stamp([11.5, 12], { as: 'letter', dur: 0.56 }),
    ],
  },
  'ai-innovation-03': {
    verb: 'the two filaments strike inward and the dome catches fire between them',
    parts: [
      { as: 'dome', origin: [12, 14], transform: ['scale(1)', 'scale(0.97)', 'scale(1.045)', 'scale(1)'], opacity: [1, 0.5, 1, 1], times: [0, 0.3, 0.64, 1], ease: OUT, dur: 0.64, delay: 0.2 },
      { as: 'collar', origin: [12, 17.5], transform: ['scaleX(1)', 'scaleX(0.94)', 'scaleX(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46, delay: 0.26 },
      null,
      { as: 'filamentLeft', origin: [8.25, 9.75], transform: ['scale(1)', 'scale(0.3)', 'scale(1.08)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.5 },
      { as: 'filamentRight', origin: [15.75, 9.75], transform: ['scale(1)', 'scale(0.3)', 'scale(1.08)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.08 },
    ],
  },
  'ai-innovation': {
    verb: 'the bulb sparks first and the chip answers it, pins last',
    parts: [
      { as: 'bulb', origin: [7, 14], transform: ['scale(1)', 'scale(0.96)', 'scale(1.05)', 'scale(1)'], opacity: [1, 0.48, 1, 1], times: [0, 0.26, 0.6, 1], ease: OUT, dur: 0.6 },
      compute([16, 8], { delay: 0.2 }),
      { as: 'pins', origin: [16, 8], transform: ['scale(1)', 'scale(0.88)', 'scale(1.04)', 'scale(1)'], opacity: [1, 0.35, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.5, delay: 0.3 },
      null,
      { as: 'base', origin: [11, 19], transform: ['scaleY(1)', 'scaleY(0.92)', 'scaleY(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.46 },
    ],
  },
  'ai-laptop': {
    verb: 'the lid swings open on its hinge and the chip runs its pass',
    parts: [
      { as: 'lid', origin: [4, 15], transform: ['rotate(0deg)', 'rotate(-7deg)', 'rotate(1.6deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.7 },
      { as: 'deck', origin: [12, 22], transform: ['scaleX(1)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.5 },
      compute([17, 7], { delay: 0.16 }),
    ],
  },
  'ai-learning': {
    verb: 'the ribbon runs down the page as the mind above it turns over',
    parts: [
      { as: 'ribbon', origin: [12, 15.5], transform: ['scaleY(1)', 'scaleY(0.26)', 'scaleY(1.1)', 'scaleY(1)'], times: [0, 0.28, 0.68, 1], ease: OUT, dur: 0.58 },
      { as: 'book', origin: [12, 21], transform: ['scale(1)', 'scale(0.978)', 'scale(1.014)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.54 },
      { as: 'mind', origin: [12, 8], transform: ['scale(1)', 'scale(0.9)', 'scale(1.06)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.6, delay: 0.12 },
    ],
  },
  'ai-lock': {
    verb: 'the shackle lifts clear and drops back, the body taking the weight',
    parts: [
      stamp([11.5, 15.5], { as: 'letter', delay: 0.24, dur: 0.48 }),
      { as: 'body', origin: [12, 22], transform: ['scaleY(1)', 'scaleY(1)', 'scaleY(0.955)', 'scaleY(1)'], times: [0, 0.42, 0.66, 1], ease: OUT, dur: 0.68 },
      { as: 'shackle', origin: [12, 9], transform: ['translateY(0px)', 'translateY(-1.9px)', 'translateY(0.35px)', 'translateY(0px)'], times: [0, 0.4, 0.72, 1], ease: [OUT, INOUT, OUT], dur: 0.68 },
    ],
  },
  'ai-magic': {
    verb: 'the two sparks turn against each other, the big one one way, the small one the other',
    parts: [
      spinStar([10, 14], { dur: 0.84 }),
      { as: 'sparkSmall', origin: [18, 6], transform: ['rotate(0deg) scale(1)', 'rotate(-46deg) scale(0.6)', 'rotate(-90deg) scale(1.16)', 'rotate(-90deg) scale(1)'], times: [0, 0.36, 0.76, 1], ease: OUT, dur: 0.84, delay: 0.1 },
    ],
  },
  'ai-mail-01': {
    verb: 'the flap folds flat and springs back — the envelope opening',
    parts: [
      { as: 'flap', origin: [12, 8], transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.14)', 'scaleY(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.6 },
      beat([12, 11.5], { delay: 0.1 }),
      twinkle([18.5, 17.5], { delay: 0.22 }),
    ],
  },
  'ai-mail-02': {
    verb: 'the wide flap drops the full width of the envelope before lifting again',
    parts: [
      { as: 'flap', origin: [12, 5.5], transform: ['scaleY(1) scaleX(1)', 'scaleY(0.06) scaleX(0.96)', 'scaleY(1.16) scaleX(1.01)', 'scaleY(1) scaleX(1)'], times: [0, 0.34, 0.72, 1], ease: OUT, dur: 0.68 },
      beat([12, 11.5], { delay: 0.14 }),
      twinkle([18.5, 17.5], { delay: 0.26 }),
    ],
  },
  'ai-mail': {
    verb: 'the letter slides up out of the envelope, its lettering arriving with it',
    parts: [
      null,
      { as: 'flap', origin: [12, 10], transform: ['scaleY(1)', 'scaleY(0.88)', 'scaleY(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.54, delay: 0.1 },
      { as: 'letter', origin: [12, 12], transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(0.2px)', 'translateY(0px)'], times: [0, 0.4, 0.72, 1], ease: [OUT, INOUT, OUT], dur: 0.7 },
      { as: 'lettering', origin: [11.5, 7.5], transform: ['translateY(0px) scale(1)', 'translateY(-2.4px) scale(0.9)', 'translateY(0.2px) scale(1.04)', 'translateY(0px) scale(1)'], opacity: [1, 0.55, 1, 1], times: [0, 0.4, 0.72, 1], ease: [OUT, INOUT, OUT], dur: 0.7 },
    ],
  },
  'ai-mic': {
    verb: 'the capsule rises to catch the voice while the spark keeps watch',
    parts: [
      { as: 'capsule', origin: [12, 16], transform: ['translateY(0px) scale(1)', 'translateY(-0.7px) scale(1.05)', 'translateY(0px) scale(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.6 },
      { as: 'cradle', origin: [12, 22], transform: ['scaleX(1)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.6, delay: 0.06 },
      twinkle([17, 5], { delay: 0.18 }),
    ],
  },
  'ai-network': {
    verb: 'current runs the ring corner by corner and the hub answers at the end',
    parts: [
      { as: 'legTopRight', origin: [21.25, 4.75], transform: ['scale(1)', 'scale(0.4)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.35, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.48, delay: 0.07 },
      { as: 'legBottomLeft', origin: [2.75, 19.25], transform: ['scale(1)', 'scale(0.4)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.35, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.48, delay: 0.21 },
      { as: 'legTopLeft', origin: [4.75, 2.75], transform: ['scale(1)', 'scale(0.4)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.35, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.48 },
      { as: 'legBottomRight', origin: [19.25, 21.25], transform: ['scale(1)', 'scale(0.4)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.35, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      beat([12, 12], { delay: 0.28 }),
      stamp([11.6, 12], { as: 'letter', delay: 0.32, dur: 0.46 }),
    ],
  },
  'ai-phone-01': {
    verb: 'the handset buzzes in place, home button lit, spark overhead',
    parts: [
      { as: 'handset', origin: [11, 12], transform: ['translateX(0px) rotate(0deg)', 'translateX(-0.6px) rotate(-0.9deg)', 'translateX(0.6px) rotate(0.9deg)', 'translateX(-0.25px) rotate(-0.35deg)', 'translateX(0px) rotate(0deg)'], times: [0, 0.2, 0.44, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'home', origin: [11, 18.75], transform: ['scale(1)', 'scale(2.2)', 'scale(1)'], opacity: [1, 0.55, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.44, delay: 0.1 },
      twinkle([17, 5], { delay: 0.2 }),
    ],
  },
  'ai-phone-02': {
    verb: 'the star blooms on the screen and the handset settles around it',
    parts: [
      beat([12, 12], { delay: 0.26 }),
      spinStar([12, 10]),
      { as: 'home', origin: [12, 18.75], transform: ['scale(1)', 'scale(1.9)', 'scale(1)'], opacity: [1, 0.6, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.42, delay: 0.3 },
    ],
  },
  'ai-phone': {
    verb: 'the handset tips into the hand, the spark trailing the tilt',
    parts: [
      { as: 'handset', origin: [11, 22], transform: ['rotate(0deg)', 'rotate(-3.4deg)', 'rotate(0.9deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.66 },
      { as: 'home', origin: [11, 18.75], transform: ['scale(1)', 'scale(1.8)', 'scale(1)'], opacity: [1, 0.6, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.44, delay: 0.16 },
      twinkle([17, 5], { delay: 0.26 }),
    ],
  },
  'ai-programming': {
    verb: 'the two brackets spread apart and the slash leans through the gap',
    parts: [
      beat([11.5, 14], { delay: 0.26 }),
      twinkle([18.5, 5.5], { delay: 0.34 }),
      { as: 'bracketRight', origin: [15.5, 14], transform: ['translateX(0px)', 'translateX(1.3px)', 'translateX(-0.2px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'bracketLeft', origin: [7.5, 14], transform: ['translateX(0px)', 'translateX(-1.3px)', 'translateX(0.2px)', 'translateX(0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'slash', origin: [11.5, 14], transform: ['rotate(0deg)', 'rotate(-11deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.62, delay: 0.06 },
    ],
  },
  'ai-scan': {
    verb: 'the corner brackets close in to lock focus and the subject pops into the frame',
    parts: [
      { as: 'brackets', origin: [12, 12], transform: ['scale(1)', 'scale(0.93)', 'scale(1.015)', 'scale(1)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'subject', origin: [12, 11.5], transform: ['scale(1)', 'scale(0.84)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.5, 1, 1], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.14 },
    ],
  },
  'ai-scheduling': {
    verb: 'the header rule redraws across the page and the star lands on the date',
    parts: [
      { as: 'pins', origin: [12, 5], transform: ['scaleY(1)', 'scaleY(0.78)', 'scaleY(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.5 },
      beat([12, 12.8], { delay: 0.3 }),
      { as: 'rule', ...sweep({ dur: 0.86 }) },
      stamp([12, 15], { as: 'star', delay: 0.3, dur: 0.54 }),
    ],
  },
  'ai-search-02': {
    verb: 'the glass pushes down its own handle line and pulls back',
    parts: [
      { as: 'handle', origin: [16, 16.5], transform: ['translate(0px, 0px) scale(1)', 'translate(0.9px, 0.9px) scale(1.06)', 'translate(0px, 0px) scale(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.62, delay: 0.04 },
      { as: 'lens', origin: [11, 11.5], transform: ['translate(0px, 0px)', 'translate(1.1px, 1.1px)', 'translate(-0.2px, -0.2px)', 'translate(0px, 0px)'], times: [0, 0.36, 0.7, 1], ease: OUT, dur: 0.62 },
      twinkle([15.5, 7], { delay: 0.2 }),
    ],
  },
  'ai-search': {
    verb: 'the glass rocks over what it is reading and the letter comes up sharp',
    parts: [
      { as: 'handle', origin: [17.5, 17.5], transform: ['rotate(0deg)', 'rotate(-5deg)', 'rotate(1.4deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.64 },
      { as: 'lens', origin: [11, 11], transform: ['rotate(0deg)', 'rotate(-5deg)', 'rotate(1.4deg)', 'rotate(0deg)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.64 },
      stamp([10.5, 11], { as: 'letter', delay: 0.18, dur: 0.5 }),
    ],
  },
  'ai-security-01': {
    verb: 'the shield absorbs a hit and the chip behind it keeps computing',
    parts: [
      compute([12, 11.5], { delay: 0.12 }),
      { as: 'shield', origin: [12, 12], transform: ['scale(1)', 'scale(0.94)', 'scale(1.03)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.56 },
    ],
  },
  'ai-security-02': {
    verb: 'the shield plants itself and the letter stamps into the middle of it',
    parts: [
      stamp([11.5, 11.5], { as: 'letter', delay: 0.14, dur: 0.52 }),
      { as: 'shield', origin: [12, 22], transform: ['translateY(0px) scale(1)', 'translateY(-1.1px) scale(1.02)', 'translateY(0.2px) scale(0.995)', 'translateY(0px) scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.6 },
    ],
  },
  'ai-security-03': {
    verb: 'the star turns a quarter inside a shield that keeps breathing around it',
    parts: [
      spinStar([12, 12]),
      { as: 'shield', origin: [12, 12], transform: ['scale(1)', 'scale(0.978)', 'scale(1.018)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.72, delay: 0.08 },
    ],
  },
  'ai-security': {
    verb: 'the shield rocks aside to take the blow and the chip rides it out',
    parts: [
      compute([12, 11.5], { delay: 0.18, dur: 0.5 }),
      { as: 'shield', origin: [12, 22], transform: ['rotate(0deg)', 'rotate(-2.8deg)', 'rotate(2.2deg)', 'rotate(-0.6deg)', 'rotate(0deg)'], times: [0, 0.24, 0.5, 0.76, 1], ease: OUT, dur: 0.7 },
    ],
  },
  'ai-setting': {
    verb: 'the cog notches round one tooth and the hub tightens with it',
    parts: [
      { as: 'hub', origin: [12, 11.5], transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.54, delay: 0.08 },
      { as: 'cog', origin: [12, 11.5], transform: ['rotate(0deg)', 'rotate(-9deg)', 'rotate(3deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.66 },
      twinkle([18.5, 18.5], { delay: 0.24 }),
    ],
  },
  'ai-sheets': {
    verb: 'the header rule runs across, the column rule runs down, then the row fills in',
    parts: [
      beat([12, 12], { delay: 0.4 }),
      { as: 'headerRule', ...sweep({ dur: 0.8 }) },
      { as: 'rowRule', ...sweep({ dur: 0.8, delay: 0.2 }) },
      twinkle([18, 17], { delay: 0.44 }),
      { as: 'columnRule', ...sweep({ dur: 0.8, delay: 0.1 }) },
    ],
  },
  'ai-smartwatch': {
    verb: 'the case takes a double beat and the three leads fire out to the right',
    parts: [
      { as: 'case', origin: [8.6, 12], transform: ['scale(1)', 'scale(1.05)', 'scale(1)', 'scale(1.03)', 'scale(1)'], times: [0, 0.18, 0.36, 0.54, 1], ease: OUT, dur: 0.78 },
      { as: 'leadTop', origin: [16, 9], transform: ['scale(1)', 'scale(0.42)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.48, delay: 0.14 },
      { as: 'leadBottom', origin: [16, 15], transform: ['scale(1)', 'scale(0.42)', 'scale(1.06)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.48, delay: 0.21 },
      { as: 'leadMiddle', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(0.42)', 'scaleX(1.06)', 'scaleX(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.48, delay: 0.07 },
      null,
      null,
    ],
  },
  'ai-user': {
    verb: 'the portrait settles into the frame and the spark signs the corner',
    parts: [
      beat([11.5, 12.5], { delay: 0.22 }),
      twinkle([18.5, 5.5], { delay: 0.3 }),
      { as: 'portrait', origin: [11.5, 17.5], transform: ['translateY(0px) scale(1)', 'translateY(-1.2px) scale(0.94)', 'translateY(0.15px) scale(1.02)', 'translateY(0px) scale(1)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.62 },
    ],
  },
  'ai-video': {
    verb: 'the play head pushes forward into the clip and eases back',
    parts: [
      { as: 'playHead', origin: [8.5, 12.5], transform: ['translateX(0px) scale(1)', 'translateX(1.3px) scale(1.06)', 'translateX(-0.2px) scale(0.99)', 'translateX(0px) scale(1)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.62 },
      beat([11.5, 12.5], { delay: 0.24 }),
      twinkle([18.5, 5.5], { delay: 0.32 }),
    ],
  },
  'ai-view': {
    verb: 'the three lashes flick up, the lid narrows and the pupil dilates',
    parts: [
      { as: 'lashLeft', origin: [7, 8], transform: ['scale(1)', 'scale(0.44)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.07 },
      { as: 'lashRight', origin: [17, 8], transform: ['scale(1)', 'scale(0.44)', 'scale(1.07)', 'scale(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.5, delay: 0.07 },
      { as: 'lashTop', origin: [12, 7], transform: ['scaleY(1)', 'scaleY(0.44)', 'scaleY(1.07)', 'scaleY(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.5 },
      { as: 'pupil', origin: [12, 16], transform: ['scale(1)', 'scale(0.68)', 'scale(1.14)', 'scale(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.12 },
      { as: 'lid', origin: [12, 16], transform: ['scaleY(1)', 'scaleY(0.84)', 'scaleY(1.03)', 'scaleY(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.1 },
    ],
  },
  'ai-vision-recognition': {
    verb: 'the lid narrows to read and the star turns a quarter behind it',
    parts: [
      { as: 'lid', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.72)', 'scaleY(1.05)', 'scaleY(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.66 },
      spinStar([12, 12], { delay: 0.1 }),
    ],
  },
  'ai-voice-generator': {
    verb: 'the generator writes the waveform once, left to right, and signs it off',
    parts: [
      twinkle([18, 17], { delay: 0.38 }),
      beat([12, 9], { delay: 0.3 }),
      { as: 'barFirst', origin: [6, 9], transform: ['scaleY(1)', 'scaleY(0.24)', 'scaleY(1.3)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5 },
      { as: 'barFourth', origin: [15, 9], transform: ['scaleY(1)', 'scaleY(0.24)', 'scaleY(1.3)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.18 },
      { as: 'barThird', origin: [12, 9], transform: ['scaleY(1)', 'scaleY(0.24)', 'scaleY(1.3)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.12 },
      { as: 'barFifth', origin: [18, 9], transform: ['scaleY(1)', 'scaleY(0.24)', 'scaleY(1.3)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.24 },
      { as: 'barSecond', origin: [9, 9], transform: ['scaleY(1)', 'scaleY(0.24)', 'scaleY(1.3)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.5, delay: 0.06 },
    ],
  },
  'ai-voice': {
    verb: 'the voice keeps talking, the wave travelling left to right across the panel',
    loops: true,
    parts: [
      { as: 'barSecond', origin: [9, 12.5], transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.66, delay: 0.09, repeat: Infinity, repeatDelay: 0.12 },
      null,
      { as: 'barThird', origin: [12, 12.5], transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.66, delay: 0.18, repeat: Infinity, repeatDelay: 0.12 },
      { as: 'barFourth', origin: [15, 12.5], transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.66, delay: 0.27, repeat: Infinity, repeatDelay: 0.12 },
      { as: 'barFirst', origin: [6, 12.5], transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.26)', 'scaleY(1)'], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.66, repeat: Infinity, repeatDelay: 0.12 },
      twinkle([18.5, 5.5], { dur: 0.9, repeat: Infinity, repeatDelay: 0.12 }),
    ],
  },
  'ai-web-browsing': {
    verb: 'the globe turns — both meridians squeezing edge-on — while the star holds the centre',
    parts: [
      spinStar([12, 12], { delay: 0.12 }),
      null,
      { as: 'meridianTop', origin: [12, 2], transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'], times: [0, 0.46, 1], ease: INOUT, dur: 0.82 },
      { as: 'meridianBottom', origin: [12, 22], transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1)'], times: [0, 0.46, 1], ease: INOUT, dur: 0.82 },
      { as: 'equator', origin: [12, 12], transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(1)'], opacity: [1, 0.45, 1], times: [0, 0.46, 1], ease: INOUT, dur: 0.82 },
    ],
  },
  aids: {
    verb: 'the ribbon takes two soft beats from the knot outward, one loop then the other',
    parts: [
      { as: 'loopRight', origin: [12, 8], transform: ['scale(1) rotate(0deg)', 'scale(1.055) rotate(-1.4deg)', 'scale(1) rotate(0deg)'], times: [0, 0.4, 1], ease: OUT, dur: 0.64 },
      { as: 'loopLeft', origin: [12, 8], transform: ['scale(1) rotate(0deg)', 'scale(1.055) rotate(1.4deg)', 'scale(1) rotate(0deg)'], times: [0, 0.4, 1], ease: OUT, dur: 0.64, delay: 0.1 },
    ],
  },
  'air-vent': {
    verb: 'air keeps pushing out of the louvres, the middle jet leading the two side curls',
    loops: true,
    parts: [
      null,
      { as: 'louvre', origin: [12, 10], transform: ['scaleX(1)', 'scaleX(0.96)', 'scaleX(1)'], times: [0, 0.4, 1], ease: INOUT, dur: 1, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'jetRight', origin: [16, 15], transform: ['translate(0px, 0px)', 'translate(0.9px, 1.2px)', 'translate(0px, 0px)'], opacity: [1, 0.28, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.86, delay: 0.2, repeat: Infinity, repeatDelay: 0.12 },
      { as: 'jetLeft', origin: [8, 15], transform: ['translate(0px, 0px)', 'translate(-0.9px, 1.2px)', 'translate(0px, 0px)'], opacity: [1, 0.28, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.86, delay: 0.2, repeat: Infinity, repeatDelay: 0.12 },
      { as: 'jetMiddle', origin: [12, 15], transform: ['translateY(0px)', 'translateY(1.8px)', 'translateY(0px)'], opacity: [1, 0.28, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.86, repeat: Infinity, repeatDelay: 0.12 },
    ],
  },
  airbnb: {
    verb: 'the mark leans in and swells — a host opening the door',
    parts: [
      { as: 'mark', origin: [12, 12.2], transform: ['scale(1) rotate(0deg)', 'scale(0.93) rotate(-3deg)', 'scale(1.045) rotate(1deg)', 'scale(1) rotate(0deg)'], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.64 },
    ],
  },
  'aircraft-game': {
    verb: 'the fighter banks left then right, wingtip lights blinking in turn',
    parts: [
      { as: 'airframe', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-5deg)', 'rotate(3.4deg)', 'rotate(0deg)'], times: [0, 0.32, 0.68, 1], ease: OUT, dur: 0.82 },
      { as: 'nose', origin: [12, 10.5], transform: ['scale(1)', 'scale(1.8)', 'scale(1)'], opacity: [1, 0.5, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.44, delay: 0.28 },
      { as: 'lightRight', origin: [20, 5.5], transform: ['scaleY(1)', 'scaleY(1.5)', 'scaleY(1)'], opacity: [1, 0.25, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.4, delay: 0.18 },
      { as: 'lightLeft', origin: [4, 5.5], transform: ['scaleY(1)', 'scaleY(1.5)', 'scaleY(1)'], opacity: [1, 0.25, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.4 },
    ],
  },
  airdrop: {
    verb: 'the beacon keeps reaching out ring by ring and the drop nudges down to meet it',
    loops: true,
    parts: [
      { as: 'beacon', origin: [12, 11], transform: ['scale(1)', 'scale(1.22)', 'scale(1)'], times: [0, 0.34, 1], ease: OUT, dur: 0.92, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'ringOuter', origin: [12, 11], transform: ['scale(1)', 'scale(1.05)', 'scale(1)'], opacity: [1, 0.3, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.92, delay: 0.26, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'ringInner', origin: [12, 11], transform: ['scale(1)', 'scale(1.08)', 'scale(1)'], opacity: [1, 0.35, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.92, delay: 0.12, repeat: Infinity, repeatDelay: 0.1 },
      { as: 'drop', origin: [12, 16], transform: ['translateY(0px)', 'translateY(1.1px)', 'translateY(0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.92, delay: 0.4, repeat: Infinity, repeatDelay: 0.1 },
    ],
  },
  'airplane-01': {
    verb: 'the airliner pitches up and surges along its own heading, up and to the right',
    clip: true,
    parts: [
      { as: 'airliner', origin: [12, 12], transform: ['translate(0%, 0%) rotate(0deg)', 'translate(4%, -2.6%) rotate(-1.6deg)', 'translate(13%, -8.4%) rotate(-3.4deg)', 'translate(3%, -1.8%) rotate(-0.8deg)', 'translate(0%, 0%) rotate(0deg)'], times: [0, 0.22, 0.46, 0.74, 1], ease: [OUT, 'linear', INOUT, OUT], dur: 1.02 },
    ],
  },
  'airplane-02': {
    verb: 'the jet rolls into a bank and the tail surfaces follow it a beat late',
    parts: [
      { as: 'tailplane', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(1.8deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.86, delay: 0.06 },
      { as: 'fin', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(1.8deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.86, delay: 0.09 },
      { as: 'fuselage', origin: [12, 12], transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(1.8deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.86 },
    ],
  },
  'airplane-landing-01': {
    verb: 'the airliner climbs back to its approach point, sinks onto the runway and the strip takes the touch',
    clip: true,
    parts: [
      { as: 'runway', origin: [22, 20], transform: ['scaleX(1)', 'scaleX(1)', 'scaleX(0.9)', 'scaleX(1.03)', 'scaleX(1)'], times: [0, 0.66, 0.78, 0.9, 1], ease: OUT, dur: 1.1 },
      { as: 'airliner', origin: [11.6, 10], transform: ['translate(0%, 0%) rotate(0deg)', 'translate(-8%, -13%) rotate(4.5deg)', 'translate(-8%, -13%) rotate(4.5deg)', 'translate(0.8%, 1.4%) rotate(-0.6deg)', 'translate(0%, 0%) rotate(0deg)'], times: [0, 0.3, 0.36, 0.78, 1], ease: [OUT, 'linear', INOUT, OUT], dur: 1.1 },
    ],
  },
  'airplane-landing-02': {
    verb: 'the airliner falls in from the right, flares once and rolls out along the strip',
    clip: true,
    parts: [
      { as: 'runway', origin: [2.5, 20], transform: ['scaleX(1)', 'scaleX(1)', 'scaleX(0.9)', 'scaleX(1.03)', 'scaleX(1)'], times: [0, 0.66, 0.78, 0.9, 1], ease: OUT, dur: 1.1 },
      { as: 'airliner', origin: [12, 10], transform: ['translate(0%, 0%) rotate(0deg)', 'translate(8%, -13%) rotate(-4.5deg)', 'translate(8%, -13%) rotate(-4.5deg)', 'translate(-0.8%, 1.4%) rotate(0.6deg)', 'translate(0%, 0%) rotate(0deg)'], times: [0, 0.3, 0.36, 0.78, 1], ease: [OUT, 'linear', INOUT, OUT], dur: 1.1 },
    ],
  },
  'airplane-landing': {
    verb: 'a long approach, a float in the flare, then a firm touchdown that ripples the strip twice',
    clip: true,
    parts: [
      { as: 'runway', origin: [14, 20], transform: ['scaleX(1)', 'scaleX(1)', 'scaleX(0.92)', 'scaleX(1.03)', 'scaleX(0.97)', 'scaleX(1)'], times: [0, 0.7, 0.8, 0.87, 0.94, 1], ease: OUT, dur: 1.24 },
      { as: 'airliner', origin: [11.6, 10], transform: ['translate(0%, 0%) rotate(0deg)', 'translate(-10%, -16%) rotate(5.5deg)', 'translate(-10%, -16%) rotate(5.5deg)', 'translate(-3%, -5%) rotate(2deg)', 'translate(-1.6%, -1.4%) rotate(0.6deg)', 'translate(0%, 0%) rotate(0deg)'], times: [0, 0.26, 0.34, 0.6, 0.8, 1], ease: [OUT, 'linear', INOUT, OUT, OUT], dur: 1.24 },
    ],
  },
  'airplane-mode-off': {
    verb: 'the bar strikes down across the aircraft and both halves dim under it',
    parts: [
      { as: 'lowerHalf', origin: [8.9, 15.1], transform: ['scale(1)', 'scale(1)', 'scale(0.93)', 'scale(0.94)', 'scale(1)'], opacity: [1, 1, 0.35, 0.4, 1], times: [0, 0.3, 0.5, 0.72, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.86 },
      { as: 'upperHalf', origin: [14.2, 8.7], transform: ['scale(1)', 'scale(1)', 'scale(0.93)', 'scale(0.94)', 'scale(1)'], opacity: [1, 1, 0.35, 0.4, 1], times: [0, 0.3, 0.5, 0.72, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.86 },
      { as: 'bar', ...draw({ dur: 0.86 }) },
    ],
  },
  'airplane-mode': {
    verb: 'the aircraft lifts straight up the way its nose points, and settles back level',
    parts: [
      { as: 'airliner', origin: [12, 22], transform: ['translateY(0px) rotate(0deg)', 'translateY(-2.2px) rotate(-1.4deg)', 'translateY(0.3px) rotate(0.4deg)', 'translateY(0px) rotate(0deg)'], times: [0, 0.4, 0.74, 1], ease: [OUT, INOUT, OUT], dur: 0.82 },
    ],
  },
  'airplane-seat-02': {
    verb: 'the seat back reclines on its base and the headrest follows it down',
    parts: [
      { as: 'headrest', origin: [12, 7], transform: ['rotate(0deg) translateY(0px)', 'rotate(-3.6deg) translateY(-0.4px)', 'rotate(0.9deg) translateY(0.1px)', 'rotate(0deg) translateY(0px)'], times: [0, 0.38, 0.74, 1], ease: OUT, dur: 0.76, delay: 0.05 },
      null,
      { as: 'seatBack', origin: [12, 21], transform: ['rotate(0deg)', 'rotate(-3.6deg)', 'rotate(0.9deg)', 'rotate(0deg)'], times: [0, 0.38, 0.74, 1], ease: OUT, dur: 0.76 },
      null,
    ],
  },
  'airplane-seat': {
    verb: 'the seat back tips away and the belt draws tight across the lap',
    parts: [
      { as: 'seatBack', origin: [8, 18], transform: ['rotate(0deg)', 'rotate(-4.2deg)', 'rotate(1.1deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.78 },
      { as: 'belt', origin: [18, 10.5], transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(1)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.6, delay: 0.14 },
      null,
    ],
  },
  'airplane-take-off-02': {
    verb: 'a rolling start down the strip, then a long flat climb away to the left',
    clip: true,
    parts: [
      { as: 'runway', origin: [22, 20], transform: ['scaleX(1)', 'scaleX(0.86)', 'scaleX(1.02)', 'scaleX(1)'], times: [0, 0.3, 0.62, 1], ease: OUT, dur: 1.04 },
      { as: 'airliner', origin: [11.9, 8.5], transform: ['translate(0%, 0%) rotate(0deg)', 'translate(-3%, -0.8%) rotate(1.4deg)', 'translate(-11%, -6%) rotate(3.6deg)', 'translate(-17%, -10%) rotate(4.2deg)', 'translate(-5%, -3%) rotate(1.2deg)', 'translate(0%, 0%) rotate(0deg)'], times: [0, 0.18, 0.4, 0.56, 0.82, 1], ease: [OUT, 'linear', 'linear', INOUT, OUT], dur: 1.04 },
    ],
  },
  'airplane-take-off': {
    verb: 'the nose comes up first, the tail drops, then the whole aircraft climbs off the strip',
    clip: true,
    parts: [
      { as: 'runway', ...sweep({ dur: 1 }) },
      { as: 'airliner', origin: [4, 12], transform: ['translate(0%, 0%) rotate(0deg)', 'translate(0.5%, 0%) rotate(-5.5deg)', 'translate(6%, -4%) rotate(-6.5deg)', 'translate(14%, -9.5%) rotate(-5deg)', 'translate(4%, -2.5%) rotate(-1.4deg)', 'translate(0%, 0%) rotate(0deg)'], times: [0, 0.2, 0.4, 0.58, 0.82, 1], ease: [OUT, 'linear', 'linear', INOUT, OUT], dur: 1 },
    ],
  },
  airplane: {
    verb: 'the airliner holds altitude and yaws gently, wings rocking through the air',
    parts: [
      { as: 'airliner', origin: [12, 12], transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-2.4deg) translate(0.6px, -0.3px)', 'rotate(1.6deg) translate(-0.4px, 0.2px)', 'rotate(-0.6deg) translate(0.15px, 0px)', 'rotate(0deg) translate(0px, 0px)'], times: [0, 0.26, 0.54, 0.78, 1], ease: OUT, dur: 0.98 },
    ],
  },
  'airplay-line': {
    verb: 'the cast mark rises into the screen and the screen acknowledges it',
    parts: [
      beat([12, 10], { delay: 0.14 }),
      { as: 'castMark', origin: [12, 22], transform: ['translateY(0px) scale(1)', 'translateY(-2.2px) scale(1.04)', 'translateY(0.2px) scale(0.99)', 'translateY(0px) scale(1)'], times: [0, 0.38, 0.72, 1], ease: OUT, dur: 0.68 },
    ],
  },
  airplay: {
    verb: 'the screen pulses as the stream connects and the cast mark snaps up from its base',
    parts: [
      { as: 'screen', origin: [12, 10], transform: ['scale(1)', 'scale(1.03)', 'scale(1)'], opacity: [1, 0.55, 1], times: [0, 0.38, 1], ease: OUT, dur: 0.62 },
      { as: 'castMark', origin: [12, 21], transform: ['scale(1)', 'scale(0.5)', 'scale(1.12)', 'scale(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.56, delay: 0.16 },
    ],
  },
  'airpod-01': {
    verb: 'the bud rises out of its case and drops back into the slot',
    parts: [
      beat([12, 12], { delay: 0.12 }),
      null,
      { as: 'bud', origin: [12, 11], transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(0.25px)', 'translateY(0px)'], times: [0, 0.4, 0.74, 1], ease: [OUT, INOUT, OUT], dur: 0.72 },
    ],
  },
  'airpod-02': {
    verb: 'the lid swings up on its hinge and the charge light blinks once inside',
    parts: [
      { as: 'case', origin: [12, 21], transform: ['scale(1)', 'scale(0.985)', 'scale(1.008)', 'scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.56, delay: 0.1 },
      null,
      { as: 'lid', origin: [3.5, 7], transform: ['rotate(0deg)', 'rotate(-6.5deg)', 'rotate(1.6deg)', 'rotate(0deg)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.7 },
      { as: 'chargeLight', origin: [12, 14], transform: ['scale(1)', 'scale(2.2)', 'scale(1)'], opacity: [1, 0.4, 1], times: [0, 0.42, 1], ease: OUT, dur: 0.46, delay: 0.28 },
    ],
  },
  'airpod-03': {
    verb: 'the left bud seats first, then the right — a pair going in',
    parts: [
      { as: 'budLeft', origin: [6.3, 7.5], transform: ['rotate(0deg) scale(1)', 'rotate(-5.5deg) scale(0.96)', 'rotate(1.4deg) scale(1.015)', 'rotate(0deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6 },
      { as: 'budRight', origin: [17.8, 7.5], transform: ['rotate(0deg) scale(1)', 'rotate(5.5deg) scale(0.96)', 'rotate(-1.4deg) scale(1.015)', 'rotate(0deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: OUT, dur: 0.6, delay: 0.14 },
    ],
  },
  airpod: {
    verb: 'the case lid parts along its seam and closes again over the bud',
    parts: [
      { as: 'case', origin: [12, 21.5], transform: ['scaleY(1)', 'scaleY(1.035)', 'scaleY(0.995)', 'scaleY(1)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.66 },
      { as: 'seam', origin: [12, 9], transform: ['translateY(0px) scaleX(1)', 'translateY(-1.6px) scaleX(1.05)', 'translateY(0.2px) scaleX(1)', 'translateY(0px) scaleX(1)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.66 },
      { as: 'bud', origin: [12, 9], transform: ['scale(1)', 'scale(0.9)', 'scale(1.03)', 'scale(1)'], times: [0, 0.36, 0.72, 1], ease: OUT, dur: 0.6, delay: 0.1 },
    ],
  },
  'airport-02': {
    verb: 'the approach lights run down the apron right to left while the mast pulses above the tower',
    parts: [
      null,
      { as: 'apronLightFirst', origin: [18, 18.5], transform: ['scale(1)', 'scale(2.4)', 'scale(1)'], opacity: [1, 0.3, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.4 },
      { as: 'apronLightSecond', origin: [14, 18.5], transform: ['scale(1)', 'scale(2.4)', 'scale(1)'], opacity: [1, 0.3, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.4, delay: 0.09 },
      { as: 'apronLightThird', origin: [10, 18.5], transform: ['scale(1)', 'scale(2.4)', 'scale(1)'], opacity: [1, 0.3, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.4, delay: 0.18 },
      { as: 'apronLightFourth', origin: [6, 18.5], transform: ['scale(1)', 'scale(2.4)', 'scale(1)'], opacity: [1, 0.3, 1], times: [0, 0.4, 1], ease: OUT, dur: 0.4, delay: 0.27 },
      { as: 'cab', origin: [16.5, 15], transform: ['scaleY(1)', 'scaleY(0.94)', 'scaleY(1)'], times: [0, 0.36, 1], ease: OUT, dur: 0.5, delay: 0.3 },
      null,
      { as: 'canopy', origin: [7, 8], transform: ['translateY(0px)', 'translateY(-0.7px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.56, delay: 0.06 },
      { as: 'mast', origin: [7, 4], transform: ['scaleY(1)', 'scaleY(0.5)', 'scaleY(1.12)', 'scaleY(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.54 },
    ],
  },
  'airport-tower': {
    verb: 'the mast sweeps its arc over and over while the control cab breathes below it',
    loops: true,
    parts: [
      { as: 'cab', origin: [12, 14], transform: ['scale(1)', 'scale(1.018)', 'scale(1)'], times: [0, 0.42, 1], ease: INOUT, dur: 1.1, repeat: Infinity, repeatDelay: 0.12 },
      null,
      null,
      { as: 'sweep', origin: [12, 2], transform: ['scaleX(1)', 'scaleX(0.3)', 'scaleX(1)'], opacity: [1, 0.45, 1], times: [0, 0.46, 1], ease: INOUT, dur: 1.1, repeat: Infinity, repeatDelay: 0.12 },
      { as: 'mast', origin: [12, 6], transform: ['scaleY(1)', 'scaleY(0.9)', 'scaleY(1)'], times: [0, 0.46, 1], ease: INOUT, dur: 1.1, repeat: Infinity, repeatDelay: 0.12 },
    ],
  },
  airport: {
    verb: 'the mast pulses, the canopy lifts and the jetway marks flick on down the pier',
    parts: [
      null,
      null,
      { as: 'jetway', origin: [18.5, 8.3], transform: ['scale(1)', 'scale(0.88)', 'scale(1.05)', 'scale(1)'], opacity: [1, 0.35, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.54, delay: 0.16 },
      { as: 'canopy', origin: [8, 12], transform: ['translateY(0px) scaleY(1)', 'translateY(-0.6px) scaleY(1.05)', 'translateY(0px) scaleY(1)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.06 },
      { as: 'roof', origin: [8, 7], transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0px)'], times: [0, 0.4, 1], ease: OUT, dur: 0.58, delay: 0.03 },
      { as: 'mast', origin: [8, 4], transform: ['scaleY(1)', 'scaleY(0.5)', 'scaleY(1.12)', 'scaleY(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.54 },
    ],
  },
  'al-aqsa-mosque': {
    verb: 'the dome rises, the finial catches the light and the two wings settle outward',
    parts: [
      null,
      null,
      { as: 'wingRight', origin: [18, 22], transform: ['translateX(0px)', 'translateX(0.8px)', 'translateX(0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.66, delay: 0.12 },
      { as: 'wingLeft', origin: [6, 22], transform: ['translateX(0px)', 'translateX(-0.8px)', 'translateX(0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.66, delay: 0.12 },
      { as: 'dome', origin: [12, 9.5], transform: ['translateY(0px) scale(1)', 'translateY(-1.2px) scale(1.04)', 'translateY(0px) scale(1)'], times: [0, 0.42, 1], ease: OUT, dur: 0.72 },
      { as: 'finial', origin: [12, 3], transform: ['scaleY(1)', 'scaleY(0.4)', 'scaleY(1.18)', 'scaleY(1)'], opacity: [1, 0.4, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.58, delay: 0.22 },
      { as: 'windows', origin: [12, 12], transform: ['scaleY(1)', 'scaleY(0.7)', 'scaleY(1.06)', 'scaleY(1)'], opacity: [1, 0.45, 1, 1], times: [0, 0.3, 0.68, 1], ease: OUT, dur: 0.56, delay: 0.3 },
      { as: 'cornice', ...sweep({ dur: 0.86 }) },
    ],
  },
  'alarm-clock-check': {
    verb: 'the bells ring once and the tick writes itself across the dial',
    parts: [
      beat([12, 12.5], { delay: 0.12 }),
      null,
      null,
      { as: 'bellLeft', origin: [5, 6], transform: ['rotate(0deg)', 'rotate(-9deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.5 },
      { as: 'bellRight', origin: [19, 6], transform: ['rotate(0deg)', 'rotate(9deg)', 'rotate(-4deg)', 'rotate(0deg)'], times: [0, 0.28, 0.62, 1], ease: OUT, dur: 0.5 },
      { as: 'tick', ...draw({ dur: 0.7, delay: 0.1 }) },
    ],
  },
  'alarm-clock-minus': {
    verb: 'the bar pinches shut across the dial and the bells give only a muted knock',
    parts: [
      beat([12, 12.5], { delay: 0.14 }),
      null,
      null,
      { as: 'bellLeft', origin: [5, 6], transform: ['rotate(0deg)', 'rotate(-4.5deg)', 'rotate(1.5deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46 },
      { as: 'bellRight', origin: [19, 6], transform: ['rotate(0deg)', 'rotate(4.5deg)', 'rotate(-1.5deg)', 'rotate(0deg)'], times: [0, 0.3, 0.66, 1], ease: OUT, dur: 0.46 },
      { as: 'bar', origin: [12, 12.5], transform: ['scaleX(1)', 'scaleX(0.28)', 'scaleX(1.08)', 'scaleX(1)'], times: [0, 0.32, 0.7, 1], ease: OUT, dur: 0.56, delay: 0.08 },
    ],
  },
  'alarm-clock-off': {
    verb: 'the bar strikes through and the bells slump silent under it',
    parts: [
      { as: 'dial', origin: [12, 12.5], transform: ['scale(1)', 'scale(1)', 'scale(0.955)', 'scale(0.965)', 'scale(1)'], opacity: [1, 1, 0.4, 0.45, 1], times: [0, 0.3, 0.5, 0.72, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.88 },
      null,
      { as: 'bar', ...draw({ dur: 0.88 }) },
      { as: 'bellLeft', origin: [4, 4], transform: ['rotate(0deg)', 'rotate(0deg)', 'rotate(7deg)', 'rotate(8deg)', 'rotate(0deg)'], opacity: [1, 1, 0.45, 0.5, 1], times: [0, 0.32, 0.52, 0.74, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.88 },
      { as: 'bellRight', origin: [22, 6], transform: ['rotate(0deg)', 'rotate(0deg)', 'rotate(-7deg)', 'rotate(-8deg)', 'rotate(0deg)'], opacity: [1, 1, 0.45, 0.5, 1], times: [0, 0.32, 0.52, 0.74, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.88 },
    ],
  },
  'alarm-clock-plus': {
    verb: 'the bells ring twice over and the cross stamps into the dial between them',
    parts: [
      beat([12, 12.5], { delay: 0.16 }),
      null,
      null,
      { as: 'bellLeft', origin: [5, 6], transform: ['rotate(0deg)', 'rotate(-10deg)', 'rotate(7deg)', 'rotate(-4deg)', 'rotate(0deg)'], times: [0, 0.2, 0.44, 0.7, 1], ease: OUT, dur: 0.66 },
      { as: 'bellRight', origin: [19, 6], transform: ['rotate(0deg)', 'rotate(10deg)', 'rotate(-7deg)', 'rotate(4deg)', 'rotate(0deg)'], times: [0, 0.2, 0.44, 0.7, 1], ease: OUT, dur: 0.66 },
      stamp([12, 12.5], { as: 'cross', delay: 0.14, dur: 0.54 }),
    ],
  },
  'alarm-smoke': {
    verb: 'the detector keeps sounding, the middle beam leading and the side beams answering',
    loops: true,
    parts: [
      null,
      { as: 'cone', origin: [12, 8], transform: ['scale(1)', 'scale(1.03)', 'scale(1)'], opacity: [1, 0.6, 1], times: [0, 0.36, 1], ease: OUT, dur: 0.84, repeat: Infinity, repeatDelay: 0.14 },
      { as: 'beamMiddle', origin: [12, 16], transform: ['scaleY(1)', 'scaleY(0.32)', 'scaleY(1.14)', 'scaleY(1)'], opacity: [1, 0.3, 1, 1], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.7, repeat: Infinity, repeatDelay: 0.14 },
      { as: 'beamRight', origin: [16, 16], transform: ['scaleY(1)', 'scaleY(0.32)', 'scaleY(1.14)', 'scaleY(1)'], opacity: [1, 0.3, 1, 1], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.7, delay: 0.1, repeat: Infinity, repeatDelay: 0.14 },
      { as: 'beamLeft', origin: [8, 16], transform: ['scaleY(1)', 'scaleY(0.32)', 'scaleY(1.14)', 'scaleY(1)'], opacity: [1, 0.3, 1, 1], times: [0, 0.28, 0.64, 1], ease: OUT, dur: 0.7, delay: 0.1, repeat: Infinity, repeatDelay: 0.14 },
    ],
  },
  'album-01': {
    verb: 'the top print slides off the stack to show the one behind, then the ridge redraws',
    parts: [
      { as: 'printBack', origin: [14, 14], transform: ['translate(0px, 0px)', 'translate(0.9px, -0.9px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.66, delay: 0.06 },
      { as: 'printFront', origin: [10, 10], transform: ['translate(0px, 0px)', 'translate(-0.9px, 0.9px)', 'translate(0px, 0px)'], times: [0, 0.42, 1], ease: OUT, dur: 0.66 },
      { as: 'ridge', ...sweep({ dur: 0.88, delay: 0.12 }) },
    ],
  },
  'album-02': {
    verb: 'the back print leads the shuffle, the hill redraws and the sun drops back in',
    parts: [
      { as: 'printBack', origin: [14, 14], transform: ['translate(0px, 0px)', 'translate(1.1px, -0.7px)', 'translate(0px, 0px)'], times: [0, 0.38, 1], ease: OUT, dur: 0.6 },
      { as: 'printFront', origin: [10, 10], transform: ['translate(0px, 0px)', 'translate(-0.7px, 1.1px)', 'translate(0px, 0px)'], times: [0, 0.38, 1], ease: OUT, dur: 0.6, delay: 0.08 },
      { as: 'hill', ...sweep({ dur: 0.86, delay: 0.14 }) },
      { as: 'sun', origin: [13, 7], transform: ['scale(1)', 'scale(0)', 'scale(1.3)', 'scale(1)'], times: [0, 0.22, 0.66, 1], ease: OUT, dur: 0.58, delay: 0.3 },
    ],
  },
  'album-not-found-01': {
    verb: 'the bar strikes across the stack and both prints recoil and go dim',
    parts: [
      { as: 'printBack', origin: [14, 14], transform: ['scale(1)', 'scale(1)', 'scale(0.95)', 'scale(0.96)', 'scale(1)'], opacity: [1, 1, 0.35, 0.4, 1], times: [0, 0.3, 0.5, 0.72, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.88, delay: 0.04 },
      { as: 'printFront', origin: [10, 10], transform: ['scale(1)', 'scale(1)', 'scale(0.95)', 'scale(0.96)', 'scale(1)'], opacity: [1, 1, 0.35, 0.4, 1], times: [0, 0.3, 0.5, 0.72, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.88 },
      { as: 'ridge', origin: [11.5, 13.5], transform: ['scale(1)', 'scale(1)', 'scale(0.93)', 'scale(0.94)', 'scale(1)'], opacity: [1, 1, 0.3, 0.35, 1], times: [0, 0.3, 0.5, 0.72, 1], ease: [OUT, OUT, 'linear', INOUT], dur: 0.88 },
      { as: 'bar', ...draw({ dur: 0.88 }) },
    ],
  },
}
