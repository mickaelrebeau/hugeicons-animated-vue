/**
 * Page 73 — user-warning-02 → wallet-03.
 *
 * Gallery page (80 public icons). Handcrafted originals skipped: `user`,
 * `video-01`, `volume-high`, `volume-mute-01`, `wallet-01`.
 *
 * Eyes blink or look around. Speakers pulse their waves, turn the plus or
 * the cross, or shudder. Records spin their glare around the spindle.
 * Waiters bow. VR headsets settle onto the face.
 *
 * Identical-geometry pairs get different jobs: uv / -01,
 * victory-finger / -01, villa / -01, virtual-reality-vr / -01, vynil / -01.
 * `video` shares geometry with the handcrafted `video-01` (lens opens), so its
 * REC dot blinks instead; `volume-mute` shares with `volume-mute-01` (speaker
 * slides out), so it shudders in place.
 *
 * `parts` is positional. Rest pose is always keyframe [0].
 */

import {
  DIR,
  INOUT,
  OUT,
  beat,
  blink,
  draw,
  flip,
  hand,
  hold,
  hop,
  lap,
  nudge,
  pop,
  retrace,
  ride,
  scaleFrom,
  settleSpecs,
  shake,
  stamp,
  swing,
  twinkle,
  wave,
} from './_kit.mjs'

// ---------------------------------------------------------------------------
// Page-local helpers

const C = [12, 12]
const out = (dx, dy) => [[0, 0], [dx, dy], [-dx * 0.15, -dy * 0.15], [0, 0], [0, 0]]
const wiggle = (pivot, c, deg, o = {}) => swing(pivot, c, [0, deg, -deg * 0.7, deg * 0.3, 0], o)
const line = (delay = 0, o = {}) => retrace({ as: 'line', dur: 0.5, delay, ...o })
const dimmed = (o = {}) => ({ as: 'dim', opacity: [1, 0.35, 0.35, 1], times: [0, 0.24, 0.7, 1], ease: OUT, dur: 0.7, ...o })
const quarter = (c, o = {}) => ({ as: 'mark', origin: c, transform: ['rotate(0deg) scale(1)', 'rotate(45deg) scale(0.8)', 'rotate(96deg) scale(1.08)', 'rotate(90deg) scale(1)'], times: [0, 0.34, 0.7, 1], ease: [INOUT, OUT, OUT], dur: 0.56, ...o })
const lid = (c, o = {}) => ({ as: 'eye', origin: c, transform: ['scaleY(1)', 'scaleY(0.1)', 'scaleY(1)'], times: [0, 0.3, 0.6], ease: 'easeInOut', dur: 0.6, ...o })
const boing = (c, o = {}) => ({
  as: 'logo',
  origin: c,
  transform: ['scale(1, 1)', 'scale(1.08, 0.9)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'],
  times: [0, 0.22, 0.5, 0.76, 1],
  ease: OUT,
  dur: 0.62,
  ...o,
})
/** A full spin around the icon centre for a part that is off-centre. */
const orbit = (c, o = {}) => swing(C, c, [0, 70, 250, 368, 360], { as: 'spin', times: [0, 0.2, 0.6, 0.86, 1], ease: [INOUT, 'linear', OUT, OUT], dur: 0.9, ...o })
const pinch = (o = {}) => ({ as: 'frame', origin: C, transform: ['scale(1)', 'scale(0.92)', 'scale(1.02)', 'scale(1)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.56, ...o })
const bar = (c, delay, o = {}) => ({ as: 'bar', origin: c, transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.3)', 'scaleY(1)'], times: [0, 0.3, 0.64, 1], ease: 'easeInOut', dur: 0.56, delay, ...o })
const headset = (c) => ride(c, [[0, 0], [0, -1.2], [0, 0.4], [0, 0], [0, 0]], { as: 'headset', times: [0, 0.3, 0.56, 0.8, 1] })

// ---------------------------------------------------------------------------

const specs = {
  'user-warning-02': {
    verb: 'the person flinches back and the bang stretches',
    parts: [ride([11.5, 17], out(-0.7, 0), { as: 'person' }), ride([11.5, 7.5], out(-0.7, 0), { as: 'person' }), scaleFrom('Y', [19, 6], [19, 8], [1, 1.3, 0.9, 1], { as: 'stem' }), pop([19, 13], 1.8, { as: 'dot', delay: 0.2 })],
  },
  'user-warning-03': {
    verb: 'the bang rattles and the head hops',
    parts: [hop([11.5, 7], 0.8, { delay: 0.14 }), null, shake([19.5, 8], { as: 'bang' }), shake([19.5, 13], { as: 'bang' })],
  },
  'user-warning': {
    verb: 'the bang blinks like a warning light',
    parts: [null, null, blink({ as: 'bang' }), blink({ as: 'bang' })],
  },
  'utility-pole': {
    verb: 'the crossarm sways and the insulators spark in turn',
    parts: [wiggle([12, 6], [12, 6], 5, { as: 'arm' }), null, null, blink({ delay: 0.1, dur: 0.6 }), blink({ dur: 0.6 })],
  },
  'uv-01': {
    verb: 'the sun swells with heat',
    parts: [pop(C, 1.12, { as: 'sun' })],
  },
  'uv-02': {
    verb: 'the sun rises over the line and its rays light up in turn',
    parts: [blink({ delay: 0.16, dur: 0.6 }), ride([12, 10.5], out(0, -1), { as: 'sun' }), blink({ delay: 0.08, dur: 0.6 }), blink({ delay: 0.24, dur: 0.6 }), blink({ dur: 0.6 }), blink({ delay: 0.24, dur: 0.6 }), null, null],
  },
  'uv-03': {
    verb: 'the sun rises and the ray dots flash',
    parts: [ride([11.5, 10.5], out(0, -1), { as: 'sun' }), null, null, blink({ delay: 0.12 })],
  },
  uv: {
    verb: 'the sun turns its rays once around',
    parts: [lap(C, 360, { as: 'sun' })],
  },
  vaccine: {
    verb: 'the plunger presses in and the drop pops out',
    parts: [ride([19.5, 4.5], out(-1, 1), { as: 'plunger' }), null, null, null, ride([16.8, 7.3], out(-1, 1), { as: 'plunger' }), null, pop([15, 18], 1.16, { as: 'drop', delay: 0.22 })],
  },
  'vacuum-cleaner': {
    verb: 'the head sweeps back and forth over the floor',
    parts: [
      ride([6, 19], [[0, 0], [-1, 0], [0.8, 0], [-0.4, 0], [0, 0]], { as: 'head', times: [0, 0.25, 0.55, 0.8, 1], ease: 'easeInOut', dur: 0.8 }),
      ride([9, 15.5], [[0, 0], [-1, 0], [0.8, 0], [-0.4, 0], [0, 0]], { as: 'head', times: [0, 0.25, 0.55, 0.8, 1], ease: 'easeInOut', dur: 0.8 }),
      null,
      line(0.1),
    ],
  },
  'validation-approval': {
    verb: 'the stamp presses down and the tick writes in',
    parts: [stamp([16.5, 17], { as: 'stamp' }), null, draw({ as: 'tick', delay: 0.2 }), null, null],
  },
  validation: {
    verb: 'the seal presses onto the badge and the tick writes in',
    parts: [ride([16.1, 7.9], out(-1, 1), { as: 'seal' }), beat([9, 15], { delay: 0.2 }), draw({ as: 'tick', delay: 0.22 })],
  },
  van: {
    verb: 'the van rolls forward and settles on its wheels',
    parts: [
      ride([16, 8.5], out(1.2, 0), { as: 'van' }),
      ride([12, 11.5], out(1.2, 0), { as: 'van' }),
      lap([17, 17], 360, { as: 'wheel', dur: 0.62, times: [0, 0.18, 0.46, 0.74, 1] }),
      lap([7, 17], 360, { as: 'wheel', dur: 0.62, times: [0, 0.18, 0.46, 0.74, 1] }),
    ],
  },
  variable: {
    verb: 'the x turns a quarter under the bar',
    parts: [null, null, quarter([12, 14.5])],
  },
  'vector-square': {
    verb: 'the anchor points pull out and the path answers',
    parts: [beat(C, { delay: 0.16 }), ride([5.5, 5.5], out(-1, -1), { as: 'anchor' }), ride([18.5, 5.5], out(1, -1), { as: 'anchor' }), ride([5.5, 18.5], out(-1, 1), { as: 'anchor' }), ride([18.5, 18.5], out(1, 1), { as: 'anchor' })],
  },
  'vegetarian-food': {
    verb: 'the leaf flutters on its stem',
    parts: [wiggle([12, 22], [17, 16], 10, { as: 'leaf' }), null],
  },
  'venetian-mask': {
    verb: 'the mask tilts and its eyes blink',
    parts: [lid([16.5, 12], { delay: 0.2 }), lid([7.5, 12], { delay: 0.2 }), wiggle([12, 12], C, 6, { as: 'mask' })],
  },
  versus: {
    verb: 'the slash cuts between them and the V and S hop in turn',
    parts: [draw({ as: 'slash' }), hop([7, 8], 1, { delay: 0.14 }), hop([16.5, 16], 1, { delay: 0.24 })],
  },
  'vertical-resize': {
    verb: 'the two arrows push apart from the bars',
    parts: [null, null, nudge([12, 8], 0, -1.6), nudge([12, 4.4], 0, -1.6), nudge([12, 19.6], 0, 1.6), nudge([12, 16], 0, 1.6)],
  },
  'vertical-scroll-point': {
    verb: 'the point scrolls up and down between the chevrons',
    parts: [
      ride(C, [[0, 0], [0, -2], [0, 2], [0, 0], [0, 0]], { as: 'point', times: [0, 0.28, 0.66, 0.9, 1], ease: 'easeInOut', dur: 0.86 }),
      wave([12, 5], { dur: 0.5 }),
      wave([12, 19], { dur: 0.5, delay: 0.3 }),
    ],
  },
  vest: {
    verb: 'the vest halves swing open and the button pops',
    parts: [ride([9, 12.1], out(-0.7, 0), { as: 'half' }), ride([16, 12.1], out(0.7, 0), { as: 'half' }), null, pop([10.5, 14], 1.8, { as: 'button', delay: 0.18 })],
  },
  viber: {
    verb: 'the handset rattles and the signal arcs ring',
    parts: [beat(C, { delay: 0.1 }), shake([12, 10.5], { as: 'handset' }), wave([15, 8], { delay: 0.12 }), wave([13.5, 9.5])],
  },
  vibrate: {
    verb: 'the phone buzzes and the side waves flicker',
    parts: [
      { as: 'phone', origin: C, transform: ['translateX(0px)', 'translateX(-0.6px)', 'translateX(0.6px)', 'translateX(-0.6px)', 'translateX(0.6px)', 'translateX(0px)'], times: [0, 0.16, 0.32, 0.48, 0.64, 0.8], ease: 'linear', dur: 0.6 },
      blink({ dur: 0.6 }),
      blink({ dur: 0.6, delay: 0.1 }),
    ],
  },

  // --- victory-finger -------------------------------------------------------------------------------
  'victory-finger-01': {
    verb: 'the victory sign pokes up twice',
    parts: [hand.poke([11.9, 11.9], DIR.up)],
  },
  'victory-finger-02': {
    verb: 'the victory sign winds back and thrusts up',
    parts: [hand.thrust([12.1, 12], DIR.up)],
  },
  'victory-finger-03': {
    verb: 'the victory sign lifts and holds',
    parts: [hand.hold([12, 11.9], DIR.up)],
  },
  'victory-finger': {
    verb: 'the victory sign wags from the wrist',
    parts: [hand.wag([11.9, 11.9], DIR.up)],
  },

  // --- video ----------------------------------------------------------------------------------------
  'video-02': {
    verb: 'the camera hops and its indicator blinks',
    parts: [blink({ as: 'rec', delay: 0.1 }), hop([9.5, 12], 0.8), hop([19.5, 12], 0.8)],
  },
  'video-ai': {
    verb: 'the sparkle twinkles and the play button pops',
    parts: [twinkle([19, 18]), pop([12.5, 11], 1.18, { as: 'play', delay: 0.12 }), null],
  },
  'video-camera-ai': {
    verb: 'the lens extends and both sparkles twinkle',
    parts: [scaleFrom('X', [17, 14.5], [19.5, 14.5], [1, 1.14, 0.98, 1], { as: 'lens' }), twinkle([10.5, 9.5], { delay: 0.12 }), null, twinkle([15.5, 4.5], { delay: 0.22 })],
  },
  'video-console': {
    verb: 'the d-pad turns and the buttons blink',
    parts: [null, quarter([8.5, 16.5]), null, blink({ delay: 0.12, dur: 0.6 }), blink({ dur: 0.6 })],
  },
  'video-off': {
    verb: 'the slash writes across and the camera dims',
    parts: [draw({ as: 'slash' }), dimmed(), dimmed()],
  },
  'video-replay': {
    verb: 'the ring winds back and the play button pops',
    parts: [swing(C, C, [0, -40, 8, -3, 0], { as: 'ring' }), pop([11.5, 12], 1.18, { as: 'play', delay: 0.18 })],
  },
  video: {
    verb: 'the record light blinks on the camera',
    parts: [null, null, blink({ as: 'rec' })],
  },
  videotape: {
    verb: 'the two reels spin and wind the tape',
    parts: [null, null, lap([8, 14], 360, { as: 'reel' }), lap([16, 14], 360, { as: 'reel', delay: 0.06 }), null],
  },
  'view-agenda': {
    verb: 'the two rows slide in from the side in turn',
    parts: [ride([12, 7], out(-1.4, 0), { as: 'row' }), ride([12, 17], out(-1.4, 0), { as: 'row', delay: 0.1 })],
  },
  'view-off-slash': {
    verb: 'the slash writes across and the eye dims',
    parts: [dimmed(), dimmed(), draw({ as: 'slash' })],
  },
  'view-off': {
    verb: 'the closed lid flutters and its lashes droop',
    parts: [
      scaleFrom('Y', [12, 8], [12, 11], [1, 0.6, 1.1, 1], { as: 'lid', times: [0, 0.3, 0.6, 1], ease: 'easeInOut', dur: 0.6 }),
      ride([15.8, 14.8], out(0, 0.6), { as: 'lash', delay: 0.06 }),
      ride([21, 12], out(0, 0.6), { as: 'lash', delay: 0.12 }),
      ride([3, 12], out(0, 0.6), { as: 'lash', delay: 0.12 }),
      ride([8.3, 14.8], out(0, 0.6), { as: 'lash', delay: 0.06 }),
    ],
  },
  'view-sidebar-left': {
    verb: 'the sidebar slides open and its items write in',
    parts: [null, nudge([9, 12], -1.2, 0, { as: 'edge' }), line(0.1), line(0.18)],
  },
  'view-sidebar-right': {
    verb: 'the sidebar slides open to the right and its items write in',
    parts: [null, nudge([15, 12], 1.2, 0, { as: 'edge' }), line(0.1), line(0.18)],
  },
  view: {
    verb: 'the pupil looks left and right',
    parts: [null, ride(C, [[0, 0], [-1.4, 0], [1.4, 0], [0, 0], [0, 0]], { as: 'pupil', times: [0, 0.26, 0.62, 0.86, 1], ease: 'easeInOut', dur: 0.86 })],
  },

  // --- villa ----------------------------------------------------------------------------------------
  'villa-01': {
    verb: 'the window lights up and the door answers',
    parts: [blink({ as: 'door', delay: 0.2, dur: 0.6 }), null, null, blink({ as: 'window' }), null, null],
  },
  'villa-02': {
    verb: 'the windows light in turn and the pool water ripples',
    parts: [
      null,
      blink({ delay: 0.1, dur: 0.6 }),
      blink({ delay: 0.3, dur: 0.6 }),
      blink({ dur: 0.6 }),
      blink({ delay: 0.2, dur: 0.6 }),
      null,
      ride([12, 18.5], [[0, 0], [0.8, 0], [-0.6, 0], [0.3, 0], [0, 0]], { as: 'water', dur: 0.8 }),
      ride([19.2, 20.5], [[0, 0], [-0.8, 0], [0.6, 0], [-0.3, 0], [0, 0]], { as: 'water', dur: 0.8 }),
      ride([6.8, 17.5], [[0, 0], [-0.8, 0], [0.6, 0], [-0.3, 0], [0, 0]], { as: 'water', dur: 0.8 }),
    ],
  },
  villa: {
    verb: 'the slanted roof lifts and drops back on',
    parts: [null, null, null, null, null, ride([7.5, 5], [[0, 0], [0, -1.2], [0, 0.3], [0, 0], [0, 0]], { as: 'roof' })],
  },
  vimeo: {
    verb: 'the v squashes and springs back',
    parts: [boing([13.2, 10.5])],
  },
  'vine-square': {
    verb: 'the vine writes itself inside the tile',
    parts: [retrace({ as: 'vine' }), beat(C, { delay: 0.24 })],
  },
  vine: {
    verb: 'the vine logo sways like a stalk',
    parts: [wiggle([12, 22], [12.1, 12.2], 6, { as: 'logo' })],
  },
  'vintage-clock': {
    verb: 'the pendulum swings and the hand ticks forward',
    parts: [
      null,
      null,
      null,
      null,
      swing([12, 10], [12.5, 9.5], [0, 30, 90, 95, 90], { as: 'hand', times: [0, 0.3, 0.6, 0.8, 1], ease: OUT }),
      swing([12, 14], [12, 16], [0, 16, -14, 8, 0], { as: 'pendulum', dur: 0.9 }),
      swing([12, 14], [12, 18], [0, 16, -14, 8, 0], { as: 'pendulum', dur: 0.9 }),
    ],
  },
  'virtual-reality-vr-01': {
    verb: 'the lens light blinks and the strap stretches',
    parts: [null, blink({ as: 'led' }), scaleFrom('X', [12, 9.5], [12, 9.5], [1, 1.06, 0.99, 1], { as: 'strap' })],
  },
  'virtual-reality-vr-02': {
    verb: 'the VR letters pop out of the frame',
    parts: [beat(C, { delay: 0.16 }), pop([12, 12.5], 1.16, { as: 'letters' })],
  },
  'virtual-reality-vr': {
    verb: 'the headset settles down onto the face',
    parts: [headset([12, 14.5]), headset([17, 13]), headset([12, 9.5])],
  },
  vision: {
    verb: 'the frame closes in and the eye blinks',
    parts: [pinch(), lid(C, { delay: 0.14 }), lid(C, { delay: 0.14 })],
  },
  'visual-studio-code': {
    verb: 'the logo flaps like a ribbon',
    parts: [wiggle([17, 12], [11.9, 12], -6, { as: 'logo' })],
  },
  'vk-square': {
    verb: 'the VK hops inside its tile',
    parts: [beat(C, { delay: 0.2 }), hop(C, 1)],
  },
  vk: {
    verb: 'the VK squashes and springs back',
    parts: [boing([11.9, 12])],
  },
  'voice-id': {
    verb: 'the voice bars bounce inside the scan frame',
    parts: [pinch({ delay: 0.2 }), bar(C, 0)],
  },
  voice: {
    verb: 'the voice bars bounce from the middle out',
    parts: [null, bar([12, 12], 0), bar([9, 12], 0.06), bar([6, 12], 0.12), bar([15, 12], 0.06), bar([18, 12], 0.12)],
  },
  volleyball: {
    verb: 'the ball spins once',
    parts: [null, orbit([14.5, 11.5]), orbit([14.8, 6.6]), orbit([14.7, 16.5]), orbit([7, 11.5])],
  },
  'volume-low': {
    verb: 'the wave pulses from the speaker',
    parts: [wave([19.5, 12]), beat([9.9, 12], { delay: 0.1 })],
  },
  'volume-minus': {
    verb: 'the minus shrinks to a point and stretches back',
    parts: [beat([7.9, 12], { delay: 0.1 }), { as: 'minus', origin: [19.5, 12], transform: ['scaleX(1)', 'scaleX(0.2)', 'scaleX(1.1)', 'scaleX(1)'], times: [0, 0.3, 0.66, 1], ease: [INOUT, OUT, OUT], dur: 0.54 }],
  },
  'volume-mute-02': {
    verb: 'the cross turns a quarter beside the speaker',
    parts: [null, quarter([20, 12])],
  },
  'volume-mute': {
    verb: 'the silent speaker shudders in place',
    parts: [shake(C, { as: 'speaker' })],
  },
  'volume-off': {
    verb: 'the slash writes across and the waves fade',
    parts: [draw({ as: 'slash' }), dimmed({ delay: 0.06 }), dimmed({ delay: 0.12 }), null],
  },
  'volume-up': {
    verb: 'the plus turns a quarter and the speaker answers',
    parts: [beat([7.9, 12], { delay: 0.16 }), quarter([19.5, 12])],
  },
  vomiting: {
    verb: 'the face heaves and the drips fall in turn',
    parts: [
      ride([12, 10.3], out(0, -0.6), { as: 'face' }),
      ride([12, 9.5], out(0, -0.6), { as: 'face' }),
      ride([12, 17], out(0, -0.6), { as: 'face' }),
      { as: 'drip', origin: [12, 20], transform: ['translateY(0px)', 'translateY(2px)', 'translateY(-1px)', 'translateY(0px)'], opacity: [1, 0, 0, 1], times: [0, 0.4, 0.42, 1], ease: ['easeIn', 'linear', OUT], dur: 0.7, delay: 0.1 },
      { as: 'drip', origin: [7.9, 19.3], transform: ['translateY(0px)', 'translateY(2px)', 'translateY(-1px)', 'translateY(0px)'], opacity: [1, 0, 0, 1], times: [0, 0.4, 0.42, 1], ease: ['easeIn', 'linear', OUT], dur: 0.7, delay: 0.18 },
      { as: 'drip', origin: [16.1, 19.3], transform: ['translateY(0px)', 'translateY(2px)', 'translateY(-1px)', 'translateY(0px)'], opacity: [1, 0, 0, 1], times: [0, 0.4, 0.42, 1], ease: ['easeIn', 'linear', OUT], dur: 0.7, delay: 0.26 },
    ],
  },
  voucher: {
    verb: 'the scissors snip along the coupon edge',
    parts: [ride([6.5, 8], [[0, 0], [0.8, 0.8], [0.2, 0.2], [0.8, 0.8], [0, 0]], { as: 'scissors', times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut', dur: 0.8 }), null],
  },
  'vr-glasses': {
    verb: 'the glasses settle down and the lens light blinks',
    parts: [headset([12, 14]), blink({ as: 'led', delay: 0.2 }), headset([12, 9])],
  },
  vr: {
    verb: 'the headset hops and the 360 arrow sweeps round',
    parts: [hop([12, 8], 0.8), hop([6, 6], 0.8), retrace({ as: 'arc', delay: 0.1 })],
  },

  // --- vynil ----------------------------------------------------------------------------------------
  'vynil-01': {
    verb: 'the label pops and the glare flashes',
    parts: [null, blink({ as: 'glare', dur: 0.6 }), pop(C, 1.3, { as: 'label' })],
  },
  'vynil-02': {
    verb: 'the note bounces off the record and the label pops',
    parts: [null, hop([18.5, 6.5], 1.4), pop([11.5, 12.5], 1.3, { as: 'label', delay: 0.14 })],
  },
  'vynil-03': {
    verb: 'the tonearm drops onto the record and the glare spins',
    parts: [beat(C, { delay: 0.24 }), swing([16.5, 3], [16.5, 7], [0, -12, 3, -1, 0], { as: 'arm' }), orbit([12, 12], { delay: 0.1 }), orbit([10, 14], { delay: 0.1 })],
  },
  vynil: {
    verb: 'the record spins its glare once around',
    parts: [null, orbit([7.5, 7.5]), null],
  },

  // --- w --------------------------------------------------------------------------------------------
  'w-three-schools': {
    verb: 'the W squashes and the little 3 hops',
    parts: [boing([10.5, 13]), hop([20.5, 8.5], 1.2, { delay: 0.12 })],
  },
  waiter: {
    verb: 'the waiter bows and the bow tie flips',
    parts: [null, flip([12, 13.5], 1, { delay: 0.2 }), swing([12, 12], [12, 6], [0, 14, 14, 0, 0], { as: 'head', times: [0, 0.3, 0.6, 0.9, 1], dur: 0.8 })],
  },
  waiters: {
    verb: 'the two waiters bow in turn',
    parts: [null, flip([9.5, 13.5], 1, { delay: 0.2 }), swing([9.5, 12], [9.5, 6.5], [0, 14, 14, 0, 0], { as: 'head', times: [0, 0.3, 0.6, 0.9, 1], dur: 0.8 }), null, swing([16.5, 12], [16.5, 6.5], [0, 14, 14, 0, 0], { as: 'head', times: [0, 0.3, 0.6, 0.9, 1], dur: 0.8, delay: 0.14 })],
  },
  walking: {
    verb: 'the walker swings arms and legs mid-stride',
    parts: [
      wiggle([12, 9], [12, 10.1], 10, { as: 'arms' }),
      wiggle([12, 13], [12.6, 14.8], -6, { as: 'legs' }),
      wiggle([12, 13], [8, 18.3], -10, { as: 'legs' }),
      hop([13.5, 4.5], 0.5),
    ],
  },
  'wall-lamp': {
    verb: 'the shade swings on its arm and settles',
    parts: [null, null, null, wiggle([13.6, 3], [13.5, 10], 10, { as: 'shade' })],
  },
  'wallet-02': {
    verb: 'the coin drops into the wallet',
    parts: [beat([10.5, 5.5], { delay: 0.3 }), beat([12, 13.5], { delay: 0.3 }), null, { as: 'coin', origin: [10.5, 5], transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(1px)', 'translateY(0px)'], times: [0, 0.3, 0.6, 1], ease: [OUT, 'easeIn', OUT], dur: 0.66 }],
  },
  'wallet-03': {
    verb: 'the flap lifts open and the clasp blinks',
    parts: [null, scaleFrom('Y', [9, 8.5], [9, 5.5], [1, 1.16, 0.96, 1], { as: 'flap' }), blink({ as: 'clasp', delay: 0.2 })],
  },
}

export default settleSpecs(specs)
